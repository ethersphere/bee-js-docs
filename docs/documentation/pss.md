---
title: Postal Service over Swarm
id: pss
slug: /pss
sidebar_label: Postal Service over Swarm
---

* Remove the unrelated intro section
* Show a listener
* Show a one time receive
* Show a send invocation
* Move it towards the end of the chapters, it is not very important


import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

Swarm provides the ability to send messages that appear to be normal Swarm traffic, but are in fact messages that may be received and decrypted to reveal their content only to specific nodes that were intended to receive them.

PSS provides a pub-sub facility that can be used for a variety of tasks. Nodes are able to listen to messages received for a specific topic in their nearest neighbourhood and create messages destined for another neighbourhood which are sent over the network using Swarm's usual data dissemination protocols.

The intended use of PSS is to communicate privately with a publicly known identity (to for example initiate further communication directly). Due to the cost of mining the trojan chunks, it is not recommended to use as an instant messaging system.

:::caution Light nodes are unreachable
Be aware! You can not send message to Light nodes! This is because light nodes does not fully participate
in the data exchange in Swarm network and hence the message won't arrive to them.
:::

## Getting the relevant data
When you start `bee`, you may find all the necessary information in the log:
```sh
INFO using existing swarm network address: 9e2ebf266369090091620db013aab164afb1574aedb3fcc08ce8dc6e6f28ef54 
INFO swarm public key 03e0cee7e979fa99350fc2e2f8c81d857b525b710380f238742af269bb794dfd3c                        
INFO pss public key 02fa24cac43531176d21678900b37bd800c93da3b02c5e11572fb6a96ec49527fa 
INFO using ethereum address 5f5505033e3b985b88e20616d95201596b463c9a 
```
Let's break it down:
- **Ethereum address** is the public address of your node wallet. Together with the corresponding private key, it is used for things such as making Ethereum transactions (receiving and sending ETH and BZZ); receiving, claiming and singing cheques and the Swarm network address is also derived from it.
- The **Swarm network address** defines your location in the kademlia and within the context of PSS is used for addressing the trojan chunks to you. In other words, others may use it to send you a message.
- **PSS public key** can be used by others to encrypt their messages for you.

<!---
### Deriving swarm address from ethereum address
This section will need a lot of love and testing, probably should be in some advanced page but leaving it here as comment since we want to write it at some point.
-->

## Sending message

To send data simply define a topic, prefix of the recipient's swarm network address (we recommend 4-6 character prefix length) and the data to be send.
:::caution Your communication privacy may be at risk
When sending PSS messages without encryption key, any Bee node through which the trojan chunk passes would be able to read the message.
:::

<Tabs
  groupId="lang_preferrence"
  defaultValue="ts"
  values={[
    {label: 'TypeScript', value: 'ts'},
    {label: 'JavaScript', value: 'js'},
  ]}>
  <TabItem value="ts">

```ts
/**
 * @param {string}            topic
 * @param {string}            targetPrefix
 * @param {string|Uint8Array} data
 * @param {string}            encryptionKey
 */
bee.pssSend('topic', '9e2e', 'Hello!')
```

  </TabItem>
  <TabItem value="js">

```js
/**
 * @param {string}            topic
 * @param {string}            targetPrefix
 * @param {string|Uint8Array} data
 * @param {string}            encryptionKey
 */
bee.pssSend('topic', '9e2e', 'Hello!')
```

  </TabItem>
</Tabs>

If you want to encrypt the message, you may provide the recipient's PSS public key.

<Tabs
  groupId="lang_preferrence"
  defaultValue="ts"
  values={[
    {label: 'TypeScript', value: 'ts'},
    {label: 'JavaScript', value: 'js'},
  ]}>
  <TabItem value="ts">

```ts
bee.pssSend(
  'topic',
  '9e2e',
  'Encrypted Hello!',
  '02fa24cac43531176d21678900b37bd800c93da3b02c5e11572fb6a96ec49527fa',
)
```

  </TabItem>
  <TabItem value="js">

```js
bee.pssSend(
  'topic',
  '9e2e',
  'Encrypted Hello!',
  '02fa24cac43531176d21678900b37bd800c93da3b02c5e11572fb6a96ec49527fa',
)
```

  </TabItem>
</Tabs>

## Retrieving message
As a recipient, you have two ways how to receive the message. If you are expecting one off message (which is the intended PSS use case to exchange credentials for further direct communication), you can use the `pssReceive` method.

<Tabs
  groupId="lang_preferrence"
  defaultValue="ts"
  values={[
    {label: 'TypeScript', value: 'ts'},
    {label: 'JavaScript', value: 'js'},
  ]}>
  <TabItem value="ts">

```ts
const message = await bee.pssReceive('topic')

console.log(message.text()) // prints the received message
```

  </TabItem>
  <TabItem value="js">

```js
const message = await bee.pssReceive('topic')

console.log(message.text()) // prints the received message
```

  </TabItem>
</Tabs>

If you want to subscribe to multiple messagees, use the `pssSubscribe` method.


<Tabs
  groupId="lang_preferrence"
  defaultValue="ts"
  values={[
    {label: 'TypeScript', value: 'ts'},
    {label: 'JavaScript', value: 'js'},
  ]}>
  <TabItem value="ts">

```ts
const handler = {
  onMessage: (message: Data) => {console.log(message.text())},
  onError: (error: BeeError) => {console.log(error)}
}

// Subscribe
const subscription = bee.pssSubscribe('topic', handler)

// Terminate the subscription
subscription.cancel()
```

  </TabItem>
  <TabItem value="js">

```js
const handler = {
  onMessage: (message) => {console.log(message.text())},
  onError: (error) => {console.log(error)}
}

// Subscribe
const subscription = bee.pssSubscribe('topic', handler)

// Terminate the subscription
subscription.cancel()
```

  </TabItem>
</Tabs>
