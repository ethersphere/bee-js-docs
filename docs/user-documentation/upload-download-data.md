---
title: Upload and Download data or files to Swarm
hide_title: true
id: upload-download-data
slug: /upload-download-data
sidebar_label: Upload and Download data or files
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

## Upload and Download data

Uploading your data to Swarm is easy with bee-js!

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
const retrievedData = await bee.downloadData(hash)

console.log(retrievedData.toString()) // prints 'Bee is awesome!'
```

  </TabItem>
  <TabItem value="js">

```js
const hash = await bee.uploadData("Bee is awesome!")
const retrievedData = await bee.downloadData(hash)

console.log(retrievedData.toString()) // prints 'Bee is awesome!'
```

  </TabItem>
</Tabs>

## Upload and Download files

You can also upload files including filenames

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
const retrievedData = await bee.downloadFile(hash)

console.log(retrievedData.name) // prints 'textfile.txt'
console.log(retrievedData.contentType) // prints 'application/octet-stream'
console.log(new TextDecoder("utf-8").decode(retrievedData.data)) // prints 'Bee is awesome!'
```

  </TabItem>
  <TabItem value="js">

```js
const hash = await bee.uploadFile("Bee is awesome!", "textfile.txt")
const retrievedData = await bee.downloadFile(hash)

console.log(retrievedData.name) // prints 'textfile.txt'
console.log(retrievedData.contentType) // prints 'application/octet-stream'
console.log(new TextDecoder("utf-8").decode(retrievedData.data)) // prints 'Bee is awesome!'
```

  </TabItem>
</Tabs>

In browsers, you can upload directly `File` type. The filename is taken from the file object itself, but can be overwritten through the second argument of the `uploadFile` function (see the [API docs](./api-reference/classes/bee#uploadfile))

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
const retrievedData = await bee.downloadFile(hash)

console.log(retrievedData.name) // prints 'foo.txt'
console.log(retrievedData.contentType) // prints 'text/plain'
console.log(new TextDecoder("utf-8").decode(retrievedData.data)) // prints 'foo'
```

  </TabItem>
  <TabItem value="js">

```js
const file = new File(["foo"], "foo.txt", { type: "text/plain" })

const hash = await bee.uploadFile(file)
const retrievedData = await bee.downloadFile(hash)

console.log(retrievedData.name) // prints 'foo.txt'
console.log(retrievedData.contentType) // prints 'text/plain'
console.log(new TextDecoder("utf-8").decode(retrievedData.data)) // prints 'foo'
```

  </TabItem>
</Tabs>