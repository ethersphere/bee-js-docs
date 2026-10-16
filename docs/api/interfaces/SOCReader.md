# Interface: SOCReader

Defined in: [bee-js/src/types/index.ts:485](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L485)

Interface for downloading single owner chunks

## Extended by

- [`SOCWriter`](SOCWriter.md)

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

***

### owner

> `readonly` **owner**: [`EthAddress`](../classes/EthAddress.md)

Defined in: [bee-js/src/types/index.ts:486](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L486)
