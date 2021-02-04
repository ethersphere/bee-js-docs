---
title: Upload and Download data or files to Swarm
id: upload-download-data
slug: /upload-download-data
sidebar_label: Upload and Download data or files
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
import Bee from "@ethersphere/bee-js";

const bee = new Bee('http://localhost:1633')

const hash = await bee.uploadData("Bee is awesome!");
const retrievedData = await bee.downloadData(hash);

console.log(retrievedData.toString()); // prints 'Bee is awesome!'
```

  </TabItem>
  <TabItem value="js">

```js
import { Bee } from "@ethersphere/bee-js";

const bee = new Bee('http://localhost:1633')

const hash = await bee.uploadData("Bee is awesome!");
const retrievedData = await bee.downloadData(hash);

console.log(retrievedData.toString()); // prints 'Bee is awesome!'
```

  </TabItem>
</Tabs>