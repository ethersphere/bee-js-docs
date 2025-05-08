---
title: GSOC
id: gsoc
slug: /gsoc
sidebar_label: GSOC
---


The GSOC (Graffiti Several Owner Chunk) feature allows a **full node** to receive messages from many other nodes using a shared Single Owner Chunk (SOC). This enables real-time messaging over Swarm.

## Overview

GSOC messages are updates to a pre-mined SOC that lands in the **neighborhood** of the recipient node. Only full nodes receive these updates because light nodes do not sync neighborhood chunks. However, **any node** (light or full) can send GSOC messages.

### GSOC vs PSS

GSOC shares some similarities with PSS - both features allow for full nodes to receive messages from other nodes. 

However, there are several key differences:

- Unlike PSS, **GSOC only needs to mine the target chunk once**—multiple messages reuse it, making it **faster, cheaper**, and **more efficient** for recurring updates.
- Unlike PSS, **No encryption** is used by default, making it unsuitable for handling sensitive data.


## Requirements

To use the example scripts below, you need:

- A Bee full node with a fully synced reserve for receiving GSOC messages.
- A light node for sending GSOC messages.
- The batch ID of a usable postage batch. If you don't have one already, you will need to [buy a batch](/docs/storage/#purchasing-storage) to upload data. If you do have one, you will need to [get and save](/docs/storage/#selecting-a-batch) its batch ID.

## Create an Identifier (Receiver and Sender)

Identifiers in GSOC are similar to topics in PSS — they define the stream of messages a receiver node is subscribed to. The sender must use the same identifier so that their messages are received.

Each identifier is a 64-digit hex string (32 bytes). It can be initialized with an a hex string of your choice or any arbitrary string using the `Identifier` utility class. You can also use the zero-initialized `NULL_IDENTIFIER` as a default identifier for cases where you don't need a unique identifier:


```js
import { Identifier, NULL_IDENTIFIER } from '@ethersphere/bee-js'

// Use default (all zeros):
const identifier = NULL_IDENTIFIER

// From a hex string:
const identifier = new Identifier('6527217e549e84f98e51b1d8b1ead62ff5cad59acd9713825754555d6975f103')

// From a human-readable string:
const identifier = Identifier.fromString('chat:v1')
```

- Use `NULL_IDENTIFIER` is a 64 digit hex string of all zeros - use it for quick testing or when uniqueness doesn't matter.
- Use any hex string to initialize a new `Identifier` object .
- Use `Identifier.fromString()` to generate an identifier derived from your string of choice (allows for easy to remember human readable identifiers `"notifications"`, `"chat:user1"`).

## Get Target Overlay (Receiver Node)

This step **is performed by the receiving full node** to retrieve its overlay address. This overlay address is then shared with the sender node to use as a target overlay for its GSOC messages:

```js
import { Bee } from '@ethersphere/bee-js'

const bee = new Bee('http://localhost:1633')

async function checkAddresses() {
  const addresses = await bee.getNodeAddresses()
  console.log('Node Addresses:', addresses)
}

checkAddresses()
```

Example output:

```bash
Node Addresses:
Overlay: 1e2054bec3e681aeb0b365a1f9a574a03782176bd3ec0bcf810ebcaf551e4070
Ethereum: 9a73f283cd9211b96b5ec63f7a81a0ddc847cd93
Public Key: 7d0c4759f689ea3dd3eb79222870671c492cb99f3fade275bcbf0ea39cd0ef6e25edd43c99985983e49aa528f3f2b6711085354a31acb4e7b03559b02ec868f0
PSS Public Key: 5ade58d20be7e04ee8f875eabeebf9c53375a8fc73917683155c7c0b572f47ef790daa3328f48482663954d12f6e4739f748572c1e86bfa89af99f17e7dd4d33
Underlay: [
  '/ip4/127.0.0.1/tcp/1634/p2p/QmcpSJPHuuQYRgDkNfwziihVcpuVteoNxePvfzaJyp9z7j',
  '/ip4/172.17.0.2/tcp/1634/p2p/QmcpSJPHuuQYRgDkNfwziihVcpuVteoNxePvfzaJyp9z7j',
  '/ip6/::1/tcp/1634/p2p/QmcpSJPHuuQYRgDkNfwziihVcpuVteoNxePvfzaJyp9z7j'
]
```

The `Overlay` should be saved and shared with sender nodes.

## Set Up a Listener (Receiver Node)

This must be run on a full node. It mines a key that lands within its own neighborhood and starts listening.

```js
import { Bee, Identifier, NULL_IDENTIFIER } from '@ethersphere/bee-js'

const bee = new Bee('http://localhost:1633')
const identifier = Identifier.fromString(NULL_IDENTIFIER)

async function listen() {
  const { overlay } = await bee.getNodeAddresses()

  // The signer is initialized using the receiving node's own overlay and chosen identifier
  const signer = bee.gsocMine(overlay, identifier)

  // A GSOC subscription is established using the blockchain address derived from the signer and the identifier
  bee.gsocSubscribe(signer.publicKey().address(), identifier, {
    // A callback function is used to handle incoming updates - you can include your application logic here
    onMessage: message => console.log('Received:', message.toUtf8()),
    onError: error => console.error('Subscription error:', error),
  })

  console.log('Listening for GSOC updates...')
}

listen()
```

## Send a Message (Sender Node)

The sending node must have a ***usable postage batch id*** and also know the ***target overlay address*** and ***identifier*** in order to send a message: 

```js
import { Bee, Identifier, NULL_IDENTIFIER } from '@ethersphere/bee-js'

const bee = new Bee('http://localhost:1643')

// The identifier is initialized using the same data as the receiving node
const identifier = Identifier.fromString(NULL_IDENTIFIER)
const batchId = '6c84b6d3f5273b969c3df875cde7ccd9920f5580122929aedaf440bfe4484405'

const recipientOverlay = '1e2054bec3e681aeb0b365a1f9a574a03782176bd3ec0bcf810ebcaf551e4070'

async function sendMessage() {
  // The signer is initialized using the overlay address and identifier shared by the receiving node 
  const signer = bee.gsocMine(recipientOverlay, identifier)

  // bee.gsocSend is called with the batch id, initialized signer, identifier, and message payload in order to send a GSOC message
  await bee.gsocSend(batchId, signer, identifier, 'Hello via GSOC!')
  console.log('Message sent')
}

sendMessage()
```

For more information about GSOC, refer to the [Bee documentation](https://docs.ethswarm.org/docs/develop/tools-and-features/gsoc).

