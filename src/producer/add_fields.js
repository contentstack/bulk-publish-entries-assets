const Queue = require('../util/queue');
let config = require('../../config');
const req = require('../util/request');
const { publishConsumer, iniatlizeLogger } = require('../consumer/publish');
const retryFailedLogs  = require('../util/retryfailed')

const queue = new Queue();
queue.consumer = publishConsumer;
let skipCount;
const logFileName = 'addFields';

const logger = iniatlizeLogger(logFileName);

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

function removeUnwanted(entry, unwantedkeys) {
  unwantedkeys.forEach((key) => {
    delete entry[key];
  });
  return entry;
}


function fileFields(entry,uid,multiple){
  if(entry[uid]){
    if(typeof entry[uid] ==='object' || Array.isArray(entry[uid])){
      if(multiple){
        let temp =[];
        entry[uid].forEach((file)=>{
          temp.push(file.uid)
        })
        entry[uid] = temp;
      }else {
        entry[uid] = entry[uid].uid
      }
    }
  }
}


function addFields(contentType, entry) {
  contentType.forEach((schema) => {
    if (schema.uid && !schema.schema) {

      if(Object.prototype.hasOwnProperty.call(entry, schema.uid) && schema.data_type ==='file'){
        fileFields(entry,schema.uid,schema.multiple)
      }

      if (!Object.prototype.hasOwnProperty.call(entry, schema.uid)) {
        if (schema.multiple) {
          if (schema.field_metadata && schema.field_metadata.default_value) {
            if (schema.data_type === 'isodate') {
              entry[schema.uid] = [schema.field_metadata.default_value.date];
            } else {
              entry[schema.uid] = [schema.field_metadata.default_value];
            }
          } else {
            entry[schema.uid] = [];
          }
        } else if (schema.field_metadata && schema.field_metadata.default_value) {
          if (schema.data_type === 'isodate') {
            entry[schema.uid] = schema.field_metadata.default_value.date;
          } else {
            entry[schema.uid] = schema.field_metadata.default_value;
          }
        } else if (schema.enum) {
          entry[schema.uid] = null;
        } else if (Object.prototype.hasOwnProperty.call(config.addFields.defaults, schema.data_type)) {
          entry[schema.uid] = config.addFields.defaults[schema.data_type];
        } else {
          entry[schema.uid] = '';
        }
      }
    }

    if (schema.uid && schema.schema) {
      if (!entry[schema.uid]) {
        if (schema.multiple) {
          entry[schema.uid] = [];
        } else {
          entry[schema.uid] = {};
        }
      }
    }

    if (schema.data_type === 'group' && !schema.multiple) {
      addFields(schema.schema, entry[schema.uid]);
    }
    if (schema.data_type === 'group' && schema.multiple) {
      entry[schema.uid].forEach((field) => {
        addFields(schema.schema, field);
      });
    }
    if (schema.data_type === 'global_field' && !schema.multiple) {
      addFields(schema.schema, entry[schema.uid]);
    }
    if (schema.data_type === 'global_field' && schema.multiple) {
      entry[schema.uid].forEach((field) => {
        addFields(schema.schema, field);
      });
    }
    if (schema.data_type === 'blocks') {
      if (!entry[schema.uid] && !Array.isArray(entry[schema.uid])) {
        entry[schema.uid] = [];
      }

      schema.blocks.forEach((block) => {
        let filterBlockFields = entry[schema.uid].filter((blockField) => {
          if (Object.prototype.hasOwnProperty.call(blockField, block.uid)) {
            return blockField;
          }
          return false;
        });

        if (filterBlockFields.length > 0) {
          filterBlockFields.forEach((bfield) => {
            addFields(block.schema, bfield[block.uid]);
          });
        } else {
          entry[schema.uid].push({ [block.uid]: {} });
          filterBlockFields = entry[schema.uid].filter((blockField) => {
            if (Object.prototype.hasOwnProperty.call(blockField, block.uid)) {
              return blockField;
            }
            return false;
          });

          if (filterBlockFields.length > 0) {
            filterBlockFields.forEach((bfield) => {
              addFields(block.schema, bfield[block.uid]);
            });
          }
        }
      });
    }
  });
  return entry;
}

async function updateEntry(updatedEntry, contentType, locale) {
  const entry = {
    entry: updatedEntry,
  };
  const conf = {
    uri: `${config.cdnEndPoint}/v3/content_types/${contentType}/entries/${updatedEntry.uid}?locale=${locale || 'en-us'}`,
    method: 'PUT',
    headers: {
      api_key: config.apikey,
      authtoken: config.authToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...entry,
    }),
  };
  try {
    const update = await req(conf);
    // console.log(update, '======');
    if (update.notice) {
      queue.Enqueue({
        content_type: contentType, entryUid: update.entry.uid, locale, environments: config.addFields.environments,
      });
    }
  } catch (err) {
    console.log(err);
  }
}

async function getEntries(schema, contentType, locale, skip = 0) {
  skipCount = skip;
  const conf = {
    uri: `${config.apiEndPoint}/v3/content_types/${contentType}/entries?locale=${locale || 'en-us'}&include_count=true&skip=${skipCount}`,
    headers: {
      api_key: config.apikey,
      access_token: config.access_token,
    },
  };
  try {
    const entriesResponse = await req(conf);
    entriesResponse.entries.forEach((entry) => {
      let updatedEntry = addFields(schema, entry);
      updatedEntry = removeUnwanted(entry, config.addFields.deleteFields);
      updateEntry(updatedEntry, contentType, locale);      
      skipCount += entriesResponse.entries.length;
      if (skipCount === entriesResponse.count) {
        return Promise.resolve()
      }
      return getEntries(schema,contentType, locale, skipCount);      
    });
  } catch (err) {
    console.log(err);
  }
}

function setConfig(conf) {
  config = conf;
  queue.config = conf;
}

setConfig(config);

function start() {
  for (let i = 0; i < config.addFields.contentTypes.length; i += 1) {
    getContentTypeSchema(config.addFields.contentTypes[i])
      .then(async (schema) => {
        for (let j = 0; j < config.addFields.locales.length; j += 1) {
          try {
            await getEntries(schema, config.addFields.contentTypes[i], config.addFields.locales[j]);
          } catch (err) {
            console.log(`Failed to get Entries with contentType ${config.addFields.contentTypes[i]} and locale ${config.addFields.locales[j]}`);
          }
        }
      })
      .catch((err) => {
        console.log(`Failed to fetch schema${JSON.stringify(err)}`);
    });
  }
}

module.exports = {
  getContentTypeSchema,
  getEntries,
  setConfig,
  removeUnwanted,
  addFields,
};

//start();
if (process.argv.slice(2)[0] === '-retryFailed') {
   if(typeof process.argv.slice(2)[1] ==='string'){
     if(logFileName ==='bulkPublishAssets'){
        retryFailedLogs(process.argv.slice(2)[1],queue,'bulkPublish')
     }else{
        retryFailedLogs(process.argv.slice(2)[1],queue)
     }
   }
} else {
  start();
}