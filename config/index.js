module.exports = {
  apikey: '', //api Key of the stack
  access_token: '', //access_token of the stack
  apiEndPoint: 'https://api.contentstack.io',
  cdnEndPoint: 'https://cdn.contentstack.io',
  authToken: '', //authtoken
  manageToken: '', // management token of the stack
  publish_edits_on_env: {
    contentTypes: ['test'],
    sourceEnv: 'staging',
    environments: ['staging'],
    locales: ['en-us'],
    bulkPublish:true
  },
  publish_unpublished_env: {
    contentTypes: ['test'],
    sourceEnv: 'staging',
    environments: ['staging'],
    locales: ['en-us'],
    bulkPublish:true,
  },
  nonlocalized_field_changes: {
    sourceEnv: 'production',
    contentTypes: ['test'],
    environments: ['production'],
    bulkPublish: true,
  },
  publish_assets: {
    environments: ['stag'],
    locales: ['en-us'],
    bulkPublish: true,
    folderUid: 'cs_root', // uid of the folder whose contents needs to be published, cs_root for every asset
  },
  publish_entries: {
    contentTypes: ['helloworld'],
    locales: ['en-us'],
    environments: ['bulktest'],
    bulkPublish: true,
    publishAllContentTypes: false,
  },
  addFields: {
    deleteFields: ['updated_by', 'created_by', 'created_at', 'updated_at', '_version', 'ACL'],
    locales: ['en-us'],
    contentTypes: ['test'],
    environments: ['production'],
    defaults: {
      number: null,
      boolean: false,
      isodate: [],
      file: null,
      reference: [],
    },
  },
};

// apiEndPoint:'https://api.contentstack.io',
// cdnEndPoint:'https://cdn.contentstack.io',
