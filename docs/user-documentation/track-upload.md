---
title: Track Upload Status
id: track-upload
slug: /track-upload
sidebar_label: Track Upload
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

In Swarm, an instruction to upload data to the network goes through 3 consecutive stages before it is completed:

- Splitting
- Storing
- Sending

In the splitting state, the file is deconstructed in chunks (Swarms canonical data unit) and packaged in a [Binary Merkle Tree](https://en.wikipedia.org/wiki/Merkle_tree). After splitting, the chunks are stored in your local database where they enter a queue, to be sent to the network.

Sending starts immediately when the first chunks are split and stored. After the chunk is sent, your node will receive a receipt from the node that has stored the chunk, marking the completion of the upload for that chunk. After a receipt has been received for all chunks, the upload is complete.

## What is a tag
The status of your upload can be followed by using `tags`. A `tag` is a label given to all chunks that belong to the same upload instruction. In the `bee-js` library, tag looks as follows:

```ts
interface Tag {
  total: number     // the total number of chunks for upload(s) related with this tag
  processed: number // the total number of chunks stored and queued for sending
  synced: number    // the total number of chunks that are synced with the network 

  uid: number       // a unique identifier for this tag
  startedAt: string // when the tag was first used
}
```

## Create tag

:::info Tip
Tags are automatically created on most upload methods and are returned using the `UploadResult` interface, so
you don't have to create them manually most of the time. 
:::

:::warning Forbidden on Gateways
If you are using a node that is in Gateway mode then this operation is not allowed!
:::

Creating a tag is easy. Just use the `createTag` function.

```js
const tag = await bee.createTag()
```

## Upload with tag

You can then use the tag when uploading data, by providing it in the options arguments for each of these methods.

```js
const postageBatchId = getOrCreatePostageBatch()

await bee.uploadData(postageBatchId, "Bee is awesome!", { tag })
// OR
await bee.uploadFile(postageBatchId, file, "foo.txt", { tag })
// OR
await bee.uploadFiles(postageBatchId, files, { tag })
// OR
await bee.uploadFilesFromDirectory(postageBatchId, "./", { tag })
```

## Retrieve tag

:::warning Forbidden on Gateways
If you are using a node that is in Gateway mode then this operation is not allowed!
:::

Each time you want to check the upload status, you can use the `retrieveTag` function.

```js
const updatedTag = await bee.retrieveTag(tag)
// OR
const updatedTag = await bee.retrieveTag(tag.uid)
```
