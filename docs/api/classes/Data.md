# Class: Data

Defined in: [bee-js/src/modules/data.ts:22](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/data.ts#L22)

Raw data operations backed by the `/bytes` endpoint.

Accessed as `bee.data`.

## Constructors

### Constructor

> **new Data**(`context`): `Data`

Defined in: [bee-js/src/modules/data.ts:23](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/data.ts#L23)

#### Parameters

##### context

`BeeContext`

#### Returns

`Data`

## Methods

### download()

> **download**(`resource`, `options?`, `requestOptions?`): `Promise`\<[`Bytes`](../classes/Bytes.md)\>

Defined in: [bee-js/src/modules/data.ts:58](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/data.ts#L58)

Downloads raw data through the `GET /bytes/{reference}` endpoint.

#### Parameters

##### resource

Swarm reference, Swarm CID, or ENS domain.

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](../classes/Reference.md)

##### options?

[`DownloadOptions`](../interfaces/DownloadOptions.md)

Options that affects the request behavior

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`Bytes`](../classes/Bytes.md)\>

***

### downloadReadable()

> **downloadReadable**(`resource`, `options?`, `requestOptions?`): `Promise`\<`ReadableStream`\<`Uint8Array`\<`ArrayBufferLike`\>\>\>

Defined in: [bee-js/src/modules/data.ts:79](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/data.ts#L79)

Downloads raw data through the `GET /bytes/{reference}` endpoint as a readable stream.

Only tested in Node.js environment.

#### Parameters

##### resource

Swarm reference, Swarm CID, or ENS domain.

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](../classes/Reference.md)

##### options?

[`DownloadOptions`](../interfaces/DownloadOptions.md)

Options that affects the request behavior.

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<`ReadableStream`\<`Uint8Array`\<`ArrayBufferLike`\>\>\>

***

### isRetrievable()

> **isRetrievable**(`reference`, `requestOptions?`): `Promise`\<`boolean`\>

Defined in: [bee-js/src/modules/data.ts:116](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/data.ts#L116)

Checks if content specified by reference is retrievable from the network.

#### Parameters

##### reference

Bee reference to be checked in hex string (either 64 or 128 chars long) or ENS domain.

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](../classes/Reference.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<`boolean`\>

***

### probe()

> **probe**(`reference`, `requestOptions?`): `Promise`\<[`ReferenceInformation`](../interfaces/ReferenceInformation.md)\>

Defined in: [bee-js/src/modules/data.ts:101](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/data.ts#L101)

Fetches content length for a `/bytes` reference through the `HEAD /bytes/{reference}` endpoint.

#### Parameters

##### reference

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](../classes/Reference.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`ReferenceInformation`](../interfaces/ReferenceInformation.md)\>

***

### upload()

> **upload**(`postageBatchId`, `data`, `options?`, `requestOptions?`): `Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

Defined in: [bee-js/src/modules/data.ts:35](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/data.ts#L35)

Uploads raw data through the `POST /bytes` endpoint.

Data uploaded with this method should be retrieved with [download](#download).

#### Parameters

##### postageBatchId

Usable Postage Batch ID with sufficient capacity to upload the data.

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](../classes/BatchId.md)

##### data

A `string` (text data) or `Uint8Array` (raw data) to be uploaded.

`string` | `Uint8Array`\<`ArrayBufferLike`\> | `Blob` | `Readable`

##### options?

[`RedundantUploadOptions`](../interfaces/RedundantUploadOptions.md)

Additional options like tag, encryption, pinning, content-type and request options.

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>
