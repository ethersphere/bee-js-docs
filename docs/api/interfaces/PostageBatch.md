# Interface: PostageBatch

Defined in: [bee-js/src/types/index.ts:525](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L525)

## Properties

### amount

> **amount**: [`NumberString`](../type-aliases/NumberString.md)

Defined in: [bee-js/src/types/index.ts:539](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L539)

***

### batchID

> **batchID**: [`BatchId`](../classes/BatchId.md)

Defined in: [bee-js/src/types/index.ts:526](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L526)

***

### blockNumber

> **blockNumber**: `number`

Defined in: [bee-js/src/types/index.ts:541](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L541)

***

### bucketDepth

> **bucketDepth**: `number`

Defined in: [bee-js/src/types/index.ts:540](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L540)

***

### depth

> **depth**: `number`

Defined in: [bee-js/src/types/index.ts:538](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L538)

***

### duration

> **duration**: [`Duration`](../classes/Duration.md)

Defined in: [bee-js/src/types/index.ts:546](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L546)

Estimated time until the batch expires

***

### immutableFlag

> **immutableFlag**: `boolean`

Defined in: [bee-js/src/types/index.ts:542](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L542)

***

### label

> **label**: `string`

Defined in: [bee-js/src/types/index.ts:537](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L537)

***

### remainingSize

> **remainingSize**: [`Size`](../classes/Size.md)

Defined in: [bee-js/src/types/index.ts:562](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L562)

Estimated remaining size

***

### size

> **size**: [`Size`](../classes/Size.md)

Defined in: [bee-js/src/types/index.ts:558](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L558)

Effective size

***

### theoreticalSize

> **theoreticalSize**: [`Size`](../classes/Size.md)

Defined in: [bee-js/src/types/index.ts:566](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L566)

Theoretical size in bytes

***

### usable

> **usable**: `boolean`

Defined in: [bee-js/src/types/index.ts:536](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L536)

***

### usage

> **usage**: `number`

Defined in: [bee-js/src/types/index.ts:550](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L550)

A floating point number from 0 to 1, where 0 is no usage, 1 is full usage.

***

### usageText

> **usageText**: `string`

Defined in: [bee-js/src/types/index.ts:554](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L554)

Human readable usage text, like "50%" or "100%", no fractions

***

### utilization

> **utilization**: `number`

Defined in: [bee-js/src/types/index.ts:535](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L535)

Represents how much of the batch is used up.

Max utilization = `2 ** (depth - bucketDepth)`

Since the smallest depth is 17, and one batch has 65,536 buckets, and one chunk is 4,096 bytes,
the 512MB theoretical max size for the smallest stamp comes from `2 * 65536 * 4096 = 512MB`

## Methods

### calculateRemainingSize()

> **calculateRemainingSize**(`encryption`, `redundancyLevel`): [`Size`](../classes/Size.md)

Defined in: [bee-js/src/types/index.ts:576](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L576)

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

Defined in: [bee-js/src/types/index.ts:571](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L571)

Calculates the effective size of data that can be uploaded with this postage batch
based on whether encryption is used and the desired redundancy level.

#### Parameters

##### encryption

`boolean`

##### redundancyLevel

[`RedundancyLevel`](../enumerations/RedundancyLevel.md)

#### Returns

[`Size`](../classes/Size.md)
