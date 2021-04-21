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

Defined in: [bee-js/src/bee.ts:54](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L54)

## Properties

### signer

• `Optional` `Readonly` **signer**: *undefined* \| [*Signer*](../types/signer.md)

Defined in: [bee-js/src/bee.ts:54](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L54)

___

### url

• `Readonly` **url**: *string*

Defined in: [bee-js/src/bee.ts:53](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L53)

## Methods

### checkConnection

▸ **checkConnection**(): *Promise*<void\>

Ping the base bee URL. If connection was not successful throw error

**Returns:** *Promise*<void\>

Defined in: [bee-js/src/bee.ts:636](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L636)

___

### createFeedManifest

▸ **createFeedManifest**(`type`: *sequence* \| *epoch*, `topic`: *string* \| *Uint8Array* \| [*Topic*](../types/topic.md), `owner`: *string* \| *Uint8Array* \| [*EthAddress*](../types/utils.eth.ethaddress.md)): *Promise*<[*Reference*](../types/reference.md)\>

Create feed manifest chunk and return the reference to it

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`type` | *sequence* \| *epoch* | The type of the feed, can be 'epoch' or 'sequence'   |
`topic` | *string* \| *Uint8Array* \| [*Topic*](../types/topic.md) | Topic in hex or bytes   |
`owner` | *string* \| *Uint8Array* \| [*EthAddress*](../types/utils.eth.ethaddress.md) | Owner's ethereum address in hex or bytes    |

**Returns:** *Promise*<[*Reference*](../types/reference.md)\>

Defined in: [bee-js/src/bee.ts:476](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L476)

___

### createTag

▸ **createTag**(): *Promise*<[*Tag*](../interfaces/tag.md)\>

Create new tag

**Returns:** *Promise*<[*Tag*](../interfaces/tag.md)\>

Defined in: [bee-js/src/bee.ts:226](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L226)

___

### downloadData

▸ **downloadData**(`reference`: *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\>): *Promise*<[*Data*](../interfaces/data.md)\>

Download data as a byte array

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reference` | *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\> | Bee data reference    |

**Returns:** *Promise*<[*Data*](../interfaces/data.md)\>

Defined in: [bee-js/src/bee.ts:91](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L91)

___

### downloadFile

▸ **downloadFile**(`reference`: *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\>): *Promise*<[*FileData*](../interfaces/filedata.md)<[*Data*](../interfaces/data.md)\>\>

Download single file as a byte array

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reference` | *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\> | Bee file reference    |

**Returns:** *Promise*<[*FileData*](../interfaces/filedata.md)<[*Data*](../interfaces/data.md)\>\>

Defined in: [bee-js/src/bee.ts:140](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L140)

___

### downloadFileFromCollection

▸ **downloadFileFromCollection**(`reference`: *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\>, `path?`: *string*): *Promise*<[*FileData*](../interfaces/filedata.md)<[*Data*](../interfaces/data.md)\>\>

Download single file as a byte array from collection given using the path

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`reference` | *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\> | - | Bee collection reference   |
`path` | *string* | '' | Path of the requested file in the collection    |

**Returns:** *Promise*<[*FileData*](../interfaces/filedata.md)<[*Data*](../interfaces/data.md)\>\>

file in byte array with metadata

Defined in: [bee-js/src/bee.ts:198](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L198)

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

Defined in: [bee-js/src/bee.ts:103](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L103)

___

### downloadReadableFile

▸ **downloadReadableFile**(`reference`: *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\>): *Promise*<[*FileData*](../interfaces/filedata.md)<Readable\>\>

Download single file as a readable stream

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reference` | *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\> | Bee file reference    |

**Returns:** *Promise*<[*FileData*](../interfaces/filedata.md)<Readable\>\>

Defined in: [bee-js/src/bee.ts:151](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L151)

___

### downloadReadableFileFromCollection

▸ **downloadReadableFileFromCollection**(`reference`: *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\>, `path?`: *string*, `axiosOptions?`: AxiosRequestConfig): *Promise*<[*FileData*](../interfaces/filedata.md)<Readable\>\>

Download single file as a readable stream from collection given using the path

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`reference` | *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\> | - | Bee collection reference   |
`path` | *string* | '' | Path of the requested file in the collection   |
`axiosOptions?` | AxiosRequestConfig | - | optional - alter default options of axios HTTP client    |

**Returns:** *Promise*<[*FileData*](../interfaces/filedata.md)<Readable\>\>

file in readable stream with metadata

Defined in: [bee-js/src/bee.ts:213](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L213)

___

### getChunkPinningStatus

▸ **getChunkPinningStatus**(`reference`: *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\>): *Promise*<PinningStatus\>

Get pinning status of chunk with given reference

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reference` | *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\> | Bee data reference    |

**Returns:** *Promise*<PinningStatus\>

Defined in: [bee-js/src/bee.ts:341](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L341)

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

Defined in: [bee-js/src/bee.ts:564](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L564)

___

### getPinnedChunks

▸ **getPinnedChunks**(`options?`: PinnedChunksOptions): *Promise*<PinnedChunks\>

Get list of pinned chunks

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`options?` | PinnedChunksOptions | Optional offset and limit of listing    |

**Returns:** *Promise*<PinnedChunks\>

Defined in: [bee-js/src/bee.ts:332](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L332)

___

### isConnected

▸ **isConnected**(): *Promise*<boolean\>

Ping the base bee URL.

**Returns:** *Promise*<boolean\>

true if succesfull, false on error

Defined in: [bee-js/src/bee.ts:645](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L645)

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

Defined in: [bee-js/src/bee.ts:496](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L496)

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

Defined in: [bee-js/src/bee.ts:601](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L601)

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

Defined in: [bee-js/src/bee.ts:516](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L516)

___

### makeSOCReader

▸ **makeSOCReader**(`ownerAddress`: *string* \| *Uint8Array* \| [*EthAddress*](../types/utils.eth.ethaddress.md)): [*SOCReader*](../interfaces/socreader.md)

Returns an object for reading single owner chunks

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`ownerAddress` | *string* \| *Uint8Array* \| [*EthAddress*](../types/utils.eth.ethaddress.md) | The ethereum address of the owner    |

**Returns:** [*SOCReader*](../interfaces/socreader.md)

Defined in: [bee-js/src/bee.ts:610](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L610)

___

### makeSOCWriter

▸ **makeSOCWriter**(`signer?`: *string* \| *Uint8Array* \| [*Signer*](../types/signer.md)): [*SOCWriter*](../interfaces/socwriter.md)

Returns an object for reading and writing single owner chunks

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`signer?` | *string* \| *Uint8Array* \| [*Signer*](../types/signer.md) | The signer's private key or a Signer instance that can sign data    |

**Returns:** [*SOCWriter*](../interfaces/socwriter.md)

Defined in: [bee-js/src/bee.ts:623](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L623)

___

### pinChunk

▸ **pinChunk**(`reference`: *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\>): *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Pin data with given reference

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reference` | *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\> | Bee data reference    |

**Returns:** *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Defined in: [bee-js/src/bee.ts:310](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L310)

___

### pinCollection

▸ **pinCollection**(`reference`: *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\>): *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Pin collection with given reference

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reference` | *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\> | Bee collection reference    |

**Returns:** *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Defined in: [bee-js/src/bee.ts:266](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L266)

___

### pinData

▸ **pinData**(`reference`: *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\>): *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Pin data with given reference

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reference` | *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\> | Bee data reference    |

**Returns:** *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Defined in: [bee-js/src/bee.ts:288](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L288)

___

### pinFile

▸ **pinFile**(`reference`: *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\>): *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Pin file with given reference

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reference` | *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\> | Bee file reference    |

**Returns:** *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Defined in: [bee-js/src/bee.ts:244](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L244)

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

Defined in: [bee-js/src/bee.ts:442](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L442)

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

Defined in: [bee-js/src/bee.ts:368](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L368)

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

Defined in: [bee-js/src/bee.ts:385](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L385)

___

### retrieveTag

▸ **retrieveTag**(`tagUid`: *number* \| [*Tag*](../interfaces/tag.md)): *Promise*<[*Tag*](../interfaces/tag.md)\>

Retrieve tag information from Bee node

#### Parameters:

Name | Type |
:------ | :------ |
`tagUid` | *number* \| [*Tag*](../interfaces/tag.md) |

**Returns:** *Promise*<[*Tag*](../interfaces/tag.md)\>

Defined in: [bee-js/src/bee.ts:235](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L235)

___

### setJsonFeed

▸ **setJsonFeed**<T\>(`topic`: *string*, `data`: T, `options?`: [*JsonFeedOptions*](../interfaces/jsonfeedoptions.md)): *Promise*<[*ReferenceResponse*](../interfaces/referenceresponse.md)\>

High-level function that allows you to easily set JSON data to feed.
JSON-like data types are supported.

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | [*AnyJson*](../types/anyjson.md) |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`topic` | *string* | Human readable string, that is internally hashed so there are no constrains there.   |
`data` | T | JSON compatible data   |
`options?` | [*JsonFeedOptions*](../interfaces/jsonfeedoptions.md) |  |

**Returns:** *Promise*<[*ReferenceResponse*](../interfaces/referenceresponse.md)\>

Defined in: [bee-js/src/bee.ts:539](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L539)

___

### unpinChunk

▸ **unpinChunk**(`reference`: *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\>): *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Unpin data with given reference

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reference` | *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\> | Bee data reference    |

**Returns:** *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Defined in: [bee-js/src/bee.ts:321](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L321)

___

### unpinCollection

▸ **unpinCollection**(`reference`: *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\>): *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Unpin collection with given reference

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reference` | *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\> | Bee collection reference    |

**Returns:** *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Defined in: [bee-js/src/bee.ts:277](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L277)

___

### unpinData

▸ **unpinData**(`reference`: *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\>): *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Unpin data with given reference

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reference` | *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\> | Bee data reference    |

**Returns:** *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Defined in: [bee-js/src/bee.ts:299](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L299)

___

### unpinFile

▸ **unpinFile**(`reference`: *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\>): *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Unpin file with given reference

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reference` | *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\> | Bee file reference    |

**Returns:** *Promise*<[*BeeResponse*](../interfaces/beeresponse.md)\>

Defined in: [bee-js/src/bee.ts:255](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L255)

___

### updateChunkPinCounter

▸ **updateChunkPinCounter**(`reference`: *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\>, `pinCounter`: *number*): *Promise*<PinningStatus\>

Update pin counter of chunk with given reference

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reference` | *string* \| [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\> | Bee data reference   |
`pinCounter` | *number* | New value of the pin counter    |

**Returns:** *Promise*<PinningStatus\>

Defined in: [bee-js/src/bee.ts:353](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L353)

___

### uploadData

▸ **uploadData**(`data`: *string* \| *Uint8Array*, `options?`: [*UploadOptions*](../interfaces/uploadoptions.md)): *Promise*<[*Reference*](../types/reference.md)\>

Upload data to a Bee node

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`data` | *string* \| *Uint8Array* | Data to be uploaded   |
`options?` | [*UploadOptions*](../interfaces/uploadoptions.md) | Additional options like tag, encryption, pinning, content-type    |

**Returns:** *Promise*<[*Reference*](../types/reference.md)\>

reference is a content hash of the data

Defined in: [bee-js/src/bee.ts:82](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L82)

___

### uploadFile

▸ **uploadFile**(`data`: *string* \| *Uint8Array* \| *Readable* \| File, `name?`: *string*, `options?`: [*FileUploadOptions*](../interfaces/fileuploadoptions.md)): *Promise*<[*Reference*](../types/reference.md)\>

Upload single file to a Bee node

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`data` | *string* \| *Uint8Array* \| *Readable* \| File | Data or file to be uploaded   |
`name?` | *string* | Name of the uploaded file (optional)   |
`options?` | [*FileUploadOptions*](../interfaces/fileuploadoptions.md) | Aditional options like tag, encryption, pinning, content-type    |

**Returns:** *Promise*<[*Reference*](../types/reference.md)\>

reference is a content hash of the file

Defined in: [bee-js/src/bee.ts:118](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L118)

___

### uploadFiles

▸ **uploadFiles**(`fileList`: FileList \| File[], `options?`: [*CollectionUploadOptions*](../interfaces/collectionuploadoptions.md)): *Promise*<[*Reference*](../types/reference.md)\>

Upload collection of files to a Bee node

Uses the FileList API from the browser.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`fileList` | FileList \| File[] | list of files to be uploaded   |
`options?` | [*CollectionUploadOptions*](../interfaces/collectionuploadoptions.md) | Additional options like tag, encryption, pinning    |

**Returns:** *Promise*<[*Reference*](../types/reference.md)\>

reference of the collection of files

Defined in: [bee-js/src/bee.ts:167](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L167)

___

### uploadFilesFromDirectory

▸ **uploadFilesFromDirectory**(`dir`: *string*, `recursive?`: *boolean*, `options?`: [*CollectionUploadOptions*](../interfaces/collectionuploadoptions.md)): *Promise*<[*Reference*](../types/reference.md)\>

Upload collection of files to a Bee node

Uses the `fs` module of Node.js

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`dir` | *string* | - | the path of the files to be uploaded   |
`recursive` | *boolean* | true | specifies if the directory should be recursively uploaded   |
`options?` | [*CollectionUploadOptions*](../interfaces/collectionuploadoptions.md) | - | Additional options like tag, encryption, pinning    |

**Returns:** *Promise*<[*Reference*](../types/reference.md)\>

reference of the collection of files

Defined in: [bee-js/src/bee.ts:184](https://github.com/ethersphere/bee-js/blob/9a547fe/src/bee.ts#L184)
