const nock = require('nock');
const {
  getEnvironment, setConfig, getEntries, start,
} = require('../../src/producer/publish_edits_on_env');
const environmentResponse = require('../dummy/environment');
const dummyConfig = require('../dummy/config');
const entriesResponse = require('../dummy/entriesResponse');
const entryPublishResponse = require('../dummy/entrypublished');
const paginatedEntry = require('../dummy/paginatedEntry1');
const paginatedEntry2 = require('../dummy/paginatedEntry2');


describe('testing unpublished entries on particular environment', () => {
  // const mockedlog = () => {};

  beforeEach(() => {
    // console.log = mockedlog;

    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        		authtoken: dummyConfig.authToken,
      },
    })
      .get('/v3/environments/dummyEnvironment')
      .reply(200, environmentResponse);

    nock(dummyConfig.apiEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        		access_token: dummyConfig.access_token,
      },
    })
      .get('/v3/content_types/dummyContentType/entries')
      .query({
        include_count: true,
        skip: 0,
        include_publish_details: true,
        locale: 'en-us',
      })
      .reply(200, paginatedEntry);

    nock(dummyConfig.apiEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        access_token: dummyConfig.access_token,
      },
    })
      .get('/v3/content_types/dummyContentType/entries')
      .query({
        include_count: true,
        skip: 1,
        include_publish_details: true,
        locale: 'en-us',
      })
      .reply(200, paginatedEntry);

    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        		authtoken: dummyConfig.authToken,
        		'Content-Type': 'application/json',
      },
    })
      .post('/v3/content_types/dummyContentType/entries/dummyEntryId/publish', {
        entry: {
          environments: ['dummyEnvironment'],
          locales: ['en-us'],
        },
      })
      .reply(200, entryPublishResponse);
  });

  setConfig(dummyConfig);

  it('returns environment response', async () => {
    const env = await getEnvironment('dummyEnvironment');
    expect(env.environment).toHaveProperty('uid');
  });

  // it('checking for edits on entry on particular environment', async () => {
  //   expect(await getEntries('dummyContentType', 'blt6e95bc2e7', 'en-us')).toBeDefined();
  // });

  it('get entries with skip', async () => {
    expect(await getEntries('dummyContentType', 'dummyEnvironment', 'en-us')).toBeDefined();
  });

  it('start function', () => {
    start();
  });
});
