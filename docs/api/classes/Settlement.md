# Class: Settlement

Defined in: [bee-js/src/modules/settlement.ts:11](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/settlement.ts#L11)

Settlement operations. Related to the bandwidth incentives and the chequebook.

Accessed as `bee.settlement`.

## Constructors

### Constructor

> **new Settlement**(`context`): `Settlement`

Defined in: [bee-js/src/modules/settlement.ts:12](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/settlement.ts#L12)

#### Parameters

##### context

`BeeContext`

#### Returns

`Settlement`

## Methods

### get()

> **get**(`address`, `requestOptions?`): `Promise`\<[`Settlements`](../interfaces/Settlements.md)\>

Defined in: [bee-js/src/modules/settlement.ts:20](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/settlement.ts#L20)

Gets the amount of sent and received micropayments from settlements with a peer.

#### Parameters

##### address

Swarm address of peer

`string` | [`PeerAddress`](../classes/PeerAddress.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`Settlements`](../interfaces/Settlements.md)\>

***

### getAll()

> **getAll**(`requestOptions?`): `Promise`\<[`AllSettlements`](../interfaces/AllSettlements.md)\>

Defined in: [bee-js/src/modules/settlement.ts:31](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/settlement.ts#L31)

Gets settlements with all known peers and total amount sent or received.

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`AllSettlements`](../interfaces/AllSettlements.md)\>
