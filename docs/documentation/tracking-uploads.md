---
title: Tracking Uploads
id: tracking-uploads
slug: /tracking-uploads
sidebar_label: Tracking Uploads
---

You can track the progress of your uploads using "tags". Each tag tracks how many chunks were **split**, **stored**, **seen**, and **synced** by the network. By creating a tag before uploading and passing it to the upload function, you make the upload *trackable, allowing you to confirm whether your uploaded data has been fully synced.

## How It Works

### 1. Create a Tag

Before uploading, create a new tag using `bee.createTag()`. This returns a unique tag UID that will be used to monitor the upload.

```js
const tag = await bee.createTag()
console.log("Created new tag with UID:", tag.uid)
```

Alternatively, you can use an existing tag from `bee.getAllTags()` (useful for testing or reuse):

```js
const allTags = await bee.getAllTags()
if (allTags.length > 0) {
  tag = allTags[0]
  console.log("Using existing tag with UID:", tag.uid)
}
```

### 2. Upload a File with the Tag

To enable tracking, pass the tag UID into the upload options under the `tag` key:

```js
const result = await bee.uploadFile(postageBatchId, fileData, 'nodes.json', {
  tag: tag.uid,
  contentType: 'application/json'
})
```

This links the upload to your tag so you can monitor its progress.

### 3. Track Tag Progress

Use `bee.retrieveTag(tagUid)` to check how many chunks have been split and how many are synced. Poll repeatedly until `synced === split` to know when the upload has fully propagated.

```js
const tag = await bee.retrieveTag(tagUid)
console.log(` - Total split: ${tag.split}`)
console.log(` - Synced: ${tag.synced}`)
```

## Example Script

```js
import { Bee } from "@ethersphere/bee-js"
import fs from "fs/promises"

const bee = new Bee('http://localhost:1633')
const postageBatchId = "129903062bedc4eca6fc1c232ed385e93dda72f711caa1ead6018334dd801cee"

async function waitForTagSync(tagUid, interval = 800) {
  while (true) {
    const tag = await bee.retrieveTag(tagUid)

    console.log(`Progress (Tag ${tagUid}):`)
    console.log(` - Total split: ${tag.split}`)
    console.log(` - Stored: ${tag.stored}`)
    console.log(` - Seen: ${tag.seen}`)
    console.log(` - Synced: ${tag.synced}`)

    if (tag.split > 0 && tag.synced >= tag.split) {
      console.log("Upload fully synced!")
      break
    }

    await new Promise(resolve => setTimeout(resolve, interval))
  }
}

async function uploadNodesJsonWithTag() {
  try {
    const fileData = await fs.readFile('./nodes.json')

    const tag = await bee.createTag()
    console.log("Created new tag with UID:", tag.uid)

    const result = await bee.uploadFile(postageBatchId, fileData, 'nodes.json', {
      tag: tag.uid,
      contentType: 'application/json'
    })

    console.log("Uploaded reference:", result.reference.toHex())

    await waitForTagSync(tag.uid)
  } catch (error) {
    console.error("Error uploading nodes.json:", error.message)
  }
}

uploadNodesJsonWithTag()
```

Example terminal output:

```bash
Created new tag with UID: 85
Uploaded reference: 78e5247e97b1a3362b6c3f054924dce734e0ffd7df0cb5ed9b636cb6a4a14d93
Progress (Tag 85):
 - Total split: 1078
 - Stored: 0
 - Seen: 0
 - Synced: 546
Progress (Tag 85):
 - Total split: 1078
 - Stored: 0
 - Seen: 0
 - Synced: 1078
Upload fully synced!
```

## Deleting Tags

You can delete tags you no longer need using their uid:

```js
await bee.deleteTag(tag.uid)
console.log("Deleted tag:", tag.uid)
```

## References

- [Bee docs – Syncing / Tags](https://docs.ethswarm.org/docs/develop/access-the-swarm/syncing)  
- [Bee API Reference – `/tags`](https://docs.ethswarm.org/api/#tag/Tag)