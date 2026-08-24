# Type Alias: BeeRequestOptions

> **BeeRequestOptions** = `object`

Defined in: [bee-js/src/types/index.ts:51](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L51)

Behavior of the HTTP client, such as `timeout`, additional `headers`, custom `httpAgent`, etc.

## Extended by

- [`BeeOptions`](../interfaces/BeeOptions.md)

## Properties

### baseURL?

> `optional` **baseURL**: `string`

Defined in: [bee-js/src/types/index.ts:52](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L52)

***

### endlesslyRetry?

> `optional` **endlesslyRetry**: `boolean`

Defined in: [bee-js/src/types/index.ts:58](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L58)

***

### headers?

> `optional` **headers**: `Record`\<`string`, `string`\>

Defined in: [bee-js/src/types/index.ts:54](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L54)

***

### httpAgent?

> `optional` **httpAgent**: `unknown`

Defined in: [bee-js/src/types/index.ts:56](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L56)

***

### httpsAgent?

> `optional` **httpsAgent**: `unknown`

Defined in: [bee-js/src/types/index.ts:57](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L57)

***

### onRequest()?

> `optional` **onRequest**: (`request`) => `void`

Defined in: [bee-js/src/types/index.ts:55](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L55)

#### Parameters

##### request

[`BeeRequest`](../interfaces/BeeRequest.md)

#### Returns

`void`

***

### signal?

> `optional` **signal**: `AbortSignal`

Defined in: [bee-js/src/types/index.ts:59](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L59)

***

### timeout?

> `optional` **timeout**: `number`

Defined in: [bee-js/src/types/index.ts:53](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L53)
