const nock = require('nock');
const { getEnvironment, setConfig, getEntries, start } = require('../../src/producer/publish_unpublished_env');
const environmentResponse = require('../dummy/environment');
const dummyConfig = require('../dummy/config');
const entriesResponse = require('../dummy/entriesResponse');
const entryPublishResponse = require('../dummy/entrypublished');
const bulkentriesResponse1 = require('../dummy/bulkentries1');
const bulkentriesResponse2 = require('../dummy/bulkentries2')

describe('testing unpublished entries on particular environment', () => {
  //const mockedlog = () => {};

  beforeEach(() => {
    //console.log = mockedlog;

    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
      },
    })
    .get('/v3/environments/dummyEnvironment')
    .reply(200, environmentResponse);

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
        include_publish_details:true,
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
        include_publish_details:true,
      })
      .reply(200, bulkentriesResponse2);

      nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
      },
    })
      .get('/v3/content_types/dummyContentType/entries')
      .query({
        include_count: true,
        skip: 3,
        include_publish_details:true,
      })
      .replyWithError('some error');  

    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
      },
    })
      .post('/v3/bulk/publish', {
        entries:[{
          content_type:'dummyContentType',
          uid:'dummyEntryId',
          locale:'en-us'
        },{
          content_type:'dummyContentType',
          uid:'dummEntryId2',
          locale:'en-us'
        }],
        locales:["en-us"],
        environments:["dummyEnvironment"]
      },
      )
      .reply(200, entryPublishResponse);

  });


  setConfig(dummyConfig);

  it('returns environment response', async () => {
    const env = await getEnvironment('dummyEnvironment');
    expect(env.environment).toHaveProperty('uid');
  });

  it('checking for unpublished entry on particular environment', async () => {
      expect(await getEntries('dummyContentType', 'dummyEnv', 0)).toBeUndefined();
      //expect(start()).toBeDefined()
  });

  it('testing errors for get Entries call',async () => {
    try {
      let some =await getEntries('dummyContentType', 'dummyEnv', 3)
    }catch(err){
      expect(err).toBeDefined()
    }
  })
});
