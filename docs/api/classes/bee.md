---
id: "bee"
title: "Class: Bee"
sidebar_label: "Bee"
sidebar_position: 0
custom_edit_url: null
---

The main component that abstracts operations available on the main Bee API.

Not all methods are always available as it depends in what mode is Bee node launched in.
For example gateway mode and light node mode has only limited set of endpoints enabled.

## Constructors

### constructor

• **new Bee**(`url`, `options?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | URL on which is the main API of Bee node exposed |
| `options?` | [`BeeOptions`](../interfaces/beeoptions.md) |  |

#### Defined in

[bee-js/src/bee.ts:83](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/bee.ts#L83)

## Properties

### signer

• `Optional` `Readonly` **signer**: [`Signer`](../types/signer.md)

Default Signer object used for signing operations, mainly Feeds.

#### Defined in

[bee-js/src/bee.ts:83](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/bee.ts#L83)

___

### url

• `Readonly` **url**: `string`

URL on which is the main API of Bee node exposed

#### Defined in

[bee-js/src/bee.ts:78](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/bee.ts#L78)

## Methods

### checkConnection

▸ **checkConnection**(): `Promise`<`void`\>

Ping the Bee node to see if there is a live Bee node on the given URL.

**`throws`** If connection was not successful throw error

#### Returns

`Promise`<`void`\>

#### Defined in

[bee-js/src/bee.ts:836](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/bee.ts#L836)

___

### createFeedManifest

▸ **createFeedManifest**(`postageBatchId`, `type`, `topic`, `owner`): `Promise`<[`Reference`](../types/reference.md)\>

Create feed manifest chunk and return the reference to it.

Feed manifest chunk allows for a feed to be able to be resolved through `/bzz` endpoint.

**`see`** [Bee docs - Feeds](https://docs.ethswarm.org/docs/dapps-on-swarm/feeds)

**`see`** [Bee API reference - `POST /feeds`](https://docs.ethswarm.org/api/#tag/Feed/paths/~1feeds~1{owner}~1{topic}/post)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `postageBatchId` | `string` \| [`BatchId`](../types/batchid.md) | Postage BatchId to be used to create the Feed Manifest |
| `type` | ``"sequence"`` \| ``"epoch"`` | The type of the feed, can be 'epoch' or 'sequence' |
| `topic` | `string` \| `Uint8Array` \| [`Topic`](../types/topic.md) | Topic in hex or bytes |
| `owner` | `string` \| `Uint8Array` \| [`EthAddress`](../types/utils.eth.ethaddress.md) | Owner's ethereum address in hex or bytes |

#### Returns

`Promise`<[`Reference`](../types/reference.md)\>

#### Defined in

[bee-js/src/bee.ts:578](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/bee.ts#L578)

___

### createPostageBatch

▸ **createPostageBatch**(`amount`, `depth`, `options?`): `Promise`<[`BatchId`](../types/batchid.md)\>

Creates new postage batch from the funds that the node has available in its Ethereum account.

For better understanding what each parameter means and what are the optimal values please see
[Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/access-the-swarm/keep-your-data-alive).

**WARNING: THIS CREATES TRANSACTIONS THAT SPENDS MONEY**
**Warning! Not allowed when node is in Gateway mode!**

**`throws`** BeeArgumentError when negative amount or depth is specified

**`throws`** TypeError if non-integer value is passed to amount or depth

**`see`** [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/access-the-swarm/keep-your-data-alive)

**`see`** [Bee API reference - `POST /stamps`](https://docs.ethswarm.org/api/#tag/Postage-Stamps/paths/~1stamps~1{amount}~1{depth}/post)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | [`NumberString`](../types/numberstring.md) | Amount that represents the value per chunk, has to be greater or equal zero. |
| `depth` | `number` | Logarithm of the number of chunks that can be stamped with the batch. |
| `options?` | [`PostageBatchOptions`](../interfaces/postagebatchoptions.md) | Options for creation of postage batch |

#### Returns

`Promise`<[`BatchId`](../types/batchid.md)\>

#### Defined in

[bee-js/src/bee.ts:780](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/bee.ts#L780)

___

### createTag

▸ **createTag**(): `Promise`<[`Tag`](../interfaces/tag.md)\>

Create a new Tag which is meant for tracking progres of syncing data across network.

**Warning! Not allowed when node is in Gateway mode!**

**`see`** [Bee docs - Syncing / Tags](https://docs.ethswarm.org/docs/access-the-swarm/syncing)

#### Returns

`Promise`<[`Tag`](../interfaces/tag.md)\>

#### Defined in

[bee-js/src/bee.ts:287](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/bee.ts#L287)

___

### downloadData

▸ **downloadData**(`reference`): `Promise`<[`Data`](../interfaces/data.md)\>

Download data as a byte array

**`see`** [Bee docs - Upload and download](https://docs.ethswarm.org/docs/access-the-swarm/upload-and-download)

**`see`** [Bee API reference - `GET /bytes`](https://docs.ethswarm.org/api/#tag/Bytes/paths/~1bytes~1{reference}/get)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reference` | `string` \| [`Reference`](../types/reference.md) | Bee data reference |

#### Returns

`Promise`<[`Data`](../interfaces/data.md)\>

#### Defined in

[bee-js/src/bee.ts:133](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/bee.ts#L133)

___

### downloadFile

▸ **downloadFile**(`reference`, `path?`): `Promise`<[`FileData`](../interfaces/filedata.md)<[`Data`](../interfaces/data.md)\>\>

Download single file.

**`see`** Data

**`see`** [Bee docs - Upload and download](https://docs.ethswarm.org/docs/access-the-swarm/upload-and-download)

**`see`** [Bee API reference - `GET /bzz`](https://docs.ethswarm.org/api/#tag/Collection/paths/~1bzz~1{reference}~1{path}/get)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `reference` | `string` \| [`Reference`](../types/reference.md) | `undefined` | Bee file reference |
| `path` | `string` | `''` | If reference points to manifest, then this parameter defines path to the file |

#### Returns

`Promise`<[`FileData`](../interfaces/filedata.md)<[`Data`](../interfaces/data.md)\>\>

#### Defined in

[bee-js/src/bee.ts:206](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/bee.ts#L206)

___

### downloadReadableData

▸ **downloadReadableData**(`reference`, `axiosOptions?`): `Promise`<`Readable`\>

Download data as a Readable stream

**`see`** [Bee docs - Upload and download](https://docs.ethswarm.org/docs/access-the-swarm/upload-and-download)

**`see`** [Bee API reference - `GET /bytes`](https://docs.ethswarm.org/api/#tag/Bytes/paths/~1bytes~1{reference}/get)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reference` | `string` \| [`Reference`](../types/reference.md) | Bee data reference |
| `axiosOptions?` | `AxiosRequestConfig` | optional - alter default options of axios HTTP client |

#### Returns

`Promise`<`Readable`\>

#### Defined in

[bee-js/src/bee.ts:147](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/bee.ts#L147)

___

### downloadReadableFile

▸ **downloadReadableFile**(`reference`, `path?`): `Promise`<[`FileData`](../interfaces/filedata.md)<`Readable`\>\>

Download single file as a readable stream

**`see`** [Bee docs - Upload and download](https://docs.ethswarm.org/docs/access-the-swarm/upload-and-download)

**`see`** [Bee API reference - `GET /bzz`](https://docs.ethswarm.org/api/#tag/Collection/paths/~1bzz~1{reference}~1{path}/get)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `reference` | `string` \| [`Reference`](../types/reference.md) | `undefined` | Hash reference to file |
| `path` | `string` | `''` | If reference points to manifest / collections, then this parameter defines path to the file |

#### Returns

`Promise`<[`FileData`](../interfaces/filedata.md)<`Readable`\>\>

#### Defined in

[bee-js/src/bee.ts:221](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/bee.ts#L221)

___

### getAllPins

▸ **getAllPins**(): `Promise`<[`Reference`](../types/reference.md)[]\>

Get list of all locally pinned references

**Warning! Not allowed when node is in Gateway mode!**

**`see`** [Bee docs - Pinning](https://docs.ethswarm.org/docs/access-the-swarm/pinning)

#### Returns

`Promise`<[`Reference`](../types/reference.md)[]\>

#### Defined in

[bee-js/src/bee.ts:352](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/bee.ts#L352)

___

### getAllPostageBatch

▸ **getAllPostageBatch**(): `Promise`<[`PostageBatch`](../interfaces/postagebatch.md)[]\>

Return all postage batches that has the node available.

**Warning! Not allowed when node is in Gateway mode!**

**`see`** [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/access-the-swarm/keep-your-data-alive)

**`see`** [Bee API reference - `GET /stamps`](https://docs.ethswarm.org/api/#tag/Postage-Stamps/paths/~1stamps/get)

#### Returns

`Promise`<[`PostageBatch`](../interfaces/postagebatch.md)[]\>

#### Defined in

[bee-js/src/bee.ts:827](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/bee.ts#L827)

___

### getJsonFeed

▸ **getJsonFeed**<`T`\>(`topic`, `options?`): `Promise`<`T`\>

High-level function that allows you to easily get data from feed.
Returned data are parsed using JSON.parse().

This method also supports specification of `signer` object passed to constructor. The order of evaluation is:
 - `options.address`
 - `options.signer`
 - `this.signer`

At least one of these has to be specified!

**`see`** [Bee docs - Feeds](https://docs.ethswarm.org/docs/dapps-on-swarm/feeds)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AnyJson`](../types/anyjson.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topic` | `string` | Human readable string, that is internally hashed so there are no constrains there. |
| `options?` | [`JsonFeedOptions`](../interfaces/jsonfeedoptions.md) |  |

#### Returns

`Promise`<`T`\>

#### Defined in

[bee-js/src/bee.ts:689](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/bee.ts#L689)

___

### getPin

▸ **getPin**(`reference`): `Promise`<[`Pin`](../interfaces/pin.md)\>

Get pinning status of chunk with given reference

**Warning! Not allowed when node is in Gateway mode!**

**`throws`** TypeError if reference is in not correct format

**`see`** [Bee docs - Pinning](https://docs.ethswarm.org/docs/access-the-swarm/pinning)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reference` | `string` \| [`Reference`](../types/reference.md) | Bee data reference |

#### Returns

`Promise`<[`Pin`](../interfaces/pin.md)\>

#### Defined in

[bee-js/src/bee.ts:366](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/bee.ts#L366)

___

### getPostageBatch

▸ **getPostageBatch**(`postageBatchId`): `Promise`<[`PostageBatch`](../interfaces/postagebatch.md)\>

Return details for specific postage batch.

**Warning! Not allowed when node is in Gateway mode!**

**`see`** [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/access-the-swarm/keep-your-data-alive)

**`see`** [Bee API reference - `GET /stamps/${id}`](https://docs.ethswarm.org/api/#tag/Postage-Stamps/paths/~1stamps~1{id}/get)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `postageBatchId` | `string` \| [`BatchId`](../types/batchid.md) | Batch ID |

#### Returns

`Promise`<[`PostageBatch`](../interfaces/postagebatch.md)\>

#### Defined in

[bee-js/src/bee.ts:813](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/bee.ts#L813)

___

### isConnected

▸ **isConnected**(): `Promise`<`boolean`\>

Ping the Bee node to see if there is a live Bee node on the given URL.

#### Returns

`Promise`<`boolean`\>

true if successful, false on error

#### Defined in

[bee-js/src/bee.ts:845](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/bee.ts#L845)

___

### makeFeedReader

▸ **makeFeedReader**(`type`, `topic`, `owner`): [`FeedReader`](../interfaces/feedreader.md)

Make a new feed reader for downloading feed updates.

**`see`** [Bee docs - Feeds](https://docs.ethswarm.org/docs/dapps-on-swarm/feeds)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | ``"sequence"`` \| ``"epoch"`` | The type of the feed, can be 'epoch' or 'sequence' |
| `topic` | `string` \| `Uint8Array` \| [`Topic`](../types/topic.md) | Topic in hex or bytes |
| `owner` | `string` \| `Uint8Array` \| [`EthAddress`](../types/utils.eth.ethaddress.md) | Owner's ethereum address in hex or bytes |

#### Returns

[`FeedReader`](../interfaces/feedreader.md)

#### Defined in

[bee-js/src/bee.ts:602](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/bee.ts#L602)

___

### makeFeedTopic

▸ **makeFeedTopic**(`topic`): [`Topic`](../types/topic.md)

Make a new feed topic from a string

Because the topic has to be 32 bytes long this function
hashes the input string to create a topic string of arbitrary length.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topic` | `string` | The input string |

#### Returns

[`Topic`](../types/topic.md)

#### Defined in

[bee-js/src/bee.ts:726](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/bee.ts#L726)

___

### makeFeedWriter

▸ **makeFeedWriter**(`type`, `topic`, `signer?`): [`FeedWriter`](../interfaces/feedwriter.md)

Make a new feed writer for updating feeds

**`see`** [Bee docs - Feeds](https://docs.ethswarm.org/docs/dapps-on-swarm/feeds)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | ``"sequence"`` \| ``"epoch"`` | The type of the feed, can be 'epoch' or 'sequence' |
| `topic` | `string` \| `Uint8Array` \| [`Topic`](../types/topic.md) | Topic in hex or bytes |
| `signer?` | `string` \| `Uint8Array` \| [`Signer`](../types/signer.md) | The signer's private key or a Signer instance that can sign data |

#### Returns

[`FeedWriter`](../interfaces/feedwriter.md)

#### Defined in

[bee-js/src/bee.ts:624](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/bee.ts#L624)

___

### makeSOCReader

▸ **makeSOCReader**(`ownerAddress`): [`SOCReader`](../interfaces/socreader.md)

Returns an object for reading single owner chunks

**`see`** [Bee docs - Chunk Types](https://docs.ethswarm.org/docs/dapps-on-swarm/chunk-types#single-owner-chunks)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ownerAddress` | `string` \| `Uint8Array` \| [`EthAddress`](../types/utils.eth.ethaddress.md) | The ethereum address of the owner |

#### Returns

[`SOCReader`](../interfaces/socreader.md)

#### Defined in

[bee-js/src/bee.ts:737](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/bee.ts#L737)

___

### makeSOCWriter

▸ **makeSOCWriter**(`signer?`): [`SOCWriter`](../interfaces/socwriter.md)

Returns an object for reading and writing single owner chunks

**`see`** [Bee docs - Chunk Types](https://docs.ethswarm.org/docs/dapps-on-swarm/chunk-types#single-owner-chunks)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signer?` | `string` \| `Uint8Array` \| [`Signer`](../types/signer.md) | The signer's private key or a Signer instance that can sign data |

#### Returns

[`SOCWriter`](../interfaces/socwriter.md)

#### Defined in

[bee-js/src/bee.ts:752](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/bee.ts#L752)

___

### pin

▸ **pin**(`reference`): `Promise`<`void`\>

Pin local data with given reference

**Warning! Not allowed when node is in Gateway mode!**

**`throws`** TypeError if reference is in not correct format

**`see`** [Bee docs - Pinning](https://docs.ethswarm.org/docs/access-the-swarm/pinning)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reference` | `string` \| [`Reference`](../types/reference.md) | Data reference |

#### Returns

`Promise`<`void`\>

#### Defined in

[bee-js/src/bee.ts:323](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/bee.ts#L323)

___

### pssReceive

▸ **pssReceive**(`topic`, `timeoutMsec?`): `Promise`<[`Data`](../interfaces/data.md)\>

Receive message with Postal Service for Swarm

Because sending a PSS message is slow and CPU intensive,
it is not supposed to be used for general messaging but
most likely for setting up an encrypted communication
channel by sending an one-off message.

This is a helper function to wait for exactly one message to
arrive and then cancel the subscription. Additionally a
timeout can be provided for the message to arrive or else
an error will be thrown.

**Warning! Not allowed when node is in Gateway mode!**

**Warning! If connected Bee node is a light node, then he will never receive any message!**
This is because light nodes does not fully participate in the data exchange in Swarm network and hence the message won't arrive to them.

**`see`** [Bee docs - PSS](https://docs.ethswarm.org/docs/dapps-on-swarm/pss)

**`see`** [Bee API reference - `GET /pss`](https://docs.ethswarm.org/api/#tag/Postal-Service-for-Swarm/paths/~1pss~1subscribe~1{topic}/get)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `topic` | `string` | `undefined` | Topic name |
| `timeoutMsec` | `number` | `0` | Timeout in milliseconds |

#### Returns

`Promise`<[`Data`](../interfaces/data.md)\>

Message in byte array

#### Defined in

[bee-js/src/bee.ts:530](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/bee.ts#L530)

___

### pssSend

▸ **pssSend**(`postageBatchId`, `topic`, `target`, `data`, `recipient?`): `Promise`<`void`\>

Send data to recipient or target with Postal Service for Swarm.

Because sending a PSS message is slow and CPU intensive,
it is not supposed to be used for general messaging but
most likely for setting up an encrypted communication
channel by sending an one-off message.

**Warning! Not allowed when node is in Gateway mode!**

**Warning! If the recipient Bee node is a light node, then he will never receive the message!**
This is because light nodes does not fully participate in the data exchange in Swarm network and hence the message won't arrive to them.

**`throws`** TypeError if `data`, `batchId`, `target` or `recipient` are in invalid format

**`see`** [Bee docs - PSS](https://docs.ethswarm.org/docs/dapps-on-swarm/pss)

**`see`** [Bee API reference - `POST /pss`](https://docs.ethswarm.org/api/#tag/Postal-Service-for-Swarm/paths/~1pss~1send~1{topic}~1{targets}/post)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `postageBatchId` | `string` \| [`BatchId`](../types/batchid.md) | Postage BatchId that will be assigned to sent message |
| `topic` | `string` | Topic name |
| `target` | [`AddressPrefix`](../types/addressprefix.md) | Target message address prefix |
| `data` | `string` \| `Uint8Array` | Message to be sent |
| `recipient?` | `string` \| [`PublicKey`](../types/publickey.md) | Recipient public key |

#### Returns

`Promise`<`void`\>

#### Defined in

[bee-js/src/bee.ts:419](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/bee.ts#L419)

___

### pssSubscribe

▸ **pssSubscribe**(`topic`, `handler`): [`PssSubscription`](../interfaces/psssubscription.md)

Subscribe to messages for given topic with Postal Service for Swarm

**Warning! Not allowed when node is in Gateway mode!**

**Warning! If connected Bee node is a light node, then he will never receive any message!**
This is because light nodes does not fully participate in the data exchange in Swarm network and hence the message won't arrive to them.

**`see`** [Bee docs - PSS](https://docs.ethswarm.org/docs/dapps-on-swarm/pss)

**`see`** [Bee API reference - `GET /pss`](https://docs.ethswarm.org/api/#tag/Postal-Service-for-Swarm/paths/~1pss~1subscribe~1{topic}/get)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topic` | `string` | Topic name |
| `handler` | [`PssMessageHandler`](../interfaces/pssmessagehandler.md) | Message handler interface |

#### Returns

[`PssSubscription`](../interfaces/psssubscription.md)

Subscription to a given topic

#### Defined in

[bee-js/src/bee.ts:459](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/bee.ts#L459)

___

### retrieveTag

▸ **retrieveTag**(`tagUid`): `Promise`<[`Tag`](../interfaces/tag.md)\>

Retrieve tag information from Bee node

**Warning! Not allowed when node is in Gateway mode!**

**`throws`** TypeError if reference is in not correct format

**`see`** [Bee docs - Syncing / Tags](https://docs.ethswarm.org/docs/access-the-swarm/syncing)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tagUid` | `number` \| [`Tag`](../interfaces/tag.md) | UID or tag object to be retrieved |

#### Returns

`Promise`<[`Tag`](../interfaces/tag.md)\>

#### Defined in

[bee-js/src/bee.ts:301](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/bee.ts#L301)

___

### reuploadPinnedData

▸ **reuploadPinnedData**(`reference`, `axiosOptions?`): `Promise`<`void`\>

Instructs the Bee node to reupload a locally pinned data into the network.

**`throws`** BeeArgumentError if the reference is not locally pinned

**`throws`** TypeError if reference is in not correct format

#### Parameters

| Name | Type |
| :------ | :------ |
| `reference` | `string` \| [`Reference`](../types/reference.md) |
| `axiosOptions?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`void`\>

#### Defined in

[bee-js/src/bee.ts:380](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/bee.ts#L380)

___

### setJsonFeed

▸ **setJsonFeed**<`T`\>(`postageBatchId`, `topic`, `data`, `options?`): `Promise`<[`Reference`](../types/reference.md)\>

High-level function that allows you to easily set JSON data to feed.
JSON-like data types are supported.

The default Signer of Bee instance is used if `options.signer` is not specified.
If none of those two is set error is thrown.

**`throws`** BeeError if `options.signer` is not specified nor the default Signer on Bee's instance is specified.

**`see`** [Bee docs - Feeds](https://docs.ethswarm.org/docs/dapps-on-swarm/feeds)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AnyJson`](../types/anyjson.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `postageBatchId` | `string` \| [`BatchId`](../types/batchid.md) | Postage BatchId to be used to upload the data with |
| `topic` | `string` | Human readable string, that is internally hashed so there are no constrains there. |
| `data` | `T` | JSON compatible data |
| `options?` | [`JsonFeedOptions`](../interfaces/jsonfeedoptions.md) |  |

#### Returns

`Promise`<[`Reference`](../types/reference.md)\>

#### Defined in

[bee-js/src/bee.ts:655](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/bee.ts#L655)

___

### unpin

▸ **unpin**(`reference`): `Promise`<`void`\>

Unpin local data with given reference

**Warning! Not allowed when node is in Gateway mode!**

**`throws`** TypeError if reference is in not correct format

**`see`** [Bee docs - Pinning](https://docs.ethswarm.org/docs/access-the-swarm/pinning)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reference` | `string` \| [`Reference`](../types/reference.md) | Data reference |

#### Returns

`Promise`<`void`\>

#### Defined in

[bee-js/src/bee.ts:339](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/bee.ts#L339)

___

### uploadData

▸ **uploadData**(`postageBatchId`, `data`, `options?`): `Promise`<[`Reference`](../types/reference.md)\>

Upload data to a Bee node

**`see`** [Bee docs - Upload and download](https://docs.ethswarm.org/docs/access-the-swarm/upload-and-download)

**`see`** [Bee API reference - `POST /bytes`](https://docs.ethswarm.org/api/#tag/Bytes/paths/~1bytes/post)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `postageBatchId` | `string` \| [`BatchId`](../types/batchid.md) | Postage BatchId to be used to upload the data with |
| `data` | `string` \| `Uint8Array` | Data to be uploaded |
| `options?` | [`UploadOptions`](../interfaces/uploadoptions.md) | Additional options like tag, encryption, pinning, content-type |

#### Returns

`Promise`<[`Reference`](../types/reference.md)\>

reference is a content hash of the data

#### Defined in

[bee-js/src/bee.ts:113](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/bee.ts#L113)

___

### uploadFile

▸ **uploadFile**(`postageBatchId`, `data`, `name?`, `options?`): `Promise`<[`Reference`](../types/reference.md)\>

Upload single file to a Bee node.

**To make sure that you won't loose critical data it is highly recommended to also
locally pin the data with `options.pin = true`**

**`see`** [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/access-the-swarm/keep-your-data-alive)

**`see`** [Bee docs - Upload and download](https://docs.ethswarm.org/docs/access-the-swarm/upload-and-download)

**`see`** [Bee API reference - `POST /bzz`](https://docs.ethswarm.org/api/#tag/File/paths/~1bzz/post)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `postageBatchId` | `string` \| [`BatchId`](../types/batchid.md) | Postage BatchId to be used to upload the data with |
| `data` | `string` \| `Uint8Array` \| `File` \| `Readable` | Data or file to be uploaded |
| `name?` | `string` | Optional name of the uploaded file |
| `options?` | [`FileUploadOptions`](../interfaces/fileuploadoptions.md) | Additional options like tag, encryption, pinning, content-type |

#### Returns

`Promise`<[`Reference`](../types/reference.md)\>

reference is a content hash of the file

#### Defined in

[bee-js/src/bee.ts:169](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/bee.ts#L169)

___

### uploadFiles

▸ **uploadFiles**(`postageBatchId`, `fileList`, `options?`): `Promise`<[`Reference`](../types/reference.md)\>

Upload collection of files to a Bee node

Uses the FileList API from the browser.

**`see`** [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/access-the-swarm/keep-your-data-alive)

**`see`** [Bee docs - Upload directory](https://docs.ethswarm.org/docs/access-the-swarm/upload-a-directory/)

**`see`** [Bee API reference - `POST /bzz`](https://docs.ethswarm.org/api/#tag/Collection/paths/~1bzz/post)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `postageBatchId` | `string` \| [`BatchId`](../types/batchid.md) | Postage BatchId to be used to upload the data with |
| `fileList` | `FileList` \| `File`[] | list of files to be uploaded |
| `options?` | [`CollectionUploadOptions`](../interfaces/collectionuploadoptions.md) | Additional options like tag, encryption, pinning |

#### Returns

`Promise`<[`Reference`](../types/reference.md)\>

#### Defined in

[bee-js/src/bee.ts:240](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/bee.ts#L240)

___

### uploadFilesFromDirectory

▸ **uploadFilesFromDirectory**(`postageBatchId`, `dir`, `options?`): `Promise`<[`Reference`](../types/reference.md)\>

Upload collection of files.

Available only in Node.js as it uses the `fs` module.

**`see`** [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/access-the-swarm/keep-your-data-alive)

**`see`** [Bee docs - Upload directory](https://docs.ethswarm.org/docs/access-the-swarm/upload-a-directory/)

**`see`** [Bee API reference - `POST /bzz`](https://docs.ethswarm.org/api/#tag/Collection/paths/~1bzz/post)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `postageBatchId` | `string` \| [`BatchId`](../types/batchid.md) | Postage BatchId to be used to upload the data with |
| `dir` | `string` | the path of the files to be uploaded |
| `options?` | [`CollectionUploadOptions`](../interfaces/collectionuploadoptions.md) | Additional options like tag, encryption, pinning |

#### Returns

`Promise`<[`Reference`](../types/reference.md)\>

#### Defined in

[bee-js/src/bee.ts:267](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/bee.ts#L267)
