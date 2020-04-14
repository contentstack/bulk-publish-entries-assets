const { getAllLogs } = require('./logger');

module.exports = async (filename, queue, type) => {
  const logs = await getAllLogs(filename);
  if (logs.file.length > 0) {
    logs.file.forEach((log) => {
      if (type === 'bulkPublish') {
        queue.Enqueue(log.message.options);
      } else if (type === 'asset') {
        queue.Enqueue({
          assetUid: log.options.assetUid,
        });
      } else {
        queue.Enqueue({
          content_type: log.message.options.content_type, environments: log.message.options.environments, entryUid: log.message.options.entryUid, locale: log.message.options.locale,
        });
      }
    });
  } else {
    console.log('No Failure Logs Were Found');
  }
};
