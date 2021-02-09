[@ethersphere/bee-js](../README.md) / BeeDebug

# Class: BeeDebug

The BeeDebug class provides a way of interacting with the Bee debug APIs based on the provided url

**`param`** URL of a running Bee node

## Hierarchy

* **BeeDebug**

## Table of contents

### Constructors

- [constructor](beedebug.md#constructor)

### Properties

- [url](beedebug.md#url)

### Methods

- [cashoutLastCheque](beedebug.md#cashoutlastcheque)
- [depositTokens](beedebug.md#deposittokens)
- [getAllBalances](beedebug.md#getallbalances)
- [getAllSettlements](beedebug.md#getallsettlements)
- [getChequebookAddress](beedebug.md#getchequebookaddress)
- [getChequeubookBalance](beedebug.md#getchequeubookbalance)
- [getLastCashoutAction](beedebug.md#getlastcashoutaction)
- [getLastCheques](beedebug.md#getlastcheques)
- [getLastChequesForPeer](beedebug.md#getlastchequesforpeer)
- [getOverlayAddress](beedebug.md#getoverlayaddress)
- [getPastDueConsumptionBalances](beedebug.md#getpastdueconsumptionbalances)
- [getPastDueConsumptionPeerBalance](beedebug.md#getpastdueconsumptionpeerbalance)
- [getPeerBalance](beedebug.md#getpeerbalance)
- [getPssPublicKey](beedebug.md#getpsspublickey)
- [getSettlements](beedebug.md#getsettlements)
- [withdrawTokens](beedebug.md#withdrawtokens)

## Constructors

### constructor

\+ **new BeeDebug**(`url`: *string*): [*BeeDebug*](beedebug.md)

#### Parameters:

Name | Type |
------ | ------ |
`url` | *string* |

**Returns:** [*BeeDebug*](beedebug.md)

Defined in: [src/bee-debug.ts:12](https://github.com/ethersphere/bee-js/blob/313830a/src/bee-debug.ts#L12)

## Properties

### url

• `Readonly` **url**: *string*

## Methods

### cashoutLastCheque

▸ **cashoutLastCheque**(`address`: *string*): *Promise*<CashoutResponse\>

Cashout the last cheque for the peer

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`address` | *string* | Swarm address of peer    |

**Returns:** *Promise*<CashoutResponse\>

Defined in: [src/bee-debug.ts:111](https://github.com/ethersphere/bee-js/blob/313830a/src/bee-debug.ts#L111)

___

### depositTokens

▸ **depositTokens**(`amount`: *number*): *Promise*<DepositTokensResponse\>

Deposit tokens from overlay address into chequebook

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`amount` | *number* | Amount of tokens to deposit    |

**Returns:** *Promise*<DepositTokensResponse\>

Defined in: [src/bee-debug.ts:120](https://github.com/ethersphere/bee-js/blob/313830a/src/bee-debug.ts#L120)

___

### getAllBalances

▸ **getAllBalances**(): *Promise*<BalanceResponse\>

Get the balances with all known peers including prepaid services

**Returns:** *Promise*<BalanceResponse\>

Defined in: [src/bee-debug.ts:34](https://github.com/ethersphere/bee-js/blob/313830a/src/bee-debug.ts#L34)

___

### getAllSettlements

▸ **getAllSettlements**(): *Promise*<AllSettlements\>

Get settlements with all known peers and total amount sent or received

**Returns:** *Promise*<AllSettlements\>

Defined in: [src/bee-debug.ts:149](https://github.com/ethersphere/bee-js/blob/313830a/src/bee-debug.ts#L149)

___

### getChequebookAddress

▸ **getChequebookAddress**(): *Promise*<ChequebookAddressResponse\>

Get the address of the chequebook contract used

**Returns:** *Promise*<ChequebookAddressResponse\>

Defined in: [src/bee-debug.ts:70](https://github.com/ethersphere/bee-js/blob/313830a/src/bee-debug.ts#L70)

___

### getChequeubookBalance

▸ **getChequeubookBalance**(): *Promise*<ChequebookBalanceResponse\>

Get the balance of the chequebook

**Returns:** *Promise*<ChequebookBalanceResponse\>

Defined in: [src/bee-debug.ts:77](https://github.com/ethersphere/bee-js/blob/313830a/src/bee-debug.ts#L77)

___

### getLastCashoutAction

▸ **getLastCashoutAction**(`address`: *string*): *Promise*<LastCashoutActionResponse\>

Get last cashout action for the peer

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`address` | *string* | Swarm address of peer    |

**Returns:** *Promise*<LastCashoutActionResponse\>

Defined in: [src/bee-debug.ts:102](https://github.com/ethersphere/bee-js/blob/313830a/src/bee-debug.ts#L102)

___

### getLastCheques

▸ **getLastCheques**(): *Promise*<LastChequesResponse\>

Get last cheques for all peers

**Returns:** *Promise*<LastChequesResponse\>

Defined in: [src/bee-debug.ts:84](https://github.com/ethersphere/bee-js/blob/313830a/src/bee-debug.ts#L84)

___

### getLastChequesForPeer

▸ **getLastChequesForPeer**(`address`: *string*): *Promise*<LastChequesForPeerResponse\>

Get last cheques for the peer

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`address` | *string* | Swarm address of peer    |

**Returns:** *Promise*<LastChequesForPeerResponse\>

Defined in: [src/bee-debug.ts:93](https://github.com/ethersphere/bee-js/blob/313830a/src/bee-debug.ts#L93)

___

### getOverlayAddress

▸ **getOverlayAddress**(): *Promise*<*string*\>

**Returns:** *Promise*<*string*\>

Defined in: [src/bee-debug.ts:15](https://github.com/ethersphere/bee-js/blob/313830a/src/bee-debug.ts#L15)

___

### getPastDueConsumptionBalances

▸ **getPastDueConsumptionBalances**(): *Promise*<BalanceResponse\>

Get the past due consumption balances with all known peers

**Returns:** *Promise*<BalanceResponse\>

Defined in: [src/bee-debug.ts:50](https://github.com/ethersphere/bee-js/blob/313830a/src/bee-debug.ts#L50)

___

### getPastDueConsumptionPeerBalance

▸ **getPastDueConsumptionPeerBalance**(`address`: *string*): *Promise*<PeerBalance\>

Get the past due consumption balance with a specific peer

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`address` | *string* | Swarm address of peer    |

**Returns:** *Promise*<PeerBalance\>

Defined in: [src/bee-debug.ts:59](https://github.com/ethersphere/bee-js/blob/313830a/src/bee-debug.ts#L59)

___

### getPeerBalance

▸ **getPeerBalance**(`address`: *string*): *Promise*<PeerBalance\>

Get the balances with a specific peer including prepaid services

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`address` | *string* | Swarm address of peer    |

**Returns:** *Promise*<PeerBalance\>

Defined in: [src/bee-debug.ts:43](https://github.com/ethersphere/bee-js/blob/313830a/src/bee-debug.ts#L43)

___

### getPssPublicKey

▸ **getPssPublicKey**(): *Promise*<*string*\>

**Returns:** *Promise*<*string*\>

Defined in: [src/bee-debug.ts:21](https://github.com/ethersphere/bee-js/blob/313830a/src/bee-debug.ts#L21)

___

### getSettlements

▸ **getSettlements**(`address`: *string*): *Promise*<Settlements\>

Get amount of sent and received from settlements with a peer

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`address` | *string* | Swarm address of peer    |

**Returns:** *Promise*<Settlements\>

Defined in: [src/bee-debug.ts:142](https://github.com/ethersphere/bee-js/blob/313830a/src/bee-debug.ts#L142)

___

### withdrawTokens

▸ **withdrawTokens**(`amount`: *number*): *Promise*<WithdrawTokensResponse\>

Withdraw tokens from the chequebook to the overlay address

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`amount` | *number* | Amount of tokens to withdraw    |

**Returns:** *Promise*<WithdrawTokensResponse\>

Defined in: [src/bee-debug.ts:129](https://github.com/ethersphere/bee-js/blob/313830a/src/bee-debug.ts#L129)
