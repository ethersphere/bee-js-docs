---
id: "feedreader"
title: "Interface: FeedReader"
sidebar_label: "FeedReader"
custom_edit_url: null
hide_title: true
---

# Interface: FeedReader

FeedReader is an interface for downloading feed updates

## Hierarchy

* **FeedReader**

  ↳ [*FeedWriter*](feedwriter.md)

## Properties

### owner

• `Readonly` **owner**: [*FlavoredType*](../types/flavoredtype.md)<*string* & { `length`: *40*  }, *HexString*\>

Defined in: [bee-js/src/types/index.ts:143](https://github.com/ethersphere/bee-js/blob/0ac3a7d/src/types/index.ts#L143)

___

### topic

• `Readonly` **topic**: [*FlavoredType*](../types/flavoredtype.md)<*string* & { `length`: *64*  }, *HexString*\>

Defined in: [bee-js/src/types/index.ts:144](https://github.com/ethersphere/bee-js/blob/0ac3a7d/src/types/index.ts#L144)

___

### type

• `Readonly` **type**: *sequence* \| *epoch*

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

Defined in: [bee-js/src/types/index.ts:148](https://github.com/ethersphere/bee-js/blob/0ac3a7d/src/types/index.ts#L148)
