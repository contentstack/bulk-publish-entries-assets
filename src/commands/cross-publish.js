/* eslint-disable node/no-extraneous-require */
const {Command, flags} = require('@oclif/command')
const {cli} = require('cli-ux')
const {start} = require('../producer/cross-publish')
const {validateConfig} = require('../util/validate-config')

class CrossPublishCommand extends Command {
  async run() {
    const {flags} = this.parse(CrossPublishCommand)
    this.log('flags', JSON.stringify(flags))

    if (validateConfig() && this.validate(flags)) {
      const deliveryToken = await cli.prompt('Enter delivery token of your source environment')
      flags.deliveryToken = deliveryToken
      flags.filter = {}
      flags.filter.locale = flags.locale
      delete flags.locale

      if (flags.types && flags.types.length > 0) {
        flags.filter.type = flags.types.join(',')
        delete flags.types
      }

      if (flags.contentType && flags.contentType.length > 0) {
        flags.filter.content_type_uid = flags.contentType
        delete flags.contentType
      }

      if (flags.environment && flags.environment.length > 0) {
        flags.filter.environment = flags.environment
        delete flags.environment
      }
      start(flags)
    }
  }

  validate({environment, retryFailed, destEnv}) {
    let missing = []
    if (retryFailed) {
      return true
    }

    if (!environment) {
      missing.push('Environment')
    }

    if (!destEnv) {
      missing.push('Destination Environment')
    }

    if (missing.length > 0) {
      this.error(`${missing.join(', ')} is required for processing this command. Please check --help for more details`, {exit: 2})
    } else {
      return true
    }
  }
}

CrossPublishCommand.description = `Describe the command here
...
Extra documentation goes here
`

CrossPublishCommand.flags = {
  retryFailed: flags.string({char: 'r', description: 'retry publishing failed entries from the logfile'}),
  bulkPublish: flags.boolean({char: 'b', default: true, description: 'bulk publish entries', allowNo: true}),
  contentType: flags.string({char: 'c', description: 'the content-types from which entries need to be published'}),
  locale: flags.string({char: 'l', description: 'locales to which entries need to be published', default: 'en-us'}),
  environment: flags.string({char: 'e', description: 'environments to which entries need to be published'}),
  types: flags.string({char: 't', description: 'types to filter from', multiple: true}),
  destEnv: flags.string({char: 'd', description: 'Destination Environment', multiple: true}),
}

module.exports = CrossPublishCommand
