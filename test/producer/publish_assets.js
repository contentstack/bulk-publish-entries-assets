const nock = require('nock');
const { setConfig, getAssets } = require('../../src/producer/publish_assets');
const dummyConfig = require('../dummy/config');
const bulkassetResponse1 = require('../dummy/bulkasset1')
const bulkassetResponse2 = require('../dummy/bulkasset2')

const assetPublishResponse = require('../dummy/assetpublished');

describe('testing asset bulk publish', () => {
  //const mockedlog = () => {};

  beforeEach(() => {
    //console.log = mockedlog;
    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
      },
    })
      .get('/v3/assets')
      .query({
        folder: 'cs_root',
        include_count: true,
        skip: 0,
        include_folders: true,
        include_publish_details:true
      })
      .reply(200, bulkassetResponse1);

    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
      },
    })
      .get('/v3/assets')
      .query({
        folder: 'cs_root',
        include_count: true,
        skip: 2,
        include_folders: true,
        include_publish_details:true
      })
      .reply(200, bulkassetResponse2);

      nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
      },
    })
      .post('/v3/bulk/publish', {
        assets:[{
          uid:'dummyAssetId',
        },{
          uid:'dummyAssetId2',
        }],
        locales:["en-us"],
        environments:["dummyEnvironment"]
      },
      )
      .reply(200, assetPublishResponse);

    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
      },
    })
      .get('/v3/assets')
      .query({
        folder: 'cs_root',
        include_count: true,
        skip: 3,
        include_folders: true,
        include_publish_details:true
      })
      .reply(200, bulkassetResponse2);

      nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
      },
    })
      .post('/v3/bulk/publish', {
        assets:[{
          uid:'dummyAssetId',
        },{
          uid:'dummyAssetId2',
        }],
        locales:["en-us"],
        environments:["dummyEnvironment"]
      },
      )
      .replyWithError("Some Error");
  });

  setConfig(dummyConfig);

  it('testing get Assets and publish function', async () => {
    expect(await getAssets('cs_root')).toBeTruthy();
  });

  it('testing for errors inside get assets call', async ()=>{
    expect(await getAssets('cs_root',3)).toBeTruthy();
  })
});
