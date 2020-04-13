const Queue = require('../util/queue');
let config = require('../../config/stag');
const req = require('../util/request');
const { bulkUnPublish, iniatlizeLogger } = require('../consumer/publish');
const retryFailedLogs = require('../util/retryfailed');

const queue = new Queue();

let bulkUnPublishSet = [];
let bulkUnPulishAssetSet = [];
queue.consumer = bulkUnPublish;
const logFileName = 'bulkUnPublish';

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

let count = 0;
function bulkAction(items) {
  items.forEach((entry, index) => {
    if (bulkUnPublishSet.length < 10 && entry.type === 'entry_published') {
      bulkUnPublishSet.push({
        uid: entry.data.uid,
        content_type: entry.content_type_uid,
        locale: entry.data.locale,
      });
    }

    if (bulkUnPulishAssetSet.length < 10 && entry.type === 'asset_published') {
      bulkUnPulishAssetSet.push({
        uid: entry.data.uid,
      });
    }

    if (bulkUnPulishAssetSet.length === 10) {
      queue.Enqueue({
        assets: bulkUnPulishAssetSet, Type: 'asset', environments: [config.bulkUnpublish.filter.environment],
      });
      count += bulkUnPulishAssetSet.length;
      bulkUnPulishAssetSet = [];
      return;
    }

    if (bulkUnPublishSet.length === 10) {
      queue.Enqueue({
        entries: bulkUnPublishSet, locale: 'en-us', Type: 'entry', environments: [config.bulkUnpublish.filter.environment],
      });
      count += bulkUnPublishSet.length;
      bulkUnPublishSet = [];
      return;
    }

    if (index === items.length - 1 && bulkUnPulishAssetSet.length <= 10 && bulkUnPulishAssetSet.length > 0) {
      queue.Enqueue({
        assets: bulkUnPulishAssetSet, Type: 'asset', environments: [config.bulkUnpublish.filter.environment],
      });
      count += bulkUnPulishAssetSet.length;
      bulkUnPulishAssetSet = [];
      return;
    }

    if (index === items.length - 1 && bulkUnPublishSet.length <= 10 && bulkUnPublishSet.length > 0) {
      queue.Enqueue({
        entries: bulkUnPublishSet, locale: 'en-us', Type: 'entry', environments: [config.bulkUnpublish.filter.environment],
      });
      count += bulkUnPublishSet.length;
      bulkUnPublishSet = [];
    } // bulkPublish
  });
  // process.exit(0);
}

async function getSyncEntries(locale, queryParams, paginationToken = null) {
  try {
    const conf = {
      uri: `${config.cdnEndPoint}/v3/stacks/sync?${paginationToken ? `pagination_token=${paginationToken}` : 'init=true'}${queryParams}`,
      headers: {
        api_key: config.apikey,
        access_token: config.bulkUnpublish.deliveryToken,
      },
    };
    const entriesResponse = await req(conf);

    if (entriesResponse.items.length > 0) {
      bulkAction(entriesResponse.items);
    }

    if (entriesResponse.items.length === 0) {
      return Promise.resolve();
    }
    setTimeout(() => {
      getSyncEntries(locale, queryParams, null);
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
  const queryParams = getQueryParams(config.bulkUnpublish.filter);
  await getSyncEntries('en-us', queryParams);
  // bulkAction(syncResponse)
}

module.exports = {
  getSyncEntries,
  setConfig,
};

// if (process.argv.slice(2)[0] === '-retryFailed') {
//   if (typeof process.argv.slice(2)[1] === 'string' && process.argv.slice(2)[1]) {
//     if (logFileName === 'bulkPublishEntries') {
//       retryFailedLogs(process.argv.slice(2)[1], queue, 'bulkPublish');
//     } else {
//       retryFailedLogs(process.argv.slice(2)[1], queue);
//     }
//   }
// } else {
//   start();
// }


start();
