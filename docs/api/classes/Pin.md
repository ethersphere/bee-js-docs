# Class: Pin

Defined in: [bee-js/src/modules/pin.ts:12](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/pin.ts#L12)

Local pinning operations.

Accessed as `bee.pin`.

## Constructors

### Constructor

> **new Pin**(`context`): `Pin`

Defined in: [bee-js/src/modules/pin.ts:13](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/pin.ts#L13)

#### Parameters

##### context

`BeeContext`

#### Returns

`Pin`

## Methods

### add()

> **add**(`reference`, `requestOptions?`): `Promise`\<`void`\>

Defined in: [bee-js/src/modules/pin.ts:21](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/pin.ts#L21)

Pins local data with the given reference.

#### Parameters

##### reference

Data reference

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](../classes/Reference.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<`void`\>

***

### get()

> **get**(`reference`, `requestOptions?`): `Promise`\<[`Pin`](../interfaces/Pin.md)\>

Defined in: [bee-js/src/modules/pin.ts:54](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/pin.ts#L54)

Gets the pinning status of the chunk with the given reference.

#### Parameters

##### reference

Data reference

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](../classes/Reference.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`Pin`](../interfaces/Pin.md)\>

***

### getAll()

> **getAll**(`requestOptions?`): `Promise`\<[`Reference`](../classes/Reference.md)[]\>

Defined in: [bee-js/src/modules/pin.ts:44](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/pin.ts#L44)

Gets the list of all locally pinned references.

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`Reference`](../classes/Reference.md)[]\>

***

### remove()

> **remove**(`reference`, `requestOptions?`): `Promise`\<`void`\>

Defined in: [bee-js/src/modules/pin.ts:33](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/pin.ts#L33)

Unpins local data with the given reference.

#### Parameters

##### reference

Data reference

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](../classes/Reference.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<`void`\>

***

### reuploadData()

> **reuploadData**(`postageBatchId`, `reference`, `requestOptions?`): `Promise`\<`void`\>

Defined in: [bee-js/src/modules/pin.ts:67](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/pin.ts#L67)

Instructs the Bee node to reupload locally pinned data into the network.

#### Parameters

##### postageBatchId

Postage Batch ID that will be used to re-upload the data.

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](../classes/BatchId.md)

##### reference

Data reference to be re-uploaded.

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](../classes/Reference.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<`void`\>
