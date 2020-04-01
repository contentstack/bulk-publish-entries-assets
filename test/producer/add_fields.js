const nock = require('nock');
const _ = require('lodash');

const {
  getContentTypeSchema,
  getEntries,
  setConfig,
  removeUnwanted,
  addFields,
} = require('../../src/producer/add_fields');
const dummyConfig = require('../dummy/config');
const contentTypeResponse = require('../dummy/contentTypeResponse');
const entryPublishResponse = require('../dummy/entrypublished');
const addFieldResponse = require('../dummy/addFieldResponse');

describe('testing asset bulk publish', () => {
  const mockedlog = () => {};

  beforeEach(() => {
    console.log = mockedlog;

    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        access_token: dummyConfig.access_token,
      },
    })
      .get('/v3/content_types/dummyContentType')
      .query({
        include_global_field_schema: true,
      })
      .reply(200, contentTypeResponse);

    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        access_token: dummyConfig.access_token,
      },
    })
      .get('/v3/content_types/dummyContentType/entries')
      .query({
        include_count: true,
        skip: 0,
        locale: 'en-us',
      })
      .reply(200, { entries: [{ uid: 'dummyEntryId' }] });

    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authtoken: dummyConfig.authToken,
        'Content-Type': 'application/json',
      },
    })
      .put('/v3/content_types/dummyContentType/entries/dummyEntryId?locale=en-us', {
        entry: addFieldResponse,
      })
      .reply(200, {
        entry: addFieldResponse,
      });
  });

  nock(dummyConfig.apiEndPoint, {
    reqheaders: {
      api_key: dummyConfig.apikey,
      authtoken: dummyConfig.authToken,
      'Content-Type': 'application/json',
    },
  })
    .post('/v3/content_types/dummyContentType/entries/dummyEntryId/publish', {
      entry: {
        environments: ['dummyEnvironment'],
        locales: ['en-us'],
      },
    })
    .query({
      locale: 'en-us',
    })
    .reply(200, entryPublishResponse);

  setConfig(dummyConfig);

  it('testing get Content Type call', async () => {
    const contentTypes = await getContentTypeSchema('dummyContentType');
    expect(Array.isArray(contentTypes)).toBe(true);
  });

  it('testing get Entries call', async () => {
    expect(await getEntries(contentTypeResponse.content_type.schema, 'dummyContentType', 'en-us')).toBeUndefined();
  });
});
