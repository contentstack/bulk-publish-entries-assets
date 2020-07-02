const {expect, test} = require('@oclif/test')
const nock = require('nock')
const dummyConfig = require('../../src/config')

const languagesResponse = require('../dummy/languages')
const contentTypeResponse = require('../dummy/contentTypeResponse')
const localizedEntryResponse = require('../dummy/entry')
const masterEntry = require('../dummy/masterEntry')
const updatedEntryResponse = require('../dummy/entryUpdated')
const sourceEnv = 'dummyEnvironment'
const entryPublishResponse = require('../dummy/entrypublished')

const bulkAddFieldsLog = '1587758242717.bulk_add_fields.error'

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

describe('add-fields', () => {
  // const mockedLog = () => { }

  beforeEach(() => {
    // console.log = mockedLog

    // for getLanguages
    nock(`${dummyConfig.apiEndPoint}`, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
        'content-Type': 'application/json',
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
    .get(/\/content_types\/([a-zA-Z_])*/)
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
      include_count: true,
      skip: 0,
      include_publish_details: true,
    })
    .reply(200, {
      entries: fillArray(masterEntry.entries[0], 1),
      count: 1,
    })

    // for updating an entry
    nock(dummyConfig.apiEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
      },
    })
    .put(`/v${dummyConfig.apiVersion}/content_types/helloworld/entries/dummyEntryId?locale=en-us`)
    .reply(200, updatedEntryResponse)

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

    // for bulk publishing entries
    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
      },
    })
    .post(`/v${dummyConfig.apiVersion}/bulk/publish`)
    .reply(200, entryPublishResponse)

    // for publish entry call
    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
        'Content-Type': 'application/json',
      },
    })
    .post(/\/content_types\/helloworld\/entries\/([a-zA-Z0-9]*)\/publish/, {
      entry: {
        environments: ['dummyEnvironment'],
        locales: ['en-us'],
      },
    })
    .reply(200, entryPublishResponse)
  })

  test
  .stderr()
  .command(['add-fields'])
  .catch(error => {
    expect(error.message).to.contain('Content Types, Environments are required for processing this command. Please check --help for more details')
  })
  .it('runs add-fields without flags')

  test
  .stdout()
  .command(['add-fields', '-c', 'helloworld', '-e', 'dummyEnvironment'])
  .it('runs add-fields with flags', ctx => {
    // expect(ctx.stdout).to.contain('hello jeff')
  })

  test
  .stdout()
  .command(['add-fields', '-c', 'helloworld', '-e', 'dummyEnvironment', '--no-bulkPublish'])
  .it('runs add-fields with flags', ctx => {
    // expect(ctx.stdout).to.contain('hello jeff')
  })

  test
  .stdout()
  .command(['add-fields', '-r', bulkAddFieldsLog])
  .it('runs add-fields with flags', ctx => {
    // expect(ctx.stdout).to.contain('hello jeff')
  })
})
