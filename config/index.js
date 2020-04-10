module.exports = {
  apikey: '', //api Key of the stack
  access_token: '', //access_token of the stack
  apiEndPoint: 'https://api.contentstack.io',
  cdnEndPoint: 'https://cdn.contentstack.io',
  authToken: '', //authtoken
  manageToken: '', // management token of the stack
  publish_unpublished_env: {
    contentTypes: ['test'],
    sourceEnv: 'staging',
    environments: ['staging'],
    locales: ['en-us'],
    bulkPublish:true,
  },
  publish_assets: {
    environments: ['stag'],
    locales: ['en-us'],
    bulkPublish: true,
    folderUid: 'cs_root', // uid of the folder whose contents needs to be published, cs_root for every asset
  },
  publish_entries: {
    contentTypes: ['destinations'],
    locales: ['en'],
    environments: ['bulktest'],
    bulkPublish: true,
    publishAllContentTypes: false,
  },
  bulkUnpublish :{
    filter:{
      environment: 'bulktest', //source environment
      content_type_uid: '', //contentType filters
      locale: 'en-us', //locale filters
      type:'entry_published'
    },
    deliveryToken:'' //deliveryToken of the environment
  }
};

// apiEndPoint:'https://api.contentstack.io',
// cdnEndPoint:'https://cdn.contentstack.io',
