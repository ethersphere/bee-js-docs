# Interface: FeedWriter

Defined in: [bee-js/src/types/index.ts:432](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L432)

FeedWriter is an interface for updating feeds

## Extends

- [`FeedReader`](FeedReader.md)

## Properties

### owner

> `readonly` **owner**: [`EthAddress`](../classes/EthAddress.md)

Defined in: [bee-js/src/types/index.ts:410](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L410)

#### Inherited from

[`FeedReader`](FeedReader.md).[`owner`](FeedReader.md#owner)

***

### topic

> `readonly` **topic**: [`Topic`](../classes/Topic.md)

Defined in: [bee-js/src/types/index.ts:411](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L411)

#### Inherited from

[`FeedReader`](FeedReader.md).[`topic`](FeedReader.md#topic)

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

#### Inherited from

[`FeedReader`](FeedReader.md).[`download`](FeedReader.md#download)

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

#### Inherited from

[`FeedReader`](FeedReader.md).[`downloadPayload`](FeedReader.md#downloadpayload)

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

#### Inherited from

[`FeedReader`](FeedReader.md).[`downloadReference`](FeedReader.md#downloadreference)

***

### ~~upload()~~

> **upload**(`postageBatchId`, `reference`, `options?`): `Promise`\<[`UploadResult`](UploadResult.md)\>

Defined in: [bee-js/src/types/index.ts:444](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L444)

Upload a new feed update

#### Parameters

##### postageBatchId

Postage BatchId to be used to upload the data with

`string` | [`BatchId`](../classes/BatchId.md)

##### reference

The reference to be stored in the new update

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](../classes/Reference.md)

##### options?

`FeedUploadOptions`

Additional options like `at`

#### Returns

`Promise`\<[`UploadResult`](UploadResult.md)\>

UpdateResult that points at Single Owner Chunk that contains the new update and pointer to the updated chunk reference.

#### Deprecated

Use `uploadReference` or `uploadPayload` instead to disambiguate how the data should be interpreted.

***

### uploadPayload()

> **uploadPayload**(`postageBatchId`, `payload`, `options?`): `Promise`\<[`UploadResult`](UploadResult.md)\>

Defined in: [bee-js/src/types/index.ts:456](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L456)

#### Parameters

##### postageBatchId

`string` | [`BatchId`](../classes/BatchId.md)

##### payload

`string` | `Uint8Array`\<`ArrayBufferLike`\>

##### options?

`FeedUploadOptions`

#### Returns

`Promise`\<[`UploadResult`](UploadResult.md)\>

***

### uploadReference()

> **uploadReference**(`postageBatchId`, `reference`, `options?`): `Promise`\<[`UploadResult`](UploadResult.md)\>

Defined in: [bee-js/src/types/index.ts:450](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L450)

#### Parameters

##### postageBatchId

`string` | [`BatchId`](../classes/BatchId.md)

##### reference

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](../classes/Reference.md)

##### options?

`FeedUploadOptions`

#### Returns

`Promise`\<[`UploadResult`](UploadResult.md)\>
