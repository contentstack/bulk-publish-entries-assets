const nock = require('nock');
const { getSyncEntries, setConfig, getQueryParams } = require('../../src/producer/unpublish');
// const environmentResponse = require('../dummy/environment');
const dummyConfig = require('../dummy/config');
// const entriesResponse = require('../dummy/entriesResponse');
// const entryPublishResponse = require('../dummy/entrypublished');
const syncEntriesResponse = require('../dummy/unpublish_response');


describe('testing unpublish case', () => {
  const mockedlog = () => {};

  beforeEach(() => {
    console.log = mockedlog;

    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        access_token: dummyConfig.Unpublish.deliveryToken,
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

    const queryParams = getQueryParams(dummyConfig.Unpublish.filter);
    expect(await getSyncEntries('en-us', queryParams)).toBeTruthy();
  });

  it('testing syncEntries with regular unpublish', async () => {
    dummyConfig.Unpublish.bulkUnpublish = false;
    setConfig(dummyConfig);
    const queryParams = getQueryParams(dummyConfig.Unpublish.filter);
    expect(await getSyncEntries('en-us', queryParams)).toBeTruthy();
  });
});
