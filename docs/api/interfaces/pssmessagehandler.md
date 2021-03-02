---
id: "pssmessagehandler"
title: "Interface: PssMessageHandler"
sidebar_label: "PssMessageHandler"
custom_edit_url: null
hide_title: true
---

# Interface: PssMessageHandler

## Properties

### onError

• **onError**: (`error`: [*BeeError*](../classes/beeerror.md), `subscription`: [*PssSubscription*](psssubscription.md)) =\> *void*

#### Type declaration:

▸ (`error`: [*BeeError*](../classes/beeerror.md), `subscription`: [*PssSubscription*](psssubscription.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`error` | [*BeeError*](../classes/beeerror.md) |
`subscription` | [*PssSubscription*](psssubscription.md) |

**Returns:** *void*

Defined in: [bee-js/src/types/index.ts:88](https://github.com/ethersphere/bee-js/blob/7dfd556/src/types/index.ts#L88)

Defined in: [bee-js/src/types/index.ts:88](https://github.com/ethersphere/bee-js/blob/7dfd556/src/types/index.ts#L88)

___

### onMessage

• **onMessage**: (`message`: *Uint8Array*, `subscription`: [*PssSubscription*](psssubscription.md)) =\> *void*

#### Type declaration:

▸ (`message`: *Uint8Array*, `subscription`: [*PssSubscription*](psssubscription.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *Uint8Array* |
`subscription` | [*PssSubscription*](psssubscription.md) |

**Returns:** *void*

Defined in: [bee-js/src/types/index.ts:87](https://github.com/ethersphere/bee-js/blob/7dfd556/src/types/index.ts#L87)

Defined in: [bee-js/src/types/index.ts:87](https://github.com/ethersphere/bee-js/blob/7dfd556/src/types/index.ts#L87)
