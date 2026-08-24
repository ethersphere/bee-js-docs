# Interface: SingleOwnerChunk

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/chunk/soc.d.cts:27

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

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/chunk/soc.d.cts:31

***

### data

> `readonly` **data**: `Uint8Array`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/chunk/soc.d.cts:28

***

### identifier

> **identifier**: [`Identifier`](../classes/Identifier.md)

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/chunk/soc.d.cts:32

***

### owner

> **owner**: [`EthAddress`](../classes/EthAddress.md)

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/chunk/soc.d.cts:34

***

### payload

> **payload**: [`Bytes`](../classes/Bytes.md)

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/chunk/soc.d.cts:30

***

### signature

> **signature**: [`Signature`](../classes/Signature.md)

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/chunk/soc.d.cts:33

***

### span

> **span**: [`Span`](../classes/Span.md)

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/chunk/soc.d.cts:29
