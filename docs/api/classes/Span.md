# Class: Span

Defined in: [core-sdk/src/bytes/span.ts:7](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/span.ts#L7)

An 8-byte, little-endian span - the byte count prefixing a chunk's payload.

## Extends

- [`Bytes`](Bytes.md)

## Constructors

### Constructor

> **new Span**(`bytes`): `Span`

Defined in: [core-sdk/src/bytes/span.ts:10](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/span.ts#L10)

#### Parameters

##### bytes

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Bytes`](Bytes.md)

#### Returns

`Span`

#### Overrides

[`Bytes`](Bytes.md).[`constructor`](Bytes.md#constructor)

## Properties

### length

> `readonly` **length**: `number`

Defined in: [core-sdk/src/bytes/bytes.ts:19](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/bytes.ts#L19)

#### Inherited from

[`Bytes`](Bytes.md).[`length`](Bytes.md#length)

***

### LENGTH

> `readonly` `static` **LENGTH**: `8` = `8`

Defined in: [core-sdk/src/bytes/span.ts:8](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/span.ts#L8)

## Methods

### equals()

> **equals**(`other`): `boolean`

Defined in: [core-sdk/src/bytes/bytes.ts:166](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/bytes.ts#L166)

Byte-wise equality against another Bytes instance, raw bytes, or hex string.

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

Defined in: [core-sdk/src/bytes/bytes.ts:110](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/bytes.ts#L110)

Returns a copy of the bytes from `index` to the end.

#### Parameters

##### index

`number`

#### Returns

`Uint8Array`

#### Inherited from

[`Bytes`](Bytes.md).[`offset`](Bytes.md#offset)

***

### represent()

> **represent**(): `string`

Defined in: [core-sdk/src/bytes/bytes.ts:173](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/bytes.ts#L173)

Human-readable representation, used by debuggers/loggers. Same as [toHex](Bytes.md#tohex).

#### Returns

`string`

#### Inherited from

[`Bytes`](Bytes.md).[`represent`](Bytes.md#represent)

***

### toBase32()

> **toBase32**(): `string`

Defined in: [core-sdk/src/bytes/bytes.ts:138](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/bytes.ts#L138)

Encodes as a padded base32 string.

#### Returns

`string`

#### Inherited from

[`Bytes`](Bytes.md).[`toBase32`](Bytes.md#tobase32)

***

### toBase64()

> **toBase64**(): `string`

Defined in: [core-sdk/src/bytes/bytes.ts:131](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/bytes.ts#L131)

Encodes as a padded base64 string.

#### Returns

`string`

#### Inherited from

[`Bytes`](Bytes.md).[`toBase64`](Bytes.md#tobase64)

***

### toBigInt()

> **toBigInt**(): `bigint`

Defined in: [core-sdk/src/bytes/span.ts:24](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/span.ts#L24)

Decodes the span as a bigint byte count.

#### Returns

`bigint`

***

### toHex()

> **toHex**(): `string`

Defined in: [core-sdk/src/bytes/bytes.ts:124](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/bytes.ts#L124)

Encodes as a lowercase hex string, with no `0x` prefix.

#### Returns

`string`

#### Inherited from

[`Bytes`](Bytes.md).[`toHex`](Bytes.md#tohex)

***

### toJSON()

> **toJSON**(): `unknown`

Defined in: [core-sdk/src/bytes/bytes.ts:159](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/bytes.ts#L159)

Decodes the bytes as UTF-8 JSON.

#### Returns

`unknown`

#### Inherited from

[`Bytes`](Bytes.md).[`toJSON`](Bytes.md#tojson)

***

### toString()

> **toString**(): `string`

Defined in: [core-sdk/src/bytes/bytes.ts:145](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/bytes.ts#L145)

Same as [toHex](Bytes.md#tohex).

#### Returns

`string`

#### Inherited from

[`Bytes`](Bytes.md).[`toString`](Bytes.md#tostring)

***

### toUint8Array()

> **toUint8Array**(): `Uint8Array`

Defined in: [core-sdk/src/bytes/bytes.ts:117](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/bytes.ts#L117)

Returns a copy of the underlying bytes.

#### Returns

`Uint8Array`

#### Inherited from

[`Bytes`](Bytes.md).[`toUint8Array`](Bytes.md#touint8array)

***

### toUtf8()

> **toUtf8**(): `string`

Defined in: [core-sdk/src/bytes/bytes.ts:152](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/bytes.ts#L152)

Decodes the bytes as UTF-8 text.

#### Returns

`string`

#### Inherited from

[`Bytes`](Bytes.md).[`toUtf8`](Bytes.md#toutf8)

***

### concat()

> `static` **concat**(...`arrays`): `Uint8Array`

Defined in: [core-sdk/src/bytes/bytes.ts:75](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/bytes.ts#L75)

Concatenates any number of byte arrays (or Bytes instances) into one new array.

#### Parameters

##### arrays

...(`Uint8Array`\<`ArrayBufferLike`\> \| [`Bytes`](Bytes.md))[]

#### Returns

`Uint8Array`

#### Inherited from

[`Bytes`](Bytes.md).[`concat`](Bytes.md#concat)

***

### fromBigInt()

> `static` **fromBigInt**(`value`): `Span`

Defined in: [core-sdk/src/bytes/span.ts:17](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/span.ts#L17)

Encodes a bigint byte count as an 8-byte, little-endian Span.

#### Parameters

##### value

`bigint`

#### Returns

`Span`

***

### fromSlice()

> `static` **fromSlice**(`bytes`, `start`): `Span`

Defined in: [core-sdk/src/bytes/span.ts:31](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/span.ts#L31)

Reads an 8-byte Span out of a larger buffer, starting at `start`.

#### Parameters

##### bytes

`Uint8Array`

##### start

`number`

#### Returns

`Span`

#### Overrides

[`Bytes`](Bytes.md).[`fromSlice`](Bytes.md#fromslice)

***

### fromUtf8()

> `static` **fromUtf8**(`utf8`): [`Bytes`](Bytes.md)

Defined in: [core-sdk/src/bytes/bytes.ts:92](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/bytes.ts#L92)

Wraps the UTF-8 encoding of a string.

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

Defined in: [core-sdk/src/bytes/bytes.ts:68](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/bytes.ts#L68)

Hashes `bytes` with keccak256 and wraps the 32-byte digest.

#### Parameters

##### bytes

`string` | `ArrayBuffer` | `Uint8Array`\<`ArrayBufferLike`\> | [`Bytes`](Bytes.md)

#### Returns

[`Bytes`](Bytes.md)

#### Inherited from

[`Bytes`](Bytes.md).[`keccak256`](Bytes.md#keccak256)
