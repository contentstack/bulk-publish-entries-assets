/* eslint-disable max-params */
/* eslint-disable new-cap */
/* eslint-disable complexity */
/* eslint-disable no-console */
/* eslint-disable camelcase */
const Queue = require('../util/queue')
let config = require('../config')
const req = require('../util/request')
const {
  bulkUnPublish, UnpublishEntry, UnpublishAsset, iniatlizeLogger,
} = require('../consumer/publish')
const retryFailedLogs = require('../util/retryfailed')
const {validateFile} = require('../util/fs')

const queue = new Queue()
const entryQueue = new Queue()
const assetQueue = new Queue()

let bulkUnPublishSet = []
let bulkUnPulishAssetSet = []
let logFileName

function setConfig(conf, bup) {
  if (bup) {
    logFileName = 'bulkUnpublish'
    queue.consumer = bulkUnPublish
  } else {
    logFileName = 'Unpublish'
    entryQueue.consumer = UnpublishEntry
    assetQueue.consumer = UnpublishAsset
  }
  config = conf
  queue.config = conf
  entryQueue.config = conf
  assetQueue.config = conf
}

let changedFlag = false

iniatlizeLogger(logFileName)

function getQueryParams(filter) {
  let queryString = ''
  Object.keys(filter).forEach(key => {
    if (filter[key]) {
      queryString = `${queryString}&${key}=${filter[key]}`
    }
  })

  return queryString
}

function bulkAction(items, bulkUnpublish, environment, locale) {
  items.forEach((item, index) => {
    changedFlag = true
    if (item.data.publish_details) {
      item.data.publish_details.version = item.data._version
    }

    if (bulkUnpublish) {
      if (bulkUnPublishSet.length < 10 && item.type === 'entry_published') {
        bulkUnPublishSet.push({
          uid: item.data.uid,
          content_type: item.content_type_uid,
          locale: item.data.publish_details.locale || 'en-us',
          version: item.data._version,
          publish_details: [item.data.publish_details] || [],
        })
      }

      if (bulkUnPulishAssetSet.length < 10 && item.type === 'asset_published') {
        bulkUnPulishAssetSet.push({
          uid: item.data.uid,
          version: item.data._version,
          publish_details: [item.data.publish_details] || [],
        })
      }

      if (bulkUnPulishAssetSet.length === 10) {
        queue.Enqueue({
          assets: bulkUnPulishAssetSet, Type: 'asset', locale: locale, environments: [environment],
        })
        bulkUnPulishAssetSet = []
        return
      }

      if (bulkUnPublishSet.length === 10) {
        queue.Enqueue({
          entries: bulkUnPublishSet, locale: locale, Type: 'entry', environments: [environment],
        })
        bulkUnPublishSet = []
        return
      }
      if (index === items.length - 1 && bulkUnPulishAssetSet.length <= 10 && bulkUnPulishAssetSet.length > 0) {
        queue.Enqueue({
          assets: bulkUnPulishAssetSet, Type: 'asset', locale: locale, environments: [environment],
        })
        bulkUnPulishAssetSet = []
        return
      }

      if (index === items.length - 1 && bulkUnPublishSet.length <= 10 && bulkUnPublishSet.length > 0) {
        queue.Enqueue({
          entries: bulkUnPublishSet, locale: locale, Type: 'entry', environments: [environment],
        })
        bulkUnPublishSet = []
      }
    } else {
      if (item.type === 'entry_published') {
        entryQueue.Enqueue({
          content_type: item.content_type_uid, publish_details: [item.data.publish_details], environments: [environment], entryUid: item.data.uid, locale: item.data.publish_details.locale || 'en-us', Type: 'entry',
        })
      }
      if (item.type === 'asset_published') {
        assetQueue.Enqueue({
          assetUid: item.data.uid, publish_details: [item.data.publish_details], environments: [environment], Type: 'entry',
        })
      }
    }
  })
}

async function getSyncEntries(locale, queryParams, bulkUnpublish, environment, deliveryToken, paginationToken = null) {
  try {
    const conf = {
      uri: `${config.cdnEndPoint}/v${config.apiVersion}/stacks/sync?${paginationToken ? `pagination_token=${paginationToken}` : 'init=true'}${queryParams}`,
      headers: {
        api_key: config.apikey,
        access_token: deliveryToken,
      },
    }
    const entriesResponse = await req(conf)
    if (entriesResponse.items.length > 0) {
      bulkAction(entriesResponse.items, bulkUnpublish, environment, locale)
    }
    if (entriesResponse.items.length === 0) {
      if (!changedFlag) console.log('No Entries/Assets Found published on specified environment')
      return Promise.resolve()
    }
    // setTimeout(() => {
    //   getSyncEntries(locale, queryParams, bulkUnpublish, environment, deliveryToken, null)
    // }, 3000)
  } catch (error) {
    console.log(error)
  }
  return true
}

async function start({retryFailed, bulkUnpublish, contentType, locale, environment, types, deliveryToken}) {
  setConfig(config, bulkUnpublish)
  if (retryFailed) {
    if (typeof retryFailed === 'string' && retryFailed.length > 0) {
      if (!validateFile(retryFailed, ['Unpublish', 'bulkUnpublish'])) {
        return false
      }

      if (bulkUnpublish) {
        retryFailedLogs(retryFailed, queue, 'bulk')
      } else {
        retryFailedLogs(retryFailed, {entryQueue, assetQueue}, 'publish')
      }
    }
  } else {
    const queryParams = getQueryParams({
      environment,
      content_type_uid: contentType,
      locale,
      type: types,
    })
    await getSyncEntries(locale, queryParams, bulkUnpublish, environment, deliveryToken)
  }
}

// start()

module.exports = {
  getSyncEntries,
  setConfig,
  getQueryParams,
  start,
}
