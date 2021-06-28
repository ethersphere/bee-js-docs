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

[bee-js/src/types/index.ts:266](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/types/index.ts#L266)

___

### topic

• `Readonly` **topic**: [`Topic`](../types/topic.md)

#### Defined in

[bee-js/src/types/index.ts:267](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/types/index.ts#L267)

___

### type

• `Readonly` **type**: ``"sequence"`` \| ``"epoch"``

#### Defined in

[bee-js/src/types/index.ts:265](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/types/index.ts#L265)

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

[bee-js/src/types/index.ts:271](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/types/index.ts#L271)
