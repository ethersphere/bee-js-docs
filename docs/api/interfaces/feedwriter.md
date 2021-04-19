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

Defined in: [bee-js/src/types/index.ts:143](https://github.com/ethersphere/bee-js/blob/8087a81/src/types/index.ts#L143)

___

### topic

• `Readonly` **topic**: [*Topic*](../types/topic.md)

Inherited from: [FeedReader](feedreader.md).[topic](feedreader.md#topic)

Defined in: [bee-js/src/types/index.ts:144](https://github.com/ethersphere/bee-js/blob/8087a81/src/types/index.ts#L144)

___

### type

• `Readonly` **type**: *sequence* \| *epoch*

Inherited from: [FeedReader](feedreader.md).[type](feedreader.md#type)

Defined in: [bee-js/src/types/index.ts:142](https://github.com/ethersphere/bee-js/blob/8087a81/src/types/index.ts#L142)

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

Defined in: [bee-js/src/types/index.ts:148](https://github.com/ethersphere/bee-js/blob/8087a81/src/types/index.ts#L148)

___

### upload

▸ **upload**(`reference`: [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\> \| PlainChunkReference \| EncryptedChunkReference, `options?`: FeedUploadOptions): *Promise*<[*ReferenceResponse*](referenceresponse.md)\>

Upload a new feed update

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reference` | [*HexString*](../types/utils.hex.hexstring.md)<*64*\> \| [*HexString*](../types/utils.hex.hexstring.md)<*128*\> \| PlainChunkReference \| EncryptedChunkReference | The reference to be stored in the new update   |
`options?` | FeedUploadOptions | Additional options like `at`    |

**Returns:** *Promise*<[*ReferenceResponse*](referenceresponse.md)\>

Reference that points at Single Owner Chunk that contains the new update and pointer to the updated chunk reference.

Defined in: [bee-js/src/types/index.ts:179](https://github.com/ethersphere/bee-js/blob/8087a81/src/types/index.ts#L179)
