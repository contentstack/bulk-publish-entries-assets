/* eslint-disable node/no-extraneous-require */
const {Command, flags} = require('@oclif/command')
const {cli} = require('cli-ux')
const {start} = require('../producer/unpublish')
const {validateConfig} = require('../util/validate-config')

class UnpublishCommand extends Command {
  async run() {
    const {flags} = this.parse(UnpublishCommand)
    if (validateConfig() && this.validate(flags)) {
      const deliveryToken = await cli.prompt('Enter delivery token of your environment')
      flags.deliveryToken = deliveryToken

      if (flags.types) {
        flags.types = flags.types.join(',')
      }

      this.log('flags', JSON.stringify(flags))
      start(flags)
    }
  }

  validate({environment, retryFailed}) {
    let missing = []
    if (retryFailed) {
      return true
    }

    if (!environment) {
      missing.push('Environment')
    }

    if (missing.length > 0) {
      this.error(`${missing.join(', ')} is required for processing this command. Please check --help for more details`, {exit: 2})
    } else {
      return true
    }
  }
}

UnpublishCommand.description = `Describe the command here
...
Extra documentation goes here
`

UnpublishCommand.flags = {
  retryFailed: flags.string({char: 'r', description: 'retry publishing failed entries from the logfile'}),
  bulkUnpublish: flags.boolean({char: 'b', default: true, description: 'bulk publish entries', allowNo: true}),
  contentType: flags.string({char: 'c', description: 'the content-types from which entries need to be published'}),
  locale: flags.string({char: 'l', description: 'locales to which entries need to be published', default: 'en-us'}),
  environment: flags.string({char: 'e', description: 'environments to which entries need to be published'}),
  types: flags.string({char: 't', description: 'types to filter from', multiple: true}),
}

module.exports = UnpublishCommand
