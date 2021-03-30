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

• `Readonly` **owner**: [*FlavoredType*](../types/flavoredtype.md)<*string* & { `length`: *40*  }, *HexString*\>

Inherited from: [FeedReader](feedreader.md).[owner](feedreader.md#owner)

Defined in: [bee-js/src/types/index.ts:143](https://github.com/ethersphere/bee-js/blob/0ac3a7d/src/types/index.ts#L143)

___

### topic

• `Readonly` **topic**: [*FlavoredType*](../types/flavoredtype.md)<*string* & { `length`: *64*  }, *HexString*\>

Inherited from: [FeedReader](feedreader.md).[topic](feedreader.md#topic)

Defined in: [bee-js/src/types/index.ts:144](https://github.com/ethersphere/bee-js/blob/0ac3a7d/src/types/index.ts#L144)

___

### type

• `Readonly` **type**: *sequence* \| *epoch*

Inherited from: [FeedReader](feedreader.md).[type](feedreader.md#type)

Defined in: [bee-js/src/types/index.ts:142](https://github.com/ethersphere/bee-js/blob/0ac3a7d/src/types/index.ts#L142)

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

Defined in: [bee-js/src/types/index.ts:148](https://github.com/ethersphere/bee-js/blob/0ac3a7d/src/types/index.ts#L148)

___

### upload

▸ **upload**(`reference`: [*FlavoredType*](../types/flavoredtype.md)<*string* & { `length`: *64*  }, *HexString*\> \| [*FlavoredType*](../types/flavoredtype.md)<*string* & { `length`: *128*  }, *HexString*\> \| PlainChunkReference \| EncryptedChunkReference, `options?`: FeedUploadOptions): *Promise*<[*ReferenceResponse*](referenceresponse.md)\>

Upload a new feed update

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reference` | [*FlavoredType*](../types/flavoredtype.md)<*string* & { `length`: *64*  }, *HexString*\> \| [*FlavoredType*](../types/flavoredtype.md)<*string* & { `length`: *128*  }, *HexString*\> \| PlainChunkReference \| EncryptedChunkReference | The reference to be stored in the new update   |
`options?` | FeedUploadOptions | Additional options like `at`    |

**Returns:** *Promise*<[*ReferenceResponse*](referenceresponse.md)\>

The reference of the new update

Defined in: [bee-js/src/types/index.ts:163](https://github.com/ethersphere/bee-js/blob/0ac3a7d/src/types/index.ts#L163)
