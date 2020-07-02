/* eslint-disable no-console */
const {expect, test} = require('@oclif/test')
const nock = require('nock')
const dummyConfig = require('../../src/config')

const bulkentriesResponse1 = require('../dummy/bulkentries1')
const bulkentriesResponse2 = require('../dummy/bulkentries2')
const entryPublishResponse = require('../dummy/entrypublished')
const contentTypesResponse = require('../dummy/bulkContentTypeResponse')
const environmentResponse = require('../dummy/environment')

const bulkPublishEntriesLog = '1587758242717.bulk_publish_edits.error'

describe('entry-edits', () => {
  const mockedlog = () => { }
  beforeEach(() => {
    console.log = mockedlog
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
      locale: 'en-us',
    })
    .reply(200, bulkentriesResponse1)

    nock(dummyConfig.apiEndPoint, {
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
      locale: 'en-us',
    })
    .reply(200, bulkentriesResponse2)

    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
      },
    })
    .post(`/v${dummyConfig.apiVersion}/bulk/publish`)
    .reply(200, entryPublishResponse)

    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
        'Content-Type': 'application/json',
      },
    })
    .post(/\/entries\/([a-zA-Z]*)\/publish/, {
      entry: {
        environments: ['dummyEnvironment'],
        locales: ['en-us'],
      },
    })
    .reply(200, entryPublishResponse)

    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
      },
    })
    .get(`/v${dummyConfig.apiVersion}/content_types`)
    .query({
      include_count: true,
      skip: 0,
    })
    .reply(200, contentTypesResponse)

    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
      },
    })
    .get(`/v${dummyConfig.apiVersion}/content_types`)
    .query({
      include_count: true,
      skip: 1,
    })
    .replyWithError('Some Error')

    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
      },
    })
    .get(`/v${dummyConfig.apiVersion}/environments/dummyEnvironment`)
    .reply(200, environmentResponse)
  })

  test
  .stdout()
  .command(['entry-edits', '-s', 'dummyEnvironment', '-c', 'dummyContentType', '-e', 'dummyEnvironment'])
  .it('runs hello', ctx => {
    // expect(ctx.stdout).to.contain('hello world')
    console.log(ctx.stdout)
  })

  test
  .stderr()
  .command(['entry-edits'])
  .catch(error => {
    expect(error.message).to.contain('Content Types, SourceEnv, Environments are required for processing this command. Please check --help for more details')
  })
  .it('Run entry-edits without any flags')

  test
  .stdout()
  .command(['entry-edits', '-r', bulkPublishEntriesLog])
  .it('runs hello', ctx => {
    // expect(ctx.stdout).to.contain('hello world')
    console.log(ctx.stdout)
  })

  // test
  // .stdout()
  // .command(['entry-edits', '--name', 'jeff'])
  // .it('runs hello --name jeff', ctx => {
  //   expect(ctx.stdout).to.contain('hello jeff')
  // })
})
