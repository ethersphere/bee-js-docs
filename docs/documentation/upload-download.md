---
title: Upload and Download
id: upload-download
slug: /upload-download
sidebar_label: Upload and Download
---
<!-- 
* Remove postage stamp related parts, assume a valid batchId
* Separate Node.js (backend) and browser (front-end) functions
* Adjust to new upload and download related functions [Gist1](https://gist.github.com/Cafe137/233807614d8b5eca938b71f88cb37d4a)
* Have sub-sections for encryption, tags
* Add "Track Upload" section
-->

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'


Uploading and download with Swarm is easy with `bee-js`. Based on your needs you can either upload directly unstructured data, single file or even complex directories. Each upload will return a Swarm reference hash, which is a unique identifier for the upload that can be used to download the uploaded content. 


## Requirements

To use the example scripts below, you need:

- An instance of `bee-js`'s `Bee` [initialized](/docs/getting-started/) as `bee` using the API endpoint of a currently operating Bee node.
- The batch ID of a previously purchased usable postage batch with enough `remainingSize` left to upload the desired data. If you don't have one already, you will need to [buy a batch](/docs/storage/#purchasing-storage) to upload data. If you do have one, you will need to [get and save](/docs/storage/#selecting-a-batch) its batch ID.


## Arbitrary Data

You can upload and retrieve any `string` or `Uint8Array` data with the `uploadData` and `downloadData` functions.

When you download data the return type is the `Bytes` which includes various convenience functions like:

 - `toUtf8()` that converts the bytes into UTF-8 encoded string
 - `toHex()` that converts the bytes to a hex string
 - `toJSON()` that converts the bytes into JSON object

```js
import { Bee } from "@ethersphere/bee-js"

const bee = new Bee('http://localhost:1633')
const postageBatchId = "129903062bedc4eca6fc1c232ed385e93dda72f711caa1ead6018334dd801cee"

const jsonData = {
  message: "Bee is awesome!",
  features: ["decentralized", "reliable", "scalable"],
  version: 1.0
};

const jsonString = JSON.stringify(jsonData);

const result = await bee.uploadData(postageBatchId, jsonString)

// Prints the 64 character long hex string Swarm reference - make sure to save the reference in order to access the content later
console.log(result.reference.toHex()) 

// Use the Swarm reference hash to download the data
const retrievedData = await bee.downloadData(result.reference)


console.log(retrievedData) // Prints the raw data
console.log(retrievedData.toUtf8()) // Prints the data as UTF-8 text
console.log(retrievedData.toJSON()) // Prints the data as JSON
```

:::info Tip
A Swarm reference or hash is a 64 character long hex string which is the address of the uploaded data, file, or directory. It must saved so it can be used later to retrieve the uploaded content.
:::

Example terminal output:

```bash
e2d9d04da9f8a000ddcc50e1b86fbff00c6202b406a9dd7aa55d283747858c33
Bytes {
  bytes: <Buffer 7b 22 6d 65 73 73 61 67 65 22 3a 22 42 65 65 20 69 73 20 61 77 65 73 6f 6d 65 21 22 2c 22 66 65 61 74 75 72 65 73 22 3a 5b 22 64 65 63 65 6e 74 72 61 ... 42 more bytes>,
  length: 92
}
{"message":"Bee is awesome!","features":["decentralized","reliable","scalable"],"version":1}
{
  message: 'Bee is awesome!',
  features: [ 'decentralized', 'reliable', 'scalable' ],
  version: 1
}
```


## Single Files

The `uploadFile` function accepts a `string`, `Uint8Array`, Node.js `Readable` stream, or browser `File` object as input data, along with an optional filename and upload options.

:::info
When working with browsers you can use the [`File` interface](https://developer.mozilla.org/en-US/docs/Web/API/File). The filename is taken from the `File` object itself, but can be overwritten through the second argument of the `uploadFile` function.
:::

```js
import { Bee } from "@ethersphere/bee-js"
import { readFileSync } from "fs"

const bee = new Bee('http://localhost:1633')
const postageBatchId = "ec4d7e3acbd626471b33135164335dfcb0bed889dd4a951c09da8ea7b59c1fc9"

async function uploadFromDisk() {
  try {
    // Read the file from the local file system
    const filePath = "./textfile.txt"
    const fileData = readFileSync(filePath)

    // Upload the file data
    const result = await bee.uploadFile(postageBatchId, fileData, "textfile.txt", {
      contentType: "text/plain"
    })
    
    // Print the reference hash used to retrieve the content
    console.log(result.reference.toHex()) 


    // Download the file
    const retrievedFile = await bee.downloadFile(result.reference.toHex())

    console.log(retrievedFile.name)         // Prints 'textfile.txt'
    console.log(retrievedFile.contentType)  // Prints 'text/plain'
    console.log(retrievedFile.data.toUtf8()) // Prints file content

    return result.reference.toHex()
  } catch (error) {
    console.error("Error:", error.message)
  }
}

uploadFromDisk()
```

Example terminal output:

```bash
textfile.txt
application/x-www-form-urlencoded
this is a sample file
0dca369c5a1a1ef5be1f5e293089c695920323805568382d9e97e3cd17678a3a
```

## Multiple Files (Browser only)

For uploading multiple files at once in a browser environment you can use the `uploadFiles` function. 

*Note that it preserves the relative paths of all uploaded files, so the full paths (e.g. "folder/nested.txt") must be used when downloading them.*

:::caution
⚠️ **Browser-only Notice**:  

The `uploadFiles` function is only supported for **browser environments**, as it requires input in the form of a [`FileList`](https://developer.mozilla.org/en-US/docs/Web/API/FileList) or array of [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) objects.

While `File` is available in Node v20+, it is still not fully supported and may not always work as expected. 
:::


```js
import { Bee } from "@ethersphere/bee-js"

const bee = new Bee('http://localhost:1633')
const postageBatchId = "ec4d7e3acbd626471b33135164335dfcb0bed889dd4a951c09da8ea7b59c1fc9"

async function uploadFiles() {
  try {
    // Create 3 File objects from strings with nested paths
    const rootFile = new File(["Root file content"], "root.txt", { type: "text/plain" })
    const nestedFile = new File(["Nested file content"], "folder/nested.txt", { type: "text/plain" })
    const deepFile = new File(["Deeply nested file content"], "folder/subfolder/deep.txt", { type: "text/plain" })

    // Upload all files
    const result = await bee.uploadFiles(postageBatchId, [rootFile, nestedFile, deepFile])
    console.log("Files uploaded with reference:", result.reference.toHex())

    // Download each file by full path
    const downloadedRoot = await bee.downloadFile(result.reference, 'root.txt')
    const downloadedNested = await bee.downloadFile(result.reference, 'folder/nested.txt')
    const downloadedDeep = await bee.downloadFile(result.reference, 'folder/subfolder/deep.txt')

    // Display contents
    console.log("Root file:", downloadedRoot.data.toUtf8())
    console.log("Nested file:", downloadedNested.data.toUtf8())
    console.log("Deep file:", downloadedDeep.data.toUtf8())

    return result.reference.toHex()
  } catch (error) {
    console.error("Error:", error.message)
  }
}

uploadFiles()
```

## Directories (NodeJS only)

:::info
`uploadFilesFromDirectory` is not available in the browser as it relies on `fs` from NodeJS.
:::

The `uploadFilesFromDirectory` function takes a directory path as input and recursively uploads all files within it, including those in all nested subdirectories, while preserving their relative paths.

*When downloading files later, you must use the full relative paths exactly as they appeared during upload.*

Let's assume we have the following file structure:

```bash
.
├── folder
│   ├── nested.txt
│   └── subfolder
│       └── deep.txt
└── root.txt
```

```js
import { Bee } from "@ethersphere/bee-js"

const bee = new Bee('http://localhost:1633')
const postageBatchId = "ec4d7e3acbd626471b33135164335dfcb0bed889dd4a951c09da8ea7b59c1fc9"

async function uploadDirectory() {
  try {
    // Upload the current directory (where the script is run)
    const result = await bee.uploadFilesFromDirectory(postageBatchId, process.cwd())

    console.log("Directory uploaded successfully!")
    console.log("Swarm reference:", result.reference.toHex())

    // Download each file using its relative path
    const root = await bee.downloadFile(result.reference, 'root.txt')
    const nested = await bee.downloadFile(result.reference, 'folder/nested.txt')
    const deep = await bee.downloadFile(result.reference, 'folder/subfolder/deep.txt')

    // Print out file contents
    console.log("root.txt:", root.data.toUtf8())
    console.log("folder/nested.txt:", nested.data.toUtf8())
    console.log("folder/subfolder/deep.txt:", deep.data.toUtf8())
  } catch (error) {
    console.error("Error during upload or download:", error.message)
  }
}

uploadDirectory()
```

Example terminal output:

```bash
Directory uploaded successfully!
Swarm reference: 3e42f7cfbeec140129211fa24b9b57b2bff5932416dc8ff30b44c8446b259e92
root.txt: Root level content
folder/nested.txt: Nested content
folder/subfolder/deep.txt: Deeply nested content
```


## Upload Options

The `uploadData`, `uploadFile`, `uploadFiles`, and other similar methods accept an **options object** as their third argument. This object lets you modify how the upload is handled — for example, enabling encryption, pinning data locally, or attaching a tag to track the upload.


### Pinning

If you set `pin: true`, the uploaded data will be **stored locally** on your Bee node, even if it becomes unavailable on the wider Swarm network. This lets your node re-upload the content if needed:

```js
await bee.uploadData(postageBatchId, 'my content', { pin: true })
```

:::info
Pinning is local only. It doesn't make data permanent across the network.
:::

More info:
- [Bee docs – Pinning](https://docs.ethswarm.org/docs/develop/access-the-swarm/pinning)


### Encryption

You can enable **client-side encryption** by setting `encrypt: true`. This encrypts the content before uploading and returns a longer Swarm reference that includes the decryption key.

**Example:**

```js
await bee.uploadData(postageBatchId, 'sensitive content', { encrypt: true })
```

When you later download the content, `bee-js` will decrypt it automatically if the reference contains the embedded key.

More info:
- [Store with Encryption](https://docs.ethswarm.org/docs/develop/access-the-swarm/store-with-encryption)


### Tags

Tags let you **track upload progress** through the Bee API. You can create a new tag using `bee.createTag()`, then pass its ID when uploading.

**Example:**

```js
const tag = await bee.createTag()
await bee.uploadData(postageBatchId, 'track me', { tag: tag.uid })
```

You can use the tag ID to monitor syncing status: how many chunks were split, stored, seen, and synced.

See [here](/docs/upload-download/#using-tags-to-monitor-upload-progress) for more info on creating, monitoring, and managing tags.


### Deferred Uploads

By default, uploads are **deferred**, meaning the client sends the data to the Bee node, generates and returns the Swarm reference hash, and the node starts syncing it to the network **in the background**. The function returns as soon as the chunks are processed and a Swarm reference is generated — **even before the data is actually available on the network**.

This can be risky if you assume the data is already retrievable using the returned reference.

**To ensure reliability, it is recommended to set `deferred: false`** unless you're explicitly tracking the upload using tags.

**Recommended usage:**

```js
await bee.uploadData(postageBatchId, 'data', { deferred: false })
```

:::tip
If you do use `deferred: true`, make sure to use a [tag](/docs/upload-download/#using-tags-to-monitor-upload-progress) to track upload progress and confirm the success or failure of the upload.
:::


## Stewardship

Once you've uploaded and pinned content to Swarm, it's important to ensure that it remains available on the network. You can use the provided **stewardship utilities** to help monitor and reupload content if it becomes unreachable.

This section outlines how to:

- Check if content is still retrievable
- Reupload missing content
- View pinned references
- Remove pins when no longer needed


### Checking if a Reference is Retrievable

Use `isReferenceRetrievable(reference)` to verify if the content for a given Swarm reference is currently accessible on the network:

```js
const isAvailable = await bee.isReferenceRetrievable(reference)

if (isAvailable) {
  console.log('Data is retrievable from the network.')
} else {
  console.log('Data is missing from the network.')
}
```

### Reuploading Pinned Data

If content is missing but was previously pinned, you can reupload it using `reuploadPinnedData(postageBatchId, reference)`:

```js
await bee.reuploadPinnedData(postageBatchId, reference)
console.log('Data has been reuploaded to the network.')
```

### Listing All Pinned References

You can get all currently pinned references with:

```js
const pins = await bee.getAllPins()
console.log('Pinned references:', pins.map(ref => ref.toHex()))
```

To check if a specific reference is pinned:

```js
const pinStatus = await bee.getPin(reference)
console.log('Pin info:', pinStatus)
```


### Pinning and Unpinning Content

To pin a reference (so it remains stored on your node):

```js
await bee.pin(reference)
console.log('Reference pinned locally.')
```

To stop tracking and remove it from local pin storage:

```js
await bee.unpin(reference)
console.log('Reference unpinned and no longer tracked.')
```

### Example Script

```js
import { Bee } from "@ethersphere/bee-js"

const bee = new Bee('http://localhost:1633')
const postageBatchId = "129903062bedc4eca6fc1c232ed385e93dda72f711caa1ead6018334dd801cee"

async function reuploadMissingPins() {
  try {
    // Get all currently pinned references
    const pinnedRefs = await bee.getAllPins()

    if (!pinnedRefs.length) {
      console.log("No pinned references found.")
      return
    }

    console.log(`Found ${pinnedRefs.length} pinned references.`)

    let repaired = 0

    // Loop through all references and check retrievability
    for (const ref of pinnedRefs) {
      const reference = ref.toHex()
      const isAvailable = await bee.isReferenceRetrievable(reference)

      if (isAvailable) {
        console.log(`✅ ${reference} is retrievable.`)
      } else {
        console.log(`⚠️  ${reference} is missing — reuploading...`)
        await bee.reuploadPinnedData(postageBatchId, reference)
        console.log(`🔁 Reuploaded ${reference}`)
        repaired++
      }
    }

    console.log(`\nDone. ${repaired} reference(s) were reuploaded.`)
  } catch (error) {
    console.error("Error:", error.message)
  }
}

reuploadMissingPins()
```

Example terminal output:

```bash
Found 2 pinned references.
⚠️  1880ff0bbd23997dfa46921ba2ab0098824d967fe60c6ca1ae2e8fd722f4db78 is missing — reuploading...
🔁 Reuploaded 1880ff0bbd23997dfa46921ba2ab0098824d967fe60c6ca1ae2e8fd722f4db78
✅ fd79d5e0ebd8407e422f53ce1d7c4c41ebf403be55143900f8d1490560294780 is retrievable.

Done. 1 reference(s) were reuploaded.
```


Here’s a new section you can include in your documentation under `## Upload Options` or as its own top-level `## Tags` section. It mirrors the style of your article and uses helpful `console.log()` statements to show how to create and monitor tags during uploads.


## Using Tags to Monitor Upload Progress

Tags allow you to track the upload status of your data across the Swarm network. When you create a tag and pass its ID into the upload options, the Bee node will track and report how many chunks were split, stored, seen, and successfully synced.

*For this example, we retrieved a list of nodes from the [Swarmscan API](https://api.swarmscan.io/#tag/Network/paths/~1v1~1network~1nodes/get) and saved them as `nodes.json`*

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
      console.log("✅ Upload fully synced!")
      break
    }

    await new Promise(resolve => setTimeout(resolve, interval))
  }
}

async function uploadNodesJsonWithTag() {
  try {
    const fileData = await fs.readFile('./nodes.json')

    // Step 1: Check for existing tags
    const allTags = await bee.getAllTags()

    if (allTags.length) {
      console.log("Available tags:")
      allTags.forEach(tag =>
        console.log(` - UID: ${tag.uid} | Synced: ${tag.synced} / ${tag.split}`)
      )
    } else {
      console.log("No existing tags found.")
    }

    let tag

    if (allTags.length > 0) {
      tag = allTags[0]
      console.log(tag)
      console.log("Using existing tag with UID:", tag.uid)
    } else {
      tag = await bee.createTag()
      console.log("Created new tag with UID:", tag.uid)
    }

    // Step 2: Upload with tag
    const result = await bee.uploadFile(postageBatchId, fileData, 'nodes.json', {
      tag: tag.uid,
      contentType: 'application/json'
    })

    console.log("Uploaded reference:", result.reference.toHex())

    // Step 3: Track tag progress
    await waitForTagSync(tag.uid)
  } catch (error) {
    console.error("Error uploading nodes.json:", error.message)
  }
}

uploadNodesJsonWithTag()
```

Example terminal output:

```bash
No existing tags found.
Created new tag with UID: 85
Uploaded reference: 78e5247e97b1a3362b6c3f054924dce734e0ffd7df0cb5ed9b636cb6a4a14d93
Progress (Tag 85):
 - Total split: 1078
 - Stored: 0
 - Seen: 0
 - Synced: 0
Progress (Tag 85):
 - Total split: 1078
 - Stored: 0
 - Seen: 0
 - Synced: 546
Progress (Tag 85):
 - Total split: 1078
 - Stored: 0
 - Seen: 0
 - Synced: 1035
Progress (Tag 85):
 - Total split: 1078
 - Stored: 0
 - Seen: 0
 - Synced: 1078
✅ Upload fully synced!
```

You can also view all tags currently on your node:

```js
const allTags = await bee.getAllTags()
console.log("All tags:", allTags.map(t => ({ uid: t.uid, synced: t.synced, split: t.split })))
```

```bash
All tags: [ { uid: 85, synced: 1078, split: 1078 } ]
```

Or delete a tag once you're done tracking it:

```js
await bee.deleteTag(tag.uid)
console.log("Deleted tag:", tag.uid)
```

More info:
- [Bee docs – Syncing / Tags](https://docs.ethswarm.org/docs/develop/access-the-swarm/syncing)

