[![Contentstack](https://www.contentstack.com/docs/static/images/contentstack.png)](https://www.contentstack.com/)

Contentstack is a headless CMS with an API-first approach. It is a CMS that developers can use to build powerful cross-platform applications in their favorite languages. Build your application frontend, and Contentstack will take care of the rest. [Read More](https://www.contentstack.com/).

## Contentstack publishing script

Contentstack publishing script lets you publish auto publish your entries and assets depending upon the cases given below

- Publish the unpublished/draft entries on a particular environment
- Publish the assets of a stack
- Publish the entries of a stack

**Note:Currently We do not have revert script for entries published using this script**

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
	access_token:'', //access token of the stack
	apiEndPoint:'https://api.contentstack.io',
	cdnEndPoint:'https://cdn.contentstack.io',
	authToken:'',  
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


#### Retrying failed Entries 
entries which failed to publish are stored in logs directory with unique name. In order to retry entries of those log file, you need execute same script with **retryFailed** flag along with **${logFilename}** which follows after it
```sh
$ npm run publish_entries -- -retryFailed ${logFilename} 
```
for example
//npm run pubish_entries -- -retryFailed 2777bulkPublishAssets


#### Known Limitations:

##### Case 1:NA
##### Case 2:NA
##### Case 3:
- For less publish failure of entries we recommend you to try one contenttype at a time


Currently success logs are not getting stored. If required u can use any other methods to store it. For example
**npm run publish_entries >> addlogs.txt**

### Coming soon:
- Support for successful publish logging
- Support for unpublish published entries
