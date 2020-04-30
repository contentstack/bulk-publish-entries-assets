const nock = require('nock');
const retryFailed = require('../../src/util/retryfailed');
const dummyConfig = require('../dummy/config');
const Queue = require('../../src/util/queue');

const mockedLog = () => { };
console.log = mockedLog;

const queue = new Queue();
queue.config = dummyConfig;
queue.consumer = mockedLog;

const bulkPublishEntriesLog = '1587758242717.bulkPublishEntries.success';
const publishEntriesLog = '1587758242718.PublishEntries.success';

describe('testing retryFailed', () => {
  it('testing with bulkpublish log', async () => {
    expect(await retryFailed(bulkPublishEntriesLog, queue, 'bulk')).toBeUndefined();
  });

  it('testing with bulkpublish log', async () => {
    expect(await retryFailed(publishEntriesLog, { entryQueue: queue }, 'publish')).toBeUndefined();
  });
});