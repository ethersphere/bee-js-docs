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
Uploading to the Swarm network requires Postage stamps for every write operation. To understand this better, see [Bee docs - Keep your data alive](https://docs.ethswarm.org/docs/develop/access-the-swarm/introduction/#keep-your-data-alive). In the following examples, we assume that we already have a `postageBatchId`.
:::

We also need an instance of Bee to interact with the Bee node.

```ts
import { Bee } from "@ethersphere/bee-js"
```

```ts
const bee = new Bee('http://localhost:1633') // Use BeeDev if running Bee in dev mode locally
```

### Upload with ACT

When uploading, we can specify that we are using ACT in the optional `options: RedundantUploadOptions` of the `bee-js` `uploadData` method.

```ts
const optionsUp = {
  act: true,
};
const uploadResultACT: UploadResult = await bee.uploadData(
  postageBatchId,
  "Bee is awesome with ACT!",
  optionsUp);
console.log('uploadResultACT:', {
    ...uploadResultACT,
    reference: uploadResultACT.reference.toString(),
    historyAddress: uploadResultACT.historyAddress.getOrThrow().toString()
});
```

The return value provides a `reference` and a `historyAddress`. Both will be needed for the download.

```json title="uploadResultACT"
{
  "reference": "85ae50e61155d4a0c9c4563c96074e16c33e5640bacfde1ce488978d602927fa",
  "tagUid": 111,
  "historyAddress": "97a1f10b344e79cde136353a61877b417af2c8ecea4a20a362b920aedb240dc7"
}
```

:::info
During the upload process, the node performing the upload acts as the __publisher__. The __public key__ of this uploading node will be used as the publisher's public key.
:::

### Download with ACT

When downloading, we can specify that we are using __ACT__ in the optional `options: DownloadOptions` of the `bee-js` `downloadData` method.

:::warning
Downloading is only possible with the knowledge of the __publisher's__ public key.
:::

```ts
const addr = await bee.getNodeAddresses();

// node public key (publisher public key)
const pubk = addr.publicKey;
const optionsDown: DownloadOptions = {
  actPublisher: pubk,
  actHistoryAddress: uploadResultACT.historyAddress.getOrThrow(),
  actTimestamp: 1
};

const retrievedData: Bytes = await bee.downloadData(uploadResultACT.reference, optionsDown);
console.log('retrievedData:', retrievedData.toUtf8()); // prints 'Bee is awesome with ACT!'
```

### Create Grantees

To download from another node, we need to create a grantee list for the uploaded data that includes the public key of the downloading node. In the following example, we create a grantee list with three public keys. This list can be modified later using the `patchGrantees` method.

```ts
const granteePublicKeys = [
  "02ceff1422a7026ba54ad89967d81f2805a55eb3d05f64eb5c49ea6024212b12e8",
  "02ceff1422a7026ba54ad89967d81f2805a55eb3d05f64eb5c49ea6024212b12e9",
  "02ceff1422a7026ba54ad89967d81f2805a55eb3d05f64eb5c49ea6024212b12ee"
];

// Create Grantees
const granteesResult: GranteesResult  = await bee.createGrantees(postageBatchId, granteePublicKeys);
console.log('granteesResult:', {
  ...granteesResult,
  ref: granteesResult.ref.toString(),
  historyref: granteesResult.historyref.toString(),
})
```

```json title="granteeResult"
{
  "status": 201,
  "statusText": "Created",
  "ref": "30f7ba4fec333227dac0053114f68e70ee64290e095d99470a074fa687f0ad0774370a1e597447fbec7f916c4a2f70d0719150dce3573b290b3fcfe7883ed79d",
  "historyref": "81cd33bf01b771ed899cb41f4d5e91b49dc28a42ee28144f8ba1ba59ecc66f09"
}
```

### List Grantees

```ts
// List Grantees
const getGranteesResult: GetGranteesResult = await bee.getGrantees(granteesResult.ref);
console.log('getGranteesResult:', {
  ...getGranteesResult,
   grantees: getGranteesResult.grantees.map(grantee => grantee.toCompressedHex())
});
```

```json title="getGranteesResult"
{
  "status": 200,
  "statusText": "OK",
  "grantees": [
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
await new Promise(resolve => setTimeout(resolve, 1500));
const granteeResultAfterPatch: GranteesResult = await bee.patchGrantees(postageBatchId, granteesResult.ref, granteesResult.historyref, patch_grantees);
console.log('granteeResultAfterPatch:', {
    ...granteeResultAfterPatch,
    ref: granteeResultAfterPatch.ref.toString(),
    historyref: granteeResultAfterPatch.historyref.toString(),
})
```

```json title="granteeResultAfterPatch"
{
  "status": 200,
  "statusText": "OK",
  "ref": "694152dd351a701a0090b82bbdbd892f110a589596f6a504833855af91aacbf127e292a8a49119c53ec46c112501eab6933340c59d05576ec45354e990479e5f",
  "historyref": "73a62da4ad3a29f1899b548d3dbe1a96baab11ab73b02e36ce9fec728a5b87d3"
}
```

After the patch, the grantee list will have a new reference.

```ts
const getGranteesResultAfterPatch: GetGranteesResult = await bee.getGrantees(granteeResultAfterPatch.ref);
console.log('getGranteesResultAfterPatch:', {
    ...getGranteesResultAfterPatch,
    grantees: getGranteesResultAfterPatch.grantees.map(grantee => grantee.toCompressedHex())
});
```

```json title="getGranteesResultAfterPatch"
{
  "status": 200,
  "statusText": "OK",
  "grantees": [
    "02ceff1422a7026ba54ad89967d81f2805a55eb3d05f64eb5c49ea6024212b12e8",
    "02ceff1422a7026ba54ad89967d81f2805a55eb3d05f64eb5c49ea6024212b12e7"'
  ]
}
```
