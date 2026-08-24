# Class: Bytes

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/bytes.d.cts:5

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

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/bytes.d.cts:12

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

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/bytes.d.cts:7

## Methods

### equals()

> **equals**(`other`): `boolean`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/bytes.d.cts:65

Byte-wise equality against another Bytes instance, raw bytes, or hex string.

#### Parameters

##### other

`string` | `Uint8Array`\<`ArrayBufferLike`\> | `Bytes`

#### Returns

`boolean`

***

### offset()

> **offset**(`index`): `Uint8Array`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/bytes.d.cts:33

Returns a copy of the bytes from `index` to the end.

#### Parameters

##### index

`number`

#### Returns

`Uint8Array`

***

### represent()

> **represent**(): `string`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/bytes.d.cts:69

Human-readable representation, used by debuggers/loggers. Same as [toHex](#tohex).

#### Returns

`string`

***

### toBase32()

> **toBase32**(): `string`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/bytes.d.cts:49

Encodes as a padded base32 string.

#### Returns

`string`

***

### toBase64()

> **toBase64**(): `string`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/bytes.d.cts:45

Encodes as a padded base64 string.

#### Returns

`string`

***

### toHex()

> **toHex**(): `string`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/bytes.d.cts:41

Encodes as a lowercase hex string, with no `0x` prefix.

#### Returns

`string`

***

### toJSON()

> **toJSON**(): `unknown`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/bytes.d.cts:61

Decodes the bytes as UTF-8 JSON.

#### Returns

`unknown`

***

### toString()

> **toString**(): `string`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/bytes.d.cts:53

Same as [toHex](#tohex).

#### Returns

`string`

***

### toUint8Array()

> **toUint8Array**(): `Uint8Array`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/bytes.d.cts:37

Returns a copy of the underlying bytes.

#### Returns

`Uint8Array`

***

### toUtf8()

> **toUtf8**(): `string`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/bytes.d.cts:57

Decodes the bytes as UTF-8 text.

#### Returns

`string`

***

### concat()

> `static` **concat**(...`arrays`): `Uint8Array`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/bytes.d.cts:20

Concatenates any number of byte arrays (or Bytes instances) into one new array.

#### Parameters

##### arrays

...(`Uint8Array`\<`ArrayBufferLike`\> \| `Bytes`)[]

#### Returns

`Uint8Array`

***

### fromSlice()

> `static` **fromSlice**(`bytes`, `start`, `length?`): `Bytes`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/bytes.d.cts:29

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

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/bytes.d.cts:24

Wraps the UTF-8 encoding of a string.

#### Parameters

##### utf8

`string`

#### Returns

`Bytes`

***

### keccak256()

> `static` **keccak256**(`bytes`): `Bytes`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/bytes.d.cts:16

Hashes `bytes` with keccak256 and wraps the 32-byte digest.

#### Parameters

##### bytes

`string` | `ArrayBuffer` | `Uint8Array`\<`ArrayBufferLike`\> | `Bytes`

#### Returns

`Bytes`
