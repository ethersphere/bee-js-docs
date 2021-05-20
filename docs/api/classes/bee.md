---
id: "bee"
title: "Class: Bee"
sidebar_label: "Bee"
custom_edit_url: null
hide_title: true
---

# Class: Bee

The Bee class provides a way of interacting with the Bee APIs based on the provided url

## Constructors

### constructor

\+ **new Bee**(`url`: *string*, `options?`: [*BeeOptions*](../interfaces/beeoptions.md)): [*Bee*](bee.md)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`url` | *string* | URL of a running Bee node   |
`options?` | [*BeeOptions*](../interfaces/beeoptions.md) |  |

**Returns:** [*Bee*](bee.md)

Defined in: [bee-js/src/bee.ts:63](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee.ts#L63)

## Properties

### signer

• `Optional` `Readonly` **signer**: *undefined* \| [*Signer*](../types/signer.md)

Default Signer used for signing operations, mainly Feeds.

Defined in: [bee-js/src/bee.ts:63](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee.ts#L63)

___

### url

• `Readonly` **url**: *string*

Defined in: [bee-js/src/bee.ts:58](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee.ts#L58)

## Methods

### checkConnection

▸ **checkConnection**(): *Promise*<void\>

Ping the base bee URL. If connection was not successful throw error

**Returns:** *Promise*<void\>

Defined in: [bee-js/src/bee.ts:615](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee.ts#L615)

___

### createFeedManifest

▸ **createFeedManifest**(`postageBatchId`: *string* \| [*Address*](../types/address.md), `type`: *sequence* \| *epoch*, `topic`: *string* \| *Uint8Array* \| [*Topic*](../types/topic.md), `owner`: *string* \| *Uint8Array* \| [*EthAddress*](../types/utils.eth.ethaddress.md)): *Promise*<[*Reference*](../types/reference.md)\>

Create feed manifest chunk and return the reference to it

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`postageBatchId` | *string* \| [*Address*](../types/address.md) | Postage BatchId to be used to create the Feed Manifest   |
`type` | *sequence* \| *epoch* | The type of the feed, can be 'epoch' or 'sequence'   |
`topic` | *string* \| *Uint8Array* \| [*Topic*](../types/topic.md) | Topic in hex or bytes   |
`owner` | *string* \| *Uint8Array* \| [*EthAddress*](../types/utils.eth.ethaddress.md) | Owner's ethereum address in hex or bytes    |

**Returns:** *Promise*<[*Reference*](../types/reference.md)\>

Defined in: [bee-js/src/bee.ts:396](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee.ts#L396)

___

### createPostageBatch

▸ **createPostageBatch**(`amount`: *bigint*, `depth`: *number*, `options?`: [*PostageBatchOptions*](../interfaces/postagebatchoptions.md)): *Promise*<[*Address*](../types/address.md)\>

Creates new postage batch from the funds that the node has available in its Ethereum account.

**`throws`** BeeArgumentError when negative amount or depth is specified

**`throws`** TypeError if non-integer value is passed to amount or depth

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`amount` | *bigint* | Amount that represents the value per chunk, has to be greater or equal zero.   |
`depth` | *number* | Logarithm of the number of chunks that can be stamped with the batch.   |
`options?` | [*PostageBatchOptions*](../interfaces/postagebatchoptions.md) | Options for creation of postage batch   |

**Returns:** *Promise*<[*Address*](../types/address.md)\>

Defined in: [bee-js/src/bee.ts:575](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee.ts#L575)

___

### createTag

▸ **createTag**(): *Promise*<[*Tag*](../interfaces/tag.md)\>

Create new tag

**Returns:** *Promise*<[*Tag*](../interfaces/tag.md)\>

Defined in: [bee-js/src/bee.ts:222](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee.ts#L222)

___

### downloadData

▸ **downloadData**(`reference`: *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\>): *Promise*<[*Data*](../interfaces/data.md)\>

Download data as a byte array

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reference` | *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\> | Bee data reference    |

**Returns:** *Promise*<[*Data*](../interfaces/data.md)\>

Defined in: [bee-js/src/bee.ts:103](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee.ts#L103)

___

### downloadFile

▸ **downloadFile**(`reference`: *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\>, `path?`: *string*): *Promise*<[*FileData*](../interfaces/filedata.md)<[*Data*](../interfaces/data.md)\>\>

Download single file as a byte array

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`reference` | *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\> | - | Bee file reference   |
`path` | *string* | '' | If reference points to manifest, then this parameter defines path to the file    |

**Returns:** *Promise*<[*FileData*](../interfaces/filedata.md)<[*Data*](../interfaces/data.md)\>\>

Defined in: [bee-js/src/bee.ts:157](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee.ts#L157)

___

### downloadReadableData

▸ **downloadReadableData**(`reference`: *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\>, `axiosOptions?`: AxiosRequestConfig): *Promise*<Readable\>

Download data as a readable stream

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reference` | *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\> | Bee data reference   |
`axiosOptions?` | AxiosRequestConfig | optional - alter default options of axios HTTP client    |

**Returns:** *Promise*<Readable\>

Defined in: [bee-js/src/bee.ts:115](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee.ts#L115)

___

### downloadReadableFile

▸ **downloadReadableFile**(`reference`: *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\>, `path?`: *string*): *Promise*<[*FileData*](../interfaces/filedata.md)<Readable\>\>

Download single file as a readable stream

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`reference` | *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\> | - | Bee file reference   |
`path` | *string* | '' | If reference points to manifest, then this parameter defines path to the file    |

**Returns:** *Promise*<[*FileData*](../interfaces/filedata.md)<Readable\>\>

Defined in: [bee-js/src/bee.ts:169](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee.ts#L169)

___

### getAllPins

▸ **getAllPins**(): *Promise*<[*Reference*](../types/reference.md)[]\>

Get list of all pinned references

**Returns:** *Promise*<[*Reference*](../types/reference.md)[]\>

Defined in: [bee-js/src/bee.ts:260](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee.ts#L260)

___

### getAllPostageBatch

▸ **getAllPostageBatch**(): *Promise*<[*PostageBatch*](../interfaces/postagebatch.md)[]\>

Return all postage batches that has the node available.

**Returns:** *Promise*<[*PostageBatch*](../interfaces/postagebatch.md)[]\>

Defined in: [bee-js/src/bee.ts:608](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee.ts#L608)

___

### getJsonFeed

▸ **getJsonFeed**<T\>(`topic`: *string*, `options?`: [*JsonFeedOptions*](../interfaces/jsonfeedoptions.md)): *Promise*<T\>

High-level function that allows you to easily get data from feed.
Returned data are parsed using JSON.parse().

This method also supports specification of `signer` object passed to constructor. The order of evaluation is:
 - `options.address`
 - `options.signer`
 - `this.signer`

At least one of these has to be specified!

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | [*AnyJson*](../types/anyjson.md) |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`topic` | *string* | Human readable string, that is internally hashed so there are no constrains there.   |
`options?` | [*JsonFeedOptions*](../interfaces/jsonfeedoptions.md) |  |

**Returns:** *Promise*<T\>

Defined in: [bee-js/src/bee.ts:494](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee.ts#L494)

___

### getPin

▸ **getPin**(`reference`: *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\>): *Promise*<[*Pin*](../interfaces/pin.md)\>

Get pinning status of chunk with given reference

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reference` | *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\> | Bee data reference    |

**Returns:** *Promise*<[*Pin*](../interfaces/pin.md)\>

Defined in: [bee-js/src/bee.ts:269](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee.ts#L269)

___

### getPostageBatch

▸ **getPostageBatch**(`postageBatchId`: *string* \| [*Address*](../types/address.md)): *Promise*<[*PostageBatch*](../interfaces/postagebatch.md)\>

Return details for specific postage batch.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`postageBatchId` | *string* \| [*Address*](../types/address.md) | BatchId    |

**Returns:** *Promise*<[*PostageBatch*](../interfaces/postagebatch.md)\>

Defined in: [bee-js/src/bee.ts:599](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee.ts#L599)

___

### isConnected

▸ **isConnected**(): *Promise*<boolean\>

Ping the base bee URL.

**Returns:** *Promise*<boolean\>

true if successful, false on error

Defined in: [bee-js/src/bee.ts:624](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee.ts#L624)

___

### makeFeedReader

▸ **makeFeedReader**(`type`: *sequence* \| *epoch*, `topic`: *string* \| *Uint8Array* \| [*Topic*](../types/topic.md), `owner`: *string* \| *Uint8Array* \| [*EthAddress*](../types/utils.eth.ethaddress.md)): [*FeedReader*](../interfaces/feedreader.md)

Make a new feed reader for downloading feed updates

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`type` | *sequence* \| *epoch* | The type of the feed, can be 'epoch' or 'sequence'   |
`topic` | *string* \| *Uint8Array* \| [*Topic*](../types/topic.md) | Topic in hex or bytes   |
`owner` | *string* \| *Uint8Array* \| [*EthAddress*](../types/utils.eth.ethaddress.md) | Owner's ethereum address in hex or bytes    |

**Returns:** [*FeedReader*](../interfaces/feedreader.md)

Defined in: [bee-js/src/bee.ts:418](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee.ts#L418)

___

### makeFeedTopic

▸ **makeFeedTopic**(`topic`: *string*): [*Topic*](../types/topic.md)

Make a new feed topic from a string

Because the topic has to be 32 bytes long this function
hashes the input string to create a topic.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`topic` | *string* | The input string    |

**Returns:** [*Topic*](../types/topic.md)

Defined in: [bee-js/src/bee.ts:531](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee.ts#L531)

___

### makeFeedWriter

▸ **makeFeedWriter**(`type`: *sequence* \| *epoch*, `topic`: *string* \| *Uint8Array* \| [*Topic*](../types/topic.md), `signer?`: *string* \| *Uint8Array* \| [*Signer*](../types/signer.md)): [*FeedWriter*](../interfaces/feedwriter.md)

Make a new feed writer for updating feeds

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`type` | *sequence* \| *epoch* | The type of the feed, can be 'epoch' or 'sequence'   |
`topic` | *string* \| *Uint8Array* \| [*Topic*](../types/topic.md) | Topic in hex or bytes   |
`signer?` | *string* \| *Uint8Array* \| [*Signer*](../types/signer.md) | The signer's private key or a Signer instance that can sign data    |

**Returns:** [*FeedWriter*](../interfaces/feedwriter.md)

Defined in: [bee-js/src/bee.ts:438](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee.ts#L438)

___

### makeSOCReader

▸ **makeSOCReader**(`ownerAddress`: *string* \| *Uint8Array* \| [*EthAddress*](../types/utils.eth.ethaddress.md)): [*SOCReader*](../interfaces/socreader.md)

Returns an object for reading single owner chunks

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`ownerAddress` | *string* \| *Uint8Array* \| [*EthAddress*](../types/utils.eth.ethaddress.md) | The ethereum address of the owner    |

**Returns:** [*SOCReader*](../interfaces/socreader.md)

Defined in: [bee-js/src/bee.ts:540](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee.ts#L540)

___

### makeSOCWriter

▸ **makeSOCWriter**(`signer?`: *string* \| *Uint8Array* \| [*Signer*](../types/signer.md)): [*SOCWriter*](../interfaces/socwriter.md)

Returns an object for reading and writing single owner chunks

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`signer?` | *string* \| *Uint8Array* \| [*Signer*](../types/signer.md) | The signer's private key or a Signer instance that can sign data    |

**Returns:** [*SOCWriter*](../interfaces/socwriter.md)

Defined in: [bee-js/src/bee.ts:553](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee.ts#L553)

___

### pin

▸ **pin**(`reference`: *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\>): *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Pin data with given reference

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reference` | *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\> | Bee data reference    |

**Returns:** *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Defined in: [bee-js/src/bee.ts:240](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee.ts#L240)

___

### pssReceive

▸ **pssReceive**(`topic`: *string*, `timeoutMsec?`: *number*): *Promise*<[*Data*](../interfaces/data.md)\>

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

**Returns:** *Promise*<[*Data*](../interfaces/data.md)\>

Message in byte array

Defined in: [bee-js/src/bee.ts:361](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee.ts#L361)

___

### pssSend

▸ **pssSend**(`postageBatchId`: *string* \| [*Address*](../types/address.md), `topic`: *string*, `target`: [*AddressPrefix*](../types/addressprefix.md), `data`: *string* \| *Uint8Array*, `recipient?`: *string*): *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Send to recipient or target with Postal Service for Swarm

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`postageBatchId` | *string* \| [*Address*](../types/address.md) | Postage BatchId that will be assigned to sent message   |
`topic` | *string* | Topic name   |
`target` | [*AddressPrefix*](../types/addressprefix.md) | Target message address prefix   |
`data` | *string* \| *Uint8Array* | Message to be sent   |
`recipient?` | *string* | Recipient public key    |

**Returns:** *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Defined in: [bee-js/src/bee.ts:284](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee.ts#L284)

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

Defined in: [bee-js/src/bee.ts:304](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee.ts#L304)

___

### retrieveTag

▸ **retrieveTag**(`tagUid`: *number* \| [*Tag*](../interfaces/tag.md)): *Promise*<[*Tag*](../interfaces/tag.md)\>

Retrieve tag information from Bee node

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`tagUid` | *number* \| [*Tag*](../interfaces/tag.md) | UID or tag object to be retrieved    |

**Returns:** *Promise*<[*Tag*](../interfaces/tag.md)\>

Defined in: [bee-js/src/bee.ts:231](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee.ts#L231)

___

### setJsonFeed

▸ **setJsonFeed**<T\>(`postageBatchId`: *string* \| [*Address*](../types/address.md), `topic`: *string*, `data`: T, `options?`: [*JsonFeedOptions*](../interfaces/jsonfeedoptions.md)): *Promise*<[*ReferenceResponse*](../interfaces/referenceresponse.md)\>

High-level function that allows you to easily set JSON data to feed.
JSON-like data types are supported.

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | [*AnyJson*](../types/anyjson.md) |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`postageBatchId` | *string* \| [*Address*](../types/address.md) | Postage BatchId to be used to upload the data with   |
`topic` | *string* | Human readable string, that is internally hashed so there are no constrains there.   |
`data` | T | JSON compatible data   |
`options?` | [*JsonFeedOptions*](../interfaces/jsonfeedoptions.md) |  |

**Returns:** *Promise*<[*ReferenceResponse*](../interfaces/referenceresponse.md)\>

Defined in: [bee-js/src/bee.ts:462](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee.ts#L462)

___

### unpin

▸ **unpin**(`reference`: *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\>): *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Unpin data with given reference

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reference` | *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\> | Bee data reference    |

**Returns:** *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Defined in: [bee-js/src/bee.ts:251](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee.ts#L251)

___

### uploadData

▸ **uploadData**(`postageBatchId`: *string* \| [*Address*](../types/address.md), `data`: *string* \| *Uint8Array*, `options?`: [*UploadOptions*](../interfaces/uploadoptions.md)): *Promise*<[*Reference*](../types/reference.md)\>

Upload data to a Bee node

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`postageBatchId` | *string* \| [*Address*](../types/address.md) | Postage BatchId to be used to upload the data with   |
`data` | *string* \| *Uint8Array* | Data to be uploaded   |
`options?` | [*UploadOptions*](../interfaces/uploadoptions.md) | Additional options like tag, encryption, pinning, content-type    |

**Returns:** *Promise*<[*Reference*](../types/reference.md)\>

reference is a content hash of the data

Defined in: [bee-js/src/bee.ts:92](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee.ts#L92)

___

### uploadFile

▸ **uploadFile**(`postageBatchId`: *string* \| [*Address*](../types/address.md), `data`: *string* \| *Uint8Array* \| *Readable* \| File, `name?`: *string*, `options?`: [*FileUploadOptions*](../interfaces/fileuploadoptions.md)): *Promise*<[*Reference*](../types/reference.md)\>

Upload single file to a Bee node

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`postageBatchId` | *string* \| [*Address*](../types/address.md) | Postage BatchId to be used to upload the data with   |
`data` | *string* \| *Uint8Array* \| *Readable* \| File | Data or file to be uploaded   |
`name?` | *string* | Name of the uploaded file (optional)   |
`options?` | [*FileUploadOptions*](../interfaces/fileuploadoptions.md) | Aditional options like tag, encryption, pinning, content-type    |

**Returns:** *Promise*<[*Reference*](../types/reference.md)\>

reference is a content hash of the file

Defined in: [bee-js/src/bee.ts:131](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee.ts#L131)

___

### uploadFiles

▸ **uploadFiles**(`postageBatchId`: *string* \| [*Address*](../types/address.md), `fileList`: FileList \| File[], `options?`: [*CollectionUploadOptions*](../interfaces/collectionuploadoptions.md)): *Promise*<[*Reference*](../types/reference.md)\>

Upload collection of files to a Bee node

Uses the FileList API from the browser.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`postageBatchId` | *string* \| [*Address*](../types/address.md) | Postage BatchId to be used to upload the data with   |
`fileList` | FileList \| File[] | list of files to be uploaded   |
`options?` | [*CollectionUploadOptions*](../interfaces/collectionuploadoptions.md) | Additional options like tag, encryption, pinning    |

**Returns:** *Promise*<[*Reference*](../types/reference.md)\>

reference of the collection of files

Defined in: [bee-js/src/bee.ts:186](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee.ts#L186)

___

### uploadFilesFromDirectory

▸ **uploadFilesFromDirectory**(`postageBatchId`: *string* \| [*Address*](../types/address.md), `dir`: *string*, `options?`: [*CollectionUploadOptions*](../interfaces/collectionuploadoptions.md)): *Promise*<[*Reference*](../types/reference.md)\>

Upload collection of files to a Bee node

Uses the `fs` module of Node.js

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`postageBatchId` | *string* \| [*Address*](../types/address.md) | Postage BatchId to be used to upload the data with   |
`dir` | *string* | the path of the files to be uploaded   |
`options?` | [*CollectionUploadOptions*](../interfaces/collectionuploadoptions.md) | Additional options like tag, encryption, pinning    |

**Returns:** *Promise*<[*Reference*](../types/reference.md)\>

reference of the collection of files

Defined in: [bee-js/src/bee.ts:208](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee.ts#L208)
