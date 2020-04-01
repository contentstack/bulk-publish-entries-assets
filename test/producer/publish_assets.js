const nock = require('nock');
const { setConfig, getAssets } = require('../../src/producer/publish_assets');
const dummyConfig = require('../dummy/config');
const bulkassetResponse = require('../dummy/bulkasset');
const assetPublishResponse = require('../dummy/assetpublished');


describe('testing asset bulk publish', () => {
  const mockedlog = () => {};

  beforeEach(() => {
    console.log = mockedlog;
    nock(dummyConfig.apiEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        access_token: dummyConfig.access_token,
      },
    })
      .get('/v3/assets')
      .query({
        folder: 'cs_root',
        include_count: true,
        skip: 0,
        include_folders: true,
      })
      .reply(200, bulkassetResponse);

    nock(dummyConfig.apiEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authtoken: dummyConfig.authToken,
        'Content-Type': 'application/json',
      },
    })
      .post('/v3/assets/dummyAssetId/publish', {
        asset: {
          environments: ['dummyEnvironment'],
          locales: ['en-us'],
        },
      })
      .reply(200, assetPublishResponse);

    nock(dummyConfig.apiEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authtoken: dummyConfig.authToken,
        'Content-Type': 'application/json',
      },
    })
      .post('/v3/assets/dummyAssetId2/publish', {
        asset: {
          environments: ['dummyEnvironment'],
          locales: ['en-us'],
        },
      })
      .reply(200, assetPublishResponse);
  });

  setConfig(dummyConfig);

  it('testing get Assets and publish function', async () => {
    expect(await getAssets('cs_root')).toBeTruthy();
  });
});
