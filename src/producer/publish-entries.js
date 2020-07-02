/* eslint-disable max-params */
/* eslint-disable new-cap */
/* eslint-disable camelcase */
/* eslint-disable max-depth */
/* eslint-disable no-console */
const Queue = require('../util/queue')
let config = require('../config')
const req = require('../util/request')
const {bulkPublish, publishEntry, iniatlizeLogger} = require('../consumer/publish')
const retryFailedLogs = require('../util/retryfailed')
const {validateFile} = require('../util/fs')

const queue = new Queue()

let skipCount
let logFileName
let contentTypesList = []
let allContentTypes = []
let bulkPublishSet = []

iniatlizeLogger(logFileName)

async function getEntries(contentType, locale, bulkPublish, environments, skip = 0) {
  skipCount = skip
  try {
    const conf = {
      uri: `${config.apiEndPoint}/v${config.apiVersion}/content_types/${contentType}/entries?locale=${locale || 'en-us'}&include_count=true&skip=${skipCount}&include_publish_details=true`,
      headers: {
        api_key: config.apikey,
        authorization: config.manageToken,
      },
    }
    const entriesResponse = await req(conf)
    skipCount += entriesResponse.entries.length
    entriesResponse.entries.forEach((entry, index) => {
      if (bulkPublish) {
        if (bulkPublishSet.length < 10) {
          bulkPublishSet.push({
            uid: entry.uid,
            content_type: contentType,
            locale,
            publish_details: entry.publish_details || [],
          })
        }

        if (bulkPublishSet.length === 10) {
          queue.Enqueue({
            entries: bulkPublishSet, locale, Type: 'entry', environments: environments,
          })
          bulkPublishSet = []
          return
        }

        if (index === entriesResponse.entries.length - 1 && bulkPublishSet.length <= 10) {
          queue.Enqueue({
            entries: bulkPublishSet, locale, Type: 'entry', environments: environments,
          })
          bulkPublishSet = []
        } // bulkPublish
      } else {
        queue.Enqueue({
          content_type: contentType, publish_details: entry.publish_details || [], environments: environments, entryUid: entry.uid, locale, Type: 'entry',
        })
      }
    })
    if (entriesResponse.count === skipCount) {
      bulkPublishSet = []
      return Promise.resolve()
    }
    return await getEntries(contentType, locale, skipCount)
  } catch (Err) {
    console.log(Err)
  }
  return true
}

async function getContentTypes(skip = 0, contentTypes = []) {
  skipCount = skip
  contentTypesList = contentTypes
  const conf = {
    uri: `${config.cdnEndPoint}/v${config.apiVersion}/content_types?include_count=true&skip=${skipCount}`,
    headers: {
      api_key: config.apikey,
      authorization: config.manageToken,
    },
  }
  try {
    const contentTypeResponse = await req(conf)
    if (contentTypeResponse.content_types.length > 0) {
      contentTypesList = [...contentTypesList, ...contentTypeResponse.content_types]
      skipCount += contentTypeResponse.content_types.length
      if (skipCount < contentTypeResponse.count) {
        return getContentTypes(skipCount, contentTypesList)
      }
      return contentTypesList
    }
    // return content_types
  } catch (err) {
    console.log(err)
  }
  return true
}

function setConfig(conf, bp) {
  if (bp) {
    queue.consumer = bulkPublish
    logFileName = 'bulkPublishEntries'
  } else {
    queue.consumer = publishEntry
    logFileName = 'PublishEntries'
  }
  config = conf
  queue.config = conf
}

async function start({retryFailed, bulkPublish, publishAllContentTypes, contentTypes, locales, environments}) {
  setConfig(config, bulkPublish)
  if (retryFailed) {
    if (typeof retryFailed === 'string') {
      if (!validateFile(retryFailed, ['PublishEntries', 'bulkPublishEntries'])) {
        return false
      }

      if (bulkPublish) {
        retryFailedLogs(retryFailed, queue, 'bulk')
      } else {
        retryFailedLogs(retryFailed, {entryQueue: queue}, 'publish')
      }
    }
  } else {
    try {
      if (publishAllContentTypes) {
        allContentTypes = await getContentTypes()
      } else {
        allContentTypes = contentTypes
      }
      for (let loc = 0; loc < locales.length; loc += 1) {
        for (let i = 0; i < allContentTypes.length; i += 1) {
          try {
            /* eslint-disable no-await-in-loop */
            await getEntries(allContentTypes[i].uid || allContentTypes[i], locales[loc], bulkPublish, environments)
            /* eslint-enable no-await-in-loop */
          } catch (err) {
            console.log(err)
          }
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = {
  getEntries,
  setConfig,
  getContentTypes,
  start,
}
