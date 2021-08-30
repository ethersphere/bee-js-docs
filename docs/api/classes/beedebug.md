---
id: "beedebug"
title: "Class: BeeDebug"
sidebar_label: "BeeDebug"
sidebar_position: 0
custom_edit_url: null
---

The BeeDebug class provides a way of interacting with the Bee debug APIs based on the provided url

**`param`** URL of a running Bee node

## Constructors

### constructor

• **new BeeDebug**(`url`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Defined in

[bee-js/src/bee-debug.ts:54](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L54)

## Properties

### url

• `Readonly` **url**: `string`

#### Defined in

[bee-js/src/bee-debug.ts:54](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L54)

## Methods

### cancelPendingTransaction

▸ **cancelPendingTransaction**(`transactionHash`, `gasPrice?`): `Promise`<[`TransactionHash`](../types/transactionhash.md)\>

Cancel currently pending transaction

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` \| [`TransactionHash`](../types/transactionhash.md) |
| `gasPrice?` | [`NumberString`](../types/numberstring.md) |

#### Returns

`Promise`<[`TransactionHash`](../types/transactionhash.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:428](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L428)

___

### cashoutLastCheque

▸ **cashoutLastCheque**(`address`, `options?`): `Promise`<`string`\>

Cashout the last cheque for the peer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` \| [`Address`](../types/address.md) | Swarm address of peer |
| `options?` | [`CashoutOptions`](../interfaces/cashoutoptions.md) |  |

#### Returns

`Promise`<`string`\>

#### Defined in

[bee-js/src/bee-debug.ts:216](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L216)

___

### createPostageBatch

▸ **createPostageBatch**(`amount`, `depth`, `options?`): `Promise`<[`BatchId`](../types/batchid.md)\>

Creates new postage batch from the funds that the node has available in its Ethereum account.

For better understanding what each parameter means and what are the optimal values please see
[Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/access-the-swarm/keep-your-data-alive).

**WARNING: THIS CREATES TRANSACTIONS THAT SPENDS MONEY**

**`throws`** BeeArgumentError when negative amount or depth is specified

**`throws`** TypeError if non-integer value is passed to amount or depth

**`see`** [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/access-the-swarm/keep-your-data-alive)

**`see`** [Bee Debug API reference - `POST /stamps`](https://docs.ethswarm.org/debug-api/#tag/Postage-Stamps/paths/~1stamps~1{amount}~1{depth}/post)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | [`NumberString`](../types/numberstring.md) | Amount that represents the value per chunk, has to be greater or equal zero. |
| `depth` | `number` | Logarithm of the number of chunks that can be stamped with the batch. |
| `options?` | [`PostageBatchOptions`](../interfaces/postagebatchoptions.md) | Options for creation of postage batch |

#### Returns

`Promise`<[`BatchId`](../types/batchid.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:333](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L333)

___

### depositTokens

▸ **depositTokens**(`amount`, `gasPrice?`): `Promise`<`string`\>

Deposit tokens from overlay address into chequebook

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` \| [`NumberString`](../types/numberstring.md) | Amount of tokens to deposit (must be positive integer) |
| `gasPrice?` | [`NumberString`](../types/numberstring.md) | Gas Price in WEI for the transaction call |

#### Returns

`Promise`<`string`\>

string  Hash of the transaction

#### Defined in

[bee-js/src/bee-debug.ts:237](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L237)

___

### getAllBalances

▸ **getAllBalances**(): `Promise`<[`BalanceResponse`](../interfaces/balanceresponse.md)\>

Get the balances with all known peers including prepaid services

#### Returns

`Promise`<[`BalanceResponse`](../interfaces/balanceresponse.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:125](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L125)

___

### getAllPendingTransactions

▸ **getAllPendingTransactions**(): `Promise`<[`TransactionInfo`](../interfaces/transactioninfo.md)[]\>

Return lists of all current pending transactions that the Bee made

#### Returns

`Promise`<[`TransactionInfo`](../interfaces/transactioninfo.md)[]\>

#### Defined in

[bee-js/src/bee-debug.ts:397](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L397)

___

### getAllPostageBatch

▸ **getAllPostageBatch**(): `Promise`<[`DebugPostageBatch`](../interfaces/debugpostagebatch.md)[]\>

Return all postage batches that has the node available.

**`see`** [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/access-the-swarm/keep-your-data-alive)

**`see`** [Bee Debug API reference - `GET /stamps`](https://docs.ethswarm.org/debug-api/#tag/Postage-Stamps/paths/~1stamps/get)

#### Returns

`Promise`<[`DebugPostageBatch`](../interfaces/debugpostagebatch.md)[]\>

#### Defined in

[bee-js/src/bee-debug.ts:390](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L390)

___

### getAllSettlements

▸ **getAllSettlements**(): `Promise`<[`AllSettlements`](../interfaces/allsettlements.md)\>

Get settlements with all known peers and total amount sent or received

#### Returns

`Promise`<[`AllSettlements`](../interfaces/allsettlements.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:282](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L282)

___

### getBlocklist

▸ **getBlocklist**(): `Promise`<[`Peer`](../interfaces/peer.md)[]\>

#### Returns

`Promise`<[`Peer`](../interfaces/peer.md)[]\>

#### Defined in

[bee-js/src/bee-debug.ts:69](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L69)

___

### getChainState

▸ **getChainState**(): `Promise`<[`ChainState`](../interfaces/chainstate.md)\>

Get chain state

#### Returns

`Promise`<[`ChainState`](../interfaces/chainstate.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:312](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L312)

___

### getChequebookAddress

▸ **getChequebookAddress**(): `Promise`<[`ChequebookAddressResponse`](../interfaces/chequebookaddressresponse.md)\>

Get the address of the chequebook contract used.

**Warning:** The address is returned with 0x prefix unlike all other calls.
https://github.com/ethersphere/bee/issues/1443

#### Returns

`Promise`<[`ChequebookAddressResponse`](../interfaces/chequebookaddressresponse.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:168](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L168)

___

### getChequebookBalance

▸ **getChequebookBalance**(): `Promise`<[`ChequebookBalanceResponse`](../interfaces/chequebookbalanceresponse.md)\>

Get the balance of the chequebook

#### Returns

`Promise`<[`ChequebookBalanceResponse`](../interfaces/chequebookbalanceresponse.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:175](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L175)

___

### getHealth

▸ **getHealth**(): `Promise`<[`Health`](../interfaces/health.md)\>

Get health of node

#### Returns

`Promise`<[`Health`](../interfaces/health.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:289](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L289)

___

### getLastCashoutAction

▸ **getLastCashoutAction**(`address`): `Promise`<[`LastCashoutActionResponse`](../interfaces/lastcashoutactionresponse.md)\>

Get last cashout action for the peer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` \| [`Address`](../types/address.md) | Swarm address of peer |

#### Returns

`Promise`<[`LastCashoutActionResponse`](../interfaces/lastcashoutactionresponse.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:202](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L202)

___

### getLastCheques

▸ **getLastCheques**(): `Promise`<[`LastChequesResponse`](../interfaces/lastchequesresponse.md)\>

Get last cheques for all peers

#### Returns

`Promise`<[`LastChequesResponse`](../interfaces/lastchequesresponse.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:182](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L182)

___

### getLastChequesForPeer

▸ **getLastChequesForPeer**(`address`): `Promise`<[`LastChequesForPeerResponse`](../interfaces/lastchequesforpeerresponse.md)\>

Get last cheques for the peer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` \| [`Address`](../types/address.md) | Swarm address of peer |

#### Returns

`Promise`<[`LastChequesForPeerResponse`](../interfaces/lastchequesforpeerresponse.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:191](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L191)

___

### getNodeAddresses

▸ **getNodeAddresses**(): `Promise`<[`NodeAddresses`](../interfaces/nodeaddresses.md)\>

#### Returns

`Promise`<[`NodeAddresses`](../interfaces/nodeaddresses.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:65](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L65)

___

### getPastDueConsumptionBalances

▸ **getPastDueConsumptionBalances**(): `Promise`<[`BalanceResponse`](../interfaces/balanceresponse.md)\>

Get the past due consumption balances with all known peers

#### Returns

`Promise`<[`BalanceResponse`](../interfaces/balanceresponse.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:143](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L143)

___

### getPastDueConsumptionPeerBalance

▸ **getPastDueConsumptionPeerBalance**(`address`): `Promise`<[`PeerBalance`](../interfaces/peerbalance.md)\>

Get the past due consumption balance with a specific peer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` \| [`Address`](../types/address.md) | Swarm address of peer |

#### Returns

`Promise`<[`PeerBalance`](../interfaces/peerbalance.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:152](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L152)

___

### getPeerBalance

▸ **getPeerBalance**(`address`): `Promise`<[`PeerBalance`](../interfaces/peerbalance.md)\>

Get the balances with a specific peer including prepaid services

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` \| [`Address`](../types/address.md) | Swarm address of peer |

#### Returns

`Promise`<[`PeerBalance`](../interfaces/peerbalance.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:134](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L134)

___

### getPeers

▸ **getPeers**(): `Promise`<[`Peer`](../interfaces/peer.md)[]\>

Get list of peers for this node

#### Returns

`Promise`<[`Peer`](../interfaces/peer.md)[]\>

#### Defined in

[bee-js/src/bee-debug.ts:98](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L98)

___

### getPendingTransaction

▸ **getPendingTransaction**(`transactionHash`): `Promise`<[`TransactionInfo`](../interfaces/transactioninfo.md)\>

Return transaction information for specific transaction

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` \| [`TransactionHash`](../types/transactionhash.md) |

#### Returns

`Promise`<[`TransactionInfo`](../interfaces/transactioninfo.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:405](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L405)

___

### getPostageBatch

▸ **getPostageBatch**(`postageBatchId`): `Promise`<[`DebugPostageBatch`](../interfaces/debugpostagebatch.md)\>

Return details for specific postage batch.

**`see`** [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/access-the-swarm/keep-your-data-alive)

**`see`** [Bee Debug API reference - `GET /stamps/${id}`](https://docs.ethswarm.org/debug-api/#tag/Postage-Stamps/paths/~1stamps~1{id}/get)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `postageBatchId` | `string` \| [`BatchId`](../types/batchid.md) | Batch ID |

#### Returns

`Promise`<[`DebugPostageBatch`](../interfaces/debugpostagebatch.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:364](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L364)

___

### getPostageBatchBuckets

▸ **getPostageBatchBuckets**(`postageBatchId`): `Promise`<[`PostageBatchBuckets`](../interfaces/postagebatchbuckets.md)\>

Return detailed information related to buckets for specific postage batch.

**`see`** [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/access-the-swarm/keep-your-data-alive)

**`see`** [Bee Debug API reference - `GET /stamps/${id}/buckets`](https://docs.ethswarm.org/debug-api/#tag/Postage-Stamps/paths/~1stamps~1{id}~1buckets/get)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `postageBatchId` | `string` \| [`BatchId`](../types/batchid.md) | Batch ID |

#### Returns

`Promise`<[`PostageBatchBuckets`](../interfaces/postagebatchbuckets.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:378](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L378)

___

### getReserveState

▸ **getReserveState**(): `Promise`<[`ReserveState`](../interfaces/reservestate.md)\>

Get reserve state

#### Returns

`Promise`<[`ReserveState`](../interfaces/reservestate.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:305](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L305)

___

### getSettlements

▸ **getSettlements**(`address`): `Promise`<[`Settlements`](../interfaces/settlements.md)\>

Get amount of sent and received from settlements with a peer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` \| [`Address`](../types/address.md) | Swarm address of peer |

#### Returns

`Promise`<[`Settlements`](../interfaces/settlements.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:273](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L273)

___

### getTopology

▸ **getTopology**(): `Promise`<[`Topology`](../interfaces/topology.md)\>

#### Returns

`Promise`<[`Topology`](../interfaces/topology.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:108](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L108)

___

### isSupportedVersion

▸ **isSupportedVersion**(): `Promise`<`boolean`\>

Connnects to a node and checks if it is a supported Bee version by the bee-js

#### Returns

`Promise`<`boolean`\>

true if the Bee node version is supported

#### Defined in

[bee-js/src/bee-debug.ts:298](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L298)

___

### pingPeer

▸ **pingPeer**(`peer`): `Promise`<[`PingResponse`](../interfaces/pingresponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `peer` | `string` \| [`Address`](../types/address.md) |

#### Returns

`Promise`<[`PingResponse`](../interfaces/pingresponse.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:112](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L112)

___

### rebroadcastPendingTransaction

▸ **rebroadcastPendingTransaction**(`transactionHash`): `Promise`<[`TransactionHash`](../types/transactionhash.md)\>

Rebroadcast already created transaction.
This is mainly needed when your transaction fall off mempool from other reason is not incorporated into block.

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` \| [`TransactionHash`](../types/transactionhash.md) |

#### Returns

`Promise`<[`TransactionHash`](../types/transactionhash.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:417](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L417)

___

### removePeer

▸ **removePeer**(`peer`): `Promise`<[`RemovePeerResponse`](../interfaces/removepeerresponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `peer` | `string` \| [`Address`](../types/address.md) |

#### Returns

`Promise`<[`RemovePeerResponse`](../interfaces/removepeerresponse.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:102](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L102)

___

### retrieveExtendedTag

▸ **retrieveExtendedTag**(`tagUid`): `Promise`<[`ExtendedTag`](../interfaces/extendedtag.md)\>

Retrieve tag extended information from Bee node

**`throws`** TypeError if tagUid is in not correct format

**`see`** [Bee docs - Syncing / Tags](https://docs.ethswarm.org/docs/access-the-swarm/syncing)

**`see`** [Bee API reference - `GET /tags/{uid}`](https://docs.ethswarm.org/debug-api/#tag/Tag)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tagUid` | `number` \| [`Tag`](../interfaces/tag.md) | UID or tag object to be retrieved |

#### Returns

`Promise`<[`ExtendedTag`](../interfaces/extendedtag.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:83](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L83)

___

### withdrawTokens

▸ **withdrawTokens**(`amount`, `gasPrice?`): `Promise`<`string`\>

Withdraw tokens from the chequebook to the overlay address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` \| [`NumberString`](../types/numberstring.md) | Amount of tokens to withdraw (must be positive integer) |
| `gasPrice?` | [`NumberString`](../types/numberstring.md) | Gas Price in WEI for the transaction call |

#### Returns

`Promise`<`string`\>

string  Hash of the transaction

#### Defined in

[bee-js/src/bee-debug.ts:254](https://github.com/ethersphere/bee-js/blob/74056cb/src/bee-debug.ts#L254)
