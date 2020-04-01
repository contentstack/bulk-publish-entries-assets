const nock = require('nock');
const { bulkPublish } = require('../../src/consumer/publish');
const dummyConfig = require('../dummy/config');
const bulkPublishResponse = require('../dummy/bulkPublishResponse');


describe('testing bulk entries publish', () => {
  // const mockedlog = () => {};

  beforeEach(() => {
    // console.log = mockedlog;
    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authtoken: dummyConfig.authToken,
        authorization: dummyConfig.manageToken,
        'Content-Type': 'application/json',
      },
    })
      .post('/v3/bulk/publish', {
        entries: [{
          uid: 'dummyEntryId',
          content_type: 'dummyContentType1',
          locale: 'en-us',
        }, {
          uid: 'dummyEntryId2',
          content_type: 'dummyContentType2',
          locale: 'en-us',
        }],
        locales: ['en-us'],
        environments: ['dummyEnvironment'],
      })
      .reply(200, bulkPublishResponse);

    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authtoken: dummyConfig.authToken,
        authorization: dummyConfig.manageToken,
        'Content-Type': 'application/json',
      },
    })
      .post('/v3/bulk/publish', {
        assets: [{
          uid: 'dummyAssetUid1',
        }, {
          uid: 'dummyAssetUid1',
        }],
        locales: ['en-us'],
        environments: ['dummyEnvironment'],
      })
      .reply(200, bulkPublishResponse);
  });

  // setConfig(dummyConfig);

  it('testing bulp publish entries function', async () => {
    const bulkPublishObject = {
      locale: 'en-us',
      entries: [{
        uid: 'dummyEntryId',
        content_type: 'dummyContentType1',
        locale: 'en-us',
      }, {
        uid: 'dummyEntryId2',
        content_type: 'dummyContentType2',
        locale: 'en-us',
      }],
      Type: 'entry',
    };

    expect(bulkPublish(bulkPublishObject, dummyConfig, 'bulkpublish')).toBeUndefined();
  });


  it('testing bulk publish assets function', async () => {
    const bulkPublishObject = {
      locale: 'en-us',
      assets: [{
        uid: 'dummyAssetUid1',
      }, {
        uid: 'dummyAssetUid1',
      }],
      Type: 'asset',
    };

    expect(bulkPublish(bulkPublishObject, dummyConfig, 'bulkpublish')).toBeUndefined();
  });

  // it('logging testing', async () => {
  //   const data = {
  //     case: 'dummyCase',
  //     uid: 'dummy',
  //   };

  //   const loggingResponse = await addlogs(data);
  // });
});
