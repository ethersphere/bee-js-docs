---
title: Buying Storage
id: storage
slug: /storage
sidebar_label: Buying Storage
description: Explains how to purchase and manage postage stamp batches for storing data on Swarm using bee-js utility classes.
---


<!-- 
- Mutable / immutable batches
- Buying batches using depth and amount
- Effective vs theoretical volume
- Topup and dilute instructions


## Advanced Topics

### Mutable Uploads

Storage batches are immutable by default. As the name suggests, data uploaded by an immutable batch can not be modified. Once an immutable batch is fully utilized, no more data can be uploaded with the batch. 

With mutable batches however, once the batch has reached full utilization, further uploads will cause the oldest data uploaded with that batch to start being replaced with the newer data.

Mutable batches are a flexible tool which can be used to power use cases such as real-time messaging or live streaming video. 

-->

Storage on Swarm is rented by purchasing "postage stamp batches". Each batch reserves a certain amount of storage space on Swarm for the lifetime of the batch. The cost of the batch increases with the storage size and duration. 

### Requirements

To use the example scripts below, you need:

- An instance of `bee-js`'s `Bee` [initialized](./getting-started.md) using the API endpoint of a currently operating Bee node 

### Checking Storage Costs 

We can use the `bee.storage.getCost` method along with our desired storage `Size` (amount of data to upload) and `Duration` (the batch lifetime) to get an estimated storage cost:

:::tip
The per-byte storage cost decreases as the storage `Size` of the batch increases, so it is more cost effective to purchase a single large batch rather than multiple smaller ones.

Costs remain constant with respect to changes in total `Duration`, however, so there is no discount for purchasing batches with a longer lifetime. 
:::

```javascript
import { Bee, Size, Duration } from "@ethersphere/bee-js"

const bee = new Bee('http://localhost:1633')

// Get cost in BZZ to store 1 GB for ~1 day
const bzz = await bee.storage.getCost(Size.fromGigabytes(1), Duration.fromDays(1))

// Prints "0.325" given the storage cost of 44908 PLUR at time of writing
console.log(bzz.toSignificantDigits(3)) 
```

:::warning
The actual lifetime of the batch may be higher or lower than the specified `Duration` due to Swarm's dynamic pricing model.

The amount that the price can change each day is limited, however, so you don't need to worry about a rapid increase in price causing your batch to unexpectedly expire over the course of a few hours.      

You can view the current price of storage on [Swarmscan](https://swarmscan.io/).
:::

### Purchasing Storage

The `bee.storage.buy` method abstracts away the lower level details of postage batches, letting you ask for a size and a duration instead of a depth and an amount.

:::tip
When purchasing storage with `bee.storage.buy`, a postage batch will be bought with *at least* enough space to upload the specified amount of data. However since storage on Swarm comes in [***discrete sizes***](./buying-storage.md#batch-size-breakpoints), the actual amount of space will likely be greater than specified.
:::

The `bee.storage.buy` method takes instances of the [`Size` and `Duration` utility classes](./buying-storage.md#utility-classes) and purchases a postage batch which can upload *at least* as much data as the given `Size` and store it for the given `Duration` (the actual duration of storage may be longer or shorter depending on the change in storage price over time), and then save the postage batch data locally. The transaction usually only takes a few seconds but may take up to a minute.

```javascript
import { Bee, Size, Duration } from "@ethersphere/bee-js"

const bee = new Bee('http://localhost:1633')

// Purchase a batch to store 1 GB 
const batchId = await bee.storage.buy(Size.fromGigabytes(1), Duration.fromDays(1))
```

Once the purchase transaction is complete, the method will return a unique postage batch id.

The lifetime of the batch starts counting down from the moment of purchase. The batch in the example above will expire in about 24 hours.

### Extending Storage Size

:::tip
Just as with buying storage, since storage comes only in [***discrete sizes***](./buying-storage.md#batch-size-breakpoints), the actual amount of additional space when extending the storage size of an existing batch will typically be greater than specified.
:::

If we need to upload more data, then we can extend a batch's storage size using the `bee.storage.extendSize` method. Note that in order to increase the batch size using the `bee.storage.extendSize` method, you must choose a size which is above the current [batch's size breakpoint](./buying-storage.md#batch-size-breakpoints).

:::tip
As mentioned [below](./buying-storage.md#batch-size-breakpoints), the per-byte cost decreases as the storage size of a batch increases, so it's more cost effective to increase the storage size of an existing batch than to buy a new, smaller one.

The exception to this rule is if we no longer wish to store the previously uploaded data. In that case we should buy a new postage batch, since extending the size of an existing batch would mean continuing to pay for the already uploaded data which we no longer need.
:::

First we estimate the cost to extend the storage size with the `bee.storage.getSizeExtensionCost` method:

```javascript
import { Bee, Size } from "@ethersphere/bee-js"

const bee = new Bee('http://localhost:1633')

// Request all local postage batches
const batches = await bee.stamp.getAll()

const batchId = batches[0].batchID

// Instantiate a Size instance for 5 GB
const newSize = Size.fromGigabytes(5)

// Return an instance of the BZZ class
const sizeExtensionCost = await bee.storage.getSizeExtensionCost(batchId, newSize)

// Use the BZZ.toDecimalString instance method to convert to a readable BZZ string
const cost = sizeExtensionCost.toDecimalString()

// Prints current cost to increase size
console.log(cost)
```

If the price is acceptable, then we can proceed to extend the batch size using `bee.storage.extendSize`:

```javascript
import { Bee, Size } from "@ethersphere/bee-js"

const bee = new Bee('http://localhost:1633')

// Request all local postage batches
const batches = await bee.stamp.getAll()

// Print results to the terminal
console.log(batches)

// Get batch ID of first batch in list
const batchId = batches[0].batchID

// Instantiate a Size instance for 5 GB
const newSize = Size.fromGigabytes(5)

// Extends batch size and returns the batch ID 
const result = await bee.storage.extendSize(batchId, newSize)

// Log result if successful 
console.log(result)
```

We can check that we successfully extended the batch size by [checking batch status](./buying-storage.md#checking-batch-status):

```javascript
[
  {
    batchID: BatchId { bytes: [Uint8Array], length: 32 },
    utilization: 0,
    usable: true,
    label: '',
    depth: 22,
    amount: '1714407552',
    bucketDepth: 16,
    blockNumber: 39145214,
    immutableFlag: true,
    usage: 0,
    usageText: '0%',
    size: Size { bytes: 7070000000 },
    remainingSize: Size { bytes: 7070000000 },
    theoreticalSize: Size { bytes: 17179869184 },
    duration: Duration { seconds: 94453 }
  }
]
```


Here we can see that our batch `size` was successfully extended from ~2.38 GB to ~7.07 GB.

*See [below](./buying-storage.md#batch-size-breakpoints) to understand why `size` was extended to ~7.07 GB even though 5 GB was used as input.*


### Extending Storage Duration

If we want our data to remain available on Swarm for a longer period of time, we can extend the duration of a postage batch using the `bee.storage.extendDuration` method.

Extending the duration means adding more BZZ to the batch so that the data stays alive longer on the network.

Before extending the duration, we can estimate the cost using the `bee.storage.getDurationExtensionCost` method:

```javascript
import { Bee, Duration } from "@ethersphere/bee-js"

const bee = new Bee('http://localhost:1633')

// Request all local postage batches
const batches = await bee.stamp.getAll()

// Select the batch ID of the first batch in the list
const batchId = batches[0].batchID

// Create a new Duration instance for 0.01 days
const additionalDuration = Duration.fromDays(.01)

// Estimate the cost of extending the duration
const durationExtensionCost = await bee.storage.getDurationExtensionCost(batchId, additionalDuration)

// Convert the BZZ value into a readable string
const cost = durationExtensionCost.toDecimalString()

// Print the estimated cost
console.log(cost)
```

Once we know the cost and decide to proceed, we can use `bee.storage.extendDuration` to extend the batch duration:

```javascript
import { Bee, Duration } from "@ethersphere/bee-js"

const bee = new Bee('http://localhost:1633')

// Request all local postage batches
const batches = await bee.stamp.getAll()

// Select the batch ID of the first batch in the list
const batchId = batches[0].batchID

// Create a Duration instance for 0.01 additional days
const additionalDuration = Duration.fromDays(.01)

// Extend the duration of the batch
const result = await bee.storage.extendDuration(batchId, additionalDuration)

// Log the result
console.log(result)
```

We can verify that the extension was successful by [checking the batch status](./buying-storage.md#checking-batch-status). You'll notice the `duration` value on the batch will have increased, reflecting the newly extended storage time:

```javascript
[
  {
    batchID: BatchId { bytes: [Uint8Array], length: 32 },
    utilization: 0,
    usable: true,
    label: '',
    depth: 22,
    amount: '1722164236',
    bucketDepth: 16,
    blockNumber: 39145214,
    immutableFlag: true,
    usage: 0,
    usageText: '0%',
    size: Size { bytes: 7070000000 },
    remainingSize: Size { bytes: 7070000000 },
    theoreticalSize: Size { bytes: 17179869184 },
    duration: Duration { seconds: 94132 }
  }
]
```

Here we can see that the `duration` value (measured in seconds) has increased, confirming that the batch will now remain alive on the Swarm network for longer.

:::tip
If you're storing important or long-lived data, it's a good idea to periodically check and extend the duration of your batches to ensure your data doesn't expire unexpectedly.
:::


### Estimating Combined Size and Duration Extension Cost

If we want to **increase both the storage size and duration** of a postage batch, we can use the `bee.storage.getExtensionCost` method to estimate the **total cost** of the extension. This is useful when you're planning to keep data alive for longer *and* want to increase capacity for uploading more data at the same time.

The `bee.storage.getExtensionCost` method combines size and duration into a single cost calculation, making it easier to understand the overall expense upfront.

Here’s how to use it:

```javascript
import { Bee, Size, Duration } from "@ethersphere/bee-js"

const bee = new Bee('http://localhost:1633')

// Request all local postage batches
const batches = await bee.stamp.getAll()

// Choose a batch to extend
const batchId = batches[0].batchID

// Define a new desired size (e.g., 10 GB)
const newSize = Size.fromGigabytes(10)

// Define a new additional duration (e.g., 14 days)
const additionalDuration = Duration.fromDays(14)

// Estimate total BZZ cost for extending both size and duration
const totalCost = await bee.storage.getExtensionCost(batchId, newSize, additionalDuration)

// Convert to a readable string
const cost = totalCost.toDecimalString()

// Print total estimated cost
console.log(cost)
```

This method helps you determine if it's more economical to **extend** an existing batch or **create a new one**, especially when both dimensions—storage and time—need to grow.

:::tip
If you're unsure whether to extend a batch or start fresh, compare the output of `bee.storage.getExtensionCost` with the cost of a new batch using the [Postage Stamp Pricing Guide](./buying-storage.md#batch-size-breakpoints). In many cases, extending is cheaper, especially for larger and longer-lived batches.
:::

If you're happy with the cost, you can then proceed to extend the **size** and **duration** individually by calling `bee.storage.extendSize` and `bee.storage.extendDuration` as shown in the previous sections.

### Checking Batch Status

You can check the status of purchased batches using the `bee.stamp.getAll` method:


```javascript
import { Bee } from "@ethersphere/bee-js"

const bee = new Bee('http://localhost:1633')

// Request all local postage batches
const batches = await bee.stamp.getAll()

// Print results to the terminal
console.log(batches) 
```

The results printed to the terminal will include all the currently valid postage batches we've purchased:

```bash
[
  {
    batchID: BatchId { bytes: [Uint8Array], length: 32 },
    utilization: 0,
    usable: true,
    label: '',
    depth: 21,
    amount: '931958784',
    bucketDepth: 16,
    blockNumber: 39105960,
    immutableFlag: true,
    usage: 0,
    usageText: '0%',
    size: Size { bytes: 2380000000 },
    remainingSize: Size { bytes: 2380000000 },
    theoreticalSize: Size { bytes: 8589934592 },
    duration: Duration { seconds: 84348 }
  }
]
```

We can disregard many of these values since they are only needed for advanced usage. There are several values we do need to pay attention to however:

- `usable` - it takes a short time for a batch to become usable (usually less than a minute) after purchase. Once usable, `usable` will change from `false` to `true`.
- `usage` - indicates how much of the batch has been used as a value between `0` and `1`.
- `usageText` - converts the `usage` value to a percentage value rounded to the nearest whole number which is then converted to text.
- `size` -  the amount of data in bytes which the batch can safely store.
- `remainingSize` - the amount of data in bytes remaining from `size` which is still available to be used.
- `duration` - an estimate of the remaining batch lifetime in seconds.

:::tip
Note that although 1 GB was specified as input for `bee.storage.buy`, the `size` value is ~2.38 GB. Refer to the [section about batch sizes](./buying-storage.md#batch-size-breakpoints) below to understand why.
:::

### Selecting a Batch

Any method in `bee-js` which writes data to Swarm requires the batch ID of a valid, usable postage batch with remaining space to upload data. 

The example script below exports a function which looks for the first usable postage batch with remaining space and returns the ID of the batch. 

:::tip notice
This function is used throughout the examples here in the docs.
:::

```javascript
import { Bee } from '@ethersphere/bee-js'

const bee = new Bee('http://localhost:1633')

export async function getBatch(bee, criteriaFn) {
  const batches = await bee.stamp.getAll()
  const matchingBatch = batches.find(criteriaFn)

  if (!matchingBatch) {
    throw new Error('No postage batch matched the provided criteria.')
  }

  return matchingBatch.batchID.toString()
}
```

To use it, save the script to a file called `getBatch.js` so we can import it in our other scripts.

```javascript
import { Bee } from '@ethersphere/bee-js'
import { getBatch } from './getBatch'

const bee = new Bee('http://localhost:1633')

// Define the selection criteria as a named function
function isUsableWithFreeSpace(batch) {
  return batch.usable && batch.remainingSize.toBytes() > 0
}

const batchId = await getBatch(bee, isUsableWithFreeSpace)
```

If you need a batch with specific characteristics (such as a batch with at least 10 GB remaining space or a mutable batch), then you should [inspect](./buying-storage.md#checking-batch-status) your postage batches' status using `bee.stamp.getAll` in order to check if a batch with your desired characteristics exists and return its ID.

### Batch Size Breakpoints

Batches are bought in discrete size intervals. Each interval corresponds to a batch *depth*, and each depth doubles the theoretical volume of the batch.

Only part of a batch's theoretical volume can be filled in practice, because chunks are distributed unevenly across the batch's buckets. The share that can be used is the *effective volume*, and it grows with depth: a depth 17 batch can only use a hundredth of a percent of its theoretical volume, while a depth 34 batch can use almost 90% of it. This is why the per-byte cost of storage falls sharply as batches get bigger.

*The table below reflects the breakpoints `bee-js` uses by default, which are optimized for encrypted uploads with medium erasure coding. Pass the `encryption` and `erasureCodeLevel` arguments to `bee.storage.buy` and `bee.storage.getCost` to use the exact table for a different combination.*

| Depth | Theoretical Volume | Effective Volume | Utilization | Relative Cost / Effective GB |
| ----- | ------------------ | ---------------- | ----------- | ---------------------------- |
| 17    | 536.87 MB          | 40.89 kB         | 0.01%       | 11783x                       |
| 18    | 1.07 GB            | 6.09 MB          | 0.57%       | 158x                         |
| 19    | 2.15 GB            | 102.49 MB        | 4.77%       | 19x                          |
| 20    | 4.29 GB            | 628.91 MB        | 14.64%      | 6.1x                         |
| 21    | 8.59 GB            | 2.38 GB          | 27.71%      | 3.2x                         |
| 22    | 17.18 GB           | 7.07 GB          | 41.15%      | 2.2x                         |
| 23    | 34.36 GB           | 18.24 GB         | 53.09%      | 1.7x                         |
| 24    | 68.72 GB           | 43.04 GB         | 62.63%      | 1.4x                         |
| 25    | 137.44 GB          | 96.50 GB         | 70.21%      | 1.3x                         |
| 26    | 274.88 GB          | 208.52 GB        | 75.86%      | 1.2x                         |
| 27    | 549.76 GB          | 435.98 GB        | 79.30%      | 1.1x                         |
| 28    | 1.10 TB            | 908.81 GB        | 82.66%      | 1.1x                         |
| 29    | 2.20 TB            | 1.87 TB          | 85.04%      | 1.1x                         |
| 30    | 4.40 TB            | 3.81 TB          | 86.63%      | 1.0x                         |
| 31    | 8.80 TB            | 7.73 TB          | 87.88%      | 1.0x                         |
| 32    | 17.59 TB           | 15.61 TB         | 88.73%      | 1.0x                         |
| 33    | 35.18 TB           | 31.43 TB         | 89.33%      | 1.0x                         |
| 34    | 70.37 TB           | 63.15 TB         | 89.74%      | 1.0x                         |

The last column is the cost of one effective gigabyte relative to the cheapest depth in the table. It is derived from the volumes rather than from any particular BZZ price, so it holds regardless of what storage currently costs. Use `bee.storage.getCost` for actual prices.

When purchasing a batch or estimating its price, `bee-js` will round up to the nearest effective volume.

For example, if the `bee.storage.buy` method is used to buy a batch with 1 GB as input, `bee-js` will round up to depth 21 and buy a batch with 2.38 GB effective volume. If 5 GB is used as input, `bee-js` will round up to depth 22 and its 7.07 GB, since 5 GB does not fit into the 2.38 GB that depth 21 offers.

Refer to the [Bee documentation](https://docs.ethswarm.org/docs/concepts/incentives/postage-stamps#effective-utilisation-table) for a more in-depth understanding of batch utilization.


### Utility Classes

#### `Size`

The `Size` class represents a storage size in **bytes**, with helper methods for creating and converting values.

##### Creating a Size instance

The class includes several *static* methods for creating an instance of the `Size` class:

- `Size.fromBytes`
- `Size.fromKilobytes`
- `Size.fromMegabytes`
- `Size.fromGigabytes`
- `Size.parseFromString`

```javascript
import { Size } from '@ethersphere/bee-js'

// Create a Size instance from raw bytes
const sizeA = Size.fromBytes(5000000000)

// Or from gigabytes
const sizeB = Size.fromGigabytes(5) // → 5 GB = 5,000,000,000 bytes

// Or from a human readable string (case insensitive, whitespace ignored)
const sizeC = Size.parseFromString('1.5gb')
```

:::info
`Size` uses 1000 rather than 1024 as the base for unit conversions, which keeps it consistent with the effective utilization table above.
:::

##### Converting and formatting

The class also includes three *instance* methods for getting the value from an existing `Size` instance as either raw bytes, gigabytes, or formatted text:

- `size.toBytes`
- `size.toGigabytes`
- `size.toFormattedString`

```javascript
// Using `sizeB` from the previous example

sizeB.toBytes()          // → 5000000000
sizeB.toGigabytes()      // → 5
sizeB.toFormattedString() // → '5.000 GB'
```


#### `Duration`

The `Duration` class represents a length of time in **seconds**, with helper methods for creating and converting durations in various common time units.

:::tip
All of the helper methods for `Duration` take numbers as input except for `toEndDate` and `fromEndDate`, which both take a [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object as input.
:::

##### Creating a Duration instance

The class includes several *static* methods for creating a `Duration` instance from values like milliseconds, seconds, days, or even from dates:

- `Duration.fromMilliseconds`
- `Duration.fromSeconds`
- `Duration.fromHours`
- `Duration.fromDays`
- `Duration.fromWeeks`
- `Duration.fromYears`
- `Duration.fromEndDate`
- `Duration.parseFromString`

```javascript
import { Duration } from '@ethersphere/bee-js'

// Create a duration of 3 days
const durationA = Duration.fromDays(3)

// Create a duration from now until a future date
const endDate = new Date('2027-04-01T12:00:00Z')
const durationB = Duration.fromEndDate(endDate)

// Or from a human readable string (case insensitive, whitespace ignored)
const durationC = Duration.parseFromString('2 weeks')
```

##### Converting and formatting

The class also includes several *instance* methods for converting a `Duration` instance into different time units or for getting a future date from a starting point:

- `duration.toSeconds`
- `duration.toHours`
- `duration.toDays`
- `duration.toWeeks`
- `duration.toYears`
- `duration.toEndDate`

```javascript
// Using `durationA` from the previous example

durationA.toSeconds()       // → 259200
durationA.toDays()          // → 3
durationA.toEndDate()       // → Date object 3 days from now

// You can also specify a custom starting date
const startDate = new Date('2027-01-01T00:00:00Z')
durationA.toEndDate(startDate) // → Date object 3 days after Jan 1
```



This class is useful when:
- Setting how long data should remain available in Swarm
- Estimating or displaying expiration time for postage batches
- Working with `bee.storage.buy`, `bee.storage.getCost`, or `bee.storage.extendDuration`
