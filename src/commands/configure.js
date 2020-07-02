const {Command} = require('@oclif/command')
const {cli} = require('cli-ux')
const fs = require('fs')
const path = require('path')
const defaults = require('../config/defaults.json')

class ConfigureCommand extends Command {
  async run() {
    const apikey = await cli.prompt('Please enter the api key of your stack')
    const manageToken = await cli.prompt('Please enter the management token for your stack')

    const config = {
      apiEndPoint: defaults.apiEndPoint,
      cdnEndPoint: defaults.cdnEndPoint,
      apiVersion: defaults.apiVersion,
      apikey: apikey,
      manageToken: manageToken,
    }

    fs.writeFileSync(path.resolve(__dirname, '../config/index.json'), JSON.stringify(config), err => {
      if (err) {
        this.error('There was an issue while creating the configuration file. Please contact the support team', {exit: 2})
      }
      this.log('The configuration file has been created successfully')
      this.exit(0)
    })
  }
}

ConfigureCommand.description = `Describe the command here
...
Extra documentation goes here
`

ConfigureCommand.flags = {
}

module.exports = ConfigureCommand
