# Class: Balance

Defined in: [bee-js/src/modules/balance.ts:12](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/balance.ts#L12)

SWAP balance operations. Related to the bandwidth incentives and the chequebook.

Accessed as `bee.balance`.

## Constructors

### Constructor

> **new Balance**(`context`): `Balance`

Defined in: [bee-js/src/modules/balance.ts:13](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/balance.ts#L13)

#### Parameters

##### context

`BeeContext`

#### Returns

`Balance`

## Methods

### getAll()

> **getAll**(`requestOptions?`): `Promise`\<[`BalanceResponse`](../interfaces/BalanceResponse.md)\>

Defined in: [bee-js/src/modules/balance.ts:20](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/balance.ts#L20)

Gets the SWAP balances with all known peers including prepaid services.

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`BalanceResponse`](../interfaces/BalanceResponse.md)\>

***

### getAllPastDueConsumption()

> **getAllPastDueConsumption**(`requestOptions?`): `Promise`\<[`BalanceResponse`](../interfaces/BalanceResponse.md)\>

Defined in: [bee-js/src/modules/balance.ts:41](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/balance.ts#L41)

Gets the past due consumption balances for all known peers.

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`BalanceResponse`](../interfaces/BalanceResponse.md)\>

***

### getAllPastDueConsumptionForPeer()

> **getAllPastDueConsumptionForPeer**(`address`, `requestOptions?`): `Promise`\<[`PeerBalance`](../interfaces/PeerBalance.md)\>

Defined in: [bee-js/src/modules/balance.ts:51](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/balance.ts#L51)

Gets the past due consumption balance for a specific peer.

#### Parameters

##### address

Swarm address of peer

`string` | [`PeerAddress`](../classes/PeerAddress.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`PeerBalance`](../interfaces/PeerBalance.md)\>

***

### getPeer()

> **getPeer**(`address`, `requestOptions?`): `Promise`\<[`PeerBalance`](../interfaces/PeerBalance.md)\>

Defined in: [bee-js/src/modules/balance.ts:30](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/balance.ts#L30)

Gets the SWAP balances for a specific peer including prepaid services.

#### Parameters

##### address

Swarm address of peer

`string` | [`PeerAddress`](../classes/PeerAddress.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`PeerBalance`](../interfaces/PeerBalance.md)\>
