const path = require('path');
const winston = require('winston');
const fs = require('fs');

let filename;

let getLoggerInstance=module.exports.getLoggerInstance = (fileName) => {
  filename = path.join(__dirname, '../', '../', 'logs', fileName);
  const logger = winston.createLogger({
    transports: [
      new winston.transports.File({ filename }),
    ],
  });
  return logger;
};


module.exports.getAllLogs = (filename) => new Promise((resolve, reject) => {
  const options = {
    limit: 1000000000000,
    start: 0,
    order: 'desc',
  };
  logger = getLoggerInstance(filename)
  logger.query(options, async (err, result) => {
    if (err) return reject(err);
    try {
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
});

module.exports.addLogs = (logger, data) => {
  logger.log('error', data);
};
