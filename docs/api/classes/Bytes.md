# Class: Bytes

Defined in: [core-sdk/src/bytes/bytes.ts:17](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/bytes.ts#L17)

Base wrapper around a byte array, accepting a Uint8Array, ArrayBuffer, hex
string, or another Bytes instance, with an optional length check.

## Extended by

- [`BatchId`](BatchId.md)
- [`EthAddress`](EthAddress.md)
- [`FeedIndex`](FeedIndex.md)
- [`Identifier`](Identifier.md)
- [`PeerAddress`](PeerAddress.md)
- [`PrivateKey`](PrivateKey.md)
- [`PublicKey`](PublicKey.md)
- [`Reference`](Reference.md)
- [`Signature`](Signature.md)
- [`Span`](Span.md)
- [`Topic`](Topic.md)
- [`TransactionId`](TransactionId.md)

## Constructors

### Constructor

> **new Bytes**(`bytes`, `byteLength?`): `Bytes`

Defined in: [core-sdk/src/bytes/bytes.ts:25](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/bytes.ts#L25)

#### Parameters

##### bytes

`string` | `ArrayBuffer` | `Uint8Array`\<`ArrayBufferLike`\> | `Bytes`

##### byteLength?

If given, throws unless the resulting length matches
(or, for an array, is one of) the expected length(s).

`number` | `number`[]

#### Returns

`Bytes`

## Properties

### length

> `readonly` **length**: `number`

Defined in: [core-sdk/src/bytes/bytes.ts:19](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/bytes.ts#L19)

## Methods

### equals()

> **equals**(`other`): `boolean`

Defined in: [core-sdk/src/bytes/bytes.ts:166](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/bytes.ts#L166)

Byte-wise equality against another Bytes instance, raw bytes, or hex string.

#### Parameters

##### other

`string` | `Uint8Array`\<`ArrayBufferLike`\> | `Bytes`

#### Returns

`boolean`

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

***

### represent()

> **represent**(): `string`

Defined in: [core-sdk/src/bytes/bytes.ts:173](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/bytes.ts#L173)

Human-readable representation, used by debuggers/loggers. Same as [toHex](#tohex).

#### Returns

`string`

***

### toBase32()

> **toBase32**(): `string`

Defined in: [core-sdk/src/bytes/bytes.ts:138](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/bytes.ts#L138)

Encodes as a padded base32 string.

#### Returns

`string`

***

### toBase64()

> **toBase64**(): `string`

Defined in: [core-sdk/src/bytes/bytes.ts:131](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/bytes.ts#L131)

Encodes as a padded base64 string.

#### Returns

`string`

***

### toHex()

> **toHex**(): `string`

Defined in: [core-sdk/src/bytes/bytes.ts:124](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/bytes.ts#L124)

Encodes as a lowercase hex string, with no `0x` prefix.

#### Returns

`string`

***

### toJSON()

> **toJSON**(): `unknown`

Defined in: [core-sdk/src/bytes/bytes.ts:159](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/bytes.ts#L159)

Decodes the bytes as UTF-8 JSON.

#### Returns

`unknown`

***

### toString()

> **toString**(): `string`

Defined in: [core-sdk/src/bytes/bytes.ts:145](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/bytes.ts#L145)

Same as [toHex](#tohex).

#### Returns

`string`

***

### toUint8Array()

> **toUint8Array**(): `Uint8Array`

Defined in: [core-sdk/src/bytes/bytes.ts:117](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/bytes.ts#L117)

Returns a copy of the underlying bytes.

#### Returns

`Uint8Array`

***

### toUtf8()

> **toUtf8**(): `string`

Defined in: [core-sdk/src/bytes/bytes.ts:152](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/bytes.ts#L152)

Decodes the bytes as UTF-8 text.

#### Returns

`string`

***

### concat()

> `static` **concat**(...`arrays`): `Uint8Array`

Defined in: [core-sdk/src/bytes/bytes.ts:75](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/bytes.ts#L75)

Concatenates any number of byte arrays (or Bytes instances) into one new array.

#### Parameters

##### arrays

...(`Uint8Array`\<`ArrayBufferLike`\> \| `Bytes`)[]

#### Returns

`Uint8Array`

***

### fromSlice()

> `static` **fromSlice**(`bytes`, `start`, `length?`): `Bytes`

Defined in: [core-sdk/src/bytes/bytes.ts:100](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/bytes.ts#L100)

Wraps a slice of `bytes` starting at `start`, running to the end unless
`length` is given.

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

Defined in: [core-sdk/src/bytes/bytes.ts:92](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/bytes.ts#L92)

Wraps the UTF-8 encoding of a string.

#### Parameters

##### utf8

`string`

#### Returns

`Bytes`

***

### keccak256()

> `static` **keccak256**(`bytes`): `Bytes`

Defined in: [core-sdk/src/bytes/bytes.ts:68](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/bytes/bytes.ts#L68)

Hashes `bytes` with keccak256 and wraps the 32-byte digest.

#### Parameters

##### bytes

`string` | `ArrayBuffer` | `Uint8Array`\<`ArrayBufferLike`\> | `Bytes`

#### Returns

`Bytes`
