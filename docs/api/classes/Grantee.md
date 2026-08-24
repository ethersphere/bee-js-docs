# Class: Grantee

Defined in: [bee-js/src/modules/grantee.ts:11](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/grantee.ts#L11)

Grantee (access control) operations.

Accessed as `bee.grantee`.

## Constructors

### Constructor

> **new Grantee**(`context`): `Grantee`

Defined in: [bee-js/src/modules/grantee.ts:12](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/grantee.ts#L12)

#### Parameters

##### context

`BeeContext`

#### Returns

`Grantee`

## Methods

### create()

> **create**(`postageBatchId`, `grantees`, `requestOptions?`): `Promise`\<[`GranteesResult`](../interfaces/GranteesResult.md)\>

Defined in: [bee-js/src/modules/grantee.ts:21](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/grantee.ts#L21)

Creates grantees for a postage batch.

#### Parameters

##### postageBatchId

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](../classes/BatchId.md)

##### grantees

Public keys of the grantees.

`string`[] | `Uint8Array`\<`ArrayBufferLike`\>[] | [`PublicKey`](../classes/PublicKey.md)[]

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`GranteesResult`](../interfaces/GranteesResult.md)\>

***

### get()

> **get**(`reference`, `requestOptions?`): `Promise`\<[`GetGranteesResult`](../interfaces/GetGranteesResult.md)\>

Defined in: [bee-js/src/modules/grantee.ts:38](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/grantee.ts#L38)

Retrieves the grantees for a given reference.

#### Parameters

##### reference

The reference.

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](../classes/Reference.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`GetGranteesResult`](../interfaces/GetGranteesResult.md)\>

***

### patch()

> **patch**(`postageBatchId`, `reference`, `history`, `grantees`, `requestOptions?`): `Promise`\<[`GranteesResult`](../interfaces/GranteesResult.md)\>

Defined in: [bee-js/src/modules/grantee.ts:56](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/grantee.ts#L56)

Updates the grantees of a specific reference and history.

#### Parameters

##### postageBatchId

The ID of the postage batch.

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](../classes/BatchId.md)

##### reference

The reference.

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](../classes/Reference.md)

##### history

The history.

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](../classes/Reference.md)

##### grantees

The grantees to add and/or revoke.

###### add?

`string`[] \| `Uint8Array`\<`ArrayBufferLike`\>[] \| [`PublicKey`](../classes/PublicKey.md)[]

###### revoke?

`string`[] \| `Uint8Array`\<`ArrayBufferLike`\>[] \| [`PublicKey`](../classes/PublicKey.md)[]

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`GranteesResult`](../interfaces/GranteesResult.md)\>
