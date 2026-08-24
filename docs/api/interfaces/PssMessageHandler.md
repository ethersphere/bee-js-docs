# Interface: PssMessageHandler

Defined in: [bee-js/src/types/index.ts:367](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L367)

## Properties

### onClose()

> **onClose**: (`subscription`) => `void`

Defined in: [bee-js/src/types/index.ts:370](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L370)

#### Parameters

##### subscription

[`PssSubscription`](PssSubscription.md)

#### Returns

`void`

***

### onError()

> **onError**: (`error`, `subscription`) => `void`

Defined in: [bee-js/src/types/index.ts:369](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L369)

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

Defined in: [bee-js/src/types/index.ts:368](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L368)

#### Parameters

##### message

[`Bytes`](../classes/Bytes.md)

##### subscription

[`PssSubscription`](PssSubscription.md)

#### Returns

`void`
