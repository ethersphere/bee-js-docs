# Interface: FeedWriter

Defined in: [bee-js/src/types/index.ts:392](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L392)

FeedWriter is an interface for updating feeds

## Extends

- [`FeedReader`](FeedReader.md)

## Properties

### owner

> `readonly` **owner**: [`EthAddress`](../classes/EthAddress.md)

Defined in: [bee-js/src/types/index.ts:370](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L370)

#### Inherited from

[`FeedReader`](FeedReader.md).[`owner`](FeedReader.md#owner)

***

### topic

> `readonly` **topic**: [`Topic`](../classes/Topic.md)

Defined in: [bee-js/src/types/index.ts:371](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L371)

#### Inherited from

[`FeedReader`](FeedReader.md).[`topic`](FeedReader.md#topic)

## Methods

### ~~download()~~

> **download**(`options?`): `Promise`\<`FeedPayloadResult`\>

Defined in: [bee-js/src/types/index.ts:376](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L376)

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

Defined in: [bee-js/src/types/index.ts:386](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L386)

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

Defined in: [bee-js/src/types/index.ts:381](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L381)

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

Defined in: [bee-js/src/types/index.ts:404](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L404)

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

Defined in: [bee-js/src/types/index.ts:416](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L416)

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

Defined in: [bee-js/src/types/index.ts:410](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L410)

#### Parameters

##### postageBatchId

`string` | [`BatchId`](../classes/BatchId.md)

##### reference

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](../classes/Reference.md)

##### options?

`FeedUploadOptions`

#### Returns

`Promise`\<[`UploadResult`](UploadResult.md)\>
