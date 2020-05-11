const nock = require('nock');
const { getSyncEntries, setConfig, getQueryParams, start } = require('../../src/producer/cross_publish');
// const environmentResponse = require('../dummy/environment');
const dummyConfig = require('../dummy/config');
// const entriesResponse = require('../dummy/entriesResponse');
// const entryPublishResponse = require('../dummy/entrypublished');
const syncEntriesResponse = require('../dummy/unpublish_response');

const bulkPublishEntriesLog = '1587758242717.bulkPublishEntries.success';
const publishEntriesLog = '1587758242718.PublishEntries.success';

describe('testing unpublish case', () => {
  const mockedlog = () => {};

  beforeEach(() => {
    console.log = mockedlog;

    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        access_token: dummyConfig.cross_env_publish.deliveryToken,
      },
    })
      .get(`/v${dummyConfig.apiVersion}/stacks/sync`)
      .query({
        init: true,
        type: 'asset_published,entry_published',
        locale: 'en-us',
        environment: 'dummyEnvironment',
        content_type_uid: 'dummyContentType',
      })
      .reply(200, syncEntriesResponse);
  });


  it('testing syncEntries call', async () => {
    setConfig(dummyConfig);

    const queryParams = getQueryParams(dummyConfig.cross_env_publish.filter);
    expect(await getSyncEntries(queryParams)).toBeUndefined();
  });

  it('testing syncEntries with regular unpublish', async () => {
    dummyConfig.cross_env_publish.bulkPublish = false;
    setConfig(dummyConfig);
    const queryParams = getQueryParams(dummyConfig.cross_env_publish.filter);
    expect(await getSyncEntries(queryParams)).toBeTruthy();
  });

  it('testing retryFailed for bulk publish log', async () => {
    process.argv = ['stuff', 'stuff', '-retryFailed', bulkPublishEntriesLog];
    expect(await start()).toBeUndefined();
  });

  it('testing retryFailed for bulk publish log', async () => {
    dummyConfig.cross_env_publish.bulkPublish = true;
    setConfig(dummyConfig);
    process.argv = ['stuff', 'stuff', '-retryFailed', publishEntriesLog];
    expect(await start()).toBeUndefined();
  });
});
