# Class: DAI

Defined in: [bee-js/src/utils/tokens.ts:94](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/tokens.ts#L94)

## Properties

### DIGITS

> `readonly` `static` **DIGITS**: `18` = `18`

Defined in: [bee-js/src/utils/tokens.ts:95](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/tokens.ts#L95)

## Methods

### divide()

> **divide**(`other`): `DAI`

Defined in: [bee-js/src/utils/tokens.ts:153](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/tokens.ts#L153)

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

Defined in: [bee-js/src/utils/tokens.ts:173](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/tokens.ts#L173)

#### Parameters

##### other

`DAI`

#### Returns

`boolean`

***

### exchangeToBZZ()

> **exchangeToBZZ**(`daiPerBzz`): [`BZZ`](BZZ.md)

Defined in: [bee-js/src/utils/tokens.ts:177](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/tokens.ts#L177)

#### Parameters

##### daiPerBzz

`DAI`

#### Returns

[`BZZ`](BZZ.md)

***

### gt()

> **gt**(`other`): `boolean`

Defined in: [bee-js/src/utils/tokens.ts:157](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/tokens.ts#L157)

#### Parameters

##### other

`DAI`

#### Returns

`boolean`

***

### gte()

> **gte**(`other`): `boolean`

Defined in: [bee-js/src/utils/tokens.ts:161](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/tokens.ts#L161)

#### Parameters

##### other

`DAI`

#### Returns

`boolean`

***

### lt()

> **lt**(`other`): `boolean`

Defined in: [bee-js/src/utils/tokens.ts:165](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/tokens.ts#L165)

#### Parameters

##### other

`DAI`

#### Returns

`boolean`

***

### lte()

> **lte**(`other`): `boolean`

Defined in: [bee-js/src/utils/tokens.ts:169](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/tokens.ts#L169)

#### Parameters

##### other

`DAI`

#### Returns

`boolean`

***

### minus()

> **minus**(`other`): `DAI`

Defined in: [bee-js/src/utils/tokens.ts:143](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/tokens.ts#L143)

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

Defined in: [bee-js/src/utils/tokens.ts:133](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/tokens.ts#L133)

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

Defined in: [bee-js/src/utils/tokens.ts:119](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/tokens.ts#L119)

#### Returns

`string`

***

### toSignificantDigits()

> **toSignificantDigits**(`digits`): `string`

Defined in: [bee-js/src/utils/tokens.ts:123](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/tokens.ts#L123)

#### Parameters

##### digits

`number`

#### Returns

`string`

***

### toWeiBigInt()

> **toWeiBigInt**(): `bigint`

Defined in: [bee-js/src/utils/tokens.ts:115](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/tokens.ts#L115)

#### Returns

`bigint`

***

### toWeiString()

> **toWeiString**(): `string`

Defined in: [bee-js/src/utils/tokens.ts:111](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/tokens.ts#L111)

#### Returns

`string`

***

### fromDecimalString()

> `static` **fromDecimalString**(`string`): `DAI`

Defined in: [bee-js/src/utils/tokens.ts:103](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/tokens.ts#L103)

#### Parameters

##### string

`string`

#### Returns

`DAI`

***

### fromWei()

> `static` **fromWei**(`wei`): `DAI`

Defined in: [bee-js/src/utils/tokens.ts:107](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/tokens.ts#L107)

#### Parameters

##### wei

`string` | `bigint` | [`NumberString`](../type-aliases/NumberString.md)

#### Returns

`DAI`
