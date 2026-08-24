# Class: DAI

Defined in: [bee-js/src/utils/tokens.ts:102](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/tokens.ts#L102)

## Properties

### DIGITS

> `readonly` `static` **DIGITS**: `18` = `18`

Defined in: [bee-js/src/utils/tokens.ts:103](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/tokens.ts#L103)

## Methods

### divide()

> **divide**(`other`): `DAI`

Defined in: [bee-js/src/utils/tokens.ts:169](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/tokens.ts#L169)

Does not mutate the current DAI instance.

#### Parameters

##### other

`bigint`

Divisor

#### Returns

`DAI`

New DAI instance

***

### eq()

> **eq**(`other`): `boolean`

Defined in: [bee-js/src/utils/tokens.ts:189](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/tokens.ts#L189)

#### Parameters

##### other

`DAI`

#### Returns

`boolean`

***

### exchangeToBZZ()

> **exchangeToBZZ**(`daiPerBzz`): [`BZZ`](BZZ.md)

Defined in: [bee-js/src/utils/tokens.ts:193](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/tokens.ts#L193)

#### Parameters

##### daiPerBzz

`DAI`

#### Returns

[`BZZ`](BZZ.md)

***

### gt()

> **gt**(`other`): `boolean`

Defined in: [bee-js/src/utils/tokens.ts:173](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/tokens.ts#L173)

#### Parameters

##### other

`DAI`

#### Returns

`boolean`

***

### gte()

> **gte**(`other`): `boolean`

Defined in: [bee-js/src/utils/tokens.ts:177](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/tokens.ts#L177)

#### Parameters

##### other

`DAI`

#### Returns

`boolean`

***

### lt()

> **lt**(`other`): `boolean`

Defined in: [bee-js/src/utils/tokens.ts:181](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/tokens.ts#L181)

#### Parameters

##### other

`DAI`

#### Returns

`boolean`

***

### lte()

> **lte**(`other`): `boolean`

Defined in: [bee-js/src/utils/tokens.ts:185](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/tokens.ts#L185)

#### Parameters

##### other

`DAI`

#### Returns

`boolean`

***

### minus()

> **minus**(`other`): `DAI`

Defined in: [bee-js/src/utils/tokens.ts:159](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/tokens.ts#L159)

Does not mutate the current DAI instance.

#### Parameters

##### other

DAI instance, or amount in PLUR

`string` | `bigint` | [`NumberString`](../type-aliases/NumberString.md) | `DAI`

#### Returns

`DAI`

New DAI instance

***

### plus()

> **plus**(`other`): `DAI`

Defined in: [bee-js/src/utils/tokens.ts:149](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/tokens.ts#L149)

Does not mutate the current DAI instance.

#### Parameters

##### other

DAI instance, or amount in PLUR

`string` | `bigint` | [`NumberString`](../type-aliases/NumberString.md) | `DAI`

#### Returns

`DAI`

New DAI instance

***

### toDecimalString()

> **toDecimalString**(): `string`

Defined in: [bee-js/src/utils/tokens.ts:131](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/tokens.ts#L131)

#### Returns

`string`

***

### toFloat()

> **toFloat**(): `number`

Defined in: [bee-js/src/utils/tokens.ts:139](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/tokens.ts#L139)

#### Returns

`number`

***

### toSignificantDigits()

> **toSignificantDigits**(`digits`): `string`

Defined in: [bee-js/src/utils/tokens.ts:135](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/tokens.ts#L135)

#### Parameters

##### digits

`number`

#### Returns

`string`

***

### toWeiBigInt()

> **toWeiBigInt**(): `bigint`

Defined in: [bee-js/src/utils/tokens.ts:127](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/tokens.ts#L127)

#### Returns

`bigint`

***

### toWeiString()

> **toWeiString**(): `string`

Defined in: [bee-js/src/utils/tokens.ts:123](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/tokens.ts#L123)

#### Returns

`string`

***

### fromDecimalString()

> `static` **fromDecimalString**(`string`): `DAI`

Defined in: [bee-js/src/utils/tokens.ts:111](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/tokens.ts#L111)

#### Parameters

##### string

`string`

#### Returns

`DAI`

***

### fromFloat()

> `static` **fromFloat**(`float`): `DAI`

Defined in: [bee-js/src/utils/tokens.ts:119](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/tokens.ts#L119)

#### Parameters

##### float

`number`

#### Returns

`DAI`

***

### fromWei()

> `static` **fromWei**(`wei`): `DAI`

Defined in: [bee-js/src/utils/tokens.ts:115](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/tokens.ts#L115)

#### Parameters

##### wei

`string` | `bigint` | [`NumberString`](../type-aliases/NumberString.md)

#### Returns

`DAI`
