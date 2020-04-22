module.exports = {
  apikey: '', // api Key of the stack
  apiEndPoint: 'https://api.contentstack.io',
  cdnEndPoint: 'https://cdn.contentstack.io',
  manageToken: '', // management token of the stack
  publish_unpublished_env: {
    contentTypes: ['helloworld'],
    sourceEnv: 'd96',
    locale: 'ar-dz',
    environments: ['d96'],
    bulkPublish: true, // keep this flag as false if bulkPublish feature is not present in your plan
  },
  publish_assets: {
    environments: ['d96'],
    folderUid: 'blt0829fdfd03dfabc5', // uid of the folder whose contents needs to be published, cs_root for every asset of the stack
    bulkPublish: true,
  },
  publish_entries: {
    contentTypes: ['redirect_rule'],
    locales: ['en-us', 'fr-fr'],
    bulkPublish: false,
    environments: ['d96'],
    publishAllContentTypes: false,
  },
  Unpublish: {
    filter: {
      environment: 'd96', // source environment
      content_type_uid: '', // contentType filters
      locale: 'en-us', // locale filters
      type: 'asset_published,entry_published',
    },
    deliveryToken: 'cs8b316a54868d382163f58287', // deliveryToken of the environment
    bulkUnpublish: true,
  },
  cross_env_publish: {
    filter: {
      environment: 'd96', // source environment
      content_type_uid: '', // contentType filters
      locale: 'en-us', // locale filters
      type: 'asset_published,entry_published',
    },
    deliveryToken: 'cs8b316a54868d382163f58287', // deliveryToken of the source environment
    destEnv: ['h'], // environment where it needs to be published
    bulkPublish: true,
  },
  publish_edits_on_env: {
    contentTypes: ['404'],
    sourceEnv: 'staging',
    environments: ['staging'],
    locales: ['en-us'],
    bulkPublish: true,
  },
  nonlocalized_field_changes: {
    sourceEnv: 'production', // source Environment
    contentTypes: ['testdin'],
    environments: ['production'], // publishing Environments
    bulkPublish: true,
  },
  addFields: {
    deleteFields: ['updated_by', 'created_by', 'created_at', 'updated_at', '_version', 'ACL'],
    locales: ['en-us'],
    contentTypes: ['redirect_rule'],
    environments: ['test'],
    defaults: {
      number: null,
      boolean: false,
      isodate: [],
      file: null,
      reference: [],
    },
    bulkPublish: true,
  },
};

// apiEndPoint:'https://api.contentstack.io',
// cdnEndPoint:'https://cdn.contentstack.io',
