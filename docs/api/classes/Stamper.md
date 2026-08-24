# Class: Stamper

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/stamper/stamper.d.cts:17

Stateful postage stamp issuer: tracks how many chunks have been stamped
into each of the batch's 65536 buckets, so each chunk gets a distinct,
capacity-respecting index without the caller managing that bookkeeping.

## Properties

### batchId

> **batchId**: [`BatchId`](BatchId.md)

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/stamper/stamper.d.cts:19

***

### buckets

> **buckets**: `Uint32Array`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/stamper/stamper.d.cts:20

***

### depth

> **depth**: `number`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/stamper/stamper.d.cts:21

***

### maxSlot

> **maxSlot**: `number`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/stamper/stamper.d.cts:22

***

### signer

> **signer**: [`PrivateKey`](PrivateKey.md)

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/stamper/stamper.d.cts:18

## Methods

### getState()

> **getState**(): `Uint32Array`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/stamper/stamper.d.cts:41

Returns the live bucket-height state, for persisting and later resuming
via [fromState](#fromstate).

#### Returns

`Uint32Array`

***

### stamp()

> **stamp**(`address`, `timestampMs?`): [`EnvelopeWithBatchId`](../interfaces/EnvelopeWithBatchId.md)

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/stamper/stamper.d.cts:36

Stamps a chunk address, automatically picking and reserving the next
free slot in its bucket. Throws once a bucket reaches its depth-derived capacity.

#### Parameters

##### address

`Uint8Array`

##### timestampMs?

`number`

#### Returns

[`EnvelopeWithBatchId`](../interfaces/EnvelopeWithBatchId.md)

***

### fromBlank()

> `static` **fromBlank**(`signer`, `batchId`, `depth`): `Stamper`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/stamper/stamper.d.cts:27

Creates a fresh Stamper for a batch with no chunks stamped yet.

#### Parameters

##### signer

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`PrivateKey`](PrivateKey.md)

##### batchId

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](BatchId.md)

##### depth

`number`

#### Returns

`Stamper`

***

### fromState()

> `static` **fromState**(`signer`, `batchId`, `buckets`, `depth`): `Stamper`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/stamper/stamper.d.cts:31

Resumes a Stamper from a previously persisted bucket state (see [getState](#getstate)).

#### Parameters

##### signer

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`PrivateKey`](PrivateKey.md)

##### batchId

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](BatchId.md)

##### buckets

`Uint32Array`

##### depth

`number`

#### Returns

`Stamper`
