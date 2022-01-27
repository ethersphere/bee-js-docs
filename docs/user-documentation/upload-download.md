---
title: Upload and Download
hide_title: true
id: upload-download
slug: /upload-download
sidebar_label: Upload and Download
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

## Upload and Download

Uploading your data to Swarm is easy with `bee-js`. Based on your needs you can either upload directly unstructured data, single file or even complex directories. Let's walk through the options one by one.

:::warning Postage stamps

Uploading to Swarm network require to have Postage stamps for every write operation. 
To understand better what does it mean see [Bee docs - Keep your data alive](https://docs.ethswarm.org/docs/access-the-swarm/keep-your-data-alive). 
:::


### Data

You can upload and retrieve any `string` or `Uint8Array` data with [`uploadData`](../api/classes/Bee.md#uploaddata) and [`downloadData`](../api/classes/Bee.md#downloaddata) functions.

When you download data the return type is [`Data`](../api/interfaces/Data.md) interface which extends `Uint8Array` with convenience functions like:

 - `text()` that converts the bytes into UTF-8 encoded string
 - `hex()` that converts the bytes into **non-prefixed** hex string
 - `json()` that converts the bytes into JSON object

```js
const postageBatchId = await bee.createPostageBatch("100", 17)
const result = await bee.uploadData(postageBatchId, "Bee is awesome!")

// prints Swarm hash of the file with which it can be retrieved
// here it is fd79d5e0ebd8407e422f53ce1d7c4c41ebf403be55143900f8d1490560294780
console.log(result.reference) 

const retrievedData = await bee.downloadData(result.reference)

console.log(retrievedData.text()) // prints 'Bee is awesome!'
```

:::info Tip
Swarm reference or hash is a 64 characters long hex string which is the address of the uploaded data, file or directory.
:::

### Single file

You can also upload files and include a filename. When you download the file, `bee-js` will return additional information like `contentType` or `name` of the file.

```js
const postageBatchId = await bee.createPostageBatch("100", 17)
const result = await bee.uploadFile(postageBatchId, "Bee is awesome!", "textfile.txt")
const retrievedFile = await bee.downloadFile(result.reference)

console.log(retrievedFile.name) // prints 'textfile.txt'
console.log(retrievedFile.contentType) // prints 'application/octet-stream'
console.log(retrievedFile.data.text()) // prints 'Bee is awesome!'
```

In browsers, you can upload directly `File` type. The filename is taken from the file object itself, but can be overwritten through the second argument of the `uploadFile` function (see the [API docs](../api/classes/Bee.md#uploadfile))

```js
const file = new File(["foo"], "foo.txt", { type: "text/plain" })

const postageBatchId = await bee.createPostageBatch("100", 17)
const result = await bee.uploadFile(postageBatchId, file)
const retrievedFile = await bee.downloadFile(result.reference)

console.log(retrievedFile.name) // prints 'foo.txt'
console.log(retrievedFile.contentType) // prints 'text/plain'
console.log(retrievedFile.data.text()) // prints 'foo'
```

### Files and Directories

The last supported mode is upload of files and directories. In browsers, you can easily upload an array of `File` comming from your form directly as well as [`FileList`](https://developer.mozilla.org/en-US/docs/Web/API/FileList). If the files uploaded through `uploadFiles` have a relative path, they are added relative to this filepath. Otherwise, the whole structure is flattened into single directory.

```js
const foo = new File(["foo"], "foo.txt", { type: "text/plain" })
const bar = new File(["bar"], "bar.txt", { type: "text/plain" })

const postageBatchId = await bee.createPostageBatch("100", 17)
const result = await bee.uploadFiles(postageBatchId, [ foo, bar ]) // upload

const rFoo = await bee.downloadFile(result.reference, './foo.txt') // download foo
const rBar = await bee.downloadFile(result.reference, './bar.txt') // download bar

console.log(rFoo.data.text()) // prints 'foo'
console.log(rBar.data.text()) // prints 'bar'
```

In nodejs, you may utilise the `uploadFilesFromDirectory` function, which takes directory path as input and upload all files in that directory. Lets assum we have following data structure:

```sh
.
+-- foo.txt
+-- dir
|   +-- bar.txt
```

```js
const postageBatchId = await bee.createPostageBatch("100", 17)

const result = await bee.uploadFilesFromDirectory(postageBatchId, './') // upload recursively current folder

const rFoo = await bee.downloadFile(result.reference, './foo.txt') // download foo
const rBar = await bee.downloadFile(result.reference, './dir/bar.txt') // download bar

console.log(rFoo.data.text()) // prints 'foo'
console.log(rBar.data.text()) // prints 'bar'
```

## Retrieve file from node or gateway

You can always retrieve your files and data directly from the bee node through browser as well. For example, if you want to retrieve the "Bee is awesome!" text uploaded to Swarm in section [upload data](#data), you can directly access it with: [http://localhost:1633/files/fd79d5...294780](http://localhost:1633/files/fd79d5e0ebd8407e422f53ce1d7c4c41ebf403be55143900f8d1490560294780)

To share files with someone who isn't running a Bee node yet, simply change the host in the link to be one of our public gateways. Send the link to your friends, and they will be able to download the file too!

[https://gateway.ethswarm.org/files/fd79d5...294780](https://gateway.ethswarm.org/files/fd79d5e0ebd8407e422f53ce1d7c4c41ebf403be55143900f8d1490560294780)
