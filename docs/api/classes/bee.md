---
id: "bee"
title: "Class: Bee"
sidebar_label: "Bee"
custom_edit_url: null
hide_title: true
---

# Class: Bee

The Bee class provides a way of interacting with the Bee APIs based on the provided url

**`param`** URL of a running Bee node

## Constructors

### constructor

\+ **new Bee**(`url`: *string*): [*Bee*](bee.md)

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |

**Returns:** [*Bee*](bee.md)

Defined in: [bee-js/src/bee.ts:40](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee.ts#L40)

## Properties

### url

• `Readonly` **url**: *string*

## Methods

### createFeedManifest

▸ **createFeedManifest**(`type`: *sequence* \| *epoch*, `topic`: *string* \| *Uint8Array* \| Topic, `owner`: *string* \| *Uint8Array* \| EthAddress): *Promise*<string\>

Create feed manifest chunk and return the reference to it

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`type` | *sequence* \| *epoch* | The type of the feed, can be 'epoch' or 'sequence'   |
`topic` | *string* \| *Uint8Array* \| Topic | Topic in hex or bytes   |
`owner` | *string* \| *Uint8Array* \| EthAddress | Owner's ethereum address in hex or bytes    |

**Returns:** *Promise*<string\>

Defined in: [bee-js/src/bee.ts:365](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee.ts#L365)

___

### createTag

▸ **createTag**(): *Promise*<[*Tag*](../interfaces/tag.md)\>

Create new tag

**Returns:** *Promise*<[*Tag*](../interfaces/tag.md)\>

Defined in: [bee-js/src/bee.ts:183](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee.ts#L183)

___

### downloadData

▸ **downloadData**(`reference`: *string*): *Promise*<Uint8Array\>

Download data as a byte array

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reference` | *string* | Bee data reference    |

**Returns:** *Promise*<Uint8Array\>

Defined in: [bee-js/src/bee.ts:60](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee.ts#L60)

___

### downloadFile

▸ **downloadFile**(`reference`: *string*): *Promise*<[*FileData*](../interfaces/filedata.md)<Uint8Array\>\>

Download single file as a byte array

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reference` | *string* | Bee file reference    |

**Returns:** *Promise*<[*FileData*](../interfaces/filedata.md)<Uint8Array\>\>

Defined in: [bee-js/src/bee.ts:105](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee.ts#L105)

___

### downloadFileFromCollection

▸ **downloadFileFromCollection**(`reference`: *string*, `path?`: *string*): *Promise*<[*FileData*](../interfaces/filedata.md)<Uint8Array\>\>

Download single file as a byte array from collection given using the path

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`reference` | *string* | - | Bee collection reference   |
`path` | *string* | '' | Path of the requested file in the collection    |

**Returns:** *Promise*<[*FileData*](../interfaces/filedata.md)<Uint8Array\>\>

file in byte array with metadata

Defined in: [bee-js/src/bee.ts:159](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee.ts#L159)

___

### downloadReadableData

▸ **downloadReadableData**(`reference`: *string*, `axiosOptions?`: AxiosRequestConfig): *Promise*<Readable\>

Download data as a readable stream

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reference` | *string* | Bee data reference   |
`axiosOptions?` | AxiosRequestConfig | optional - alter default options of axios HTTP client    |

**Returns:** *Promise*<Readable\>

Defined in: [bee-js/src/bee.ts:70](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee.ts#L70)

___

### downloadReadableFile

▸ **downloadReadableFile**(`reference`: *string*): *Promise*<[*FileData*](../interfaces/filedata.md)<Readable\>\>

Download single file as a readable stream

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reference` | *string* | Bee file reference    |

**Returns:** *Promise*<[*FileData*](../interfaces/filedata.md)<Readable\>\>

Defined in: [bee-js/src/bee.ts:114](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee.ts#L114)

___

### downloadReadableFileFromCollection

▸ **downloadReadableFileFromCollection**(`reference`: *string*, `path?`: *string*, `axiosOptions?`: AxiosRequestConfig): *Promise*<[*FileData*](../interfaces/filedata.md)<Readable\>\>

Download single file as a readable stream from collection given using the path

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`reference` | *string* | - | Bee collection reference   |
`path` | *string* | '' | Path of the requested file in the collection   |
`axiosOptions?` | AxiosRequestConfig | - | optional - alter default options of axios HTTP client    |

**Returns:** *Promise*<[*FileData*](../interfaces/filedata.md)<Readable\>\>

file in readable stream with metadata

Defined in: [bee-js/src/bee.ts:172](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee.ts#L172)

___

### makeFeedReader

▸ **makeFeedReader**(`type`: *sequence* \| *epoch*, `topic`: *string* \| *Uint8Array* \| Topic, `owner`: *string* \| *Uint8Array* \| EthAddress): FeedReader

Make a new feed reader for downloading feed updates

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`type` | *sequence* \| *epoch* | The type of the feed, can be 'epoch' or 'sequence'   |
`topic` | *string* \| *Uint8Array* \| Topic | Topic in hex or bytes   |
`owner` | *string* \| *Uint8Array* \| EthAddress | Owner's ethereum address in hex or bytes    |

**Returns:** FeedReader

Defined in: [bee-js/src/bee.ts:385](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee.ts#L385)

___

### makeFeedTopic

▸ **makeFeedTopic**(`topic`: *string*): Topic

Make a new feed topic from a string

Because the topic has to be 32 bytes long this function
hashes the input string to create a topic.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`topic` | *string* | The input string    |

**Returns:** Topic

Defined in: [bee-js/src/bee.ts:422](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee.ts#L422)

___

### makeFeedWriter

▸ **makeFeedWriter**(`type`: *sequence* \| *epoch*, `topic`: *string* \| *Uint8Array* \| Topic, `signer`: *string* \| *Uint8Array* \| Signer): FeedWriter

Make a new feed writer for updating feeds

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`type` | *sequence* \| *epoch* | The type of the feed, can be 'epoch' or 'sequence'   |
`topic` | *string* \| *Uint8Array* \| Topic | Topic in hex or bytes   |
`signer` | *string* \| *Uint8Array* \| Signer | The signer's private key or a Signer instance that can sign data    |

**Returns:** FeedWriter

Defined in: [bee-js/src/bee.ts:405](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee.ts#L405)

___

### makeSOCReader

▸ **makeSOCReader**(`ownerAddress`: *string* \| *Uint8Array* \| EthAddress): SOCReader

Returns an object for reading single owner chunks

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`ownerAddress` | *string* \| *Uint8Array* \| EthAddress | The ethereum address of the owner    |

**Returns:** SOCReader

Defined in: [bee-js/src/bee.ts:431](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee.ts#L431)

___

### makeSOCWriter

▸ **makeSOCWriter**(`signer`: *string* \| *Uint8Array* \| Signer): SOCWriter

Returns an object for reading and writing single owner chunks

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`signer` | *string* \| *Uint8Array* \| Signer | The signer's private key or a Signer instance that can sign data    |

**Returns:** SOCWriter

Defined in: [bee-js/src/bee.ts:444](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee.ts#L444)

___

### pinCollection

▸ **pinCollection**(`reference`: *string*): *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Pin collection with given reference

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reference` | *string* | Bee collection reference    |

**Returns:** *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Defined in: [bee-js/src/bee.ts:219](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee.ts#L219)

___

### pinData

▸ **pinData**(`reference`: *string*): *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Pin data with given reference

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reference` | *string* | Bee data reference    |

**Returns:** *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Defined in: [bee-js/src/bee.ts:237](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee.ts#L237)

___

### pinFile

▸ **pinFile**(`reference`: *string*): *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Pin file with given reference

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reference` | *string* | Bee file reference    |

**Returns:** *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Defined in: [bee-js/src/bee.ts:201](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee.ts#L201)

___

### pssReceive

▸ **pssReceive**(`topic`: *string*, `timeoutMsec?`: *number*): *Promise*<Uint8Array\>

Receive message with Postal Service for Swarm

Because sending a PSS message is slow and CPU intensive,
it is not supposed to be used for general messaging but
most likely for setting up an encrypted communication
channel by sending a one-off message.

This is a helper function to wait for exactly one message to
arrive and then cancel the subscription. Additionally a
timeout can be provided for the message to arrive or else
an error will be thrown.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`topic` | *string* | - | Topic name   |
`timeoutMsec` | *number* | 0 | Timeout in milliseconds    |

**Returns:** *Promise*<Uint8Array\>

Message in byte array

Defined in: [bee-js/src/bee.ts:331](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee.ts#L331)

___

### pssSend

▸ **pssSend**(`topic`: *string*, `target`: *string*, `data`: *string* \| *Uint8Array*, `recipient?`: *string*): *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Send to recipient or target with Postal Service for Swarm

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`topic` | *string* | Topic name   |
`target` | *string* | Target message address prefix   |
`data` | *string* \| *Uint8Array* | Message to be sent   |
`recipient?` | *string* | Recipient public key     |

**Returns:** *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Defined in: [bee-js/src/bee.ts:259](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee.ts#L259)

___

### pssSubscribe

▸ **pssSubscribe**(`topic`: *string*, `handler`: [*PssMessageHandler*](../interfaces/pssmessagehandler.md)): [*PssSubscription*](../interfaces/psssubscription.md)

Subscribe to messages with Postal Service for Swarm

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`topic` | *string* | Topic name   |
`handler` | [*PssMessageHandler*](../interfaces/pssmessagehandler.md) | Message handler interface    |

**Returns:** [*PssSubscription*](../interfaces/psssubscription.md)

Subscription to a given topic

Defined in: [bee-js/src/bee.ts:276](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee.ts#L276)

___

### retrieveTag

▸ **retrieveTag**(`tagUid`: *number* \| [*Tag*](../interfaces/tag.md)): *Promise*<[*Tag*](../interfaces/tag.md)\>

Retrieve tag information from Bee node

#### Parameters:

Name | Type |
:------ | :------ |
`tagUid` | *number* \| [*Tag*](../interfaces/tag.md) |

**Returns:** *Promise*<[*Tag*](../interfaces/tag.md)\>

Defined in: [bee-js/src/bee.ts:192](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee.ts#L192)

___

### unpinCollection

▸ **unpinCollection**(`reference`: *string*): *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Unpin collection with given reference

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reference` | *string* | Bee collection reference    |

**Returns:** *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Defined in: [bee-js/src/bee.ts:228](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee.ts#L228)

___

### unpinData

▸ **unpinData**(`reference`: *string*): *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Unpin data with given reference

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reference` | *string* | Bee data reference    |

**Returns:** *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Defined in: [bee-js/src/bee.ts:246](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee.ts#L246)

___

### unpinFile

▸ **unpinFile**(`reference`: *string*): *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Unpin file with given reference

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reference` | *string* | Bee file reference    |

**Returns:** *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Defined in: [bee-js/src/bee.ts:210](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee.ts#L210)

___

### uploadData

▸ **uploadData**(`data`: *string* \| *Uint8Array*, `options?`: [*UploadOptions*](../interfaces/uploadoptions.md)): *Promise*<string\>

Upload data to a Bee node

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`data` | *string* \| *Uint8Array* | Data to be uploaded   |
`options?` | [*UploadOptions*](../interfaces/uploadoptions.md) | Aditional options like tag, encryption, pinning, content-type    |

**Returns:** *Promise*<string\>

reference is a content hash of the data

Defined in: [bee-js/src/bee.ts:51](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee.ts#L51)

___

### uploadFile

▸ **uploadFile**(`data`: *string* \| *Uint8Array* \| *Readable* \| File, `name?`: *string*, `options?`: [*FileUploadOptions*](../interfaces/fileuploadoptions.md)): *Promise*<string\>

Upload single file to a Bee node

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`data` | *string* \| *Uint8Array* \| *Readable* \| File | Data or file to be uploaded   |
`name?` | *string* | Name of the uploaded file (optional)   |
`options?` | [*FileUploadOptions*](../interfaces/fileuploadoptions.md) | Aditional options like tag, encryption, pinning, content-type    |

**Returns:** *Promise*<string\>

reference is a content hash of the file

Defined in: [bee-js/src/bee.ts:83](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee.ts#L83)

___

### uploadFiles

▸ **uploadFiles**(`fileList`: FileList \| File[], `options?`: [*CollectionUploadOptions*](../interfaces/collectionuploadoptions.md)): *Promise*<string\>

Upload collection of files to a Bee node

Uses the FileList API from the browser.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`fileList` | FileList \| File[] | list of files to be uploaded   |
`options?` | [*CollectionUploadOptions*](../interfaces/collectionuploadoptions.md) | Additional options like tag, encryption, pinning    |

**Returns:** *Promise*<string\>

reference of the collection of files

Defined in: [bee-js/src/bee.ts:128](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee.ts#L128)

___

### uploadFilesFromDirectory

▸ **uploadFilesFromDirectory**(`dir`: *string*, `recursive?`: *boolean*, `options?`: [*CollectionUploadOptions*](../interfaces/collectionuploadoptions.md)): *Promise*<string\>

Upload collection of files to a Bee node

Uses the `fs` module of Node.js

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`dir` | *string* | - | the path of the files to be uploaded   |
`recursive` | *boolean* | true | specifies if the directory should be recursively uploaded   |
`options?` | [*CollectionUploadOptions*](../interfaces/collectionuploadoptions.md) | - | Additional options like tag, encryption, pinning    |

**Returns:** *Promise*<string\>

reference of the collection of files

Defined in: [bee-js/src/bee.ts:145](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee.ts#L145)
