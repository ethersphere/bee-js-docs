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

• **new BeeDebug**(`url`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `options?` | [`BeeOptions`](../interfaces/beeoptions.md) |

#### Defined in

[bee-js/src/bee-debug.ts:77](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L77)

## Properties

### url

• `Readonly` **url**: `string`

URL on which is the Debug API of Bee node exposed

#### Defined in

[bee-js/src/bee-debug.ts:71](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L71)

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

[bee-js/src/bee-debug.ts:537](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L537)

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

[bee-js/src/bee-debug.ts:293](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L293)

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

[bee-js/src/bee-debug.ts:424](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L424)

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

[bee-js/src/bee-debug.ts:307](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L307)

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

[bee-js/src/bee-debug.ts:185](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L185)

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

[bee-js/src/bee-debug.ts:496](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L496)

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

[bee-js/src/bee-debug.ts:487](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L487)

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

[bee-js/src/bee-debug.ts:363](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L363)

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

[bee-js/src/bee-debug.ts:119](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L119)

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

[bee-js/src/bee-debug.ts:401](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L401)

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

[bee-js/src/bee-debug.ts:234](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L234)

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

[bee-js/src/bee-debug.ts:243](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L243)

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

[bee-js/src/bee-debug.ts:372](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L372)

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

[bee-js/src/bee-debug.ts:278](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L278)

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

[bee-js/src/bee-debug.ts:252](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L252)

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

[bee-js/src/bee-debug.ts:263](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L263)

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

[bee-js/src/bee-debug.ts:113](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L113)

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

[bee-js/src/bee-debug.ts:206](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L206)

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

[bee-js/src/bee-debug.ts:217](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L217)

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

[bee-js/src/bee-debug.ts:196](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L196)

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

[bee-js/src/bee-debug.ts:152](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L152)

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

[bee-js/src/bee-debug.ts:506](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L506)

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

[bee-js/src/bee-debug.ts:456](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L456)

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

[bee-js/src/bee-debug.ts:471](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L471)

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

[bee-js/src/bee-debug.ts:392](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L392)

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

[bee-js/src/bee-debug.ts:353](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L353)

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

[bee-js/src/bee-debug.ts:165](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L165)

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

[bee-js/src/bee-debug.ts:383](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L383)

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

[bee-js/src/bee-debug.ts:171](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L171)

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

[bee-js/src/bee-debug.ts:522](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L522)

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

[bee-js/src/bee-debug.ts:158](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L158)

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

[bee-js/src/bee-debug.ts:135](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L135)

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

[bee-js/src/bee-debug.ts:329](https://github.com/ethersphere/bee-js/blob/5b112bf/src/bee-debug.ts#L329)
