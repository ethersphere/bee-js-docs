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

[bee-js/src/types/index.ts:237](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/types/index.ts#L237)

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

[bee-js/src/types/index.ts:236](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/types/index.ts#L236)
