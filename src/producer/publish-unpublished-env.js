/* eslint-disable max-params */
/* eslint-disable max-depth */
/* eslint-disable unicorn/catch-error-name */
/* eslint-disable no-console */
/* eslint-disable new-cap */
/* eslint-disable camelcase */
const Queue = require('../util/queue')
let config = require('../config')
const req = require('../util/request')
const {bulkPublish, publishEntry, iniatlizeLogger} = require('../consumer/publish')
const retryFailedLogs = require('../util/retryfailed')
const {validateFile} = require('../util/fs')

const queue = new Queue()
let skipCount
let changedFlag = false
let logFileName = 'publish_unpublished_env'
let bulkPublishSet = []

function setConfig(conf, bp) {
  if (bp) {
    logFileName = 'Bulk_publish_draft'
    queue.consumer = bulkPublish
  } else {
    logFileName = 'publish_draft'
    queue.consumer = publishEntry
  }
  config = conf
  queue.config = config
}

iniatlizeLogger(logFileName)

async function getEnvironment(environmentName) {
  try {
    const options = {
      url: `${config.cdnEndPoint}/v${config.apiVersion}/environments/${environmentName}`,
      headers: {
        api_key: config.apikey,
        authorization: config.manageToken,
      },
    }
    const environment = await req(options)
    return environment
  } catch (error) {
    return Promise.reject(error)
  }
}

async function getEntries(contentType, environmentUid, locale, bulkPublish, environments, skip = 0) {
  skipCount = skip
  try {
    const conf = {
      url: `${config.apiEndPoint}/v${config.apiVersion}/content_types/${contentType}/entries`,
      qs: {
        include_count: true,
        skip: skipCount,
        include_publish_details: true,
      },
      headers: {
        api_key: config.apikey,
        authorization: config.manageToken,
      },
    }
    const responseEntries = await req(conf)
    skipCount += responseEntries.entries.length
    if (responseEntries.entries.length > 0) {
      responseEntries.entries.forEach((entry, index) => {
        // const locale = locale || 'en-us'
        const publishedEntry = entry.publish_details.find(publishEnv => publishEnv.environment === environmentUid && publishEnv.locale === locale)
        if (!publishedEntry) {
          changedFlag = true
          if (bulkPublish) {
            if (bulkPublishSet.length < 10) {
              bulkPublishSet.push({
                uid: entry.uid,
                content_type: contentType,
                locale,
                publish_details: entry.publish_details || [],
              })
            }
          } else {
            queue.Enqueue({
              content_type: contentType, publish_details: entry.publish_details, environments: environments, entryUid: entry.uid, locale, Type: 'entry',
            })
          }
        }
        if (bulkPublish) {
          if (bulkPublishSet.length === 10) {
            queue.Enqueue({
              entries: bulkPublishSet, locale, Type: 'entry', environments: environments,
            })
            bulkPublishSet = []
            return
          }
          if (index === responseEntries.entries.length - 1 && bulkPublishSet.length < 10 && bulkPublishSet.length > 0) {
            queue.Enqueue({
              entries: bulkPublishSet, locale, Type: 'entry', environments: environments,
            })
            bulkPublishSet = []
          }
        }
      })
    }
    if (responseEntries.count === skipCount) {
      if (!changedFlag) console.log(`No Draft Entries of contentType ${contentType} was found`)
      bulkPublishSet = []
      return Promise.resolve()
    }
    return await getEntries(contentType, environmentUid, skipCount)
  } catch (error) {
    return Promise.reject(error)
  }
}

async function start({sourceEnv, environments, locale, contentTypes, bulkPublish, retryFailed}) {
  setConfig(config, bulkPublish)
  if (retryFailed) {
    if (typeof retryFailed === 'string') {
      if (!validateFile(retryFailed, ['publish_draft', 'Bulk_publish_draft'])) {
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
      if (sourceEnv) {
        const environmentDetails = await getEnvironment(sourceEnv)
        for (let i = 0; i < contentTypes.length; i += 1) {
          try {
            /* eslint-disable no-await-in-loop */
            await getEntries(contentTypes[i], environmentDetails.environment.uid, locale, bulkPublish, environments)
            /* eslint-enable no-await-in-loop */
            changedFlag = false
          } catch (err) {
            console.log(err)
          }
        }
      }
    } catch (err) {
      console.log(err)
    }
  }
}

// start()

module.exports = {
  getEntries,
  getEnvironment,
  setConfig,
  start,
}
