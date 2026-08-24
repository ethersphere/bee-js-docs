# Class: Stamper

Defined in: [core-sdk/src/stamper/stamper.ts:43](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/stamper/stamper.ts#L43)

Stateful postage stamp issuer: tracks how many chunks have been stamped
into each of the batch's 65536 buckets, so each chunk gets a distinct,
capacity-respecting index without the caller managing that bookkeeping.

## Properties

### batchId

> **batchId**: [`BatchId`](BatchId.md)

Defined in: [core-sdk/src/stamper/stamper.ts:45](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/stamper/stamper.ts#L45)

***

### buckets

> **buckets**: `Uint32Array`

Defined in: [core-sdk/src/stamper/stamper.ts:46](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/stamper/stamper.ts#L46)

***

### depth

> **depth**: `number`

Defined in: [core-sdk/src/stamper/stamper.ts:47](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/stamper/stamper.ts#L47)

***

### maxSlot

> **maxSlot**: `number`

Defined in: [core-sdk/src/stamper/stamper.ts:48](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/stamper/stamper.ts#L48)

***

### signer

> **signer**: [`PrivateKey`](PrivateKey.md)

Defined in: [core-sdk/src/stamper/stamper.ts:44](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/stamper/stamper.ts#L44)

## Methods

### getState()

> **getState**(): `Uint32Array`

Defined in: [core-sdk/src/stamper/stamper.ts:102](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/stamper/stamper.ts#L102)

Returns the live bucket-height state, for persisting and later resuming
via [fromState](#fromstate).

#### Returns

`Uint32Array`

***

### stamp()

> **stamp**(`address`, `timestampMs?`): [`EnvelopeWithBatchId`](../interfaces/EnvelopeWithBatchId.md)

Defined in: [core-sdk/src/stamper/stamper.ts:85](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/stamper/stamper.ts#L85)

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

Defined in: [core-sdk/src/stamper/stamper.ts:61](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/stamper/stamper.ts#L61)

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

Defined in: [core-sdk/src/stamper/stamper.ts:72](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/stamper/stamper.ts#L72)

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
