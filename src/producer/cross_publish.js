const Queue = require('../util/queue');
let config = require('../../config/stag');
const req = require('../util/request');
const { bulkPublish, iniatlizeLogger } = require('../consumer/publish');
const retryFailedLogs = require('../util/retryfailed');

const queue = new Queue();

let bulkUnPublishSet = [];
let bulkUnPulishAssetSet = [];
queue.consumer = bulkPublish;
let changedFlag = false;

const logFileName = 'cross_publish';

iniatlizeLogger(logFileName);

function getQueryParams(filter) {
  let queryString = '';
  Object.keys(filter).forEach((key) => {
    if (filter[key]) {
      queryString = `${queryString}&${key}=${filter[key]}`;
    }
  });

  return queryString;
}

function bulkAction(items) {
  items.forEach((entry, index) => {
    changedFlag = true;
    if (bulkUnPublishSet.length < 10 && entry.type === 'entry_published') {
      if (entry.data.publish_details) {
        entry.data.publish_details.version = entry.data._version;
      }
      bulkUnPublishSet.push({
        uid: entry.data.uid,
        content_type: entry.content_type_uid,
        locale: entry.data.locale,
        publish_details: [entry.data.publish_details] || [],
      });
    }

    if (bulkUnPulishAssetSet.length < 10 && entry.type === 'asset_published') {
      if (entry.data.publish_details) {
        entry.data.publish_details.version = entry.data._version;
      }

      bulkUnPulishAssetSet.push({
        uid: entry.data.uid,
        publish_details: [entry.data.publish_details] || [],
      });
    }

    if (bulkUnPulishAssetSet.length === 10) {
      queue.Enqueue({
        assets: bulkUnPulishAssetSet, Type: 'asset', locale: config.cross_env_publish.filter.locale, environments: config.cross_env_publish.destEnv,
      });
      bulkUnPulishAssetSet = [];
      return;
    }

    if (bulkUnPublishSet.length === 10) {
      queue.Enqueue({
        entries: bulkUnPublishSet, locale: config.cross_env_publish.filter.locale, Type: 'entry', environments: config.cross_env_publish.destEnv,
      });
      bulkUnPublishSet = [];
      return;
    }

    if (index === items.length - 1 && bulkUnPulishAssetSet.length <= 10 && bulkUnPulishAssetSet.length > 0) {
      queue.Enqueue({
        assets: bulkUnPulishAssetSet, Type: 'asset', locale: config.cross_env_publish.filter.locale, environments: config.cross_env_publish.destEnv,
      });
      bulkUnPulishAssetSet = [];
      return;
    }

    if (index === items.length - 1 && bulkUnPublishSet.length <= 10 && bulkUnPublishSet.length > 0) {
      queue.Enqueue({
        entries: bulkUnPublishSet, locale: config.cross_env_publish.filter.locale, Type: 'entry', environments: config.cross_env_publish.destEnv,
      });
      bulkUnPublishSet = [];
    }
  });
}

async function getSyncEntries(queryParams, paginationToken = null) {
  try {
    const conf = {
      uri: `${config.cdnEndPoint}/v3/stacks/sync?${paginationToken ? `pagination_token=${paginationToken}` : 'init=true'}${queryParams}`,
      headers: {
        api_key: config.apikey,
        access_token: config.cross_env_publish.deliveryToken,
      },
    };
    const entriesResponse = await req(conf);
    if (entriesResponse.items.length > 0) {
      bulkAction(entriesResponse.items);
    }
    if (!entriesResponse.pagination_token) {
      if (!changedFlag) console.log('No Entries/Assets Found published on specified environment');
      return Promise.resolve();
    }
    setTimeout(() => {
      getSyncEntries(queryParams, entriesResponse.pagination_token);
    }, 3000);
  } catch (Err) {
    console.log(Err);
  }
  return true;
}


function setConfig(conf) {
  config = conf;
  queue.config = conf;
}

setConfig(config);

async function start() {
  const queryParams = getQueryParams(config.cross_env_publish.filter);
  await getSyncEntries(queryParams);
}

module.exports = {
  getSyncEntries,
  setConfig,
};

if (process.argv.slice(2)[0] === '-retryFailed') {
  if (typeof process.argv.slice(2)[1] === 'string' && process.argv.slice(2)[1]) {
    retryFailedLogs(process.argv.slice(2)[1], queue);
  }
} else {
  start();
}

start();
