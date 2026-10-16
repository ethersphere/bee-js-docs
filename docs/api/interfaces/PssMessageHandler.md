# Interface: PssMessageHandler

Defined in: [bee-js/src/types/index.ts:375](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L375)

## Properties

### onClose()

> **onClose**: (`subscription`) => `void`

Defined in: [bee-js/src/types/index.ts:378](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L378)

#### Parameters

##### subscription

[`PssSubscription`](PssSubscription.md)

#### Returns

`void`

***

### onError()

> **onError**: (`error`, `subscription`) => `void`

Defined in: [bee-js/src/types/index.ts:377](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L377)

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

Defined in: [bee-js/src/types/index.ts:376](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L376)

#### Parameters

##### message

[`Bytes`](../classes/Bytes.md)

##### subscription

[`PssSubscription`](PssSubscription.md)

#### Returns

`void`
