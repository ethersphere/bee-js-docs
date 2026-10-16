# Class: RollingFeed

Defined in: [bee-js/src/modules/rolling-feed.ts:69](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/modules/rolling-feed.ts#L69)

## Constructors

### Constructor

> **new RollingFeed**(`context`): `RollingFeed`

Defined in: [bee-js/src/modules/rolling-feed.ts:70](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/modules/rolling-feed.ts#L70)

#### Parameters

##### context

`BeeContext`

#### Returns

`RollingFeed`

## Methods

### makeReader()

> **makeReader**(`baseTopic`, `owner`, `periodLength`): [`RollingFeedReader`](RollingFeedReader.md)

Defined in: [bee-js/src/modules/rolling-feed.ts:76](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/modules/rolling-feed.ts#L76)

#### Parameters

##### baseTopic

[`Topic`](../classes/Topic.md)

##### owner

[`EthAddress`](../classes/EthAddress.md)

##### periodLength

`number`

#### Returns

[`RollingFeedReader`](RollingFeedReader.md)

***

### makeWriter()

> **makeWriter**(`baseTopic`, `signer`, `periodLength`): [`RollingFeedWriter`](RollingFeedWriter.md)

Defined in: [bee-js/src/modules/rolling-feed.ts:72](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/modules/rolling-feed.ts#L72)

#### Parameters

##### baseTopic

[`Topic`](../classes/Topic.md)

##### signer

[`PrivateKey`](../classes/PrivateKey.md)

##### periodLength

`number`

#### Returns

[`RollingFeedWriter`](RollingFeedWriter.md)
