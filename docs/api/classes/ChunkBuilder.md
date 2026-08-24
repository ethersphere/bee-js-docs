# Class: ChunkBuilder

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/chunk/splitter.d.cts:8

A chunk (up to 4096 bytes of payload) being filled in by a ChunkSplitter,
before it's sealed. Unlike the immutable CAC [Chunk](../interfaces/Chunk.md), this is a
mutable buffer - only `hash()`/`encryptedHash()`/`build()` finalize it.

## Constructors

### Constructor

> **new ChunkBuilder**(`span?`): `ChunkBuilder`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/chunk/splitter.d.cts:11

#### Parameters

##### span?

`bigint`

#### Returns

`ChunkBuilder`

## Properties

### span

> **span**: `bigint`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/chunk/splitter.d.cts:9

***

### writer

> **writer**: `Uint8ArrayWriter`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/chunk/splitter.d.cts:10

## Methods

### build()

> **build**(): `Uint8Array`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/chunk/splitter.d.cts:15

Returns the raw chunk bytes: 8-byte span || 4096-byte payload buffer.

#### Returns

`Uint8Array`

***

### encryptedHash()

> **encryptedHash**(`key?`): `object`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/chunk/splitter.d.cts:24

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

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/chunk/splitter.d.cts:19

Computes the unencrypted BMT address of this chunk.

#### Returns

[`Reference`](Reference.md)
