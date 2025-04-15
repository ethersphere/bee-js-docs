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


Uploading your data to Swarm is easy with `bee-js`. Based on your needs you can either upload directly unstructured data, single file or even complex directories. Let's walk through the options one by one.

## Requirements

To use the example scripts below, you need:

- An instance of `bee-js`'s `Bee` [initialized](/docs/getting-started/) as `bee` using the API endpoint of a currently operating Bee node.
- (Uploads only) The batch ID of a previously purchased usable postage batch with enough `remainingSize` left to upload the desired data. If you don't have one already, you will need to [buy a batch](/docs/storage/#purchasing-storage) to upload data. If you do have one, you will need to [get and save](/docs/storage/#selecting-a-batch) its batch ID.

## Uploading

The examples below assume you already have an instance of the `Bee` class [initialized](/docs/getting-started/) as `bee`, and the [batch ID](/docs/storage/#purchasing-storage) of a valid postage stamp batch saved as a string in `postageBatchId`.

### Upload Data

You can upload and retrieve any `string` or `Uint8Array` data with the `uploadData` and `downloadData` functions.

When you download data the return type is the `Data` interface which extends `Uint8Array` with convenience functions like:

 - `toUtf8()` that converts the bytes into UTF-8 encoded string
 - `hex()` that converts the bytes into **non-prefixed** hex string
 - `json()` that converts the bytes into JSON object

```js
import { Bee } from "@ethersphere/bee-js"

const bee = new Bee('http://localhost:1633')
const postageBatchId = "177da0994ed3000d241b183d33758aec42495bf9008fab059f0e3f208f3a1ade"

const result = await bee.uploadData(postageBatchId, "Bee is awesome!")

console.log(result.reference.toHex())

const retrievedData = await bee.downloadData(result.reference)

console.log(retrievedData.toUtf8()) // prints 'Bee is awesome!'
```

:::info Tip
A Swarm reference or hash is a 64 character long hex string which is the address of the uploaded data, file, or directory. It must saved so it can be used later to retrieve the uploaded content.
:::

### Upload Single file

You can also upload files by specifying a filename. When you download the file, `bee-js` will return additional information like the `contentType` or `name` of the file.

```js
import { Bee } from "@ethersphere/bee-js"

const bee = new Bee('http://localhost:1633')
const postageBatchId = "177da0994ed3000d241b183d33758aec42495bf9008fab059f0e3f208f3a1ade"

const result = await bee.uploadFile(postageBatchId, "Bee is awesome!", "textfile.txt")
const retrievedFile = await bee.downloadFile(result.reference.toHex())

console.log(retrievedFile.name) // prints 'textfile.txt'
console.log(retrievedFile.contentType) // prints 'application/x-www-form-urlencoded'
console.log(retrievedFile.data.toUtf8()) // prints 'Bee is awesome!'
```

You can directly upload using the [`File` interface](https://developer.mozilla.org/en-US/docs/Web/API/File). The filename is taken from the `File` object itself, but can be overwritten through the second argument of the `uploadFile` function.


```js
import { Bee } from "@ethersphere/bee-js"
import fs from 'fs'

const bee = new Bee('http://localhost:1633')
const postageBatchId = "177da0994ed3000d241b183d33758aec42495bf9008fab059f0e3f208f3a1ade"

// Read the file content
const fileContent = fs.readFileSync("./textFile.txt", "utf8")

// Upload the file content with a name
const result = await bee.uploadFile(postageBatchId, fileContent, "textfile.txt")

// Download the file
const retrievedFile = await bee.downloadFile(result.reference)
console.log(retrievedFile.name) // prints 'textfile.txt'
console.log(retrievedFile.contentType) // should print 'application/x-www-form-urlencoded
console.log(retrievedFile.data.toUtf8()) // prints the file content
```

### Files and Directories

In browsers, you can easily upload an array of `File` objects coming from your form directly with [`FileList`](https://developer.mozilla.org/en-US/docs/Web/API/FileList). If the files uploaded through `uploadFiles` have a relative path, they are added relative to this filepath. Otherwise, the whole structure is flattened into single directory.

```js
import { Bee } from "@ethersphere/bee-js"
import fs from 'fs'

const bee = new Bee('http://localhost:1633')
const postageBatchId = "177da0994ed3000d241b183d33758aec42495bf9008fab059f0e3f208f3a1ade"
const foo = new File(["foo"], "foo.txt", { type: "text/plain" })
const bar = new File(["bar"], "bar.txt", { type: "text/plain" })

const result = await bee.uploadFiles(postageBatchId, [ foo, bar ]) // upload

const Foo = await bee.downloadFile(result.reference, './foo.txt') // download foo
const Bar = await bee.downloadFile(result.reference, './bar.txt') // download bar

console.log(Foo.data.toUtf8()) // prints 'foo'
console.log(Bar.data.toUtf8()) // prints 'bar'
```

You may also utilize the `uploadFilesFromDirectory` function, which takes the directory path as input and uploads all files in that directory. Let's assume we have the following file structure:

```sh
.
+-- foo.txt
+-- dir
|   +-- bar.txt
```

```js
import { Bee } from "@ethersphere/bee-js"
import fs from 'fs'

const bee = new Bee('http://localhost:1633')
const postageBatchId = "177da0994ed3000d241b183d33758aec42495bf9008fab059f0e3f208f3a1ade"
const result = await bee.uploadFilesFromDirectory(postageBatchId, './') // upload recursively current folder

const Foo = await bee.downloadFile(result.reference, './foo.txt') // download foo
const Bar = await bee.downloadFile(result.reference, './dir/bar.txt') // download bar

console.log(Foo.data.toUtf8()) // prints 'foo'
console.log(Bar.data.toUtf8()) // prints 'bar'
```

