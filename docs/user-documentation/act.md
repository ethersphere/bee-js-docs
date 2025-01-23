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

Uploading to Swarm network require to have Postage stamps for every write operation. To understand better what does it mean see [Bee docs - Keep your data alive](https://docs.ethswarm.org/docs/access-the-swarm/keep-your-data-alive).
:::

### Data

The same data structures can be handled with ACT as without ACT.

### Upload with ACT

When uploading, we can indicate that we are uploading with ACT in the optional requestOptions of bee-js uploadData method.

```ts
const beeRequestOptionsUpload = {
    act: true,
}
const uploadResultACT = await bee.uploadData(
    postageBatchId, "Bee is awesome with ACT!",
    beeRequestOptionsUpload)
console.log(uploadResultACT)
```

The return value provides a reference and a history reference. Both will be needed for the download.

```json, title="uploadResultACT"
{
  reference: '97132e8e17831dfa220e73ee083bd82819aaeffce0aaf7e1e0abf8135fcfd2fc',
  tagUid: 14,
  historyAddress: 'c6cabe3a3b7879ddb182277f3037c02002d4ce33280007cac580ac9256be20ea'
}
```

:::info
During the upload, the publisher will be the uploading node.
:::

### Get Node Public Key

```js
import { Bee } from "@ethersphere/bee-js"

const bee = new Bee('http://localhost:1633')
const addr = await bee.getNodeAddresses();

// node public key (publisher public key)
const pubk = addr.publicKey
```

### Download with ACT

When downloading, we can indicate that we are downloading with __ACT__ in the optional requestOptions of `bee-js` `downloadData` method.

:::warning
The download is only possible with the knowledge of the publisher's public key.
:::

```ts
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
    console.log(retrievedData) // prints 'Bee is awesome with ACT!'
```

### Create Grantee

### List Grantees

### Patch Grantees

### List Grantees after patch
