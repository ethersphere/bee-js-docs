# Class: Collection

Defined in: [bee-js/src/modules/collection.ts:21](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/collection.ts#L21)

Collection (multi-file) operations backed by the `/bzz` endpoint.

Accessed as `bee.collection`.

## Constructors

### Constructor

> **new Collection**(`context`): `Collection`

Defined in: [bee-js/src/modules/collection.ts:22](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/collection.ts#L22)

#### Parameters

##### context

`BeeContext`

#### Returns

`Collection`

## Methods

### hashDirectory()

> **hashDirectory**(`dir`): `Promise`\<[`Reference`](../classes/Reference.md)\>

Defined in: [bee-js/src/modules/collection.ts:169](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/collection.ts#L169)

Hashes a directory locally and returns the root hash (Swarm reference).

The actual Swarm reference may be different as there is no canonical hashing of directories.

#### Parameters

##### dir

`string`

#### Returns

`Promise`\<[`Reference`](../classes/Reference.md)\>

***

### stream()

> **stream**(`postageBatchId`, `files`, `onUploadProgress?`, `options?`, `requestOptions?`): `Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

Defined in: [bee-js/src/modules/collection.ts:112](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/collection.ts#L112)

Uploads a collection of files by streaming them to the Bee node, which supports arbitrary
sizes, but may be slower due to uploading chunks one by one.

Only intended for the browser environment.

#### Parameters

##### postageBatchId

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](../classes/BatchId.md)

##### files

`File`[] | `FileList`

##### onUploadProgress?

(`progress`) => `void`

##### options?

[`UploadOptions`](../interfaces/UploadOptions.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

***

### streamFromDirectory()

> **streamFromDirectory**(`postageBatchId`, `dir`, `onUploadProgress?`, `options?`, `requestOptions?`): `Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

Defined in: [bee-js/src/modules/collection.ts:143](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/collection.ts#L143)

Uploads a directory by streaming its contents directly to the Bee node, which supports
arbitrary directory sizes, but may be slower due to uploading chunks one by one.

Only intended for the Node.js environment.

#### Parameters

##### postageBatchId

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](../classes/BatchId.md)

##### dir

`string`

##### onUploadProgress?

(`progress`) => `void`

##### options?

[`CollectionUploadOptions`](../interfaces/CollectionUploadOptions.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

***

### upload()

> **upload**(`postageBatchId`, `collection`, `options?`, `requestOptions?`): `Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

Defined in: [bee-js/src/modules/collection.ts:32](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/collection.ts#L32)

Uploads a collection that you assemble yourself.

#### Parameters

##### postageBatchId

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](../classes/BatchId.md)

##### collection

[`Collection`](../type-aliases/Collection.md)

##### options?

[`CollectionUploadOptions`](../interfaces/CollectionUploadOptions.md)

Collection and request options

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

***

### uploadFromDirectory()

> **uploadFromDirectory**(`postageBatchId`, `dir`, `options?`, `requestOptions?`): `Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

Defined in: [bee-js/src/modules/collection.ts:83](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/collection.ts#L83)

Uploads a collection of files from a directory on the filesystem.

Available only in Node.js as it uses the `fs` module.

#### Parameters

##### postageBatchId

Postage BatchId to be used to upload the data with

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](../classes/BatchId.md)

##### dir

`string`

the path of the files to be uploaded

##### options?

[`CollectionUploadOptions`](../interfaces/CollectionUploadOptions.md)

Additional options like tag, encryption, pinning and request options

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

***

### uploadFromFileList()

> **uploadFromFileList**(`postageBatchId`, `fileList`, `options?`, `requestOptions?`): `Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

Defined in: [bee-js/src/modules/collection.ts:56](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/collection.ts#L56)

Uploads a collection of files using the browser `FileList` API.

#### Parameters

##### postageBatchId

Postage BatchId to be used to upload the data with

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](../classes/BatchId.md)

##### fileList

list of files to be uploaded

`File`[] | `FileList`

##### options?

[`CollectionUploadOptions`](../interfaces/CollectionUploadOptions.md)

Additional options like tag, encryption, pinning and request options

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>
