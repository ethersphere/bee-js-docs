# Class: File

Defined in: [bee-js/src/modules/file.ts:16](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/file.ts#L16)

Single-file operations backed by the `/bzz` endpoint.

Accessed as `bee.file`.

## Constructors

### Constructor

> **new File**(`context`): `File`

Defined in: [bee-js/src/modules/file.ts:17](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/file.ts#L17)

#### Parameters

##### context

`BeeContext`

#### Returns

`File`

## Methods

### download()

> **download**(`resource`, `path`, `options?`, `requestOptions?`): `Promise`\<[`FileData`](../interfaces/FileData.md)\<[`Bytes`](../classes/Bytes.md)\>\>

Defined in: [bee-js/src/modules/file.ts:74](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/file.ts#L74)

Downloads a single file.

#### Parameters

##### resource

Swarm reference, Swarm CID, or ENS domain.

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](../classes/Reference.md)

##### path

`string` = `''`

If reference points to manifest, then this parameter defines path to the file

##### options?

[`DownloadOptions`](../interfaces/DownloadOptions.md)

Options that affects the request behavior

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`FileData`](../interfaces/FileData.md)\<[`Bytes`](../classes/Bytes.md)\>\>

***

### downloadReadable()

> **downloadReadable**(`reference`, `path`, `options?`, `requestOptions?`): `Promise`\<[`FileData`](../interfaces/FileData.md)\<`ReadableStream`\<`Uint8Array`\<`ArrayBufferLike`\>\>\>\>

Defined in: [bee-js/src/modules/file.ts:100](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/file.ts#L100)

Downloads a single file as a readable stream.

#### Parameters

##### reference

Bee file reference in hex string (either 64 or 128 chars long), ENS domain or Swarm CID.

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](../classes/Reference.md)

##### path

`string` = `''`

If reference points to manifest / collections, then this parameter defines path to the file

##### options?

[`DownloadOptions`](../interfaces/DownloadOptions.md)

Options that affects the request behavior

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`FileData`](../interfaces/FileData.md)\<`ReadableStream`\<`Uint8Array`\<`ArrayBufferLike`\>\>\>\>

***

### upload()

> **upload**(`postageBatchId`, `data`, `name?`, `options?`, `requestOptions?`): `Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

Defined in: [bee-js/src/modules/file.ts:30](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/file.ts#L30)

Uploads a single file to a Bee node.

To download the file, use [download](#download).

#### Parameters

##### postageBatchId

Postage BatchId to be used to upload the data with

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](../classes/BatchId.md)

##### data

Data or file to be uploaded

`string` | `Uint8Array`\<`ArrayBufferLike`\> | `File` | `Readable`

##### name?

`string`

Optional name of the uploaded file

##### options?

[`FileUploadOptions`](../interfaces/FileUploadOptions.md)

Additional options like tag, encryption, pinning, content-type and request options

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>
