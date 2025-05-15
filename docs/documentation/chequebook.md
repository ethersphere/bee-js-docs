---
title: Chequebook Management
id: chequebook
slug: /chequebook
sidebar_label: Chequebook Management
---

On Swarm, when downloading data from the network, nodes pay each other for forwarding data in the form of cheques. If you will be downloading a significant amount of data from the network, it is important that you fund your chequebook with BZZ so your node can issue and then pay for cheques. 

You can also fund your chequebook by running a full node and getting paid in BZZ for forwarding chunks to other nodes, however this may not be enough depending on your download volume. 

:::tip
If using your node for downloads, it's recommended to actively monitor your node's chequebook balance and top it up once the balance begins to run low.
:::

### Requirements

To use the example scripts below, you need:

- An instance of bee-js's `Bee` [initialized](/docs/getting-started/) using the API endpoint of a currently operating ***FULL*** Bee node.
- Some BZZ to fund your chequebook.

### 1. Deposit to Chequebook from Node Wallet

Deposits a specified amount of BZZ into the chequebook from your node wallet. This ensures that your node can issue cheques for transactions.

```javascript
const amount = new BZZ.fromDecimalString('1') // Deposit 1 BZZ

const transactionHash = await bee.depositTokens(amount)
console.log('Deposit transaction hash:', transactionHash.toHex())
```

```bash
Deposit transaction hash: 85362b9d3ed2ba520b12e4e6523546832064365621ece8b3881cd1dfd40365ec
```

### 2. Get Chequebook Balance

Retrieves the current balance of the chequebook. This helps you ensure that you have enough BZZ to continue issuing cheques.

```javascript
const chequebookBalance = await bee.getChequebookBalance()
console.log('Chequebook Balance:', chequebookBalance)
```

```bash
Chequebook Balance: {
  availableBalance: BZZ { state: FixedPointNumber { value: 10000000000000000n, scale: 16 } },
  totalBalance: BZZ { state: FixedPointNumber { value: 10000000000000000n, scale: 16 } }
}
```

### 3. Withdraw from Chequebook to Node Wallet

Withdraws a specified amount of BZZ from the chequebook to the node wallet. You may need to withdraw if you want to transfer BZZ to another account or for other uses.

```javascript
const amountToWithdraw = new BZZ.fromDecimalString('1') // Withdraw 1 BZZ

const withdrawalHash = await bee.withdrawTokens(amountToWithdraw)
console.log('Withdraw transaction hash:', withdrawalHash.toHex())
```

```bash
Withdraw transaction hash: 7674b1070406f60c317d26d5155521d674e5494db8f90cabbf46de0e22fc5556
```

### 4. Get Cheques

Retrieves information about the last sent and received cheques from peers, either for all peers or for a specific peer.

#### Get Last Cheques for All Peers

This method retrieves the most recent cheques sent or received for all peers. Each entry includes details like the recipient, chequebook address, and payout amount.

```javascript
const lastCheques = await bee.getLastCheques()
console.log('Last Cheques for all peers:', lastCheques)
```

```bash
Last Cheques for all peers: {
  lastcheques: [
    {
      peer: '10f68a7f7fe8b85e04ae0c869c02852f1b568b145c7f59179feef0601d9f1bf7',
      lastreceived: null,
      lastsent: {
        beneficiary: [EthAddress],
        chequebook: [EthAddress],
        payout: [BZZ]
      }
    },
    ...
  ]
}
```

#### Get Cheques for a Specific Peer

Fetches the last cheques for a particular peer. This can help you track your cheques for specific interactions.

```javascript
const peerAddress = '10f68a7f7fe8b85e04ae0c869c02852f1b568b145c7f59179feef0601d9f1bf7' 
const lastChequesForPeer = await bee.getLastChequesForPeer(peerAddress)
console.log(`Last cheques for peer ${peerAddress}:`, lastChequesForPeer)
```

```bash
Last cheques for peer 10f68a7f7fe8b85e04ae0c869c02852f1b568b145c7f59179feef0601d9f1bf7: {
  peer: '10f68a7f7fe8b85e04ae0c869c02852f1b568b145c7f59179feef0601d9f1bf7',
  lastreceived: null,
  lastsent: {
    beneficiary: EthAddress { bytes: [Uint8Array], length: 20 },
    chequebook: EthAddress { bytes: [Uint8Array], length: 20 },
    payout: BZZ { state: [FixedPointNumber] }
  }
}
```

### 5. Cash-out Cheque

Cash out a cheque for a specific peer. This method allows you to retrieve funds from a cheque that has been issued to you by a peer.

#### Cashout the Last Cheque

```javascript
const peerAddress = '10f68a7f7fe8b85e04ae0c869c02852f1b568b145c7f59179feef0601d9f1bf7' 

const transactionId = await bee.cashoutLastCheque(peerAddress)
console.log('Cashout transaction ID:', transactionId)
```

```bash
Cashout transaction ID: dabb1d1b129d4c6317b96db23d9ca2d417aec9961f9a4d52f6b24e165b525eb8
```
