const path = require('path');
const winston = require('winston');

let filename;

const getLoggerInstance = module.exports.getLoggerInstance = (fileName) => {
  filename = path.join(__dirname, '../', '../', 'logs', fileName);
  const logger = winston.createLogger({
    transports: [
      new winston.transports.File({ filename:`${filename}.error`, level:'error' }),
      new winston.transports.File({ filename:`${filename}.sucess`, levelL:'info'}),
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
  const logger = getLoggerInstance(filename);
  logger.query(options, async (err, result) => {
    if (err) return reject(err);
    try {
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
});

module.exports.addLogs = (logger, data, Type) => {
  switch(Type){
    case 'error':
      logger.error(data)
      break;
    case 'info':
      logger.info(data)
      break;
    default:
      console.log('Unknown logging level')    
  }

};
