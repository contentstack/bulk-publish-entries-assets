module.exports = {
  apikey: 'blt22ec27e4a9805c70', // api Key of the stack
  apiEndPoint: 'https://api.contentstack.io',
  cdnEndPoint: 'https://cdn.contentstack.io',
  manageToken: 'cs9cd7a13a2ac9ab9311d2f898', // management token of the stack
  publish_unpublished_env: {
    contentTypes: ['ct_b'],
    sourceEnv: 'abhnv_test_env_two',
    locale: 'ar-dz',
    environments: ['abhnv_test_env_two'],
  },
  publish_assets: {
    environments: ['test'],
    folderUid: 'cs_root', // uid of the folder whose contents needs to be published, cs_root for every asset of the stack
  },
  publish_entries: {
    contentTypes: ['redirect_rule'],
    locales: ['en-us'],
    environments: ['d96'],
    publishAllContentTypes: false,
  },
  bulkUnpublish: {
    filter: {
      environment: 'd96', // source environment
      content_type_uid: '', // contentType filters
      locale: 'en-us', // locale filters
      type: 'asset_published,entry_published',
    },
    deliveryToken: 'cs8b316a54868d382163f58287', // deliveryToken of the environment
  },
  cross_env_publish: {
    filter: {
      environment: 'd96', // source environment
      content_type_uid: '', // contentType filters
      locale: 'en-us', // locale filters
      type: 'asset_published,entry_published',
    },
    deliveryToken: 'cs8b316a54868d382163f58287', // deliveryToken of the source environment
    destEnv: ['d96'], // environment where it needs to be published
  },
  publish_edits_on_env: {
    contentTypes: ['404'],
    sourceEnv: 'd96',
    environments: ['d96'],
    locales: ['en-us'],
  },
  nonlocalized_field_changes: {
    sourceEnv: 'production', // source Environment
    contentTypes: ['testdin'],
    environments: ['production'], // publishing Environments
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
