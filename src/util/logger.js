const path = require('path');
const winston = require('winston');

let filename;

const myCustomLevels = {
  levels: {
    info: 0,
    error: 1,
    plog: 2,
  },
};

module.exports.getLoggerInstance = (fileName) => {
  filename = path.join(__dirname, '../', '../', 'logs', fileName);
  const logger = winston.createLogger({
    levels: myCustomLevels.levels, 
    transports: [
      new winston.transports.File({ filename: `${filename}.error`, level: 'error' }),
      new winston.transports.File({ filename: `${filename}.sucess`, level: 'info' }),
      new winston.transports.File({ filename: `${filename}.pubLog`, level: 'plog' }),
    ],
  });
  return logger;
};

/* eslint-disable no-multi-assign */
const getFileLoggerInstance = module.exports.getFileLoggerInstance = (fileName) => {
  filename = path.join(__dirname, '../', '../', 'logs', fileName);
  const logger = winston.createLogger({
    transports: [
      new winston.transports.File({ filename }),
    ],
  });
  return logger;
};


module.exports.getAllLogs = (fname) => new Promise((resolve, reject) => {
  const options = {
    limit: 1000000000000,
    start: 0,
    order: 'desc',
  };
  const logger = getFileLoggerInstance(fname);
  logger.query(options, async (err, result) => {
    if (err) return reject(err);
    return resolve(result);
  });
});

module.exports.addLogs = (logger, data, Type) => {

  console.log(Type)
  switch (Type) {
    case 'error':
      logger.error(data);
      break;
    case 'plog':
      logger.plog(data);
      break;   
    case 'info':
      logger.info(data);
      break;
    default:
      console.log('Unknown logging level');
  }
};
