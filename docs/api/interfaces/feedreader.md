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

[bee-js/src/types/index.ts:359](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L359)

___

### topic

• `Readonly` **topic**: [`Topic`](../types/topic.md)

#### Defined in

[bee-js/src/types/index.ts:360](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L360)

___

### type

• `Readonly` **type**: ``"sequence"`` \| ``"epoch"``

#### Defined in

[bee-js/src/types/index.ts:358](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L358)

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

[bee-js/src/types/index.ts:364](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L364)
