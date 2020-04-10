const Queue = require('../util/queue');
let config = require('../../config/');
const req = require('../util/request');
const { publishConsumer, bulkUnPublish, iniatlizeLogger } = require('../consumer/publish');
const retryFailedLogs = require('../util/retryfailed');

const queue = new Queue();

queue.consumer = bulkUnPublish;

const logFileName = 'bulkUnPublishEntries';

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
  let bulkUnPublishSet = [];
  items.forEach((item, index) => {
    if (bulkUnPublishSet.length < 10) {
      bulkUnPublishSet.push({
        uid: item.data.uid,
        content_type: item.content_type_uid,
        locale: item.data.locale,
      });
    }

    if (bulkUnPublishSet.length === 10) {
      queue.Enqueue({
        entries: bulkUnPublishSet, locale: 'en-us', Type: 'entry', environments: [config.bulkUnpublish.filter.environment],
      });
      count += bulkUnPublishSet.length;
      console.log(count);
      bulkUnPublishSet = [];
      return;
    }

    if (index === items.length - 1 && bulkUnPublishSet.length <= 10) {
      queue.Enqueue({
        entries: bulkUnPublishSet, locale: 'en-us', Type: 'entry', environments: [config.bulkUnpublish.filter.environment],
      });
      count += bulkUnPublishSet.length;
      console.log(count);
      bulkUnPublishSet = [];
    } // bulkPublish
  });
}


async function paginatedSyncEntries(queryParams, pagination_token) {
  const conf = {
    uri: `${config.cdnEndPoint}/v3/stacks/sync?pagination_token=${pagination_token}${queryParams}`,
      	headers: {
        	api_key: config.apikey,
        	access_token: config.bulkUnpublish.deliveryToken,
      	},
  };

  try {
    const syncResponse = await req(conf);
    bulkAction(syncResponse.items);
    if (syncResponse.pagination_token) return paginatedSyncEntries(queryParams, syncResponse.pagination_token);
    return;
  } catch (err) {
    return err;
  }
}

let count = 0;

async function initialSyncEntries(queryParams) {
  const conf = {
    uri: `${config.cdnEndPoint}/v3/stacks/sync?init=true${queryParams}`,
      	headers: {
        	api_key: config.apikey,
        	access_token: config.bulkUnpublish.deliveryToken,
      	},
  };
  const syncResponse = await req(conf);
  bulkAction(syncResponse.items);
  if (syncResponse.pagination_token) return paginatedSyncEntries(queryParams, syncResponse.pagination_token);
}


function setConfig(conf) {
  config = conf;
  queue.config = conf;
}

setConfig(config);

function start() {
  initialSyncEntries(getQueryParams(config.bulkUnpublish.filter))
    .then((ans) => {
      // console.log(ans);
    })
    .catch((err) => {
      console.log(`${err}===`);
    });
}

start();
