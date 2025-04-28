---
title: Postal Service over Swarm
id: pss
slug: /pss
sidebar_label: PSS
---

Swarm supports sending encrypted messages over the network using a system called **Postal Service over Swarm** (PSS). These messages are embedded in regular Swarm traffic and routed to specific nodes based on their overlay address.

## What Is PSS?

PSS provides a pub/sub-like functionality for secure messaging. Full nodes can listen for messages on a specific **topic**, and other nodes (light or full) can send them payloads using the recipient node's **overlay address** and optionally encrypted using the recipient's **PSS public key**. 

Messages can be received via **subscription** or by a **one-off listener**.

:::caution
Only full nodes can receive messages since PSS messages are sent as a part of the chunk syncing process which only full nodes take part in. 
:::

## Requirements

To use the example scripts below, you need:

- A Bee full node with a fully synced reserve for receiving PSS messages.
- A light node for sending PSS messages.
- The batch ID of a usable postage batch. If you don't have one already, you will need to [buy a batch](/docs/storage/#purchasing-storage) to upload data. If you do have one, you will need to [get and save](/docs/storage/#selecting-a-batch) its batch ID.


## Get Recipient Info (Full Node Only)

This step **must be performed by the receiving full node**. It retrieves the node’s **overlay address** and **PSS public key**, which must then be shared with the sending node:

- The **overlay address** is **required** as the routing target.
- The **PSS public key** is **optional** and only needed for encryption.

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
The `Overlay` and `PSS Public Key` values should be shared with the sending node. 

The sender (which can be a light node or a full node) needs the **overlay address** to generate the message target, and can optionally use the **PSS public key** to encrypt the message.

## Listen for Messages (Full Node)

You can listen on a topic using both **continuous subscription** and **one-time receive**:


- `bee.pssSubscribe` is used to set up a continuous subscription.
- `bee.pssReceive` is used to set up a listener on a timeout which closes after receiving a message.

```js
import { Bee, Topic } from '@ethersphere/bee-js'

const bee = new Bee('http://localhost:1633')

// Generate a topic from a unique string
const topic = Topic.fromString('pss-demo')

console.log('Subscribing to topic:', topic.toHex())

// Continuous subscription
bee.pssSubscribe(topic, {
  onMessage: msg => console.log('Received via subscription:', msg.toUtf8()),
  onError: err => console.error('Subscription error:', err.message),
})

// One-time receive (3 hour timeout)
async function receiveOnce() {
  try {
    console.log('Waiting for one-time message...')
    const message = await bee.pssReceive(topic, 1000 * 60 * 60 * 3)
    console.log('One-time received:', message.toUtf8())
  } catch (err) {
    console.error('pssReceive error or timeout:', err.message)
  }
}

receiveOnce()
```

In this script we generate a `topic` from our chosen string with the `Topic.fromString` method. Then we subscribe to listen for incoming pss messages for that topic with the `bee.pssSubscribe` method, and we also set up a listener for receiving a single message with the `bee.pssReceive` method. When a chunk with a PSS message for that topic is synced into our node's neighborhood, it will be received and handled by our node with the `onMessage` callback function when using the `bee.pssSubscribe` or through the return value of the `bee.pssReceive` method in our `receiveOnce` function.

## Send Message (Light or Full Node)

The sender must provide:

- A valid **postage batch ID**
- The recipient’s **overlay address** (used to generate the routing target)
- Optionally the **PSS public key** for encryption

```js
import { Bee, Topic, Utils } from '@ethersphere/bee-js'

const bee = new Bee('http://localhost:1643')
const BATCH_ID = '6d8118c693423eef41796d58edbbffb76881806a0f44da728bf80f0c1aafa783'

// The overlay address of the receiving node
const recipientOverlay = '1e2054bec3e681aeb0b365a1f9a574a03782176bd3ec0bcf810ebcaf551e4070'

// Generate a topic using the same string shared by the receiving node
const topic = Topic.fromString('pss-demo')

// Set the number of leading prefix bits to mine for the chunk bearing the PSS message 
const target = Utils.makeMaxTarget(recipientOverlay)

// The PSS message payload
const message = 'Hello from the light node!'

async function send() {
  try {
    await bee.pssSend(BATCH_ID, topic, target, message)
    console.log('Message sent via PSS.')
  } catch (err) {
    console.error('Failed to send message:', err.message)
  }
}

send()
```

## Encrypt with PSS Public Key

To encrypt the message specifically for the recipient, include their **PSS public key** in the send call:

```js
const recipientPssPublicKey = '5ade58d20be7e04ee8f875eabeebf9c53375a8fc73917683155c7c0b572f47ef790daa3328f48482663954d12f6e4739f748572c1e86bfa89af99f17e7dd4d33'

await bee.pssSend(BATCH_ID, topic, target, message, recipientPssPublicKey)
```

The message will then be encrypted using the PSS public key of the recipient node before sending and will only be decryptable by the recipient node (although the message bearing the PSS chunk will be received by all nodes in the same neighborhood as the recipient, it will only be decryptable by the recipient node).
