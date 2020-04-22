const fs = require('fs');
const chalk = require('chalk');
const path = require('path');

const logsDir = path.join(__dirname, '../', '../', 'logs');

/* eslint-disable consistent-return */

function doesFileExistInLogsDirectory(filename) {
  const files = fs.readdirSync(logsDir);
  if (files.indexOf(filename) !== -1) {
    return true;
  }
  console.log(chalk.red(`Error: ${filename} doesn't exist in logs directory at ${logsDir}`));
}

function validateFile(filename) {
  if (doesFileExistInLogsDirectory(filename)) {
    const [timestamp, logType, status] = filename.split('.');

    if (!timestamp || !logType || !status) {
      console.log(chalk.red(`Error: ${filename} is not a valid log file or the log name has been changed`));
      return false;
    }

    if (status !== 'success' && status !== 'error') {
      console.log(chalk.red(`Error: ${filename} is not a valid log file or the log name has been changed`));
      return false;
    }

    if (logType) {
      switch (logType) {
        case 'bulk_add_fields':
        case 'addFields':
        case 'bulk_cross_publish':
        case 'cross_publish':
        case 'bulk_nonlocalized_field_changes':
        case 'nonlocalized_field_changes':
        case 'bulkPublishAssets':
        case 'PublishAssets':
        case 'bulk_publish_edits':
        case 'publish_edits':
        case 'bulkPublishEntries':
        case 'PublishEntries':
        case 'publish_unpublished_env':
        case 'Bulk_publish_draft':
        case 'publish_draft':
        case 'bulkUnpublish':
        case 'Unpublish':
        case 'revert':
          return true;
        default:
          console.log(chalk.red(`Error: ${filename} is not a valid log file or the log name has been changed`));
          return false;
      }
    }
  }
}

module.exports = {
  validateFile,
};
