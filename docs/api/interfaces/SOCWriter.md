# Interface: SOCWriter

Defined in: [bee-js/src/types/index.ts:479](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L479)

Interface for downloading and uploading single owner chunks

## Extends

- [`SOCReader`](SOCReader.md)

## Properties

### download()

> **download**: (`identifier`) => `Promise`\<[`SingleOwnerChunk`](SingleOwnerChunk.md)\>

Defined in: [bee-js/src/types/index.ts:473](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L473)

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

Defined in: [bee-js/src/types/index.ts:467](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L467)

#### Inherited from

[`SOCReader`](SOCReader.md).[`owner`](SOCReader.md#owner)

***

### upload()

> **upload**: (`stamp`, `identifier`, `data`, `options?`) => `Promise`\<[`UploadResult`](UploadResult.md)\>

Defined in: [bee-js/src/types/index.ts:487](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L487)

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

[`UploadOptions`](UploadOptions.md)

Upload options

#### Returns

`Promise`\<[`UploadResult`](UploadResult.md)\>
