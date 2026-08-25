# Class: Storage

Defined in: [bee-js/src/modules/storage.ts:16](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/storage.ts#L16)

Ergonomic storage operations expressed in terms of size and duration.

Accessed as `bee.storage`. Wraps the low-level `bee.stamp` operations.

## Constructors

### Constructor

> **new Storage**(`context`): `Storage`

Defined in: [bee-js/src/modules/storage.ts:17](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/storage.ts#L17)

#### Parameters

##### context

`BeeContext`

#### Returns

`Storage`

## Methods

### buy()

> **buy**(`size`, `duration`, `options?`, `requestOptions?`, `encryption?`, `erasureCodeLevel?`): `Promise`\<[`BatchId`](../classes/BatchId.md)\>

Defined in: [bee-js/src/modules/storage.ts:35](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/storage.ts#L35)

Creates a postage batch sized for a certain size and duration on the Swarm network.

Use [getCost](#getcost) to calculate the cost beforehand.

#### Parameters

##### size

[`Size`](../classes/Size.md)

##### duration

[`Duration`](../classes/Duration.md)

##### options?

[`PostageBatchOptions`](../interfaces/PostageBatchOptions.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

##### encryption?

`boolean`

##### erasureCodeLevel?

[`RedundancyLevel`](../enumerations/RedundancyLevel.md)

#### Returns

`Promise`\<[`BatchId`](../classes/BatchId.md)\>

***

### extend()

> **extend**(`postageBatchId`, `size`, `duration`, `requestOptions?`, `encryption?`, `erasureCodeLevel?`): `Promise`\<[`BatchId`](../classes/BatchId.md) \| [`TransactionId`](../classes/TransactionId.md)\>

Defined in: [bee-js/src/modules/storage.ts:89](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/storage.ts#L89)

Extends the storage of a postage batch by either increasing its size, duration or both.

The size is ABSOLUTE, while the duration is RELATIVE to the current duration of the postage batch.

#### Parameters

##### postageBatchId

Batch ID of the postage batch to extend.

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](../classes/BatchId.md)

##### size

[`Size`](../classes/Size.md)

Absolute size to extend the postage batch to.

##### duration

[`Duration`](../classes/Duration.md)

Relative duration to extend the postage batch by.

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

##### encryption?

`boolean`

Assume the future uploaded data is encrypted, which skews the capacity of the postage batch.

##### erasureCodeLevel?

[`RedundancyLevel`](../enumerations/RedundancyLevel.md)

Assume the future uploaded data is erasure coded, which skews the capacity of the postage batch.

#### Returns

`Promise`\<[`BatchId`](../classes/BatchId.md) \| [`TransactionId`](../classes/TransactionId.md)\>

***

### extendDuration()

> **extendDuration**(`postageBatchId`, `duration`, `requestOptions?`): `Promise`\<[`BatchId`](../classes/BatchId.md)\>

Defined in: [bee-js/src/modules/storage.ts:165](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/storage.ts#L165)

Extends the duration of a postage batch.

#### Parameters

##### postageBatchId

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](../classes/BatchId.md)

##### duration

[`Duration`](../classes/Duration.md)

Relative duration to extend the postage batch by.

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`BatchId`](../classes/BatchId.md)\>

***

### extendSize()

> **extendSize**(`postageBatchId`, `size`, `requestOptions?`, `encryption?`, `erasureCodeLevel?`): `Promise`\<[`BatchId`](../classes/BatchId.md)\>

Defined in: [bee-js/src/modules/storage.ts:136](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/storage.ts#L136)

Extends the storage size of a postage batch by increasing its depth.

#### Parameters

##### postageBatchId

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](../classes/BatchId.md)

##### size

[`Size`](../classes/Size.md)

Absolute size to extend the postage batch to.

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

##### encryption?

`boolean`

Assume the future uploaded data is encrypted, which skews the capacity of the postage batch.

##### erasureCodeLevel?

[`RedundancyLevel`](../enumerations/RedundancyLevel.md)

Assume the future uploaded data is erasure coded, which skews the capacity of the postage batch.

#### Returns

`Promise`\<[`BatchId`](../classes/BatchId.md)\>

***

### getCost()

> **getCost**(`size`, `duration`, `requestOptions?`, `encryption?`, `erasureCodeLevel?`): `Promise`\<[`BZZ`](../classes/BZZ.md)\>

Defined in: [bee-js/src/modules/storage.ts:63](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/storage.ts#L63)

Calculates the estimated BZZ cost for creating a postage batch for the given size and duration.

#### Parameters

##### size

[`Size`](../classes/Size.md)

Size of the data to be stored.

##### duration

[`Duration`](../classes/Duration.md)

Duration for which the data should be stored.

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

##### encryption?

`boolean`

Assume the future uploaded data is encrypted, which skews the capacity of the postage batch.

##### erasureCodeLevel?

[`RedundancyLevel`](../enumerations/RedundancyLevel.md)

Assume the future uploaded data is erasure coded, which skews the capacity of the postage batch.

#### Returns

`Promise`\<[`BZZ`](../classes/BZZ.md)\>

***

### getDurationExtensionCost()

> **getDurationExtensionCost**(`postageBatchId`, `duration`, `requestOptions?`): `Promise`\<[`BZZ`](../classes/BZZ.md)\>

Defined in: [bee-js/src/modules/storage.ts:246](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/storage.ts#L246)

Calculates the cost of extending the duration of a postage batch.

#### Parameters

##### postageBatchId

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](../classes/BatchId.md)

##### duration

[`Duration`](../classes/Duration.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`BZZ`](../classes/BZZ.md)\>

***

### getExtensionCost()

> **getExtensionCost**(`postageBatchId`, `size`, `duration`, `requestOptions?`, `encryption?`, `erasureCodeLevel?`): `Promise`\<[`BZZ`](../classes/BZZ.md)\>

Defined in: [bee-js/src/modules/storage.ts:187](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/storage.ts#L187)

Calculates the cost of extending both the duration and the capacity of a postage batch.

#### Parameters

##### postageBatchId

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](../classes/BatchId.md)

##### size

[`Size`](../classes/Size.md)

Absolute size to extend the postage batch to.

##### duration

[`Duration`](../classes/Duration.md)

Relative duration to extend the postage batch by.

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

##### encryption?

`boolean`

Assume the future uploaded data is encrypted, which skews the capacity of the postage batch.

##### erasureCodeLevel?

[`RedundancyLevel`](../enumerations/RedundancyLevel.md)

Assume the future uploaded data is erasure coded, which skews the capacity of the postage batch.

#### Returns

`Promise`\<[`BZZ`](../classes/BZZ.md)\>

***

### getSizeExtensionCost()

> **getSizeExtensionCost**(`postageBatchId`, `size`, `requestOptions?`, `encryption?`, `erasureCodeLevel?`): `Promise`\<[`BZZ`](../classes/BZZ.md)\>

Defined in: [bee-js/src/modules/storage.ts:216](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/storage.ts#L216)

Calculates the cost of extending the size of a postage batch.

#### Parameters

##### postageBatchId

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](../classes/BatchId.md)

##### size

[`Size`](../classes/Size.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

##### encryption?

`boolean`

Assume the future uploaded data is encrypted, which skews the capacity of the postage batch.

##### erasureCodeLevel?

[`RedundancyLevel`](../enumerations/RedundancyLevel.md)

Assume the future uploaded data is erasure coded, which skews the capacity of the postage batch.

#### Returns

`Promise`\<[`BZZ`](../classes/BZZ.md)\>

***

### rename()

> **rename**(`postageBatchId`, `newLabel`, `requestOptions?`): `Promise`\<`void`\>

Defined in: [bee-js/src/modules/storage.ts:265](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/storage.ts#L265)

Renames a storage. Convenience wrapper over `bee.stamp.updateLabel`.

#### Parameters

##### postageBatchId

Batch ID of the postage batch to update.

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](../classes/BatchId.md)

##### newLabel

`string`

New name for the storage.

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<`void`\>
