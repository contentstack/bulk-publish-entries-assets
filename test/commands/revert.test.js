const {expect, test} = require('@oclif/test')
const nock = require('nock')
const dummyConfig = require('../../src/config')

const entriesLogFileName = '1587758242717.PublishEntries.success'
const assetLogFileName = '1587956283100.PublishAssets.success'

const entryPublishResponse = require('../dummy/entrypublished')
const environmentsResponse = require('../dummy/environments')

const retryFailedLog = '1587758242717.revert.error'

describe('revert', () => {
  const mockedlog = () => { }

  beforeEach(() => {
    console.log = mockedlog

    nock(dummyConfig.apiEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authorization: dummyConfig.manageToken,
      },
    })
    .get(`/v${dummyConfig.apiVersion}/environments`)
    .reply(200, environmentsResponse)

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
    .post(/\/content_types\/dummyContentType\/entries\/([a-zA-Z0-9]*)\/publish/)
    .reply(200, entryPublishResponse)
  })

  test
  .stderr()
  .command(['revert'])
  .catch(error => {
    expect(error.message).to.contain('Logfile is required for processing this command. Please check --help for more details')
  })
  .it('runs hello')

  test
  .stdout()
  .command(['revert', '-l', entriesLogFileName])
  .it('runs hello --name jeff', ctx => {

  })

  test
  .stdout()
  .command(['revert', '-l', assetLogFileName])
  .it('runs hello --name jeff', ctx => {

  })

  test
  .stdout()
  .command(['revert', '-l', '1587758242717.PublishEntries.txt'])
  .it('runs hello --name jeff', ctx => {

  })

  test
  .stdout()
  .command(['revert', '-l', '1587758242717.PublishEntries'])
  .it('runs hello --name jeff', ctx => {

  })

  test
  .stdout()
  .command(['revert', '-l', '1587758242717.publishentries.success'])
  .it('runs hello --name jeff', ctx => {

  })

  test
  .stdout()
  .command(['revert', '-r', retryFailedLog])
  .it('runs hello --name jeff', ctx => {

  })
})
