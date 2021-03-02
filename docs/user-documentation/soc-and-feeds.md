---
title: SOC and Feeds
id: soc-and-feeds
slug: /soc-and-feeds
sidebar_label: SOC and Feeds
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

Swarm provides the ability to store content in content-addressed chunks or Single Owner Chunks (SOC). With single owner chunks, a user can assign arbitrary data to an address and attest chunk integrity with their digital signature.

Feeds are a unique feature of Swarm. They constitute the primary use case for single owner chunks. Feeds can be used for versioning revisions of a mutable resource, indexing sequential updates to a topic, publish the parts to streams, or post consecutive messages in a communication channel to name but a few. Feeds implement persisted pull-messaging and can also be interpreted as a pub-sub system.

Because Feeds are built on top of SOCs, their interfaces in Bee is somewhat similar and they are using common concepts.

## Single Owner Chunks

The address of an SOC is calculated as the hash of an `identifier` and `owner`. The `identifier` is a 32 bytes long arbitrary data, usually expected as a hex string or in a `Uint8Array` type. The `owner` is the Ethereum address of the owner of the chunk, which is 20 bytes expected as a hex string or in a `Uint8Array` type.

### Reading SOCs

In order to read data from an SOC we need to make a reader object for a certain `owner`, then we can download the data with the provided chunk `identifier`.

```js
const owner = '0x8d3766440f0d7b949a5e32995d09619a7f86e632'
const socReader = bee.makeSOCReader(owner)
const identifier = '0000000000000000000000000000000000000000000000000000000000000000'
const soc = await socReader.download(identifier)
const data = soc.payload()
```

### Writing SOCs

When writing an SOC, first we need to make a writer object. Because we need to sign the chunk we need to pass in a `signer` object. The `signer` object can be either an Ethereum private key (as a hex string or `Uint8Array` type) or it can be an instance of the `Signer` interface. The `Signer` interface can be used for integration with 3rd party Ethereum wallet applications, because Swarm uses the same format for signing chunks that Ethereum uses for signing transactions.

```ts
type SyncSigner = (digest: Uint8Array) => Signature
type AsyncSigner = (digest: Uint8Array) => Promise<Signature>

/**
 * Interface for implementing Ethereum compatible signing.
 *
 * @property sign     The sign function that can be sync or async
 * @property address  The ethereum address of the signer
 */
export type Signer = {
  sign: SyncSigner | AsyncSigner
  address: EthAddress
}
```

:::warning Your communication privacy may be at risk
We suggest to use either ephemeral private keys (e.g. randomly generated) or the `Signer` interface when writing to SOC or Feeds. Never use your real Ethereum private keys here (or in any web applications really) directly because you may lose your funds stored on it.
:::

Using the writer interface is similar to using the reader:

```js
const signer = '0x634fb5a872396d9693e5c9f9d7233cfa93f395c093371017ff44aa9ae6564cdd'
const socWriter = bee.makeSOCWriter(signer)
const identifier = '0000000000000000000000000000000000000000000000000000000000000000'
const data = new Uint8Array([1, 2, 3])
const response = await socWriter.upload(identifier, data)
```

## Feeds

Feeds are an abstraction built on top of SOCs to provide mutable resources on the otherwise immutable data types that Swarm supports.

A feed is defined by its `owner` (see above), a `topic` (which is 32 bytes arbitrary data, usually expected as a hex string or in a `Uint8Array` type) and a `type`. `type` defines how the updates and lookup of the feed index are made (currently only the `sequence` type is supported).

Publishers are the single owners of feed chunks and are the only ones able to post updates to their feed. Posting an update requires (1) constructing the identifier from the topic and the correct index, and (2) signing it concatenated together with the hash of the arbitrary content of the update.

Conversely, users can consume a feed by retrieving the chunk by its address. Retrieving an update requires the consumer to construct the address from the owner’s public key and the identifier. To calculate the identifier they need the topic and the appropriate index. For this they need to know the indexing scheme.

Feeds enable Swarm users to represent a sequence of content updates. The content of the update is the payload that the feed owner signs against the identifier. The payload can be a swarm reference from which the user can retrieve the associated data.

### Topic

In Swarm `topic` is a 32-byte long arbitrary byte array. It's possible to choose an arbitrary topic for each application and then knowing someone's (or something's) address it's possible to find their feeds. Also this can be the hash of one or more human readable strings, specifying the topic and optionally the subtopic of the feed. There is a helper function provided for that:

```js
const topic = bee.makeFeedTopic('my-dapp.eth/outbox')
```

### Reading feeds

In order to read data from a feed we need to make a reader object for a certain `type`, `topic` and `owner`, then we can download the latest update containing a reference.

```js
const topic = '0000000000000000000000000000000000000000000000000000000000000000'
const owner = '0x8d3766440f0d7b949a5e32995d09619a7f86e632'
const feedReader = bee.makeFeedReader('sequence', topic, owner)
const feedUpdate = await feedReader.download()
console.log(feedUpdate.reference) // prints the latest reference stored in the feed
```

### Writing feeds

When writing a feed, typically an immutable content is uploaded first and then its reference is updated in the feed. The `signer` here is the same as with [writing the SOCs](#writing-socs) (with the same caveats!).

```js
const data = new Uint8Array([1, 2, 3])
const reference = await bee.uploadData(data)
const topic = '0000000000000000000000000000000000000000000000000000000000000000'
const signer = '0x634fb5a872396d9693e5c9f9d7233cfa93f395c093371017ff44aa9ae6564cdd'
const feedWriter = bee.makeFeedWriter('sequence', topic, signer)
const response = await feedWriter.upload(reference)
```

### Using feed manifest

One of the most common use cases for feeds is to store mutable data in an immutable address. For example, when hosting a website to Swarm, we may want its address stored in ENS but we don't want to pay for changing the reference every time the site is updated.

For this Swarm provides a feature called `feed manifests`. It is a content addressed chunk which stores the definition of a feed (the `type`, the `topic` and the `owner`) and when it is looked up on the `bzz` endpoint, Swarm recognizes that it refers to a feed and continues the lookup according to the parameters of the feed.

```js
const topic = '0000000000000000000000000000000000000000000000000000000000000000'
const owner = '0x8d3766440f0d7b949a5e32995d09619a7f86e632'
const reference = bee.createFeedManifest('sequence', topic, owner)
```

This creates the feed manifest chunk on Swarm. You can use the returned reference to look up with the `/bzz` endpoint or use it with ENS.
