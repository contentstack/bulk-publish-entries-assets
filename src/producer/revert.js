const yesno = require('yesno');
const path = require('path');
const { getAllLogs, getRecentlyCreatedLogByType, logFileNames } = require('../util/logger');
const Queue = require('../util/queue');
const { doesFileExistInGivenDirectory } = require('../util/fs');
let config = require('../../config');
const req = require('../util/request');
const { iniatlizeLogger, bulkUnpublish, bulkPublish } = require('../consumer/publish');
const retryFailedLogs = require('../util/retryfailed')
// const revert = (process.argv[process.argv.length - 1] === 'revert') ? true : false;

const logfilenameProvidedByUser = getRevertAndLogfile(process.argv);

const revert_queue = new Queue();
const unpublish_queue = new Queue();

let logFileName;

revert_queue.consumer = bulkPublish;
unpublish_queue.consumer = bulkUnpublish;

logFileName = 'revert';

iniatlizeLogger(logFileName);

function setConfig(conf) {
    config = conf;
    unpublish_queue.config = conf;
    revert_queue.config = conf;
}

async function unpublishUsingLogs(logFileName) {
    let bulkUnpublishSet = [];
    let bulkPublishSet = [];
    const logs_dir = path.join(__dirname, "../", "../", "logs");
    // const bulkPublishRegex = new RegExp(`bulkPublishEntries`);

    if (doesFileExistInGivenDirectory(logFileName, logs_dir)) {
        const response = await getAllLogs(logFileName);
        let logs;

        if (response.file.length > 0) {
            logs = await formatLogData(response.file)

            logs.environments.forEach((environment) => {
                switch (logs.type) {
                    case 'entry':
                        logs.locale.forEach((loc) => {
                            logs.entries[loc].forEach(({ publish_details, uid, locale, content_type }, entryIndex) => {
                                let publishDetailsForThisEnvironment = publish_details.filter((publish_detail) => publish_detail.environment === environment.uid);

                                if (publishDetailsForThisEnvironment.length > 0) {
                                    // handle revert case

                                    publishDetailsForThisEnvironment.forEach((publish_detail, publish_detail_index) => {

                                        if (bulkPublishSet.length < 10) {
                                            bulkPublishSet.push({
                                                uid,
                                                version: publish_detail.version,
                                                locale,
                                                content_type
                                            })
                                        }

                                        if (bulkPublishSet.length === 10) {
                                            revert_queue.Enqueue({ entries: bulkPublishSet, environments: [environment.name], locale: loc, Type: 'entry' });
                                            bulkPublishSet = [];
                                        }

                                    })
                                } else {

                                    if (bulkUnpublishSet.length < 10) {
                                        bulkUnpublishSet.push({
                                            uid,
                                            locale,
                                            content_type
                                        })
                                    }

                                    if (bulkUnpublishSet.length === 10) {
                                        unpublish_queue.Enqueue({ entries: bulkUnpublishSet, environments: [environment.name], locale: loc, Type: 'entry' });
                                        bulkUnpublishSet = [];
                                    }

                                }

                                if (entryIndex === logs.entries[loc].length - 1) {

                                    if (bulkUnpublishSet.length <= 10 && bulkUnpublishSet.length !== 0) {
                                        unpublish_queue.Enqueue({ entries: bulkUnpublishSet, environments: [environment.name], locale: loc, Type: 'entry' });
                                        bulkUnpublishSet = [];
                                    }

                                    if (bulkPublishSet.length <= 10 && bulkPublishSet.length !== 0) {
                                        revert_queue.Enqueue({ entries: bulkPublishSet, environments: [environment.name], locale: loc, Type: 'entry' });
                                        bulkPublishSet = [];
                                    }
                                }
                            });
                        })
                        break;
                    case 'asset':
                        logs.assets.forEach(({ publish_details, uid }, assetIndex) => {
                            let publishDetailsForThisEnvironment = publish_details.filter((publish_detail) => publish_detail.environment === environment.uid);

                            if (publishDetailsForThisEnvironment.length > 0) {
                                // handle revert case

                                publishDetailsForThisEnvironment.forEach((publish_detail, publish_detail_index) => {

                                    if (bulkPublishSet.length < 10) {
                                        bulkPublishSet.push({
                                            uid,
                                            version: publish_detail.version,
                                        })
                                    }

                                    if (bulkPublishSet.length === 10) {
                                        revert_queue.Enqueue({ assets: bulkPublishSet, environments: [environment.name], Type: 'asset' });
                                        bulkPublishSet = [];
                                    }

                                })
                            } else {

                                if (bulkUnpublishSet.length < 10) {
                                    bulkUnpublishSet.push({
                                        uid,
                                    })
                                }

                                if (bulkUnpublishSet.length === 10) {
                                    unpublish_queue.Enqueue({ assets: bulkUnpublishSet, environments: [environment.name], Type: 'asset' });
                                    bulkUnpublishSet = [];
                                }

                            }

                            if (assetIndex === logs.assets.length - 1) {

                                if (bulkUnpublishSet.length <= 10 && bulkUnpublishSet.length !== 0) {
                                    unpublish_queue.Enqueue({ assets: bulkUnpublishSet, environments: [environment.name], Type: 'asset' });
                                    bulkUnpublishSet = [];
                                }

                                if (bulkPublishSet.length <= 10 && bulkPublishSet.length !== 0) {
                                    revert_queue.Enqueue({ assets: bulkPublishSet, environments: [environment.name], Type: 'asset' });
                                    bulkPublishSet = [];
                                }
                            }
                        });
                        break;
                }

            });

        } else {
            throw new Error("The log for the previous session is empty. Please check the error log if any");
        }
    } else {

    }
}

async function formatLogData(data) {
    let formatted_logs = {};
    let type = getLogFileDataType(data);

    switch (type) {
        case 'entry':
            formatted_logs['entries'] = {};
            formatted_logs['locale'] = [];
            for (let i = 0; i < data.length; i++) {
                if(formatted_logs['locale'].indexOf(data[i].message.options.locale) === -1) {
                    formatted_logs['locale'].push(data[i].message.options.locale);
                }
                if (!formatted_logs['entries'][data[i].message.options.locale]) formatted_logs['entries'][data[i].message.options.locale] = [];
                if (data[i].message.options.entries) {
                    // for handling bulk-publish-entries logs
                    formatted_logs['entries'][data[i].message.options.locale] = formatted_logs['entries'][data[i].message.options.locale].concat(data[i].message.options.entries);
                } else {
                    // for handling logs created by publishing in a regular way
                    formatted_logs['entries'][data[i].message.options.locale].push({
                        uid: data[i].message.options.entryUid,
                        content_type: data[i].message.options.content_type,
                        locale: data[i].message.options.locale,
                        publish_details: data[i].message.options.publish_details
                    });
                }
                if (!formatted_logs['environments']) formatted_logs['environments'] = data[i].message.options.environments;
                if (!formatted_logs['api_key']) formatted_logs['api_key'] = data[i].message.api_key;
            }
            break;
        case 'asset':
            formatted_logs['assets'] = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].message.options.assets) {
                    // for handling bulk-publish-assets logs
                    formatted_logs['assets'] = formatted_logs['assets'].concat(data[i].message.options.assets);
                } else {
                    // for handling logs created by publishing assets in a regular way
                    formatted_logs['assets'].push({
                        uid: data[i].message.options.assetUid,
                        publish_details: data[i].message.options.publish_details
                    });
                }
                if (!formatted_logs['environments']) formatted_logs['environments'] = data[i].message.options.environments;
                if (!formatted_logs['api_key']) formatted_logs['api_key'] = data[i].message.api_key;
            }
            break;
    }

    formatted_logs.environments = await getEnvironmentUids(formatted_logs.environments);
    formatted_logs['type'] = type;
    if (type === 'entry') {
        formatted_logs.entries = filterPublishDetails(formatted_logs.entries, formatted_logs.environments.map(({ uid }) => { return uid }), formatted_logs['locale']);
    } else {
        formatted_logs.assets = filterPublishDetails(formatted_logs.assets, formatted_logs.environments.map(({ uid }) => { return uid }));
    }

    return formatted_logs;
}

async function getEnvironmentUids(environments) {
    try {
        let filteredEnvironments;
        let options = {
            method: 'GET',
            uri: `${config.apiEndPoint}/v3/environments`,
            headers: {
                api_key: config.apikey,
                authorization: config.manageToken,
            }
        };
        const allEnvironments = await req(options);
        filteredEnvironments = allEnvironments.environments.filter((environment) => environments.indexOf(environment.name) !== -1).map(({ name, uid }) => { return { name, uid } });
        return filteredEnvironments
    } catch (error) {
        throw new Error(error);
    }
}

function filterPublishDetails(elements, environments, locale) {
    if (locale && locale.length > 0) {

        locale.forEach((loc) => {
            elements[loc].forEach((entry) => {
                if(entry.publish_details.length > 0) {
                    entry.publish_details = entry.publish_details.filter((element) => environments.indexOf(element.environment) !== -1 && element.locale === loc);
                }
            })
        })

    } else {
        for (let i = 0; i < elements.length; i++) {
            if(elements[i].publish_details.length > 0) {
                elements[i].publish_details = elements[i].publish_details.filter((element) => environments.indexOf(element.environment) !== -1);
            }
        }
    }
    return elements;
}

// for checking if a logfile has been provided by user
function getRevertAndLogfile(arguments) {
    if (arguments.length === 2) {
        console.error("Please provide a logfile to use for unpublishing.");
    }
    let logfilenameProvidedByUser = arguments[arguments.length - 1];
    return logfilenameProvidedByUser;
}

function getLogFileDataType(data) {
    let element = data[0];
    if (element.message.options.Type) {
        return element.message.options.Type;
    } else {
        if (element.message.options.entryUid) {
            return 'entry';
        } else {
            return 'asset';
        }
    }
}

setConfig(config);

async function start() {
    // const ok = await yesno({
    // question: `Are you sure you want to revert using the file "${logfilenameProvidedByUser}" ?`
    // })
    // if(ok) {
    unpublishUsingLogs(logfilenameProvidedByUser)
    // }
}

module.exports = {
    setConfig,
};

if (process.argv.slice(2)[0] === '-retryFailed') {
    if (typeof process.argv.slice(2)[1] === 'string') {
        retryFailedLogs(process.argv.slice(2)[1], queue)
    }
} else {
    start();
}


//start();

