# Class: ChunkBuilder

Defined in: [core-sdk/src/chunk/splitter.ts:16](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/chunk/splitter.ts#L16)

A chunk (up to 4096 bytes of payload) being filled in by a ChunkSplitter,
before it's sealed. Unlike the immutable CAC [Chunk](../interfaces/Chunk.md), this is a
mutable buffer - only `hash()`/`encryptedHash()`/`build()` finalize it.

## Constructors

### Constructor

> **new ChunkBuilder**(`span?`): `ChunkBuilder`

Defined in: [core-sdk/src/chunk/splitter.ts:20](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/chunk/splitter.ts#L20)

#### Parameters

##### span?

`bigint`

#### Returns

`ChunkBuilder`

## Properties

### span

> **span**: `bigint`

Defined in: [core-sdk/src/chunk/splitter.ts:17](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/chunk/splitter.ts#L17)

***

### writer

> **writer**: `Uint8ArrayWriter`

Defined in: [core-sdk/src/chunk/splitter.ts:18](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/chunk/splitter.ts#L18)

## Methods

### build()

> **build**(): `Uint8Array`

Defined in: [core-sdk/src/chunk/splitter.ts:28](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/chunk/splitter.ts#L28)

Returns the raw chunk bytes: 8-byte span || 4096-byte payload buffer.

#### Returns

`Uint8Array`

***

### encryptedHash()

> **encryptedHash**(`key?`): `object`

Defined in: [core-sdk/src/chunk/splitter.ts:43](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/chunk/splitter.ts#L43)

Encrypts this chunk with `key` (generating a random one if omitted) and
returns the resulting address alongside the key used.

#### Parameters

##### key?

`Uint8Array`\<`ArrayBufferLike`\>

#### Returns

`object`

##### address

> **address**: [`Reference`](Reference.md)

##### key

> **key**: `Uint8Array`

***

### hash()

> **hash**(): [`Reference`](Reference.md)

Defined in: [core-sdk/src/chunk/splitter.ts:35](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/chunk/splitter.ts#L35)

Computes the unencrypted BMT address of this chunk.

#### Returns

[`Reference`](Reference.md)
