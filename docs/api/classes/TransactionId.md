# Class: TransactionId

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/transaction-id.d.cts:5

A 32-byte blockchain transaction hash.

## Extends

- [`Bytes`](Bytes.md)

## Constructors

### Constructor

> **new TransactionId**(`bytes`): `TransactionId`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/transaction-id.d.cts:7

#### Parameters

##### bytes

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Bytes`](Bytes.md)

#### Returns

`TransactionId`

#### Overrides

[`Bytes`](Bytes.md).[`constructor`](Bytes.md#constructor)

## Properties

### length

> `readonly` **length**: `number`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/bytes.d.cts:7

#### Inherited from

[`Bytes`](Bytes.md).[`length`](Bytes.md#length)

***

### LENGTH

> `readonly` `static` **LENGTH**: `32` = `32`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/transaction-id.d.cts:6

## Methods

### equals()

> **equals**(`other`): `boolean`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/bytes.d.cts:65

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

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/bytes.d.cts:33

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

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/bytes.d.cts:69

Human-readable representation, used by debuggers/loggers. Same as [toHex](Bytes.md#tohex).

#### Returns

`string`

#### Inherited from

[`Bytes`](Bytes.md).[`represent`](Bytes.md#represent)

***

### toBase32()

> **toBase32**(): `string`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/bytes.d.cts:49

Encodes as a padded base32 string.

#### Returns

`string`

#### Inherited from

[`Bytes`](Bytes.md).[`toBase32`](Bytes.md#tobase32)

***

### toBase64()

> **toBase64**(): `string`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/bytes.d.cts:45

Encodes as a padded base64 string.

#### Returns

`string`

#### Inherited from

[`Bytes`](Bytes.md).[`toBase64`](Bytes.md#tobase64)

***

### toHex()

> **toHex**(): `string`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/bytes.d.cts:41

Encodes as a lowercase hex string, with no `0x` prefix.

#### Returns

`string`

#### Inherited from

[`Bytes`](Bytes.md).[`toHex`](Bytes.md#tohex)

***

### toJSON()

> **toJSON**(): `unknown`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/bytes.d.cts:61

Decodes the bytes as UTF-8 JSON.

#### Returns

`unknown`

#### Inherited from

[`Bytes`](Bytes.md).[`toJSON`](Bytes.md#tojson)

***

### toString()

> **toString**(): `string`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/bytes.d.cts:53

Same as [toHex](Bytes.md#tohex).

#### Returns

`string`

#### Inherited from

[`Bytes`](Bytes.md).[`toString`](Bytes.md#tostring)

***

### toUint8Array()

> **toUint8Array**(): `Uint8Array`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/bytes.d.cts:37

Returns a copy of the underlying bytes.

#### Returns

`Uint8Array`

#### Inherited from

[`Bytes`](Bytes.md).[`toUint8Array`](Bytes.md#touint8array)

***

### toUtf8()

> **toUtf8**(): `string`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/bytes.d.cts:57

Decodes the bytes as UTF-8 text.

#### Returns

`string`

#### Inherited from

[`Bytes`](Bytes.md).[`toUtf8`](Bytes.md#toutf8)

***

### concat()

> `static` **concat**(...`arrays`): `Uint8Array`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/bytes.d.cts:20

Concatenates any number of byte arrays (or Bytes instances) into one new array.

#### Parameters

##### arrays

...(`Uint8Array`\<`ArrayBufferLike`\> \| [`Bytes`](Bytes.md))[]

#### Returns

`Uint8Array`

#### Inherited from

[`Bytes`](Bytes.md).[`concat`](Bytes.md#concat)

***

### fromSlice()

> `static` **fromSlice**(`bytes`, `start`, `length?`): [`Bytes`](Bytes.md)

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

[`Bytes`](Bytes.md)

#### Inherited from

[`Bytes`](Bytes.md).[`fromSlice`](Bytes.md#fromslice)

***

### fromUtf8()

> `static` **fromUtf8**(`utf8`): [`Bytes`](Bytes.md)

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/bytes.d.cts:24

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

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/bytes.d.cts:16

Hashes `bytes` with keccak256 and wraps the 32-byte digest.

#### Parameters

##### bytes

`string` | `ArrayBuffer` | `Uint8Array`\<`ArrayBufferLike`\> | [`Bytes`](Bytes.md)

#### Returns

[`Bytes`](Bytes.md)

#### Inherited from

[`Bytes`](Bytes.md).[`keccak256`](Bytes.md#keccak256)
