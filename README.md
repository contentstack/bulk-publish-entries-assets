[![Contentstack](https://www.contentstack.com/docs/static/images/contentstack.png)](https://www.contentstack.com/)

Contentstack is a headless CMS with an API-first approach. It is a CMS that developers can use to build powerful cross-platform applications in their favorite languages. Build your application frontend, and Contentstack will take care of the rest. [Read More](https://www.contentstack.com/).

## Contentstack publishing script

Contentstack publishing script lets you auto publish your entries and assets depending upon the cases given below

- Publish the unpublished/draft entries
- Publish the assets of a stack 
- Publish the entries of a stack
- Unpublish entries/assets of a stack

### Usage
#### Install dependencies:

Before we dive into the use cases, let's ensure that we install the required dependencies and make changes in the configuration files which will remain common for all uses cases that we have discussed

```sh
$ npm install 
```
#### Specify Stack details in config file(config/index.js)
```sh
$ module.exports = {
	apikey:'', //api key of the stack
	apiEndPoint:'https://api.contentstack.io',
	cdnEndPoint:'https://cdn.contentstack.io',
	manageToken:'',//management token for the stack
}
```

### Cases


#### Case 1) Publish Draft entries(latest version) on particular environment

**Specify case details in config file**

```sh
$ module.exports = {
	publish_unpublished_env:{
		contentTypes:['test'], //list of contentTypes
		sourceEnv : 'staging', //sourceEnv
		environments:['testdin1996'],
		locales:['en-us']
	}
}  
```
**Start publishing**

```sh
$ npm run publish_unpublish
```


#### Case 2) Publish all assets of the stack

**Specify case details in config file**

```sh
$ module.exports = {
	publish_assets:{
		environments:['bulktest'],
		locales :['en-us'],
		bulkPublish:true //if you want to bulk publish assets
		folderUid:"cs_root" //Id of the folder to be published, cs_root for assets
	}
}  
```
**Start publishing**

```sh
$ npm run publish_assets
```

#### Case 3) Publish all entries of the stack

**Specify case details in config file**

```sh
$ module.exports = {
	publish_entries:{
		contentTypes:['redirect_rule'], //list of contentTypes which needs to be published
		locales:['en-us'], //list of locales which need to be considered for mentioned CTs
		environments:['bulktest'], // destination publish environments
		bulkPublish:true, //flag to bulk publish entries(uses bulk publish apis)
		publishAllContentTypes : false //if you want to publish entire contentTypes
	}	
}  
```
**Start publishing**

```sh
$ npm run publish_entries
```
#### Case 4) UnPublish all entries/assets of the stack published on particular Environment

**Specify case details in config file**

```sh
$ module.exports = {
	bulkUnpublish :{
		filter:{
		environment: 'bulktest', //source environment
		content_type_uid: '', //contentType filters
		locale: 'en-us', //locale filters
		type:'entry_published,asset_published'
    	},
    deliveryToken:'' //deliveryToken of the  source environment
  }
}  
```
**Start publishing**

```sh
$ npm run unpublish
```

#### Retrying failed Entries 
Entries which failed to publish are stored in logs directory with unique name ending with .error. In order to retry entries of those log file, you need execute same script with **retryFailed** flag along with **${logFilename}** which follows after it
```sh
$ npm run publish_entries -- -retryFailed ${logFilename} 
```
for example
//npm run pubish_entries - - -retryFailed 18003bulkPublishEntries.error


#### Known Limitations:

##### Case 1:NA
##### Case 2:NA
##### Case 3:
- For less publish failure of entries we recommend you to try one contenttype at a time
##### Case 4:NA