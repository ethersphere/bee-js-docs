# Interface: Chunk

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/chunk/cac.d.cts:22

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

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/chunk/cac.d.cts:26

***

### data

> `readonly` **data**: `Uint8Array`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/chunk/cac.d.cts:23

***

### payload

> **payload**: [`Bytes`](../classes/Bytes.md)

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/chunk/cac.d.cts:25

***

### span

> **span**: [`Span`](../classes/Span.md)

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/chunk/cac.d.cts:24

***

### toSingleOwnerChunk()

> **toSingleOwnerChunk**: (`identifier`, `privateKey`) => [`SingleOwnerChunk`](SingleOwnerChunk.md)

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/chunk/cac.d.cts:31

Converts this CAC into a Single Owner Chunk (SOC), signed by `privateKey`
over `identifier` and this chunk's address.

#### Parameters

##### identifier

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Identifier`](../classes/Identifier.md)

##### privateKey

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`PrivateKey`](../classes/PrivateKey.md)

#### Returns

[`SingleOwnerChunk`](SingleOwnerChunk.md)
