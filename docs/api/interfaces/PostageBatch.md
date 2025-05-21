[**@ethersphere/bee-js**](../Overview.md)

***

[@ethersphere/bee-js](../Overview.md) / PostageBatch

# Interface: PostageBatch

Defined in: [bee-js/src/types/index.ts:466](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L466)

## Properties

### amount

> **amount**: [`NumberString`](../type-aliases/NumberString.md)

Defined in: [bee-js/src/types/index.ts:480](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L480)

***

### batchID

> **batchID**: [`BatchId`](../classes/BatchId.md)

Defined in: [bee-js/src/types/index.ts:467](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L467)

***

### blockNumber

> **blockNumber**: `number`

Defined in: [bee-js/src/types/index.ts:482](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L482)

***

### bucketDepth

> **bucketDepth**: `number`

Defined in: [bee-js/src/types/index.ts:481](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L481)

***

### depth

> **depth**: `number`

Defined in: [bee-js/src/types/index.ts:479](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L479)

***

### duration

> **duration**: [`Duration`](../classes/Duration.md)

Defined in: [bee-js/src/types/index.ts:487](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L487)

Estimated time until the batch expires

***

### immutableFlag

> **immutableFlag**: `boolean`

Defined in: [bee-js/src/types/index.ts:483](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L483)

***

### label

> **label**: `string`

Defined in: [bee-js/src/types/index.ts:478](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L478)

***

### remainingSize

> **remainingSize**: [`Size`](../classes/Size.md)

Defined in: [bee-js/src/types/index.ts:503](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L503)

Estimated remaining size

***

### size

> **size**: [`Size`](../classes/Size.md)

Defined in: [bee-js/src/types/index.ts:499](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L499)

Effective size

***

### theoreticalSize

> **theoreticalSize**: [`Size`](../classes/Size.md)

Defined in: [bee-js/src/types/index.ts:507](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L507)

Theoretical size in bytes

***

### usable

> **usable**: `boolean`

Defined in: [bee-js/src/types/index.ts:477](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L477)

***

### usage

> **usage**: `number`

Defined in: [bee-js/src/types/index.ts:491](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L491)

A floating point number from 0 to 1, where 0 is no usage, 1 is full usage.

***

### usageText

> **usageText**: `string`

Defined in: [bee-js/src/types/index.ts:495](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L495)

Human readable usage text, like "50%" or "100%", no fractions

***

### utilization

> **utilization**: `number`

Defined in: [bee-js/src/types/index.ts:476](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L476)

Represents how much of the batch is used up.

Max utilization = `2 ** (depth - bucketDepth)`

Since the smallest depth is 17, and one batch has 65,536 buckets, and one chunk is 4,096 bytes,
the 512MB theoretical max size for the smallest stamp comes from `2 * 65536 * 4096 = 512MB`
