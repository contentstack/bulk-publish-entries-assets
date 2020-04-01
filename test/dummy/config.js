module.exports = {
  apikey: 'dummyApiKey',
  access_token: 'dummyAccessToken',
  delivery_token: 'dummyDeliveryToken',
  contentTypes: ['test'],
  apiEndPoint: 'https://api.localhost.com',
  manageToken: 'dummyManageToken',
  cdnEndPoint: 'https://cdn.localhost.com',
  publishEnv: 'production',
  authToken: 'dummyAuthToken',
  Environments: ['development'],
  publish_on_new_locale: {
    contentTypes: ['test'],
    locale: ['es'],
  },
  publish_edits_on_env: {
    contentTypes: ['redirect_rule'],
    publishEnv: 'production',
    environments: ['production'],
    locales: ['en-us'],
  },
  publish_unpublished_env: {
    contentTypes: ['dummyContentType'],
    publishEnv: 'dummyEnvironment',
    environments: ['dummyEnvironment'],
    locales: ['en-us'],
  },
  bulk_publish_entries: {
    contentTypes: ['test'],
  },
  nonlocalized_field_changes: {
    sourceEnv: 'dummyEnvironment',
    contentTypes: ['helloworld'],
    environments: ['dummyEnvironment'],
  },
  add_fields_publish: {
    contentTypes: ['helloworld'],
  },
  publish_assets: {
    environments: ['dummyEnvironment'],
    locales: ['en-us'],
  },
  publish_entries: {
    contentTypes: ['dummyContentType'],
    locales: ['en-us'],
    environments: ['dummyEnvironment'],
  },
  addFields: {
    deleteFields: ['updated_by', 'created_by', 'created_at', 'updated_at', '_version', 'ACL'],
    locales: ['en-us'],
    contentTypes: ['dummyContentType'],
    environments: ['dummyEnvironment'],
    defaults: {
      number: null,
      boolean: false,
      isodate: [],
      file: null,
      reference: [],
    },
  },
};
