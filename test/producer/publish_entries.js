const nock = require('nock');
const { setConfig, getEntries, getContentTypes } = require('../../src/producer/publish_entries');
const dummyConfig = require('../dummy/config');
const bulkentriesResponse = require('../dummy/bulkentries');
const entryPublishResponse = require('../dummy/entrypublished');
const contentTypesResponse = require('../dummy/bulkContentTypeResponse');

describe('testing bulk entries publish', () => {
  const mockedlog = () => {};

  beforeEach(() => {
    console.log = mockedlog;
    nock(dummyConfig.apiEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
      },
    })
      .get('/v3/content_types/dummyContentType/entries')
      .query({
        include_count: true,
        skip: 0,
        locale: 'en-us',
      })
      .reply(200, bulkentriesResponse);

    // nock(dummyConfig.apiEndPoint, {
    //   reqheaders: {
    //     api_key: dummyConfig.apikey,
    //     authtoken: dummyConfig.authToken,
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .post('/v3/content_types/dummyContentType/entries/dummyEntryId/publish', {
    //     entry: {
    //       environments: ['dummyEnvironment'],
    //       locales: ['ar-eg'],
    //     },
    //   })
    //   .query({
    //     locale: 'ar-eg',
    //   })
    //   .reply(200, entryPublishResponse);

    // nock(dummyConfig.apiEndPoint, {
    //   reqheaders: {
    //     api_key: dummyConfig.apikey,
    //     authtoken: dummyConfig.authToken,
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .post('/v3/content_types/dummyContentType/entries/dummyEntryId2/publish', {
    //     entry: {
    //       environments: ['dummyEnvironment'],
    //       locales: ['en-us'],
    //     },
    //   })
    //   .reply(200, entryPublishResponse);

    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
      },
    })
      .get('/v3/content_types')
      .query({
        include_count: true,
        skip: 0,
      })
      .reply(200, contentTypesResponse);
  });

  setConfig(dummyConfig);
  // it('testing get Entries and publish function', async () => {
  //   expect(await getEntries('dummyContentType', 'en-us')).toBeTruthy();
  // });

  it('testing get ContentType call', async () => {
    const contentTypes = await getContentTypes(0);
    expect(Array.isArray(contentTypes)).toBe(true);
  });
});
