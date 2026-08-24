# Class: Wallet

Defined in: [bee-js/src/modules/wallet.ts:12](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/wallet.ts#L12)

Node wallet operations (balances and external withdrawals).

Accessed as `bee.wallet`.

## Constructors

### Constructor

> **new Wallet**(`context`): `Wallet`

Defined in: [bee-js/src/modules/wallet.ts:13](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/wallet.ts#L13)

#### Parameters

##### context

`BeeContext`

#### Returns

`Wallet`

## Methods

### getBalance()

> **getBalance**(`requestOptions?`): `Promise`\<[`WalletBalance`](../interfaces/WalletBalance.md)\>

Defined in: [bee-js/src/modules/wallet.ts:20](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/wallet.ts#L20)

Gets DAI and BZZ balances of the Bee node wallet.

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`WalletBalance`](../interfaces/WalletBalance.md)\>

***

### withdrawBZZ()

> **withdrawBZZ**(`amount`, `address`, `requestOptions?`): `Promise`\<[`TransactionId`](../classes/TransactionId.md)\>

Defined in: [bee-js/src/modules/wallet.ts:31](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/wallet.ts#L31)

Withdraws BZZ from the node wallet (not chequebook) to a whitelisted external wallet address.

#### Parameters

##### amount

Amount of BZZ tokens to withdraw. If not providing a `BZZ` instance, the amount is denoted in PLUR.

`string` | `bigint` | [`BZZ`](../classes/BZZ.md) | [`NumberString`](../type-aliases/NumberString.md)

##### address

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`EthAddress`](../classes/EthAddress.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`TransactionId`](../classes/TransactionId.md)\>

***

### withdrawDAI()

> **withdrawDAI**(`amount`, `address`, `requestOptions?`): `Promise`\<[`TransactionId`](../classes/TransactionId.md)\>

Defined in: [bee-js/src/modules/wallet.ts:49](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/wallet.ts#L49)

Withdraws DAI from the node wallet (not chequebook) to a whitelisted external wallet address.

#### Parameters

##### amount

Amount of DAI tokens to withdraw. If not providing a `DAI` instance, the amount is denoted in wei.

`string` | `bigint` | [`NumberString`](../type-aliases/NumberString.md) | [`DAI`](../classes/DAI.md)

##### address

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`EthAddress`](../classes/EthAddress.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`TransactionId`](../classes/TransactionId.md)\>
