---
id: "feedwriter"
title: "Interface: FeedWriter"
sidebar_label: "FeedWriter"
custom_edit_url: null
hide_title: true
---

# Interface: FeedWriter

FeedWriter is an interface for updating feeds

## Hierarchy

* [*FeedReader*](feedreader.md)

  ↳ **FeedWriter**

## Properties

### owner

• `Readonly` **owner**: [*HexEthAddress*](../types/utils.eth.hexethaddress.md)

Inherited from: [FeedReader](feedreader.md).[owner](feedreader.md#owner)

Defined in: [bee-js/src/types/index.ts:167](https://github.com/ethersphere/bee-js/blob/430becc/src/types/index.ts#L167)

___

### topic

• `Readonly` **topic**: [*Topic*](../types/topic.md)

Inherited from: [FeedReader](feedreader.md).[topic](feedreader.md#topic)

Defined in: [bee-js/src/types/index.ts:168](https://github.com/ethersphere/bee-js/blob/430becc/src/types/index.ts#L168)

___

### type

• `Readonly` **type**: *sequence* \| *epoch*

Inherited from: [FeedReader](feedreader.md).[type](feedreader.md#type)

Defined in: [bee-js/src/types/index.ts:166](https://github.com/ethersphere/bee-js/blob/430becc/src/types/index.ts#L166)

## Methods

### download

▸ **download**(`options?`: FeedUpdateOptions): *Promise*<FetchFeedUpdateResponse\>

Download the latest feed update

#### Parameters:

Name | Type |
:------ | :------ |
`options?` | FeedUpdateOptions |

**Returns:** *Promise*<FetchFeedUpdateResponse\>

Inherited from: [FeedReader](feedreader.md)

Defined in: [bee-js/src/types/index.ts:172](https://github.com/ethersphere/bee-js/blob/430becc/src/types/index.ts#L172)

___

### upload

▸ **upload**(`postageBatchId`: *string* \| [*BatchId*](../types/batchid.md), `reference`: [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\> \| PlainChunkReference \| EncryptedChunkReference, `options?`: FeedUploadOptions): *Promise*<[*Reference*](../types/reference.md)\>

Upload a new feed update

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`postageBatchId` | *string* \| [*BatchId*](../types/batchid.md) | Postage BatchId to be used to upload the data with   |
`reference` | [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\> \| PlainChunkReference \| EncryptedChunkReference | The reference to be stored in the new update   |
`options?` | FeedUploadOptions | Additional options like `at`    |

**Returns:** *Promise*<[*Reference*](../types/reference.md)\>

Reference that points at Single Owner Chunk that contains the new update and pointer to the updated chunk reference.

Defined in: [bee-js/src/types/index.ts:204](https://github.com/ethersphere/bee-js/blob/430becc/src/types/index.ts#L204)
