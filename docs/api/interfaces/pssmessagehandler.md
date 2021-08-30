---
id: "pssmessagehandler"
title: "Interface: PssMessageHandler"
sidebar_label: "PssMessageHandler"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### onError

• **onError**: (`error`: [`BeeError`](../classes/beeerror.md), `subscription`: [`PssSubscription`](psssubscription.md)) =\> `void`

#### Type declaration

▸ (`error`, `subscription`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | [`BeeError`](../classes/beeerror.md) |
| `subscription` | [`PssSubscription`](psssubscription.md) |

##### Returns

`void`

#### Defined in

[bee-js/src/types/index.ts:245](https://github.com/ethersphere/bee-js/blob/74056cb/src/types/index.ts#L245)

___

### onMessage

• **onMessage**: (`message`: [`Data`](data.md), `subscription`: [`PssSubscription`](psssubscription.md)) =\> `void`

#### Type declaration

▸ (`message`, `subscription`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Data`](data.md) |
| `subscription` | [`PssSubscription`](psssubscription.md) |

##### Returns

`void`

#### Defined in

[bee-js/src/types/index.ts:244](https://github.com/ethersphere/bee-js/blob/74056cb/src/types/index.ts#L244)
