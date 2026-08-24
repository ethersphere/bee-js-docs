# Class: Cheque

Defined in: [bee-js/src/modules/cheque.ts:18](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/cheque.ts#L18)

Cheque operations (last cheques and cashouts).

Accessed as `bee.cheque`.

## Constructors

### Constructor

> **new Cheque**(`context`): `Cheque`

Defined in: [bee-js/src/modules/cheque.ts:19](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/cheque.ts#L19)

#### Parameters

##### context

`BeeContext`

#### Returns

`Cheque`

## Methods

### cashoutLast()

> **cashoutLast**(`address`, `options?`, `requestOptions?`): `Promise`\<[`TransactionId`](../classes/TransactionId.md)\>

Defined in: [bee-js/src/modules/cheque.ts:67](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/cheque.ts#L67)

Cashes out the last cheque for a specific peer.

#### Parameters

##### address

Swarm address of peer

`string` | [`PeerAddress`](../classes/PeerAddress.md)

##### options?

[`TransactionOptions`](../interfaces/TransactionOptions.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`TransactionId`](../classes/TransactionId.md)\>

***

### getAllLatest()

> **getAllLatest**(`requestOptions?`): `Promise`\<[`LastChequesResponse`](../interfaces/LastChequesResponse.md)\>

Defined in: [bee-js/src/modules/cheque.ts:26](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/cheque.ts#L26)

Gets the last cheques for all peers.

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`LastChequesResponse`](../interfaces/LastChequesResponse.md)\>

***

### getAllLatestForPeer()

> **getAllLatestForPeer**(`address`, `requestOptions?`): `Promise`\<[`LastChequesForPeerResponse`](../interfaces/LastChequesForPeerResponse.md)\>

Defined in: [bee-js/src/modules/cheque.ts:36](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/cheque.ts#L36)

Gets the last cheques for a specific peer.

#### Parameters

##### address

Overlay address of peer.

`string` | [`PeerAddress`](../classes/PeerAddress.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`LastChequesForPeerResponse`](../interfaces/LastChequesForPeerResponse.md)\>

***

### getLastCashoutAction()

> **getLastCashoutAction**(`address`, `requestOptions?`): `Promise`\<[`LastCashoutActionResponse`](../interfaces/LastCashoutActionResponse.md)\>

Defined in: [bee-js/src/modules/cheque.ts:51](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/cheque.ts#L51)

Gets the last cashout action for a specific peer.

#### Parameters

##### address

Overlay address of peer.

`string` | [`PeerAddress`](../classes/PeerAddress.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`LastCashoutActionResponse`](../interfaces/LastCashoutActionResponse.md)\>
