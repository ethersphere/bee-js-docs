[**@ethersphere/bee-js**](../Overview.md)

***

[@ethersphere/bee-js](../Overview.md) / PublicKey

# Class: PublicKey

Defined in: [bee-js/src/utils/typed-bytes.ts:34](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/typed-bytes.ts#L34)

## Extends

- [`Bytes`](Bytes.md)

## Constructors

### Constructor

> **new PublicKey**(`bytes`): `PublicKey`

Defined in: [bee-js/src/utils/typed-bytes.ts:36](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/typed-bytes.ts#L36)

#### Parameters

##### bytes

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Bytes`](Bytes.md)

#### Returns

`PublicKey`

#### Overrides

[`Bytes`](Bytes.md).[`constructor`](Bytes.md#constructor)

## Properties

### bytes

> `protected` `readonly` **bytes**: `Uint8Array`

Defined in: [bee-js/src/utils/bytes.ts:7](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/bytes.ts#L7)

#### Inherited from

[`Bytes`](Bytes.md).[`bytes`](Bytes.md#bytes)

***

### length

> `readonly` **length**: `number`

Defined in: [bee-js/src/utils/bytes.ts:8](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/bytes.ts#L8)

#### Inherited from

[`Bytes`](Bytes.md).[`length`](Bytes.md#length)

***

### LENGTH

> `readonly` `static` **LENGTH**: `64` = `64`

Defined in: [bee-js/src/utils/typed-bytes.ts:35](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/typed-bytes.ts#L35)

## Methods

### address()

> **address**(): [`EthAddress`](EthAddress.md)

Defined in: [bee-js/src/utils/typed-bytes.ts:47](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/typed-bytes.ts#L47)

#### Returns

[`EthAddress`](EthAddress.md)

***

### equals()

> **equals**(`other`): `boolean`

Defined in: [bee-js/src/utils/bytes.ts:83](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/bytes.ts#L83)

#### Parameters

##### other

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Bytes`](Bytes.md)

#### Returns

`boolean`

#### Inherited from

[`Bytes`](Bytes.md).[`equals`](Bytes.md#equals)

***

### offset()

> **offset**(`index`): `Uint8Array`

Defined in: [bee-js/src/utils/bytes.ts:51](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/bytes.ts#L51)

#### Parameters

##### index

`number`

#### Returns

`Uint8Array`

#### Inherited from

[`Bytes`](Bytes.md).[`offset`](Bytes.md#offset)

***

### toBase32()

> **toBase32**(): `string`

Defined in: [bee-js/src/utils/bytes.ts:67](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/bytes.ts#L67)

#### Returns

`string`

#### Inherited from

[`Bytes`](Bytes.md).[`toBase32`](Bytes.md#tobase32)

***

### toBase64()

> **toBase64**(): `string`

Defined in: [bee-js/src/utils/bytes.ts:63](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/bytes.ts#L63)

#### Returns

`string`

#### Inherited from

[`Bytes`](Bytes.md).[`toBase64`](Bytes.md#tobase64)

***

### toCompressedHex()

> **toCompressedHex**(): `string`

Defined in: [bee-js/src/utils/typed-bytes.ts:61](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/typed-bytes.ts#L61)

#### Returns

`string`

***

### toCompressedUint8Array()

> **toCompressedUint8Array**(): `Uint8Array`

Defined in: [bee-js/src/utils/typed-bytes.ts:54](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/typed-bytes.ts#L54)

#### Returns

`Uint8Array`

***

### toHex()

> **toHex**(): `string`

Defined in: [bee-js/src/utils/bytes.ts:59](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/bytes.ts#L59)

#### Returns

`string`

#### Inherited from

[`Bytes`](Bytes.md).[`toHex`](Bytes.md#tohex)

***

### toJSON()

> **toJSON**(): `unknown`

Defined in: [bee-js/src/utils/bytes.ts:79](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/bytes.ts#L79)

#### Returns

`unknown`

#### Inherited from

[`Bytes`](Bytes.md).[`toJSON`](Bytes.md#tojson)

***

### toString()

> **toString**(): `string`

Defined in: [bee-js/src/utils/bytes.ts:71](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/bytes.ts#L71)

#### Returns

`string`

#### Inherited from

[`Bytes`](Bytes.md).[`toString`](Bytes.md#tostring)

***

### toUint8Array()

> **toUint8Array**(): `Uint8Array`

Defined in: [bee-js/src/utils/bytes.ts:55](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/bytes.ts#L55)

#### Returns

`Uint8Array`

#### Inherited from

[`Bytes`](Bytes.md).[`toUint8Array`](Bytes.md#touint8array)

***

### toUtf8()

> **toUtf8**(): `string`

Defined in: [bee-js/src/utils/bytes.ts:75](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/bytes.ts#L75)

#### Returns

`string`

#### Inherited from

[`Bytes`](Bytes.md).[`toUtf8`](Bytes.md#toutf8)

***

### fromSlice()

> `static` **fromSlice**(`bytes`, `start`, `length?`): [`Bytes`](Bytes.md)

Defined in: [bee-js/src/utils/bytes.ts:43](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/bytes.ts#L43)

#### Parameters

##### bytes

`Uint8Array`

##### start

`number`

##### length?

`number`

#### Returns

[`Bytes`](Bytes.md)

#### Inherited from

[`Bytes`](Bytes.md).[`fromSlice`](Bytes.md#fromslice)

***

### fromUtf8()

> `static` **fromUtf8**(`utf8`): [`Bytes`](Bytes.md)

Defined in: [bee-js/src/utils/bytes.ts:39](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/bytes.ts#L39)

#### Parameters

##### utf8

`string`

#### Returns

[`Bytes`](Bytes.md)

#### Inherited from

[`Bytes`](Bytes.md).[`fromUtf8`](Bytes.md#fromutf8)

***

### keccak256()

> `static` **keccak256**(`bytes`): [`Bytes`](Bytes.md)

Defined in: [bee-js/src/utils/bytes.ts:35](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/bytes.ts#L35)

#### Parameters

##### bytes

`string` | `ArrayBuffer` | `Uint8Array`\<`ArrayBufferLike`\> | [`Bytes`](Bytes.md)

#### Returns

[`Bytes`](Bytes.md)

#### Inherited from

[`Bytes`](Bytes.md).[`keccak256`](Bytes.md#keccak256)
