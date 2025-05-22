# Class: Size

Defined in: [bee-js/src/utils/size.ts:10](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/size.ts#L10)

Represents a size in bytes.

Uses 1000 instead of 1024 for converting between units.
This is to stay consistent with the Swarm papers
on theoretical and effective storage capacity.

## Methods

### toBytes()

> **toBytes**(): `number`

Defined in: [bee-js/src/utils/size.ts:37](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/size.ts#L37)

#### Returns

`number`

***

### toFormattedString()

> **toFormattedString**(): `string`

Defined in: [bee-js/src/utils/size.ts:45](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/size.ts#L45)

#### Returns

`string`

***

### toGigabytes()

> **toGigabytes**(): `number`

Defined in: [bee-js/src/utils/size.ts:41](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/size.ts#L41)

#### Returns

`number`

***

### fromBytes()

> `static` **fromBytes**(`bytes`): `Size`

Defined in: [bee-js/src/utils/size.ts:21](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/size.ts#L21)

#### Parameters

##### bytes

`number`

#### Returns

`Size`

***

### fromGigabytes()

> `static` **fromGigabytes**(`gigabytes`): `Size`

Defined in: [bee-js/src/utils/size.ts:33](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/size.ts#L33)

#### Parameters

##### gigabytes

`number`

#### Returns

`Size`

***

### fromKilobytes()

> `static` **fromKilobytes**(`kilobytes`): `Size`

Defined in: [bee-js/src/utils/size.ts:25](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/size.ts#L25)

#### Parameters

##### kilobytes

`number`

#### Returns

`Size`

***

### fromMegabytes()

> `static` **fromMegabytes**(`megabytes`): `Size`

Defined in: [bee-js/src/utils/size.ts:29](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/size.ts#L29)

#### Parameters

##### megabytes

`number`

#### Returns

`Size`
