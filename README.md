bulk-publish
============



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/bulk-publish.svg)](https://npmjs.org/package/bulk-publish)
[![Downloads/week](https://img.shields.io/npm/dw/bulk-publish.svg)](https://npmjs.org/package/bulk-publish)
[![License](https://img.shields.io/npm/l/bulk-publish.svg)](https://github.com/abhinav-from-contentstack/bulk-publish/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g bulk-publish
$ bulk-publish COMMAND
running command...
$ bulk-publish (-v|--version|version)
bulk-publish/0.0.0 linux-x64 node-v10.19.0
$ bulk-publish --help [COMMAND]
USAGE
  $ bulk-publish COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`bulk-publish add-fields`](#bulk-publish-add-fields)
* [`bulk-publish assets`](#bulk-publish-assets)
* [`bulk-publish configure`](#bulk-publish-configure)
* [`bulk-publish cross-publish`](#bulk-publish-cross-publish)
* [`bulk-publish entries`](#bulk-publish-entries)
* [`bulk-publish entry-edits`](#bulk-publish-entry-edits)
* [`bulk-publish hello`](#bulk-publish-hello)
* [`bulk-publish help [COMMAND]`](#bulk-publish-help-command)
* [`bulk-publish nonlocalized-field-changes`](#bulk-publish-nonlocalized-field-changes)
* [`bulk-publish revert`](#bulk-publish-revert)
* [`bulk-publish unpublish`](#bulk-publish-unpublish)
* [`bulk-publish unpublished-entries`](#bulk-publish-unpublished-entries)

## `bulk-publish add-fields`

Describe the command here

```
USAGE
  $ bulk-publish add-fields

OPTIONS
  -a, --publishAllContentTypes     publish all content-types
  -b, --bulkPublish                bulk publish entries
  -c, --contentTypes=contentTypes  the content-types from which entries need to be published
  -d, --deleteFields=deleteFields  fields to be deleted
  -e, --environments=environments  environments to which entries need to be published
  -l, --locales=locales            locales to which entries need to be published
  -r, --retryFailed=retryFailed    retry publishing failed entries from the logfile

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/add-fields.js](https://github.com/abhinav-from-contentstack/bulk-publish/blob/v0.0.0/src/commands/add-fields.js)_

## `bulk-publish assets`

Describe the command here

```
USAGE
  $ bulk-publish assets

OPTIONS
  -b, --[no-]bulkPublish           bulk publish entries
  -e, --environments=environments  environments to which entries need to be published
  -r, --retryFailed=retryFailed    retry publishing failed entries from the logfile
  -u, --folderUid=folderUid        [default: cs_root] folder-uid

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/assets.js](https://github.com/abhinav-from-contentstack/bulk-publish/blob/v0.0.0/src/commands/assets.js)_

## `bulk-publish configure`

Describe the command here

```
USAGE
  $ bulk-publish configure

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/configure.js](https://github.com/abhinav-from-contentstack/bulk-publish/blob/v0.0.0/src/commands/configure.js)_

## `bulk-publish cross-publish`

Describe the command here

```
USAGE
  $ bulk-publish cross-publish

OPTIONS
  -b, --[no-]bulkPublish         bulk publish entries
  -c, --contentType=contentType  the content-types from which entries need to be published
  -d, --destEnv=destEnv          Destination Environment
  -e, --environment=environment  environments to which entries need to be published
  -l, --locale=locale            [default: en-us] locales to which entries need to be published
  -r, --retryFailed=retryFailed  retry publishing failed entries from the logfile
  -t, --types=types              types to filter from

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/cross-publish.js](https://github.com/abhinav-from-contentstack/bulk-publish/blob/v0.0.0/src/commands/cross-publish.js)_

## `bulk-publish entries`

Describe the command here

```
USAGE
  $ bulk-publish entries

OPTIONS
  -a, --publishAllContentTypes     publish all content-types
  -b, --bulkPublish                bulk publish entries
  -c, --contentTypes=contentTypes  the content-types from which entries need to be published
  -e, --environments=environments  environments to which entries need to be published
  -l, --locales=locales            locales to which entries need to be published
  -r, --retryFailed=retryFailed    retry publishing failed entries from the logfile

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/entries.js](https://github.com/abhinav-from-contentstack/bulk-publish/blob/v0.0.0/src/commands/entries.js)_

## `bulk-publish entry-edits`

Describe the command here

```
USAGE
  $ bulk-publish entry-edits

OPTIONS
  -b, --[no-]bulkPublish           bulk publish entries
  -c, --contentTypes=contentTypes  the content-types from which entries need to be published
  -e, --environments=environments  environments to which entries need to be published
  -l, --locales=locales            [default: en-us] locales to which entries need to be published
  -r, --retryFailed=retryFailed    retry publishing failed entries from the logfile
  -s, --sourceEnv=sourceEnv        publish all content-types

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/entry-edits.js](https://github.com/abhinav-from-contentstack/bulk-publish/blob/v0.0.0/src/commands/entry-edits.js)_

## `bulk-publish hello`

Describe the command here

```
USAGE
  $ bulk-publish hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/hello.js](https://github.com/abhinav-from-contentstack/bulk-publish/blob/v0.0.0/src/commands/hello.js)_

## `bulk-publish help [COMMAND]`

display help for bulk-publish

```
USAGE
  $ bulk-publish help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src/commands/help.ts)_

## `bulk-publish nonlocalized-field-changes`

Describe the command here

```
USAGE
  $ bulk-publish nonlocalized-field-changes

OPTIONS
  -b, --bulkPublish                bulk publish entries
  -c, --contentTypes=contentTypes  the content-types from which entries need to be published
  -e, --environments=environments  environments to which entries need to be published
  -r, --retryFailed=retryFailed    retry publishing failed entries from the logfile
  -s, --sourceEnv=sourceEnv        publish all content-types

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/nonlocalized-field-changes.js](https://github.com/abhinav-from-contentstack/bulk-publish/blob/v0.0.0/src/commands/nonlocalized-field-changes.js)_

## `bulk-publish revert`

Describe the command here

```
USAGE
  $ bulk-publish revert

OPTIONS
  -l, --logFile=logFile          logfile to be used to revert
  -r, --retryFailed=retryFailed  retry publishing failed entries from the logfile

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/revert.js](https://github.com/abhinav-from-contentstack/bulk-publish/blob/v0.0.0/src/commands/revert.js)_

## `bulk-publish unpublish`

Describe the command here

```
USAGE
  $ bulk-publish unpublish

OPTIONS
  -b, --[no-]bulkUnpublish       bulk publish entries
  -c, --contentType=contentType  the content-types from which entries need to be published
  -e, --environment=environment  environments to which entries need to be published
  -l, --locale=locale            [default: en-us] locales to which entries need to be published
  -r, --retryFailed=retryFailed  retry publishing failed entries from the logfile
  -t, --types=types              types to filter from

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/unpublish.js](https://github.com/abhinav-from-contentstack/bulk-publish/blob/v0.0.0/src/commands/unpublish.js)_

## `bulk-publish unpublished-entries`

Describe the command here

```
USAGE
  $ bulk-publish unpublished-entries

OPTIONS
  -b, --bulkPublish                bulk publish entries
  -c, --contentTypes=contentTypes  the content-types from which entries need to be published
  -e, --environments=environments  environments to which entries need to be published
  -l, --locale=locale              [default: en-us] locales to which entries need to be published
  -r, --retryFailed=retryFailed    retry publishing failed entries from the logfile
  -s, --sourceEnv=sourceEnv        publish all content-types

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/unpublished-entries.js](https://github.com/abhinav-from-contentstack/bulk-publish/blob/v0.0.0/src/commands/unpublished-entries.js)_
<!-- commandsstop -->
