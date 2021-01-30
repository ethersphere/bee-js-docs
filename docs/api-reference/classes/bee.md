---
title: Bee
hide_title: true
---

# Class: Bee

The Bee class provides a way of interacting with the Bee APIs based on the provided url

**`param`** URL of a running Bee node

## Hierarchy

* **Bee**

## Table of contents

### Constructors

- [constructor](bee#constructor)

### Properties

- [url](bee#url)

### Methods

- [createTag](bee#createtag)
- [downloadData](bee#downloaddata)
- [downloadFile](bee#downloadfile)
- [downloadFileFromCollection](bee#downloadfilefromcollection)
- [downloadReadableData](bee#downloadreadabledata)
- [downloadReadableFile](bee#downloadreadablefile)
- [downloadReadableFileFromCollection](bee#downloadreadablefilefromcollection)
- [pinCollection](bee#pincollection)
- [pinData](bee#pindata)
- [pinFile](bee#pinfile)
- [pssReceive](bee#pssreceive)
- [pssSend](bee#psssend)
- [pssSubscribe](bee#psssubscribe)
- [retrieveTag](bee#retrievetag)
- [unpinCollection](bee#unpincollection)
- [unpinData](bee#unpindata)
- [unpinFile](bee#unpinfile)
- [uploadData](bee#uploaddata)
- [uploadFile](bee#uploadfile)
- [uploadFiles](bee#uploadfiles)
- [uploadFilesFromDirectory](bee#uploadfilesfromdirectory)

## Constructors

### constructor

\+ **new Bee**(`url`: *string*): [*Bee*](bee)

#### Parameters:

Name | Type |
------ | ------ |
`url` | *string* |

**Returns:** [*Bee*](bee)

Defined in: [index.ts:29](https://github.com/ethersphere/bee-js/blob/54b2270/src/index.ts#L29)

## Properties

### url

• `Readonly` **url**: *string*

## Methods

### createTag

▸ **createTag**(): *Promise*<Tag\>

Create new tag

**Returns:** *Promise*<Tag\>

Defined in: [index.ts:161](https://github.com/ethersphere/bee-js/blob/54b2270/src/index.ts#L161)

___

### downloadData

▸ **downloadData**(`reference`: *string*): *Promise*<*Uint8Array*\>

Download data as a byte array

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reference` | *string* | Bee data reference    |

**Returns:** *Promise*<*Uint8Array*\>

Defined in: [index.ts:49](https://github.com/ethersphere/bee-js/blob/54b2270/src/index.ts#L49)

___

### downloadFile

▸ **downloadFile**(`reference`: *string*): *Promise*<*FileData*<*Uint8Array*\>\>

Download single file as a byte array

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reference` | *string* | Bee file reference    |

**Returns:** *Promise*<*FileData*<*Uint8Array*\>\>

Defined in: [index.ts:84](https://github.com/ethersphere/bee-js/blob/54b2270/src/index.ts#L84)

___

### downloadFileFromCollection

▸ **downloadFileFromCollection**(`reference`: *string*, `path?`: *string*): *Promise*<*FileData*<*Uint8Array*\>\>

Download single file as a byte array from collection given using the path

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`reference` | *string* | - | Bee collection reference   |
`path` | *string* | '' | Path of the requested file in the collection    |

**Returns:** *Promise*<*FileData*<*Uint8Array*\>\>

file in byte array with metadata

Defined in: [index.ts:142](https://github.com/ethersphere/bee-js/blob/54b2270/src/index.ts#L142)

___

### downloadReadableData

▸ **downloadReadableData**(`reference`: *string*): *Promise*<*Readable*\>

Download data as a readable stream

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reference` | *string* | Bee data reference    |

**Returns:** *Promise*<*Readable*\>

Defined in: [index.ts:58](https://github.com/ethersphere/bee-js/blob/54b2270/src/index.ts#L58)

___

### downloadReadableFile

▸ **downloadReadableFile**(`reference`: *string*): *Promise*<*FileData*<*Readable*\>\>

Download single file as a readable stream

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reference` | *string* | Bee file reference    |

**Returns:** *Promise*<*FileData*<*Readable*\>\>

Defined in: [index.ts:93](https://github.com/ethersphere/bee-js/blob/54b2270/src/index.ts#L93)

___

### downloadReadableFileFromCollection

▸ **downloadReadableFileFromCollection**(`reference`: *string*, `path?`: *string*): *Promise*<*FileData*<*Readable*\>\>

Download single file as a readable stream from collection given using the path

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`reference` | *string* | - | Bee collection reference   |
`path` | *string* | '' | Path of the requested file in the collection    |

**Returns:** *Promise*<*FileData*<*Readable*\>\>

file in readable stream with metadata

Defined in: [index.ts:154](https://github.com/ethersphere/bee-js/blob/54b2270/src/index.ts#L154)

___

### pinCollection

▸ **pinCollection**(`reference`: *string*): *Promise*<BeeResponse\>

Pin collection with given reference

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reference` | *string* | Bee collection reference    |

**Returns:** *Promise*<BeeResponse\>

Defined in: [index.ts:197](https://github.com/ethersphere/bee-js/blob/54b2270/src/index.ts#L197)

___

### pinData

▸ **pinData**(`reference`: *string*): *Promise*<BeeResponse\>

Pin data with given reference

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reference` | *string* | Bee data reference    |

**Returns:** *Promise*<BeeResponse\>

Defined in: [index.ts:215](https://github.com/ethersphere/bee-js/blob/54b2270/src/index.ts#L215)

___

### pinFile

▸ **pinFile**(`reference`: *string*): *Promise*<BeeResponse\>

Pin file with given reference

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reference` | *string* | Bee file reference    |

**Returns:** *Promise*<BeeResponse\>

Defined in: [index.ts:179](https://github.com/ethersphere/bee-js/blob/54b2270/src/index.ts#L179)

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

Defined in: [index.ts:309](https://github.com/ethersphere/bee-js/blob/54b2270/src/index.ts#L309)

___

### pssSend

▸ **pssSend**(`topic`: *string*, `target`: *string*, `data`: *string* \| *Uint8Array*, `recipient?`: *string*): *Promise*<BeeResponse\>

Send to recipient or target with Postal Service for Swarm

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`topic` | *string* | Topic name   |
`target` | *string* | Target message address prefix   |
`data` | *string* \| *Uint8Array* | Message to be sent   |
`recipient?` | *string* | Recipient public key     |

**Returns:** *Promise*<BeeResponse\>

Defined in: [index.ts:237](https://github.com/ethersphere/bee-js/blob/54b2270/src/index.ts#L237)

___

### pssSubscribe

▸ **pssSubscribe**(`topic`: *string*, `handler`: PssMessageHandler): PssSubscription

Subscribe to messages with Postal Service for Swarm

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`topic` | *string* | Topic name   |
`handler` | PssMessageHandler | Message handler interface    |

**Returns:** PssSubscription

Subscription to a given topic

Defined in: [index.ts:254](https://github.com/ethersphere/bee-js/blob/54b2270/src/index.ts#L254)

___

### retrieveTag

▸ **retrieveTag**(`tagUid`: *number* \| Tag): *Promise*<Tag\>

Retrieve tag information from Bee node

#### Parameters:

Name | Type |
------ | ------ |
`tagUid` | *number* \| Tag |

**Returns:** *Promise*<Tag\>

Defined in: [index.ts:170](https://github.com/ethersphere/bee-js/blob/54b2270/src/index.ts#L170)

___

### unpinCollection

▸ **unpinCollection**(`reference`: *string*): *Promise*<BeeResponse\>

Unpin collection with given reference

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reference` | *string* | Bee collection reference    |

**Returns:** *Promise*<BeeResponse\>

Defined in: [index.ts:206](https://github.com/ethersphere/bee-js/blob/54b2270/src/index.ts#L206)

___

### unpinData

▸ **unpinData**(`reference`: *string*): *Promise*<BeeResponse\>

Unpin data with given reference

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reference` | *string* | Bee data reference    |

**Returns:** *Promise*<BeeResponse\>

Defined in: [index.ts:224](https://github.com/ethersphere/bee-js/blob/54b2270/src/index.ts#L224)

___

### unpinFile

▸ **unpinFile**(`reference`: *string*): *Promise*<BeeResponse\>

Unpin file with given reference

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reference` | *string* | Bee file reference    |

**Returns:** *Promise*<BeeResponse\>

Defined in: [index.ts:188](https://github.com/ethersphere/bee-js/blob/54b2270/src/index.ts#L188)

___

### uploadData

▸ **uploadData**(`data`: *string* \| *Uint8Array*, `options?`: UploadOptions): *Promise*<*string*\>

Upload data to a Bee node

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data` | *string* \| *Uint8Array* | Data to be uploaded   |
`options?` | UploadOptions | Aditional options like tag, encryption, pinning, content-type    |

**Returns:** *Promise*<*string*\>

reference is a content hash of the data

Defined in: [index.ts:40](https://github.com/ethersphere/bee-js/blob/54b2270/src/index.ts#L40)

___

### uploadFile

▸ **uploadFile**(`data`: *string* \| *Uint8Array* \| *Readable*, `name?`: *string*, `options?`: FileUploadOptions): *Promise*<*string*\>

Upload single file to a Bee node

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data` | *string* \| *Uint8Array* \| *Readable* | Data to be uploaded   |
`name?` | *string* | Name of the uploaded file   |
`options?` | FileUploadOptions | Aditional options like tag, encryption, pinning, content-type    |

**Returns:** *Promise*<*string*\>

reference is a content hash of the file

Defined in: [index.ts:71](https://github.com/ethersphere/bee-js/blob/54b2270/src/index.ts#L71)

___

### uploadFiles

▸ **uploadFiles**(`fileList`: FileList \| File[], `options?`: CollectionUploadOptions): *Promise*<*string*\>

Upload collection of files to a Bee node

Uses the FileList API from the browser.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`fileList` | FileList \| File[] | list of files to be uploaded   |
`options?` | CollectionUploadOptions | Additional options like tag, encryption, pinning    |

**Returns:** *Promise*<*string*\>

reference of the collection of files

Defined in: [index.ts:107](https://github.com/ethersphere/bee-js/blob/54b2270/src/index.ts#L107)

___

### uploadFilesFromDirectory

▸ **uploadFilesFromDirectory**(`dir`: *string*, `recursive?`: *boolean*, `options?`: CollectionUploadOptions): *Promise*<*string*\>

Upload collection of files to a Bee node

Uses the `fs` module of Node.js

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`dir` | *string* | - | the path of the files to be uploaded   |
`recursive` | *boolean* | true | specifies if the directory should be recursively uploaded   |
`options?` | CollectionUploadOptions | - | Additional options like tag, encryption, pinning    |

**Returns:** *Promise*<*string*\>

reference of the collection of files

Defined in: [index.ts:124](https://github.com/ethersphere/bee-js/blob/54b2270/src/index.ts#L124)
