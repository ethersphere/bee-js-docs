# Interface: GsocMessageHandler

Defined in: [bee-js/src/types/index.ts:378](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L378)

## Properties

### onClose()

> **onClose**: (`subscription`) => `void`

Defined in: [bee-js/src/types/index.ts:381](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L381)

#### Parameters

##### subscription

[`GsocSubscription`](GsocSubscription.md)

#### Returns

`void`

***

### onError()

> **onError**: (`error`, `subscription`) => `void`

Defined in: [bee-js/src/types/index.ts:380](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L380)

#### Parameters

##### error

[`BeeError`](../classes/BeeError.md)

##### subscription

[`GsocSubscription`](GsocSubscription.md)

#### Returns

`void`

***

### onMessage()

> **onMessage**: (`message`, `subscription`) => `void`

Defined in: [bee-js/src/types/index.ts:379](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L379)

#### Parameters

##### message

[`Bytes`](../classes/Bytes.md)

##### subscription

[`GsocSubscription`](GsocSubscription.md)

#### Returns

`void`
