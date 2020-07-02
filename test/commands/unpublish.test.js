const nock = require('nock')
const {expect, test} = require('@oclif/test')
const {cli} = require('cli-ux')

const dummyConfig = require('../../src/config')

const deliveryToken = 'dummyDeliveryToken'

const syncEntriesResponse = require('../dummy/unpublish_response')
const bulkUnpublishResponse = require('../dummy/bulkUnpublishResponse')

const bulkUnpublishLog = '1587758242717.bulkUnpublish.error'

describe('unpublish', () => {
  const mockedlog = () => { }

  beforeEach(() => {
    console.log = mockedlog

    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        access_token: deliveryToken,
      },
    })
    .get(`/v${dummyConfig.apiVersion}/stacks/sync`)
    .query({
      init: true,
      type: 'asset_published,entry_published',
      locale: 'en-us',
      environment: 'dummyEnvironment',
      content_type_uid: 'dummyContentType',
    })
    .reply(200, syncEntriesResponse)

    // for unpublish entries
    nock(dummyConfig.apiEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
        'Content-Type': 'application/json',
      },
    })
    .post(/content_types\/([a-zA-Z0-9]*)\/entries\/([a-zA-Z0-9]*)\/unpublish/)
    .reply(200, bulkUnpublishResponse)

    // for unpublish assets
    nock(dummyConfig.apiEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
        'Content-Type': 'application/json',
      },
    })
    .post(/assets\/([a-zA-Z0-9]*)\/unpublish/)
    .reply(200, bulkUnpublishResponse)

    // for bulk unpublish
    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
        'Content-Type': 'application/json',
      },
    })
    .post(`/v${dummyConfig.apiVersion}/bulk/unpublish`)
    .reply(200, bulkUnpublishResponse)

    // nock(dummyConfig.cdnEndPoint, {
    //   reqheaders: {
    //     api_key: dummyConfig.apikey,
    //     access_token: deliveryToken,
    //   },
    // })
    //   .post(`/v${dummyConfig.apiVersion}/bulk/unpublish`)
    //   .reply(200, bulkUnpublishResponse);

    // nock(dummyConfig.cdnEndPoint, {
    //   reqheaders: {
    //     api_key: dummyConfig.apikey,
    //     access_token: deliveryToken,
    //   },
    // })
    //   .post(`/v${dummyConfig.apiVersion}/bulk/unpublish`)
    //   .reply(200, bulkUnpublishResponse);
  })

  test
  .stub(cli, 'prompt', () => async () => deliveryToken)
  .stderr()
  .command(['unpublish'])
  .catch(error => {
    expect(error.message).to.contain('Environment is required for processing this command. Please check --help for more details')
  })
  .it('runs unpublish command without any flags')

  test
  .stub(cli, 'prompt', () => async () => 'dummyDeliveryToken')
  .stdout()
  .command(['unpublish', '-e', 'dummyEnvironment', '-t', 'asset_published', 'entry_published', '-c', 'dummyContentType'])
  .it('runs unpublish with environment', ctx => {

  })

  test
  .stub(cli, 'prompt', () => async () => 'dummyDeliveryToken')
  .stdout()
  .command(['unpublish', '-e', 'dummyEnvironment', '-t', 'asset_published', 'entry_published', '-c', 'dummyContentType', '--no-bulkUnpublish'])
  .it('runs hello --name jeff', ctx => {
    // expect(ctx.stdout).to.contain('hello jeff')
  })

  test
  .stub(cli, 'prompt', () => async () => 'dummyDeliveryToken')
  .stdout()
  .command(['unpublish', '-r', bulkUnpublishLog])
  .it('runs hello --name jeff', ctx => {
    // expect(ctx.stdout).to.contain('hello jeff')
  })

  test
  .stub(cli, 'prompt', () => async () => 'dummyDeliveryToken')
  .stdout()
  .command(['unpublish', '-r', bulkUnpublishLog, '--no-bulkUnpublish'])
  .it('runs hello --name jeff', ctx => {
    // expect(ctx.stdout).to.contain('hello jeff')
  })
})
