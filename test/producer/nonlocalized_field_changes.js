const nock = require('nock');
const _ = require('lodash');

const {
  setConfig,
  getLanguages,
  getMasterLocale,
  getEntries,
  getLocalizedEntry,
  getContentTypeSchema,
  checkNonLocalizedFieldChanges,
} = require('../../src/producer/nonlocalized_field_changes');
const dummyConfig = require('../dummy/config');
const languagesResponse = require('../dummy/languages');
const contentTypeResponse = require('../dummy/contentTypeResponse');
const stackResponse = require('../dummy/stackResponse');
const entriesResponse = require('../dummy/masterEntry');
const entryResponse = require('../dummy/entry');
const entryPublishResponse = require('../dummy/entrypublished');


// console.log(entriesResponse.entries[0])

//     console.log(entryResponse.entry)

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
      .get('/v3/content_types/dummyContentType/entries')
      .query({
        include_count: true,
        skip: 0,
        locale: 'en-us',
        environment: 'dummyEnvironment',
      })
      .reply(200, entriesResponse);


    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authtoken: dummyConfig.authToken,
        'content-Type': 'application/json',
      },
    })
      .get('/v3/locales')
      .reply(200, languagesResponse);

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
      .get('/v3/content_types/dummyContentType/entries/dummyEntryId')
      .query({
        locale: 'ar-eg',
        environment: 'dummyEnvironment',
      })
      .reply(200, entryResponse);

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
          locales: ['ar-eg'],
        },
      })
      .query({
        locale: 'ar-eg',
      })
      .reply(200, entryPublishResponse);

    nock(dummyConfig.cdnEndPoint, {
      reqheaders: {
        api_key: dummyConfig.apikey,
        authtoken: dummyConfig.authToken,
      },
    })
      .get('/v3/stacks/')
      .reply(200, stackResponse);
  });
  setConfig(dummyConfig);

  it('testing master locale', async () => {
    const masterLocale = await getMasterLocale();
    expect(masterLocale).toBe('en-us');
  });

  it('testing get languages call', async () => {
    const languages = await getLanguages();
    expect(Array.isArray(languages)).toBe(true);
  });

  it('testing get Content Type call', async () => {
    const contentTypes = await getContentTypeSchema('dummyContentType');
    expect(Array.isArray(contentTypes)).toBe(true);
  });

  it('testing getEntries function', async () => {
    const languages = [{
      code: 'ar-eg',
    }];

    expect(getEntries(contentTypeResponse.content_type.schema, 'dummyContentType', languages, 'en-us')).toBeTruthy();
  });

  it('testing localized entry call', async () => {
    const entry = {
      uid: 'dummyEntryId',
    };
    const response = await getLocalizedEntry(entry, 'dummyContentType', 'ar-eg');
    expect(response).toBeDefined();
  });

  it('checking field changes call', () => {
    expect(typeof (checkNonLocalizedFieldChanges(contentTypeResponse.content_type.schema, entriesResponse.entries[0], entryResponse.entry))).toBe('boolean');
  });
});
