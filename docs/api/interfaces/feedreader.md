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

• `Readonly` **owner**: [`HexEthAddress`](../types/utils.eth.hexethaddress.md)

#### Defined in

[bee-js/src/types/index.ts:292](https://github.com/ethersphere/bee-js/blob/6f227e1/src/types/index.ts#L292)

___

### topic

• `Readonly` **topic**: [`Topic`](../types/topic.md)

#### Defined in

[bee-js/src/types/index.ts:293](https://github.com/ethersphere/bee-js/blob/6f227e1/src/types/index.ts#L293)

___

### type

• `Readonly` **type**: ``"sequence"`` \| ``"epoch"``

#### Defined in

[bee-js/src/types/index.ts:291](https://github.com/ethersphere/bee-js/blob/6f227e1/src/types/index.ts#L291)

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

[bee-js/src/types/index.ts:297](https://github.com/ethersphere/bee-js/blob/6f227e1/src/types/index.ts#L297)
