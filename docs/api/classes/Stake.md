# Class: Stake

Defined in: [bee-js/src/modules/stake.ts:16](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/modules/stake.ts#L16)

Staking operations.

Accessed as `bee.stake`.

## Constructors

### Constructor

> **new Stake**(`context`): `Stake`

Defined in: [bee-js/src/modules/stake.ts:17](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/modules/stake.ts#L17)

#### Parameters

##### context

`BeeContext`

#### Returns

`Stake`

## Methods

### deposit()

> **deposit**(`amount`, `options?`, `requestOptions?`): `Promise`\<[`TransactionId`](../classes/TransactionId.md)\>

Defined in: [bee-js/src/modules/stake.ts:55](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/modules/stake.ts#L55)

Stakes the given amount of BZZ. Must be at least [getMinimumDeposit](#getminimumdeposit), otherwise Bee rejects it with 400.

Be aware that staked BZZ tokens can **not** be withdrawn.

#### Parameters

##### amount

Amount of BZZ tokens to be staked. If not providing a `BZZ` instance, the amount is denoted in PLUR.

`string` | `bigint` | [`NumberString`](../type-aliases/NumberString.md) | [`BZZ`](../classes/BZZ.md)

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

Defined in: [bee-js/src/modules/stake.ts:24](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/modules/stake.ts#L24)

Gets the amount of staked BZZ.

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`BZZ`](../classes/BZZ.md)\>

***

### getMinimumDeposit()

> **getMinimumDeposit**(`requestOptions?`): `Promise`\<[`BZZ`](../classes/BZZ.md) \| `null`\>

Defined in: [bee-js/src/modules/stake.ts:31](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/modules/stake.ts#L31)

Gets the minimum next deposit, or `null` when Bee cannot determine it (e.g. the price oracle is unavailable).

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`BZZ`](../classes/BZZ.md) \| `null`\>

***

### getRedistributionState()

> **getRedistributionState**(`requestOptions?`): `Promise`\<[`RedistributionState`](../interfaces/RedistributionState.md)\>

Defined in: [bee-js/src/modules/stake.ts:95](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/modules/stake.ts#L95)

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

Defined in: [bee-js/src/modules/stake.ts:42](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/modules/stake.ts#L42)

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

Defined in: [bee-js/src/modules/stake.ts:86](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/modules/stake.ts#L86)

Withdraws all staked BZZ to the node wallet.

**Only available when the staking contract is paused and is in the process of being migrated to a new contract!**

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`TransactionId`](../classes/TransactionId.md)\>

***

### setRedistributionEnabled()

> **setRedistributionEnabled**(`enabled`, `requestOptions?`): `Promise`\<`boolean`\>

Defined in: [bee-js/src/modules/stake.ts:100](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/modules/stake.ts#L100)

Enables or disables participation in new redistribution rounds; resets to enabled when the node restarts.

#### Parameters

##### enabled

`boolean`

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<`boolean`\>

***

### withdrawSurplus()

> **withdrawSurplus**(`requestOptions?`): `Promise`\<[`TransactionId`](../classes/TransactionId.md)\>

Defined in: [bee-js/src/modules/stake.ts:75](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/modules/stake.ts#L75)

Withdraws all surplus staked BZZ to the node wallet.

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`TransactionId`](../classes/TransactionId.md)\>
