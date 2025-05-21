[**@ethersphere/bee-js**](../Overview.md)

***

[@ethersphere/bee-js](../Overview.md) / SOCWriter

# Interface: SOCWriter

Defined in: [bee-js/src/types/index.ts:439](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L439)

Interface for downloading and uploading single owner chunks

## Extends

- [`SOCReader`](SOCReader.md)

## Properties

### download()

> **download**: (`identifier`) => `Promise`\<`SingleOwnerChunk`\>

Defined in: [bee-js/src/types/index.ts:433](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L433)

Downloads a single owner chunk

#### Parameters

##### identifier

The identifier of the chunk

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Identifier`](../classes/Identifier.md)

#### Returns

`Promise`\<`SingleOwnerChunk`\>

#### Inherited from

[`SOCReader`](SOCReader.md).[`download`](SOCReader.md#download)

***

### owner

> `readonly` **owner**: [`EthAddress`](../classes/EthAddress.md)

Defined in: [bee-js/src/types/index.ts:427](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L427)

#### Inherited from

[`SOCReader`](SOCReader.md).[`owner`](SOCReader.md#owner)

***

### upload()

> **upload**: (`stamp`, `identifier`, `data`, `options?`) => `Promise`\<[`UploadResult`](UploadResult.md)\>

Defined in: [bee-js/src/types/index.ts:447](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L447)

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
