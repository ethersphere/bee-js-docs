---
title: Checking Node Status
id: status
slug: /status
sidebar_label: Checking Node Status
---

To understand and monitor the status of your Bee node, `bee-js` provides a set of helpful methods. In this guide, we'll walk through how to retrieve and log the following:

- Node health and readiness  
- Topology of connected peers  
- Node addresses  
- Node and API versions 
- General node info  
- Chain state and reserve state  

### Requirements

To use the example scripts below, you need:

- An instance of the `Bee` class from `bee-js` [initialized](/docs/getting-started/) using the API endpoint of a currently operating Bee node: 

    ```js
    import { Bee } from '@ethersphere/bee-js'

    const bee = new Bee('http://localhost:1633')
    ```

## 1. Node Health and Readiness

Use this to access the health and readiness endpoint return values used for container orchestration tools like Kubernetes. 

```js
import { Bee } from '@ethersphere/bee-js'

const bee = new Bee('http://localhost:1633')

async function checkHealthAndReadiness() {
  const health = await bee.getHealth()
  const readiness = await bee.getReadiness()

  console.log('Health:', health)
  console.log('Readiness:', readiness)
}

checkHealthAndReadiness()
```

Output:

```bash
Health: { apiVersion: '7.3.0', version: '2.5.0-5ec231ba', status: 'ok' }
Readiness: { apiVersion: '7.3.0', version: '2.5.0-5ec231ba', status: 'ready' }
```

## 2. Get Node Topology

Use this to inspect how many peers you're connected to, and the state of your neighborhood.

```js
import { Bee } from '@ethersphere/bee-js'

const bee = new Bee('http://localhost:1633')

async function checkTopology() {
  const topology = await bee.getTopology()

  console.log('Topology:', topology)
}

checkTopology()
```

Output:

*Bins 1 - 30 omitted from `bins` result*

```bash
Topology: {
  baseAddr: '1e2054bec3e681aeb0b365a1f9a574a03782176bd3ec0bcf810ebcaf551e4070',
  population: 5619,
  connected: 135,
  timestamp: '2025-03-26T07:54:05.921263981Z',
  nnLowWatermark: 3,
  depth: 10,
  reachability: 'Public',
  networkAvailability: 'Available',
  bins: {
    bin_0: {
      population: 2714,
      connected: 16,
      connectedPeers: [Array],
      disconnectedPeers: [Array]
    },
    ...
    bin_31: {
      population: 0,
      connected: 0,
      connectedPeers: [],
      disconnectedPeers: []
    }
  }
}
```

## 3. Get Node Addresses

This will give you the overlay address, underlay addresses, and Ethereum address associated with your Bee node (the address is an Ethereum style address however it is for a Gnosis Chain account, not mainnet Ethereum).

```js
import { Bee } from '@ethersphere/bee-js'

const bee = new Bee('http://localhost:1633')

async function checkAddresses() {
  const addresses = await bee.getNodeAddresses()

  console.log('Node Addresses:', addresses)
}

checkAddresses()
```

Output:

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

## 4. Get Version and API Compatibility

Use these methods to check your node's version number and the API version number, and to check whether the API version is supported by `bee-js`.

```js
import { Bee } from '@ethersphere/bee-js'

const bee = new Bee('http://localhost:1633')

async function checkVersions() {
  const versions = await bee.getVersions()
  const isSupported = await bee.isSupportedApiVersion()

  console.log('Node Versions:', versions)
  console.log('Is Supported API Version:', isSupported)
}

checkVersions()
```

Output:

```bash
Node Versions: {
  supportedBeeVersion: '2.4.0-390a402e',
  supportedBeeApiVersion: '7.2.0',
  beeVersion: '2.5.0-5ec231ba',
  beeApiVersion: '7.3.0'
}
Is Supported API Version: true
```

## 5. Get Node Info

This provides general information such as node mode (e.g., full, light), and whether chequebook and SWAP are enabled.

```js
import { Bee } from '@ethersphere/bee-js'

const bee = new Bee('http://localhost:1633')

async function getNodeInfo() {
  const info = await bee.getNodeInfo()

  console.log('Node Info:', info)
}

getNodeInfo()
```

Output:

```bash
Node Info: { beeMode: 'light', chequebookEnabled: true, swapEnabled: true } 
```

## 6. Get Chain State

Shows blockchain-related info such as the current price for storage. 

```js
import { Bee } from '@ethersphere/bee-js'

const bee = new Bee('http://localhost:1633')

async function getChainState() {
  const state = await bee.getChainState()

  console.log('Chain State:', state)
}

getChainState()
```

Output:

```bash
Chain State: {
  block: 39230575,
  chainTip: 39230580,
  totalAmount: '204168626286',
  currentPrice: 41699
}
```

## 7. Get Reserve State

This tells you about your node’s local reserve size and storage metrics.

```js
import { Bee } from '@ethersphere/bee-js'

const bee = new Bee('http://localhost:1633')

async function getReserveState() {
  const reserveState = await bee.getReserveState()

  console.log('Reserve State:', reserveState)
}

getReserveState()
```

Output:

```bash
Reserve State: { commitment: 17360879616, radius: 13, storageRadius: 0 }
```

## Run All Checks Together

You can combine all of the above into one function to quickly inspect the full status of your node:

```js
import { Bee, Bytes } from '@ethersphere/bee-js'

const bee = new Bee('http://localhost:1633')

async function checkHealthAndReadiness() {
  const health = await bee.getHealth()
  const readiness = await bee.getReadiness()

  console.log('Health:', health)
  console.log('Readiness:', readiness)
}

async function checkTopology() {
  const topology = await bee.getTopology()

  console.log('Topology:', topology)
}

async function checkAddresses() {
  const addresses = await bee.getNodeAddresses()

  console.log('Node Addresses:')
  console.log('Overlay:', new Bytes(addresses.overlay.bytes).toHex())
  console.log('Ethereum:', new Bytes(addresses.ethereum.bytes).toHex())
  console.log('Public Key:', new Bytes(addresses.publicKey.bytes).toHex())
  console.log('PSS Public Key:', new Bytes(addresses.pssPublicKey.bytes).toHex())
  console.log('Underlay:', addresses.underlay)
}

async function checkVersions() {
  const versions = await bee.getVersions()
  const isSupported = await bee.isSupportedApiVersion()

  console.log('Node Versions:', versions)
  console.log('Is Supported API Version:', isSupported)
}

async function getNodeInfo() {
  const info = await bee.getNodeInfo()

  console.log('Node Info:', info)
}

async function getChainState() {
  const state = await bee.getChainState()

  console.log('Chain State:', state)
}

async function getReserveState() {
  const reserveState = await bee.getReserveState()

  console.log('Reserve State:', reserveState)
}

async function checkNodeStatus() {
  console.log('\n\n=== Node Health and Readiness ===')
  await checkHealthAndReadiness()

  console.log('\n\n=== Node Topology ===')
  await checkTopology()

  console.log('\n\n=== Node Addresses ===')
  await checkAddresses()

  console.log('\n\n=== Version and API Compatibility ===')
  await checkVersions()

  console.log('\n\n=== Node Info ===')
  await getNodeInfo()

  console.log('\n\n=== Chain State ===')
  await getChainState()

  console.log('\n\n=== Reserve State ===')
  await getReserveState()
}

checkNodeStatus()
```
