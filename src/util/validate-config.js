/* eslint-disable unicorn/no-process-exit */
/* eslint-disable no-process-exit */
/* eslint-disable no-console */
/* eslint-disable node/no-extraneous-require */
const chalk = require('chalk')
const config = require('../config')

module.exports = {
  validateConfig: function () {
    if (!config.apikey || !config.manageToken) {
      console.log(chalk.red('The bulk-publish-cli has not been configured. Please configure it using the configure command'))
      process.exit()
    }
    return true
  },
}
