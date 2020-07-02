const {expect, test} = require('@oclif/test')
const nock = require('nock')
const dummyConfig = require('../../src/config')

const languagesResponse = require('../dummy/languages')
const contentTypeResponse = require('../dummy/contentTypeResponse')
const localizedEntryResponse = require('../dummy/entry')
const masterEntry = require('../dummy/masterEntry')
const sourceEnv = 'dummyEnvironment'
const entryPublishResponse = require('../dummy/entrypublished')

const bulkNonLocalizedLog = '1587758242717.bulk_nonlocalized_field_changes.error'

function fillArray(value, len) {
  if (len === 0) return []
  let a = [value]
  while (a.length * 2 <= len) a = a.concat(a)
  if (a.length < len) a = a.concat(a.slice(0, len - a.length))
  return a
}

const languages = [{
  code: 'ar-eg',
  fallback_locale: 'en-us',
  uid: 'blt46831ceb05e16e47',
  created_by: '***REMOVED***',
  updated_by: '***REMOVED***',
  created_at: '2020-02-24T18:50:48.843Z',
  updated_at: '2020-02-24T18:50:48.843Z',
  name: 'Arabic - Egypt',
  ACL: [],
  _version: 1,
}]

describe('nonlocalized-field-changes', () => {
  // const mockedLog = () => { }

  beforeEach(() => {
    // console.log = mockedLog;

    // for getLanguages
    nock(`${dummyConfig.apiEndPoint}`, {
      'content-Type': 'application/json',
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
      },
    })
    .get(`/v${dummyConfig.apiVersion}/locales`)
    .reply(200, languagesResponse)

    // for getting contentType schema
    nock(`${dummyConfig.cdnEndPoint}`, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
      },
    })
    .get(/\/content_types\/([a-zA-Z_])/)
    .query({
      include_global_field_schema: true,
    })
    .reply(200, contentTypeResponse)

    // for getting entry response
    nock(dummyConfig.apiEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
      },
    })
    .get(`/v${dummyConfig.apiVersion}/content_types/helloworld/entries`)
    .query({
      locale: 'en-us',
      environment: sourceEnv,
      include_count: true,
      skip: 0,
    })
    .reply(200, {
      entries: fillArray(masterEntry.entries[0], 12),
      count: 12,
    })

    // for getting localized entry response
    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
      },
    })
    .get(`/v${dummyConfig.apiVersion}/content_types/helloworld/entries/dummyEntryId`)
    .query({
      locale: 'ar-eg',
      environment: sourceEnv,
      include_publish_details: true,
    })
    .reply(200, localizedEntryResponse)

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
    .post(/\/content_types\/helloworld\/entries\/([a-zA-Z0-9]*)\/publish/)
    .reply(200, entryPublishResponse)
  })

  test
  .stderr()
  .command(['nonlocalized-field-changes'])
  .catch(error => {
    expect(error.message)
  })
  .it('runs command without flags')

  test
  .stdout()
  .command(['nonlocalized-field-changes', '-s', 'dummyEnvironment', '-c', 'helloworld', '-e', 'dummyEnvironment'])
  .it('runs command', ctx => {
    // expect(ctx.stdout).to.contain('hello jeff')
  })

  test
  .stdout()
  .command(['nonlocalized-field-changes', '-s', 'dummyEnvironment', '-c', 'helloworld', '-e', 'dummyEnvironment', '--no-bulkPublish'])
  .it('runs command', ctx => {
    // expect(ctx.stdout).to.contain('hello jeff')
  })

  test
  .stdout()
  .command(['nonlocalized-field-changes', '-r', bulkNonLocalizedLog])
  .it('runs command', ctx => {
    // expect(ctx.stdout).to.contain('hello jeff')
  })

  test
  .stdout()
  .command(['nonlocalized-field-changes', '-r', bulkNonLocalizedLog, '--no-bulkPublish'])
  .it('runs command', ctx => {
    // expect(ctx.stdout).to.contain('hello jeff')
  })
})
