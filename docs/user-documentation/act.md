---
title: Access Control Trie (ACT)
hide_title: true
id: act
slug: /act
sidebar_label: Access Control Trie
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

## Access Control Trie

The [Access Control Trie (ACT)](https://solarpunk.buzz/introducing-the-access-control-trie-act-in-swarm/) is an essential feature designed to manage access control in Swarm’s decentralized storage infrastructure. It enables __publishers__ to grant or revoke access to specific content at the chunk level using encrypted session keys. This guide will walk you through the key concepts and practical aspects of using __ACT__ to protect your data in Swarm.

:::warning Postage stamps
Uploading to the Swarm network requires Postage stamps for every write operation. To understand this better, see [Bee docs - Postage Stamps](https://docs.ethswarm.org/docs/concepts/incentives/postage-stamps). In the following examples, we assume that we already have a `postageBatchId`.
:::

We also need an instance of Bee to interact with the Bee node.

```ts
import { Bee } from "@ethersphere/bee-js"

const bee = new Bee('http://localhost:1633')
```

### Upload with ACT

When uploading, we can specify that we are using ACT in the optional `requestOptions` of the `bee-js` `uploadData` method.

```ts
const beeRequestOptionsUpload = {
    act: true,
}
const uploadResultACT = await bee.uploadData(
    postageBatchId,
    "Bee is awesome with ACT!",
    beeRequestOptionsUpload
)
console.log(uploadResultACT)
```

The return value provides a `reference` and a `historyAddress`. Both will be needed for the download.

```json title="uploadResultACT"
{
  "reference": "97132e8e17831dfa220e73ee083bd82819aaeffce0aaf7e1e0abf8135fcfd2fc",
  "tagUid": 14,
  "historyAddress": "c6cabe3a3b7879ddb182277f3037c02002d4ce33280007cac580ac9256be20ea"
}
```

:::info
During the upload process, the node performing the upload acts as the __publisher__. The __public key__ of this uploading node will be used as the publisher's public key.
:::

### Download with ACT

When downloading, we can specify that we are using __ACT__ in the optional `requestOptions` of the `bee-js` `downloadData` method.

:::warning
Downloading is only possible with the knowledge of the __publisher's__ public key.
:::

```ts
const addr = await bee.getNodeAddresses()

// node public key (publisher public key)
const pubk = addr.publicKey

const beeRequestOptionsDownload = {
    baseURL: BEE_API_URL,
    timeout: 0, // false converted to number
    headers: {
        'swarm-act': 'true',
        'swarm-act-publisher': pubk, // publisher public key
        'swarm-act-history-address': uploadResultACT.historyAddress,
    },
}

const retrievedData = await bee.downloadData(uploadResultACT.reference, beeRequestOptionsDownload)
console.log(await retrievedData.text()) // prints 'Bee is awesome with ACT!'
```

### Create Grantees

To download from another node, we need to create a grantee list for the uploaded data that includes the public key of the downloading node. In the following example, we create a grantee list with three public keys. This list can be modified later using the `patchGrantees` method.

```ts
const granteePublicKeys = [
    "02ceff1422a7026ba54ad89967d81f2805a55eb3d05f64eb5c49ea6024212b12e8",
    "02ceff1422a7026ba54ad89967d81f2805a55eb3d05f64eb5c49ea6024212b12e9",
    "02ceff1422a7026ba54ad89967d81f2805a55eb3d05f64eb5c49ea6024212b12ee"
]

// Create Grantees
const granteeResult = await bee.createGrantees(postageBatchId, granteePublicKeys)
console.log(granteeResult)
```

```json title="granteeResult"
{
  "status": 201,
  "statusText": "Created",
  "ref": "810b802516f3f0d1ded180d19fdf27bbc05b95a5b7ec8448b5a2d90819e06bed8fdf0697efad7074e66f52679a3aa51010d1897f4ce00918f8fd938b0ff35c3a",
  "historyref": "4feb7fc56dcea1acaa74c1fb980156d6db9667b223809c082d69542545c67faf"
}
```

### List Grantees

```ts
// List Grantees
const getGranteesResult = await bee.getGrantees(granteeResult.ref)
console.log(getGranteesResult)
```

```json title="getGranteesResult"
{
  "status": 200,
  "statusText": "OK",
  "data": [
    "02ceff1422a7026ba54ad89967d81f2805a55eb3d05f64eb5c49ea6024212b12e8",
    "02ceff1422a7026ba54ad89967d81f2805a55eb3d05f64eb5c49ea6024212b12e9",
    "02ceff1422a7026ba54ad89967d81f2805a55eb3d05f64eb5c49ea6024212b12ee"
  ]
}
```

### Patch Grantees

The grantee list can be modified with `patchGrantees`. In our example, we add a new element and remove the last two elements from the `granteePublicKeys` list.

```ts
// Patch Grantees
const patchGrantees = {
    add: [
        "02ceff1422a7026ba54ad89967d81f2805a55eb3d05f64eb5c49ea6024212b12e7"
    ],
    revoke: [
        granteePublicKeys[1],
        granteePublicKeys[2],
    ]
}
// A short delay is needed if we call it immediately after createGrantees.
await new Promise(resolve => setTimeout(resolve, 1500))
const granteeResultAfterPatch = await bee.patchGrantees(
    postageBatchId,
    granteeResult.ref,
    granteeResult.historyref,
    patchGrantees
)
console.log(granteeResultAfterPatch)
```

```json title="granteeResultAfterPatch"
{
  "status": 200,
  "statusText": "OK",
  "ref": "ae9fd8e0d9158ab9a433bacfde9109bd0545e31a0d8e4f592a5a558e842de59a86f73e08a594874fe38d6a68cfa636a729dcc73b746083b12a384b6578ac5dce",
  "historyref": "0a0f709ed9d5ecd46434b8c62aeefc84bffeed7a80741c453d27ffdf67359fff"
}
```

After the patch, the grantee list will have a new reference.

```ts
// List Grantees
const getGranteesResultAfterPatch = await bee.getGrantees(granteeResultAfterPatch.ref)
console.log(getGranteesResultAfterPatch)
```

```json title="getGranteesResultAfterPatch"
{
  "status": 200,
  "statusText": "OK",
  "data": [
    "02ceff1422a7026ba54ad89967d81f2805a55eb3d05f64eb5c49ea6024212b12e8",
    "02ceff1422a7026ba54ad89967d81f2805a55eb3d05f64eb5c49ea6024212b12e7"
  ]
}
```
