# Class: Stamp

Defined in: [bee-js/src/modules/stamp.ts:29](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/stamp.ts#L29)

Low-level postage batch (stamp) operations.

Accessed as `bee.stamp`. For the ergonomic wrapper see `bee.storage`.

## Constructors

### Constructor

> **new Stamp**(`context`): `Stamp`

Defined in: [bee-js/src/modules/stamp.ts:30](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/stamp.ts#L30)

#### Parameters

##### context

`BeeContext`

#### Returns

`Stamp`

## Methods

### calculateTopUpForBZZ()

> **calculateTopUpForBZZ**(`depth`, `bzz`, `requestOptions?`): `Promise`\<\{ `amount`: `bigint`; `duration`: [`Duration`](../classes/Duration.md); \}\>

Defined in: [bee-js/src/modules/stamp.ts:108](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/stamp.ts#L108)

Calculates the `amount` and expected duration extension for topping up a postage batch with a given BZZ value.

#### Parameters

##### depth

`number`

Depth of the postage batch to top up.

##### bzz

[`BZZ`](../classes/BZZ.md)

The amount of BZZ to spend on the top-up.

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<\{ `amount`: `bigint`; `duration`: [`Duration`](../classes/Duration.md); \}\>

***

### create()

> **create**(`amount`, `depth`, `options?`, `requestOptions?`): `Promise`\<[`BatchId`](../classes/BatchId.md)\>

Defined in: [bee-js/src/modules/stamp.ts:42](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/stamp.ts#L42)

Creates a new postage batch, spending BZZ tokens from the node wallet.

Use `bee.storage.buy` for a more convenient way to create a postage batch.

#### Parameters

##### amount

TTL parameter - 1 day at the minimum of 24,000 storage price requires an amount of 414,720,000.

`string` | `bigint` | [`NumberString`](../type-aliases/NumberString.md)

##### depth

`number`

Capacity parameter - 17..255.

##### options?

[`PostageBatchOptions`](../interfaces/PostageBatchOptions.md)

Options for creation of postage batch

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`BatchId`](../classes/BatchId.md)\>

***

### dilute()

> **dilute**(`postageBatchId`, `depth`, `requestOptions?`): `Promise`\<[`BatchId`](../classes/BatchId.md)\>

Defined in: [bee-js/src/modules/stamp.ts:146](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/stamp.ts#L146)

Dilutes a postage batch to extend its capacity by increasing its depth.

#### Parameters

##### postageBatchId

Batch ID

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](../classes/BatchId.md)

##### depth

`number`

New depth for the batch

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`BatchId`](../classes/BatchId.md)\>

***

### get()

> **get**(`postageBatchId`, `requestOptions?`, `encryption?`, `erasureCodeLevel?`): `Promise`\<[`PostageBatch`](../interfaces/PostageBatch.md)\>

Defined in: [bee-js/src/modules/stamp.ts:165](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/stamp.ts#L165)

Returns details for a specific postage batch.

#### Parameters

##### postageBatchId

Batch ID

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](../classes/BatchId.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

##### encryption?

`boolean`

Assume that uploads with this postage batch are encrypted, which skews the capacity.

##### erasureCodeLevel?

[`RedundancyLevel`](../enumerations/RedundancyLevel.md)

Assume that uploads with this postage batch are erasure coded, which skews the capacity.

#### Returns

`Promise`\<[`PostageBatch`](../interfaces/PostageBatch.md)\>

***

### getAll()

> **getAll**(`requestOptions?`): `Promise`\<[`PostageBatch`](../interfaces/PostageBatch.md)[]\>

Defined in: [bee-js/src/modules/stamp.ts:216](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/stamp.ts#L216)

Returns all postage batches that belong to the node.

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`PostageBatch`](../interfaces/PostageBatch.md)[]\>

***

### getAllGlobal()

> **getAllGlobal**(`requestOptions?`): `Promise`\<[`GlobalPostageBatch`](../interfaces/GlobalPostageBatch.md)[]\>

Defined in: [bee-js/src/modules/stamp.ts:225](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/stamp.ts#L225)

Returns all globally available postage batches.

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`GlobalPostageBatch`](../interfaces/GlobalPostageBatch.md)[]\>

***

### getBuckets()

> **getBuckets**(`postageBatchId`, `requestOptions?`): `Promise`\<[`PostageBatchBuckets`](../interfaces/PostageBatchBuckets.md)\>

Defined in: [bee-js/src/modules/stamp.ts:202](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/stamp.ts#L202)

Returns detailed information related to buckets for a specific postage batch.

#### Parameters

##### postageBatchId

Batch ID

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](../classes/BatchId.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`PostageBatchBuckets`](../interfaces/PostageBatchBuckets.md)\>

***

### getGlobal()

> **getGlobal**(`postageBatchId`, `requestOptions?`): `Promise`\<[`GlobalPostageBatch`](../interfaces/GlobalPostageBatch.md)\>

Defined in: [bee-js/src/modules/stamp.ts:187](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/stamp.ts#L187)

Returns details for a specific globally available postage batch.

#### Parameters

##### postageBatchId

Batch ID

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](../classes/BatchId.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`GlobalPostageBatch`](../interfaces/GlobalPostageBatch.md)\>

***

### topUp()

> **topUp**(`postageBatchId`, `amount`, `requestOptions?`): `Promise`\<[`BatchId`](../classes/BatchId.md)\>

Defined in: [bee-js/src/modules/stamp.ts:128](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/stamp.ts#L128)

Increases the duration of a postage batch by increasing its amount.

#### Parameters

##### postageBatchId

Batch ID

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](../classes/BatchId.md)

##### amount

Amount to be added to the batch

`string` | `bigint` | [`NumberString`](../type-aliases/NumberString.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`BatchId`](../classes/BatchId.md)\>

***

### updateLabel()

> **updateLabel**(`postageBatchId`, `label`, `requestOptions?`): `Promise`\<`void`\>

Defined in: [bee-js/src/modules/stamp.ts:91](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/stamp.ts#L91)

Updates the label of a certain postage batch.

#### Parameters

##### postageBatchId

Batch ID of the postage batch to update.

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](../classes/BatchId.md)

##### label

`string`

New label for the postage batch.

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<`void`\>
