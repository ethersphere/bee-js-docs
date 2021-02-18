---
title: Create dApp in React
id: create-dapp
slug: /create-dapp
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

In this tutorial we will go over creating dApp in React with the `bee-js` library. Once build this dApp can be hosted directly on the Swarm network and interact with it.

## Creating the dApp boilerplate

We will use React Create App to bootstrap the environment for us. Run the following command (you can replace the `dApp` with your own project name).

<Tabs
  groupId="npmxyarn"
  defaultValue="npx"
  values={[
    {label: 'npx', value: 'npx'},
    {label: 'npm', value: 'npm'},
    {label: 'Yarn', value: 'yarn'},
  ]}>
  <TabItem value="npx">

```sh
npx create-react-app dApp
```

  </TabItem>
  <TabItem value="npm">

```sh
npm init react-app dApp
```

  </TabItem>
  <TabItem value="yarn">

```sh
yarn create react-app dApp
```

  </TabItem>
</Tabs>

For typescript support don't forget to add the `--template typescript` option:

<Tabs
  groupId="npmxyarn"
  defaultValue="npx"
  values={[
    {label: 'npx', value: 'npx'},
    {label: 'npm', value: 'npm'},
    {label: 'Yarn', value: 'yarn'},
  ]}>
  <TabItem value="npx">

```sh
npx create-react-app dApp --template typescript
```

  </TabItem>
  <TabItem value="npm">

```sh
npm init react-app dApp --template typescript
```

  </TabItem>
  <TabItem value="yarn">

```sh
yarn create react-app dApp --template typescript
```

  </TabItem>
</Tabs>

## Adding bee-js

First of all, we need to add `bee-js` as a dependency to the project. Navigate to the project directory (e.g. in our case `cd dApp`) and let's install `bee-js`:

<Tabs
  groupId="npmyarn"
  defaultValue="npm"
  values={[
    {label: 'npm', value: 'npm'},
    {label: 'yarn', value: 'yarn'},
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
</Tabs>

Now let's edit the main App file.

<Tabs
  groupId="lang_preferrence"
  defaultValue="ts"
  values={[
    {label: 'TypeScript', value: 'ts'},
    {label: 'JavaScript', value: 'js'},
  ]}>
  <TabItem value="ts">

```tsx title="src/App.tsx"
import React, { useState } from 'react'
import './App.css'
import { Bee } from '@ethersphere/bee-js'

const beeUrl = "https://gateway.ethswarm.org"
const bee = new Bee(beeUrl)

function App() {
  const [ file, setFile ] = useState<File | null>(null)
  const [ link, setLink ] = useState<string | null>(null)
  const [ uploading, setUploading ] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>)=> {
    event.preventDefault()

    if (file) {
      setUploading(true)
      const hash = await bee.uploadFile(file)
      setLink(`${beeUrl}/files/${hash}`)
      setUploading(false)
    }
  }

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target && e.target.files && e.target.files[0]

    setFile(f)
  }

  return (
    <div className="App">
      <h1>Upload file to Swarm</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" onChange={onFileChange} />
        <input type="submit" />
      </form>
      { uploading && <code>Uploading...</code> }
      { link && <code><a href={link}>{link}</a></code> }
    </div>
  )
}

export default App
```

  </TabItem>
  <TabItem value="js">

```jsx title="src/App.jsx"
import React, { useState } from 'react'
import './App.css'
import { Bee } from '@ethersphere/bee-js'

const beeUrl = "https://gateway.ethswarm.org"
const bee = new Bee(beeUrl)

function App() {
  const [ file, setFile ] = useState(null)
  const [ link, setLink ] = useState(null)
  const [ uploading, setUploading ] = useState(false)

  const handleSubmit = async (event)=> {
    event.preventDefault()

    if (file) {
      setUploading(true)
      const hash = await bee.uploadFile(file)
      setLink(`${beeUrl}/files/${hash}`)
      setUploading(false)
    }
  }

  const onFileChange = (e) => {
    const f = e.target && e.target.files && e.target.files[0]

    setFile(f)
  }

  return (
    <div className="App">
      <h1>Upload file to Swarm</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" onChange={onFileChange} />
        <input type="submit" />
      </form>
      { uploading && <code>Uploading...</code> }
      { link && <code><a href={link}>{link}</a></code> }
    </div>
  )
}

export default App
```

  </TabItem>
</Tabs>

Let's break it down, the first important lines are importing the `Bee` class and creating the bee instance:

<Tabs
  groupId="lang_preferrence"
  defaultValue="ts"
  values={[
    {label: 'TypeScript', value: 'ts'},
    {label: 'JavaScript', value: 'js'},
  ]}>
  <TabItem value="ts">

```ts
import { Bee } from '@ethersphere/bee-js'

const beeUrl = "https://gateway.ethswarm.org"
const bee = new Bee(beeUrl)
```

  </TabItem>
  <TabItem value="js">

```js
import { Bee } from '@ethersphere/bee-js'

const beeUrl = "https://gateway.ethswarm.org"
const bee = new Bee(beeUrl)
```

  </TabItem>
</Tabs>

Next we'll have a look at the content of the `App` function. At the start of the function, we create few state variables. The `file` will hold the file to be uploaded, the `link` eventually contains the URL to download the file once it is uploaded to Swarm, and the `uploading` value indicates if the file is being uploaded right now.

At the bottom of the `App` function there is a JSX code with a header, simple form to upload a single file and two text fields that are conditionally displayed. The important thing to notice is the `onFileChange` handler on the file input and the `handleSubmit` function.

<Tabs
  groupId="lang_preferrence"
  defaultValue="ts"
  values={[
    {label: 'TypeScript', value: 'ts'},
    {label: 'JavaScript', value: 'js'},
  ]}>
  <TabItem value="ts">

```tsx
function App() {
  const [ file, setFile ] = useState<File | null>(null)
  const [ link, setLink ] = useState<string | null>(null)
  const [ uploading, setUploading ] = useState(false)

  // Omitted code...

  return (
    <div className="App">
      <h1>Upload file to Swarm</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" onChange={onFileChange} />
        <input type="submit" />
      </form>
      { uploading && <code>Uploading...</code> }
      { link && <code><a href={link}>{link}</a></code> }
    </div>
  )
}
```

  </TabItem>
  <TabItem value="js">

```jsx
function App() {
  const [ file, setFile ] = useState(null)
  const [ link, setLink ] = useState(null)
  const [ uploading, setUploading ] = useState(false)

  // Omitted code...

  return (
    <div className="App">
      <h1>Upload file to Swarm</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" onChange={onFileChange} />
        <input type="submit" />
      </form>
      { uploading && <code>Uploading...</code> }
      { link && <code><a href={link}>{link}</a></code> }
    </div>
  )
}
```

  </TabItem>
</Tabs>

Lets disect the two handlers. The `onFileChange` function listens to the file input changes and when a new file is selected, it just stores it in the `file` state variable.

<Tabs
  groupId="lang_preferrence"
  defaultValue="ts"
  values={[
    {label: 'TypeScript', value: 'ts'},
    {label: 'JavaScript', value: 'js'},
  ]}>
  <TabItem value="ts">

```ts
const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const f = e.target && e.target.files && e.target.files[0]

  setFile(f)
}
```

  </TabItem>
  <TabItem value="js">

```js
const onFileChange = (e) => {
  const f = e.target && e.target.files && e.target.files[0]

  setFile(f)
}
```

  </TabItem>
</Tabs>


The `handleSubmit` function does all the interesting work. If a file is selected, it uploads it to Swarm using the `uploadFile` function which returns the hash of the file. The function then sets the download URL and marks the upload process done.

<Tabs
  groupId="lang_preferrence"
  defaultValue="ts"
  values={[
    {label: 'TypeScript', value: 'ts'},
    {label: 'JavaScript', value: 'js'},
  ]}>
  <TabItem value="ts">

```ts
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>)=> {
    event.preventDefault()

    if (file) {
      setUploading(true)
      const hash = await bee.uploadFile(file)
      setLink(`${beeUrl}/files/${hash}`)
      setUploading(false)
    }
  }
```

  </TabItem>
  <TabItem value="js">

```js
  const handleSubmit = async (event)=> {
    event.preventDefault()

    if (file) {
      setUploading(true)
      const hash = await bee.uploadFile(file)
      setLink(`${beeUrl}/files/${hash}`)
      setUploading(false)
    }
  }
```

  </TabItem>
</Tabs>

## Making it a dApp - uploading to Swarm

For the project to trully be a dApp, it should not be hosted on any centralised system. One way to achieve that is to upload it to Swarm. Before we do so, we need to edit few more things and build the project.

Let's start with the `package.json` file. Here we need to set the homepage. This line makes the build process use relative path in the resulting bundle.

```
  "homepage": ".",
```

Next, we need to build the project with the provided build command.

<Tabs
  groupId="npmyarn"
  defaultValue="npm"
  values={[
    {label: 'npm', value: 'npm'},
    {label: 'yarn', value: 'yarn'},
  ]}>
  <TabItem value="npm">

```sh
npm run build
```

  </TabItem>
  <TabItem value="yarn">

```sh
yarn build
```

  </TabItem>
</Tabs>

This will create a `dist` folder that should be uploaded to the Swarm. We are working on `swarm-cli` which will make the upload process easier, but in the mean time you can follow the [Host Your Website on Swarm tutorial in the bee docs](https://docs.ethswarm.org/docs/getting-started/host-your-website-using-ens).