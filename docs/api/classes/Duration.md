# Class: Duration

Defined in: [bee-js/src/utils/duration.ts:3](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/duration.ts#L3)

## Properties

### ZERO

> `static` **ZERO**: `Duration`

Defined in: [bee-js/src/utils/duration.ts:5](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/duration.ts#L5)

## Methods

### isZero()

> **isZero**(): `boolean`

Defined in: [bee-js/src/utils/duration.ts:98](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/duration.ts#L98)

#### Returns

`boolean`

***

### represent()

> **represent**(): `string`

Defined in: [bee-js/src/utils/duration.ts:94](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/duration.ts#L94)

#### Returns

`string`

***

### toDays()

> **toDays**(): `number`

Defined in: [bee-js/src/utils/duration.ts:78](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/duration.ts#L78)

#### Returns

`number`

***

### toEndDate()

> **toEndDate**(`startDate?`): `Date`

Defined in: [bee-js/src/utils/duration.ts:90](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/duration.ts#L90)

#### Parameters

##### startDate?

`Date`

#### Returns

`Date`

***

### toHours()

> **toHours**(): `number`

Defined in: [bee-js/src/utils/duration.ts:74](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/duration.ts#L74)

#### Returns

`number`

***

### toSeconds()

> **toSeconds**(): `number`

Defined in: [bee-js/src/utils/duration.ts:70](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/duration.ts#L70)

#### Returns

`number`

***

### toWeeks()

> **toWeeks**(): `number`

Defined in: [bee-js/src/utils/duration.ts:82](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/duration.ts#L82)

#### Returns

`number`

***

### toYears()

> **toYears**(): `number`

Defined in: [bee-js/src/utils/duration.ts:86](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/duration.ts#L86)

#### Returns

`number`

***

### fromDays()

> `static` **fromDays**(`days`): `Duration`

Defined in: [bee-js/src/utils/duration.ts:27](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/duration.ts#L27)

#### Parameters

##### days

`number`

#### Returns

`Duration`

***

### fromEndDate()

> `static` **fromEndDate**(`endDate`, `startDate?`): `Duration`

Defined in: [bee-js/src/utils/duration.ts:39](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/duration.ts#L39)

#### Parameters

##### endDate

`Date`

##### startDate?

`Date`

#### Returns

`Duration`

***

### fromHours()

> `static` **fromHours**(`hours`): `Duration`

Defined in: [bee-js/src/utils/duration.ts:23](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/duration.ts#L23)

#### Parameters

##### hours

`number`

#### Returns

`Duration`

***

### fromMilliseconds()

> `static` **fromMilliseconds**(`milliseconds`): `Duration`

Defined in: [bee-js/src/utils/duration.ts:15](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/duration.ts#L15)

#### Parameters

##### milliseconds

`number`

#### Returns

`Duration`

***

### fromSeconds()

> `static` **fromSeconds**(`seconds`): `Duration`

Defined in: [bee-js/src/utils/duration.ts:19](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/duration.ts#L19)

#### Parameters

##### seconds

`number`

#### Returns

`Duration`

***

### fromWeeks()

> `static` **fromWeeks**(`weeks`): `Duration`

Defined in: [bee-js/src/utils/duration.ts:31](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/duration.ts#L31)

#### Parameters

##### weeks

`number`

#### Returns

`Duration`

***

### fromYears()

> `static` **fromYears**(`years`): `Duration`

Defined in: [bee-js/src/utils/duration.ts:35](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/duration.ts#L35)

#### Parameters

##### years

`number`

#### Returns

`Duration`

***

### parseFromString()

> `static` **parseFromString**(`duration`): `Duration`

Defined in: [bee-js/src/utils/duration.ts:66](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/duration.ts#L66)

Parses a duration string and returns a `Duration` instance.

Case insensitive. E.g. both `"28h"` and `"1D"` are valid.

Whitespaces are ignored. E.g. both `"5 d"` and `"2weeks"` are valid.

Decimal numbers are supported. E.g. `"1.5h"` is valid.

Supported units:

- ms, milli, millis, millisecond, milliseconds
- s, sec, second, seconds
- m, min, minute, minutes
- h, hour, hours
- d, day, days
- w, week, weeks
- month, months
- y, year, years

#### Parameters

##### duration

`string`

A string representing a duration

#### Returns

`Duration`

a `Duration` instance
