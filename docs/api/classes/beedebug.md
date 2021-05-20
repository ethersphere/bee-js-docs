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

Defined in: [bee-js/src/bee-debug.ts:36](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee-debug.ts#L36)

## Properties

### url

• `Readonly` **url**: *string*

Defined in: [bee-js/src/bee-debug.ts:36](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee-debug.ts#L36)

## Methods

### cashoutLastCheque

▸ **cashoutLastCheque**(`address`: *string*): *Promise*<[*CashoutResponse*](../interfaces/cashoutresponse.md)\>

Cashout the last cheque for the peer

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`address` | *string* | Swarm address of peer    |

**Returns:** *Promise*<[*CashoutResponse*](../interfaces/cashoutresponse.md)\>

Defined in: [bee-js/src/bee-debug.ts:169](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee-debug.ts#L169)

___

### depositTokens

▸ **depositTokens**(`amount`: *number* \| *bigint*): *Promise*<[*DepositTokensResponse*](../interfaces/deposittokensresponse.md)\>

Deposit tokens from overlay address into chequebook

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`amount` | *number* \| *bigint* | Amount of tokens to deposit (must be positive integer)    |

**Returns:** *Promise*<[*DepositTokensResponse*](../interfaces/deposittokensresponse.md)\>

Defined in: [bee-js/src/bee-debug.ts:178](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee-debug.ts#L178)

___

### getAllBalances

▸ **getAllBalances**(): *Promise*<[*BalanceResponse*](../interfaces/balanceresponse.md)\>

Get the balances with all known peers including prepaid services

**Returns:** *Promise*<[*BalanceResponse*](../interfaces/balanceresponse.md)\>

Defined in: [bee-js/src/bee-debug.ts:81](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee-debug.ts#L81)

___

### getAllSettlements

▸ **getAllSettlements**(): *Promise*<[*AllSettlements*](../interfaces/allsettlements.md)\>

Get settlements with all known peers and total amount sent or received

**Returns:** *Promise*<[*AllSettlements*](../interfaces/allsettlements.md)\>

Defined in: [bee-js/src/bee-debug.ts:217](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee-debug.ts#L217)

___

### getBlocklist

▸ **getBlocklist**(): *Promise*<[*Peer*](../interfaces/peer.md)[]\>

**Returns:** *Promise*<[*Peer*](../interfaces/peer.md)[]\>

Defined in: [bee-js/src/bee-debug.ts:51](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee-debug.ts#L51)

___

### getChequebookAddress

▸ **getChequebookAddress**(): *Promise*<[*ChequebookAddressResponse*](../interfaces/chequebookaddressresponse.md)\>

Get the address of the chequebook contract used.

**Warning:** The address is returned with 0x prefix unlike all other calls.
https://github.com/ethersphere/bee/issues/1443

**Returns:** *Promise*<[*ChequebookAddressResponse*](../interfaces/chequebookaddressresponse.md)\>

Defined in: [bee-js/src/bee-debug.ts:124](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee-debug.ts#L124)

___

### getChequebookBalance

▸ **getChequebookBalance**(): *Promise*<[*ChequebookBalanceResponse*](../interfaces/chequebookbalanceresponse.md)\>

Get the balance of the chequebook

**Returns:** *Promise*<[*ChequebookBalanceResponse*](../interfaces/chequebookbalanceresponse.md)\>

Defined in: [bee-js/src/bee-debug.ts:131](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee-debug.ts#L131)

___

### getHealth

▸ **getHealth**(): *Promise*<[*Health*](../interfaces/health.md)\>

Get health of node

**Returns:** *Promise*<[*Health*](../interfaces/health.md)\>

Defined in: [bee-js/src/bee-debug.ts:224](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee-debug.ts#L224)

___

### getLastCashoutAction

▸ **getLastCashoutAction**(`address`: *string* \| [*Address*](../types/address.md)): *Promise*<[*LastCashoutActionResponse*](../interfaces/lastcashoutactionresponse.md)\>

Get last cashout action for the peer

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`address` | *string* \| [*Address*](../types/address.md) | Swarm address of peer    |

**Returns:** *Promise*<[*LastCashoutActionResponse*](../interfaces/lastcashoutactionresponse.md)\>

Defined in: [bee-js/src/bee-debug.ts:158](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee-debug.ts#L158)

___

### getLastCheques

▸ **getLastCheques**(): *Promise*<[*LastChequesResponse*](../interfaces/lastchequesresponse.md)\>

Get last cheques for all peers

**Returns:** *Promise*<[*LastChequesResponse*](../interfaces/lastchequesresponse.md)\>

Defined in: [bee-js/src/bee-debug.ts:138](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee-debug.ts#L138)

___

### getLastChequesForPeer

▸ **getLastChequesForPeer**(`address`: *string* \| [*Address*](../types/address.md)): *Promise*<[*LastChequesForPeerResponse*](../interfaces/lastchequesforpeerresponse.md)\>

Get last cheques for the peer

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`address` | *string* \| [*Address*](../types/address.md) | Swarm address of peer    |

**Returns:** *Promise*<[*LastChequesForPeerResponse*](../interfaces/lastchequesforpeerresponse.md)\>

Defined in: [bee-js/src/bee-debug.ts:147](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee-debug.ts#L147)

___

### getNodeAddresses

▸ **getNodeAddresses**(): *Promise*<[*NodeAddresses*](../interfaces/nodeaddresses.md)\>

**Returns:** *Promise*<[*NodeAddresses*](../interfaces/nodeaddresses.md)\>

Defined in: [bee-js/src/bee-debug.ts:47](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee-debug.ts#L47)

___

### getPastDueConsumptionBalances

▸ **getPastDueConsumptionBalances**(): *Promise*<[*BalanceResponse*](../interfaces/balanceresponse.md)\>

Get the past due consumption balances with all known peers

**Returns:** *Promise*<[*BalanceResponse*](../interfaces/balanceresponse.md)\>

Defined in: [bee-js/src/bee-debug.ts:99](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee-debug.ts#L99)

___

### getPastDueConsumptionPeerBalance

▸ **getPastDueConsumptionPeerBalance**(`address`: *string* \| [*Address*](../types/address.md)): *Promise*<[*PeerBalance*](../interfaces/peerbalance.md)\>

Get the past due consumption balance with a specific peer

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`address` | *string* \| [*Address*](../types/address.md) | Swarm address of peer    |

**Returns:** *Promise*<[*PeerBalance*](../interfaces/peerbalance.md)\>

Defined in: [bee-js/src/bee-debug.ts:108](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee-debug.ts#L108)

___

### getPeerBalance

▸ **getPeerBalance**(`address`: *string* \| [*Address*](../types/address.md)): *Promise*<[*PeerBalance*](../interfaces/peerbalance.md)\>

Get the balances with a specific peer including prepaid services

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`address` | *string* \| [*Address*](../types/address.md) | Swarm address of peer    |

**Returns:** *Promise*<[*PeerBalance*](../interfaces/peerbalance.md)\>

Defined in: [bee-js/src/bee-debug.ts:90](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee-debug.ts#L90)

___

### getPeers

▸ **getPeers**(): *Promise*<[*Peer*](../interfaces/peer.md)[]\>

Get list of peers for this node

**Returns:** *Promise*<[*Peer*](../interfaces/peer.md)[]\>

Defined in: [bee-js/src/bee-debug.ts:58](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee-debug.ts#L58)

___

### getSettlements

▸ **getSettlements**(`address`: *string* \| [*Address*](../types/address.md)): *Promise*<[*Settlements*](../interfaces/settlements.md)\>

Get amount of sent and received from settlements with a peer

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`address` | *string* \| [*Address*](../types/address.md) | Swarm address of peer    |

**Returns:** *Promise*<[*Settlements*](../interfaces/settlements.md)\>

Defined in: [bee-js/src/bee-debug.ts:208](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee-debug.ts#L208)

___

### getTopology

▸ **getTopology**(): *Promise*<[*Topology*](../interfaces/topology.md)\>

**Returns:** *Promise*<[*Topology*](../interfaces/topology.md)\>

Defined in: [bee-js/src/bee-debug.ts:66](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee-debug.ts#L66)

___

### isSupportedVersion

▸ **isSupportedVersion**(): *Promise*<boolean\>

Connnects to a node and checks if it is a supported Bee version by the bee-js

**Returns:** *Promise*<boolean\>

true if the Bee node version is supported

Defined in: [bee-js/src/bee-debug.ts:233](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee-debug.ts#L233)

___

### pingPeer

▸ **pingPeer**(`peer`: *string*): *Promise*<[*PingResponse*](../interfaces/pingresponse.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`peer` | *string* |

**Returns:** *Promise*<[*PingResponse*](../interfaces/pingresponse.md)\>

Defined in: [bee-js/src/bee-debug.ts:70](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee-debug.ts#L70)

___

### removePeer

▸ **removePeer**(`peer`: *string*): *Promise*<[*RemovePeerResponse*](../interfaces/removepeerresponse.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`peer` | *string* |

**Returns:** *Promise*<[*RemovePeerResponse*](../interfaces/removepeerresponse.md)\>

Defined in: [bee-js/src/bee-debug.ts:62](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee-debug.ts#L62)

___

### withdrawTokens

▸ **withdrawTokens**(`amount`: *number* \| *bigint*): *Promise*<[*WithdrawTokensResponse*](../interfaces/withdrawtokensresponse.md)\>

Withdraw tokens from the chequebook to the overlay address

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`amount` | *number* \| *bigint* | Amount of tokens to withdraw (must be positive integer)    |

**Returns:** *Promise*<[*WithdrawTokensResponse*](../interfaces/withdrawtokensresponse.md)\>

Defined in: [bee-js/src/bee-debug.ts:191](https://github.com/ethersphere/bee-js/blob/7260ee1/src/bee-debug.ts#L191)
