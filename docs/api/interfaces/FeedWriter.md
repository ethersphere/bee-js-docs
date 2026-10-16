# Interface: FeedWriter

Defined in: [bee-js/src/types/index.ts:451](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L451)

FeedWriter is an interface for updating feeds

## Extends

- [`FeedReader`](FeedReader.md)

## Properties

### owner

> `readonly` **owner**: [`EthAddress`](../classes/EthAddress.md)

Defined in: [bee-js/src/types/index.ts:429](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L429)

#### Inherited from

[`FeedReader`](FeedReader.md).[`owner`](FeedReader.md#owner)

***

### topic

> `readonly` **topic**: [`Topic`](../classes/Topic.md)

Defined in: [bee-js/src/types/index.ts:430](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L430)

#### Inherited from

[`FeedReader`](FeedReader.md).[`topic`](FeedReader.md#topic)

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

#### Inherited from

[`FeedReader`](FeedReader.md).[`download`](FeedReader.md#download)

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

#### Inherited from

[`FeedReader`](FeedReader.md).[`downloadPayload`](FeedReader.md#downloadpayload)

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

#### Inherited from

[`FeedReader`](FeedReader.md).[`downloadReference`](FeedReader.md#downloadreference)

***

### ~~upload()~~

> **upload**(`postageBatchId`, `reference`, `options?`): `Promise`\<[`UploadResult`](UploadResult.md)\>

Defined in: [bee-js/src/types/index.ts:463](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L463)

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

Defined in: [bee-js/src/types/index.ts:475](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L475)

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

Defined in: [bee-js/src/types/index.ts:469](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L469)

#### Parameters

##### postageBatchId

`string` | [`BatchId`](../classes/BatchId.md)

##### reference

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](../classes/Reference.md)

##### options?

`FeedUploadOptions`

#### Returns

`Promise`\<[`UploadResult`](UploadResult.md)\>
