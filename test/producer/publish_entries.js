const nock = require('nock');
const {
  setConfig, getEntries, getContentTypes,
} = require('../../src/producer/publish_entries');
const dummyConfig = require('../dummy/config');
const bulkentriesResponse1 = require('../dummy/bulkentries1');
const bulkentriesResponse2 = require('../dummy/bulkentries2');
const entryPublishResponse = require('../dummy/entrypublished');
const contentTypesResponse = require('../dummy/bulkContentTypeResponse');

describe('testing bulk entries publish', () => {
  const mockedlog = () => {};

  beforeEach(() => {
    console.log = mockedlog;
    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
      },
    })
      .get('/v3/content_types/dummyContentType/entries')
      .query({
        include_count: true,
        skip: 0,
        include_publish_details: true,
        locale: 'en-us',
      })
      .reply(200, bulkentriesResponse1);

    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
      },
    })
      .get('/v3/content_types/dummyContentType/entries')
      .query({
        include_count: true,
        skip: 2,
        include_publish_details: true,
        locale: 'en-us',
      })
      .reply(200, bulkentriesResponse2);

    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
      },
    })
      .post('/v3/bulk/publish', {
        entries: [{
          content_type: 'dummyContentType',
          uid: 'dummyEntryId',
          locale: 'en-us',
        }, {
          content_type: 'dummyContentType',
          uid: 'dummEntryId2',
          locale: 'en-us',
        }],
        locales: ['en-us'],
        environments: ['dummyEnvironment'],
      })
      .reply(200, entryPublishResponse);

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

    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
      },
    })
      .get('/v3/content_types')
      .query({
        include_count: true,
        skip: 1,
      })
      .replyWithError('Some Error');
  });

  setConfig(dummyConfig);
  it('testing get Entries and publish function', async () => {
    expect(await getEntries('dummyContentType', 'en-us')).toBeUndefined();
  });
  it('testing get ContentType call', async () => {
    const contentTypes = await getContentTypes(0);
    expect(Array.isArray(contentTypes)).toBe(true);
  });
  it('replying with error in get contentTypes call', async () => {
    expect(await getContentTypes(1)).toBeTruthy();
  });
});
