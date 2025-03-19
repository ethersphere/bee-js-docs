---
title: Buying Storage
id: storage
slug: /storage
sidebar_label: Buying Storage
---

<!--
* A complete section dedicated to working with stamps
* getStorageCost function to calculate BZZ based on gigabytes and Duration [Gist](https://gist.github.com/Cafe137/d618a4ce1b16ee21293768fd7fa3ed95)
* buyStorage function to provide gigabytes and Duration [Gist](https://gist.github.com/Cafe137/fd3950bc9e378fea3683fec7e914d378)
* getSizeExtensionCost and extendStorageSize which was previously dilute
* getDurationExtensionCost and extendStorageDuration which was previously topup
* getAllPostageBatch to list and review stamps
-->

## Buying Storage

Storage on Swarm is rented by purchasing "postage stamp batches". Each batch entitles its owner to store a certain amount of storage space on Swarm for the lifetime of the batch. The cost of the batch increases with the storage size and duration. 

### Checking Storage Costs

We can use the `Bee.getStorageCost` method along with our desired storage `Size` (amount of data to upload) and `Duration` (the batch lifetime) to get an estimated storage cost:

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

Storage can be purchased using the `Bee.buyStorage` method:

```javascript
import { Bee, Size, Duration } from "@ethersphere/bee-js"

const bee = new Bee('http://localhost:1633')

// Purchase a batch to store 1 GB 
const batchId = await bee.buyStorage(Size.fromGigabytes(1), Duration.fromDays(1))
```

:::tip
Although we specified a 1 GB upload size, the `bee.buyStorage` method purchases batches with a minimum `Size` of ~4.93 GB, as we will see when checking the storage status in the next section. 
:::

The method will cause the Bee node to issue a transaction on Gnosis Chain for the purchase of a postage batch for the given `Size` and `Duration`, and then save the postage batch data locally. The transaction usually only takes a few seconds but may take up to a minute.

Once the purchase transaction is complete, the method will return a unique postage batch id.

The lifetime of the batch starts counting down from the moment of purchase. The batch in the example above will expire in about 24 hours.

### Checking Storage Status

You can check the status of purchased batches using the `Bee.getAllPostageBatch` method:


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

- `usage` - indicates how much of the batch has been used as a value between `1` and `0`.
- `usageText` - converts the `usage` value to a percentage value rounded to the nearest whole number which is then converted to text.
- `size` -  the amount of data in bytes which the batch can safely store.
- `remainingSize` - the amount of date in bytes remaining from `size` which is still available to be used.
- `duration` - an estimate of the remaining batch lifetime in seconds.

For an explanation of the remaining values, refer to the "Advanced" section below.

:::tip
Note that although 1 GB was specified as input for the `bee.buyStorage` method in the previous section, `bee.buyStorage` enforces a minium value of ~4.93 GB, which we can see from the `size` value in the terminal output from the `Bee.getAllPostageBatch` method above.
:::

The `size` value represents how much the batch can safely store, while `remainingSize` shows how much of that is currently remaining after uploads.

### Extending Storage Size

If we need to upload more data, then we can extend a batch's storage size using the `Bee.extendStorageSize` method.

:::tip
As mentioned above, the per byte cost decreases as the storage size of a batch increases, so it's more cost effective to increase the storage size an existing batch rather than buying a new, smaller batch.

The exception to this rule is if we no longer wish to store the previously uploaded data. In that case we SHOULD buy an all new postage batch, as extending the size of an existing batch would require us to continue paying for the already uploaded data which we no longer need.
:::

First we check the cost to extend the storage size with the `Bee.getSizeExtensionCost` method:

```javascript
import { Bee, Size } from "@ethersphere/bee-js"

const bee = new Bee('http://localhost:1633')

// Request all local postage batches
const batches = await bee.getAllPostageBatch()

const batchId = batches[1].batchID

// Instantiate a Size instance for 36 GB with newSize
const newSize = Size.fromGigabytes(36)

// Return an instance of the BZZ class
const sizeExtentionCost = await bee.getSizeExtensionCost(batchId, newSize)

// Use the BZZ.toDecimalString instance method to convert to a readable BZZ string
const cost = sizeExtentionCost.toDecimalString()

console.log(cost)
```


## Advanced Topics



### Mutable Uploads

Storage batches are immutable by default. As the name suggests, data uploaded by an immutable batch can not be modified. Once an immutable batch is fully utilized, no more data can be uploaded with the batch. 

With mutable batches however, once the batch has reached full utilization, further uploads will cause the oldest data uploaded with that batch to start being replaced with the newer data.

Mutable batches are a flexible tool which can be used to power use cases such as real-time messaging or live streaming video. 

