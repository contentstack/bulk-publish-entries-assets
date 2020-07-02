/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-console */
const {expect, test} = require('@oclif/test')
const nock = require('nock')

const {setConfig} = require('../../src/producer/publish-entries')
const dummyConfig = require('../../src/config')
const bulkentriesResponse1 = require('../dummy/bulkentries1')
const bulkentriesResponse2 = require('../dummy/bulkentries2')
const entryPublishResponse = require('../dummy/entrypublished')
const contentTypesResponse = require('../dummy/bulkContentTypeResponse')

const bulkPublishEntriesLog = '1587758242717.bulkPublishEntries.error'

console.log('dummyConfig', JSON.stringify(dummyConfig))

describe('entries', () => {
  const mockedlog = () => {}

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
    .post(/\/content_types\/dummyContentType\/entries\/([a-zA-Z0-9]*)\/publish/, {
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
    .reply(200, {
      content_types: [
        {
          created_at: '2019-08-16T08:18:56.914Z',
          updated_at: '2019-08-16T08:18:58.736Z',
          title: 'dummyContentType',
          uid: 'dummyContentType',
        },
      ],
    })

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
  })

  test
  .stdout()
  .command(['entries', '-c', 'dummyContentType', '-l', 'en-us', '-e', 'dummyEnvironment', '--no-bulkPublish'])
  .it('runs entries command without bulk publish', ctx => {
    // expect(ctx.stdout).to.contain('hello world')
    console.log(ctx.stdout)
  })

  test
  .stdout()
  .command(['entries', '-c', 'dummyContentType', '-l', 'en-us', '-e', 'dummyEnvironment'])
  .it('runs entries command with bulk publish', ctx => {
    // expect(ctx.stdout).to.contain('hello jeff')
    console.log(ctx.stdout)
  })

  test
  .stdout()
  .command(['entries', '-c', 'dummyContentType', '-l', 'en-us', '-e', 'dummyEnvironment'])
  .it('runs entries command with bulk publish', ctx => {
    // expect(ctx.stdout).to.contain('hello jeff')
    console.log(ctx.stdout)
  })

  test
  .stderr()
  .command(['entries'])
  .catch(error => {
    expect(error.message).to.contain('Content Types')
  })
  .it('runs entries command without any parameters')

  test
  .stderr()
  .command(['entries', '-a', '-c', 'dummyContentType'])
  .catch(error => {
    expect(error.message).to.contain('contentTypes when publishAllContentTypes')
  })
  .it('runs entries command with publishAllContentTypes set and content type specified')

  test
  .stdout()
  .command(['entries', '-a', '-l', 'en-us', '-e', 'dummyEnvironment'])
  .it('runs entries command with bulk publish', ctx => {
    // expect(ctx.stdout).to.contain('hello jeff')
    console.log(ctx.stdout)
  })

  test
  .stdout()
  .command(['entries', '-r', bulkPublishEntriesLog])
  .it('runs entries command with bulk publish', ctx => {
    // expect(ctx.stdout).to.contain('hello jeff')
    console.log(ctx.stdout)
  })

  test
  .stdout()
  .command(['entries', '-r', bulkPublishEntriesLog, '-b'])
  .it('runs entries command with bulk publish', ctx => {
    // expect(ctx.stdout).to.contain('hello jeff')
    console.log(ctx.stdout)
  })
})
