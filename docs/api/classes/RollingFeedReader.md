# Class: RollingFeedReader

Defined in: [bee-js/src/modules/rolling-feed.ts:211](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/modules/rolling-feed.ts#L211)

## Constructors

### Constructor

> **new RollingFeedReader**(`context`, `baseTopic`, `owner`, `periodLength`): `RollingFeedReader`

Defined in: [bee-js/src/modules/rolling-feed.ts:212](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/modules/rolling-feed.ts#L212)

#### Parameters

##### context

`BeeContext`

##### baseTopic

[`Topic`](../classes/Topic.md)

##### owner

[`EthAddress`](../classes/EthAddress.md)

##### periodLength

`number`

#### Returns

`RollingFeedReader`

## Methods

### downloadPayload()

> **downloadPayload**(`options?`): `Promise`\<`FeedPayloadResult`\>

Defined in: [bee-js/src/modules/rolling-feed.ts:223](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/modules/rolling-feed.ts#L223)

Reads the current period's feed; falls back to the previous period once if empty,
to tolerate clock skew between writer and reader.

#### Parameters

##### options?

`Omit`\<`FeedUpdateOptions`, `"index"`\>

#### Returns

`Promise`\<`FeedPayloadResult`\>

***

### downloadReference()

> **downloadReference**(): `Promise`\<`FeedReferenceResult`\>

Defined in: [bee-js/src/modules/rolling-feed.ts:241](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/modules/rolling-feed.ts#L241)

Same as `downloadPayload`, but for a reference to data uploaded elsewhere.

#### Returns

`Promise`\<`FeedReferenceResult`\>
