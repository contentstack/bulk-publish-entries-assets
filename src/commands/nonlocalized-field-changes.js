const {Command, flags} = require('@oclif/command')
const {start} = require('../producer/nonlocalized-field-changes')
const {validateConfig} = require('../util/validate-config')

class NonlocalizedFieldChangesCommand extends Command {
  async run() {
    const {flags} = this.parse(NonlocalizedFieldChangesCommand)
    this.log('flags', JSON.stringify(flags))
    if (validateConfig() && this.validate(flags)) {
      start(flags)
    }
  }

  validate({contentTypes, environments, sourceEnv, retryFailed}) {
    let missing = []
    if (retryFailed) {
      return true
    }

    if (!contentTypes) {
      missing.push('Content Types')
    }

    if (!sourceEnv) {
      missing.push('SourceEnv')
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

NonlocalizedFieldChangesCommand.description = `Describe the command here
...
Extra documentation goes here
`

NonlocalizedFieldChangesCommand.flags = {
  retryFailed: flags.string({char: 'r', description: 'retry publishing failed entries from the logfile'}),
  bulkPublish: flags.boolean({char: 'b', default: true, description: 'bulk publish entries', allowNo: true}),
  sourceEnv: flags.string({char: 's', description: 'publish all content-types'}),
  contentTypes: flags.string({char: 'c', description: 'the content-types from which entries need to be published', multiple: true}),
  environments: flags.string({char: 'e', description: 'environments to which entries need to be published', multiple: true}),
}

module.exports = NonlocalizedFieldChangesCommand
