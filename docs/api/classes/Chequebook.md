# Class: Chequebook

Defined in: [bee-js/src/modules/chequebook.ts:13](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/chequebook.ts#L13)

Chequebook contract operations (address, balance, deposit, withdraw).

Accessed as `bee.chequebook`.

## Constructors

### Constructor

> **new Chequebook**(`context`): `Chequebook`

Defined in: [bee-js/src/modules/chequebook.ts:14](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/chequebook.ts#L14)

#### Parameters

##### context

`BeeContext`

#### Returns

`Chequebook`

## Methods

### deposit()

> **deposit**(`amount`, `gasPrice?`, `requestOptions?`): `Promise`\<[`TransactionId`](../classes/TransactionId.md)\>

Defined in: [bee-js/src/modules/chequebook.ts:41](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/chequebook.ts#L41)

Deposits tokens from the node wallet into the chequebook.

#### Parameters

##### amount

Amount of BZZ tokens to deposit. If not providing a `BZZ` instance, the amount is denoted in PLUR.

`string` | `bigint` | [`BZZ`](../classes/BZZ.md) | [`NumberString`](../type-aliases/NumberString.md)

##### gasPrice?

Gas Price in WEI for the transaction call

`string` | `bigint` | [`NumberString`](../type-aliases/NumberString.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`TransactionId`](../classes/TransactionId.md)\>

***

### getAddress()

> **getAddress**(`requestOptions?`): `Promise`\<[`ChequebookAddressResponse`](../interfaces/ChequebookAddressResponse.md)\>

Defined in: [bee-js/src/modules/chequebook.ts:21](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/chequebook.ts#L21)

Gets the address of the deployed chequebook.

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`ChequebookAddressResponse`](../interfaces/ChequebookAddressResponse.md)\>

***

### getBalance()

> **getBalance**(`requestOptions?`): `Promise`\<[`ChequebookBalanceResponse`](../interfaces/ChequebookBalanceResponse.md)\>

Defined in: [bee-js/src/modules/chequebook.ts:30](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/chequebook.ts#L30)

Gets the balance of the chequebook.

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`ChequebookBalanceResponse`](../interfaces/ChequebookBalanceResponse.md)\>

***

### withdraw()

> **withdraw**(`amount`, `gasPrice?`, `requestOptions?`): `Promise`\<[`TransactionId`](../classes/TransactionId.md)\>

Defined in: [bee-js/src/modules/chequebook.ts:61](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/chequebook.ts#L61)

Withdraws tokens from the chequebook to the node wallet.

#### Parameters

##### amount

Amount of BZZ tokens to withdraw. If not providing a `BZZ` instance, the amount is denoted in PLUR.

`string` | `bigint` | [`BZZ`](../classes/BZZ.md) | [`NumberString`](../type-aliases/NumberString.md)

##### gasPrice?

Gas Price in WEI for the transaction call.

`string` | `bigint` | [`NumberString`](../type-aliases/NumberString.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`TransactionId`](../classes/TransactionId.md)\>
