---
title: Getting Started
id: getting-started
slug: /getting-started
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'



## About *bee-js* 

`bee-js` simplifies development on Swarm by abstracting away many of finer details and quirks of the Bee API so that you can focus on building your dream DAPP with minimal hassle. It's the easiest way to get started developing on Swarm.

## Installation 

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
<script src="https://unpkg.com/@ethersphere/bee-js/dist/index.browser.min.js"></script>
```

  </TabItem>
</Tabs>

After that you need to import the Bee class and create a bee instance connecting to your Bee node (here we assume it runs on localhost on default port).

Be aware, if you will pass invalid URL the constructor will throw an exception!

```js
import { Bee } from "@ethersphere/bee-js"

const bee = new Bee('http://localhost:1633')
```

That’s it! now you can use the `bee` object.

:::info Run your own Bee node
You can find out more about running Bee node in the [Bee docs](https://docs.ethswarm.org/docs/installation/quick-start)
:::

:::tip Using `<script>` import

If you include `bee-js` using the `unpkg.com` script link then all the exported components will be available to you
under global namespace `BeeJs`:

```html
<script src="https://unpkg.com/@ethersphere/bee-js/dist/index.browser.min.js"></script>
<script>
  const bee = new BeeJs.Bee('...')
</script>
```
:::


## Quickstart With *create-swarm-app*

The `create-swarm-app` tool makes it easy to get started developing on Swarm. With a single command, it generates the basic scaffolding for a `bee-js` project in your chosen development environment (CommonJS, ESM, TypeScript, or Vite + TypeScript).

:::note WSL WARNING
The `create-swarm-app` tool is compatible with Windows, macOS, and Linux. However, using it in combination with [WSL](https://learn.microsoft.com/en-us/windows/wsl/) is discouraged due to potential compatibility issues that may require additional troubleshooting.

That said, the `bee-js` library itself works seamlessly within WSL. If you prefer to develop your project using WSL, you can use `create-swarm-app` to generate the project files on the Windows side, then move them into your WSL environment for development.
:::

You can use [`create-swarm-app`](https://www.npmjs.com/package/create-swarm-app) to quickly set up scaffolding for a `bee-js` project with the following command:

```bash
npm init swarm-app@latest {app-name} {app-type}
```

Replace "{app-name}" with your app's name, and "{app-type}" with the type of app you want. Supported types are `node`, `node-esm`, `node-ts` and `vite-tsx`.

Start a Swarm project using TypeScript:

```bash
npm init swarm-app@latest my-dapp node-ts
```

Your project structure will look like:

```bash
.
├── package.json
├── src
│   ├── config.ts
│   └── index.ts
└── tsconfig.json
```

or using Vite and TypeScript:

```bash
npm init swarm-app@latest my-dapp vite-tsx
```

Your project structure will look like:

```bash
tree .
.
├── index.html
├── package.json
├── src
│   ├── App.tsx
│   ├── config.ts
│   └── index.tsx
└── tsconfig.json
```

The exact results will differ slightly depending on which `{app-type}` you use, but they will all include a `config.ts` or `config.js` file where the Bee node's API endpoint must be specified.

The endpoint is set to the default Bee API endpoint of `http://localhost:1633`, if your node uses a different endpoint you will need to update it in the config file.