---
id: "beedebug"
title: "Class: BeeDebug"
sidebar_label: "BeeDebug"
custom_edit_url: null
hide_title: true
---

# Class: BeeDebug

The BeeDebug class provides a way of interacting with the Bee debug APIs based on the provided url

**`param`** URL of a running Bee node

## Constructors

### constructor

\+ **new BeeDebug**(`url`: *string*): [*BeeDebug*](beedebug.md)

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |

**Returns:** [*BeeDebug*](beedebug.md)

Defined in: [bee-js/src/bee-debug.ts:37](https://github.com/ethersphere/bee-js/blob/430becc/src/bee-debug.ts#L37)

## Properties

### url

• `Readonly` **url**: *string*

Defined in: [bee-js/src/bee-debug.ts:37](https://github.com/ethersphere/bee-js/blob/430becc/src/bee-debug.ts#L37)

## Methods

### cashoutLastCheque

▸ **cashoutLastCheque**(`address`: *string* \| [*Address*](../types/address.md), `options?`: [*CashoutOptions*](../interfaces/cashoutoptions.md)): *Promise*<string\>

Cashout the last cheque for the peer

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`address` | *string* \| [*Address*](../types/address.md) | Swarm address of peer   |
`options?` | [*CashoutOptions*](../interfaces/cashoutoptions.md) |  |

**Returns:** *Promise*<string\>

Defined in: [bee-js/src/bee-debug.ts:177](https://github.com/ethersphere/bee-js/blob/430becc/src/bee-debug.ts#L177)

___

### depositTokens

▸ **depositTokens**(`amount`: *number* \| *bigint*, `gasPrice?`: *bigint*): *Promise*<string\>

Deposit tokens from overlay address into chequebook

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`amount` | *number* \| *bigint* | Amount of tokens to deposit (must be positive integer)   |
`gasPrice?` | *bigint* | Gas Price in WEI for the transaction call   |

**Returns:** *Promise*<string\>

string  Hash of the transaction

Defined in: [bee-js/src/bee-debug.ts:198](https://github.com/ethersphere/bee-js/blob/430becc/src/bee-debug.ts#L198)

___

### getAllBalances

▸ **getAllBalances**(): *Promise*<[*BalanceResponse*](../interfaces/balanceresponse.md)\>

Get the balances with all known peers including prepaid services

**Returns:** *Promise*<[*BalanceResponse*](../interfaces/balanceresponse.md)\>

Defined in: [bee-js/src/bee-debug.ts:86](https://github.com/ethersphere/bee-js/blob/430becc/src/bee-debug.ts#L86)

___

### getAllSettlements

▸ **getAllSettlements**(): *Promise*<[*AllSettlements*](../interfaces/allsettlements.md)\>

Get settlements with all known peers and total amount sent or received

**Returns:** *Promise*<[*AllSettlements*](../interfaces/allsettlements.md)\>

Defined in: [bee-js/src/bee-debug.ts:243](https://github.com/ethersphere/bee-js/blob/430becc/src/bee-debug.ts#L243)

___

### getBlocklist

▸ **getBlocklist**(): *Promise*<[*Peer*](../interfaces/peer.md)[]\>

**Returns:** *Promise*<[*Peer*](../interfaces/peer.md)[]\>

Defined in: [bee-js/src/bee-debug.ts:52](https://github.com/ethersphere/bee-js/blob/430becc/src/bee-debug.ts#L52)

___

### getChainState

▸ **getChainState**(): *Promise*<[*ChainState*](../interfaces/chainstate.md)\>

Get chain state

**Returns:** *Promise*<[*ChainState*](../interfaces/chainstate.md)\>

Defined in: [bee-js/src/bee-debug.ts:273](https://github.com/ethersphere/bee-js/blob/430becc/src/bee-debug.ts#L273)

___

### getChequebookAddress

▸ **getChequebookAddress**(): *Promise*<[*ChequebookAddressResponse*](../interfaces/chequebookaddressresponse.md)\>

Get the address of the chequebook contract used.

**Warning:** The address is returned with 0x prefix unlike all other calls.
https://github.com/ethersphere/bee/issues/1443

**Returns:** *Promise*<[*ChequebookAddressResponse*](../interfaces/chequebookaddressresponse.md)\>

Defined in: [bee-js/src/bee-debug.ts:129](https://github.com/ethersphere/bee-js/blob/430becc/src/bee-debug.ts#L129)

___

### getChequebookBalance

▸ **getChequebookBalance**(): *Promise*<[*ChequebookBalanceResponse*](../interfaces/chequebookbalanceresponse.md)\>

Get the balance of the chequebook

**Returns:** *Promise*<[*ChequebookBalanceResponse*](../interfaces/chequebookbalanceresponse.md)\>

Defined in: [bee-js/src/bee-debug.ts:136](https://github.com/ethersphere/bee-js/blob/430becc/src/bee-debug.ts#L136)

___

### getHealth

▸ **getHealth**(): *Promise*<[*Health*](../interfaces/health.md)\>

Get health of node

**Returns:** *Promise*<[*Health*](../interfaces/health.md)\>

Defined in: [bee-js/src/bee-debug.ts:250](https://github.com/ethersphere/bee-js/blob/430becc/src/bee-debug.ts#L250)

___

### getLastCashoutAction

▸ **getLastCashoutAction**(`address`: *string* \| [*Address*](../types/address.md)): *Promise*<[*LastCashoutActionResponse*](../interfaces/lastcashoutactionresponse.md)\>

Get last cashout action for the peer

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`address` | *string* \| [*Address*](../types/address.md) | Swarm address of peer    |

**Returns:** *Promise*<[*LastCashoutActionResponse*](../interfaces/lastcashoutactionresponse.md)\>

Defined in: [bee-js/src/bee-debug.ts:163](https://github.com/ethersphere/bee-js/blob/430becc/src/bee-debug.ts#L163)

___

### getLastCheques

▸ **getLastCheques**(): *Promise*<[*LastChequesResponse*](../interfaces/lastchequesresponse.md)\>

Get last cheques for all peers

**Returns:** *Promise*<[*LastChequesResponse*](../interfaces/lastchequesresponse.md)\>

Defined in: [bee-js/src/bee-debug.ts:143](https://github.com/ethersphere/bee-js/blob/430becc/src/bee-debug.ts#L143)

___

### getLastChequesForPeer

▸ **getLastChequesForPeer**(`address`: *string* \| [*Address*](../types/address.md)): *Promise*<[*LastChequesForPeerResponse*](../interfaces/lastchequesforpeerresponse.md)\>

Get last cheques for the peer

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`address` | *string* \| [*Address*](../types/address.md) | Swarm address of peer    |

**Returns:** *Promise*<[*LastChequesForPeerResponse*](../interfaces/lastchequesforpeerresponse.md)\>

Defined in: [bee-js/src/bee-debug.ts:152](https://github.com/ethersphere/bee-js/blob/430becc/src/bee-debug.ts#L152)

___

### getNodeAddresses

▸ **getNodeAddresses**(): *Promise*<[*NodeAddresses*](../interfaces/nodeaddresses.md)\>

**Returns:** *Promise*<[*NodeAddresses*](../interfaces/nodeaddresses.md)\>

Defined in: [bee-js/src/bee-debug.ts:48](https://github.com/ethersphere/bee-js/blob/430becc/src/bee-debug.ts#L48)

___

### getPastDueConsumptionBalances

▸ **getPastDueConsumptionBalances**(): *Promise*<[*BalanceResponse*](../interfaces/balanceresponse.md)\>

Get the past due consumption balances with all known peers

**Returns:** *Promise*<[*BalanceResponse*](../interfaces/balanceresponse.md)\>

Defined in: [bee-js/src/bee-debug.ts:104](https://github.com/ethersphere/bee-js/blob/430becc/src/bee-debug.ts#L104)

___

### getPastDueConsumptionPeerBalance

▸ **getPastDueConsumptionPeerBalance**(`address`: *string* \| [*Address*](../types/address.md)): *Promise*<[*PeerBalance*](../interfaces/peerbalance.md)\>

Get the past due consumption balance with a specific peer

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`address` | *string* \| [*Address*](../types/address.md) | Swarm address of peer    |

**Returns:** *Promise*<[*PeerBalance*](../interfaces/peerbalance.md)\>

Defined in: [bee-js/src/bee-debug.ts:113](https://github.com/ethersphere/bee-js/blob/430becc/src/bee-debug.ts#L113)

___

### getPeerBalance

▸ **getPeerBalance**(`address`: *string* \| [*Address*](../types/address.md)): *Promise*<[*PeerBalance*](../interfaces/peerbalance.md)\>

Get the balances with a specific peer including prepaid services

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`address` | *string* \| [*Address*](../types/address.md) | Swarm address of peer    |

**Returns:** *Promise*<[*PeerBalance*](../interfaces/peerbalance.md)\>

Defined in: [bee-js/src/bee-debug.ts:95](https://github.com/ethersphere/bee-js/blob/430becc/src/bee-debug.ts#L95)

___

### getPeers

▸ **getPeers**(): *Promise*<[*Peer*](../interfaces/peer.md)[]\>

Get list of peers for this node

**Returns:** *Promise*<[*Peer*](../interfaces/peer.md)[]\>

Defined in: [bee-js/src/bee-debug.ts:59](https://github.com/ethersphere/bee-js/blob/430becc/src/bee-debug.ts#L59)

___

### getReserveState

▸ **getReserveState**(): *Promise*<[*ReserveState*](../interfaces/reservestate.md)\>

Get reserve state

**Returns:** *Promise*<[*ReserveState*](../interfaces/reservestate.md)\>

Defined in: [bee-js/src/bee-debug.ts:266](https://github.com/ethersphere/bee-js/blob/430becc/src/bee-debug.ts#L266)

___

### getSettlements

▸ **getSettlements**(`address`: *string* \| [*Address*](../types/address.md)): *Promise*<[*Settlements*](../interfaces/settlements.md)\>

Get amount of sent and received from settlements with a peer

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`address` | *string* \| [*Address*](../types/address.md) | Swarm address of peer    |

**Returns:** *Promise*<[*Settlements*](../interfaces/settlements.md)\>

Defined in: [bee-js/src/bee-debug.ts:234](https://github.com/ethersphere/bee-js/blob/430becc/src/bee-debug.ts#L234)

___

### getTopology

▸ **getTopology**(): *Promise*<[*Topology*](../interfaces/topology.md)\>

**Returns:** *Promise*<[*Topology*](../interfaces/topology.md)\>

Defined in: [bee-js/src/bee-debug.ts:69](https://github.com/ethersphere/bee-js/blob/430becc/src/bee-debug.ts#L69)

___

### isSupportedVersion

▸ **isSupportedVersion**(): *Promise*<boolean\>

Connnects to a node and checks if it is a supported Bee version by the bee-js

**Returns:** *Promise*<boolean\>

true if the Bee node version is supported

Defined in: [bee-js/src/bee-debug.ts:259](https://github.com/ethersphere/bee-js/blob/430becc/src/bee-debug.ts#L259)

___

### pingPeer

▸ **pingPeer**(`peer`: *string* \| [*Address*](../types/address.md)): *Promise*<[*PingResponse*](../interfaces/pingresponse.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`peer` | *string* \| [*Address*](../types/address.md) |

**Returns:** *Promise*<[*PingResponse*](../interfaces/pingresponse.md)\>

Defined in: [bee-js/src/bee-debug.ts:73](https://github.com/ethersphere/bee-js/blob/430becc/src/bee-debug.ts#L73)

___

### removePeer

▸ **removePeer**(`peer`: *string* \| [*Address*](../types/address.md)): *Promise*<[*RemovePeerResponse*](../interfaces/removepeerresponse.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`peer` | *string* \| [*Address*](../types/address.md) |

**Returns:** *Promise*<[*RemovePeerResponse*](../interfaces/removepeerresponse.md)\>

Defined in: [bee-js/src/bee-debug.ts:63](https://github.com/ethersphere/bee-js/blob/430becc/src/bee-debug.ts#L63)

___

### withdrawTokens

▸ **withdrawTokens**(`amount`: *number* \| *bigint*, `gasPrice?`: *bigint*): *Promise*<string\>

Withdraw tokens from the chequebook to the overlay address

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`amount` | *number* \| *bigint* | Amount of tokens to withdraw (must be positive integer)   |
`gasPrice?` | *bigint* | Gas Price in WEI for the transaction call   |

**Returns:** *Promise*<string\>

string  Hash of the transaction

Defined in: [bee-js/src/bee-debug.ts:215](https://github.com/ethersphere/bee-js/blob/430becc/src/bee-debug.ts#L215)
