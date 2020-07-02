const dummyConfig = require('../../src/config')
const {expect, test} = require('@oclif/test')
const nock = require('nock')
const {cli} = require('cli-ux')

const syncEntriesResponse = require('../dummy/unpublish_response')

const bulkCrossPublishLog = '1587758242717.bulk_cross_publish.error'
const deliveryToken = 'dummyDeliveryToken'
const entryPublishResponse = require('../dummy/entrypublished')


describe('cross-publish', () => {
  const mockedlog = () => {}

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

    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
        'Content-Type': 'application/json',
      },
    })
    .post(/\/content_types\/dummyContentType\/entries\/([a-zA-Z0-9]*)\/publish/)
    .reply(200, entryPublishResponse)

    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
        'Content-Type': 'application/json',
      },
    })
    .post(/\/assets\/([a-zA-Z0-9]*)\/publish/)
    .reply(200, entryPublishResponse)

    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
      },
    })
    .post(`/v${dummyConfig.apiVersion}/bulk/publish`)
    .reply(200, entryPublishResponse)
  })

  test
  .stub(cli, 'prompt', () => async () => deliveryToken)
  .stderr()
  .command(['cross-publish'])
  .catch(error => {
    expect(error.message).to.contain('Environment, Destination Environment is required for processing this command. Please check --help for more details')
  })
  .it('runs hello')

  test
  .stub(cli, 'prompt', () => async () => deliveryToken)
  .stdout()
  .command(['cross-publish', '-t', 'asset_published', 'entry_published', '-e', 'dummyEnvironment', '-c', 'dummyContentType', '-d', 'dummyEnvironment'])
  .it('runs hello --name jeff', ctx => {

  })

  test
  .stub(cli, 'prompt', () => async () => deliveryToken)
  .stdout()
  .command(['cross-publish', '-t', 'asset_published', 'entry_published', '-e', 'dummyEnvironment', '-c', 'dummyContentType', '-d', 'dummyEnvironment', '--no-bulkPublish'])
  .it('runs hello --name jeff', ctx => {

  })

  test
  .stub(cli, 'prompt', () => async () => deliveryToken)
  .stdout()
  .command(['cross-publish', '-r', bulkCrossPublishLog])
  .it('runs hello --name jeff', ctx => {

  })
})
