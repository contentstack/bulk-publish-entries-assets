const {Command, flags} = require('@oclif/command')
const {start} = require('../producer/publish-entries')
const {validateConfig} = require('../util/validate-config')

class EntriesCommand extends Command {
  async run() {
    const {flags} = this.parse(EntriesCommand)
    this.log('flags', JSON.stringify(flags))
    if (validateConfig() && this.validate(flags)) {
      start(flags)
    }
  }

  validate({contentTypes, locales, environments, retryFailed, publishAllContentTypes}) {
    let missing = []
    if (retryFailed) {
      return true
    }

    if (publishAllContentTypes && contentTypes) {
      this.error('Do not specify contentTypes when publishAllContentTypes flag is set. Please check --help for more details', {exit: 2})
    }

    if (!contentTypes && !publishAllContentTypes) {
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

EntriesCommand.description = `Describe the command here
...
The entries command is used for publishing entries from the specified content types, to the 
specified environments and locales. 

Content Types, Environments and Locales are required for executing the command successfully
But, if retryFailed flag is set, then only a logfile is required.

Here is a detailed description for all the available flags
-----------------------------------------------------------------------------------------------------------
--retryFailed or -r : This flag is used to retry publishing entries, that failed to publish in a previous
attempt. A log file for the previous session will be required for processing the failed entries. 

NOTE: When retryFailed flag is set, all other flags will be ignored

EXAMPLE : bulk-publish entries --retryFailed [PATH TO LOG FILE]
EXAMPLE : bulk-publish entries -r [PATH TO LOG FILE]
-----------------------------------------------------------------------------------------------------------
--bulkPublish or -b : This flag is set to true by default. It indicates that contentstack's bulk
publish API will be used for publishing the entries

This flag can be set to false using --no-bulkPublish

EXAMPLE : bulk-publish entries --no-bulkPublish -c [CONTENT TYPES] -e [ENVIRONMENTS] -l [LOCALES] (bulkPublish is false)
EXAMPLE : bulk-publish entries -b -c [CONTENT TYPES] -e [ENVIRONMENTS] -l [LOCALES] (bulkPublish is true)
-----------------------------------------------------------------------------------------------------------
--publishAllContentTypes or -a : Setting this flag means that entries from all content types in your
stack will be published to given environments and locales. This flag should not be set, when content types
are explicitly mentioned

EXAMPLE : bulk-publish entries --publishAllContentTypes -e [ENVIRONMENTS] -l [LOCALES]
EXAMPLE : bulk-publish entries -a -e [ENVIRONMENTS] -l [LOCALES]

WRONG : bulk-publish entries --publishAllContentTypes -c [CONTENT TYPES] -e [ENVIRONMENTS] -l [LOCALES]
WRONG : bulk-publish entries -a -c [CONTENT TYPES] -e [ENVIRONMENTS] -l [LOCALES]
-----------------------------------------------------------------------------------------------------------
--contentTypes or -c : Content types from which the entries have to be published. Multiple content types
need to be seperated by space.

EXAMPLE : bulk-publish entries -c [CONTENT TYPE 1] [CONTENT TYPE 2] -e [ENVIRONMENTS] -l [LOCALES]
EXAMPLE : bulk-publish entries --contentTypes [CONTENT TYPE 1] [CONTENT TYPE 2] -e [ENVIRONMENTS] -l [LOCALES]
-----------------------------------------------------------------------------------------------------------
--locales or -l : Locales to which the entries have to be published. Multiple locales need to be seperated
by space

EXAMPLE : bulk-publish entries -c [CONTENT TYPES] -e [ENVIRONMENTS] --locales [LOCALE 1] [LOCALE 2]
EXAMPLE : bulk-publish entries -c [CONTENT TYPES] -e [ENVIRONMENTS] -l [LOCALE 1] [LOCALE 2]
-----------------------------------------------------------------------------------------------------------
--environments or -e : Environments to which the entries have to be published. Multiple environments
need to be seperated by space

EXAMPLE : bulk-publish entries -c [CONTENT TYPES] -e [ENVIRONMENT 1] [ENVIRONMENT 2] --locales [LOCALES]
EXAMPLE : bulk-publish entries -c [CONTENT TYPES] --environments [ENVIRONMENT 1] [ENVIRONMENT 2] --locales [LOCALES]
`

EntriesCommand.flags = {
  retryFailed: flags.string({char: 'r', description: 'retry publishing failed entries from the logfile (optional, overrides all other flags)'}),
  bulkPublish: flags.boolean({char: 'b', default: true, description: 'bulk publish entries (true by default)', allowNo: true}),
  publishAllContentTypes: flags.boolean({char: 'a', default: false, description: 'publish all content-types (optional, cannot be set when contentTypes flag is set)'}),
  contentTypes: flags.string({char: 'c', description: 'the content-types from which entries need to be published', multiple: true}),
  locales: flags.string({char: 'l', description: 'locales to which entries need to be published', multiple: true}),
  environments: flags.string({char: 'e', description: 'environments to which entries need to be published', multiple: true}),
}

EntriesCommand.usage = 'entries -c [CONTENT TYPE 1] [CONTENT TYPE 2] -e [ENVIRONMENT 1] [ENVIRONMENT 2] -l [LOCALE 1] [LOCALE 2]'

module.exports = EntriesCommand
