# Class: Size

Defined in: [bee-js/src/utils/size.ts:10](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/size.ts#L10)

Represents a size in bytes.

Uses 1000 instead of 1024 for converting between units.
This is to stay consistent with the Swarm papers
on theoretical and effective storage capacity.

## Methods

### represent()

> **represent**(): `string`

Defined in: [bee-js/src/utils/size.ts:75](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/size.ts#L75)

#### Returns

`string`

***

### toBytes()

> **toBytes**(): `number`

Defined in: [bee-js/src/utils/size.ts:63](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/size.ts#L63)

#### Returns

`number`

***

### toFormattedString()

> **toFormattedString**(): `string`

Defined in: [bee-js/src/utils/size.ts:71](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/size.ts#L71)

#### Returns

`string`

***

### toGigabytes()

> **toGigabytes**(): `number`

Defined in: [bee-js/src/utils/size.ts:67](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/size.ts#L67)

#### Returns

`number`

***

### fromBytes()

> `static` **fromBytes**(`bytes`): `Size`

Defined in: [bee-js/src/utils/size.ts:21](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/size.ts#L21)

#### Parameters

##### bytes

`number`

#### Returns

`Size`

***

### fromGigabytes()

> `static` **fromGigabytes**(`gigabytes`): `Size`

Defined in: [bee-js/src/utils/size.ts:33](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/size.ts#L33)

#### Parameters

##### gigabytes

`number`

#### Returns

`Size`

***

### fromKilobytes()

> `static` **fromKilobytes**(`kilobytes`): `Size`

Defined in: [bee-js/src/utils/size.ts:25](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/size.ts#L25)

#### Parameters

##### kilobytes

`number`

#### Returns

`Size`

***

### fromMegabytes()

> `static` **fromMegabytes**(`megabytes`): `Size`

Defined in: [bee-js/src/utils/size.ts:29](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/size.ts#L29)

#### Parameters

##### megabytes

`number`

#### Returns

`Size`

***

### parseFromString()

> `static` **parseFromString**(`size`): `Size`

Defined in: [bee-js/src/utils/size.ts:59](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/size.ts#L59)

Parses a size string and returns a `Size` instance.

Case insensitive. E.g. both `"28MB"` and `"1gb"` are valid.

Whitespaces are ignored. E.g. both `"512 kb"` and `"2megabytes"` are valid.

Decimal numbers are supported. E.g. `"1.5gb"` is valid.

Uses 1000 as the base for conversions. E.g. 1kb = 1000 bytes.
This is consistent with the effective stamp utilization table.

Supported units:
- b, byte, bytes
- kb, kilobyte, kilobytes
- mb, megabyte, megabytes
- gb, gigabyte, gigabytes
- tb, terabyte, terabytes

#### Parameters

##### size

`string`

A string representing a size

#### Returns

`Size`

a `Size` instance
