const Queue = require('../util/queue');
let config = require('../../config');
const req = require('../util/request');
const { publishAsset, bulkPublish, iniatlizeLogger } = require('../consumer/publish');
const retryFailedLogs = require('../util/retryfailed');

const queue = new Queue();
queue.consumer = bulkPublish;
let logFileName;
let bulkPublishSet = [];

queue.consumer = bulkPublish;
logFileName = 'bulkPublishAssets';

iniatlizeLogger(logFileName);

async function getAssets(folder = 'cs_root', skip = 0) {
  const conf = {
    uri: `${config.cdnEndPoint}/v3/assets?folder=${folder}&skip=${skip}&include_count=true&include_folders=true`,
    headers: {
      api_key: config.apikey,
      authorization: config.manageToken,
    },
  };
  try {
    const assetResponse = await req(conf);
    if (assetResponse && assetResponse.assets.length) {
      skip += assetResponse.assets.length;
      assetResponse.assets.forEach((asset, index) => {
        if (asset.is_dir === true) {
          return getAssets(asset.uid, 0);
        }
          if (bulkPublishSet.length < 10) {
            bulkPublishSet.push({
              uid: asset.uid,
            });
          }
          if (bulkPublishSet.length === 10) {
            queue.Enqueue({ assets: bulkPublishSet, Type: 'asset', environments: config.publish_assets.environments });
            bulkPublishSet = [];
          }

          if (assetResponse.assets.length -1 === index && bulkPublishSet.length > 0 && bulkPublishSet.length <10) {
            queue.Enqueue({ assets: bulkPublishSet, Type: 'asset', environments: config.publish_assets.environments });
            bulkPublishSet = [];
          }
         
        return true;
      });
      if (skip === assetResponse.count) {
        return true;
      }
      return getAssets(folder, skip);
    }
  } catch (error) {
    console.log(error);
  }
  return true;
}

function setConfig(conf) {
  config = conf;
  queue.config = conf;
}

setConfig(config);

function start() {
  if (config.publish_assets.folderUid) {
    getAssets(config.publish_assets.folderUid);
  }
}

module.exports = {
  getAssets,
  setConfig,
};

if (process.argv.slice(2)[0] === '-retryFailed') {
  if (typeof process.argv.slice(2)[1] === 'string') {
    if (logFileName === 'bulkPublishAssets') {
      retryFailedLogs(process.argv.slice(2)[1], queue, 'bulkPublish');
    } else {
      retryFailedLogs(process.argv.slice(2)[1], queue);
    }
  }
} else {
  start();
}
