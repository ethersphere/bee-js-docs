[**@ethersphere/bee-js**](../Overview.md)

***

[@ethersphere/bee-js](../Overview.md) / BZZ

# Class: BZZ

Defined in: [bee-js/src/utils/tokens.ts:4](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/tokens.ts#L4)

## Properties

### DIGITS

> `readonly` `static` **DIGITS**: `16` = `16`

Defined in: [bee-js/src/utils/tokens.ts:5](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/tokens.ts#L5)

## Methods

### divide()

> **divide**(`other`): `BZZ`

Defined in: [bee-js/src/utils/tokens.ts:63](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/tokens.ts#L63)

Does not mutate the current BZZ instance.

#### Parameters

##### other

`bigint`

Divisor

#### Returns

`BZZ`

New BZZ instance

***

### eq()

> **eq**(`other`): `boolean`

Defined in: [bee-js/src/utils/tokens.ts:83](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/tokens.ts#L83)

#### Parameters

##### other

`BZZ`

#### Returns

`boolean`

***

### exchangeToDAI()

> **exchangeToDAI**(`daiPerBzz`): [`DAI`](DAI.md)

Defined in: [bee-js/src/utils/tokens.ts:87](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/tokens.ts#L87)

#### Parameters

##### daiPerBzz

[`DAI`](DAI.md)

#### Returns

[`DAI`](DAI.md)

***

### gt()

> **gt**(`other`): `boolean`

Defined in: [bee-js/src/utils/tokens.ts:67](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/tokens.ts#L67)

#### Parameters

##### other

`BZZ`

#### Returns

`boolean`

***

### gte()

> **gte**(`other`): `boolean`

Defined in: [bee-js/src/utils/tokens.ts:71](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/tokens.ts#L71)

#### Parameters

##### other

`BZZ`

#### Returns

`boolean`

***

### lt()

> **lt**(`other`): `boolean`

Defined in: [bee-js/src/utils/tokens.ts:75](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/tokens.ts#L75)

#### Parameters

##### other

`BZZ`

#### Returns

`boolean`

***

### lte()

> **lte**(`other`): `boolean`

Defined in: [bee-js/src/utils/tokens.ts:79](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/tokens.ts#L79)

#### Parameters

##### other

`BZZ`

#### Returns

`boolean`

***

### minus()

> **minus**(`other`): `BZZ`

Defined in: [bee-js/src/utils/tokens.ts:53](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/tokens.ts#L53)

Does not mutate the current BZZ instance.

#### Parameters

##### other

BZZ instance, or amount in PLUR

`string` | `bigint` | `BZZ` | [`NumberString`](../type-aliases/NumberString.md)

#### Returns

`BZZ`

New BZZ instance

***

### plus()

> **plus**(`other`): `BZZ`

Defined in: [bee-js/src/utils/tokens.ts:43](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/tokens.ts#L43)

Does not mutate the current BZZ instance.

#### Parameters

##### other

BZZ instance, or amount in PLUR

`string` | `bigint` | `BZZ` | [`NumberString`](../type-aliases/NumberString.md)

#### Returns

`BZZ`

New BZZ instance

***

### toDecimalString()

> **toDecimalString**(): `string`

Defined in: [bee-js/src/utils/tokens.ts:29](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/tokens.ts#L29)

#### Returns

`string`

***

### toPLURBigInt()

> **toPLURBigInt**(): `bigint`

Defined in: [bee-js/src/utils/tokens.ts:25](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/tokens.ts#L25)

#### Returns

`bigint`

***

### toPLURString()

> **toPLURString**(): `string`

Defined in: [bee-js/src/utils/tokens.ts:21](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/tokens.ts#L21)

#### Returns

`string`

***

### toSignificantDigits()

> **toSignificantDigits**(`digits`): `string`

Defined in: [bee-js/src/utils/tokens.ts:33](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/tokens.ts#L33)

#### Parameters

##### digits

`number`

#### Returns

`string`

***

### fromDecimalString()

> `static` **fromDecimalString**(`string`): `BZZ`

Defined in: [bee-js/src/utils/tokens.ts:13](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/tokens.ts#L13)

#### Parameters

##### string

`string`

#### Returns

`BZZ`

***

### fromPLUR()

> `static` **fromPLUR**(`plur`): `BZZ`

Defined in: [bee-js/src/utils/tokens.ts:17](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/tokens.ts#L17)

#### Parameters

##### plur

`string` | `bigint` | [`NumberString`](../type-aliases/NumberString.md)

#### Returns

`BZZ`
