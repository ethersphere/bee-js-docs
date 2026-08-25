# Class: Connectivity

Defined in: [bee-js/src/modules/connectivity.ts:12](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/connectivity.ts#L12)

Peer, topology and network connectivity operations.

Accessed as `bee.connectivity`.

## Constructors

### Constructor

> **new Connectivity**(`context`): `Connectivity`

Defined in: [bee-js/src/modules/connectivity.ts:13](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/connectivity.ts#L13)

#### Parameters

##### context

`BeeContext`

#### Returns

`Connectivity`

## Methods

### checkConnection()

> **checkConnection**(`requestOptions?`): `Promise`\<`void`\>

Defined in: [bee-js/src/modules/connectivity.ts:21](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/connectivity.ts#L21)

Pings the Bee node to see if there is a live Bee node on the given URL.

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<`void`\>

#### Throws

If connection was not successful throw error

***

### getBlocklist()

> **getBlocklist**(`requestOptions?`): `Promise`\<[`Peer`](../interfaces/Peer.md)[]\>

Defined in: [bee-js/src/modules/connectivity.ts:71](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/connectivity.ts#L71)

Fetches the list of blocked peers for this node.

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`Peer`](../interfaces/Peer.md)[]\>

***

### getNodeAddresses()

> **getNodeAddresses**(`requestOptions?`): `Promise`\<[`NodeAddresses`](../interfaces/NodeAddresses.md)\>

Defined in: [bee-js/src/modules/connectivity.ts:62](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/connectivity.ts#L62)

Fetches the overlay, underlay, Ethereum, and other addresses of the Bee node.

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`NodeAddresses`](../interfaces/NodeAddresses.md)\>

***

### getPeers()

> **getPeers**(`requestOptions?`): `Promise`\<[`Peer`](../interfaces/Peer.md)[]\>

Defined in: [bee-js/src/modules/connectivity.ts:80](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/connectivity.ts#L80)

Gets list of peers for this node.

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`Peer`](../interfaces/Peer.md)[]\>

***

### getTopology()

> **getTopology**(`requestOptions?`): `Promise`\<[`Topology`](../interfaces/Topology.md)\>

Defined in: [bee-js/src/modules/connectivity.ts:101](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/connectivity.ts#L101)

Fetches topology and connectivity information of the Bee node.

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`Topology`](../interfaces/Topology.md)\>

***

### isConnected()

> **isConnected**(`requestOptions?`): `Promise`\<`boolean`\>

Defined in: [bee-js/src/modules/connectivity.ts:31](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/connectivity.ts#L31)

Pings the Bee node to see if there is a live Bee node on the given URL.

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<`boolean`\>

true if successful, false on error

***

### isGateway()

> **isGateway**(`requestOptions?`): `Promise`\<`boolean`\>

Defined in: [bee-js/src/modules/connectivity.ts:49](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/connectivity.ts#L49)

Checks the `/gateway` endpoint to see if the remote API is a gateway.

Do note that this is not a standard way to check for gateway nodes,
but some of the gateway tooling expose this endpoint.

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<`boolean`\>

***

### ping()

> **ping**(`peer`, `requestOptions?`): `Promise`\<[`PingResponse`](../interfaces/PingResponse.md)\>

Defined in: [bee-js/src/modules/connectivity.ts:111](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/connectivity.ts#L111)

Pings a specific peer to check its availability.

#### Parameters

##### peer

Overlay address of the peer to be pinged.

`string` | [`PeerAddress`](../classes/PeerAddress.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`PingResponse`](../interfaces/PingResponse.md)\>

***

### removePeer()

> **removePeer**(`peer`, `requestOptions?`): `Promise`\<[`RemovePeerResponse`](../interfaces/RemovePeerResponse.md)\>

Defined in: [bee-js/src/modules/connectivity.ts:90](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/connectivity.ts#L90)

Disconnects from a specific peer.

#### Parameters

##### peer

Overlay address of the peer to be removed.

`string` | [`PeerAddress`](../classes/PeerAddress.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`RemovePeerResponse`](../interfaces/RemovePeerResponse.md)\>
