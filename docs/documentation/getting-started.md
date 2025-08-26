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

After that you need to import the `Bee` class and initialize an instance of it using our Bee node's API endpoint (here we assume it runs on localhost on the default port).

:::info Run your own Bee node
You can find out more about setting up a Bee node and getting your node's API endpoint in the [Bee docs](https://docs.ethswarm.org/docs/installation/quick-start)
:::

```js
import { Bee } from "@ethersphere/bee-js"

const bee = new Bee('http://localhost:1633')
```

That’s it! now you can use the `bee` object.

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


## Quickstart with *create-swarm-app*

The `create-swarm-app` tool generates ready‑to‑run skeletons for `bee-js` projects in your chosen setup (CommonJS, ESM, TypeScript, or Vite + TypeScript) with a single command.

:::warning WSL WARNING
The `create-swarm-app` tool is compatible with Windows, macOS, and Linux. However, using it in combination with [WSL](https://learn.microsoft.com/en-us/windows/wsl/) is discouraged due to potential compatibility issues that may require additional troubleshooting.

That said, the `bee-js` library itself works seamlessly within WSL. If you prefer to develop your project using WSL, you can use `create-swarm-app` to generate the project files on the Windows side, then move them into your WSL environment for development.
:::

### 1) Choose a template and scaffold your app

```bash
npm init swarm-app@latest <app-name> <app-type>
```

Replace `<app-name>` with your project name, and `<app-type>` with one of:

* `node` – Node.js (CommonJS)
* `node-esm` – Node.js (ES modules)
* `node-ts` – Node.js (TypeScript)
* `vite-tsx` – Vite + React + TypeScript (front‑end)

### 2) Back‑end templates (`node`, `node-esm`, `node-ts`)

These outputs give you a minimal script that connects to a Bee node, ensures you have a usable postage batch, then uploads and downloads data via `bee-js`.

Example (TypeScript):

```bash
npm init swarm-app@latest my-dapp node-ts

# then
cd my-dapp
npm install
npm start
```

Project structure:

```text
.
├── package.json
├── src
│   ├── config.ts
│   └── index.ts
└── tsconfig.json
```

`src/config.ts` — Bee API endpoint (adjust if your node is not on the default):

```ts
export const BEE_HOST = 'http://localhost:1633'
```

`src/index.ts` — minimal end‑to‑end flow (init Bee, get/create a stamp, upload, download):

```ts
import { Bee } from '@ethersphere/bee-js'
import { BEE_HOST } from './config'

main()

async function main() {
  const bee = new Bee(BEE_HOST)
  const batchId = await getOrCreatePostageBatch(bee)
  console.log('Batch ID', batchId.toString())

  const data = 'Hello, world! The current time is ' + new Date().toLocaleString()
  const uploadResult = await bee.uploadData(batchId, data)
  console.log('Swarm hash', uploadResult.reference.toHex())

  const downloadResult = await bee.downloadData(uploadResult.reference)
  console.log('Downloaded data:', downloadResult.toUtf8())
}

async function getOrCreatePostageBatch(bee: Bee) {
  const batches = await bee.getPostageBatches()
  const usable = batches.find(x => x.usable)

  if (usable) {
    return usable.batchID
  } else {
    // amount and depth are examples; tune for your needs
    return bee.createPostageBatch('500000000', 20)
  }
}
```

> The CommonJS (`node`) and ESM (`node-esm`) templates include the same basic logic adjusted for their respective module systems.

### 3) Front‑end template (`vite-tsx`)

This option generates a simple React + Vite app that talks directly to Bee from the browser.

In contrast with the previous example, the `vite-tsx` option for `create-swarm-app` will output the basic scaffolding for a Swarm integrated static site which can be uploaded to Swarm directly - no servers needed! 

```bash
npm init swarm-app@latest my-dapp vite-tsx
```

```bash
> npx
> create-swarm-app my-dapp vite-tsx

Project created

cd my-dapp
npm install
npm start
```

The output files will have this structure:

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

The logic for purchasing storage and uploading and downloading data is all contained in the `App.tsx` file:

:::tip
For a step-by-step breakdown of how the code below works, check out the examples section for an explanation of this template along with several others.
:::

```typescript
import { BatchId, Bee } from '@ethersphere/bee-js'
import { useState } from 'react'
import { BEE_HOST } from './config'

export function App() {
    const [batchId, setBatchId] = useState<BatchId | null>(null)
    const [file, setFile] = useState<File | null>(null)
    const [fileList, setFileList] = useState<FileList | null>(null)
    const [swarmHash, setSwarmHash] = useState<string | null>(null)

    const bee = new Bee(BEE_HOST)

    async function getOrCreatePostageBatch() {
        const batches = await bee.getPostageBatches()
        const usable = batches.find(x => x.usable)

        if (usable) {
            setBatchId(usable.batchID)
        } else {
            setBatchId(await bee.createPostageBatch('500000000', 20))
        }
    }

    async function uploadFile() {
        if (!batchId) {
            return
        }
        const result = await bee.uploadFile(batchId, file)
        setSwarmHash(result.reference.toHex())
        setFile(null)
    }

    async function uploadDirectory() {
        if (!batchId || !fileList) {
            return
        }
        const result = await bee.uploadFiles(batchId, fileList)
        setSwarmHash(result.reference.toHex())
        setFileList(null)
    }

    const directoryInputAttributes = {
        webkitdirectory: '',
        directory: '',
        multiple: true
    }

    return (
        <div>
            {!batchId && <button onClick={getOrCreatePostageBatch}>Get or create postage batch</button>}
            {batchId && <p>Batch ID: {batchId.toHex()}</p>}
            {batchId && !swarmHash && (
                <div>
                    <p>Single file upload</p>
                    <input type="file" onChange={e => setFile(e.target.files![0])} />
                    <button onClick={uploadFile}>Upload file</button>

                    <p>Directory upload</p>
                    <input type="file" onChange={e => setFileList(e.target.files)} {...directoryInputAttributes} />
                    <button onClick={uploadDirectory}>Upload directory</button>
                </div>
            )}
            {swarmHash && <a href={BEE_HOST + '/bzz/' + swarmHash}>Swarm hash: {swarmHash}</a>}
        </div>
    )
}
```

After installing and starting the application, you will be first be greeted with a button that will purchase a new postage batch or select an existing one as needed. 

![](/img/develop-on-swarm-00.jpg)

After a postage batch is selected, you will be greeted with an interface for uploading data:

![](/img/develop-on-swarm-01.jpg)

After selecting a file to upload, a reference hash to the file will be returned:

![](/img/develop-on-swarm-02.jpg)

Currently our application is running on localhost, and is only accessible locally. To make this application accessible for anyone on Swarm, all we need to do create a production build of our application using `vite build` and then upload it to the Swarm with `swarm-cli`.

```bash
 npm run build
```

This will generate a production build in the `/dist` directory, which we can than use `swarm-cli` to upload:

```bash
swarm-cli upload dist
```

`swarm-cli` will prompt us to create or select a postage batch, after which it will automatically detect that we are trying upload a website based on the `index.html` file, use that information to set the `--index-document`, complete the upload, and return a hash to us which can now be used by anyone with a Bee node to access our app:

```bash
? Please select a stamp for this action
4996787aee78da46b6e32d8141aee89ebb4f2ef3301bf04e0a399247fc414f27 550.296 MB
Setting --index-document to index.html
Swarm hash: 764b08bb0f9e82d4bdce951b1ded816bd0417e039828e4308d61ab3035ff60a2
URL: http://localhost:1633/bzz/764b08bb0f9e82d4bdce951b1ded816bd0417e039828e4308d61ab3035ff60a2/
Stamp ID: 4996787a
Usage: 13%
Capacity (immutable): 550.296 MB remaining out of 628.910 MB
```

The URL returned in the terminal can now be shared and accessed by anyone with a Bee node:

```bash
http://localhost:1633/bzz/764b08bb0f9e82d4bdce951b1ded816bd0417e039828e4308d61ab3035ff60a2/
```

## Next Steps

As a next step, you may wish to look into [connecting your site to an ENS domain](https://docs.ethswarm.org/docs/develop/access-the-swarm/host-your-website/#enable-ens-on-your-node) so that it is accessible from a human-readable address.

You may also want to start exploring more the [example applications section (PLACEHOLDER)](#) along with the accompanying step-by-step guides to deepen your understanding of what's possible on Swarm.  