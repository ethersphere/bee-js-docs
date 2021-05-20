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

Defined in: [bee-js/src/types/index.ts:154](https://github.com/ethersphere/bee-js/blob/7260ee1/src/types/index.ts#L154)

___

### topic

• `Readonly` **topic**: [*Topic*](../types/topic.md)

Defined in: [bee-js/src/types/index.ts:155](https://github.com/ethersphere/bee-js/blob/7260ee1/src/types/index.ts#L155)

___

### type

• `Readonly` **type**: *sequence* \| *epoch*

Defined in: [bee-js/src/types/index.ts:153](https://github.com/ethersphere/bee-js/blob/7260ee1/src/types/index.ts#L153)

## Methods

### download

▸ **download**(`options?`: FeedUpdateOptions): *Promise*<FetchFeedUpdateResponse\>

Download the latest feed update

#### Parameters:

Name | Type |
:------ | :------ |
`options?` | FeedUpdateOptions |

**Returns:** *Promise*<FetchFeedUpdateResponse\>

Defined in: [bee-js/src/types/index.ts:159](https://github.com/ethersphere/bee-js/blob/7260ee1/src/types/index.ts#L159)
