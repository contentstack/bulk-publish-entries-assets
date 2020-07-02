/* eslint-disable no-console */
/* eslint-disable new-cap */
/* eslint-disable camelcase */
const Queue = require('../util/queue')
let config = require('../config')
const req = require('../util/request')
const {bulkPublish, publishAsset, iniatlizeLogger} = require('../consumer/publish')
const retryFailedLogs = require('../util/retryfailed')
const {validateFile} = require('../util/fs')

const queue = new Queue()
let logFileName
let bulkPublishSet = []

iniatlizeLogger(logFileName)

/* eslint-disable no-param-reassign */

async function getAssets(folder, bulkPublish, environments, skip = 0) {
  const conf = {
    uri: `${config.apiEndPoint}/v${config.apiVersion}/assets?folder=${folder}&skip=${skip}&include_count=true&include_folders=true&include_publish_details=true`,
    headers: {
      api_key: config.apikey,
      authorization: config.manageToken,
    },
  }
  try {
    const assetResponse = await req(conf)
    if (assetResponse && assetResponse.assets.length > 0) {
      skip += assetResponse.assets.length
      assetResponse.assets.forEach((asset, index) => {
        if (asset.is_dir === true) {
          return getAssets(asset.uid, bulkPublish, environments, 0)
        }
        if (bulkPublish) {
          if (bulkPublishSet.length < 10) {
            bulkPublishSet.push({
              uid: asset.uid,
              publish_details: asset.publish_details || [],
            })
          }
          if (bulkPublishSet.length === 10) {
            queue.Enqueue({assets: bulkPublishSet, Type: 'asset', environments: environments})
            bulkPublishSet = []
          }

          if (assetResponse.assets.length - 1 === index && bulkPublishSet.length > 0 && bulkPublishSet.length < 10) {
            queue.Enqueue({assets: bulkPublishSet, Type: 'asset', environments: environments})
            bulkPublishSet = []
          }
        } else {
          queue.Enqueue({
            assetUid: asset.uid, publish_details: asset.publish_details || [], environments: environments, Type: 'asset',
          })
        }
        return true
      })
      if (skip === assetResponse.count) {
        return Promise.resolve(true)
      }
      return await getAssets(folder, bulkPublish, environments, skip)
    }
  } catch (error) {
    console.log(error)
  }
  return true
}

function setConfig(conf, bp) {
  if (bp) {
    queue.consumer = bulkPublish
    logFileName = 'bulkPublishAssets'
  } else {
    queue.consumer = publishAsset
    logFileName = 'PublishAssets'
  }
  config = conf
  queue.config = conf
}

function start({retryFailed, bulkPublish, environments, folderUid}) {
  setConfig(config, bulkPublish)
  if (retryFailed) {
    if (retryFailed) {
      if (!validateFile(retryFailed, ['PublishAssets', 'bulkPublishAssets'])) {
        return false
      }

      if (bulkPublish) {
        retryFailedLogs(retryFailed, queue, 'bulk')
      } else {
        retryFailedLogs(retryFailed, {assetQueue: queue}, 'publish')
      }
    }
  } else if (folderUid) {
    getAssets(folderUid, bulkPublish, environments)
  }
}

module.exports = {
  getAssets,
  setConfig,
  start,
}

// start();
