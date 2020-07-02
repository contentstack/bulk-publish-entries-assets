const {expect, test} = require('@oclif/test')
const nock = require('nock')
const dummyConfig = require('../../src/config')
const environmentResponse = require('../dummy/environment')
const entryPublishResponse = require('../dummy/entrypublished')
const bulkentriesResponse1 = require('../dummy/bulkentries1')
const bulkentriesResponse2 = require('../dummy/bulkentries2')

const bulkPublishDraftsLog = '1587758242717.Bulk_publish_draft.error'

describe('unpublished-entries', () => {
  const mockedlog = () => {}

  beforeEach(() => {
    console.log = mockedlog

    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
      },
    })
    .get(`/v${dummyConfig.apiVersion}/environments/dummyEnvironment`)
    .reply(200, environmentResponse)

    nock(dummyConfig.apiEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
      },
    })
    .get(`/v${dummyConfig.apiVersion}/content_types/dummyContentType/entries`)
    .query({
      include_count: true,
      skip: 0,
      include_publish_details: true,
    })
    .reply(200, bulkentriesResponse1)

    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
      },
    })
    .get(`/v${dummyConfig.apiVersion}/content_types/dummyContentType/entries`)
    .query({
      include_count: true,
      skip: 2,
      include_publish_details: true,
    })
    .reply(200, bulkentriesResponse2)

    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
      },
    })
    .get(`/v${dummyConfig.apiVersion}/content_types/dummyContentType/entries`)
    .query({
      include_count: true,
      skip: 3,
      include_publish_details: true,
    })
    .replyWithError('some error')

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
  .stderr()
  .command(['unpublished-entries'])
  .catch(error => {
    expect(error.message).to.contain('Content Types, SourceEnv, Environments are required for processing this command. Please check --help for more details')
  })
  .it('one')

  test
  .stdout()
  .command(['unpublished-entries', '-c', 'dummyContentType', '-e', 'dummyEnvironment', '-s', 'dummyEnvironment'])
  .it('runs hello', ctx => {
    // expect(ctx.stdout).to.contain('publish')
  })

  test
  .stdout()
  .command(['unpublished-entries', '-r', bulkPublishDraftsLog])
  .it('runs hello', ctx => {
    // expect(ctx.stdout).to.contain('publish')
  })

  // test
  // .stdout()
  // .command(['unpublished-entries', '--name', 'jeff'])
  // .it('runs hello --name jeff', ctx => {
  //   expect(ctx.stdout).to.contain('hello jeff')
  // })
})
