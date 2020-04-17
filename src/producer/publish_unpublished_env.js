const Queue = require('../util/queue');
let config = require('../../config');
const req = require('../util/request');
const { publishConsumer, bulkPublish, iniatlizeLogger } = require('../consumer/publish');
const retryFailedLogs = require('../util/retryfailed');

const queue = new Queue();
queue.consumer = publishConsumer;
let skipCount;
let changedFlag = false;
let logFileName = 'publish_unpublished_env';
let bulkPublishSet = [];

iniatlizeLogger(logFileName);
queue.consumer = bulkPublish;
logFileName = 'bulkPublishEntries';

async function getEnvironment(environmentName) {
  try {
    const options = {
      url: `${config.cdnEndPoint}/v3/environments/${environmentName}`,
      headers: {
        api_key: config.apikey,
        authorization: config.manageToken,
      },
    };
    const environment = await req(options);
    return environment;
  } catch (err) {
    return Promise.reject(err);
  }
}


async function getEntries(contentType, environmentUid, skip = 0) {
  skipCount = skip;
  try {
    const conf = {
      url: `${config.apiEndPoint}/v3/content_types/${contentType}/entries`,
      qs: {
        include_count: true,
        skip: skipCount,
        include_publish_details: true,
      },
      headers: {
        api_key: config.apikey,
        authorization: config.manageToken,
      },
    };
    const responseEntries = await req(conf);
    skipCount += responseEntries.entries.length;
    if (responseEntries.entries.length > 0) {
      responseEntries.entries.forEach((entry, index) => {
        const locale = config.publish_unpublished_env.locale || 'en-us';
        const publishedEntry = entry.publish_details.find((publishEnv) => (publishEnv.environment === environmentUid && publishEnv.locale === locale));
        if (!publishedEntry) {
          changedFlag = true;
          if (bulkPublishSet.length < 10) {
            bulkPublishSet.push({
              uid: entry.uid,
              content_type: contentType,
              locale,
            });
          }
        }
        if (bulkPublishSet.length === 10) {
          queue.Enqueue({
            entries: bulkPublishSet, locale, Type: 'entry', environments: config.publish_unpublished_env.environments,
          });
          bulkPublishSet = [];
          return;
        }
        if (index === responseEntries.entries.length - 1 && bulkPublishSet.length <= 10 && bulkPublishSet.length > 0) {      
          queue.Enqueue({
            entries: bulkPublishSet, locale, Type: 'entry', environments: config.publish_unpublished_env.environments,
          });
          bulkPublishSet = [];
        }
      });
    }
    if (responseEntries.count === skipCount) {
      if (!changedFlag) console.log(`No Draft Entries of contentType ${contentType} was found`);
      bulkPublishSet = [];
      return Promise.resolve();
    }
    return await getEntries(contentType, environmentUid, skipCount);
  } catch (error) {
    return Promise.reject(error);
  }
}

function setConfig(conf) {
  config = conf;
  queue.config = config;
}

setConfig(config);
async function start() {
  try {
    if (config.publish_unpublished_env.sourceEnv) {
      const environmentDetails = await getEnvironment(config.publish_unpublished_env.sourceEnv);
      for (let i = 0; i < config.publish_unpublished_env.contentTypes.length; i += 1) {
        try {
          //console.log(config.publish_unpublished_env.contentTypes[i])
          /* eslint-disable no-await-in-loop */
          await getEntries(config.publish_unpublished_env.contentTypes[i], environmentDetails.environment.uid);
          /* eslint-enable no-await-in-loop */
          changedFlag = false;
        } catch (err) {
          console.log(err);
        }
      }
    }
  } catch (err) {
    console.log(err.message || err);
  }
}

module.exports = {
  getEntries,
  getEnvironment,
  setConfig,
};

if (process.argv.slice(2)[0] === '-retryFailed') {
  if (typeof process.argv.slice(2)[1] === 'string') {
    if (logFileName === 'bulkPublishEntries') {
      retryFailedLogs(process.argv.slice(2)[1], queue, 'bulkPublish');
    } else {
      retryFailedLogs(process.argv.slice(2)[1], queue);
    }
  }
} else {
  start();
}
// start()
