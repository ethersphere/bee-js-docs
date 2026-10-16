# Interface: SOCWriter

Defined in: [bee-js/src/types/index.ts:498](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L498)

Interface for downloading and uploading single owner chunks

## Extends

- [`SOCReader`](SOCReader.md)

## Properties

### download()

> **download**: (`identifier`) => `Promise`\<[`SingleOwnerChunk`](SingleOwnerChunk.md)\>

Defined in: [bee-js/src/types/index.ts:492](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L492)

Downloads a single owner chunk

#### Parameters

##### identifier

The identifier of the chunk

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Identifier`](../classes/Identifier.md)

#### Returns

`Promise`\<[`SingleOwnerChunk`](SingleOwnerChunk.md)\>

#### Inherited from

[`SOCReader`](SOCReader.md).[`download`](SOCReader.md#download)

***

### owner

> `readonly` **owner**: [`EthAddress`](../classes/EthAddress.md)

Defined in: [bee-js/src/types/index.ts:486](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L486)

#### Inherited from

[`SOCReader`](SOCReader.md).[`owner`](SOCReader.md#owner)

***

### upload()

> **upload**: (`stamp`, `identifier`, `data`, `options?`) => `Promise`\<[`UploadResult`](UploadResult.md)\>

Defined in: [bee-js/src/types/index.ts:506](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L506)

Uploads a single owner chunk

#### Parameters

##### stamp

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](../classes/BatchId.md)

##### identifier

The identifier of the chunk

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Identifier`](../classes/Identifier.md)

##### data

`Uint8Array`

The chunk payload data

##### options?

[`ChunkUploadOptions`](ChunkUploadOptions.md)

Upload options

#### Returns

`Promise`\<[`UploadResult`](UploadResult.md)\>
