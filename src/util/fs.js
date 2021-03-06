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

function validateFile(filename, types) {
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
          if (types && types.length > 0) {

            if(status !=='error') {
              console.log(chalk.red('Error: The given log file is not an error log file.'));
              return false;
            }

            if(types.indexOf(logType) === -1) {
              console.log(chalk.red('Error: For this operation, the log file should be of the following types'));
              types.forEach((type) => { console.log(chalk.red("\t" + type)); });
              return false;
            }
          }
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
