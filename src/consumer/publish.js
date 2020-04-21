const chalk = require('chalk');
const req = require('../util/request');

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
  return elements.map(({ publish_details, ...rest }) => rest);
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
          console.log(chalk.green(`Bulk entries sent for publish  ${JSON.stringify(removePublishDetails(bulkPublishObj.entries))}`));
          addLogs(logger, { options: bulkPublishObj, api_key: config.apikey }, 'info');
        } else {
          throw bulkPublishEntriesResponse;
        }
      } catch (error) {
        console.log(chalk.red(`Bulk entries ${JSON.stringify(removePublishDetails(bulkPublishObj.entries))} failed to publish with error ${JSON.stringify(error)}`));
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
          console.log(chalk.green(`Bulk assets sent for publish ${JSON.stringify(removePublishDetails(bulkPublishObj.assets))}`));
          addLogs(logger, { options: bulkPublishObj, api_key: config.apikey }, 'info');
        } else {
          throw bulkPublishAssetsResponse;
        }
      } catch (error) {
        console.log(chalk.red(`Bulk assets ${JSON.stringify(removePublishDetails(bulkPublishObj.assets))} failed to publish with error ${JSON.stringify(error.message || error)}`));
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
          entries: removePublishDetails(bulkUnPublishObj.entries),
          locales: [bulkUnPublishObj.locale],
          environments: bulkUnPublishObj.environments,
        }),
      };
      try {
        const bulkUnPublishEntriesResponse = await req(conf);
        if (bulkUnPublishEntriesResponse.notice && !bulkUnPublishEntriesResponse.error_message) {
          console.log(chalk.green(`Bulk entries sent for Unpublish  ${JSON.stringify(removePublishDetails(bulkUnPublishObj.entries))}`));
          addLogs(logger, { options: bulkUnPublishObj, api_key: config.apikey }, 'info');
        } else {
          throw bulkUnPublishEntriesResponse;
        }
      } catch (error) {
        console.log(chalk.red(`Bulk entries ${JSON.stringify(removePublishDetails(bulkUnPublishObj.entries))} failed to Unpublish with error ${JSON.stringify(error)}`));
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
          assets: removePublishDetails(bulkUnPublishObj.assets),
          locales: [bulkUnPublishObj.locale || 'en-us'],
          environments: bulkUnPublishObj.environments,
        }),
      };
      try {
        const bulkUnPublishAssetsResponse = await req(conf);
        if (bulkUnPublishAssetsResponse.notice && !bulkUnPublishAssetsResponse.error_message) {
          console.log(chalk.green(`Bulk assets sent for Unpublish ${JSON.stringify(removePublishDetails(bulkUnPublishObj.assets))}`));
          addLogs(logger, { options: bulkUnPublishObj, api_key: config.apikey }, 'info');
        } else {
          throw bulkUnPublishAssetsResponse;
        }
      } catch (error) {
        console.log(chalk.red(`Bulk assets ${JSON.stringify(removePublishDetails(bulkUnPublishObj.assets))} failed to Unpublish with error ${JSON.stringify(error)}`));
        addLogs(logger, { options: bulkUnPublishObj, api_key: config.apikey }, 'error');
      }
      break;
    default:
      console.log('No such type');
  }
}

module.exports = {
  bulkPublish,
  bulkUnPublish,
  iniatlizeLogger,
};
