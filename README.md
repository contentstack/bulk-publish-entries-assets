[![Contentstack](https://www.contentstack.com/docs/static/images/contentstack.png)](https://www.contentstack.com/)

Contentstack is a headless CMS with an API-first approach. It is a CMS that developers can use to build powerful cross-platform applications in their favorite languages. Build your application frontend, and Contentstack will take care of the rest. [Read More](https://www.contentstack.com/).

## Contentstack publishing script

Contentstack publishing script lets you publish auto publish your entries and assets depending upon the cases given below

- Publish the edits made in the entries on a particular environment
- Publish the unpublished/draft entries on a particular environment
- Publish the assets of a stack
- Publish the entries of a stack
- Publish the entries when a non-localized field is changed
- Update and publish the entries when a new field is added to a content type

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

#### Case 1) Publish edited entries on particular environment

**Specify case details in config file**

```sh
$ module.exports = {
		publish_edits_on_env:{
		contentTypes:['test'], // array of contentTypes where edits needs to be checked
		sourceEnv : 'production', //environment where entry edits needs to be checked
		environments:['production'], //publishing environment(usually same as source Env)
		locales:['en-us',] // locales of entries where it needs to be checked
	}
}  
```



**Start publishing**

```sh
$ npm run publish_edits
```

#### Case 2) Publish Draft entries(latest version) on particular environment

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


#### Case 3) Publish all assets of the stack

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



#### Case 4) Publish all entries of the stack

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



#### Case 5) Publish localized entries when nonlocalized field of master Entry is updated

**Specify case details in config file**

```sh
$ module.exports = {
	nonlocalized_field_changes:{
		sourceEnv:'production',
		contentTypes:['helloworld'],
		environments:['production']
	}
}  
```
**Start publishing**

```sh
$ npm run publish_nonlocalized_changes
```


#### Case 6) update and publish entries when a field is added to contentType

**Specify case details in config file**

```sh
$ module.exports = {
	add_fields:{	
		deleteFields:['updated_by','created_by','created_at','updated_at','_version','ACL'],
		locales:['en-us',], //list of locales of entries where field addition is needed
		contentTypes:['helloworld'], //list of contentTypes where checking needs to be done
		environments:['testing2'], // list of environments where it needs to be publish
		defaults:{
			"number" : null,
			"boolean" : false,
			"isodate":[],
			"file":null,
			"reference":[],
		}
	}
}  
```
**start publishing**

```sh
$ npm run add_fields
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
##### Case 3:NA
##### Case 4:
- For less failure of publish entries we recommend you to try one contenttype at a time
##### Case 5:NA
##### Case 6:
- Custom field will not to be added

Currently success logs are not getting stored. If required u can use any other methods to store it. For example
**npm run publish_entries >> addlogs.txt**

### Coming soon:
- Support for successful publish logging
- Support for un publish cases
