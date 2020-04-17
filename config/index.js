module.exports = {
  apikey: 'blt22ec27e4a9805c70', // api Key of the stack
  apiEndPoint: 'https://api.contentstack.io',
  cdnEndPoint: 'https://cdn.contentstack.io',
  manageToken: 'cs48559a78b104fc5c1761dc0b', // management token of the stack
  publish_unpublished_env: {
    contentTypes: ['ct_a','ct_b'],
    sourceEnv: 'abhnv_test_env_two',
    environments: ['abhnv_test_env_two'],
    locales: ['en-us'],
    bulkPublish: true,
  },
  publish_assets: {
    environments: ['test'],
    locales: ['en-us'],
    bulkPublish: true,
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
