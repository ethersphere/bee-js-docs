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

### Data

You can upload and retrieve any `string` or `Uint8Array` data with [`uploadData`](./api/classes/bee#uploaddata) and [`downloadData`](./api/classes/bee#downloaddata) functions.
<Tabs
  groupId="lang_preferrence"
  defaultValue="ts"
  values={[
    {label: 'TypeScript', value: 'ts'},
    {label: 'JavaScript', value: 'js'},
  ]}>
  <TabItem value="ts">

```ts
const hash = await bee.uploadData("Bee is awesome!")

// prints Swarm hash of the file with which it can be retrieved
// here it is fd79d5e0ebd8407e422f53ce1d7c4c41ebf403be55143900f8d1490560294780
console.log(hash) 

const retrievedData = await bee.downloadData(hash)

console.log(new TextDecoder("utf-8").decode(retrievedData)) // prints 'Bee is awesome!'
```

  </TabItem>
  <TabItem value="js">

```js
const hash = await bee.uploadData("Bee is awesome!")

// prints Swarm hash of the file with which it can be retrieved
// here it is fd79d5e0ebd8407e422f53ce1d7c4c41ebf403be55143900f8d1490560294780
console.log(hash) 

const retrievedData = await bee.downloadData(hash)

console.log(new TextDecoder("utf-8").decode(retrievedData)) // prints 'Bee is awesome!'
```

  </TabItem>
</Tabs>

:::info Tip
Swarm reference or hash is a 64 characters long hex string which is the address of the uploaded data, file or directory.
:::

### Single file

You can also upload files and include a filename. When you download the file, `bee-js` will return aditional information like `contentType` or `name` of the file.

<Tabs
  groupId="lang_preferrence"
  defaultValue="ts"
  values={[
    {label: 'TypeScript', value: 'ts'},
    {label: 'JavaScript', value: 'js'},
  ]}>
  <TabItem value="ts">

```ts
const hash = await bee.uploadFile("Bee is awesome!", "textfile.txt")
const retrievedFile = await bee.downloadFile(hash)

console.log(retrievedFile.name) // prints 'textfile.txt'
console.log(retrievedFile.contentType) // prints 'application/octet-stream'
console.log(new TextDecoder("utf-8").decode(retrievedFile.data)) // prints 'Bee is awesome!'
```

  </TabItem>
  <TabItem value="js">

```js
const hash = await bee.uploadFile("Bee is awesome!", "textfile.txt")
const retrievedFile = await bee.downloadFile(hash)

console.log(retrievedFile.name) // prints 'textfile.txt'
console.log(retrievedFile.contentType) // prints 'application/octet-stream'
console.log(new TextDecoder("utf-8").decode(retrievedFile.data)) // prints 'Bee is awesome!'
```

  </TabItem>
</Tabs>

In browsers, you can upload directly `File` type. The filename is taken from the file object itself, but can be overwritten through the second argument of the `uploadFile` function (see the [API docs](./api/classes/bee#uploadfile))

<Tabs
  groupId="lang_preferrence"
  defaultValue="ts"
  values={[
    {label: 'TypeScript', value: 'ts'},
    {label: 'JavaScript', value: 'js'},
  ]}>
  <TabItem value="ts">

```ts
const file = new File(["foo"], "foo.txt", { type: "text/plain" })

const hash = await bee.uploadFile(file)
const retrievedFile = await bee.downloadFile(hash)

console.log(retrievedFile.name) // prints 'foo.txt'
console.log(retrievedFile.contentType) // prints 'text/plain'
console.log(new TextDecoder("utf-8").decode(retrievedFile.data)) // prints 'foo'
```

  </TabItem>
  <TabItem value="js">

```js
const file = new File(["foo"], "foo.txt", { type: "text/plain" })

const hash = await bee.uploadFile(file)
const retrievedFile = await bee.downloadFile(hash)

console.log(retrievedFile.name) // prints 'foo.txt'
console.log(retrievedFile.contentType) // prints 'text/plain'
console.log(new TextDecoder("utf-8").decode(retrievedFile.data)) // prints 'foo'
```

  </TabItem>
</Tabs>

### Files and Directories

The last supported mode is upload of files and directories. In browsers, you can easily upload an array of `File` comming from your form directly as well as [`FileList`](https://developer.mozilla.org/en-US/docs/Web/API/FileList). If the files uploaded through `uploadFiles` have a relative path, they are added relative to this filepath. Otherwise, the whole structure is flattened into single directory.

<Tabs
  groupId="lang_preferrence"
  defaultValue="ts"
  values={[
    {label: 'TypeScript', value: 'ts'},
    {label: 'JavaScript', value: 'js'},
  ]}>
  <TabItem value="ts">

```ts
const foo = new File(["foo"], "foo.txt", { type: "text/plain" })
const bar = new File(["bar"], "bar.txt", { type: "text/plain" })

const hash = await bee.uploadFiles([ foo, bar ]) // upload

const rFoo = await bee.downloadFileFromCollection(hash, './foo.txt') // download foo
const rBar = await bee.downloadFileFromCollection(hash, './bar.txt') // download bar

console.log(new TextDecoder("utf-8").decode(rFoo.data)) // prints 'foo'
console.log(new TextDecoder("utf-8").decode(rBar.data)) // prints 'bar'
```

  </TabItem>
  <TabItem value="js">

```js
const foo = new File(["foo"], "foo.txt", { type: "text/plain" })
const bar = new File(["bar"], "bar.txt", { type: "text/plain" })

const hash = await bee.uploadFiles([ foo, bar ]) // upload

const rFoo = await bee.downloadFileFromCollection(hash, './foo.txt') // download foo
const rBar = await bee.downloadFileFromCollection(hash, './bar.txt') // download bar

console.log(new TextDecoder("utf-8").decode(rFoo.data)) // prints 'foo'
console.log(new TextDecoder("utf-8").decode(rBar.data)) // prints 'bar'
```

  </TabItem>
</Tabs>

In nodejs, you may utilise the `uploadFilesFromDirectory` function, which takes directory path as input and upload all files in that directory. Lets assum we have following data structure:

```sh
.
+-- foo.txt
+-- dir
|   +-- bar.txt
```

<Tabs
  groupId="lang_preferrence"
  defaultValue="ts"
  values={[
    {label: 'TypeScript', value: 'ts'},
    {label: 'JavaScript', value: 'js'},
  ]}>
  <TabItem value="ts">

```ts
const hash = await bee.uploadFilesFromDirectory('./', true) // upload recursively current folder

const rFoo = await bee.downloadFileFromCollection(hash, './foo.txt') // download foo
const rBar = await bee.downloadFileFromCollection(hash, './dir/bar.txt') // download bar

console.log(new TextDecoder("utf-8").decode(rFoo.data)) // prints 'foo'
console.log(new TextDecoder("utf-8").decode(rBar.data)) // prints 'bar'
```

  </TabItem>
  <TabItem value="js">

```js
const hash = await bee.uploadFilesFromDirectory('./', true) // upload recursively current folder

const rFoo = await bee.downloadFileFromCollection(hash, './foo.txt') // download foo
const rBar = await bee.downloadFileFromCollection(hash, './dir/bar.txt') // download bar

console.log(new TextDecoder("utf-8").decode(rFoo.data)) // prints 'foo'
console.log(new TextDecoder("utf-8").decode(rBar.data)) // prints 'bar'
```

  </TabItem>
</Tabs>

## Retrieve file from node or gateway

You can always retrieve your files and data directly from the bee node through browser as well. For example, if you want to retrieve the "Bee is awesome!" text uploaded to Swarm in section [upload data](#data), you can directly access it with: [http://localhost:1633/files/fd79d5...294780](http://localhost:1633/files/fd79d5e0ebd8407e422f53ce1d7c4c41ebf403be55143900f8d1490560294780)

To share files with someone who isn't running a Bee node yet, simply change the host in the link to be one of our public gateways. Send the link to your friends, and they will be able to download the file too!

[https://gateway.ethswarm.org/files/fd79d5...294780](https://gateway.ethswarm.org/files/fd79d5e0ebd8407e422f53ce1d7c4c41ebf403be55143900f8d1490560294780)
