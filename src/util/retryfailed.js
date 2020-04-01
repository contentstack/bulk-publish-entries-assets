const { getAllLogs } = require('./logger');

const retryFailedLogs = module.exports = async (filename, queue, type) => {
  const logs = await getAllLogs(filename);
  if (logs.file.length > 0) {
    logs.file.forEach((log) => {
      if (type === 'bulkPublish') {
        queue.Enqueue(log.options);
      } else if (type === 'asset') {
        queue.Enqueue({
          assetUid: log.options.assetUid,
        });
      } else {
        queue.Enqueue({
          content_type: log.options.content_type, environments: log.options.environments, entryUid: log.options.entryUid, locale: log.options.locale,
        });
      }
    });
  } else {
    console.log('No Failure Logs Were Found');
  }
};
