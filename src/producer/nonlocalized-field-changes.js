/* eslint-disable no-console */
/* eslint-disable new-cap */
/* eslint-disable max-params */
/* eslint-disable unicorn/explicit-length-check */
/* eslint-disable camelcase */
/* eslint-disable max-depth */
/* eslint-disable complexity */
/* eslint-disable node/no-extraneous-require */
const _ = require('lodash')
const Queue = require('../util/queue')
let config = require('../config')
const req = require('../util/request')
const {bulkPublish, publishEntry, iniatlizeLogger} = require('../consumer/publish')
const retryFailedLogs = require('../util/retryfailed')
const {validateFile} = require('../util/fs')

let changedFlag = false
const queue = new Queue()
let skipCount
let logFileName
let bulkPublishSet = []

iniatlizeLogger(logFileName)

function setConfig(conf, bp) {
  if (bp) {
    logFileName = 'bulk_nonlocalized_field_changes'
    queue.consumer = bulkPublish
  } else {
    logFileName = 'nonlocalized_field_changes'
    queue.consumer = publishEntry
  }
  config = conf
  queue.config = conf
}

async function getContentTypeSchema(contentType) {
  try {
    const conf = {
      uri: `${config.cdnEndPoint}/v${config.apiVersion}/content_types/${contentType}?include_global_field_schema=true`,
      headers: {
        api_key: config.apikey,
        authorization: config.manageToken,
      },
    }
    const content = await req(conf)
    return content.content_type.schema
  } catch (error) {
    Promise.reject(error)
  }
  return true
}

/* eslint-disable consistent-return */

async function getLocalizedEntry(entry, contentType, locale, sourceEnv) {
  let conf
  try {
    conf = {
      uri: `${config.cdnEndPoint}/v${config.apiVersion}/content_types/${contentType}/entries/${entry.uid}?locale=${locale}&environment=${sourceEnv}&include_publish_details=true`,
      headers: {
        api_key: config.apikey,
        authorization: config.manageToken,
      },
    }
    const entryResponse = await req(conf)
    if (entryResponse.entry) {
      return entryResponse.entry
    }
    return {}
  } catch (error) {
    if (typeof error === 'string') {
      if (!JSON.parse(error).error_code === 141) console.log(error)
    }
  }
}

function checkReferenceFieldChanges(ref1, ref2) {
  for (let i = 0; i < (ref1.length || ref2.length); i += 1) {
    if (typeof ref1[i] === 'object' && typeof ref2[i] === 'object') {
      if (ref1[i].uid !== ref2[i].uid || ref1[i]._content_type_uid !== ref2[i]._content_type_uid) {
        changedFlag = true
      }
    } else {
      changedFlag = true
    }
  }
}

// function checkFileField(entry, localizedEntry, multiple) {
//   if (multiple) {
//     for (let i = 0; i < (entry.length || localizedEntry.length); i += 1) {
//       if (entry[i].uid != localizedEntry[i].uid) {
//         changedFlag = true;
//       }
//     }
//   } else if (entry.uid != localizedEntry.uid) {
//     changedFlag = true;
//   }
// }

function checkNonLocalizedFieldChanges(contentType, entry, localizedEntry, isNonLocalized = false) {
  contentType.forEach(field => {
    if ((field.non_localizable || isNonLocalized) && (!field.schema && !field.blocks)) {
      if ((entry[field.uid] && !localizedEntry[field.uid]) || (!entry[field.uid] && localizedEntry[field.uid])) {
        changedFlag = true
        return
      }
      if (entry[field.uid] && localizedEntry[field.uid]) {
        if (field.multiple) {
          if (JSON.stringify(entry[field.uid]) !== JSON.stringify(localizedEntry[field.uid])) {
            changedFlag = true
          }
          return
        }
        if (field.data_type === 'reference') {
          checkReferenceFieldChanges(entry[field.uid], localizedEntry[field.uid])
          return
        }
        if (entry[field.uid] !== localizedEntry[field.uid]) {
          changedFlag = true
        }
      }
    }
    if (field.data_type === 'group' || field.data_type === 'global_field') {
      if (field.multiple) {
        let tempEntry = _.cloneDeep(entry[field.uid])
        let tempLocalizedEntry = _.cloneDeep(localizedEntry[field.uid])
        if (!tempEntry) {
          tempEntry = []
        }
        if (!tempLocalizedEntry) {
          tempLocalizedEntry = []
        }
        for (let iterator = 0; iterator < tempEntry.length; iterator += 1) {
          if (field.non_localizable || isNonLocalized) {
            checkNonLocalizedFieldChanges(field.schema, tempEntry[iterator], tempLocalizedEntry || {}, true)
          } else {
            checkNonLocalizedFieldChanges(field.schema, tempEntry[iterator], tempLocalizedEntry || {}, false)
          }
        }
      } else {
        let tempEntry = _.cloneDeep(entry[field.uid])
        let tempLocalizedEntry = _.cloneDeep(localizedEntry[field.uid])
        if (!tempEntry) {
          tempEntry = {}
        }
        if (!tempLocalizedEntry) {
          tempLocalizedEntry = {}
        }
        if (field.non_localizable || isNonLocalized) {
          checkNonLocalizedFieldChanges(field.schema, tempEntry, tempLocalizedEntry, true)
        } else {
          checkNonLocalizedFieldChanges(field.schema, tempEntry, tempLocalizedEntry, false)
        }
      }
    }
    if (field.data_type === 'blocks') {
      let tempEntry = _.cloneDeep(entry[field.uid])
      let tempLocalizedEntry = _.cloneDeep(localizedEntry[field.uid])
      if (!tempEntry) tempEntry = []
      if (!tempLocalizedEntry) tempLocalizedEntry = []

      if (field.non_localizable || isNonLocalized) {
        field.blocks.forEach(block => {
          let filterTempEntryBlocks = []
          let filterLocalizedEntryBlocks = []
          filterTempEntryBlocks = tempEntry.filter(blockField => {
            if (Object.prototype.hasOwnProperty.call(blockField, block.uid)) {
              return blockField
            }
            return false
          })

          filterLocalizedEntryBlocks = tempLocalizedEntry.filter(blockField => {
            if (Object.prototype.hasOwnProperty.call(blockField, block.uid)) {
              return blockField
            }
            return false
          })

          if (filterTempEntryBlocks.length) {
            for (let iterator = 0; iterator < filterTempEntryBlocks.length; iterator += 1) {
              checkNonLocalizedFieldChanges(block.schema, filterTempEntryBlocks[iterator][block.uid], filterLocalizedEntryBlocks[iterator] ? filterLocalizedEntryBlocks[iterator][block.uid] : {}, true)
            }
          }
        })
      } else {
        field.blocks.forEach(block => {
          let filterTempEntryBlocks = []
          let filterLocalizedEntryBlocks = []
          filterTempEntryBlocks = tempEntry.filter(blockField => {
            if (Object.prototype.hasOwnProperty.call(blockField, block.uid)) {
              return blockField
            }
            return false
          })

          filterLocalizedEntryBlocks = tempLocalizedEntry.filter(blockField => {
            if (Object.prototype.hasOwnProperty.call(blockField, block.uid)) {
              return blockField
            }
            return false
          })

          if (filterTempEntryBlocks.length) {
            for (let iterator = 0; iterator < filterTempEntryBlocks.length; iterator += 1) {
              checkNonLocalizedFieldChanges(block.schema, filterTempEntryBlocks[iterator][block.uid], filterLocalizedEntryBlocks[iterator] ? filterLocalizedEntryBlocks[iterator][block.uid] : {}, false)
            }
          }
        })
      }
    }
  })
  return changedFlag
}

/* eslint-disable consistent-return */
/* eslint-disable no-await-in-loop */

async function getEntries(schema, contentType, languages, masterLocale, bulkPublish, environments, sourceEnv, skip = 0) {
  skipCount = skip
  try {
    const conf = {
      uri: `${config.apiEndPoint}/v${config.apiVersion}/content_types/${contentType}/entries?locale=${masterLocale || 'en-us'}&environment=${sourceEnv}&include_count=true&skip=${skipCount}`,
      headers: {
        api_key: config.apikey,
        authorization: config.manageToken,
      },
    }
    const entriesResponse = await req(conf)
    skipCount += entriesResponse.entries.length
    if (entriesResponse && entriesResponse.entries.length > 0) {
      for (let i = 0; i < languages.length; i += 1) {
        const locale = languages[i]
        for (let e = 0; e < entriesResponse.entries.length; e += 1) {
          const entry = entriesResponse.entries[e]
          try {
            let localizedEntry = await getLocalizedEntry(entry, contentType, locale.code, sourceEnv)
            localizedEntry = localizedEntry || {}
            if (checkNonLocalizedFieldChanges(schema, entry, localizedEntry)) {
              if (bulkPublish) {
                if (bulkPublishSet.length < 10) {
                  bulkPublishSet.push({
                    uid: entry.uid,
                    content_type: contentType,
                    locale: locale.code,
                    publish_details: localizedEntry.publish_details || [],
                  })
                }
                if (bulkPublishSet.length === 10) {
                  queue.Enqueue({
                    entries: bulkPublishSet, locale: locale.code, Type: 'entry', environments: environments,
                  })
                  bulkPublishSet = []
                  return
                }
              } else {
                queue.Enqueue({
                  content_type: contentType, publish_details: entry.publish_details || [], environments: environments, entryUid: entry.uid, locale: locale.code, Type: 'entry',
                })
              }
            } else {
              console.log(`No Change in NonLocalized field for contentType ${contentType} entryUid ${entry.uid} with locale ${locale.code}`)
            }
            changedFlag = false
          } catch (error) {
            console.log(error)
          }
        }
        if (bulkPublishSet.length > 0 && bulkPublishSet.length < 10) {
          queue.Enqueue({
            entries: bulkPublishSet, locale: locale.code, Type: 'entry', environments: environments,
          })
          bulkPublishSet = []
        }
      }
    }
    if (skipCount === entriesResponse.count) {
      changedFlag = false
      bulkPublishSet = []
      return Promise.resolve()
    }
    return getEntries(schema, contentType, languages, masterLocale, bulkPublish, environments, skipCount)
  } catch (error) {
    console.log(error)
  }
  return Promise.resolve()
}

async function getLanguages() {
  try {
    const conf = {
      uri: `${config.apiEndPoint}/v${config.apiVersion}/locales`,
      headers: {
        api_key: config.apikey,
        authorization: config.manageToken,
        'content-Type': 'application/json',
      },
    }
    const languages = await req(conf)
    return languages.locales
  } catch (error) {
    return Promise.reject(error)
  }
}

async function start({retryFailed, bulkPublish, sourceEnv, contentTypes, environments}) {
  setConfig(config, bulkPublish)
  if (retryFailed) {
    if (typeof retryFailed === 'string') {
      if (!validateFile(retryFailed, ['nonlocalized_field_changes', 'bulk_nonlocalized_field_changes'])) {
        return false
      }

      if (bulkPublish) {
        retryFailedLogs(retryFailed, queue, 'bulk')
      } else {
        retryFailedLogs(retryFailed, {entryQueue: queue}, 'publish')
      }
    }
  } else {
    try {
      const masterLocale = 'en-us'
      const languages = await getLanguages()
      // const {contentTypes} = config.nonlocalized_field_changes
      for (let i = 0; i < contentTypes.length; i += 1) {
        try {
          /* eslint-disable no-await-in-loop */
          const schema = await getContentTypeSchema(contentTypes[i])
          await getEntries(schema, contentTypes[i], languages, masterLocale, bulkPublish, environments, sourceEnv)
          /* eslint-enable no-await-in-loop */
        } catch (error) {
          console.log(error)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
}

// start();

module.exports = {
  start,
  setConfig,
  getLanguages,
  getEntries,
  getLocalizedEntry,
  getContentTypeSchema,
  checkNonLocalizedFieldChanges,
}

