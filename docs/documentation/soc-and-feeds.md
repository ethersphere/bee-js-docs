---
title: SOC and Feeds
id: soc-and-feeds
slug: /soc-and-feeds
sidebar_label: SOC and Feeds
---

## 🚧 Under Construction 🚧
:::caution 🚧 This page is under construction

This section is still being worked on. Check back soon for updates!

:::


import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

:::info Note on Ethereum addresses
This article mentions Ethereum address in multiple sections. Please not that this refers to an Ethereum format account only, and does not indicate the Ethereum blockchain itself. Swarm is built on the Gnosis Blockchain which is a fork of ethereum.
:::


Swarm provides the ability to store content in content-addressed chunks (CAC) whose addresses are derived from the chunk data, or Single Owner Chunks (SOC) whose addresses are derived from the uploader's own public key and chosen identifier. With single owner chunks, a user can assign arbitrary data to an address and attest chunk integrity with their digital signature.

Feeds are a unique feature of Swarm. They constitute the primary use case for single owner chunks. Developers can use Feeds to version revisions of a mutable resource, indexing sequential updates to a topic, publish the parts to streams, or post consecutive messages in a communication channel. Feeds implement persisted pull-messaging and can also be interpreted as a pub-sub system.

Because Feeds are built on top of SOCs, their interfaces are somewhat similar and use common concepts.

## Single Owner Chunks

Bee-js calculates a SOC Swarm reference hash as the keccak256 hash of the concatenation of the  `identifier` and `owner` Ethereum address. The `identifier` is a 32 byte long arbitrary value (by default a hex string or a `Uint8Array`). The `owner` is an Ethereum address that consists of 20 bytes in a format of a hex string or `Uint8Array`.

:::warning SOCs are immutable!
You might be tempted to modify a SOC's content to "update" the chunk. Reuploading of SOC is forbidden in Swarm as it might create uncertain behavior. A Bee node will reject the API call if it finds an already existing SOC for the given address. Either use a different `identifier`, or you might be looking for Feeds as your use case.
:::

### Uploading SOCs

To write a Single Owner Chunk (SOC), use the `makeSOCWriter()` method from the Bee client. This method requires a signer, which can be an instance of `PrivateKey`, a raw Ethereum private key as a hex string (with or without the `0x` prefix), or a `Uint8Array` representing the private key. 

The signer is used to cryptographically sign the chunk, using the same format Ethereum uses for signing transactions.

Once the `SOCWriter` is created, you can upload an SOC by providing a `postageBatchId`, a 32-byte `identifier`, and the `data` payload.


:::info Default `signer`
When you are instantiating `Bee` class you can pass an Ethereum private key as the default signer that will be used if you won't specify it directly for the `makeSOCWriter`.
:::

:::warning Your assets and/or privacy may be at risk
We suggest using ephemeral private keys (e.g. randomly generated) when writing to SOC or Feeds. Never use your real Ethereum private keys here (or in any web applications) directly because it will allow others to sign messages with your kay which may compromise your privacy or lead to the loss of funds stored by that account.
:::

```js
import { Bee, PrivateKey, NULL_IDENTIFIER, Bytes } from "@ethersphere/bee-js"

// Define your Ethereum private key (never use your real private keys in production code)
const privateKey = new PrivateKey('0x634fb5a872396d9693e5c9f9d7233cfa93f395c093371017ff44aa9ae6564cdd')

// Print the identifier and address which can be used to retrieve the SOC
// SOC identifier
console.log("SOC identifier")
console.log(new Bytes(NULL_IDENTIFIER).toHex())

// Ethereum address
console.log("Ethereum address")
console.log(privateKey.publicKey().address().toHex())

// Initialize Bee client with default signer and Swarm node URL
const bee = new Bee('http://localhost:1643', { signer: privateKey })

// Paste your own postage ID here
const postageBatchId = 'f2949db4cfa4f5140ed3ef29f651d189175a8cb9534c992d3c3212b17f0b67f7'

// Create the SOC writer using the default signer
const socWriter = bee.makeSOCWriter()

// The data you want to store in the SOC
const data = 'this is my sample data'

async function uploadSOC() {
  try {
    // Upload the data to the SOC using the postage batch and identifier
    const response = await socWriter.upload(postageBatchId, NULL_IDENTIFIER, data)

    // Log the human-readable reference (hex string)
    console.log("SOC reference:")
    console.log("Reference (Hex):", response.reference.toHex())
  } catch (error) {
    // Handle any errors during the upload
    console.error("Error uploading SOC:", error)
  }
}

// Call the function to write the SOC
uploadSOC()
```
Example output:

```bash
SOC identifier
0000000000000000000000000000000000000000000000000000000000000000
Ethereum address
8d3766440f0d7b949a5e32995d09619a7f86e632
SOC reference:
Reference (Hex): 9d453ebb73b2fedaaf44ceddcf7a0aa37f3e3d6453fea5841c31f0ea6d61dc85
```


In this example:
- `privateKey` defines the identity used to sign the SOC.
- `NULL_IDENTIFIER` is the 32-byte value used as the identifier (can be replaced with any user-defined value).
- `socWriter.upload()` signs and uploads the data, returning a `reference` as confirmation.

The `identifier` and Ethereum address together determine the SOC address and must match exactly when retrieving the chunk later. The returned `reference` is included as part of the upload response, but unlike non-SOC uploads, the returned reference is not used to retrieve the chunk, rather the `identifier` and Ethereum address are used (see next section for example usage). 

## Reading SOCs

To retrieve a previously uploaded SOC, you must know the Ethereum address of the owner (the signer used to upload the SOC) and the exact 32-byte `identifier` used during upload. These two values uniquely determine the SOC address in Swarm.

To download a SOC in Bee-JS, use the `makeSOCReader()` method. This method takes the owner's Ethereum address (as a `EthAddress` instance, a hex string, or a `Uint8Array`) and returns a `SOCReader` object. You can then call `.download(identifier)` on the reader to retrieve the chunk's data.

:::info SOC address is derived from the identifier and owner
Unlike uploads using content addressed chunks which are retrieved by their Swarm reference hash, SOCs are retrieved using the combination of `identifier` and `owner`, not their Swarm reference hash.
:::

```js
import { Bee, Size, NULL_IDENTIFIER } from "@ethersphere/bee-js"

// Initialize Bee client pointing to the Swarm node
const bee = new Bee('http://localhost:1633')

// The owner's Ethereum address (20 bytes)
const owner = '8d3766440f0d7b949a5e32995d09619a7f86e632'

// Create a SOC reader object bound to the owner
const socReader = bee.makeSOCReader(owner)

async function readSOC() {
  try {
    // Download the SOC using the identifier
    const response = await socReader.download(NULL_IDENTIFIER)

    // Log the data
    console.log("SOC Data:", response.payload.toUtf8())

    // Optionally, you can use the data in other ways (e.g., process, display, etc.)
  } catch (error) {
    // Handle any errors during download
    console.error("Error downloading SOC:", error)
  }
}

// Call the function to read the SOC
readSOC()
```

In this example:
- The `owner` is the Ethereum address used to sign the SOC.
- `NULL_IDENTIFIER` is the same default identifier used in the earlier upload example.
- The returned payload is a `Bytes` object, and `.toUtf8()` converts it to a human-readable string.

Make sure the `owner` and `identifier` values match exactly what was used during upload — any mismatch will result in the chunk not being found.


## Feeds

Feeds are an abstraction built on top of SOCs to provide mutable resources on the otherwise immutable data types that Swarm supports.

One of the most common use cases for feeds is to store mutable data in an immutable address. For example, when hosting a website on Swarm, we may want its address stored in ENS, but we don't want to pay for changing the reference every time the site is updated.

A feed is defined by its `owner` (see above), a `topic` (32 bytes arbitrary data as a hex string or `Uint8Array`), and a `type`. `type` defines how the updates and lookup of the feed index are made (currently only the `sequence` type is supported).

The publisher is the owner of the feed, and only they can post updates to the feed. Posting an update requires (1) constructing the identifier from the topic and the correct index and (2) signing it concatenated together with the hash of the arbitrary content of the update.

Conversely, users can consume a feed by retrieving the chunk by its address. Retrieving an update requires the consumer to construct the address from the owner’s address and the identifier. To calculate the identifier, they need the topic and the appropriate index. For this, they need to know the indexing scheme.

Feeds enable Swarm users to represent a sequence of content updates. The content of the update is the payload that the feed owner signs against the identifier. The payload can be a swarm reference from which the user can retrieve the associated data.

### Topic

In Swarm, `topic` is any arbitrary 32-byte long array. This allows for the selection of a unique topic for each application, which along with someone's (or something's) address, allow for the feed to be discovered. Also, this can be the hash of a human-readable string, specifying the topic and optionally the subtopic of the feed. There is a helper function provided for that:

```js
const topic = bee.makeFeedTopic('my-dapp.eth/outbox')
```

### High level JSON API

Many applications are storing or manipulating data in JSON. bee-js has convenience high level API to use feeds with JSON objects.
It consists of two methods:

 - `setJsonFeed` method to set JSON compatible data to feed
 - `getJsonFeed` method to get JSON compatible data (and parse them) from feed

:::info Bee's instance signer
You can pass a `Signer` (or compatible data) into `Bee` class constructor, which then
will be used as default `Signer`.
:::

```js
const postageBatchId = await bee.createPostageBatch("100", 17)

await bee.setJsonFeed(
  postageBatchId,
  'some cool arbitraty topic', 
  { some: ['cool', { json: 'compatible' }, 'object']}, 
  { signer: '0x634fb5a872396d9693e5c9f9d7233cfa93f395c093371017ff44aa9ae6564cdd' }
)

const data = await bee.getJsonFeed(
  'some cool arbitraty topic', 
  { signer: '0x634fb5a872396d9693e5c9f9d7233cfa93f395c093371017ff44aa9ae6564cdd' }
)

console.log(data)
// Prints: { some: ['cool', { json: 'compatible' }, 'object']}
```

### Low level API

Low level API is an API that is more flexible in its usage, but requires better understanding and mainly more method calls.

#### Reading feeds

To read data from a feed, we need to make a reader object for a specific `type`, `topic` and `owner`, then we can download the latest update containing a reference.

```js
const topic = '0000000000000000000000000000000000000000000000000000000000000000'
const owner = '0x8d3766440f0d7b949a5e32995d09619a7f86e632'
const feedReader = bee.makeFeedReader('sequence', topic, owner)
const feedUpdate = await feedReader.download()
console.log(feedUpdate.reference) // prints the latest reference stored in the feed
```

#### Writing feeds

When writing a feed, typically an immutable content is uploaded first, and then its reference is updated in the feed. The `signer` here is the same as with [writing the SOCs](#writing-socs) (with the same caveats!).

```js
const postageBatchId = await bee.createPostageBatch("100", 17)
const data = new Uint8Array([1, 2, 3])
const reference = await bee.uploadData(data)
const topic = '0000000000000000000000000000000000000000000000000000000000000000'
const signer = '0x634fb5a872396d9693e5c9f9d7233cfa93f395c093371017ff44aa9ae6564cdd'
const feedWriter = bee.makeFeedWriter('sequence', topic, signer)
const response = await feedWriter.upload(postageBatchId, reference)
```

### Using feed manifest

One of the most common use cases for feeds is to store mutable data in an immutable address. For example, when hosting a website on Swarm, we may want its address stored in ENS, but we don't want to pay for changing the reference every time the site is updated.

Swarm provides a feature called "feed manifests" for this use case. It is a content-addressed chunk that stores a feed's definition (the `type`, the `topic`, and the `owner`). When it is looked up using the `bzz` endpoint, Swarm recognizes that it refers to a feed and continues the lookup according to the feed parameters.

```js
const postageBatchId = await bee.createPostageBatch("100", 17)
const topic = '0000000000000000000000000000000000000000000000000000000000000000'
const owner = '0x8d3766440f0d7b949a5e32995d09619a7f86e632'
const reference = bee.createFeedManifest(postageBatchId, 'sequence', topic, owner)
```

This creates the feed manifest chunk on Swarm. You can use the returned reference to look up with the `/bzz` endpoint or use it with ENS.
