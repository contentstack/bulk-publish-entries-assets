const _ = require('lodash');
const Queue = require('../util/queue');
let config = require('../../config');
const req = require('../util/request');
const { publishConsumer, bulkPublish, iniatlizeLogger } = require('../consumer/publish');
const retryFailedLogs = require('../util/retryfailed');

let changedFlag = false;
const queue = new Queue();
queue.consumer = publishConsumer;
let skipCount;
let logFileName = 'nonlocalized_field_changes';
let bulkPublishSet = [];

iniatlizeLogger(logFileName);

if (config.nonlocalized_field_changes.bulkPublish) {
  queue.consumer = bulkPublish;
  logFileName = 'bulkPublishEntries';
} else {
  queue.consumer = publishConsumer;
  logFileName = 'publish_unpublished_env';
}

function setConfig(conf) {
  config = conf;
  queue.config = conf;
}


async function getContentTypeSchema(contentType) {
  try {
    const conf = {
      uri: `${config.cdnEndPoint}/v3/content_types/${contentType}?include_global_field_schema=true`,
      headers: {
        api_key: config.apikey,
        access_token: config.access_token,
      },
    };
    const content = await req(conf);
    return content.content_type.schema;
  } catch (err) {
    Promise.reject(err);
  }
  return true;
}

async function getLocalizedEntry(entry, contentType, locale) {
  let conf;
  try {
    conf = {
      uri: `${config.cdnEndPoint}/v3/content_types/${contentType}/entries/${entry.uid}?locale=${locale}&environment=${config.nonlocalized_field_changes.sourceEnv}`,
      headers: {
        api_key: config.apikey,
        access_token: config.access_token,
      },
    };
    const entryResponse = await req(conf);
    if (entryResponse.entry) {
      return entryResponse.entry;
    }
  } catch (err) {
    if (typeof err === 'string') {
      if (!JSON.parse(err).error_code === 141) console.log(err);
    }
  }
  return true;
}

function checkReferenceFieldChanges(ref1, ref2) {
  for (let i = 0; i < (ref1.length || ref2.length); i += 1) {
    if (typeof ref1[i] === 'object' && typeof ref2[i] === 'object') {
      if (ref1[i].uid !== ref2[i].uid || ref1[i]._content_type_uid !== ref2[i]._content_type_uid) {
        changedFlag = true;
      }
    } else {
      changedFlag = true;
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
  contentType.forEach((field) => {
    if ((field.non_localizable || isNonLocalized) && (!field.schema && !field.blocks)) {
      if ((entry[field.uid] && !localizedEntry[field.uid]) || (!entry[field.uid] && localizedEntry[field.uid])) {
        changedFlag = true;
        return;
      }
      if (entry[field.uid] && localizedEntry[field.uid]) {
        if (field.multiple) {
          if (JSON.stringify(entry[field.uid]) !== JSON.stringify(localizedEntry[field.uid])) {
            changedFlag = true;
          }
          return;
        }
        if (field.data_type === 'reference') {
          checkReferenceFieldChanges(entry[field.uid], localizedEntry[field.uid]);
          return;
        }
        if (entry[field.uid] !== localizedEntry[field.uid]) {
          changedFlag = true;
        }
      }
    }
    if (field.data_type === 'group' || field.data_type === 'global_field') {
      if (field.multiple) {
        let tempEntry = _.cloneDeep(entry[field.uid]);
        let tempLocalizedEntry = _.cloneDeep(localizedEntry[field.uid]);
        if (!tempEntry) {
          tempEntry = [];
        }
        if (!tempLocalizedEntry) {
          tempLocalizedEntry = [];
        }
        for (let iterator = 0; iterator < tempEntry.length; iterator += 1) {
          if (field.non_localizable || isNonLocalized) {
            checkNonLocalizedFieldChanges(field.schema, tempEntry[iterator], tempLocalizedEntry || {}, true);
          } else {
            checkNonLocalizedFieldChanges(field.schema, tempEntry[iterator], tempLocalizedEntry || {}, false);
          }
        }
      } else {
        let tempEntry = _.cloneDeep(entry[field.uid]);
        let tempLocalizedEntry = _.cloneDeep(localizedEntry[field.uid]);
        if (!tempEntry) {
          tempEntry = {};
        }
        if (!tempLocalizedEntry) {
          tempLocalizedEntry = {};
        }
        if (field.non_localizable || isNonLocalized) {
          checkNonLocalizedFieldChanges(field.schema, tempEntry, tempLocalizedEntry, true);
        } else {
          checkNonLocalizedFieldChanges(field.schema, tempEntry, tempLocalizedEntry, false);
        }
      }
    }
    if (field.data_type === 'blocks') {
      let tempEntry = _.cloneDeep(entry[field.uid]);
      let tempLocalizedEntry = _.cloneDeep(localizedEntry[field.uid]);
      if (!tempEntry) tempEntry = [];
      if (!tempLocalizedEntry) tempLocalizedEntry = [];

      if (field.non_localizable || isNonLocalized) {
        field.blocks.forEach((block) => {
          let filterTempEntryBlocks = [];
          let filterLocalizedEntryBlocks = [];
          filterTempEntryBlocks = tempEntry.filter((blockField) => {
            if (Object.prototype.hasOwnProperty.call(blockField, block.uid)) {
              return blockField;
            }
            return false;
          });

          filterLocalizedEntryBlocks = tempLocalizedEntry.filter((blockField) => {
            if (Object.prototype.hasOwnProperty.call(blockField, block.uid)) {
              return blockField;
            }
            return false;
          });

          if (filterTempEntryBlocks.length) {
            for (let iterator = 0; iterator < filterTempEntryBlocks.length; iterator += 1) {
              checkNonLocalizedFieldChanges(block.schema, filterTempEntryBlocks[iterator][block.uid], filterLocalizedEntryBlocks[iterator] ? filterLocalizedEntryBlocks[iterator][block.uid] : {}, true);
            }
          }
        });
      } else {
        field.blocks.forEach((block) => {
          let filterTempEntryBlocks = [];
          let filterLocalizedEntryBlocks = [];
          filterTempEntryBlocks = tempEntry.filter((blockField) => {
            if (Object.prototype.hasOwnProperty.call(blockField, block.uid)) {
              return blockField;
            }
            return false;
          });

          filterLocalizedEntryBlocks = tempLocalizedEntry.filter((blockField) => {
            if (Object.prototype.hasOwnProperty.call(blockField, block.uid)) {
              return blockField;
            }
            return false;
          });

          if (filterTempEntryBlocks.length) {
            for (let iterator = 0; iterator < filterTempEntryBlocks.length; iterator += 1) {
              checkNonLocalizedFieldChanges(block.schema, filterTempEntryBlocks[iterator][block.uid], filterLocalizedEntryBlocks[iterator] ? filterLocalizedEntryBlocks[iterator][block.uid] : {}, false);
            }
          }
        });
      }
    }
  });
  return changedFlag;
}

// function triggerNonLocalizedFieldChecks(schema, entry, contentType, languages) {
//   return new Promise((resolve, reject) => {
//     languages.forEach(async (locale, index) => {
//       try {
//         let localizedEntry = await getLocalizedEntry(entry, contentType, locale.code);
//         localizedEntry = localizedEntry || {};
//         if (checkNonLocalizedFieldChanges(schema, entry, localizedEntry)) {
//           queue.Enqueue({
//             content_type: contentType, entryUid: entry.uid, locale: locale.code, environments: config.nonlocalized_field_changes.environments,
//           });
//         } else {
//           console.log(`No Change in NonLocalized field for contentType ${contentType} entryUid ${entry.uid} with locale ${locale.code}`);
//         }
//         changedFlag = false;
//       } catch (err) {
//         console.log(err);
//         return reject(err);
//       }
//       if (index === languages.length - 1) {
//         resolve();
//       }
//     });
//   });
// }

async function getEntries(schema, contentType, languages, masterLocale, skip = 0) {
  skipCount = skip;
  try {
    const conf = {
      uri: `${config.cdnEndPoint}/v3/content_types/${contentType}/entries?locale=${masterLocale || 'en-us'}&environment=${config.nonlocalized_field_changes.sourceEnv}&include_count=true&skip=${skipCount}`,
      headers: {
        api_key: config.apikey,
        access_token: config.access_token,
      },
    };
    const entriesResponse = await req(conf);
    skipCount += entriesResponse.entries.length;
    if (entriesResponse && entriesResponse.entries.length) {
      let entryCounter = 0;
      entriesResponse.entries.forEach((entry) => {
        // await triggerNonLocalizedFieldChecks(schema, entry, contentType, languages);
        entryCounter += 1;
        languages.forEach(async (locale) => {
          try {
            let localizedEntry = await getLocalizedEntry(entry, contentType, locale.code);
            localizedEntry = localizedEntry || {};
            if (checkNonLocalizedFieldChanges(schema, entry, localizedEntry)) {
              if (config.nonlocalized_field_changes.bulkPublish) {
                if (bulkPublishSet.length < 10) {
                  bulkPublishSet.push({
                    uid: entry.uid,
                    content_type: contentType,
                    locale: locale.code,
                  });
                }

                if (bulkPublishSet.length === 10) {
                  queue.Enqueue({
                    entries: bulkPublishSet, locale: locale.code, Type: 'entry', environments: config.nonlocalized_field_changes.environments,
                  });
                  bulkPublishSet = [];
                  return;
                }

                if (entryCounter === entriesResponse.entries.length && bulkPublishSet.length <= 10) {
                  queue.Enqueue({
                    entries: bulkPublishSet, locale: locale.code, Type: 'entry', environments: config.nonlocalized_field_changes.environments,
                  });
                  bulkPublishSet = [];
                }
              } else {
                queue.Enqueue({
                  content_type: contentType, entryUid: entry.uid, locale: locale.code, environments: config.nonlocalized_field_changes.environments,
                });
              }
            } else {
              console.log(`No Change in NonLocalized field for contentType ${contentType} entryUid ${entry.uid} with locale ${locale.code}`);
            }
            changedFlag = false;
          } catch (err) {
            console.log(err);
          }
        });
      });
    }
    if (skipCount === entriesResponse.count) {
      changedFlag = false;
      bulkPublishSet = [];
      return Promise.resolve();
    }
    return getEntries(schema, contentType, languages, masterLocale, skipCount);
  } catch (err) {
    console.log(err);
  }
  return Promise.resolve();
}


async function getMasterLocale() {
  try {
    const conf = {
      uri: `${config.cdnEndPoint}/v3/stacks/`,
      method: 'GET',
      headers: {
        api_key: config.apikey,
        authtoken: config.authToken,
      },
    };
    const stackDetails = await req(conf);
    return stackDetails.stack.master_locale;
  } catch (err) {
    console.log(err);
  }
  return true;
}

async function getLanguages() {
  try {
    const conf = {
      uri: `${config.cdnEndPoint}/v3/locales`,
      headers: {
        api_key: config.apikey,
        authtoken: config.authToken,
        'content-Type': 'application/json',
      },
    };
    const languages = await req(conf);
    return languages.locales;
  } catch (err) {
    console.log(err);
  }
  return true;
}


setConfig(config);
async function start() {
  try {
    const masterLocale = await getMasterLocale();
    const languages = await getLanguages();
    const { contentTypes } = config.nonlocalized_field_changes;
    for (let i = 0; i < contentTypes.length; i += 1) {
      try {
        /* eslint-disable no-await-in-loop */
        const schema = await getContentTypeSchema(contentTypes[i]);
        await getEntries(schema, contentTypes[i], languages, masterLocale);
        /* eslint-enable no-await-in-loop */
      } catch (err) {
        console.log(err);
      }
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  setConfig,
  getLanguages,
  getMasterLocale,
  getEntries,
  getLocalizedEntry,
  getContentTypeSchema,
  checkNonLocalizedFieldChanges,
};

if (process.argv.slice(2)[0] === '-retryFailed') {
  if (typeof process.argv.slice(2)[1] === 'string') {
    if (logFileName === 'bulkPublishAssets') {
      retryFailedLogs(process.argv.slice(2)[1], queue, 'bulkPublish');
    } else {
      retryFailedLogs(process.argv.slice(2)[1], queue);
    }
  }
} else {
  start();
}
