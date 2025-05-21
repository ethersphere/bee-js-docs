[**@ethersphere/bee-js**](../Overview.md)

***

[@ethersphere/bee-js](../Overview.md) / BeeResponseError

# Class: BeeResponseError

Defined in: [bee-js/src/utils/error.ts:13](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/error.ts#L13)

## Extends

- [`BeeError`](BeeError.md)

## Constructors

### Constructor

> **new BeeResponseError**(`method`, `url`, `message`, `responseBody?`, `status?`, `statusText?`): `BeeResponseError`

Defined in: [bee-js/src/utils/error.ts:14](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/error.ts#L14)

#### Parameters

##### method

`string`

##### url

`string`

##### message

`string`

##### responseBody?

`unknown`

##### status?

`number`

##### statusText?

`string`

#### Returns

`BeeResponseError`

#### Overrides

[`BeeError`](BeeError.md).[`constructor`](BeeError.md#constructor)

## Properties

### method

> **method**: `string`

Defined in: [bee-js/src/utils/error.ts:15](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/error.ts#L15)

***

### responseBody?

> `optional` **responseBody**: `unknown`

Defined in: [bee-js/src/utils/error.ts:18](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/error.ts#L18)

***

### status?

> `optional` **status**: `number`

Defined in: [bee-js/src/utils/error.ts:19](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/error.ts#L19)

***

### statusText?

> `optional` **statusText**: `string`

Defined in: [bee-js/src/utils/error.ts:20](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/error.ts#L20)

***

### url

> **url**: `string`

Defined in: [bee-js/src/utils/error.ts:16](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/error.ts#L16)
