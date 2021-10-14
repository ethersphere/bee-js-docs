---
id: "feedreader"
title: "Interface: FeedReader"
sidebar_label: "FeedReader"
sidebar_position: 0
custom_edit_url: null
---

FeedReader is an interface for downloading feed updates

## Hierarchy

- **`FeedReader`**

  ↳ [`FeedWriter`](feedwriter.md)

## Properties

### owner

• `Readonly` **owner**: `HexEthAddress`

#### Defined in

[bee-js/src/types/index.ts:354](https://github.com/ethersphere/bee-js/blob/ae6a776/src/types/index.ts#L354)

___

### topic

• `Readonly` **topic**: [`Topic`](../types/topic.md)

#### Defined in

[bee-js/src/types/index.ts:355](https://github.com/ethersphere/bee-js/blob/ae6a776/src/types/index.ts#L355)

___

### type

• `Readonly` **type**: ``"sequence"`` \| ``"epoch"``

#### Defined in

[bee-js/src/types/index.ts:353](https://github.com/ethersphere/bee-js/blob/ae6a776/src/types/index.ts#L353)

## Methods

### download

▸ **download**(`options?`): `Promise`<`FetchFeedUpdateResponse`\>

Download the latest feed update

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `FeedUpdateOptions` |

#### Returns

`Promise`<`FetchFeedUpdateResponse`\>

#### Defined in

[bee-js/src/types/index.ts:359](https://github.com/ethersphere/bee-js/blob/ae6a776/src/types/index.ts#L359)
