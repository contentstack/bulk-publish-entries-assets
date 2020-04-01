const nock = require('nock');
const { getEnvironment, setConfig, getEntries } = require('../../src/producer/publish_unpublished_env');
const environmentResponse = require('../dummy/environment');
const dummyConfig = require('../dummy/config');
const entriesResponse = require('../dummy/entriesResponse');
const entryPublishResponse = require('../dummy/entrypublished');

describe('testing unpublished entries on particular environment', () => {
  const mockedlog = () => {};

  beforeEach(() => {
    console.log = mockedlog;

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
      })
      .reply(200, entriesResponse);

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

  it('checking for unpublished entry on particular environment', async () => {
    try {
      expect(await getEntries('dummyContentType', 'blt6e95bc2e7', 'en-us')).toBeUndefined();
    } catch (err) {
      console.log(err);
    }
  });
});
