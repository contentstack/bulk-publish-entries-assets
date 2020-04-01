const chalk = require('chalk');
const req = require('../util/request');
const { getLoggerInstance, addLogs } = require('../util/logger');

let logger;

function iniatlizeLogger(fileName) {
  fileName = `${parseInt(Math.random() * 10000)}${fileName}`;
  logger = getLoggerInstance(fileName);
  return logger;
}

async function publishConsumer(entryObj, config) {
  const lang = [];
  lang.push(entryObj.locale);
  const conf = {
    url: `${config.apiEndPoint}/v3/content_types/${entryObj.content_type}/entries/${entryObj.entryUid}/publish?locale=${entryObj.locale ? entryObj.locale : 'en-us'}`,
    method: 'POST',
    headers: {
      api_key: config.apikey,
      authtoken: config.authToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      entry: {
        environments: entryObj.environments,
        locales: lang,
      },
    }),
  };

  try {
    const publishEntryResponse = await req(conf);
    if (!publishEntryResponse.error_message) console.log(`entry published with contentType Uid =${entryObj.content_type} entry Uid =${entryObj.entryUid} locale =${entryObj.locale}`);
    else {
      throw publishEntryResponse;
    }
  } catch (error) {
    console.log(chalk.red(`entry could not be published with contentType Uid =${entryObj.content_type} entry Uid =${entryObj.entryUid} locale =${entryObj.locale} ${JSON.stringify(error.message || error)}`));
    addLogs(logger, { options: entryObj, api_key: config.apikey });
  }
}

async function publishAsset(assetobj, config) {
  const conf = {
    uri: `${config.apiEndPoint}/v3/assets/${assetobj.assetUid}/publish`,
    method: 'POST',
    headers: {
      api_key: config.apikey,
      authtoken: config.authToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      asset: {
        environments: assetobj.environments,
        locales: config.publish_assets.locales,
      },
    }),
  };
  try {
    const publishAssetResponse = await req(conf);
    if (!publishAssetResponse.error_message) console.log(`asset published with asset Uid =${assetobj.assetUid}`);
    else {
      throw publishAssetResponse;
    }
  } catch (error) {
    console.log(chalk.red(`Could not publish Error ${JSON.stringify(error)}`));
    addLogs(logger, { options: assetobj, api_key: config.apikey });
  }
}

async function bulkPublish(bulkPublishObj, config) {
  let conf;
  // addLogs(logger,bulkPublishObj);
  switch (bulkPublishObj.Type) {
    case 'entry':
      conf = {
        uri: `${config.cdnEndPoint}/v3/bulk/publish`,
        method: 'POST',
        headers: {
          api_key: config.apikey,
          authtoken: config.authToken,
          authorization: config.manageToken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          entries: bulkPublishObj.entries,
          locales: [bulkPublishObj.locale],
          environments: bulkPublishObj.environments,
        }),
      };
      try {
        const bulkPublishEntriesResponse = await req(conf);
        if (bulkPublishEntriesResponse.notice && !bulkPublishEntriesResponse.error_message) {
          console.log(chalk.green(`Bulk entries sent for publish  ${JSON.stringify(bulkPublishObj.entries)}`));
        } else {
          throw bulkPublishEntriesResponse;
        }
      } catch (error) {
        console.log(chalk.red(`Bulk entries ${JSON.stringify(bulkPublishObj.entries)} failed to publish with error ${JSON.stringify(error)}`));
        addLogs(logger, { options: bulkPublishObj, api_key: config.apikey });
      }
      break;
    case 'asset':
      conf = {
        uri: `${config.cdnEndPoint}/v3/bulk/publish`,
        method: 'POST',
        headers: {
          api_key: config.apikey,
          authtoken: config.authToken,
          authorization: config.manageToken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          assets: bulkPublishObj.assets,
          locales: ['en-us'],
          environments: bulkPublishObj.environments,
        }),
      };
      try {
        const bulkPublishAssetsResponse = await req(conf);
        if (bulkPublishAssetsResponse.notice && !bulkPublishAssetsResponse.error_message) {
          console.log(`Bulk assets sent for publish ${JSON.stringify(bulkPublishObj)}`);
        } else {
          throw bulkPublishAssetsResponse;
        }
      } catch (error) {
        console.log(chalk.red(`Bulk assets ${JSON.stringify(bulkPublishObj.assets)} failed to publish with error ${JSON.stringify(error.message || error)}`));
        addLogs(logger, { options: bulkPublishObj, api_key: config.apikey });
      }
      break;
    default:
      console.log('No such type');
  }
}

module.exports = {
  publishConsumer,
  publishAsset,
  bulkPublish,
  iniatlizeLogger,
};
