[**@ethersphere/bee-js**](../Overview.md)

***

[@ethersphere/bee-js](../Overview.md) / GsocMessageHandler

# Interface: GsocMessageHandler

Defined in: [bee-js/src/types/index.ts:339](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L339)

## Properties

### onError()

> **onError**: (`error`, `subscription`) => `void`

Defined in: [bee-js/src/types/index.ts:341](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L341)

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

Defined in: [bee-js/src/types/index.ts:340](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L340)

#### Parameters

##### message

[`Bytes`](../classes/Bytes.md)

##### subscription

[`GsocSubscription`](GsocSubscription.md)

#### Returns

`void`
