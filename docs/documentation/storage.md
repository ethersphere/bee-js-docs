---
title: Buying Storage
id: storage
slug: /storage
sidebar_label: Buying Storage
---

## Buying Storage

Storage on Swarm is rented by purchasing "postage stamp batches". Each batch entitles its owner to store a certain amount of storage space on Swarm for the lifetime of the batch. The cost of the batch increases with the storage size and duration. 


### Batch Size Breakpoints

Batches are bought in discrete size intervals as shown in the table below.

As the effective volume increases, so does the discount percentage, which eventually converges to around 68% with larger volumes. 

*Costs are recorded at time of writing and are subject to change. Use the `bee.getStorageCost` method for current price.*

| Breakpoint         | Effective Volume | xBZZ / day / GB Cost | % Discount |
|--------------------|------------------|------------------------|-------------|
| 1                  | 4.93 GB          | 0.066                  | 0%          |
| 2                  | 17.03 GB         | 0.038                  | 42%         |
| 3                  | 44.21 GB         | 0.030                  | 55%         |
| 4                  | 102.78 GB        | 0.025                  | 62%         |
| 5                  | 225.86 GB        | 0.023                  | 65%         |
| 6                  | 480.43 GB        | 0.022                  | 67%         |
| 7                  | 1.00 TB          | 0.021                  | 68%         |
| 8                  | 2.06 TB          | 0.021                  | 68%         |

When purchasing a batch / estimating batch price, `bee-js` will round up to the nearest effective volume.

For example, if the `bee.buyStorage` method is used to buy a batch with 1 GB as input, `bee-js` will round up to the first breakpoint and buy a batch with 4.93 GB effective volume. If 5 GB is used as input, then `bee-js` will round up to the second breakpoint of 17.03 GB since 5 GB is larger than the first breakpoint of 4.93 GB.  

Refer to the [Bee documentation](https://docs.ethswarm.org/docs/concepts/incentives/postage-stamps#effective-utilisation-table) for a more in-depth understanding of batch utilization.

### Checking Storage Costs 

We can use the `bee.getStorageCost` method along with our desired storage `Size` (amount of data to upload) and `Duration` (the batch lifetime) to get an estimated storage cost:

:::tip
The per byte storage cost decreases as the storage `Size` of the batch increases, so it is more cost effective to purchase a single large batch rather than multiple smaller ones.

Costs remain constant with respect to changes in total `Duration`, however, so there is no discount for purchasing batches with longer lifetime. 
:::

```javascript
import { Bee, Size, Duration } from "@ethersphere/bee-js"

const bee = new Bee('http://localhost:1633')

// Get cost in BZZ to store 4 GB for ~1 day
const bzz = await bee.getStorageCost(Size.fromGigabytes(1), Duration.fromDays(1))

// Prints "0.325" given the storage cost of 44908 PLUR at time of writing
console.log(bzz.toSignificantDigits(3)) 
```

:::warning
The actual lifetime of the batch may be higher or lower than the specified `Duration` due to Swarm's dynamic pricing model.

The amount that the price can change each day is limited, however, so you don't need to worry about a rapid increase in price causing your batch to unexpectedly expire over the course of a few hours.      

You can view the current price of storage on [Swarmscan](https://swarmscan.io/).
:::

### Purchasing Storage

Storage can be purchased using the `bee.buyStorage` method:

```javascript
import { Bee, Size, Duration } from "@ethersphere/bee-js"

const bee = new Bee('http://localhost:1633')

// Purchase a batch to store 1 GB 
const batchId = await bee.buyStorage(Size.fromGigabytes(1), Duration.fromDays(1))
```

The method will cause the Bee node to issue a transaction on Gnosis Chain for the purchase of a postage batch for the given `Size` and `Duration`, and then save the postage batch data locally. The transaction usually only takes a few seconds but may take up to a minute.

Once the purchase transaction is complete, the method will return a unique postage batch id.

The lifetime of the batch starts counting down from the moment of purchase. The batch in the example above will expire in about 24 hours.

### Checking Batch Status

You can check the status of purchased batches using the `bee.getAllPostageBatch` method:


```javascript
import { Bee } from "@ethersphere/bee-js"

const bee = new Bee('http://localhost:1633')

// Request all local postage batches
const batches = await bee.getAllPostageBatch()

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
    depth: 22,
    amount: '931958784',
    bucketDepth: 16,
    blockNumber: 39105960,
    immutableFlag: true,
    usage: 0,
    usageText: '0%',
    size: Size { bytes: 4925468496 },
    remainingSize: Size { bytes: 4925468496 },
    theoreticalSize: Size { bytes: 17179869184 },
    duration: Duration { seconds: 84348 }
  }
]
```

We can disregard many of these values since they are only needed for advanced usage. There are several values we do need to pay attention to however:

- `usable` - it takes a short time for a batch to become usable (usually less than a minute) after purchase. Once usable, `usable` will change from `false` to `true`.
- `usage` - indicates how much of the batch has been used as a value between `1` and `0`.
- `usageText` - converts the `usage` value to a percentage value rounded to the nearest whole number which is then converted to text.
- `size` -  the amount of data in bytes which the batch can safely store.
- `remainingSize` - the amount of date in bytes remaining from `size` which is still available to be used.
- `duration` - an estimate of the remaining batch lifetime in seconds.

For an explanation of the remaining values, refer to the "Advanced" section below.

:::tip
Note that although 1 GB was specified as input for the `bee.buyStorage`, the `size` value is ~4.93 GB. Refer to the [section about batch sizes](/docs/storage/#batch-size-breakpoints) above to understand why.
:::


### Extending Storage Size

If we need to upload more data, then we can extend a batch's storage size using the `bee.extendStorageSize` method. Note that in order to increase the batch size using the `extendStorageSize` method, you must choose a size which is above the current [batch's size breakpoint](/docs/storage/#batch-size-breakpoints).

:::tip
As mentioned [above](/docs/storage/#batch-size-breakpoints), the per byte cost decreases as the storage size of a batch increases, so it's more cost effective to increase the storage size an existing batch rather than buying a new, smaller batch.

The exception to this rule is if we no longer wish to store the previously uploaded data. In that case we SHOULD buy an all new postage batch, as extending the size of an existing batch would require us to continue paying for the already uploaded data which we no longer need.
:::

First we estimate the cost to extend the storage size with the `bee.getSizeExtensionCost` method:

```javascript
import { Bee, Size } from "@ethersphere/bee-js"

const bee = new Bee('http://localhost:1633')

// Request all local postage batches
const batches = await bee.getAllPostageBatch()

const batchId = batches[0].batchID


// Instantiate a Size instance for 36 GB with newSize
const newSize = Size.fromGigabytes(5)

// Return an instance of the BZZ class
const sizeExtentionCost = await bee.getSizeExtensionCost(batchId, newSize)

// Use the BZZ.toDecimalString instance method to convert to a readable BZZ string
const cost = sizeExtentionCost.toDecimalString()

// Prints current cost to increase size
console.log(cost)
```

If the price is acceptable, then we can proceed to extend the batch size using `bee.extendStorageSize`:

```javascript
import { Bee, Size } from "@ethersphere/bee-js"

const bee = new Bee('http://localhost:1633')

// Request all local postage batches
const batches = await bee.getAllPostageBatch()

// Print results to the terminal
console.log(batches)

// Get batch ID of first batch in list
const batchId = batches[0].batchID

// Instantiate a Size instance for 36 GB with newSize
const newSize = Size.fromGigabytes(5)

// Extends batch size and returns the batch ID 
const result = await bee.extendStorageSize(batchId, newSize)

// Log result if successful 
console.log(result)
```

We can check that we successfully extended the batch size by [checking batch status](/docs/storage/#checking-storage-status):

```javascript
[
  {
    batchID: BatchId { bytes: [Uint8Array], length: 32 },
    utilization: 0,
    usable: true,
    label: '',
    depth: 23,
    amount: '1714407552',
    bucketDepth: 16,
    blockNumber: 39145214,
    immutableFlag: true,
    usage: 0,
    usageText: '0%',
    size: Size { bytes: 17028686336 },
    remainingSize: Size { bytes: 17028686336 },
    theoreticalSize: Size { bytes: 34359738368 },
    duration: Duration { seconds: 94453 }
  }
]
```


Here we can see that our batch `size` was successfully extended from ~4.93 GB to ~17.03 GB. 

*See [above](/docs/storage/#batch-size-breakpoints) to understand why `size` was extended to ~17.03 even though 5 GB was used as input.*


### Extending Storage Duration

If we want our data to remain available on Swarm for a longer period of time, we can extend the duration of a postage batch using the `bee.extendStorageDuration` method.

Extending the duration means adding more BZZ to the batch so that the data stays alive longer on the network.

Before extending the duration, we can estimate the cost using the `bee.getDurationExtensionCost` method:

```javascript
import { Bee, Duration } from "@ethersphere/bee-js"

const bee = new Bee('http://localhost:1633')

// Request all local postage batches
const batches = await bee.getAllPostageBatch()

// Select the batch ID of the first batch in the list
const batchId = batches[0].batchID

// Create a new Duration instance for 0.01 days
const additionalDuration = Duration.fromDays(.01)

// Estimate the cost of extending the duration
const durationExtensionCost = await bee.getDurationExtensionCost(batchId, additionalDuration)

// Convert the BZZ value into a readable string
const cost = durationExtensionCost.toDecimalString()

// Print the estimated cost
console.log(cost)
```

Once we know the cost and decide to proceed, we can use `bee.extendStorageDuration` to extend the batch duration:

```javascript
import { Bee, Duration } from "@ethersphere/bee-js"

const bee = new Bee('http://localhost:1633')

// Request all local postage batches
const batches = await bee.getAllPostageBatch()

// Select the batch ID of the first batch in the list
const batchId = batches[0].batchID

// Create a Duration instance for 0.1 additional days
const additionalDuration = Duration.fromDays(.01)

// Extend the duration of the batch
const result = await bee.extendStorageDuration(batchId, additionalDuration)

// Log the result
console.log(result)
```

We can verify that the extension was successful by [checking the batch status](/docs/storage/#checking-storage-status). You'll notice the `duration` value on the batch will have increased, reflecting the newly extended storage time:

```javascript
[
  {
    batchID: BatchId { bytes: [Uint8Array], length: 32 },
    utilization: 0,
    usable: true,
    label: '',
    depth: 23,
    amount: '1722164236',
    bucketDepth: 16,
    blockNumber: 39145214,
    immutableFlag: true,
    usage: 0,
    usageText: '0%',
    size: Size { bytes: 17028686336 },
    remainingSize: Size { bytes: 17028686336 },
    theoreticalSize: Size { bytes: 34359738368 },
    duration: Duration { seconds: 94132 }
  }
]
```

Here we can see that the `duration` value (measured in seconds) has increased, confirming that the batch will now remain alive on the Swarm network for longer.

:::tip
If you're storing important or long-lived data, it's a good idea to periodically check and extend the duration of your batches to ensure your data doesn't expire unexpectedly.
:::


### Estimating Combined Size and Duration Extension Cost

If we want to **increase both the storage size and duration** of a postage batch, we can use the `Bee.getExtensionCost` method to estimate the **total cost** of the extension. This is useful when you're planning to keep data alive for longer *and* want to increase capacity for uploading more data at the same time.

The `getExtensionCost` method combines both aspects — size and duration — into a single cost calculation, making it easier to understand the overall expense upfront.

Here’s how to use it:

```javascript
import { Bee, Size, Duration } from "@ethersphere/bee-js"

const bee = new Bee('http://localhost:1633')

// Request all local postage batches
const batches = await bee.getAllPostageBatch()

// Choose a batch to extend
const batchId = batches[0].batchID

// Define a new desired size (e.g., 10 GB)
const newSize = Size.fromGigabytes(10)

// Define a new additional duration (e.g., 14 days)
const additionalDuration = Duration.fromDays(14)

// Estimate total BZZ cost for extending both size and duration
const totalCost = await bee.getExtensionCost(batchId, newSize, additionalDuration)

// Convert to a readable string
const cost = totalCost.toDecimalString()

// Print total estimated cost
console.log(cost)
```

This method helps you determine if it's more economical to **extend** an existing batch or **create a new one**, especially when both dimensions—storage and time—need to grow.

:::tip
If you're unsure whether to extend a batch or start fresh, compare the output of `getExtensionCost` with the cost of a new batch using the [Postage Stamp Pricing Guide](/docs/storage/#batch-size-breakpoints). In many cases, extending is cheaper, especially for larger and longer-lived batches.
:::

If you're happy with the cost, you can then proceed to extend the **size** and **duration** individually by calling `extendStorageSize` and `extendStorageDuration` as shown in the previous sections.


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