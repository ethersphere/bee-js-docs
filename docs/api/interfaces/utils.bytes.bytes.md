---
id: "utils.bytes.bytes"
title: "Interface: Bytes<Length>"
sidebar_label: "Bytes"
custom_edit_url: null
hide_title: true
---

# Interface: Bytes<Length\>

[Utils](../modules/utils.md).[Bytes](../modules/utils.bytes.md).Bytes

## Type parameters

Name | Type |
:------ | :------ |
`Length` | *number* |

## Hierarchy

* *Uint8Array*

  ↳ **Bytes**

## Properties

### BYTES\_PER\_ELEMENT

• `Readonly` **BYTES\_PER\_ELEMENT**: *number*

The size in bytes of each element in the array.

Defined in: node_modules/typescript/lib/lib.es5.d.ts:2042

___

### [Symbol.toStringTag]

• `Readonly` **[Symbol.toStringTag]**: *Uint8Array*

Defined in: node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:282

___

### buffer

• `Readonly` **buffer**: ArrayBufferLike

The ArrayBuffer instance referenced by the array.

Defined in: node_modules/typescript/lib/lib.es5.d.ts:2047

___

### byteLength

• `Readonly` **byteLength**: *number*

The length in bytes of the array.

Defined in: node_modules/typescript/lib/lib.es5.d.ts:2052

___

### byteOffset

• `Readonly` **byteOffset**: *number*

The offset in bytes of the array.

Defined in: node_modules/typescript/lib/lib.es5.d.ts:2057

___

### length

• `Readonly` **length**: Length

Defined in: [bee-js/src/utils/bytes.ts:12](https://github.com/ethersphere/bee-js/blob/8087a81/src/utils/bytes.ts#L12)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator*<number\>

**Returns:** *IterableIterator*<number\>

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:279

___

### copyWithin

▸ **copyWithin**(`target`: *number*, `start`: *number*, `end?`: *number*): [*Bytes*](utils.bytes.bytes.md)<Length\>

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`target` | *number* | If target is negative, it is treated as length+target where length is the length of the array.   |
`start` | *number* | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end.   |
`end?` | *number* | If not specified, length of the this object is used as its default value.    |

**Returns:** [*Bytes*](utils.bytes.bytes.md)<Length\>

Defined in: node_modules/typescript/lib/lib.es5.d.ts:2068

___

### entries

▸ **entries**(): *IterableIterator*<[*number*, *number*]\>

Returns an array of key, value pairs for every entry in the array

**Returns:** *IterableIterator*<[*number*, *number*]\>

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:283

___

### every

▸ **every**(`predicate`: (`value`: *number*, `index`: *number*, `array`: *Uint8Array*) =\> *unknown*, `thisArg?`: *any*): *boolean*

Determines whether all the members of an array satisfy the specified test.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`predicate` | (`value`: *number*, `index`: *number*, `array`: *Uint8Array*) =\> *unknown* | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array.   |
`thisArg?` | *any* | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.    |

**Returns:** *boolean*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:2078

___

### fill

▸ **fill**(`value`: *number*, `start?`: *number*, `end?`: *number*): [*Bytes*](utils.bytes.bytes.md)<Length\>

Returns the this object after filling the section identified by start and end with value

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`value` | *number* | value to fill array section with   |
`start?` | *number* | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array.   |
`end?` | *number* | index to stop filling the array at. If end is negative, it is treated as length+end.    |

**Returns:** [*Bytes*](utils.bytes.bytes.md)<Length\>

Defined in: node_modules/typescript/lib/lib.es5.d.ts:2088

___

### filter

▸ **filter**(`predicate`: (`value`: *number*, `index`: *number*, `array`: *Uint8Array*) =\> *any*, `thisArg?`: *any*): *Uint8Array*

Returns the elements of an array that meet the condition specified in a callback function.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`predicate` | (`value`: *number*, `index`: *number*, `array`: *Uint8Array*) =\> *any* | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.   |
`thisArg?` | *any* | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.    |

**Returns:** *Uint8Array*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:2097

___

### find

▸ **find**(`predicate`: (`value`: *number*, `index`: *number*, `obj`: *Uint8Array*) =\> *boolean*, `thisArg?`: *any*): *undefined* \| *number*

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`predicate` | (`value`: *number*, `index`: *number*, `obj`: *Uint8Array*) =\> *boolean* | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined.   |
`thisArg?` | *any* | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.    |

**Returns:** *undefined* \| *number*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:2108

___

### findIndex

▸ **findIndex**(`predicate`: (`value`: *number*, `index`: *number*, `obj`: *Uint8Array*) =\> *boolean*, `thisArg?`: *any*): *number*

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`predicate` | (`value`: *number*, `index`: *number*, `obj`: *Uint8Array*) =\> *boolean* | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1.   |
`thisArg?` | *any* | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.    |

**Returns:** *number*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:2119

___

### forEach

▸ **forEach**(`callbackfn`: (`value`: *number*, `index`: *number*, `array`: *Uint8Array*) =\> *void*, `thisArg?`: *any*): *void*

Performs the specified action for each element in an array.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`callbackfn` | (`value`: *number*, `index`: *number*, `array`: *Uint8Array*) =\> *void* | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.   |
`thisArg?` | *any* | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.    |

**Returns:** *void*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:2128

___

### includes

▸ **includes**(`searchElement`: *number*, `fromIndex?`: *number*): *boolean*

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`searchElement` | *number* | The element to search for.   |
`fromIndex?` | *number* | The position in this array at which to begin searching for searchElement.    |

**Returns:** *boolean*

Defined in: node_modules/typescript/lib/lib.es2016.array.include.d.ts:54

___

### indexOf

▸ **indexOf**(`searchElement`: *number*, `fromIndex?`: *number*): *number*

Returns the index of the first occurrence of a value in an array.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`searchElement` | *number* | The value to locate in the array.   |
`fromIndex?` | *number* | The array index at which to begin the search. If fromIndex is omitted, the  search starts at index 0.    |

**Returns:** *number*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:2136

___

### join

▸ **join**(`separator?`: *string*): *string*

Adds all the elements of an array separated by the specified separator string.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`separator?` | *string* | A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.    |

**Returns:** *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:2143

___

### keys

▸ **keys**(): *IterableIterator*<number\>

Returns an list of keys in the array

**Returns:** *IterableIterator*<number\>

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:287

___

### lastIndexOf

▸ **lastIndexOf**(`searchElement`: *number*, `fromIndex?`: *number*): *number*

Returns the index of the last occurrence of a value in an array.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`searchElement` | *number* | The value to locate in the array.   |
`fromIndex?` | *number* | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.    |

**Returns:** *number*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:2151

___

### map

▸ **map**(`callbackfn`: (`value`: *number*, `index`: *number*, `array`: *Uint8Array*) =\> *number*, `thisArg?`: *any*): *Uint8Array*

Calls a defined callback function on each element of an array, and returns an array that
contains the results.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`callbackfn` | (`value`: *number*, `index`: *number*, `array`: *Uint8Array*) =\> *number* | A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.   |
`thisArg?` | *any* | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.    |

**Returns:** *Uint8Array*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:2166

___

### reduce

▸ **reduce**(`callbackfn`: (`previousValue`: *number*, `currentValue`: *number*, `currentIndex`: *number*, `array`: *Uint8Array*) =\> *number*): *number*

Calls the specified callback function for all the elements in an array. The return value of
the callback function is the accumulated result, and is provided as an argument in the next
call to the callback function.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`callbackfn` | (`previousValue`: *number*, `currentValue`: *number*, `currentIndex`: *number*, `array`: *Uint8Array*) =\> *number* | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.   |

**Returns:** *number*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:2178

▸ **reduce**(`callbackfn`: (`previousValue`: *number*, `currentValue`: *number*, `currentIndex`: *number*, `array`: *Uint8Array*) =\> *number*, `initialValue`: *number*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`callbackfn` | (`previousValue`: *number*, `currentValue`: *number*, `currentIndex`: *number*, `array`: *Uint8Array*) =\> *number* |
`initialValue` | *number* |

**Returns:** *number*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:2179

▸ **reduce**<U\>(`callbackfn`: (`previousValue`: U, `currentValue`: *number*, `currentIndex`: *number*, `array`: *Uint8Array*) =\> U, `initialValue`: U): U

Calls the specified callback function for all the elements in an array. The return value of
the callback function is the accumulated result, and is provided as an argument in the next
call to the callback function.

#### Type parameters:

Name |
:------ |
`U` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`callbackfn` | (`previousValue`: U, `currentValue`: *number*, `currentIndex`: *number*, `array`: *Uint8Array*) =\> U | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.   |
`initialValue` | U | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.    |

**Returns:** U

Defined in: node_modules/typescript/lib/lib.es5.d.ts:2191

___

### reduceRight

▸ **reduceRight**(`callbackfn`: (`previousValue`: *number*, `currentValue`: *number*, `currentIndex`: *number*, `array`: *Uint8Array*) =\> *number*): *number*

Calls the specified callback function for all the elements in an array, in descending order.
The return value of the callback function is the accumulated result, and is provided as an
argument in the next call to the callback function.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`callbackfn` | (`previousValue`: *number*, `currentValue`: *number*, `currentIndex`: *number*, `array`: *Uint8Array*) =\> *number* | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.   |

**Returns:** *number*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:2203

▸ **reduceRight**(`callbackfn`: (`previousValue`: *number*, `currentValue`: *number*, `currentIndex`: *number*, `array`: *Uint8Array*) =\> *number*, `initialValue`: *number*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`callbackfn` | (`previousValue`: *number*, `currentValue`: *number*, `currentIndex`: *number*, `array`: *Uint8Array*) =\> *number* |
`initialValue` | *number* |

**Returns:** *number*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:2204

▸ **reduceRight**<U\>(`callbackfn`: (`previousValue`: U, `currentValue`: *number*, `currentIndex`: *number*, `array`: *Uint8Array*) =\> U, `initialValue`: U): U

Calls the specified callback function for all the elements in an array, in descending order.
The return value of the callback function is the accumulated result, and is provided as an
argument in the next call to the callback function.

#### Type parameters:

Name |
:------ |
`U` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`callbackfn` | (`previousValue`: U, `currentValue`: *number*, `currentIndex`: *number*, `array`: *Uint8Array*) =\> U | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.   |
`initialValue` | U | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.    |

**Returns:** U

Defined in: node_modules/typescript/lib/lib.es5.d.ts:2216

___

### reverse

▸ **reverse**(): *Uint8Array*

Reverses the elements in an Array.

**Returns:** *Uint8Array*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:2221

___

### set

▸ **set**(`array`: *ArrayLike*<number\>, `offset?`: *number*): *void*

Sets a value or an array of values.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`array` | *ArrayLike*<number\> | A typed or untyped array of values to set.   |
`offset?` | *number* | The index in the current array at which the values are to be written.    |

**Returns:** *void*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:2228

___

### slice

▸ **slice**(`start?`: *number*, `end?`: *number*): *Uint8Array*

Returns a section of an array.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`start?` | *number* | The beginning of the specified portion of the array.   |
`end?` | *number* | The end of the specified portion of the array. This is exclusive of the element at the index 'end'.    |

**Returns:** *Uint8Array*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:2235

___

### some

▸ **some**(`predicate`: (`value`: *number*, `index`: *number*, `array`: *Uint8Array*) =\> *unknown*, `thisArg?`: *any*): *boolean*

Determines whether the specified callback function returns true for any element of an array.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`predicate` | (`value`: *number*, `index`: *number*, `array`: *Uint8Array*) =\> *unknown* | A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array.   |
`thisArg?` | *any* | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.    |

**Returns:** *boolean*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:2245

___

### sort

▸ **sort**(`compareFn?`: (`a`: *number*, `b`: *number*) =\> *number*): [*Bytes*](utils.bytes.bytes.md)<Length\>

Sorts an array.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`compareFn?` | (`a`: *number*, `b`: *number*) =\> *number* | Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11,2,22,1].sort((a, b) =\> a - b) ```    |

**Returns:** [*Bytes*](utils.bytes.bytes.md)<Length\>

Defined in: node_modules/typescript/lib/lib.es5.d.ts:2256

___

### subarray

▸ **subarray**(`begin?`: *number*, `end?`: *number*): *Uint8Array*

Gets a new Uint8Array view of the ArrayBuffer store for this array, referencing the elements
at begin, inclusive, up to end, exclusive.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`begin?` | *number* | The index of the beginning of the array.   |
`end?` | *number* | The index of the end of the array.    |

**Returns:** *Uint8Array*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:2264

___

### toLocaleString

▸ **toLocaleString**(): *string*

Converts a number to a string by using the current locale.

**Returns:** *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:2269

___

### toString

▸ **toString**(): *string*

Returns a string representation of an array.

**Returns:** *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:2274

___

### valueOf

▸ **valueOf**(): *Uint8Array*

Returns the primitive value of the specified object.

**Returns:** *Uint8Array*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:2277

___

### values

▸ **values**(): *IterableIterator*<number\>

Returns an list of values in the array

**Returns:** *IterableIterator*<number\>

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:291
