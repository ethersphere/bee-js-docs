# Interface: SOCReader

Defined in: [bee-js/src/types/index.ts:466](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L466)

Interface for downloading single owner chunks

## Extended by

- [`SOCWriter`](SOCWriter.md)

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

***

### owner

> `readonly` **owner**: [`EthAddress`](../classes/EthAddress.md)

Defined in: [bee-js/src/types/index.ts:467](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L467)
