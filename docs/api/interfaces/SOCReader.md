# Interface: SOCReader

Defined in: [bee-js/src/types/index.ts:426](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L426)

Interface for downloading single owner chunks

## Extended by

- [`SOCWriter`](SOCWriter.md)

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

***

### owner

> `readonly` **owner**: [`EthAddress`](../classes/EthAddress.md)

Defined in: [bee-js/src/types/index.ts:427](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L427)
