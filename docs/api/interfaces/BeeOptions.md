# Interface: BeeOptions

Defined in: [bee-js/src/types/index.ts:68](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L68)

Options for the Bee client which affect all method calls *(unless overridden in the method call itself)*.

Extends `BeeRequestOptions`, which allows configuring the HTTP client behavior,
such as `timeout`, additional `headers`, custom `httpAgent`, etc.

## Extends

- [`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

## Properties

### baseURL?

> `optional` **baseURL**: `string`

Defined in: [bee-js/src/types/index.ts:52](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L52)

#### Inherited from

`BeeRequestOptions.baseURL`

***

### endlesslyRetry?

> `optional` **endlesslyRetry**: `boolean`

Defined in: [bee-js/src/types/index.ts:58](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L58)

#### Inherited from

`BeeRequestOptions.endlesslyRetry`

***

### headers?

> `optional` **headers**: `Record`\<`string`, `string`\>

Defined in: [bee-js/src/types/index.ts:54](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L54)

#### Inherited from

`BeeRequestOptions.headers`

***

### httpAgent?

> `optional` **httpAgent**: `unknown`

Defined in: [bee-js/src/types/index.ts:56](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L56)

#### Inherited from

`BeeRequestOptions.httpAgent`

***

### httpsAgent?

> `optional` **httpsAgent**: `unknown`

Defined in: [bee-js/src/types/index.ts:57](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L57)

#### Inherited from

`BeeRequestOptions.httpsAgent`

***

### network?

> `optional` **network**: `"gnosis"` \| `"sepolia"`

Defined in: [bee-js/src/types/index.ts:87](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L87)

Network on which the Bee node is running.

This is currently used to determine block time for postage batch time-to-live (TTL) calculations.
The block time for `gnosis` is `5` seconds, and for `sepolia` it is `15` seconds.

Default value is `gnosis`.

***

### onRequest()?

> `optional` **onRequest**: (`request`) => `void`

Defined in: [bee-js/src/types/index.ts:55](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L55)

#### Parameters

##### request

[`BeeRequest`](BeeRequest.md)

#### Returns

`void`

#### Inherited from

`BeeRequestOptions.onRequest`

***

### signal?

> `optional` **signal**: `AbortSignal`

Defined in: [bee-js/src/types/index.ts:59](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L59)

#### Inherited from

`BeeRequestOptions.signal`

***

### signer?

> `optional` **signer**: `string` \| `Uint8Array`\<`ArrayBufferLike`\> \| [`PrivateKey`](../classes/PrivateKey.md)

Defined in: [bee-js/src/types/index.ts:77](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L77)

Default signer (a private key) used for signing.

Mainly used in single-owner chunk (SOC) related operations, and consequently in feeds.

If not provided, methods such as `makeFeedWriter` and `makeSOCWriter`
must be provided with a private key in their respective function calls.

***

### timeout?

> `optional` **timeout**: `number`

Defined in: [bee-js/src/types/index.ts:53](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L53)

#### Inherited from

`BeeRequestOptions.timeout`
