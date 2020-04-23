const nock = require('nock');
const { getSyncEntries, setConfig, getQueryParams } = require('../../src/producer/unpublish');
// const environmentResponse = require('../dummy/environment');
const dummyConfig = require('../dummy/config');
// const entriesResponse = require('../dummy/entriesResponse');
// const entryPublishResponse = require('../dummy/entrypublished');
const syncEntriesResponse = require('../dummy/unpublish_response');


describe('testing unpublish case', () => {
  // const mockedlog = () => {};

  beforeEach(() => {
    // console.log = mockedlog;

    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: 'tt',
        access_token: 'tt',
      },
    })
      .get(`/v${dummyConfig.apiVersion}/stacks/sync`)
      .query({
        init: true,
        type: 'asset_published,entry_publised',
        locale: 'en-us',
        environment: 'dummyEnvironment',
      })
      .reply(200, syncEntriesResponse);


    // nock(dummyConfig.cdnEndPoint, {
    //   reqheaders: {
    //     api_key: dummyConfig.apikey,
    //     authorization: dummyConfig.manageToken,
    //   },
    // })
    // .get(`/v${dummyConfig.apiVersion}/content_types/dummyContentType/entries`)
    // .query({
    //     include_count: true,
    //     skip: 0,
    //     include_publish_details:true,
    // })
    // .reply(200, bulkentriesResponse1);

    // nock(dummyConfig.cdnEndPoint, {
    //   reqheaders: {
    //     api_key: dummyConfig.apikey,
    //     authorization: dummyConfig.manageToken,
    //   },
    // })
    //   .get(`/v${dummyConfig.apiVersion}/content_types/dummyContentType/entries`)
    //   .query({
    //     include_count: true,
    //     skip: 2,
    //     include_publish_details:true,
    //   })
    //   .reply(200, bulkentriesResponse2);

    //   nock(dummyConfig.cdnEndPoint, {
    //   reqheaders: {
    //     api_key: dummyConfig.apikey,
    //     authorization: dummyConfig.manageToken,
    //   },
    // })
    //   .get(`/v${dummyConfig.apiVersion}/content_types/dummyContentType/entries`)
    //   .query({
    //     include_count: true,
    //     skip: 3,
    //     include_publish_details:true,
    //   })
    //   .replyWithError('some error');

    // nock(dummyConfig.cdnEndPoint, {
    //   reqheaders: {
    //     api_key: dummyConfig.apikey,
    //     authorization: dummyConfig.manageToken,
    //   },
    // })
    //   .post(`/v${dummyConfig.apiVersion}/bulk/publish`, {
    //     entries:[{
    //       content_type:'dummyContentType',
    //       uid:'dummyEntryId',
    //       locale:'en-us'
    //     },{
    //       content_type:'dummyContentType',
    //       uid:'dummEntryId2',
    //       locale:'en-us'
    //     }],
    //     locales:["en-us"],
    //     environments:["dummyEnvironment"]
    //   },
    //   )
    //   .reply(200, entryPublishResponse);
  });


  it('testing syncEntries call', async () => {
    setConfig(dummyConfig);

    const queryParams = getQueryParams(dummyConfig.bulkUnpublish.filter);
    expect(await getSyncEntries('en-us', queryParams)).toBeTruthy();
  });
});
