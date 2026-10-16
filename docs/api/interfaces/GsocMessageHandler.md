# Interface: GsocMessageHandler

Defined in: [bee-js/src/types/index.ts:386](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L386)

## Properties

### onClose()

> **onClose**: (`subscription`) => `void`

Defined in: [bee-js/src/types/index.ts:389](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L389)

#### Parameters

##### subscription

[`GsocSubscription`](GsocSubscription.md)

#### Returns

`void`

***

### onError()

> **onError**: (`error`, `subscription`) => `void`

Defined in: [bee-js/src/types/index.ts:388](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L388)

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

Defined in: [bee-js/src/types/index.ts:387](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L387)

#### Parameters

##### message

[`Bytes`](../classes/Bytes.md)

##### subscription

[`GsocSubscription`](GsocSubscription.md)

#### Returns

`void`
