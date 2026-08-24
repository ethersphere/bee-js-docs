# Class: ChunkSplitter

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/chunk/splitter.d.cts:40

Splits arbitrary data into a tree of 4096-byte chunks (the inverse of
ChunkJoiner), calling `onBatch` with each level's sealed chunks as they
fill up - e.g. to upload them, or (via erasure-coding/batch.ts) to add
Reed-Solomon parity chunks.

## Constructors

### Constructor

> **new ChunkSplitter**(`onBatch`, `maxShards?`, `encrypted?`, `onIntermediateChunk?`): `ChunkSplitter`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/chunk/splitter.d.cts:62

#### Parameters

##### onBatch

(`batch`) => `Promise`\<`ChunkEntry`[]\>

Called with each level's sealed chunks as a batch fills
up; return any parity entries to append as extra references (empty
array for no redundancy).

##### maxShards?

`number`

Max data-chunk references per intermediate node.
Defaults to as many as fit in one 4096-byte node; pass a smaller value
(e.g. via erasure-coding's getMaxShards) to leave room for parity refs.

##### encrypted?

`boolean`

##### onIntermediateChunk?

(`chunk`, `hasParity`) => `void`

Called with each intermediate chunk as it's
sealed, so callers can tag it (e.g. encoding a redundancy level into its span).

#### Returns

`ChunkSplitter`

## Properties

### NOOP()

> `readonly` `static` **NOOP**: (`_`) => `Promise`\<`ChunkEntry`[]\>

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/chunk/splitter.d.cts:41

#### Parameters

##### \_

`ChunkEntry`[]

#### Returns

`Promise`\<`ChunkEntry`[]\>

## Methods

### append()

> **append**(`data`, `level?`, `spanIncrement?`): `Promise`\<`void`\>

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/chunk/splitter.d.cts:81

Appends more data to the tree, sealing and elevating chunks as needed.
`level`/`spanIncrement` are internal - callers building a tree from raw
input data should always call this at the default level 0.

#### Parameters

##### data

`Uint8Array`

##### level?

`number`

##### spanIncrement?

`bigint`

#### Returns

`Promise`\<`void`\>

***

### finalize()

> **finalize**(`level?`): `Promise`\<[`ChunkBuilder`](ChunkBuilder.md)\>

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/chunk/splitter.d.cts:89

Seals every level and returns the tree's root chunk. `level` is
internal - callers should always start at the default level 0.

#### Parameters

##### level?

`number`

#### Returns

`Promise`\<[`ChunkBuilder`](ChunkBuilder.md)\>

***

### encryptedRoot()

> `static` **encryptedRoot**(`data`): `Promise`\<\{ `address`: [`Reference`](Reference.md); `key`: `Uint8Array`; \}\>

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/chunk/splitter.d.cts:72

Splits `data` into an encrypted chunk tree (no upload callback) and
returns the root's encrypted address and key.

#### Parameters

##### data

`Uint8Array`

#### Returns

`Promise`\<\{ `address`: [`Reference`](Reference.md); `key`: `Uint8Array`; \}\>

***

### root()

> `static` **root**(`data`): `Promise`\<[`ChunkBuilder`](ChunkBuilder.md)\>

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/chunk/splitter.d.cts:67

Splits `data` into a chunk tree (no redundancy, no encryption, no
upload callback) and returns just its root chunk.

#### Parameters

##### data

`Uint8Array`

#### Returns

`Promise`\<[`ChunkBuilder`](ChunkBuilder.md)\>
