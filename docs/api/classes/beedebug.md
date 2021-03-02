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

Defined in: [bee-js/src/bee-debug.ts:28](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee-debug.ts#L28)

## Properties

### url

• `Readonly` **url**: *string*

## Methods

### cashoutLastCheque

▸ **cashoutLastCheque**(`address`: *string*): *Promise*<[*CashoutResponse*](../interfaces/cashoutresponse.md)\>

Cashout the last cheque for the peer

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`address` | *string* | Swarm address of peer    |

**Returns:** *Promise*<[*CashoutResponse*](../interfaces/cashoutresponse.md)\>

Defined in: [bee-js/src/bee-debug.ts:134](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee-debug.ts#L134)

___

### depositTokens

▸ **depositTokens**(`amount`: *number*): *Promise*<[*DepositTokensResponse*](../interfaces/deposittokensresponse.md)\>

Deposit tokens from overlay address into chequebook

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`amount` | *number* | Amount of tokens to deposit    |

**Returns:** *Promise*<[*DepositTokensResponse*](../interfaces/deposittokensresponse.md)\>

Defined in: [bee-js/src/bee-debug.ts:143](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee-debug.ts#L143)

___

### getAllBalances

▸ **getAllBalances**(): *Promise*<[*BalanceResponse*](../interfaces/balanceresponse.md)\>

Get the balances with all known peers including prepaid services

**Returns:** *Promise*<[*BalanceResponse*](../interfaces/balanceresponse.md)\>

Defined in: [bee-js/src/bee-debug.ts:57](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee-debug.ts#L57)

___

### getAllSettlements

▸ **getAllSettlements**(): *Promise*<[*AllSettlements*](../interfaces/allsettlements.md)\>

Get settlements with all known peers and total amount sent or received

**Returns:** *Promise*<[*AllSettlements*](../interfaces/allsettlements.md)\>

Defined in: [bee-js/src/bee-debug.ts:172](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee-debug.ts#L172)

___

### getChequebookAddress

▸ **getChequebookAddress**(): *Promise*<[*ChequebookAddressResponse*](../interfaces/chequebookaddressresponse.md)\>

Get the address of the chequebook contract used

**Returns:** *Promise*<[*ChequebookAddressResponse*](../interfaces/chequebookaddressresponse.md)\>

Defined in: [bee-js/src/bee-debug.ts:93](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee-debug.ts#L93)

___

### getChequeubookBalance

▸ **getChequeubookBalance**(): *Promise*<[*ChequebookBalanceResponse*](../interfaces/chequebookbalanceresponse.md)\>

Get the balance of the chequebook

**Returns:** *Promise*<[*ChequebookBalanceResponse*](../interfaces/chequebookbalanceresponse.md)\>

Defined in: [bee-js/src/bee-debug.ts:100](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee-debug.ts#L100)

___

### getLastCashoutAction

▸ **getLastCashoutAction**(`address`: *string*): *Promise*<[*LastCashoutActionResponse*](../interfaces/lastcashoutactionresponse.md)\>

Get last cashout action for the peer

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`address` | *string* | Swarm address of peer    |

**Returns:** *Promise*<[*LastCashoutActionResponse*](../interfaces/lastcashoutactionresponse.md)\>

Defined in: [bee-js/src/bee-debug.ts:125](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee-debug.ts#L125)

___

### getLastCheques

▸ **getLastCheques**(): *Promise*<[*LastChequesResponse*](../interfaces/lastchequesresponse.md)\>

Get last cheques for all peers

**Returns:** *Promise*<[*LastChequesResponse*](../interfaces/lastchequesresponse.md)\>

Defined in: [bee-js/src/bee-debug.ts:107](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee-debug.ts#L107)

___

### getLastChequesForPeer

▸ **getLastChequesForPeer**(`address`: *string*): *Promise*<[*LastChequesForPeerResponse*](../interfaces/lastchequesforpeerresponse.md)\>

Get last cheques for the peer

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`address` | *string* | Swarm address of peer    |

**Returns:** *Promise*<[*LastChequesForPeerResponse*](../interfaces/lastchequesforpeerresponse.md)\>

Defined in: [bee-js/src/bee-debug.ts:116](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee-debug.ts#L116)

___

### getOverlayAddress

▸ **getOverlayAddress**(): *Promise*<string\>

**Returns:** *Promise*<string\>

Defined in: [bee-js/src/bee-debug.ts:31](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee-debug.ts#L31)

___

### getPastDueConsumptionBalances

▸ **getPastDueConsumptionBalances**(): *Promise*<[*BalanceResponse*](../interfaces/balanceresponse.md)\>

Get the past due consumption balances with all known peers

**Returns:** *Promise*<[*BalanceResponse*](../interfaces/balanceresponse.md)\>

Defined in: [bee-js/src/bee-debug.ts:73](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee-debug.ts#L73)

___

### getPastDueConsumptionPeerBalance

▸ **getPastDueConsumptionPeerBalance**(`address`: *string*): *Promise*<[*PeerBalance*](../interfaces/peerbalance.md)\>

Get the past due consumption balance with a specific peer

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`address` | *string* | Swarm address of peer    |

**Returns:** *Promise*<[*PeerBalance*](../interfaces/peerbalance.md)\>

Defined in: [bee-js/src/bee-debug.ts:82](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee-debug.ts#L82)

___

### getPeerBalance

▸ **getPeerBalance**(`address`: *string*): *Promise*<[*PeerBalance*](../interfaces/peerbalance.md)\>

Get the balances with a specific peer including prepaid services

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`address` | *string* | Swarm address of peer    |

**Returns:** *Promise*<[*PeerBalance*](../interfaces/peerbalance.md)\>

Defined in: [bee-js/src/bee-debug.ts:66](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee-debug.ts#L66)

___

### getPeers

▸ **getPeers**(): *Promise*<[*Peer*](../interfaces/peer.md)[]\>

Get list of peers for this node

**Returns:** *Promise*<[*Peer*](../interfaces/peer.md)[]\>

Defined in: [bee-js/src/bee-debug.ts:46](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee-debug.ts#L46)

___

### getPssPublicKey

▸ **getPssPublicKey**(): *Promise*<string\>

**Returns:** *Promise*<string\>

Defined in: [bee-js/src/bee-debug.ts:37](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee-debug.ts#L37)

___

### getSettlements

▸ **getSettlements**(`address`: *string*): *Promise*<[*Settlements*](../interfaces/settlements.md)\>

Get amount of sent and received from settlements with a peer

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`address` | *string* | Swarm address of peer    |

**Returns:** *Promise*<[*Settlements*](../interfaces/settlements.md)\>

Defined in: [bee-js/src/bee-debug.ts:165](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee-debug.ts#L165)

___

### withdrawTokens

▸ **withdrawTokens**(`amount`: *number*): *Promise*<[*WithdrawTokensResponse*](../interfaces/withdrawtokensresponse.md)\>

Withdraw tokens from the chequebook to the overlay address

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`amount` | *number* | Amount of tokens to withdraw    |

**Returns:** *Promise*<[*WithdrawTokensResponse*](../interfaces/withdrawtokensresponse.md)\>

Defined in: [bee-js/src/bee-debug.ts:152](https://github.com/ethersphere/bee-js/blob/7dfd556/src/bee-debug.ts#L152)
