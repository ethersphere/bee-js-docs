---
title: Upload and Download
id: upload-download
slug: /upload-download
sidebar_label: Upload and Download
---
<!-- 
* Separate Node.js (backend) and browser (front-end) functions
* Add examples of streaming uploads / downloads
-->

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'


Uploading and downloading with Swarm is easy with `bee-js`. Based on your needs you can either upload unstructured data directly, single files, lists of files, or entire directories. Each upload will return a Swarm reference hash, which is a unique identifier for the upload that can be used to download the uploaded content. 


## Requirements

To use the example scripts below, you need:

- An instance of `bee-js`'s `Bee` [initialized](/docs/getting-started/) as `bee` using the API endpoint of a currently operating Bee node.
- The batch ID of a previously purchased usable postage batch with enough `remainingSize` left to upload the desired data. If you don't have one already, you will need to [buy a batch](/docs/storage/#purchasing-storage) to upload data. If you do have one, you will need to [get and save](/docs/storage/#selecting-a-batch) its batch ID.


## Arbitrary Data

You can upload and retrieve any `string` or `Uint8Array` data with the `uploadData` and `downloadData` functions.

When you download data the return type is `Bytes`. The `Bytes` class includes various convenience functions like:

 - `toUtf8()` that converts the bytes into UTF-8 encoded string
 - `toHex()` that converts the bytes to a hex string
 - `toJSON()` that converts the bytes into JSON object

:::info
The `Bytes` class is a core data type in `bee-js`. It includes a variety of useful utility methods which you can learn more about on the [Utility Classes](/docs/utilities/) page.
:::

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

## Multiple Files 

For uploading multiple files at once in a browser environment you can use the `uploadFiles` function. 

*Note that it preserves the relative paths of all uploaded files, so the full paths (e.g. "folder/nested.txt") must be used when downloading them.*

:::caution Browser Only
  

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

## Directories

:::info
`uploadFilesFromDirectory` is not available in the browser as it relies on [`fs` from NodeJS](https://nodejs.org/api/fs.html).
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
If you do use `deferred: true`, make sure to use a [tag](/docs/tracking-uploads/) to track upload progress and confirm the success of the upload.
:::
