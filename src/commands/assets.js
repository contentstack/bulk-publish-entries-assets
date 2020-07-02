const {Command, flags} = require('@oclif/command')
const {start} = require('../producer/publish-assets')
const {validateConfig} = require('../util/validate-config')

class AssetsCommand extends Command {
  async run() {
    const {flags} = this.parse(AssetsCommand)
    this.log('flags', JSON.stringify(flags))
    if (validateConfig() && this.validate(flags)) {
      start(flags)
    }
  }

  validate({environments, retryFailed}) {
    let missing = []
    if (retryFailed) {
      return true
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

AssetsCommand.description = `Describe the command here
...
The assets command is used for publishing assets from the specified stack, to the 
specified environments.

Environment/s are required for executing the command successfully
But, if retryFailed flag is set, then only a logfile is required.

Here is a detailed description for all the available flags
-----------------------------------------------------------------------------------------------------------
--retryFailed or -r : This flag is used to retry publishing assets, that failed to publish in a previous
attempt. A log file for the previous session will be required for processing the failed assets. 

NOTE: When retryFailed flag is set, all other flags will be ignored

EXAMPLE : bulk-publish assets --retryFailed [PATH TO LOG FILE]
EXAMPLE : bulk-publish assets -r [PATH TO LOG FILE]
-----------------------------------------------------------------------------------------------------------
--bulkPublish or -b : This flag is set to true by default. It indicates that contentstack's bulk
publish API will be used for publishing the assets

This flag can be set to false using --no-bulkPublish

EXAMPLE : bulk-publish assets --no-bulkPublish -e [ENVIRONMENTS] (bulkPublish is false)
EXAMPLE : bulk-publish assets -b -e [ENVIRONMENTS] (bulkPublish is true)
-----------------------------------------------------------------------------------------------------------
--environments or -e : Environments to which the assets have to be published. Multiple environments
need to be seperated by space

EXAMPLE : bulk-publish assets -e [ENVIRONMENT 1] [ENVIRONMENT 2] 
EXAMPLE : bulk-publish assets --environments [ENVIRONMENT 1] [ENVIRONMENT 2]
-----------------------------------------------------------------------------------------------------------
--folderUid or -u : Folder Uid can be specified for publishing assets belonging to a specific folder. 
The default value for this flag is cs_root, which denotes the main asset folder

EXAMPLE : bulk-publish assets -e [ENVIRONMENT 1] [ENVIRONMENT 2] --folderUid [FOLDER UID]
EXAMPLE : bulk-publish assets -e [ENVIRONMENT 1] [ENVIRONMENT 2] -u [FOLDER UID]
`

AssetsCommand.flags = {
  retryFailed: flags.string({char: 'r', description: 'retry publishing failed assets from the logfile (optional, will override all other flags)'}),
  environments: flags.string({char: 'e', description: 'environments to which assets need to be published', multiple: true}),
  folderUid: flags.string({char: 'u', description: 'folder-uid from which the assets need to be published (optional)', default: 'cs_root'}),
  bulkPublish: flags.boolean({char: 'b', default: true, description: 'bulk publish assets (true by default)', allowNo: true}),
}

module.exports = AssetsCommand
