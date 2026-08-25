# Interface: SingleOwnerChunk

Defined in: [core-sdk/src/chunk/soc.ts:52](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/chunk/soc.ts#L52)

Single Owner Chunk (SOC) - a chunk type where the address is determined by
the owner and an arbitrary identifier. Its integrity is attested by the
owner's digital signature rather than by hashing the content directly.

- `span` indicates the size of the `payload` in bytes.
- `payload` contains the actual data or the body of the chunk.
- `data` contains the full chunk data - `identifier`, `signature`, `span` and `payload`.
- `address` is the Swarm hash (or reference) of the chunk.
- `identifier` is an arbitrary identifier selected by the uploader.
- `signature` is the 65-byte (r || s || v) signature of the owner over the identifier and the wrapped chunk's address.
- `owner` is the Ethereum address of the chunk owner.

## Properties

### address

> **address**: [`Reference`](../classes/Reference.md)

Defined in: [core-sdk/src/chunk/soc.ts:56](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/chunk/soc.ts#L56)

***

### data

> `readonly` **data**: `Uint8Array`

Defined in: [core-sdk/src/chunk/soc.ts:53](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/chunk/soc.ts#L53)

***

### identifier

> **identifier**: [`Identifier`](../classes/Identifier.md)

Defined in: [core-sdk/src/chunk/soc.ts:57](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/chunk/soc.ts#L57)

***

### owner

> **owner**: [`EthAddress`](../classes/EthAddress.md)

Defined in: [core-sdk/src/chunk/soc.ts:59](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/chunk/soc.ts#L59)

***

### payload

> **payload**: [`Bytes`](../classes/Bytes.md)

Defined in: [core-sdk/src/chunk/soc.ts:55](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/chunk/soc.ts#L55)

***

### signature

> **signature**: [`Signature`](../classes/Signature.md)

Defined in: [core-sdk/src/chunk/soc.ts:58](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/chunk/soc.ts#L58)

***

### span

> **span**: [`Span`](../classes/Span.md)

Defined in: [core-sdk/src/chunk/soc.ts:54](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/chunk/soc.ts#L54)
