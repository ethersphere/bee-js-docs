# Class: Status

Defined in: [bee-js/src/modules/status.ts:13](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/status.ts#L13)

Node status, health, version and chain/reserve state operations.

Accessed as `bee.status`.

## Constructors

### Constructor

> **new Status**(`context`): `Status`

Defined in: [bee-js/src/modules/status.ts:14](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/status.ts#L14)

#### Parameters

##### context

`BeeContext`

#### Returns

`Status`

## Methods

### get()

> **get**(`requestOptions?`): `Promise`\<[`DebugStatus`](../interfaces/DebugStatus.md)\>

Defined in: [bee-js/src/modules/status.ts:21](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/status.ts#L21)

Gets the general status of the node.

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`DebugStatus`](../interfaces/DebugStatus.md)\>

***

### getChainState()

> **getChainState**(`requestOptions?`): `Promise`\<[`ChainState`](../interfaces/ChainState.md)\>

Defined in: [bee-js/src/modules/status.ts:107](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/status.ts#L107)

Gets chain state.

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`ChainState`](../interfaces/ChainState.md)\>

***

### getHealth()

> **getHealth**(`requestOptions?`): `Promise`\<[`Health`](../interfaces/Health.md)\>

Defined in: [bee-js/src/modules/status.ts:30](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/status.ts#L30)

Gets the health of the node.

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`Health`](../interfaces/Health.md)\>

***

### getNodeInfo()

> **getNodeInfo**(`requestOptions?`): `Promise`\<[`NodeInfo`](../interfaces/NodeInfo.md)\>

Defined in: [bee-js/src/modules/status.ts:48](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/status.ts#L48)

Gets mode information of the node.

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`NodeInfo`](../interfaces/NodeInfo.md)\>

***

### getReadiness()

> **getReadiness**(`requestOptions?`): `Promise`\<[`Readiness`](../interfaces/Readiness.md)\>

Defined in: [bee-js/src/modules/status.ts:39](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/status.ts#L39)

Gets the readiness status of the node.

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`Readiness`](../interfaces/Readiness.md)\>

***

### getReserveState()

> **getReserveState**(`requestOptions?`): `Promise`\<[`ReserveState`](../interfaces/ReserveState.md)\>

Defined in: [bee-js/src/modules/status.ts:98](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/status.ts#L98)

Gets reserve state.

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`ReserveState`](../interfaces/ReserveState.md)\>

***

### getVersions()

> **getVersions**(`requestOptions?`): `Promise`\<[`BeeVersions`](../interfaces/BeeVersions.md)\>

Defined in: [bee-js/src/modules/status.ts:82](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/status.ts#L82)

Returns object with all versions specified by the connected Bee node (properties prefixed with `bee*`)
and versions that bee-js supports (properties prefixed with `supported*`).

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`BeeVersions`](../interfaces/BeeVersions.md)\>

***

### isSupportedApiVersion()

> **isSupportedApiVersion**(`requestOptions?`): `Promise`\<`boolean`\>

Defined in: [bee-js/src/modules/status.ts:70](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/status.ts#L70)

Connects to a node and checks if its Main API version matches with the one that bee-js supports.

This should be the main way how to check compatibility for your app and Bee node.

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<`boolean`\>

***

### isSupportedExactVersion()

> **isSupportedExactVersion**(`requestOptions?`): `Promise`\<`boolean`\>

Defined in: [bee-js/src/modules/status.ts:57](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/status.ts#L57)

Connects to a node and checks if its version matches with the one that bee-js supports.

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<`boolean`\>
