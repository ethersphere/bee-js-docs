# Class: Transaction

Defined in: [bee-js/src/modules/transaction.ts:12](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/transaction.ts#L12)

Pending transaction operations for the Bee node's `/transactions` queue.

Accessed as `bee.transaction`.

## Constructors

### Constructor

> **new Transaction**(`context`): `Transaction`

Defined in: [bee-js/src/modules/transaction.ts:13](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/transaction.ts#L13)

#### Parameters

##### context

`BeeContext`

#### Returns

`Transaction`

## Methods

### cancel()

> **cancel**(`transactionHash`, `gasPrice?`, `requestOptions?`): `Promise`\<[`TransactionId`](../classes/TransactionId.md)\>

Defined in: [bee-js/src/modules/transaction.ts:63](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/transaction.ts#L63)

Cancels a currently pending transaction.

#### Parameters

##### transactionHash

Hash of the transaction

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`TransactionId`](../classes/TransactionId.md)

##### gasPrice?

Optional gas price

`string` | `bigint` | [`NumberString`](../type-aliases/NumberString.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`TransactionId`](../classes/TransactionId.md)\>

***

### get()

> **get**(`transactionHash`, `requestOptions?`): `Promise`\<[`TransactionInfo`](../interfaces/TransactionInfo.md)\>

Defined in: [bee-js/src/modules/transaction.ts:30](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/transaction.ts#L30)

Fetches the transaction information for a specific pending transaction.

#### Parameters

##### transactionHash

Hash of the transaction

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`TransactionId`](../classes/TransactionId.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`TransactionInfo`](../interfaces/TransactionInfo.md)\>

***

### getAll()

> **getAll**(`requestOptions?`): `Promise`\<[`TransactionInfo`](../interfaces/TransactionInfo.md)[]\>

Defined in: [bee-js/src/modules/transaction.ts:20](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/transaction.ts#L20)

Fetches the list of all current pending transactions for the Bee node.

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`TransactionInfo`](../interfaces/TransactionInfo.md)[]\>

***

### rebroadcast()

> **rebroadcast**(`transactionHash`, `requestOptions?`): `Promise`\<[`TransactionId`](../classes/TransactionId.md)\>

Defined in: [bee-js/src/modules/transaction.ts:47](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/transaction.ts#L47)

Rebroadcasts an already created pending transaction.

Mainly needed when the transaction falls off the mempool or is not incorporated into any block.

#### Parameters

##### transactionHash

Hash of the transaction

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`TransactionId`](../classes/TransactionId.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`TransactionId`](../classes/TransactionId.md)\>
