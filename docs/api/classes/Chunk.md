# Class: Chunk

Defined in: [bee-js/src/modules/chunk.ts:15](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/chunk.ts#L15)

Chunk operations backed by the `/chunks` endpoint.

Accessed as `bee.chunk`.

## Constructors

### Constructor

> **new Chunk**(`context`): `Chunk`

Defined in: [bee-js/src/modules/chunk.ts:16](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/chunk.ts#L16)

#### Parameters

##### context

`BeeContext`

#### Returns

`Chunk`

## Methods

### download()

> **download**(`reference`, `options?`, `requestOptions?`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Defined in: [bee-js/src/modules/chunk.ts:67](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/chunk.ts#L67)

Downloads a chunk as a `Uint8Array`.

#### Parameters

##### reference

Bee chunk reference in hex string (either 64 or 128 chars long) or ENS domain.

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](../classes/Reference.md)

##### options?

[`DownloadOptions`](../interfaces/DownloadOptions.md)

Options that affects the request behavior

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

***

### upload()

> **upload**(`stamp`, `data`, `options?`, `requestOptions?`): `Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

Defined in: [bee-js/src/modules/chunk.ts:28](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/chunk.ts#L28)

Uploads a chunk to the network.

Chunks uploaded with this method should be retrieved with [download](#download).

#### Parameters

##### stamp

Postage Batch ID or an Envelope created with the `bee.createEnvelope` method.

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](../classes/BatchId.md) | [`EnvelopeWithBatchId`](../interfaces/EnvelopeWithBatchId.md)

##### data

Raw chunk to be uploaded (Content Addressed Chunk or Single Owner Chunk)

`Uint8Array`\<`ArrayBufferLike`\> | [`Chunk`](../interfaces/Chunk.md) | [`SingleOwnerChunk`](../interfaces/SingleOwnerChunk.md)

##### options?

[`UploadOptions`](../interfaces/UploadOptions.md)

Additional options like tag, encryption, pinning, content-type and request options

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>
