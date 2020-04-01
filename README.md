[![Contentstack](https://www.contentstack.com/docs/static/images/contentstack.png)](https://www.contentstack.com/)

Contentstack is a headless CMS with an API-first approach. It is a CMS that developers can use to build powerful cross-platform applications in their favorite languages. Build your application frontend, and Contentstack will take care of the rest. [Read More](https://www.contentstack.com/).

## Contentstack Bulk Publishing Script

Contentstack bulk publish script lets you publish your entries and assets depending upon the cases given below 


- Publish the edits made in the entries on a particular environment
- Publish the unpublished/draft entries on a particular environment
- Publish the assets of a stack
- Publish the entries of a stack
- Publish the entries when a non-localized field is changed
- Update and publish the entries when a new field is added to a content type


### Usage
#### Install dependencies:

Before we dive into the use cases, let's ensure that we install the required dependencies and make changes in the configuration files which will remain common for all uses cases that we have discussed

```sh
$ npm install 
```
#### Specify Stack details in config file(config/index.ssssjs)
```sh
$ module.exports = {
	apikey:'',
	access_token:'',
	apiEndPoint:'https://api.contentstack.io',
	cdnEndPoint:'https://cdn.contentstack.io',
	authToken:'',
	manageToken:'',
}
```

### Cases

#### Case 1) Publish edits on entries made on particular environment

#### 1. specify case details in config file

```sh
$ module.exports = {
		publish_edits_on_env:{
		contentTypes:['test'], // array of contentTypes where edits needs to be checked
		sourceEnv : 'production', //environment where entry edits needs to be checked
		publishEnvironments:['production'], //publishing environment(usually same as source Env)
		locales:['en-us',] // locales of entries where it needs to be checked
		bulkPublish:true //if u want publish using bulk publish api
	}
}  
```



#### 2. start publishing

```sh
$ npm run publish_edits
```

#### Case 2) Publish unpublish/draft entries on particular environment

#### 1. specify case details in config file

```sh
$ module.exports = {
	publish_unpublished_env:{
		contentTypes:['test'], //list of contentTypes
		sourceEnv : 'staging', //sourceEnv
		publishEnvironments:['testdin1996'],
		locales:['en-us'],
		bulkPublish:true
	}
}  
```
#### 2. start publishing

```sh
$ npm run publish_unpublish
```


#### Case 3) Publish assets of the stack

#### 1. specify case details in config file

```sh
$ module.exports = {
	publish_assets:{
		environments:['bulktest'],
		locales :['en-us'],
		bulkPublish:true //if you want to bulk publish assets,
		folderUid: 'cs_root', // uid of the folder to be published Default 'cs_root'
	}
}  
```
#### 2. start publishing

```sh
$ npm run publish_assets
```



#### Case 4) Publish entries of the stack

#### 1. specify case details in config file

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
#### 2. start publishing

```sh
$ npm run publish_entries
```



#### Case 5) Publish entries when nonloclized field of an entry is changed

#### 1. specify case details in config file

```sh
$ module.exports = {
	nonlocalized_field_changes:{
		sourceEnv:'production',
		contentTypes:['helloworld'],
		environments:['production'],
		bulkPublish: true,
	}
}  
```
#### 2. start publishing

```sh
$ npm run publish_nonlocalized_changes
```


#### Case 6) update and publish entries when a field is added to contentType

#### 1. specify case details in config file

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
#### 2. start publishing

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
##### Case 5:
- Custom field will not to be added

### Coming soon:
- Support for successful publish logging
- Support for un publish cases
- adding more coverage in test case
