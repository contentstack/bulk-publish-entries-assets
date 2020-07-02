const {expect, test} = require('@oclif/test')
const nock = require('nock')
const dummyConfig = require('../../src/config')

const bulkassetResponse1 = require('../dummy/bulkasset1')
const bulkassetResponse2 = require('../dummy/bulkasset2')

const assetPublishResponse = require('../dummy/assetpublished')

const bulkPublishAssetsLog = '1587758242717.bulkPublishAssets.error'

describe('assets', () => {
  const mockedlog = () => {}

  beforeEach(() => {
    console.log = mockedlog
    nock(dummyConfig.apiEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
      },
    })
    .get(`/v${dummyConfig.apiVersion}/assets`)
    .query({
      folder: 'cs_root',
      include_count: true,
      skip: 0,
      include_folders: true,
      include_publish_details: true,
    })
    .reply(200, bulkassetResponse1)

    nock(dummyConfig.apiEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
      },
    })
    .get(`/v${dummyConfig.apiVersion}/assets`)
    .query({
      folder: 'cs_root',
      include_count: true,
      skip: 2,
      include_folders: true,
      include_publish_details: true,
    })
    .reply(200, bulkassetResponse2)

    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
      },
    })
    .post(`/v${dummyConfig.apiVersion}/bulk/publish`)
    .reply(200, assetPublishResponse)

    nock(dummyConfig.apiEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
      },
    })
    .get(`/v${dummyConfig.apiVersion}/assets`)
    .query({
      folder: 'cs_root',
      include_count: true,
      skip: 3,
      include_folders: true,
      include_publish_details: true,
    })
    .reply(200, bulkassetResponse2)

    // nock(dummyConfig.cdnEndPoint, {
    //   reqheaders: {
    //     api_key: dummyConfig.apikey,
    //     authorization: dummyConfig.manageToken,
    //   },
    // })
    //   .post(`/v${dummyConfig.apiVersion}/bulk/publish`, {
    //     assets: [{
    //       uid: 'dummyAssetId',
    //     }, {
    //       uid: 'dummyAssetId2',
    //     }],
    //     locales: ['en-us'],
    //     environments: ['dummyEnvironment'],
    //   })
    //   .replyWithError('Some Error');
  })

  test
  .stderr()
  .command(['assets'])
  .catch(error => {
    expect(error.message).to.contain('Environments are required for processing this command. Please check --help for more details')
  })
  .it('runs assets command without parameters')

  test
  .stdout()
  .command(['assets', '-e', 'dummyEnvironment'])
  .it('runs assets with environment', ctx => {
    // expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['assets', '-e', 'dummyEnvironment', '--no-bulkPublish'])
  .it('runs assets with environment', ctx => {
    // expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['assets', '--retryFailed', bulkPublishAssetsLog])
  .it('runs assets with retryFailed', ctx => {
    // expect(ctx.stdout).to.contain('hello jeff')
  })

  // test
  // .stdout()
  // .command(['assets', '--retryFailed', bulkPublishAssetsLog, '--no-bulkPublish'])
  // .it('runs assets with retryFailed', ctx => {
  //   // expect(ctx.stdout).to.contain('hello jeff')
  // })
})
