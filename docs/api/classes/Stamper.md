# Class: Stamper

Defined in: [bee-js/src/stamper/stamper.ts:5](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/stamper/stamper.ts#L5)

## Properties

### batchId

> **batchId**: [`BatchId`](BatchId.md)

Defined in: [bee-js/src/stamper/stamper.ts:7](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/stamper/stamper.ts#L7)

***

### buckets

> **buckets**: `Uint32Array`

Defined in: [bee-js/src/stamper/stamper.ts:8](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/stamper/stamper.ts#L8)

***

### depth

> **depth**: `number`

Defined in: [bee-js/src/stamper/stamper.ts:9](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/stamper/stamper.ts#L9)

***

### maxSlot

> **maxSlot**: `number`

Defined in: [bee-js/src/stamper/stamper.ts:10](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/stamper/stamper.ts#L10)

***

### signer

> **signer**: [`PrivateKey`](PrivateKey.md)

Defined in: [bee-js/src/stamper/stamper.ts:6](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/stamper/stamper.ts#L6)

## Methods

### getState()

> **getState**(): `Uint32Array`

Defined in: [bee-js/src/stamper/stamper.ts:60](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/stamper/stamper.ts#L60)

#### Returns

`Uint32Array`

***

### stamp()

> **stamp**(`chunk`): [`EnvelopeWithBatchId`](../interfaces/EnvelopeWithBatchId.md)

Defined in: [bee-js/src/stamper/stamper.ts:38](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/stamper/stamper.ts#L38)

#### Parameters

##### chunk

`Chunk`

#### Returns

[`EnvelopeWithBatchId`](../interfaces/EnvelopeWithBatchId.md)

***

### fromBlank()

> `static` **fromBlank**(`signer`, `batchId`, `depth`): `Stamper`

Defined in: [bee-js/src/stamper/stamper.ts:25](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/stamper/stamper.ts#L25)

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

Defined in: [bee-js/src/stamper/stamper.ts:29](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/stamper/stamper.ts#L29)

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
