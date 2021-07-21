---
id: "utils.bytes.flexbytes"
title: "Interface: FlexBytes<Min, Max>"
sidebar_label: "FlexBytes"
custom_edit_url: null
---

[Utils](../modules/utils.md).[Bytes](../modules/utils.bytes.md).FlexBytes

Helper type for dealing with flexible sized byte arrays.

The actual min and and max values are not stored in runtime, they
are only there to differentiate the type from the Uint8Array at
compile time.

**`see`** BrandedType

## Type parameters

| Name | Type |
| :------ | :------ |
| `Min` | extends `number` |
| `Max` | extends `number` |

## Hierarchy

- `Uint8Array`

  ↳ **`FlexBytes`**

## Properties

### BYTES\_PER\_ELEMENT

• `Readonly` **BYTES\_PER\_ELEMENT**: `number`

The size in bytes of each element in the array.

#### Inherited from

Uint8Array.BYTES\_PER\_ELEMENT

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2042

___

### [toStringTag]

• `Readonly` **[toStringTag]**: ``"Uint8Array"``

#### Inherited from

Uint8Array.\_\_@toStringTag@24

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:282

___

### \_\_max\_\_

• `Readonly` **\_\_max\_\_**: `Max`

#### Defined in

[bee-js/src/utils/bytes.ts:25](https://github.com/ethersphere/bee-js/blob/6f227e1/src/utils/bytes.ts#L25)

___

### \_\_min\_\_

• `Readonly` **\_\_min\_\_**: `Min`

#### Defined in

[bee-js/src/utils/bytes.ts:24](https://github.com/ethersphere/bee-js/blob/6f227e1/src/utils/bytes.ts#L24)

___

### buffer

• `Readonly` **buffer**: `ArrayBufferLike`

The ArrayBuffer instance referenced by the array.

#### Inherited from

Uint8Array.buffer

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2047

___

### byteLength

• `Readonly` **byteLength**: `number`

The length in bytes of the array.

#### Inherited from

Uint8Array.byteLength

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2052

___

### byteOffset

• `Readonly` **byteOffset**: `number`

The offset in bytes of the array.

#### Inherited from

Uint8Array.byteOffset

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2057

___

### length

• `Readonly` **length**: `number`

The length of the array.

#### Inherited from

Uint8Array.length

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2156

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<`number`\>

#### Returns

`IterableIterator`<`number`\>

#### Inherited from

Uint8Array.\_\_@iterator@81

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:279

___

### copyWithin

▸ **copyWithin**(`target`, `start`, `end?`): [`FlexBytes`](utils.bytes.flexbytes.md)<`Min`, `Max`\>

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `number` | If target is negative, it is treated as length+target where length is the length of the array. |
| `start` | `number` | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
| `end?` | `number` | If not specified, length of the this object is used as its default value. |

#### Returns

[`FlexBytes`](utils.bytes.flexbytes.md)<`Min`, `Max`\>

#### Inherited from

Uint8Array.copyWithin

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2068

___

### entries

▸ **entries**(): `IterableIterator`<[`number`, `number`]\>

Returns an array of key, value pairs for every entry in the array

#### Returns

`IterableIterator`<[`number`, `number`]\>

#### Inherited from

Uint8Array.entries

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:283

___

### every

▸ **every**(`predicate`, `thisArg?`): `boolean`

Determines whether all the members of an array satisfy the specified test.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `number`, `index`: `number`, `array`: `Uint8Array`) =\> `unknown` | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Uint8Array.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2078

___

### fill

▸ **fill**(`value`, `start?`, `end?`): [`FlexBytes`](utils.bytes.flexbytes.md)<`Min`, `Max`\>

Returns the this object after filling the section identified by start and end with value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | value to fill array section with |
| `start?` | `number` | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
| `end?` | `number` | index to stop filling the array at. If end is negative, it is treated as length+end. |

#### Returns

[`FlexBytes`](utils.bytes.flexbytes.md)<`Min`, `Max`\>

#### Inherited from

Uint8Array.fill

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2088

___

### filter

▸ **filter**(`predicate`, `thisArg?`): `Uint8Array`

Returns the elements of an array that meet the condition specified in a callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `number`, `index`: `number`, `array`: `Uint8Array`) =\> `any` | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`Uint8Array`

#### Inherited from

Uint8Array.filter

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2097

___

### find

▸ **find**(`predicate`, `thisArg?`): `undefined` \| `number`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `number`, `index`: `number`, `obj`: `Uint8Array`) =\> `boolean` | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`undefined` \| `number`

#### Inherited from

Uint8Array.find

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2108

___

### findIndex

▸ **findIndex**(`predicate`, `thisArg?`): `number`

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `number`, `index`: `number`, `obj`: `Uint8Array`) =\> `boolean` | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`number`

#### Inherited from

Uint8Array.findIndex

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2119

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Performs the specified action for each element in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: `number`, `index`: `number`, `array`: `Uint8Array`) =\> `void` | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`void`

#### Inherited from

Uint8Array.forEach

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2128

___

### includes

▸ **includes**(`searchElement`, `fromIndex?`): `boolean`

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `number` | The element to search for. |
| `fromIndex?` | `number` | The position in this array at which to begin searching for searchElement. |

#### Returns

`boolean`

#### Inherited from

Uint8Array.includes

#### Defined in

node_modules/typescript/lib/lib.es2016.array.include.d.ts:54

___

### indexOf

▸ **indexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the first occurrence of a value in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `number` | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin the search. If fromIndex is omitted, the  search starts at index 0. |

#### Returns

`number`

#### Inherited from

Uint8Array.indexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2136

___

### join

▸ **join**(`separator?`): `string`

Adds all the elements of an array separated by the specified separator string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `separator?` | `string` | A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma. |

#### Returns

`string`

#### Inherited from

Uint8Array.join

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2143

___

### keys

▸ **keys**(): `IterableIterator`<`number`\>

Returns an list of keys in the array

#### Returns

`IterableIterator`<`number`\>

#### Inherited from

Uint8Array.keys

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:287

___

### lastIndexOf

▸ **lastIndexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the last occurrence of a value in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `number` | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

#### Returns

`number`

#### Inherited from

Uint8Array.lastIndexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2151

___

### map

▸ **map**(`callbackfn`, `thisArg?`): `Uint8Array`

Calls a defined callback function on each element of an array, and returns an array that
contains the results.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: `number`, `index`: `number`, `array`: `Uint8Array`) =\> `number` | A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`Uint8Array`

#### Inherited from

Uint8Array.map

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2166

___

### reduce

▸ **reduce**(`callbackfn`): `number`

Calls the specified callback function for all the elements in an array. The return value of
the callback function is the accumulated result, and is provided as an argument in the next
call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `number`, `currentValue`: `number`, `currentIndex`: `number`, `array`: `Uint8Array`) =\> `number` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

#### Returns

`number`

#### Inherited from

Uint8Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2178

▸ **reduce**(`callbackfn`, `initialValue`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: `number`, `currentValue`: `number`, `currentIndex`: `number`, `array`: `Uint8Array`) =\> `number` |
| `initialValue` | `number` |

#### Returns

`number`

#### Inherited from

Uint8Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2179

▸ **reduce**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array. The return value of
the callback function is the accumulated result, and is provided as an argument in the next
call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: `number`, `currentIndex`: `number`, `array`: `Uint8Array`) =\> `U` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Uint8Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2191

___

### reduceRight

▸ **reduceRight**(`callbackfn`): `number`

Calls the specified callback function for all the elements in an array, in descending order.
The return value of the callback function is the accumulated result, and is provided as an
argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `number`, `currentValue`: `number`, `currentIndex`: `number`, `array`: `Uint8Array`) =\> `number` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

#### Returns

`number`

#### Inherited from

Uint8Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2203

▸ **reduceRight**(`callbackfn`, `initialValue`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: `number`, `currentValue`: `number`, `currentIndex`: `number`, `array`: `Uint8Array`) =\> `number` |
| `initialValue` | `number` |

#### Returns

`number`

#### Inherited from

Uint8Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2204

▸ **reduceRight**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array, in descending order.
The return value of the callback function is the accumulated result, and is provided as an
argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: `number`, `currentIndex`: `number`, `array`: `Uint8Array`) =\> `U` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Uint8Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2216

___

### reverse

▸ **reverse**(): `Uint8Array`

Reverses the elements in an Array.

#### Returns

`Uint8Array`

#### Inherited from

Uint8Array.reverse

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2221

___

### set

▸ **set**(`array`, `offset?`): `void`

Sets a value or an array of values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`<`number`\> | A typed or untyped array of values to set. |
| `offset?` | `number` | The index in the current array at which the values are to be written. |

#### Returns

`void`

#### Inherited from

Uint8Array.set

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2228

___

### slice

▸ **slice**(`start?`, `end?`): `Uint8Array`

Returns a section of an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | The beginning of the specified portion of the array. |
| `end?` | `number` | The end of the specified portion of the array. This is exclusive of the element at the index 'end'. |

#### Returns

`Uint8Array`

#### Inherited from

Uint8Array.slice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2235

___

### some

▸ **some**(`predicate`, `thisArg?`): `boolean`

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `number`, `index`: `number`, `array`: `Uint8Array`) =\> `unknown` | A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Uint8Array.some

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2245

___

### sort

▸ **sort**(`compareFn?`): [`FlexBytes`](utils.bytes.flexbytes.md)<`Min`, `Max`\>

Sorts an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn?` | (`a`: `number`, `b`: `number`) =\> `number` | Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11,2,22,1].sort((a, b) =\> a - b) ``` |

#### Returns

[`FlexBytes`](utils.bytes.flexbytes.md)<`Min`, `Max`\>

#### Inherited from

Uint8Array.sort

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2256

___

### subarray

▸ **subarray**(`begin?`, `end?`): `Uint8Array`

Gets a new Uint8Array view of the ArrayBuffer store for this array, referencing the elements
at begin, inclusive, up to end, exclusive.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `begin?` | `number` | The index of the beginning of the array. |
| `end?` | `number` | The index of the end of the array. |

#### Returns

`Uint8Array`

#### Inherited from

Uint8Array.subarray

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2264

___

### toLocaleString

▸ **toLocaleString**(): `string`

Converts a number to a string by using the current locale.

#### Returns

`string`

#### Inherited from

Uint8Array.toLocaleString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2269

___

### toString

▸ **toString**(): `string`

Returns a string representation of an array.

#### Returns

`string`

#### Inherited from

Uint8Array.toString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2274

___

### valueOf

▸ **valueOf**(): `Uint8Array`

Returns the primitive value of the specified object.

#### Returns

`Uint8Array`

#### Inherited from

Uint8Array.valueOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:2277

___

### values

▸ **values**(): `IterableIterator`<`number`\>

Returns an list of values in the array

#### Returns

`IterableIterator`<`number`\>

#### Inherited from

Uint8Array.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:291
