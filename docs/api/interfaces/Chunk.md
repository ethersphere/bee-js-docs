# Interface: Chunk

Defined in: [core-sdk/src/chunk/cac.ts:25](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/chunk/cac.ts#L25)

Content Addressed Chunk (CAC) - the immutable building block of Swarm,
holding at most 4096 bytes of payload.

- `span` indicates the size of the `payload` in bytes.
- `payload` contains the actual data or the body of the chunk.
- `data` contains the full chunk data - `span` and `payload`.
- `address` is the Swarm hash (or reference) of the chunk.

The `toSingleOwnerChunk` method allows converting the CAC into a Single Owner Chunk (SOC).

## Properties

### address

> **address**: [`Reference`](../classes/Reference.md)

Defined in: [core-sdk/src/chunk/cac.ts:29](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/chunk/cac.ts#L29)

***

### data

> `readonly` **data**: `Uint8Array`

Defined in: [core-sdk/src/chunk/cac.ts:26](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/chunk/cac.ts#L26)

***

### payload

> **payload**: [`Bytes`](../classes/Bytes.md)

Defined in: [core-sdk/src/chunk/cac.ts:28](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/chunk/cac.ts#L28)

***

### span

> **span**: [`Span`](../classes/Span.md)

Defined in: [core-sdk/src/chunk/cac.ts:27](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/chunk/cac.ts#L27)

***

### toSingleOwnerChunk()

> **toSingleOwnerChunk**: (`identifier`, `privateKey`) => [`SingleOwnerChunk`](SingleOwnerChunk.md)

Defined in: [core-sdk/src/chunk/cac.ts:34](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/chunk/cac.ts#L34)

Converts this CAC into a Single Owner Chunk (SOC), signed by `privateKey`
over `identifier` and this chunk's address.

#### Parameters

##### identifier

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Identifier`](../classes/Identifier.md)

##### privateKey

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`PrivateKey`](../classes/PrivateKey.md)

#### Returns

[`SingleOwnerChunk`](SingleOwnerChunk.md)
