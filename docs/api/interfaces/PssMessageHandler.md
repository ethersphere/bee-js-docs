[**@ethersphere/bee-js**](../Overview.md)

***

[@ethersphere/bee-js](../Overview.md) / PssMessageHandler

# Interface: PssMessageHandler

Defined in: [bee-js/src/types/index.ts:329](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L329)

## Properties

### onError()

> **onError**: (`error`, `subscription`) => `void`

Defined in: [bee-js/src/types/index.ts:331](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L331)

#### Parameters

##### error

[`BeeError`](../classes/BeeError.md)

##### subscription

[`PssSubscription`](PssSubscription.md)

#### Returns

`void`

***

### onMessage()

> **onMessage**: (`message`, `subscription`) => `void`

Defined in: [bee-js/src/types/index.ts:330](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L330)

#### Parameters

##### message

[`Bytes`](../classes/Bytes.md)

##### subscription

[`PssSubscription`](PssSubscription.md)

#### Returns

`void`
