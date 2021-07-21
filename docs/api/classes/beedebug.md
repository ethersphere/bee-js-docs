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

[bee-js/src/bee-debug.ts:40](https://github.com/ethersphere/bee-js/blob/6f227e1/src/bee-debug.ts#L40)

## Properties

### url

• `Readonly` **url**: `string`

#### Defined in

[bee-js/src/bee-debug.ts:40](https://github.com/ethersphere/bee-js/blob/6f227e1/src/bee-debug.ts#L40)

## Methods

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

[bee-js/src/bee-debug.ts:202](https://github.com/ethersphere/bee-js/blob/6f227e1/src/bee-debug.ts#L202)

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

[bee-js/src/bee-debug.ts:223](https://github.com/ethersphere/bee-js/blob/6f227e1/src/bee-debug.ts#L223)

___

### getAllBalances

▸ **getAllBalances**(): `Promise`<[`BalanceResponse`](../interfaces/balanceresponse.md)\>

Get the balances with all known peers including prepaid services

#### Returns

`Promise`<[`BalanceResponse`](../interfaces/balanceresponse.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:111](https://github.com/ethersphere/bee-js/blob/6f227e1/src/bee-debug.ts#L111)

___

### getAllSettlements

▸ **getAllSettlements**(): `Promise`<[`AllSettlements`](../interfaces/allsettlements.md)\>

Get settlements with all known peers and total amount sent or received

#### Returns

`Promise`<[`AllSettlements`](../interfaces/allsettlements.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:268](https://github.com/ethersphere/bee-js/blob/6f227e1/src/bee-debug.ts#L268)

___

### getBlocklist

▸ **getBlocklist**(): `Promise`<[`Peer`](../interfaces/peer.md)[]\>

#### Returns

`Promise`<[`Peer`](../interfaces/peer.md)[]\>

#### Defined in

[bee-js/src/bee-debug.ts:55](https://github.com/ethersphere/bee-js/blob/6f227e1/src/bee-debug.ts#L55)

___

### getChainState

▸ **getChainState**(): `Promise`<[`ChainState`](../interfaces/chainstate.md)\>

Get chain state

#### Returns

`Promise`<[`ChainState`](../interfaces/chainstate.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:298](https://github.com/ethersphere/bee-js/blob/6f227e1/src/bee-debug.ts#L298)

___

### getChequebookAddress

▸ **getChequebookAddress**(): `Promise`<[`ChequebookAddressResponse`](../interfaces/chequebookaddressresponse.md)\>

Get the address of the chequebook contract used.

**Warning:** The address is returned with 0x prefix unlike all other calls.
https://github.com/ethersphere/bee/issues/1443

#### Returns

`Promise`<[`ChequebookAddressResponse`](../interfaces/chequebookaddressresponse.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:154](https://github.com/ethersphere/bee-js/blob/6f227e1/src/bee-debug.ts#L154)

___

### getChequebookBalance

▸ **getChequebookBalance**(): `Promise`<[`ChequebookBalanceResponse`](../interfaces/chequebookbalanceresponse.md)\>

Get the balance of the chequebook

#### Returns

`Promise`<[`ChequebookBalanceResponse`](../interfaces/chequebookbalanceresponse.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:161](https://github.com/ethersphere/bee-js/blob/6f227e1/src/bee-debug.ts#L161)

___

### getHealth

▸ **getHealth**(): `Promise`<[`Health`](../interfaces/health.md)\>

Get health of node

#### Returns

`Promise`<[`Health`](../interfaces/health.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:275](https://github.com/ethersphere/bee-js/blob/6f227e1/src/bee-debug.ts#L275)

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

[bee-js/src/bee-debug.ts:188](https://github.com/ethersphere/bee-js/blob/6f227e1/src/bee-debug.ts#L188)

___

### getLastCheques

▸ **getLastCheques**(): `Promise`<[`LastChequesResponse`](../interfaces/lastchequesresponse.md)\>

Get last cheques for all peers

#### Returns

`Promise`<[`LastChequesResponse`](../interfaces/lastchequesresponse.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:168](https://github.com/ethersphere/bee-js/blob/6f227e1/src/bee-debug.ts#L168)

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

[bee-js/src/bee-debug.ts:177](https://github.com/ethersphere/bee-js/blob/6f227e1/src/bee-debug.ts#L177)

___

### getNodeAddresses

▸ **getNodeAddresses**(): `Promise`<[`NodeAddresses`](../interfaces/nodeaddresses.md)\>

#### Returns

`Promise`<[`NodeAddresses`](../interfaces/nodeaddresses.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:51](https://github.com/ethersphere/bee-js/blob/6f227e1/src/bee-debug.ts#L51)

___

### getPastDueConsumptionBalances

▸ **getPastDueConsumptionBalances**(): `Promise`<[`BalanceResponse`](../interfaces/balanceresponse.md)\>

Get the past due consumption balances with all known peers

#### Returns

`Promise`<[`BalanceResponse`](../interfaces/balanceresponse.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:129](https://github.com/ethersphere/bee-js/blob/6f227e1/src/bee-debug.ts#L129)

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

[bee-js/src/bee-debug.ts:138](https://github.com/ethersphere/bee-js/blob/6f227e1/src/bee-debug.ts#L138)

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

[bee-js/src/bee-debug.ts:120](https://github.com/ethersphere/bee-js/blob/6f227e1/src/bee-debug.ts#L120)

___

### getPeers

▸ **getPeers**(): `Promise`<[`Peer`](../interfaces/peer.md)[]\>

Get list of peers for this node

#### Returns

`Promise`<[`Peer`](../interfaces/peer.md)[]\>

#### Defined in

[bee-js/src/bee-debug.ts:84](https://github.com/ethersphere/bee-js/blob/6f227e1/src/bee-debug.ts#L84)

___

### getReserveState

▸ **getReserveState**(): `Promise`<[`ReserveState`](../interfaces/reservestate.md)\>

Get reserve state

#### Returns

`Promise`<[`ReserveState`](../interfaces/reservestate.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:291](https://github.com/ethersphere/bee-js/blob/6f227e1/src/bee-debug.ts#L291)

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

[bee-js/src/bee-debug.ts:259](https://github.com/ethersphere/bee-js/blob/6f227e1/src/bee-debug.ts#L259)

___

### getTopology

▸ **getTopology**(): `Promise`<[`Topology`](../interfaces/topology.md)\>

#### Returns

`Promise`<[`Topology`](../interfaces/topology.md)\>

#### Defined in

[bee-js/src/bee-debug.ts:94](https://github.com/ethersphere/bee-js/blob/6f227e1/src/bee-debug.ts#L94)

___

### isSupportedVersion

▸ **isSupportedVersion**(): `Promise`<`boolean`\>

Connnects to a node and checks if it is a supported Bee version by the bee-js

#### Returns

`Promise`<`boolean`\>

true if the Bee node version is supported

#### Defined in

[bee-js/src/bee-debug.ts:284](https://github.com/ethersphere/bee-js/blob/6f227e1/src/bee-debug.ts#L284)

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

[bee-js/src/bee-debug.ts:98](https://github.com/ethersphere/bee-js/blob/6f227e1/src/bee-debug.ts#L98)

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

[bee-js/src/bee-debug.ts:88](https://github.com/ethersphere/bee-js/blob/6f227e1/src/bee-debug.ts#L88)

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

[bee-js/src/bee-debug.ts:69](https://github.com/ethersphere/bee-js/blob/6f227e1/src/bee-debug.ts#L69)

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

[bee-js/src/bee-debug.ts:240](https://github.com/ethersphere/bee-js/blob/6f227e1/src/bee-debug.ts#L240)
