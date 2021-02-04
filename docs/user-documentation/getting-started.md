---
title: Getting Started
id: getting-started
slug: /getting-started
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

First you need to get bee-js into your project. This can be done using your favourite package management tool or directly:

<Tabs
  groupId="pcgmng_preferrence"
  defaultValue="npm"
  values={[
    {label: 'npm', value: 'npm'},
    {label: 'yarn', value: 'yarn'},
    {label: 'script tag', value: 'script'},
  ]}>
  <TabItem value="npm">

```sh
npm install @ethersphere/bee-js --save
```

  </TabItem>
  <TabItem value="yarn">

```sh
yarn add @ethersphere/bee-js --save
```

  </TabItem>
  <TabItem value="script">

```html
<script src="https://unpkg.com/@ethersphere/bee-js/dist/index.js"></script>
```

  </TabItem>
</Tabs>

After that you need to import the Bee class and create a bee instance.


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
```

  </TabItem>
  <TabItem value="js">

```js
import Bee from "@ethersphere/bee-js";

const bee = new Bee('http://localhost:1633')
```

  </TabItem>
</Tabs>

That’s it! now you can use the bee object.