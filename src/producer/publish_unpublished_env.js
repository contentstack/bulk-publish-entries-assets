const Queue = require('../util/queue');
let config = require('../../config/');
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

if (config.publish_unpublished_env.bulkPublish) {
  queue.consumer = bulkPublish;
  logFileName = 'bulkPublishEntries';
} else {
  queue.consumer = publishConsumer;
  logFileName = 'publish_unpublished_env';
}

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

let entryCounter = 0;


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
        entryCounter = entryCounter +=1;
        config.publish_unpublished_env.locales.forEach((locale) => {
          const publishedEntry = entry.publish_details.find((publishEnv) => (publishEnv.environment === environmentUid && publishEnv.locale === locale));
          if (!publishedEntry) {
            changedFlag = true;
            if (config.publish_unpublished_env.bulkPublish) {
              if (bulkPublishSet.length < 10) {
                bulkPublishSet.push({
                  uid: entry.uid,
                  content_type: contentType,
                  locale,
                });
              }

              if (bulkPublishSet.length === 10) {
                queue.Enqueue({
                  entries: bulkPublishSet, locale, Type: 'entry', environments: config.publish_unpublished_env.environments,
                });
                bulkPublishSet = [];
                return;
              }

              if (entryCounter === responseEntries.entries.length && bulkPublishSet.length <= 10) {
                queue.Enqueue({
                  entries: bulkPublishSet, locale, Type: 'entry', environments: config.publish_unpublished_env.environments,
                });
                bulkPublishSet = [];
              }
            } else {
              queue.Enqueue({
                content_type: contentType, entryUid: entry.uid, locale, environments: config.publish_unpublished_env.environments,
              });
            }
          }
        });
      });
    }

    if (responseEntries.count === skipCount) {
      if (!changedFlag) console.log(`No Draft Entries of contentType ${contentType} was found`);
      bulkPublishSet = [];
      return Promise.resolve();
    }
    entryCounter =0
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
    console.log(err.message);
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
