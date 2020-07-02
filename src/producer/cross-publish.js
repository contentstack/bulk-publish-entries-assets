/* eslint-disable no-console */
/* eslint-disable new-cap */
/* eslint-disable camelcase */
/* eslint-disable complexity */
/* eslint-disable max-params */
const Queue = require('../util/queue')
let config = require('../config')
const req = require('../util/request')
const {
  bulkPublish, publishEntry, publishAsset, iniatlizeLogger,
} = require('../consumer/publish')
const retryFailedLogs = require('../util/retryfailed')
const {validateFile} = require('../util/fs')

const queue = new Queue()
const entryQueue = new Queue()
const assetQueue = new Queue()

let bulkPublishSet = []
let bulkPublishAssetSet = []
let changedFlag = false
let logFileName

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

function bulkAction(items, bulkPublish, filter, destEnv) {
  items.forEach((item, index) => {
    changedFlag = true
    if (item.data.publish_details) {
      item.data.publish_details.version = item.data._version
    }

    if (bulkPublish) {
      if (bulkPublishSet.length < 10 && item.type === 'entry_published') {
        bulkPublishSet.push({
          uid: item.data.uid,
          content_type: item.content_type_uid,
          locale: item.data.publish_details.locale || 'en-us',
          version: item.data._version,
          publish_details: [item.data.publish_details] || [],
        })
      }

      if (bulkPublishAssetSet.length < 10 && item.type === 'asset_published') {
        bulkPublishAssetSet.push({
          uid: item.data.uid,
          version: item.data._version,
          publish_details: [item.data.publish_details] || [],
        })
      }

      if (bulkPublishAssetSet.length === 10) {
        queue.Enqueue({
          assets: bulkPublishAssetSet, Type: 'asset', locale: filter.locale, environments: destEnv,
        })
        bulkPublishAssetSet = []
        return
      }

      if (bulkPublishSet.length === 10) {
        queue.Enqueue({
          entries: bulkPublishSet, locale: filter.locale, Type: 'entry', environments: destEnv,
        })
        bulkPublishSet = []
        return
      }

      if (index === items.length - 1 && bulkPublishAssetSet.length <= 10 && bulkPublishAssetSet.length > 0) {
        queue.Enqueue({
          assets: bulkPublishAssetSet, Type: 'asset', locale: filter.locale, environments: destEnv,
        })
        bulkPublishAssetSet = []
        return
      }

      if (index === items.length - 1 && bulkPublishSet.length <= 10 && bulkPublishSet.length > 0) {
        queue.Enqueue({
          entries: bulkPublishSet, locale: filter.locale, Type: 'entry', environments: destEnv,
        })
        bulkPublishSet = []
      }
    } else {
      if (item.type === 'entry_published') {
        entryQueue.Enqueue({
          content_type: item.content_type_uid, publish_details: [item.data.publish_details], environments: destEnv, entryUid: item.data.uid, locale: item.data.publish_details.locale || 'en-us', Type: 'entry',
        })
      }
      if (item.type === 'asset_published') {
        assetQueue.Enqueue({
          assetUid: item.data.uid, publish_details: [item.data.publish_details], environments: destEnv, Type: 'asset',
        })
      }
    }
  })
}

async function getSyncEntries(queryParams, bulkPublish, filter, deliveryToken, destEnv, paginationToken = null) {
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
      bulkAction(entriesResponse.items, bulkPublish, filter, destEnv)
    }
    if (!entriesResponse.pagination_token) {
      if (!changedFlag) console.log('No Entries/Assets Found published on specified environment')
      return Promise.resolve()
    }
    setTimeout(() => {
      getSyncEntries(queryParams, entriesResponse.pagination_token)
    }, 3000)
  } catch (error) {
    console.log(error)
  }
  return true
}

function setConfig(conf, bp) {
  if (bp) {
    logFileName = 'bulk_cross_publish'
    queue.consumer = bulkPublish
  } else {
    logFileName = 'cross_publish'
    entryQueue.consumer = publishEntry
    assetQueue.consumer = publishAsset
  }

  config = conf
  queue.config = conf
  entryQueue.config = conf
  assetQueue.config = conf
}

async function start({retryFailed, bulkPublish, filter, deliveryToken, destEnv}) {
  setConfig(config, bulkPublish)
  if (retryFailed) {
    if (typeof retryFailed === 'string' && retryFailed.length > 0) {
      if (!validateFile(retryFailed, ['cross_publish', 'bulk_cross_publish'])) {
        return false
      }

      if (bulkPublish) {
        retryFailedLogs(retryFailed, queue, 'bulk')
      } else {
        retryFailedLogs(retryFailed, {entryQueue, assetQueue}, 'publish')
      }
    }
  } else {
    const queryParams = getQueryParams(filter)
    await getSyncEntries(queryParams, bulkPublish, filter, deliveryToken, destEnv)
  }
}

// start()

module.exports = {
  getSyncEntries,
  setConfig,
  getQueryParams,
  start,
}
