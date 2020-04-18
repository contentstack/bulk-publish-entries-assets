const chalk = require('chalk');
const req = require('../util/request');
const _ = require('lodash');

const { getLoggerInstance, addLogs } = require('../util/logger');

let logger;
let fileNme;
function iniatlizeLogger(fileName) {
  fileNme = fileName;
  fileNme = `${Date.now()}.${fileNme}`;
  logger = getLoggerInstance(fileNme);
  return logger;
}

function removePublishDetails(elements) {
  return elements.map(({publish_details, ...rest}) => rest);
}

async function publishConsumer(entryObj, config) {
  const lang = [];
  lang.push(entryObj.locale);
  const conf = {
    url: `${config.apiEndPoint}/v3/content_types/${entryObj.content_type}/entries/${entryObj.entryUid}/publish?locale=${entryObj.locale ? entryObj.locale : 'en-us'}`,
    method: 'POST',
    headers: {
      api_key: config.apikey,
      authorization: config.manageToken,
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
      authorization: config.manageToken,
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
          authorization: config.manageToken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          entries: removePublishDetails(bulkPublishObj.entries),
          locales: [bulkPublishObj.locale],
          environments: bulkPublishObj.environments,
        }),
      };
      try {
        const bulkPublishEntriesResponse = await req(conf);
        if (bulkPublishEntriesResponse.notice && !bulkPublishEntriesResponse.error_message) {

          let temp = _.cloneDeep(bulkPublishObj)

           //addLogs(logger, { options: temp, api_key: config.apikey }, 'plog');
           temp.entries = removePublishDetails(bulkPublishObj.entries)

          console.log(chalk.green(`Bulk entries sent for publish  ${JSON.stringify(bulkPublishObj.entries)}`));
          //addLogs(logger, { options: bulkPublishObj, api_key: config.apikey }, 'plog');
          //bulkPublishObj.entries = removePublishDetails(bulkPublishObj.entries)
          addLogs(logger, { options: temp, api_key: config.apikey }, 'info');

        
        } else {
          throw bulkPublishEntriesResponse;
        }
      } catch (error) {
        console.log(chalk.red(`Bulk entries ${JSON.stringify(bulkPublishObj.entries)} failed to publish with error ${JSON.stringify(error)}`));
        addLogs(logger, { options: bulkPublishObj, api_key: config.apikey }, 'error');
      }
      break;
    case 'asset':
      conf = {
        uri: `${config.cdnEndPoint}/v3/bulk/publish`,
        method: 'POST',
        headers: {
          api_key: config.apikey,
          authorization: config.manageToken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          assets: removePublishDetails(bulkPublishObj.assets),
          locales: ['en-us'],
          environments: bulkPublishObj.environments,
        }),
      };
      try {
        const bulkPublishAssetsResponse = await req(conf);
        if (bulkPublishAssetsResponse.notice && !bulkPublishAssetsResponse.error_message) {
          console.log(chalk.green(`Bulk assets sent for publish ${JSON.stringify(bulkPublishObj.assets)}`));
          addLogs(logger, { options: bulkPublishObj, api_key: config.apikey }, 'plog');
          bulkPublishObj.assets = removePublishDetails(bulkPublishObj.assets)
          addLogs(logger, { options: bulkPublishObj, api_key: config.apikey }, 'info');
        } else {
          throw bulkPublishAssetsResponse;
        }
      } catch (error) {
        console.log(chalk.red(`Bulk assets ${JSON.stringify(bulkPublishObj.assets)} failed to publish with error ${JSON.stringify(error.message || error)}`));
        addLogs(logger, { options: bulkPublishObj, api_key: config.apikey }, 'error');
      }
      break;
    default:
      console.log('No such type');
  }
}

async function bulkUnPublish(bulkUnPublishObj, config) {
  let conf;
  // addLogs(logger,bulkPublishObj);
  switch (bulkUnPublishObj.Type) {
    case 'entry':
      conf = {
        uri: `${config.cdnEndPoint}/v3/bulk/unpublish`,
        method: 'POST',
        headers: {
          api_key: config.apikey,
          authorization: config.manageToken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          entries: bulkUnPublishObj.entries,
          locales: [bulkUnPublishObj.locale],
          environments: bulkUnPublishObj.environments,
        }),
      };
      try {
        const bulkUnPublishEntriesResponse = await req(conf);
        if (bulkUnPublishEntriesResponse.notice && !bulkUnPublishEntriesResponse.error_message) {
          console.log(chalk.green(`Bulk entries sent for Unpublish  ${JSON.stringify(bulkUnPublishObj.entries)}`));
          addLogs(logger, { options: bulkUnPublishObj, api_key: config.apikey }, 'info');
        } else {
          throw bulkUnPublishEntriesResponse;
        }
      } catch (error) {
        console.log(chalk.red(`Bulk entries ${JSON.stringify(bulkUnPublishObj.entries)} failed to Unpublish with error ${JSON.stringify(error)}`));
        addLogs(logger, { options: bulkUnPublishObj, api_key: config.apikey }, 'error');
      }
      break;
    case 'asset':
      conf = {
        uri: `${config.cdnEndPoint}/v3/bulk/unpublish`,
        method: 'POST',
        headers: {
          api_key: config.apikey,
          authorization: config.manageToken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          assets: bulkUnPublishObj.assets,
          locales: [bulkUnPublishObj.locale || 'en-us'],
          environments: bulkUnPublishObj.environments,
        }),
      };
      try {
        const bulkUnPublishAssetsResponse = await req(conf);
        if (bulkUnPublishAssetsResponse.notice && !bulkUnPublishAssetsResponse.error_message) {
          console.log(chalk.green(`Bulk assets sent for Unpublish ${JSON.stringify(bulkUnPublishObj)}`));
          addLogs(logger, { options: bulkUnPublishObj, api_key: config.apikey }, 'info');
        } else {
          throw bulkUnPublishAssetsResponse;
        }
      } catch (error) {
        console.log(chalk.red(`Bulk assets ${JSON.stringify(bulkUnPublishObj.assets)} failed to Unpublish with error ${JSON.stringify(error)}`));
        addLogs(logger, { options: bulkUnPublishObj, api_key: config.apikey }, 'error');
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
  bulkUnPublish,
  iniatlizeLogger,
};
