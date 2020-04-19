const { getAllLogs } = require('./logger');

module.exports = async (filename, queue) => {
  const logs = await getAllLogs(filename);
  if (logs.file.length > 0) {
    logs.file.forEach((log) => {
      queue.Enqueue(log.message.options);
    });
  } else {
    console.log('No Failure Logs Were Found');
  }
};
