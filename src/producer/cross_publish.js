const Queue = require('../util/queue');
let config = require('../../config');
const req = require('../util/request');
const {
  bulkPublish, publishEntry, publishAsset, iniatlizeLogger,
} = require('../consumer/publish');
const retryFailedLogs = require('../util/retryfailed');
const { validateFile } = require('../util/fs');

const queue = new Queue();
const entryQueue = new Queue();
const assetQueue = new Queue();

let bulkPublishSet = [];
let bulkPublishAssetSet = [];
let changedFlag = false;
let logFileName;


if (config.cross_env_publish.bulkPublish) {
  logFileName = 'bulk_cross_publish';
  queue.consumer = bulkPublish;
} else {
  logFileName = 'cross_publish';
  entryQueue.consumer = publishEntry;
  assetQueue.consumer = publishAsset;
}


iniatlizeLogger(logFileName);

function getQueryParams(filter) {
  let queryString = '';
  Object.keys(filter).forEach((key) => {
    if (filter[key] && filter[key].length > 0) {
      queryString = `${queryString}&${key}=${filter[key]}`;
    }
  });

  return queryString;
}

function setConfig(conf) {
  config = conf;
  queue.config = conf;
  entryQueue.config = conf;
  assetQueue.config = conf;
}

function bulkAction(items, type) {
  switch(type) {
    case "entries":
      let {filteredEntries: entries, locale} = items
      entries.forEach((item, index) => {
        changedFlag = true;

        if (!item.data.publish_details) {
          // adding this condition because sometimes
          // item.data.publish_details.locale failes because publish_details is undefined
          item.data.publish_details = {}
        }

        if (item.data.publish_details) {
          item.data.publish_details.version = item.data._version;
        }

        if (config.cross_env_publish.bulkPublish) {
          if (bulkPublishSet.length < 10) {
            bulkPublishSet.push({
              uid: item.data.uid,
              content_type: item.content_type_uid,
              locale: item.data.publish_details.locale || 'en-us',
              version: item.data._version,
              publish_details: [item.data.publish_details] || [],
            });
          }

          if (bulkPublishSet.length === 10) {
            queue.Enqueue({
              entries: bulkPublishSet, locale: config.cross_env_publish.filter.locale || locale, Type: 'entry', environments: config.cross_env_publish.destEnv,
            });
            bulkPublishSet = [];
            // need to find out the reason for a return statement here
            return;
          }

          if (index === entries.length - 1 && bulkPublishSet.length <= 10 && bulkPublishSet.length > 0) {
            queue.Enqueue({
              entries: bulkPublishSet, locale: config.cross_env_publish.filter.locale || locale, Type: 'entry', environments: config.cross_env_publish.destEnv,
            });
            bulkPublishSet = [];
          }
        } else {
          entryQueue.Enqueue({
            content_type: item.content_type_uid, publish_details: [item.data.publish_details], environments: config.cross_env_publish.destEnv, entryUid: item.data.uid, locale: item.data.publish_details.locale || 'en-us', Type: 'entry',
          });
        }
      });
      break;
    case "assets":
      items.forEach((item, index) => {
        changedFlag = true;
        if (!item.data.publish_details) {
          // adding this condition because sometimes
          // item.data.publish_details.locale failes because publish_details is undefined
          item.data.publish_details = {}
        }

        if (item.data.publish_details) {
          item.data.publish_details.version = item.data._version;
        }

        if (config.cross_env_publish.bulkPublish) {
          if (bulkPublishAssetSet.length < 10) {
            bulkPublishAssetSet.push({
              uid: item.data.uid,
              version: item.data._version,
              publish_details: [item.data.publish_details] || [],
            });
          }

          if (bulkPublishAssetSet.length === 10) {
            queue.Enqueue({
              assets: bulkPublishAssetSet, Type: 'asset', locale: config.cross_env_publish.filter.locale, environments: config.cross_env_publish.destEnv,
            });
            bulkPublishAssetSet = [];
            return;
          }

          if (index === items.length - 1 && bulkPublishAssetSet.length <= 10 && bulkPublishAssetSet.length > 0) {
            queue.Enqueue({
              assets: bulkPublishAssetSet, Type: 'asset', locale: config.cross_env_publish.filter.locale, environments: config.cross_env_publish.destEnv,
            });
            bulkPublishAssetSet = [];
            return;
          }
        } else {
          assetQueue.Enqueue({
            assetUid: item.data.uid, publish_details: [item.data.publish_details], environments: config.cross_env_publish.destEnv, Type: 'asset',
          });
        }
      });
      break;  
  }
}

function handleEntries(entries) {
  let uniqueLocales = entries.map(entry => entry.data.publish_details.locale).filter((locale, index, self) => self.indexOf(locale) === index)
  uniqueLocales.forEach(locale => {
    let filteredEntries = entries.filter(entry => entry.data.publish_details.locale === locale)
    bulkAction({filteredEntries, locale}, 'entries')
  })
}

async function getSyncEntries(queryParams, paginationToken = null) {
  try {
    const conf = {
      uri: `${config.cdnEndPoint}/v${config.apiVersion}/stacks/sync?${paginationToken ? `pagination_token=${paginationToken}` : 'init=true'}${queryParams}`,
      headers: {
        api_key: config.apikey,
        access_token: config.cross_env_publish.deliveryToken,
      },
    };
    const response = await req(conf);
    if (response.items.length > 0) {
      let entries = response.items.filter(item => item.type === 'entry_published')
      let assets = response.items.filter(item => item.type === 'asset_published')
      if (entries.length > 0) {
        handleEntries(entries)
      }
      if (assets.length > 0) {
        bulkAction(assets, 'assets')
      }
    }
    if (!response.pagination_token) {
      if (!changedFlag) console.log('No Entries/Assets Found published on specified environment');
      return Promise.resolve();
    }
    setTimeout(() => {
      getSyncEntries(queryParams, response.pagination_token);
    }, 3000);
  } catch (Err) {
    console.log(Err);
  }
  return true;
}


setConfig(config);

async function start() {
  if (process.argv.slice(2)[0] === '-retryFailed') {
    if (typeof process.argv.slice(2)[1] === 'string' && process.argv.slice(2)[1]) {
      if (!validateFile(process.argv.slice(2)[1], ['cross_publish', 'bulk_cross_publish'])) {
        return false;
      }

      if (config.cross_env_publish.bulkPublish) {
        retryFailedLogs(process.argv.slice(2)[1], queue, 'bulk');
      } else {
        retryFailedLogs(process.argv.slice(2)[1], { entryQueue, assetQueue }, 'publish');
      }
    }
  } else {
    const queryParams = getQueryParams(config.cross_env_publish.filter);
    await getSyncEntries(queryParams);
  }
}

start();

module.exports = {
  getSyncEntries,
  setConfig,
  getQueryParams,
  start,
};
