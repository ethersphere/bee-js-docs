---
id: "beedebug"
title: "Class: BeeDebug"
sidebar_label: "BeeDebug"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new BeeDebug**(`url`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `options?` | [`BeeOptions`](../interfaces/beeoptions.md) |

#### Defined in

[bee-js/src/bee-debug.ts:72](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L72)

## Properties

### url

• `Readonly` **url**: `string`

URL on which is the Debug API of Bee node exposed

#### Defined in

[bee-js/src/bee-debug.ts:66](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L66)

## Methods

### cancelPendingTransaction

▸ **cancelPendingTransaction**(`transactionHash`, `gasPrice?`, `options?`): `Promise`<[`TransactionHash`](../types/transactionhash.md)\>

Cancel currently pending transaction

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` \| [`TransactionHash`](../types/transactionhash.md) |
| `gasPrice?` | [`NumberString`](../types/numberstring.md) |
| `options?` | [`RequestOptions`](../interfaces/requestoptions.md) |

#### Returns

`Promise`<[`TransactionHash`](../types/transactionhash.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:579](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L579)

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

[bee-js/src/bee-debug.ts:288](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L288)

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

[bee-js/src/bee-debug.ts:419](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L419)

___

### depositTokens

▸ **depositTokens**(`amount`, `gasPrice?`, `options?`): `Promise`<`string`\>

Deposit tokens from overlay address into chequebook

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` \| [`NumberString`](../types/numberstring.md) | Amount of tokens to deposit (must be positive integer) |
| `gasPrice?` | [`NumberString`](../types/numberstring.md) | Gas Price in WEI for the transaction call |
| `options?` | [`RequestOptions`](../interfaces/requestoptions.md) | - |

#### Returns

`Promise`<`string`\>

string  Hash of the transaction

#### Defined in

[bee-js/src/bee-debug.ts:302](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L302)

___

### diluteBatch

▸ **diluteBatch**(`postageBatchId`, `depth`, `options?`): `Promise`<`void`\>

Dilute given Postage Batch with new depth (that has to be bigger then the original depth), which allows
the Postage Batch to be used for more chunks.

For better understanding what each parameter means and what are the optimal values please see
[Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/access-the-swarm/keep-your-data-alive).

**WARNING: THIS CREATES TRANSACTIONS THAT SPENDS MONEY**

**`see`** [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/access-the-swarm/keep-your-data-alive)

**`see`** [Bee Debug API reference - `PATCH /stamps/topup/${id}/${amount}`](https://docs.ethswarm.org/debug-api/#tag/Postage-Stamps/paths/~1stamps~1topup~1{id}~1{amount}/patch)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `postageBatchId` | `string` \| [`BatchId`](../types/batchid.md) | Batch ID |
| `depth` | `number` | Amount to be added to the batch |
| `options?` | [`RequestOptions`](../interfaces/requestoptions.md) | Request options |

#### Returns

`Promise`<`void`\>

#### Defined in

[bee-js/src/bee-debug.ts:482](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L482)

___

### getAllBalances

▸ **getAllBalances**(`options?`): `Promise`<[`BalanceResponse`](../interfaces/balanceresponse.md)\>

Get the balances with all known peers including prepaid services

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`RequestOptions`](../interfaces/requestoptions.md) |

#### Returns

`Promise`<[`BalanceResponse`](../interfaces/balanceresponse.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:180](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L180)

___

### getAllPendingTransactions

▸ **getAllPendingTransactions**(`options?`): `Promise`<[`TransactionInfo`](../interfaces/transactioninfo.md)[]\>

Return lists of all current pending transactions that the Bee made

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`RequestOptions`](../interfaces/requestoptions.md) |

#### Returns

`Promise`<[`TransactionInfo`](../interfaces/transactioninfo.md)[]\>

#### Defined in

[bee-js/src/bee-debug.ts:538](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L538)

___

### getAllPostageBatch

▸ **getAllPostageBatch**(`options?`): `Promise`<[`DebugPostageBatch`](../interfaces/debugpostagebatch.md)[]\>

Return all postage batches that has the node available.

**`see`** [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/access-the-swarm/keep-your-data-alive)

**`see`** [Bee Debug API reference - `GET /stamps`](https://docs.ethswarm.org/debug-api/#tag/Postage-Stamps/paths/~1stamps/get)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`RequestOptions`](../interfaces/requestoptions.md) |

#### Returns

`Promise`<[`DebugPostageBatch`](../interfaces/debugpostagebatch.md)[]\>

#### Defined in

[bee-js/src/bee-debug.ts:529](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L529)

___

### getAllSettlements

▸ **getAllSettlements**(`options?`): `Promise`<[`AllSettlements`](../interfaces/allsettlements.md)\>

Get settlements with all known peers and total amount sent or received

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`RequestOptions`](../interfaces/requestoptions.md) |

#### Returns

`Promise`<[`AllSettlements`](../interfaces/allsettlements.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:358](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L358)

___

### getBlocklist

▸ **getBlocklist**(`options?`): `Promise`<[`Peer`](../interfaces/peer.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`RequestOptions`](../interfaces/requestoptions.md) |

#### Returns

`Promise`<[`Peer`](../interfaces/peer.md)[]\>

#### Defined in

[bee-js/src/bee-debug.ts:114](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L114)

___

### getChainState

▸ **getChainState**(`options?`): `Promise`<[`ChainState`](../interfaces/chainstate.md)\>

Get chain state

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`RequestOptions`](../interfaces/requestoptions.md) |

#### Returns

`Promise`<[`ChainState`](../interfaces/chainstate.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:396](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L396)

___

### getChequebookAddress

▸ **getChequebookAddress**(`options?`): `Promise`<[`ChequebookAddressResponse`](../interfaces/chequebookaddressresponse.md)\>

Get the address of the chequebook contract used.

**Warning:** The address is returned with 0x prefix unlike all other calls.
https://github.com/ethersphere/bee/issues/1443

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`RequestOptions`](../interfaces/requestoptions.md) |

#### Returns

`Promise`<[`ChequebookAddressResponse`](../interfaces/chequebookaddressresponse.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:229](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L229)

___

### getChequebookBalance

▸ **getChequebookBalance**(`options?`): `Promise`<[`ChequebookBalanceResponse`](../interfaces/chequebookbalanceresponse.md)\>

Get the balance of the chequebook

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`RequestOptions`](../interfaces/requestoptions.md) |

#### Returns

`Promise`<[`ChequebookBalanceResponse`](../interfaces/chequebookbalanceresponse.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:238](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L238)

___

### getHealth

▸ **getHealth**(`options?`): `Promise`<[`Health`](../interfaces/health.md)\>

Get health of node

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`RequestOptions`](../interfaces/requestoptions.md) |

#### Returns

`Promise`<[`Health`](../interfaces/health.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:367](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L367)

___

### getLastCashoutAction

▸ **getLastCashoutAction**(`address`, `options?`): `Promise`<[`LastCashoutActionResponse`](../interfaces/lastcashoutactionresponse.md)\>

Get last cashout action for the peer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` \| [`Address`](../types/address.md) | Swarm address of peer |
| `options?` | [`RequestOptions`](../interfaces/requestoptions.md) | - |

#### Returns

`Promise`<[`LastCashoutActionResponse`](../interfaces/lastcashoutactionresponse.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:273](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L273)

___

### getLastCheques

▸ **getLastCheques**(`options?`): `Promise`<[`LastChequesResponse`](../interfaces/lastchequesresponse.md)\>

Get last cheques for all peers

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`RequestOptions`](../interfaces/requestoptions.md) |

#### Returns

`Promise`<[`LastChequesResponse`](../interfaces/lastchequesresponse.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:247](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L247)

___

### getLastChequesForPeer

▸ **getLastChequesForPeer**(`address`, `options?`): `Promise`<[`LastChequesForPeerResponse`](../interfaces/lastchequesforpeerresponse.md)\>

Get last cheques for the peer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` \| [`Address`](../types/address.md) | Swarm address of peer |
| `options?` | [`RequestOptions`](../interfaces/requestoptions.md) | - |

#### Returns

`Promise`<[`LastChequesForPeerResponse`](../interfaces/lastchequesforpeerresponse.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:258](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L258)

___

### getNodeAddresses

▸ **getNodeAddresses**(`options?`): `Promise`<[`NodeAddresses`](../interfaces/nodeaddresses.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`RequestOptions`](../interfaces/requestoptions.md) |

#### Returns

`Promise`<[`NodeAddresses`](../interfaces/nodeaddresses.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:108](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L108)

___

### getPastDueConsumptionBalances

▸ **getPastDueConsumptionBalances**(`options?`): `Promise`<[`BalanceResponse`](../interfaces/balanceresponse.md)\>

Get the past due consumption balances with all known peers

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`RequestOptions`](../interfaces/requestoptions.md) |

#### Returns

`Promise`<[`BalanceResponse`](../interfaces/balanceresponse.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:201](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L201)

___

### getPastDueConsumptionPeerBalance

▸ **getPastDueConsumptionPeerBalance**(`address`, `options?`): `Promise`<[`PeerBalance`](../interfaces/peerbalance.md)\>

Get the past due consumption balance with a specific peer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` \| [`Address`](../types/address.md) | Swarm address of peer |
| `options?` | [`RequestOptions`](../interfaces/requestoptions.md) | - |

#### Returns

`Promise`<[`PeerBalance`](../interfaces/peerbalance.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:212](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L212)

___

### getPeerBalance

▸ **getPeerBalance**(`address`, `options?`): `Promise`<[`PeerBalance`](../interfaces/peerbalance.md)\>

Get the balances with a specific peer including prepaid services

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` \| [`Address`](../types/address.md) | Swarm address of peer |
| `options?` | [`RequestOptions`](../interfaces/requestoptions.md) | - |

#### Returns

`Promise`<[`PeerBalance`](../interfaces/peerbalance.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:191](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L191)

___

### getPeers

▸ **getPeers**(`options?`): `Promise`<[`Peer`](../interfaces/peer.md)[]\>

Get list of peers for this node

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`RequestOptions`](../interfaces/requestoptions.md) |

#### Returns

`Promise`<[`Peer`](../interfaces/peer.md)[]\>

#### Defined in

[bee-js/src/bee-debug.ts:147](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L147)

___

### getPendingTransaction

▸ **getPendingTransaction**(`transactionHash`, `options?`): `Promise`<[`TransactionInfo`](../interfaces/transactioninfo.md)\>

Return transaction information for specific transaction

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` \| [`TransactionHash`](../types/transactionhash.md) |
| `options?` | [`RequestOptions`](../interfaces/requestoptions.md) |

#### Returns

`Promise`<[`TransactionInfo`](../interfaces/transactioninfo.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:548](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L548)

___

### getPostageBatch

▸ **getPostageBatch**(`postageBatchId`, `options?`): `Promise`<[`DebugPostageBatch`](../interfaces/debugpostagebatch.md)\>

Return details for specific postage batch.

**`see`** [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/access-the-swarm/keep-your-data-alive)

**`see`** [Bee Debug API reference - `GET /stamps/${id}`](https://docs.ethswarm.org/debug-api/#tag/Postage-Stamps/paths/~1stamps~1{id}/get)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `postageBatchId` | `string` \| [`BatchId`](../types/batchid.md) | Batch ID |
| `options?` | [`RequestOptions`](../interfaces/requestoptions.md) | - |

#### Returns

`Promise`<[`DebugPostageBatch`](../interfaces/debugpostagebatch.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:498](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L498)

___

### getPostageBatchBuckets

▸ **getPostageBatchBuckets**(`postageBatchId`, `options?`): `Promise`<[`PostageBatchBuckets`](../interfaces/postagebatchbuckets.md)\>

Return detailed information related to buckets for specific postage batch.

**`see`** [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/access-the-swarm/keep-your-data-alive)

**`see`** [Bee Debug API reference - `GET /stamps/${id}/buckets`](https://docs.ethswarm.org/debug-api/#tag/Postage-Stamps/paths/~1stamps~1{id}~1buckets/get)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `postageBatchId` | `string` \| [`BatchId`](../types/batchid.md) | Batch ID |
| `options?` | [`RequestOptions`](../interfaces/requestoptions.md) | - |

#### Returns

`Promise`<[`PostageBatchBuckets`](../interfaces/postagebatchbuckets.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:513](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L513)

___

### getReserveState

▸ **getReserveState**(`options?`): `Promise`<[`ReserveState`](../interfaces/reservestate.md)\>

Get reserve state

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`RequestOptions`](../interfaces/requestoptions.md) |

#### Returns

`Promise`<[`ReserveState`](../interfaces/reservestate.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:387](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L387)

___

### getSettlements

▸ **getSettlements**(`address`, `options?`): `Promise`<[`Settlements`](../interfaces/settlements.md)\>

Get amount of sent and received from settlements with a peer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` \| [`Address`](../types/address.md) | Swarm address of peer |
| `options?` | [`RequestOptions`](../interfaces/requestoptions.md) | - |

#### Returns

`Promise`<[`Settlements`](../interfaces/settlements.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:348](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L348)

___

### getTopology

▸ **getTopology**(`options?`): `Promise`<[`Topology`](../interfaces/topology.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`RequestOptions`](../interfaces/requestoptions.md) |

#### Returns

`Promise`<[`Topology`](../interfaces/topology.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:160](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L160)

___

### isSupportedVersion

▸ **isSupportedVersion**(`options?`): `Promise`<`boolean`\>

Connnects to a node and checks if it is a supported Bee version by the bee-js

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`RequestOptions`](../interfaces/requestoptions.md) |

#### Returns

`Promise`<`boolean`\>

true if the Bee node version is supported

#### Defined in

[bee-js/src/bee-debug.ts:378](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L378)

___

### pingPeer

▸ **pingPeer**(`peer`, `options?`): `Promise`<[`PingResponse`](../interfaces/pingresponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `peer` | `string` \| [`Address`](../types/address.md) |
| `options?` | [`RequestOptions`](../interfaces/requestoptions.md) |

#### Returns

`Promise`<[`PingResponse`](../interfaces/pingresponse.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:166](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L166)

___

### rebroadcastPendingTransaction

▸ **rebroadcastPendingTransaction**(`transactionHash`, `options?`): `Promise`<[`TransactionHash`](../types/transactionhash.md)\>

Rebroadcast already created transaction.
This is mainly needed when your transaction fall off mempool from other reason is not incorporated into block.

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` \| [`TransactionHash`](../types/transactionhash.md) |
| `options?` | [`RequestOptions`](../interfaces/requestoptions.md) |

#### Returns

`Promise`<[`TransactionHash`](../types/transactionhash.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:564](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L564)

___

### removePeer

▸ **removePeer**(`peer`, `options?`): `Promise`<[`RemovePeerResponse`](../interfaces/removepeerresponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `peer` | `string` \| [`Address`](../types/address.md) |
| `options?` | [`RequestOptions`](../interfaces/requestoptions.md) |

#### Returns

`Promise`<[`RemovePeerResponse`](../interfaces/removepeerresponse.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:153](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L153)

___

### retrieveExtendedTag

▸ **retrieveExtendedTag**(`tagUid`, `options?`): `Promise`<[`ExtendedTag`](../interfaces/extendedtag.md)\>

Retrieve tag extended information from Bee node

**`throws`** TypeError if tagUid is in not correct format

**`see`** [Bee docs - Syncing / Tags](https://docs.ethswarm.org/docs/access-the-swarm/syncing)

**`see`** [Bee API reference - `GET /tags/{uid}`](https://docs.ethswarm.org/debug-api/#tag/Tag)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tagUid` | `number` \| [`Tag`](../interfaces/tag.md) | UID or tag object to be retrieved |
| `options?` | [`RequestOptions`](../interfaces/requestoptions.md) | - |

#### Returns

`Promise`<[`ExtendedTag`](../interfaces/extendedtag.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:130](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L130)

___

### topUpBatch

▸ **topUpBatch**(`postageBatchId`, `amount`, `options?`): `Promise`<`void`\>

Topup a fresh amount of BZZ to given Postage Batch.

For better understanding what each parameter means and what are the optimal values please see
[Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/access-the-swarm/keep-your-data-alive).

**WARNING: THIS CREATES TRANSACTIONS THAT SPENDS MONEY**

**`see`** [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/access-the-swarm/keep-your-data-alive)

**`see`** [Bee Debug API reference - `PATCH /stamps/topup/${id}/${amount}`](https://docs.ethswarm.org/debug-api/#tag/Postage-Stamps/paths/~1stamps~1topup~1{id}~1{amount}/patch)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `postageBatchId` | `string` \| [`BatchId`](../types/batchid.md) | Batch ID |
| `amount` | [`NumberString`](../types/numberstring.md) | Amount to be added to the batch |
| `options?` | [`RequestOptions`](../interfaces/requestoptions.md) | Request options |

#### Returns

`Promise`<`void`\>

#### Defined in

[bee-js/src/bee-debug.ts:458](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L458)

___

### withdrawTokens

▸ **withdrawTokens**(`amount`, `gasPrice?`, `options?`): `Promise`<`string`\>

Withdraw tokens from the chequebook to the overlay address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` \| [`NumberString`](../types/numberstring.md) | Amount of tokens to withdraw (must be positive integer) |
| `gasPrice?` | [`NumberString`](../types/numberstring.md) | Gas Price in WEI for the transaction call |
| `options?` | [`RequestOptions`](../interfaces/requestoptions.md) | - |

#### Returns

`Promise`<`string`\>

string  Hash of the transaction

#### Defined in

[bee-js/src/bee-debug.ts:324](https://github.com/ethersphere/bee-js/blob/ae6a776/src/bee-debug.ts#L324)
