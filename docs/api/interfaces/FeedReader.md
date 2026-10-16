# Interface: FeedReader

Defined in: [bee-js/src/types/index.ts:428](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L428)

FeedReader is an interface for downloading feed updates

## Extended by

- [`FeedWriter`](FeedWriter.md)

## Properties

### owner

> `readonly` **owner**: [`EthAddress`](../classes/EthAddress.md)

Defined in: [bee-js/src/types/index.ts:429](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L429)

***

### topic

> `readonly` **topic**: [`Topic`](../classes/Topic.md)

Defined in: [bee-js/src/types/index.ts:430](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L430)

## Methods

### ~~download()~~

> **download**(`options?`): `Promise`\<`FeedPayloadResult`\>

Defined in: [bee-js/src/types/index.ts:435](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L435)

#### Parameters

##### options?

`FeedUpdateOptions`

#### Returns

`Promise`\<`FeedPayloadResult`\>

#### Deprecated

Use `downloadReference` or `downloadPayload` instead to disambiguate how the data should be interpreted.

***

### downloadPayload()

> **downloadPayload**(`options?`): `Promise`\<`FeedPayloadResult`\>

Defined in: [bee-js/src/types/index.ts:445](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L445)

Downloads the feed update (latest if no index is specified) and returns it as a payload.

#### Parameters

##### options?

`FeedUpdateOptions`

#### Returns

`Promise`\<`FeedPayloadResult`\>

***

### downloadReference()

> **downloadReference**(`options?`): `Promise`\<`FeedReferenceResult`\>

Defined in: [bee-js/src/types/index.ts:440](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L440)

Downloads the feed update (latest if no index is specified) and returns it as a reference.

#### Parameters

##### options?

`FeedUpdateOptions`

#### Returns

`Promise`\<`FeedReferenceResult`\>
