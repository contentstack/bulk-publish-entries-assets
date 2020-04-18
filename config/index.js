module.exports = {
  apikey: '', // api Key of the stack
  apiEndPoint: 'https://api.contentstack.io',
  cdnEndPoint: 'https://cdn.contentstack.io',
  manageToken: '', // management token of the stack
  publish_unpublished_env: {
    contentTypes: ['landing_page'],
    sourceEnv: 'development', //source destination
    locale:'en-us',// source environment
    environments: ['development'],
  },
  publish_assets: {
    environments: ['test'],
    folderUid: 'cs_root', // uid of the folder whose contents needs to be published, cs_root for every asset of the stack
  },
  publish_entries: {
    contentTypes: ['test'],
    locales: ['en-us'],
    environments: ['testEnv'],
    bulkPublish: true,
    publishAllContentTypes: true,
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
};

// apiEndPoint:'https://api.contentstack.io',
// cdnEndPoint:'https://cdn.contentstack.io',
