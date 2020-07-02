const {Command, flags} = require('@oclif/command')
const {start} = require('../producer/add-fields')
const {validateConfig} = require('../util/validate-config')

class AddFieldsCommand extends Command {
  async run() {
    const {flags} = this.parse(AddFieldsCommand)
    this.log('flags', JSON.stringify(flags))
    if (validateConfig() && this.validate(flags)) {
      start(flags)
    }
  }

  validate({contentTypes, locales, environments, retryFailed}) {
    let missing = []
    if (retryFailed) {
      return true
    }

    if (!contentTypes) {
      missing.push('Content Types')
    }

    if (!locales) {
      missing.push('Locales')
    }

    if (!environments) {
      missing.push('Environments')
    }

    if (missing.length > 0) {
      this.error(`${missing.join(', ')} are required for processing this command. Please check --help for more details`, {exit: 2})
    } else {
      return true
    }
  }
}

AddFieldsCommand.description = `Describe the command here
...
Extra documentation goes here
`

AddFieldsCommand.flags = {
  retryFailed: flags.string({char: 'r', description: 'retry publishing failed entries from the logfile'}),
  bulkPublish: flags.boolean({char: 'b', default: true, description: 'bulk publish entries', allowNo: true}),
  contentTypes: flags.string({char: 'c', description: 'the content-types from which entries need to be published', multiple: true}),
  locales: flags.string({char: 'l', description: 'locales to which entries need to be published', multiple: true, default: ['en-us']}),
  environments: flags.string({char: 'e', description: 'environments to which entries need to be published', multiple: true}),
  deleteFields: flags.string({char: 'd', description: 'fields to be deleted', multiple: true}),
}

module.exports = AddFieldsCommand
