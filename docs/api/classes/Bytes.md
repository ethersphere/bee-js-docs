[**@ethersphere/bee-js**](../Overview.md)

***

[@ethersphere/bee-js](../Overview.md) / Bytes

# Class: Bytes

Defined in: [bee-js/src/utils/bytes.ts:6](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/bytes.ts#L6)

## Extended by

- [`PrivateKey`](PrivateKey.md)
- [`PublicKey`](PublicKey.md)
- [`EthAddress`](EthAddress.md)
- [`Identifier`](Identifier.md)
- [`Reference`](Reference.md)
- [`TransactionId`](TransactionId.md)
- [`Span`](Span.md)
- [`PeerAddress`](PeerAddress.md)
- [`BatchId`](BatchId.md)
- [`Signature`](Signature.md)
- [`Topic`](Topic.md)
- [`FeedIndex`](FeedIndex.md)

## Constructors

### Constructor

> **new Bytes**(`bytes`, `byteLength?`): `Bytes`

Defined in: [bee-js/src/utils/bytes.ts:10](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/bytes.ts#L10)

#### Parameters

##### bytes

`string` | `ArrayBuffer` | `Uint8Array`\<`ArrayBufferLike`\> | `Bytes`

##### byteLength?

`number` | `number`[]

#### Returns

`Bytes`

## Properties

### bytes

> `protected` `readonly` **bytes**: `Uint8Array`

Defined in: [bee-js/src/utils/bytes.ts:7](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/bytes.ts#L7)

***

### length

> `readonly` **length**: `number`

Defined in: [bee-js/src/utils/bytes.ts:8](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/bytes.ts#L8)

## Methods

### equals()

> **equals**(`other`): `boolean`

Defined in: [bee-js/src/utils/bytes.ts:83](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/bytes.ts#L83)

#### Parameters

##### other

`string` | `Uint8Array`\<`ArrayBufferLike`\> | `Bytes`

#### Returns

`boolean`

***

### offset()

> **offset**(`index`): `Uint8Array`

Defined in: [bee-js/src/utils/bytes.ts:51](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/bytes.ts#L51)

#### Parameters

##### index

`number`

#### Returns

`Uint8Array`

***

### toBase32()

> **toBase32**(): `string`

Defined in: [bee-js/src/utils/bytes.ts:67](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/bytes.ts#L67)

#### Returns

`string`

***

### toBase64()

> **toBase64**(): `string`

Defined in: [bee-js/src/utils/bytes.ts:63](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/bytes.ts#L63)

#### Returns

`string`

***

### toHex()

> **toHex**(): `string`

Defined in: [bee-js/src/utils/bytes.ts:59](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/bytes.ts#L59)

#### Returns

`string`

***

### toJSON()

> **toJSON**(): `unknown`

Defined in: [bee-js/src/utils/bytes.ts:79](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/bytes.ts#L79)

#### Returns

`unknown`

***

### toString()

> **toString**(): `string`

Defined in: [bee-js/src/utils/bytes.ts:71](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/bytes.ts#L71)

#### Returns

`string`

***

### toUint8Array()

> **toUint8Array**(): `Uint8Array`

Defined in: [bee-js/src/utils/bytes.ts:55](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/bytes.ts#L55)

#### Returns

`Uint8Array`

***

### toUtf8()

> **toUtf8**(): `string`

Defined in: [bee-js/src/utils/bytes.ts:75](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/bytes.ts#L75)

#### Returns

`string`

***

### fromSlice()

> `static` **fromSlice**(`bytes`, `start`, `length?`): `Bytes`

Defined in: [bee-js/src/utils/bytes.ts:43](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/bytes.ts#L43)

#### Parameters

##### bytes

`Uint8Array`

##### start

`number`

##### length?

`number`

#### Returns

`Bytes`

***

### fromUtf8()

> `static` **fromUtf8**(`utf8`): `Bytes`

Defined in: [bee-js/src/utils/bytes.ts:39](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/bytes.ts#L39)

#### Parameters

##### utf8

`string`

#### Returns

`Bytes`

***

### keccak256()

> `static` **keccak256**(`bytes`): `Bytes`

Defined in: [bee-js/src/utils/bytes.ts:35](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/bytes.ts#L35)

#### Parameters

##### bytes

`string` | `ArrayBuffer` | `Uint8Array`\<`ArrayBufferLike`\> | `Bytes`

#### Returns

`Bytes`
