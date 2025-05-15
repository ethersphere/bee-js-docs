---
title: SOC and Feeds
id: soc-and-feeds
slug: /soc-and-feeds
sidebar_label: SOC and Feeds
---


import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

Swarm provides the ability to store content in content-addressed [chunks](https://docs.ethswarm.org/docs/concepts/DISC/#content-addressed-chunks-and-single-owner-chunks) (CAC) whose addresses are derived from the chunk data, or Single Owner Chunks (SOC) whose addresses are derived from the uploader's address and chosen identifier. With single owner chunks, a user can assign arbitrary data to an address and attest chunk integrity with their digital signature.

Feeds are a unique feature of Swarm which simulate the publishing of mutable content on Swarm's immutable storage. ***Feeds constitute the primary use case for SOCs.*** Developers can use Feeds to version revisions of a mutable resource by indexing sequential updates to a topic at predictably calculated addresses. Because Feeds are built on top of SOCs, their interfaces are somewhat similar and use common concepts.


## Requirements

Interactions with SOC and feeds requires the following:

* A fully initialized Bee light node running with fully synced postage batch data. (Running at `http://localhost:1633` by default)
* A valid postage batch ID.
* An Ethereum-compatible private key to sign updates. Using your node or blockchain account wallet's private key is strongly discouraged. Using a dedicated key for SOC / feeds is recommended. 

## Single Owner Chunks

bee-js calculates a SOC Swarm reference hash as the keccak256 hash of the concatenation of the  `identifier` and `owner` Ethereum address. The `identifier` is a 32 byte long arbitrary value (by default a hex string or a `Uint8Array`). The `owner` is an Ethereum address that consists of 20 bytes in a format of a hex string or `Uint8Array`.

:::info
SOCs are powerful and flexible low-level feature which provide the foundation upon which higher level abstractions such as [GSOC](/docs/gsoc/) and [feeds](/docs/soc-and-feeds/#feeds) are built. For most common use cases developers are recommended to use these higher level abstractions rather than interacting directly with SOCs themselves.
:::

:::warning SOCs are immutable!
You might be tempted to modify a SOC's content to "update" the chunk. Reuploading of an SOC is discouraged as its behavior is undefined. Either use a different `identifier`, or you might be looking for feeds if you need to perform multiple updates to the same content.
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

// Define your Ethereum private key (don't use your node's or real wallet's private keys)
const privateKey = new PrivateKey('0x634fb5a872396d9693e5c9f9d7233cfa93f395c093371017ff44aa9ae6564cdd')

// Print the identifier and address which can be used to retrieve the SOC
console.log("SOC identifier")
console.log(new Bytes(NULL_IDENTIFIER).toHex())

// Print Ethereum address
console.log("Ethereum address")
console.log(privateKey.publicKey().address().toHex())

// Initialize Bee client with default signer and Swarm node URL
const bee = new Bee('http://localhost:1643', { signer: privateKey })

// Replace with your own valid postage batch ID here
const postageBatchId = 'f2949db4cfa4f5140ed3ef29f651d189175a8cb9534c992d3c3212b17f0b67f7'

// Create the SOC writer
const socWriter = bee.makeSOCWriter(privateKey)

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
- `privateKey` is used to initialize the writer as `socWriter` which is used to sign the SOC.
- `NULL_IDENTIFIER` is the 32-byte value used as the identifier (can be replaced with any user-defined value).
- `socWriter.upload()` signs and uploads the data, returning a `reference` as confirmation.

The `identifier` and Ethereum address together determine the SOC address and must match exactly when retrieving the chunk later. The returned `reference` is included as part of the upload response, but unlike non-SOC uploads, the returned reference is not used to retrieve the chunk, rather the `identifier` and Ethereum address are used (see next section for example usage). 

### Retrieving SOCs

To retrieve a previously uploaded SOC, you must know the Ethereum address of the owner (the signer used to upload the SOC) and the exact 32-byte `identifier` used during upload. These two values uniquely determine the SOC address in Swarm.

To download a SOC in bee-js, use the `makeSOCReader()` method. This method takes the owner's Ethereum address (as a `EthAddress` instance, a hex string, or a `Uint8Array`) and returns a `SOCReader` object. You can then call `.download(identifier)` on the reader to retrieve the chunk's data.

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

Feeds are an abstraction built on top of Single Owner Chunks (SOCs) that **simulate mutable content** in Swarm. They enable sequenced updates over time while maintaining a stable access point. Feeds are ideal for dynamic content like apps, messages, or websites. Each update is stored in a new immutable chunk at a deterministically calculated address.

> Although feeds appear "mutable," no data is ever modified—new updates are simply written to new indexes.

Similar to how an SOC is defined by an `owner` and `identifier`, a feed is defined by:

* `owner`: an Ethereum-compatible address
* `topic`: a unique 32-byte identifier 

### Concepts

* **Feed Writing**: Publishers sign and write updates associated with specific topics to specific indices using their private key.

* **Append-Only Behavior and Index Resolution**: Feeds are typically used in an append-only fashion, though skipping indices is possible. However, the latest update is resolved as the highest *consecutive* index. Updates at non-consecutively written indices must be retrieved explicitly.

* **No Overwriting**: Each index can be written only once. Updates are permanent.

* **Feed Reading**: Readers resolve updates using the `owner` and `topic`. By default, if no index is specified they fetch the latest consecutively written index.

* **Payloads**: Feed payloads include strings, JSON, or Swarm references. Payload size is limited to a single 4 KB chunk. 



### Creating and Updating Feeds Using Topics

This script demonstrates how to create two distinct feeds using different topics and update them using two methods: `uploadPayload()` and `upload()`.

* **`upload()`**: Used for uploading references to other content on Swarm.
* **`uploadPayload()`**: Directly stores an arbitrary data payload in the feed.

Although it is possible to update feeds with an arbitrary data payload using `uploadPayload()`, for most use cases the content should be uploaded separately (such as with `bee.uploadFile()`), and the feed will be updated with the reference of that upload using the `upload()` method.

The script below performs the following steps:

1. Initializes the Bee client and derives the feed owner address from a private key.
2. Uses the `uploadPayload()` method to upload a plain text string as a **payload update** to the feed with topic `"payload-update"`.
3. Uploads the same string as a file to Swarm and obtains a reference.
4. Uses the `upload()` method to upload the obtained reference as a **reference update** to the feed with topic `"reference-update"`.

```js
import { Bee, Topic, PrivateKey } from '@ethersphere/bee-js'

const BEE_URL = 'http://localhost:1643'

// Make sure to replace with a valid batch ID
const POSTAGE_BATCH_ID = 'c119705f257c0015a062b17929e3ca3269e158231324707f2ea6e72c5c9f9b78'

// Any Ethereum style private key can be used, ideally dedicated to this feed only. Using your node or wallet's key is strongly discouraged.
const privateKey = new PrivateKey('0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef')
const bee = new Bee(BEE_URL)
const owner = privateKey.publicKey().address()

// This owner address can be shared along with the topic to enable anyone to retrieve updates from the feed
console.log('Feed owner address:')
console.log(owner.toHex())

async function run() {
  const message = 'This is a test announcement.'
  const topic1 = Topic.fromString('payload-update')

  // The writer is constructed from the topic and private key, and can be used for writing feed updates (it also supports reading from feeds)
  const writer1 = bee.makeFeedWriter(topic1, privateKey)

  await writer1.uploadPayload(POSTAGE_BATCH_ID, message)
  console.log('✅ First feed updated with payload.')

  const result = await bee.uploadFile(POSTAGE_BATCH_ID, message, 'announcement.txt')
  console.log(result)
  console.log(result.reference.toHex())

  // The second writer is constructed using a new topic and the same private key
  const topic2 = Topic.fromString('reference-update')
  const writer2 = bee.makeFeedWriter(topic2, privateKey)
  await writer2.upload(POSTAGE_BATCH_ID, result.reference)
  console.log('✅ Second feed updated with reference.')
}

run().catch(console.error)
```


### Retrieving from Feeds by Topic and Owner

This script demonstrates how to retrieve data from feeds using their `topic` and `owner`. There are two primary methods used for reading from feeds:

* **`downloadPayload()`** – Used to read the raw payload written directly to the feed.
* **`downloadReference()`** – Used to read a Swarm reference from the feed. The returned reference can then be passed to `downloadFile()` to retrieve the associated file.

The script performs the following steps:

1. Initializes the Bee client and derives the feed owner address from a private key.
2. Reads the latest **payload update** from the feed with topic `"payload-update"` using `downloadPayload()`.
3. Reads the latest **reference update** from the feed with topic `"reference-update"` using `downloadReference()`, then retrieves the associated file from Swarm using `downloadFile()`.

Feed readers always require a topic and an owner address. By default, they fetch the latest *consecutively written* update. To retrieve a specific update, an explicit index can be provided.

:::warning
While not explicitly enforced, it is strongly recommended to use feeds in an append-only fashion. If instead non-consecutive updates are performed, the only way to discover updates at higher non-consecutively written indexes is to iterate one by one through all indexes up to the number of the index with the update.  
:::

```js
import { Bee, Topic, PrivateKey } from '@ethersphere/bee-js'

const BEE_URL = 'http://localhost:1643'

async function run() {
  const bee = new Bee(BEE_URL)
  const privateKey = new PrivateKey('0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef')
  const owner = privateKey.publicKey().address()

  // Read from payload-update feed
  const topic1 = Topic.fromString('payload-update')
  const reader1 = bee.makeFeedReader(topic1, owner)

  console.log('\n Reading latest update for feed: "payload-update"')

  try {
    const latest = await reader1.downloadPayload()
    const text = latest.payload.toUtf8()

    console.log('Message (as plain text):', text)
    console.log('Feed index:', BigInt(`0x${Buffer.from(latest.feedIndex.bytes).toString('hex')}`))
    console.log('Next index:', BigInt(`0x${Buffer.from(latest.feedIndexNext.bytes).toString('hex')}`))
  } catch (error) {
    console.warn('❌ Failed to read update:', error.message)
  }

  // Read from reference-update feed
  const topic2 = Topic.fromString('reference-update')
  const reader2 = bee.makeFeedReader(topic2, owner)

  console.log('\n Reading latest update for feed: "reference-update"')

  try {
    const latest = await reader2.downloadReference()
    const referenceHex = latest.reference.toHex()

    console.log('Swarm reference (hex):', referenceHex)

    const file = await bee.downloadFile(referenceHex)
    console.log('Retrieved file content:', file.data.toUtf8())
    console.log('Feed index:', BigInt(`0x${Buffer.from(latest.feedIndex.bytes).toString('hex')}`))
    console.log('Next index:', BigInt(`0x${Buffer.from(latest.feedIndexNext.bytes).toString('hex')}`))
  } catch (error) {
    console.warn('❌ Failed to read update:', error.message)
  }
}

run().catch(console.error)
```


### Using Feed Manifests for Fixed References

Feed manifests allow you to expose a feed through a **stable Swarm reference** that always resolves to the latest update. This is especially useful for hosting evolving content like websites or files, without needing to share a new Swarm reference each time content changes.

With a manifest, you can:

* Retrieve the **latest feed update** through a static `/bzz/<manifestReference>/` URL.
* Share a single reference that always resolves to the **current content**.
* Enable compatibility with public gateways and ENS domains.

The script below performs the following steps:

1. Initializes the Bee client and creates a feed manifest using a topic and owner.
2. Checks the current feed index or starts from index 0.
3. Uploads two updates to Swarm and stores their references in the feed at consecutive indices.
4. After each update, retrieves the content using the same manifest reference, confirming it resolves to the latest.



```js
import { Bee, Topic, PrivateKey, FeedIndex } from '@ethersphere/bee-js'

const BEE_URL = 'http://localhost:1643'
const POSTAGE_BATCH_ID = 'c119705f257c0015a062b17929e3ca3269e158231324707f2ea6e72c5c9f9b78'

const bee = new Bee(BEE_URL)
const privateKey = new PrivateKey('0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef')
const owner = privateKey.publicKey().address()

console.log('Feed owner:', owner.toHex())

const topic = Topic.fromString('uploaded-reference-demo')
const manifestReference = await bee.createFeedManifest(POSTAGE_BATCH_ID, topic, owner)
console.log('\n Manifest created:')
console.log('Ref:', manifestReference.toString())
console.log('URL:', `${BEE_URL}/bzz/${manifestReference.toString()}/`)

const reader = bee.makeFeedReader(topic, owner)
let index
try {
  const latest = await reader.download()
  index = latest.feedIndexNext
  const latestIndex = BigInt(`0x${Buffer.from(latest.feedIndex.bytes).toString('hex')}`)
  console.log(`\n Latest index: ${latestIndex}`)
} catch {
  index = FeedIndex.fromBigInt(0n)
  console.log('\n No updates yet. Starting at index 0')
}

for (let i = 0; i < 2; i++) {
  const content = `Update ${BigInt(`0x${Buffer.from(index.bytes).toString('hex')}`)}`
  const upload = await bee.uploadFile(POSTAGE_BATCH_ID, content, `update-${i}.txt`)
  const writer = bee.makeFeedWriter(topic, privateKey)
  await writer.upload(POSTAGE_BATCH_ID, upload.reference, { index })

  console.log(`\n✅ Updated to index ${BigInt(`0x${Buffer.from(index.bytes).toString('hex')}`)}: "${content}"`)

  const result = await bee.downloadFile(manifestReference)
  console.log(` Retrieved via manifest: "${result.data.toUtf8()}"`)
  console.log(`URL: ${BEE_URL}/bzz/${manifestReference.toString()}/`)

  index = index.next()
}
```


### Non-Sequential Feed Updates (Discouraged)

Although feeds are typically updated in a sequential, append-only manner, it is possible to manually write to a specific index using the `index` option. However, only the **highest consecutively filled index** is considered the latest. Any gaps will result in newer updates at higher indices being ignored when resolving the latest feed content. 

For example:

```js
await writer.uploadPayload(POSTAGE_BATCH_ID, 'Initial update') // Goes to index 0
await writer.uploadPayload(POSTAGE_BATCH_ID, 'Out-of-order update', { index: 5 })
```

Now, attempting to read the latest update without specifying an index will still return the update at index 0:

```js
const latest = await reader.downloadPayload()
console.log(latest.payload.toUtf8())
// → "Initial update"
```

To read the out-of-order update at index 5, you must explicitly specify it:

```js
const manual = await reader.downloadPayload({ index: 5 })
console.log(manual.payload.toUtf8())
// → "Out-of-order update"
```

:::caution
Manually writing to skipped indices is supported but not recommended. It is recommended to use the default behavior when performing feed updates (no `index` specified) to maintain a clean, append-only feed history and ensure new updates are easily discoverable.
:::
