const Queue = require('../util/queue');
let config = require('../../config/stag');
const req = require('../util/request');
const { publishConsumer, bulkUnPublish, iniatlizeLogger } = require('../consumer/publish');
const retryFailedLogs = require('../util/retryfailed');

const queue = new Queue();

let logFileName;
let bulkUnPublishSet = [];
queue.consumer = bulkUnPublish;
logFileName = 'bulkUnPublishEntries';

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
let itemsSet = [];
async function getSyncEntries(locale,queryParams,paginationToken=null) {
  try {
    const conf = {
      uri:`${config.cdnEndPoint}/v3/stacks/sync?${paginationToken?`pagination_token=${paginationToken}`:'init=true'}${queryParams}`,
      headers:{
        api_key: config.apikey,
        access_token: config.bulkUnpublish.deliveryToken,
      },
    };
    const entriesResponse = await req(conf);
    itemsSet = [...itemsSet,...entriesResponse.items]
    if (!entriesResponse.pagination_token) {
      return Promise.resolve(itemsSet);
    }else {
      return await getSyncEntries(locale, queryParams,entriesResponse.pagination_token)
    };
  } catch (Err) {
    console.log(Err);
  }
}

function bulkAction(items){

    items.forEach((entry, index) => {
        if (bulkUnPublishSet.length < 10) {
          bulkUnPublishSet.push({
            uid: entry.data.uid,
            content_type: entry.content_type_uid,
            locale:entry.data.locale          
          });
        }
        if (bulkUnPublishSet.length === 10) {
          bulkUnPublish({
            entries: bulkUnPublishSet, locale:"en-us", Type: 'entry', environments: [config.bulkUnpublish.filter.environment],
          },config);
          count = count + bulkUnPublishSet.length;
          bulkUnPublishSet = [];
          return;
        }

        if (index === items.length - 1 && bulkUnPublishSet.length <= 10) {
      bulkPublish({
            entries: bulkUnPublishSet, locale:"en-us", Type: 'entry', environments: [config.bulkUnpublish.filter.environment],
          },config);
                  count = count + bulkUnPublishSet.length;
          bulkUnPublishSet = [];
        } //bulkPublish
    });

}

function setConfig(conf) {
  config = conf;
  queue.config = conf;
}

setConfig(config);

async function start() {
  let queryParams = getQueryParams(config.bulkUnpublish.filter)
  let syncResponse = await getSyncEntries("en-us",queryParams);
  bulkAction(syncResponse)
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
