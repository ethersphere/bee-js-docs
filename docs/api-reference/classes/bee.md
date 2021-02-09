---
hide_title: true
title: Bee
---

# Class: Bee

The Bee class provides a way of interacting with the Bee APIs based on the provided url

**`param`** URL of a running Bee node

## Hierarchy

* **Bee**

## Table of contents

### Constructors

- [constructor](bee.md#constructor)

### Properties

- [url](bee.md#url)

### Methods

- [createTag](bee.md#createtag)
- [downloadData](bee.md#downloaddata)
- [downloadFile](bee.md#downloadfile)
- [downloadFileFromCollection](bee.md#downloadfilefromcollection)
- [downloadReadableData](bee.md#downloadreadabledata)
- [downloadReadableFile](bee.md#downloadreadablefile)
- [downloadReadableFileFromCollection](bee.md#downloadreadablefilefromcollection)
- [pinCollection](bee.md#pincollection)
- [pinData](bee.md#pindata)
- [pinFile](bee.md#pinfile)
- [pssReceive](bee.md#pssreceive)
- [pssSend](bee.md#psssend)
- [pssSubscribe](bee.md#psssubscribe)
- [retrieveTag](bee.md#retrievetag)
- [unpinCollection](bee.md#unpincollection)
- [unpinData](bee.md#unpindata)
- [unpinFile](bee.md#unpinfile)
- [uploadData](bee.md#uploaddata)
- [uploadFile](bee.md#uploadfile)
- [uploadFiles](bee.md#uploadfiles)
- [uploadFilesFromDirectory](bee.md#uploadfilesfromdirectory)

## Constructors

### constructor

\+ **new Bee**(`url`: *string*): [*Bee*](bee.md)

#### Parameters:

Name | Type |
------ | ------ |
`url` | *string* |

**Returns:** [*Bee*](bee.md)

Defined in: [src/bee.ts:30](https://github.com/ethersphere/bee-js/blob/313830a/src/bee.ts#L30)

## Properties

### url

• `Readonly` **url**: *string*

## Methods

### createTag

▸ **createTag**(): *Promise*<[*Tag*](../interfaces/tag.md)\>

Create new tag

**Returns:** *Promise*<[*Tag*](../interfaces/tag.md)\>

Defined in: [src/bee.ts:167](https://github.com/ethersphere/bee-js/blob/313830a/src/bee.ts#L167)

___

### downloadData

▸ **downloadData**(`reference`: *string*): *Promise*<*Uint8Array*\>

Download data as a byte array

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reference` | *string* | Bee data reference    |

**Returns:** *Promise*<*Uint8Array*\>

Defined in: [src/bee.ts:50](https://github.com/ethersphere/bee-js/blob/313830a/src/bee.ts#L50)

___

### downloadFile

▸ **downloadFile**(`reference`: *string*): *Promise*<[*FileData*](../interfaces/filedata.md)<*Uint8Array*\>\>

Download single file as a byte array

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reference` | *string* | Bee file reference    |

**Returns:** *Promise*<[*FileData*](../interfaces/filedata.md)<*Uint8Array*\>\>

Defined in: [src/bee.ts:94](https://github.com/ethersphere/bee-js/blob/313830a/src/bee.ts#L94)

___

### downloadFileFromCollection

▸ **downloadFileFromCollection**(`reference`: *string*, `path?`: *string*): *Promise*<[*FileData*](../interfaces/filedata.md)<*Uint8Array*\>\>

Download single file as a byte array from collection given using the path

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`reference` | *string* | - | Bee collection reference   |
`path` | *string* | '' | Path of the requested file in the collection    |

**Returns:** *Promise*<[*FileData*](../interfaces/filedata.md)<*Uint8Array*\>\>

file in byte array with metadata

Defined in: [src/bee.ts:148](https://github.com/ethersphere/bee-js/blob/313830a/src/bee.ts#L148)

___

### downloadReadableData

▸ **downloadReadableData**(`reference`: *string*): *Promise*<*Readable*\>

Download data as a readable stream

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reference` | *string* | Bee data reference    |

**Returns:** *Promise*<*Readable*\>

Defined in: [src/bee.ts:59](https://github.com/ethersphere/bee-js/blob/313830a/src/bee.ts#L59)

___

### downloadReadableFile

▸ **downloadReadableFile**(`reference`: *string*): *Promise*<[*FileData*](../interfaces/filedata.md)<*Readable*\>\>

Download single file as a readable stream

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reference` | *string* | Bee file reference    |

**Returns:** *Promise*<[*FileData*](../interfaces/filedata.md)<*Readable*\>\>

Defined in: [src/bee.ts:103](https://github.com/ethersphere/bee-js/blob/313830a/src/bee.ts#L103)

___

### downloadReadableFileFromCollection

▸ **downloadReadableFileFromCollection**(`reference`: *string*, `path?`: *string*): *Promise*<[*FileData*](../interfaces/filedata.md)<*Readable*\>\>

Download single file as a readable stream from collection given using the path

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`reference` | *string* | - | Bee collection reference   |
`path` | *string* | '' | Path of the requested file in the collection    |

**Returns:** *Promise*<[*FileData*](../interfaces/filedata.md)<*Readable*\>\>

file in readable stream with metadata

Defined in: [src/bee.ts:160](https://github.com/ethersphere/bee-js/blob/313830a/src/bee.ts#L160)

___

### pinCollection

▸ **pinCollection**(`reference`: *string*): *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Pin collection with given reference

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reference` | *string* | Bee collection reference    |

**Returns:** *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Defined in: [src/bee.ts:203](https://github.com/ethersphere/bee-js/blob/313830a/src/bee.ts#L203)

___

### pinData

▸ **pinData**(`reference`: *string*): *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Pin data with given reference

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reference` | *string* | Bee data reference    |

**Returns:** *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Defined in: [src/bee.ts:221](https://github.com/ethersphere/bee-js/blob/313830a/src/bee.ts#L221)

___

### pinFile

▸ **pinFile**(`reference`: *string*): *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Pin file with given reference

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reference` | *string* | Bee file reference    |

**Returns:** *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Defined in: [src/bee.ts:185](https://github.com/ethersphere/bee-js/blob/313830a/src/bee.ts#L185)

___

### pssReceive

▸ **pssReceive**(`topic`: *string*, `timeoutMsec?`: *number*): *Promise*<*Uint8Array*\>

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
------ | ------ | ------ | ------ |
`topic` | *string* | - | Topic name   |
`timeoutMsec` | *number* | 0 | Timeout in milliseconds    |

**Returns:** *Promise*<*Uint8Array*\>

Message in byte array

Defined in: [src/bee.ts:315](https://github.com/ethersphere/bee-js/blob/313830a/src/bee.ts#L315)

___

### pssSend

▸ **pssSend**(`topic`: *string*, `target`: *string*, `data`: *string* \| *Uint8Array*, `recipient?`: *string*): *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Send to recipient or target with Postal Service for Swarm

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`topic` | *string* | Topic name   |
`target` | *string* | Target message address prefix   |
`data` | *string* \| *Uint8Array* | Message to be sent   |
`recipient?` | *string* | Recipient public key     |

**Returns:** *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Defined in: [src/bee.ts:243](https://github.com/ethersphere/bee-js/blob/313830a/src/bee.ts#L243)

___

### pssSubscribe

▸ **pssSubscribe**(`topic`: *string*, `handler`: [*PssMessageHandler*](../interfaces/pssmessagehandler.md)): [*PssSubscription*](../interfaces/psssubscription.md)

Subscribe to messages with Postal Service for Swarm

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`topic` | *string* | Topic name   |
`handler` | [*PssMessageHandler*](../interfaces/pssmessagehandler.md) | Message handler interface    |

**Returns:** [*PssSubscription*](../interfaces/psssubscription.md)

Subscription to a given topic

Defined in: [src/bee.ts:260](https://github.com/ethersphere/bee-js/blob/313830a/src/bee.ts#L260)

___

### retrieveTag

▸ **retrieveTag**(`tagUid`: *number* \| [*Tag*](../interfaces/tag.md)): *Promise*<[*Tag*](../interfaces/tag.md)\>

Retrieve tag information from Bee node

#### Parameters:

Name | Type |
------ | ------ |
`tagUid` | *number* \| [*Tag*](../interfaces/tag.md) |

**Returns:** *Promise*<[*Tag*](../interfaces/tag.md)\>

Defined in: [src/bee.ts:176](https://github.com/ethersphere/bee-js/blob/313830a/src/bee.ts#L176)

___

### unpinCollection

▸ **unpinCollection**(`reference`: *string*): *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Unpin collection with given reference

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reference` | *string* | Bee collection reference    |

**Returns:** *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Defined in: [src/bee.ts:212](https://github.com/ethersphere/bee-js/blob/313830a/src/bee.ts#L212)

___

### unpinData

▸ **unpinData**(`reference`: *string*): *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Unpin data with given reference

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reference` | *string* | Bee data reference    |

**Returns:** *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Defined in: [src/bee.ts:230](https://github.com/ethersphere/bee-js/blob/313830a/src/bee.ts#L230)

___

### unpinFile

▸ **unpinFile**(`reference`: *string*): *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Unpin file with given reference

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reference` | *string* | Bee file reference    |

**Returns:** *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Defined in: [src/bee.ts:194](https://github.com/ethersphere/bee-js/blob/313830a/src/bee.ts#L194)

___

### uploadData

▸ **uploadData**(`data`: *string* \| *Uint8Array*, `options?`: [*UploadOptions*](../interfaces/uploadoptions.md)): *Promise*<*string*\>

Upload data to a Bee node

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data` | *string* \| *Uint8Array* | Data to be uploaded   |
`options?` | [*UploadOptions*](../interfaces/uploadoptions.md) | Aditional options like tag, encryption, pinning, content-type    |

**Returns:** *Promise*<*string*\>

reference is a content hash of the data

Defined in: [src/bee.ts:41](https://github.com/ethersphere/bee-js/blob/313830a/src/bee.ts#L41)

___

### uploadFile

▸ **uploadFile**(`data`: *string* \| *Uint8Array* \| *Readable* \| File, `name?`: *string*, `options?`: [*FileUploadOptions*](../interfaces/fileuploadoptions.md)): *Promise*<*string*\>

Upload single file to a Bee node

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data` | *string* \| *Uint8Array* \| *Readable* \| File | Data or file to be uploaded   |
`name?` | *string* | Name of the uploaded file (optional)   |
`options?` | [*FileUploadOptions*](../interfaces/fileuploadoptions.md) | Aditional options like tag, encryption, pinning, content-type    |

**Returns:** *Promise*<*string*\>

reference is a content hash of the file

Defined in: [src/bee.ts:72](https://github.com/ethersphere/bee-js/blob/313830a/src/bee.ts#L72)

___

### uploadFiles

▸ **uploadFiles**(`fileList`: FileList \| File[], `options?`: [*CollectionUploadOptions*](../interfaces/collectionuploadoptions.md)): *Promise*<*string*\>

Upload collection of files to a Bee node

Uses the FileList API from the browser.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`fileList` | FileList \| File[] | list of files to be uploaded   |
`options?` | [*CollectionUploadOptions*](../interfaces/collectionuploadoptions.md) | Additional options like tag, encryption, pinning    |

**Returns:** *Promise*<*string*\>

reference of the collection of files

Defined in: [src/bee.ts:117](https://github.com/ethersphere/bee-js/blob/313830a/src/bee.ts#L117)

___

### uploadFilesFromDirectory

▸ **uploadFilesFromDirectory**(`dir`: *string*, `recursive?`: *boolean*, `options?`: [*CollectionUploadOptions*](../interfaces/collectionuploadoptions.md)): *Promise*<*string*\>

Upload collection of files to a Bee node

Uses the `fs` module of Node.js

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`dir` | *string* | - | the path of the files to be uploaded   |
`recursive` | *boolean* | true | specifies if the directory should be recursively uploaded   |
`options?` | [*CollectionUploadOptions*](../interfaces/collectionuploadoptions.md) | - | Additional options like tag, encryption, pinning    |

**Returns:** *Promise*<*string*\>

reference of the collection of files

Defined in: [src/bee.ts:134](https://github.com/ethersphere/bee-js/blob/313830a/src/bee.ts#L134)
