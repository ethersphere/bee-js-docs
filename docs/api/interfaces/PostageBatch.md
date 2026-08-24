# Interface: PostageBatch

Defined in: [bee-js/src/types/index.ts:506](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L506)

## Properties

### amount

> **amount**: [`NumberString`](../type-aliases/NumberString.md)

Defined in: [bee-js/src/types/index.ts:520](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L520)

***

### batchID

> **batchID**: [`BatchId`](../classes/BatchId.md)

Defined in: [bee-js/src/types/index.ts:507](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L507)

***

### blockNumber

> **blockNumber**: `number`

Defined in: [bee-js/src/types/index.ts:522](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L522)

***

### bucketDepth

> **bucketDepth**: `number`

Defined in: [bee-js/src/types/index.ts:521](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L521)

***

### depth

> **depth**: `number`

Defined in: [bee-js/src/types/index.ts:519](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L519)

***

### duration

> **duration**: [`Duration`](../classes/Duration.md)

Defined in: [bee-js/src/types/index.ts:527](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L527)

Estimated time until the batch expires

***

### immutableFlag

> **immutableFlag**: `boolean`

Defined in: [bee-js/src/types/index.ts:523](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L523)

***

### label

> **label**: `string`

Defined in: [bee-js/src/types/index.ts:518](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L518)

***

### remainingSize

> **remainingSize**: [`Size`](../classes/Size.md)

Defined in: [bee-js/src/types/index.ts:543](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L543)

Estimated remaining size

***

### size

> **size**: [`Size`](../classes/Size.md)

Defined in: [bee-js/src/types/index.ts:539](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L539)

Effective size

***

### theoreticalSize

> **theoreticalSize**: [`Size`](../classes/Size.md)

Defined in: [bee-js/src/types/index.ts:547](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L547)

Theoretical size in bytes

***

### usable

> **usable**: `boolean`

Defined in: [bee-js/src/types/index.ts:517](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L517)

***

### usage

> **usage**: `number`

Defined in: [bee-js/src/types/index.ts:531](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L531)

A floating point number from 0 to 1, where 0 is no usage, 1 is full usage.

***

### usageText

> **usageText**: `string`

Defined in: [bee-js/src/types/index.ts:535](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L535)

Human readable usage text, like "50%" or "100%", no fractions

***

### utilization

> **utilization**: `number`

Defined in: [bee-js/src/types/index.ts:516](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L516)

Represents how much of the batch is used up.

Max utilization = `2 ** (depth - bucketDepth)`

Since the smallest depth is 17, and one batch has 65,536 buckets, and one chunk is 4,096 bytes,
the 512MB theoretical max size for the smallest stamp comes from `2 * 65536 * 4096 = 512MB`

## Methods

### calculateRemainingSize()

> **calculateRemainingSize**(`encryption`, `redundancyLevel`): [`Size`](../classes/Size.md)

Defined in: [bee-js/src/types/index.ts:557](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L557)

Calculates the remaining size of data that can be uploaded with this postage batch
based on whether encryption is used and the desired redundancy level.

#### Parameters

##### encryption

`boolean`

##### redundancyLevel

[`RedundancyLevel`](../enumerations/RedundancyLevel.md)

#### Returns

[`Size`](../classes/Size.md)

***

### calculateSize()

> **calculateSize**(`encryption`, `redundancyLevel`): [`Size`](../classes/Size.md)

Defined in: [bee-js/src/types/index.ts:552](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L552)

Calculates the effective size of data that can be uploaded with this postage batch
based on whether encryption is used and the desired redundancy level.

#### Parameters

##### encryption

`boolean`

##### redundancyLevel

[`RedundancyLevel`](../enumerations/RedundancyLevel.md)

#### Returns

[`Size`](../classes/Size.md)
