# Class: Stake

Defined in: [bee-js/src/modules/stake.ts:15](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/stake.ts#L15)

Staking operations.

Accessed as `bee.stake`.

## Constructors

### Constructor

> **new Stake**(`context`): `Stake`

Defined in: [bee-js/src/modules/stake.ts:16](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/stake.ts#L16)

#### Parameters

##### context

`BeeContext`

#### Returns

`Stake`

## Methods

### deposit()

> **deposit**(`amount`, `options?`, `requestOptions?`): `Promise`\<[`TransactionId`](../classes/TransactionId.md)\>

Defined in: [bee-js/src/modules/stake.ts:45](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/stake.ts#L45)

Stakes the given amount of BZZ. Initial deposit must be at least 10 BZZ.

Be aware that staked BZZ tokens can **not** be withdrawn.

#### Parameters

##### amount

Amount of BZZ tokens to be staked. If not providing a `BZZ` instance, the amount is denoted in PLUR.

`string` | `bigint` | [`BZZ`](../classes/BZZ.md) | [`NumberString`](../type-aliases/NumberString.md)

##### options?

[`TransactionOptions`](../interfaces/TransactionOptions.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`TransactionId`](../classes/TransactionId.md)\>

***

### get()

> **get**(`requestOptions?`): `Promise`\<[`BZZ`](../classes/BZZ.md)\>

Defined in: [bee-js/src/modules/stake.ts:23](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/stake.ts#L23)

Gets the amount of staked BZZ.

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`BZZ`](../classes/BZZ.md)\>

***

### getRedistributionState()

> **getRedistributionState**(`requestOptions?`): `Promise`\<[`RedistributionState`](../interfaces/RedistributionState.md)\>

Defined in: [bee-js/src/modules/stake.ts:85](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/stake.ts#L85)

Gets current status of node in redistribution game.

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`RedistributionState`](../interfaces/RedistributionState.md)\>

***

### getWithdrawable()

> **getWithdrawable**(`requestOptions?`): `Promise`\<[`BZZ`](../classes/BZZ.md)\>

Defined in: [bee-js/src/modules/stake.ts:32](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/stake.ts#L32)

Gets the amount of withdrawable staked BZZ.

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`BZZ`](../classes/BZZ.md)\>

***

### migrate()

> **migrate**(`requestOptions?`): `Promise`\<[`TransactionId`](../classes/TransactionId.md)\>

Defined in: [bee-js/src/modules/stake.ts:76](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/stake.ts#L76)

Withdraws all staked BZZ to the node wallet.

**Only available when the staking contract is paused and is in the process of being migrated to a new contract!**

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`TransactionId`](../classes/TransactionId.md)\>

***

### withdrawSurplus()

> **withdrawSurplus**(`requestOptions?`): `Promise`\<[`TransactionId`](../classes/TransactionId.md)\>

Defined in: [bee-js/src/modules/stake.ts:65](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/stake.ts#L65)

Withdraws all surplus staked BZZ to the node wallet.

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`TransactionId`](../classes/TransactionId.md)\>
