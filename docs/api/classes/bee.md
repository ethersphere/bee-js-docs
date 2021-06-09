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

Defined in: [bee-js/src/bee.ts:76](https://github.com/ethersphere/bee-js/blob/430becc/src/bee.ts#L76)

## Properties

### signer

• `Optional` `Readonly` **signer**: *undefined* \| [*Signer*](../types/signer.md)

Default Signer used for signing operations, mainly Feeds.

Defined in: [bee-js/src/bee.ts:76](https://github.com/ethersphere/bee-js/blob/430becc/src/bee.ts#L76)

___

### url

• `Readonly` **url**: *string*

Defined in: [bee-js/src/bee.ts:71](https://github.com/ethersphere/bee-js/blob/430becc/src/bee.ts#L71)

## Methods

### checkConnection

▸ **checkConnection**(): *Promise*<void\>

Ping the base bee URL. If connection was not successful throw error

**Returns:** *Promise*<void\>

Defined in: [bee-js/src/bee.ts:703](https://github.com/ethersphere/bee-js/blob/430becc/src/bee.ts#L703)

___

### createFeedManifest

▸ **createFeedManifest**(`postageBatchId`: *string* \| [*BatchId*](../types/batchid.md), `type`: *sequence* \| *epoch*, `topic`: *string* \| *Uint8Array* \| [*Topic*](../types/topic.md), `owner`: *string* \| *Uint8Array* \| [*EthAddress*](../types/utils.eth.ethaddress.md)): *Promise*<[*Reference*](../types/reference.md)\>

Create feed manifest chunk and return the reference to it

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`postageBatchId` | *string* \| [*BatchId*](../types/batchid.md) | Postage BatchId to be used to create the Feed Manifest   |
`type` | *sequence* \| *epoch* | The type of the feed, can be 'epoch' or 'sequence'   |
`topic` | *string* \| *Uint8Array* \| [*Topic*](../types/topic.md) | Topic in hex or bytes   |
`owner` | *string* \| *Uint8Array* \| [*EthAddress*](../types/utils.eth.ethaddress.md) | Owner's ethereum address in hex or bytes    |

**Returns:** *Promise*<[*Reference*](../types/reference.md)\>

Defined in: [bee-js/src/bee.ts:485](https://github.com/ethersphere/bee-js/blob/430becc/src/bee.ts#L485)

___

### createPostageBatch

▸ **createPostageBatch**(`amount`: *bigint*, `depth`: *number*, `options?`: [*PostageBatchOptions*](../interfaces/postagebatchoptions.md)): *Promise*<[*BatchId*](../types/batchid.md)\>

Creates new postage batch from the funds that the node has available in its Ethereum account.

**`throws`** BeeArgumentError when negative amount or depth is specified

**`throws`** TypeError if non-integer value is passed to amount or depth

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`amount` | *bigint* | Amount that represents the value per chunk, has to be greater or equal zero.   |
`depth` | *number* | Logarithm of the number of chunks that can be stamped with the batch.   |
`options?` | [*PostageBatchOptions*](../interfaces/postagebatchoptions.md) | Options for creation of postage batch   |

**Returns:** *Promise*<[*BatchId*](../types/batchid.md)\>

Defined in: [bee-js/src/bee.ts:663](https://github.com/ethersphere/bee-js/blob/430becc/src/bee.ts#L663)

___

### createTag

▸ **createTag**(): *Promise*<[*Tag*](../interfaces/tag.md)\>

Create new tag

**Returns:** *Promise*<[*Tag*](../interfaces/tag.md)\>

Defined in: [bee-js/src/bee.ts:254](https://github.com/ethersphere/bee-js/blob/430becc/src/bee.ts#L254)

___

### downloadData

▸ **downloadData**(`reference`: *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\>): *Promise*<[*Data*](../interfaces/data.md)\>

Download data as a byte array

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reference` | *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\> | Bee data reference    |

**Returns:** *Promise*<[*Data*](../interfaces/data.md)\>

Defined in: [bee-js/src/bee.ts:123](https://github.com/ethersphere/bee-js/blob/430becc/src/bee.ts#L123)

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

Defined in: [bee-js/src/bee.ts:184](https://github.com/ethersphere/bee-js/blob/430becc/src/bee.ts#L184)

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

Defined in: [bee-js/src/bee.ts:135](https://github.com/ethersphere/bee-js/blob/430becc/src/bee.ts#L135)

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

Defined in: [bee-js/src/bee.ts:196](https://github.com/ethersphere/bee-js/blob/430becc/src/bee.ts#L196)

___

### getAllPins

▸ **getAllPins**(): *Promise*<[*Reference*](../types/reference.md)[]\>

Get list of all pinned references

**Returns:** *Promise*<[*Reference*](../types/reference.md)[]\>

Defined in: [bee-js/src/bee.ts:300](https://github.com/ethersphere/bee-js/blob/430becc/src/bee.ts#L300)

___

### getAllPostageBatch

▸ **getAllPostageBatch**(): *Promise*<[*PostageBatch*](../interfaces/postagebatch.md)[]\>

Return all postage batches that has the node available.

**Returns:** *Promise*<[*PostageBatch*](../interfaces/postagebatch.md)[]\>

Defined in: [bee-js/src/bee.ts:696](https://github.com/ethersphere/bee-js/blob/430becc/src/bee.ts#L696)

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

Defined in: [bee-js/src/bee.ts:583](https://github.com/ethersphere/bee-js/blob/430becc/src/bee.ts#L583)

___

### getPin

▸ **getPin**(`reference`: *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\>): *Promise*<[*Pin*](../interfaces/pin.md)\>

Get pinning status of chunk with given reference

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reference` | *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\> | Bee data reference    |

**Returns:** *Promise*<[*Pin*](../interfaces/pin.md)\>

Defined in: [bee-js/src/bee.ts:309](https://github.com/ethersphere/bee-js/blob/430becc/src/bee.ts#L309)

___

### getPostageBatch

▸ **getPostageBatch**(`postageBatchId`: *string* \| [*BatchId*](../types/batchid.md)): *Promise*<[*PostageBatch*](../interfaces/postagebatch.md)\>

Return details for specific postage batch.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`postageBatchId` | *string* \| [*BatchId*](../types/batchid.md) | BatchId    |

**Returns:** *Promise*<[*PostageBatch*](../interfaces/postagebatch.md)\>

Defined in: [bee-js/src/bee.ts:687](https://github.com/ethersphere/bee-js/blob/430becc/src/bee.ts#L687)

___

### isConnected

▸ **isConnected**(): *Promise*<boolean\>

Ping the base bee URL.

**Returns:** *Promise*<boolean\>

true if successful, false on error

Defined in: [bee-js/src/bee.ts:712](https://github.com/ethersphere/bee-js/blob/430becc/src/bee.ts#L712)

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

Defined in: [bee-js/src/bee.ts:507](https://github.com/ethersphere/bee-js/blob/430becc/src/bee.ts#L507)

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

Defined in: [bee-js/src/bee.ts:620](https://github.com/ethersphere/bee-js/blob/430becc/src/bee.ts#L620)

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

Defined in: [bee-js/src/bee.ts:527](https://github.com/ethersphere/bee-js/blob/430becc/src/bee.ts#L527)

___

### makeSOCReader

▸ **makeSOCReader**(`ownerAddress`: *string* \| *Uint8Array* \| [*EthAddress*](../types/utils.eth.ethaddress.md)): [*SOCReader*](../interfaces/socreader.md)

Returns an object for reading single owner chunks

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`ownerAddress` | *string* \| *Uint8Array* \| [*EthAddress*](../types/utils.eth.ethaddress.md) | The ethereum address of the owner    |

**Returns:** [*SOCReader*](../interfaces/socreader.md)

Defined in: [bee-js/src/bee.ts:629](https://github.com/ethersphere/bee-js/blob/430becc/src/bee.ts#L629)

___

### makeSOCWriter

▸ **makeSOCWriter**(`signer?`: *string* \| *Uint8Array* \| [*Signer*](../types/signer.md)): [*SOCWriter*](../interfaces/socwriter.md)

Returns an object for reading and writing single owner chunks

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`signer?` | *string* \| *Uint8Array* \| [*Signer*](../types/signer.md) | The signer's private key or a Signer instance that can sign data    |

**Returns:** [*SOCWriter*](../interfaces/socwriter.md)

Defined in: [bee-js/src/bee.ts:642](https://github.com/ethersphere/bee-js/blob/430becc/src/bee.ts#L642)

___

### pin

▸ **pin**(`reference`: *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\>): *Promise*<void\>

Pin data with given reference

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reference` | *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\> | Bee data reference    |

**Returns:** *Promise*<void\>

Defined in: [bee-js/src/bee.ts:280](https://github.com/ethersphere/bee-js/blob/430becc/src/bee.ts#L280)

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

Defined in: [bee-js/src/bee.ts:442](https://github.com/ethersphere/bee-js/blob/430becc/src/bee.ts#L442)

___

### pssSend

▸ **pssSend**(`postageBatchId`: *string* \| [*BatchId*](../types/batchid.md), `topic`: *string*, `target`: [*AddressPrefix*](../types/addressprefix.md), `data`: *string* \| *Uint8Array*, `recipient?`: *string* \| [*PublicKey*](../types/publickey.md)): *Promise*<void\>

Send to recipient or target with Postal Service for Swarm

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`postageBatchId` | *string* \| [*BatchId*](../types/batchid.md) | Postage BatchId that will be assigned to sent message   |
`topic` | *string* | Topic name   |
`target` | [*AddressPrefix*](../types/addressprefix.md) | Target message address prefix   |
`data` | *string* \| *Uint8Array* | Message to be sent   |
`recipient?` | *string* \| [*PublicKey*](../types/publickey.md) | Recipient public key    |

**Returns:** *Promise*<void\>

Defined in: [bee-js/src/bee.ts:347](https://github.com/ethersphere/bee-js/blob/430becc/src/bee.ts#L347)

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

Defined in: [bee-js/src/bee.ts:379](https://github.com/ethersphere/bee-js/blob/430becc/src/bee.ts#L379)

___

### retrieveTag

▸ **retrieveTag**(`tagUid`: *number* \| [*Tag*](../interfaces/tag.md)): *Promise*<[*Tag*](../interfaces/tag.md)\>

Retrieve tag information from Bee node

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`tagUid` | *number* \| [*Tag*](../interfaces/tag.md) | UID or tag object to be retrieved    |

**Returns:** *Promise*<[*Tag*](../interfaces/tag.md)\>

Defined in: [bee-js/src/bee.ts:263](https://github.com/ethersphere/bee-js/blob/430becc/src/bee.ts#L263)

___

### reuploadPinnedData

▸ **reuploadPinnedData**(`reference`: *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\>, `axiosOptions?`: AxiosRequestConfig): *Promise*<void\>

Instructs the Bee node to reupload a locally pinned data into the network.

**`throws`** BeeArgumentError if the reference is not locally pinned

#### Parameters:

Name | Type |
:------ | :------ |
`reference` | *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\> |
`axiosOptions?` | AxiosRequestConfig |

**Returns:** *Promise*<void\>

Defined in: [bee-js/src/bee.ts:322](https://github.com/ethersphere/bee-js/blob/430becc/src/bee.ts#L322)

___

### setJsonFeed

▸ **setJsonFeed**<T\>(`postageBatchId`: *string* \| [*BatchId*](../types/batchid.md), `topic`: *string*, `data`: T, `options?`: [*JsonFeedOptions*](../interfaces/jsonfeedoptions.md)): *Promise*<[*Reference*](../types/reference.md)\>

High-level function that allows you to easily set JSON data to feed.
JSON-like data types are supported.

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | [*AnyJson*](../types/anyjson.md) |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`postageBatchId` | *string* \| [*BatchId*](../types/batchid.md) | Postage BatchId to be used to upload the data with   |
`topic` | *string* | Human readable string, that is internally hashed so there are no constrains there.   |
`data` | T | JSON compatible data   |
`options?` | [*JsonFeedOptions*](../interfaces/jsonfeedoptions.md) |  |

**Returns:** *Promise*<[*Reference*](../types/reference.md)\>

Defined in: [bee-js/src/bee.ts:551](https://github.com/ethersphere/bee-js/blob/430becc/src/bee.ts#L551)

___

### unpin

▸ **unpin**(`reference`: *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\>): *Promise*<void\>

Unpin data with given reference

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reference` | *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\> | Bee data reference    |

**Returns:** *Promise*<void\>

Defined in: [bee-js/src/bee.ts:291](https://github.com/ethersphere/bee-js/blob/430becc/src/bee.ts#L291)

___

### uploadData

▸ **uploadData**(`postageBatchId`: *string* \| [*BatchId*](../types/batchid.md), `data`: *string* \| *Uint8Array*, `options?`: [*UploadOptions*](../interfaces/uploadoptions.md)): *Promise*<[*Reference*](../types/reference.md)\>

Upload data to a Bee node

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`postageBatchId` | *string* \| [*BatchId*](../types/batchid.md) | Postage BatchId to be used to upload the data with   |
`data` | *string* \| *Uint8Array* | Data to be uploaded   |
`options?` | [*UploadOptions*](../interfaces/uploadoptions.md) | Additional options like tag, encryption, pinning, content-type    |

**Returns:** *Promise*<[*Reference*](../types/reference.md)\>

reference is a content hash of the data

Defined in: [bee-js/src/bee.ts:105](https://github.com/ethersphere/bee-js/blob/430becc/src/bee.ts#L105)

___

### uploadFile

▸ **uploadFile**(`postageBatchId`: *string* \| [*BatchId*](../types/batchid.md), `data`: *string* \| *Uint8Array* \| *Readable* \| File, `name?`: *string*, `options?`: [*FileUploadOptions*](../interfaces/fileuploadoptions.md)): *Promise*<[*Reference*](../types/reference.md)\>

Upload single file to a Bee node

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`postageBatchId` | *string* \| [*BatchId*](../types/batchid.md) | Postage BatchId to be used to upload the data with   |
`data` | *string* \| *Uint8Array* \| *Readable* \| File | Data or file to be uploaded   |
`name?` | *string* | Name of the uploaded file (optional)   |
`options?` | [*FileUploadOptions*](../interfaces/fileuploadoptions.md) | Additional options like tag, encryption, pinning, content-type    |

**Returns:** *Promise*<[*Reference*](../types/reference.md)\>

reference is a content hash of the file

Defined in: [bee-js/src/bee.ts:151](https://github.com/ethersphere/bee-js/blob/430becc/src/bee.ts#L151)

___

### uploadFiles

▸ **uploadFiles**(`postageBatchId`: *string* \| [*BatchId*](../types/batchid.md), `fileList`: FileList \| File[], `options?`: [*CollectionUploadOptions*](../interfaces/collectionuploadoptions.md)): *Promise*<[*Reference*](../types/reference.md)\>

Upload collection of files to a Bee node

Uses the FileList API from the browser.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`postageBatchId` | *string* \| [*BatchId*](../types/batchid.md) | Postage BatchId to be used to upload the data with   |
`fileList` | FileList \| File[] | list of files to be uploaded   |
`options?` | [*CollectionUploadOptions*](../interfaces/collectionuploadoptions.md) | Additional options like tag, encryption, pinning    |

**Returns:** *Promise*<[*Reference*](../types/reference.md)\>

reference of the collection of files

Defined in: [bee-js/src/bee.ts:213](https://github.com/ethersphere/bee-js/blob/430becc/src/bee.ts#L213)

___

### uploadFilesFromDirectory

▸ **uploadFilesFromDirectory**(`postageBatchId`: *string* \| [*BatchId*](../types/batchid.md), `dir`: *string*, `options?`: [*CollectionUploadOptions*](../interfaces/collectionuploadoptions.md)): *Promise*<[*Reference*](../types/reference.md)\>

Upload collection of files to a Bee node

Uses the `fs` module of Node.js

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`postageBatchId` | *string* \| [*BatchId*](../types/batchid.md) | Postage BatchId to be used to upload the data with   |
`dir` | *string* | the path of the files to be uploaded   |
`options?` | [*CollectionUploadOptions*](../interfaces/collectionuploadoptions.md) | Additional options like tag, encryption, pinning    |

**Returns:** *Promise*<[*Reference*](../types/reference.md)\>

reference of the collection of files

Defined in: [bee-js/src/bee.ts:238](https://github.com/ethersphere/bee-js/blob/430becc/src/bee.ts#L238)
