module.exports = {
  apikey: 'bltc1dc25eda1ece559', // api Key of the stack
  apiEndPoint: 'https://api.contentstack.io',
  cdnEndPoint: 'https://cdn.contentstack.io',
  manageToken: 'csc23550e50cb5ce0df773b9a1', // management token of the stack
  publish_unpublished_env: {
    contentTypes: ['ct_b'],
    sourceEnv: 'abhnv_test_env_two',
    locale:'ar-dz',
    environments: ['abhnv_test_env_two'],
    bulkPublish: true,
  },
  publish_assets: {
    environments: ['test'],
    folderUid: 'cs_root', // uid of the folder whose contents needs to be published, cs_root for every asset of the stack
  },
  publish_entries: {
    contentTypes: ['test'],
    locales: ['en-us'],
    environments: ['test'],
    publishAllContentTypes: false,
  },
  bulkUnpublish: {
    filter: {
      environment: 'bulktest', // source environment
      content_type_uid: '', // contentType filters
      locale: 'en-us', // locale filters
      type: 'asset_published,entry_published',
    },
    deliveryToken: '', // deliveryToken of the environment
  },
  cross_env_publish:{
     filter: {
      environment: 'bulktest', // source environment
      content_type_uid: '', // contentType filters
      locale: 'en-us', // locale filters
      type: 'asset_published,entry_published',
    },
    deliveryToken: '', // deliveryToken of the source environment
    destEnv:[''] //environment where it needs to be published
  },
  publish_edits_on_env: {
    contentTypes: ['test','helloworld'],
    sourceEnv: 'test',
    environments: ['test'],
    locales: ['en-us',],
  },
  nonlocalized_field_changes: {
    sourceEnv: 'production', //source Environment
    contentTypes: ['testdin'],
    environments: ['production'], //publishing Environments
  },
  addFields: {
    deleteFields: ['updated_by', 'created_by', 'created_at', 'updated_at', '_version', 'ACL'],
    locales: ['en-us'],
    contentTypes: ['helloworld'],
    environments: ['test'],
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
