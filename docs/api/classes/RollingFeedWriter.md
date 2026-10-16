# Class: RollingFeedWriter

Defined in: [bee-js/src/modules/rolling-feed.ts:81](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/modules/rolling-feed.ts#L81)

## Constructors

### Constructor

> **new RollingFeedWriter**(`context`, `baseTopic`, `signer`, `periodLength`): `RollingFeedWriter`

Defined in: [bee-js/src/modules/rolling-feed.ts:82](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/modules/rolling-feed.ts#L82)

#### Parameters

##### context

`BeeContext`

##### baseTopic

[`Topic`](../classes/Topic.md)

##### signer

[`PrivateKey`](../classes/PrivateKey.md)

##### periodLength

`number`

#### Returns

`RollingFeedWriter`

## Methods

### catchUp()

> **catchUp**(`postageBatchId`, `periodIdx?`, `maxBackfill?`): `Promise`\<`void`\>

Defined in: [bee-js/src/modules/rolling-feed.ts:148](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/modules/rolling-feed.ts#L148)

Backfills up to `maxBackfill` periods strictly between the last populated one and
`periodIdx` (default: current) with that period's last known payload/reference. Never
writes `periodIdx` itself - keeping it populated during silence is the caller's job (a
periodic `uploadPayload`/`uploadReference` heartbeat), not catchUp's. A conditional
"write it if empty" would race that heartbeat: there's no compare-and-swap on a SOC
address, so a stale write can still land after a concurrent fresh one and shadow it.

`maxBackfill` bounds both the backward scan and the backfill itself, since scanning
further back than you're willing to backfill only wastes round trips. Defaults to 1,
matching the reader's one-period fallback - nothing deeper is ever read anyway. Throws
if no populated period is found within that bound.

#### Parameters

##### postageBatchId

`string` | [`BatchId`](../classes/BatchId.md)

##### periodIdx?

`number`

##### maxBackfill?

`number` = `DEFAULT_MAX_BACKFILL`

#### Returns

`Promise`\<`void`\>

***

### isCaughtUp()

> **isCaughtUp**(`periodIdx?`): `Promise`\<`boolean`\>

Defined in: [bee-js/src/modules/rolling-feed.ts:127](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/modules/rolling-feed.ts#L127)

True unless the period right before `periodIdx` (default: current) never got mirrored
forward into it, i.e. the writer went silent for at least one whole period.

#### Parameters

##### periodIdx?

`number`

#### Returns

`Promise`\<`boolean`\>

***

### uploadPayload()

> **uploadPayload**(`postageBatchId`, `payload`, `options?`): `Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

Defined in: [bee-js/src/modules/rolling-feed.ts:89](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/modules/rolling-feed.ts#L89)

#### Parameters

##### postageBatchId

`string` | [`BatchId`](../classes/BatchId.md)

##### payload

`string` | `Uint8Array`\<`ArrayBufferLike`\>

##### options?

`FeedUploadOptions`

#### Returns

`Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

***

### uploadReference()

> **uploadReference**(`postageBatchId`, `reference`, `options?`): `Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

Defined in: [bee-js/src/modules/rolling-feed.ts:106](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/modules/rolling-feed.ts#L106)

#### Parameters

##### postageBatchId

`string` | [`BatchId`](../classes/BatchId.md)

##### reference

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](../classes/Reference.md)

##### options?

`FeedUploadOptions`

#### Returns

`Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>
