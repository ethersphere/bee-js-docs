# Interface: FeedReader

Defined in: [bee-js/src/types/index.ts:409](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L409)

FeedReader is an interface for downloading feed updates

## Extended by

- [`FeedWriter`](FeedWriter.md)

## Properties

### owner

> `readonly` **owner**: [`EthAddress`](../classes/EthAddress.md)

Defined in: [bee-js/src/types/index.ts:410](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L410)

***

### topic

> `readonly` **topic**: [`Topic`](../classes/Topic.md)

Defined in: [bee-js/src/types/index.ts:411](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L411)

## Methods

### ~~download()~~

> **download**(`options?`): `Promise`\<`FeedPayloadResult`\>

Defined in: [bee-js/src/types/index.ts:416](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L416)

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

Defined in: [bee-js/src/types/index.ts:426](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L426)

Downloads the feed update (latest if no index is specified) and returns it as a payload.

#### Parameters

##### options?

`FeedUpdateOptions`

#### Returns

`Promise`\<`FeedPayloadResult`\>

***

### downloadReference()

> **downloadReference**(`options?`): `Promise`\<`FeedReferenceResult`\>

Defined in: [bee-js/src/types/index.ts:421](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L421)

Downloads the feed update (latest if no index is specified) and returns it as a reference.

#### Parameters

##### options?

`FeedUpdateOptions`

#### Returns

`Promise`\<`FeedReferenceResult`\>
