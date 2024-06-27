const fs = require('fs');
const path = require('path');
const sanitizePath = require('./src/util/utility');

const logFileDir = 'logs';
const dummyDir = 'test/dummy/';

if (!fs.existsSync(path.join(__dirname, logFileDir))) {
  fs.mkdirSync(path.join(__dirname, logFileDir));
}

const logs = [
  '1587758242717.bulkPublishEntries.success',
  '1587758242717.PublishEntries',
  '1587758242717.PublishEntries.success',
  '1587758242717.publishentries.success',
  '1587758242717.PublishEntries.txt',
  '1587758242718.bulkPublishEntries.success',
  '1587758242718.PublishEntries.success',
  '1587758242719.PublishEntries.success',
  '1587956283100.PublishAssets.success',
  '1587758242717.bulk_add_fields.error',
  '1587758242717.bulk_cross_publish.error',
  '1587758242717.bulk_nonlocalized_field_changes.error',
  '1587758242717.bulkPublishAssets.error',
  '1587758242717.Bulk_publish_draft.error',
  '1587758242717.bulk_publish_edits.error',
  '1587758242717.bulkPublishEntries.error',
  '1587758242717.bulkUnpublish.error',
  '1587758242717.revert.error',
];

logs.forEach((element) => {
  fs.createReadStream(path.join(sanitizePath(__dirname), sanitizePath(dummyDir), sanitizePath(element))).pipe(fs.createWriteStream(path.join(sanitizePath(__dirname), sanitizePath(logFileDir), sanitizePath(element))));
});
