const {Command, flags} = require('@oclif/command')
const {start} = require('../producer/revert')
const {validateConfig} = require('../util/validate-config')

class RevertCommand extends Command {
  async run() {
    const {flags} = this.parse(RevertCommand)
    this.log(`flags are ${JSON.stringify(flags)}`)
    if (validateConfig() && this.validate(flags)) {
      start(flags)
    }
  }

  validate({retryFailed, logFile}) {
    let missing = []
    if (retryFailed) {
      return true
    }

    if (!logFile) {
      missing.push('Logfile')
    }

    if (missing.length > 0) {
      this.error(`${missing.join(', ')} is required for processing this command. Please check --help for more details`, {exit: 2})
    } else {
      return true
    }
  }
}

RevertCommand.description = `Describe the command here
...
Extra documentation goes here
`

RevertCommand.flags = {
  retryFailed: flags.string({char: 'r', description: 'retry publishing failed entries from the logfile'}),
  logFile: flags.string({char: 'l', description: 'logfile to be used to revert'}),
}

module.exports = RevertCommand
