# Interface: BeeOptions

Defined in: [bee-js/src/types/index.ts:53](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L53)

## Extends

- [`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

## Properties

### baseURL?

> `optional` **baseURL**: `string`

Defined in: [bee-js/src/types/index.ts:44](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L44)

#### Inherited from

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md).[`baseURL`](../type-aliases/BeeRequestOptions.md#baseurl)

***

### endlesslyRetry?

> `optional` **endlesslyRetry**: `boolean`

Defined in: [bee-js/src/types/index.ts:50](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L50)

#### Inherited from

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md).[`endlesslyRetry`](../type-aliases/BeeRequestOptions.md#endlesslyretry)

***

### headers?

> `optional` **headers**: `Record`\<`string`, `string`\>

Defined in: [bee-js/src/types/index.ts:46](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L46)

#### Inherited from

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md).[`headers`](../type-aliases/BeeRequestOptions.md#headers)

***

### httpAgent?

> `optional` **httpAgent**: `unknown`

Defined in: [bee-js/src/types/index.ts:48](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L48)

#### Inherited from

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md).[`httpAgent`](../type-aliases/BeeRequestOptions.md#httpagent)

***

### httpsAgent?

> `optional` **httpsAgent**: `unknown`

Defined in: [bee-js/src/types/index.ts:49](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L49)

#### Inherited from

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md).[`httpsAgent`](../type-aliases/BeeRequestOptions.md#httpsagent)

***

### network?

> `optional` **network**: `"gnosis"` \| `"sepolia"`

Defined in: [bee-js/src/types/index.ts:61](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L61)

Default gnosis when unspecified.

***

### onRequest()?

> `optional` **onRequest**: (`request`) => `void`

Defined in: [bee-js/src/types/index.ts:47](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L47)

#### Parameters

##### request

[`BeeRequest`](BeeRequest.md)

#### Returns

`void`

#### Inherited from

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md).[`onRequest`](../type-aliases/BeeRequestOptions.md#onrequest)

***

### signer?

> `optional` **signer**: `string` \| `Uint8Array`\<`ArrayBufferLike`\> \| [`PrivateKey`](../classes/PrivateKey.md)

Defined in: [bee-js/src/types/index.ts:57](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L57)

Signer object or private key of the Signer in form of either hex string or Uint8Array that will be default signer for the instance.

***

### timeout?

> `optional` **timeout**: `number`

Defined in: [bee-js/src/types/index.ts:45](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L45)

#### Inherited from

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md).[`timeout`](../type-aliases/BeeRequestOptions.md#timeout)
