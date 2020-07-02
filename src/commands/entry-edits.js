const {Command, flags} = require('@oclif/command')
const {start} = require('../producer/publish-edits')
const {validateConfig} = require('../util/validate-config')

class EntryEditsCommand extends Command {
  async run() {
    const {flags} = this.parse(EntryEditsCommand)
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

EntryEditsCommand.description = `Describe the command here
...
The entry-edits command is used for publishing entries from the specified content types, to the 
specified environments and locales. 

Content Types, Environments and Locales are required for executing the command successfully
But, if retryFailed flag is set, then only a logfile is required.

Here is a detailed description for all the available flags
-----------------------------------------------------------------------------------------------------------
--retryFailed or -r : This flag is used to retry publishing entries, that failed to publish in a previous
attempt. A log file for the previous session will be required for processing the failed entries. 

NOTE: When retryFailed flag is set, all other flags will be ignored

EXAMPLE : bulk-publish entry-edits --retryFailed [PATH TO LOG FILE]
EXAMPLE : bulk-publish entry-edits -r [PATH TO LOG FILE]
-----------------------------------------------------------------------------------------------------------
--bulkPublish or -b : This flag is set to true by default. It indicates that contentstack's bulk
publish API will be used for publishing the entries

This flag can be set to false using --no-bulkPublish

EXAMPLE : bulk-publish entry-edits --no-bulkPublish -c [CONTENT TYPES] -e [ENVIRONMENTS] -l [LOCALES] (bulkPublish is false)
EXAMPLE : bulk-publish entry-edits -b -c [CONTENT TYPES] -e [ENVIRONMENTS] -l [LOCALES] (bulkPublish is true)
-----------------------------------------------------------------------------------------------------------
--sourceEnv or -s : Edits made to entries published on this environments, shall be published to
the specified environments and locales

EXAMPLE : bulk-publish entry-edits --publishAllContentTypes -e [ENVIRONMENTS] -l [LOCALES]
EXAMPLE : bulk-publish entry-edits -a -e [ENVIRONMENTS] -l [LOCALES]

WRONG : bulk-publish entry-edits --publishAllContentTypes -c [CONTENT TYPES] -e [ENVIRONMENTS] -l [LOCALES]
WRONG : bulk-publish entry-edits -a -c [CONTENT TYPES] -e [ENVIRONMENTS] -l [LOCALES]
-----------------------------------------------------------------------------------------------------------
--contentTypes or -c : Content types from which the entries have to be published. Multiple content types
need to be seperated by space.

EXAMPLE : bulk-publish entry-edits -c [CONTENT TYPE 1] [CONTENT TYPE 2] -e [ENVIRONMENTS] -l [LOCALES]
EXAMPLE : bulk-publish entry-edits --contentTypes [CONTENT TYPE 1] [CONTENT TYPE 2] -e [ENVIRONMENTS] -l [LOCALES]
-----------------------------------------------------------------------------------------------------------
--locales or -l : Locales to which the entries have to be published. Multiple locales need to be seperated
by space

EXAMPLE : bulk-publish entry-edits -c [CONTENT TYPES] -e [ENVIRONMENTS] --locales [LOCALE 1] [LOCALE 2]
EXAMPLE : bulk-publish entry-edits -c [CONTENT TYPES] -e [ENVIRONMENTS] -l [LOCALE 1] [LOCALE 2]
-----------------------------------------------------------------------------------------------------------
--environments or -e : Environments to which the entries have to be published. Multiple environments
need to be seperated by space

EXAMPLE : bulk-publish entry-edits -c [CONTENT TYPES] -e [ENVIRONMENT 1] [ENVIRONMENT 2] --locales [LOCALES]
EXAMPLE : bulk-publish entry-edits -c [CONTENT TYPES] --environments [ENVIRONMENT 1] [ENVIRONMENT 2] --locales [LOCALES]
`

EntryEditsCommand.flags = {
  retryFailed: flags.string({char: 'r', description: 'retry publishing failed entries from the logfile'}),
  bulkPublish: flags.boolean({char: 'b', default: true, description: 'bulk publish entries', allowNo: true}),
  sourceEnv: flags.string({char: 's', description: 'Environment from which edited entries will be published'}),
  contentTypes: flags.string({char: 'c', description: 'the content-types from which entries need to be published', multiple: true}),
  locales: flags.string({char: 'l', description: 'locales to which entries need to be published', default: ['en-us'], multiple: true}),
  environments: flags.string({char: 'e', description: 'environments to which entries need to be published', multiple: true}),
}

module.exports = EntryEditsCommand
