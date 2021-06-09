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

• `Readonly` **owner**: [*HexEthAddress*](../types/utils.eth.hexethaddress.md)

Defined in: [bee-js/src/types/index.ts:167](https://github.com/ethersphere/bee-js/blob/430becc/src/types/index.ts#L167)

___

### topic

• `Readonly` **topic**: [*Topic*](../types/topic.md)

Defined in: [bee-js/src/types/index.ts:168](https://github.com/ethersphere/bee-js/blob/430becc/src/types/index.ts#L168)

___

### type

• `Readonly` **type**: *sequence* \| *epoch*

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

Defined in: [bee-js/src/types/index.ts:172](https://github.com/ethersphere/bee-js/blob/430becc/src/types/index.ts#L172)
