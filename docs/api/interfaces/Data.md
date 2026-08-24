# Interface: Data

Defined in: [bee-js/src/types/index.ts:330](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L330)

Helper interface that adds utility functions
to work more conveniently with bytes in normal
user scenarios.

Concretely: text(), hex(), json()

## Extends

- `Uint8Array`

## Indexable

\[`index`: `number`\]: `number`

## Properties

### \[toStringTag\]

> `readonly` **\[toStringTag\]**: `"Uint8Array"`

Defined in: bee-js/node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:284

#### Inherited from

`Uint8Array.[toStringTag]`

***

### buffer

> `readonly` **buffer**: `ArrayBufferLike`

Defined in: bee-js/node\_modules/typescript/lib/lib.es5.d.ts:2174

The ArrayBuffer instance referenced by the array.

#### Inherited from

`Uint8Array.buffer`

***

### byteLength

> `readonly` **byteLength**: `number`

Defined in: bee-js/node\_modules/typescript/lib/lib.es5.d.ts:2179

The length in bytes of the array.

#### Inherited from

`Uint8Array.byteLength`

***

### byteOffset

> `readonly` **byteOffset**: `number`

Defined in: bee-js/node\_modules/typescript/lib/lib.es5.d.ts:2184

The offset in bytes of the array.

#### Inherited from

`Uint8Array.byteOffset`

***

### BYTES\_PER\_ELEMENT

> `readonly` **BYTES\_PER\_ELEMENT**: `number`

Defined in: bee-js/node\_modules/typescript/lib/lib.es5.d.ts:2169

The size in bytes of each element in the array.

#### Inherited from

`Uint8Array.BYTES_PER_ELEMENT`

***

### length

> `readonly` **length**: `number`

Defined in: bee-js/node\_modules/typescript/lib/lib.es5.d.ts:2283

The length of the array.

#### Inherited from

`Uint8Array.length`

## Methods

### \[iterator\]()

> **\[iterator\]**(): `ArrayIterator`\<`number`\>

Defined in: bee-js/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:313

#### Returns

`ArrayIterator`\<`number`\>

#### Inherited from

`Uint8Array.[iterator]`

***

### copyWithin()

> **copyWithin**(`target`, `start`, `end?`): `this`

Defined in: bee-js/node\_modules/typescript/lib/lib.es5.d.ts:2195

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters

##### target

`number`

If target is negative, it is treated as length+target where length is the
length of the array.

##### start

`number`

If start is negative, it is treated as length+start. If end is negative, it
is treated as length+end.

##### end?

`number`

If not specified, length of the this object is used as its default value.

#### Returns

`this`

#### Inherited from

`Uint8Array.copyWithin`

***

### entries()

> **entries**(): `ArrayIterator`\<\[`number`, `number`\]\>

Defined in: bee-js/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:318

Returns an array of key, value pairs for every entry in the array

#### Returns

`ArrayIterator`\<\[`number`, `number`\]\>

#### Inherited from

`Uint8Array.entries`

***

### every()

> **every**(`predicate`, `thisArg?`): `boolean`

Defined in: bee-js/node\_modules/typescript/lib/lib.es5.d.ts:2205

Determines whether all the members of an array satisfy the specified test.

#### Parameters

##### predicate

(`value`, `index`, `array`) => `unknown`

A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.

##### thisArg?

`any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

#### Returns

`boolean`

#### Inherited from

`Uint8Array.every`

***

### fill()

> **fill**(`value`, `start?`, `end?`): `this`

Defined in: bee-js/node\_modules/typescript/lib/lib.es5.d.ts:2215

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

#### Parameters

##### value

`number`

value to fill array section with

##### start?

`number`

index to start filling the array at. If start is negative, it is treated as
length+start where length is the length of the array.

##### end?

`number`

index to stop filling the array at. If end is negative, it is treated as
length+end.

#### Returns

`this`

#### Inherited from

`Uint8Array.fill`

***

### filter()

> **filter**(`predicate`, `thisArg?`): `Uint8Array`\<`ArrayBuffer`\>

Defined in: bee-js/node\_modules/typescript/lib/lib.es5.d.ts:2224

Returns the elements of an array that meet the condition specified in a callback function.

#### Parameters

##### predicate

(`value`, `index`, `array`) => `any`

A function that accepts up to three arguments. The filter method calls
the predicate function one time for each element in the array.

##### thisArg?

`any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

#### Returns

`Uint8Array`\<`ArrayBuffer`\>

#### Inherited from

`Uint8Array.filter`

***

### find()

> **find**(`predicate`, `thisArg?`): `number` \| `undefined`

Defined in: bee-js/node\_modules/typescript/lib/lib.es5.d.ts:2235

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

#### Parameters

##### predicate

(`value`, `index`, `obj`) => `boolean`

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.

##### thisArg?

`any`

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

#### Returns

`number` \| `undefined`

#### Inherited from

`Uint8Array.find`

***

### findIndex()

> **findIndex**(`predicate`, `thisArg?`): `number`

Defined in: bee-js/node\_modules/typescript/lib/lib.es5.d.ts:2246

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

##### predicate

(`value`, `index`, `obj`) => `boolean`

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.

##### thisArg?

`any`

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

#### Returns

`number`

#### Inherited from

`Uint8Array.findIndex`

***

### forEach()

> **forEach**(`callbackfn`, `thisArg?`): `void`

Defined in: bee-js/node\_modules/typescript/lib/lib.es5.d.ts:2255

Performs the specified action for each element in an array.

#### Parameters

##### callbackfn

(`value`, `index`, `array`) => `void`

A function that accepts up to three arguments. forEach calls the
callbackfn function one time for each element in the array.

##### thisArg?

`any`

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

#### Returns

`void`

#### Inherited from

`Uint8Array.forEach`

***

### hex()

> **hex**(): `string`

Defined in: [bee-js/src/types/index.ts:339](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L339)

Converts the binary data into hex-string.

#### Returns

`string`

***

### includes()

> **includes**(`searchElement`, `fromIndex?`): `boolean`

Defined in: bee-js/node\_modules/typescript/lib/lib.es2016.array.include.d.ts:52

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

##### searchElement

`number`

The element to search for.

##### fromIndex?

`number`

The position in this array at which to begin searching for searchElement.

#### Returns

`boolean`

#### Inherited from

`Uint8Array.includes`

***

### indexOf()

> **indexOf**(`searchElement`, `fromIndex?`): `number`

Defined in: bee-js/node\_modules/typescript/lib/lib.es5.d.ts:2263

Returns the index of the first occurrence of a value in an array.

#### Parameters

##### searchElement

`number`

The value to locate in the array.

##### fromIndex?

`number`

The array index at which to begin the search. If fromIndex is omitted, the
search starts at index 0.

#### Returns

`number`

#### Inherited from

`Uint8Array.indexOf`

***

### join()

> **join**(`separator?`): `string`

Defined in: bee-js/node\_modules/typescript/lib/lib.es5.d.ts:2270

Adds all the elements of an array separated by the specified separator string.

#### Parameters

##### separator?

`string`

A string used to separate one element of an array from the next in the
resulting String. If omitted, the array elements are separated with a comma.

#### Returns

`string`

#### Inherited from

`Uint8Array.join`

***

### json()

> **json**(): `Record`\<`string`, `unknown`\>

Defined in: [bee-js/src/types/index.ts:344](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L344)

Converts the binary data into string which is then parsed into JSON.

#### Returns

`Record`\<`string`, `unknown`\>

***

### keys()

> **keys**(): `ArrayIterator`\<`number`\>

Defined in: bee-js/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:323

Returns an list of keys in the array

#### Returns

`ArrayIterator`\<`number`\>

#### Inherited from

`Uint8Array.keys`

***

### lastIndexOf()

> **lastIndexOf**(`searchElement`, `fromIndex?`): `number`

Defined in: bee-js/node\_modules/typescript/lib/lib.es5.d.ts:2278

Returns the index of the last occurrence of a value in an array.

#### Parameters

##### searchElement

`number`

The value to locate in the array.

##### fromIndex?

`number`

The array index at which to begin the search. If fromIndex is omitted, the
search starts at index 0.

#### Returns

`number`

#### Inherited from

`Uint8Array.lastIndexOf`

***

### map()

> **map**(`callbackfn`, `thisArg?`): `Uint8Array`\<`ArrayBuffer`\>

Defined in: bee-js/node\_modules/typescript/lib/lib.es5.d.ts:2293

Calls a defined callback function on each element of an array, and returns an array that
contains the results.

#### Parameters

##### callbackfn

(`value`, `index`, `array`) => `number`

A function that accepts up to three arguments. The map method calls the
callbackfn function one time for each element in the array.

##### thisArg?

`any`

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

#### Returns

`Uint8Array`\<`ArrayBuffer`\>

#### Inherited from

`Uint8Array.map`

***

### reduce()

#### Call Signature

> **reduce**(`callbackfn`): `number`

Defined in: bee-js/node\_modules/typescript/lib/lib.es5.d.ts:2305

Calls the specified callback function for all the elements in an array. The return value of
the callback function is the accumulated result, and is provided as an argument in the next
call to the callback function.

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `number`

A function that accepts up to four arguments. The reduce method calls the
callbackfn function one time for each element in the array.

##### Returns

`number`

##### Inherited from

`Uint8Array.reduce`

#### Call Signature

> **reduce**(`callbackfn`, `initialValue`): `number`

Defined in: bee-js/node\_modules/typescript/lib/lib.es5.d.ts:2306

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `number`

###### initialValue

`number`

##### Returns

`number`

##### Inherited from

`Uint8Array.reduce`

#### Call Signature

> **reduce**\<`U`\>(`callbackfn`, `initialValue`): `U`

Defined in: bee-js/node\_modules/typescript/lib/lib.es5.d.ts:2318

Calls the specified callback function for all the elements in an array. The return value of
the callback function is the accumulated result, and is provided as an argument in the next
call to the callback function.

##### Type Parameters

###### U

`U`

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `U`

A function that accepts up to four arguments. The reduce method calls the
callbackfn function one time for each element in the array.

###### initialValue

`U`

If initialValue is specified, it is used as the initial value to start
the accumulation. The first call to the callbackfn function provides this value as an argument
instead of an array value.

##### Returns

`U`

##### Inherited from

`Uint8Array.reduce`

***

### reduceRight()

#### Call Signature

> **reduceRight**(`callbackfn`): `number`

Defined in: bee-js/node\_modules/typescript/lib/lib.es5.d.ts:2330

Calls the specified callback function for all the elements in an array, in descending order.
The return value of the callback function is the accumulated result, and is provided as an
argument in the next call to the callback function.

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `number`

A function that accepts up to four arguments. The reduceRight method calls
the callbackfn function one time for each element in the array.

##### Returns

`number`

##### Inherited from

`Uint8Array.reduceRight`

#### Call Signature

> **reduceRight**(`callbackfn`, `initialValue`): `number`

Defined in: bee-js/node\_modules/typescript/lib/lib.es5.d.ts:2331

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `number`

###### initialValue

`number`

##### Returns

`number`

##### Inherited from

`Uint8Array.reduceRight`

#### Call Signature

> **reduceRight**\<`U`\>(`callbackfn`, `initialValue`): `U`

Defined in: bee-js/node\_modules/typescript/lib/lib.es5.d.ts:2343

Calls the specified callback function for all the elements in an array, in descending order.
The return value of the callback function is the accumulated result, and is provided as an
argument in the next call to the callback function.

##### Type Parameters

###### U

`U`

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `U`

A function that accepts up to four arguments. The reduceRight method calls
the callbackfn function one time for each element in the array.

###### initialValue

`U`

If initialValue is specified, it is used as the initial value to start
the accumulation. The first call to the callbackfn function provides this value as an argument
instead of an array value.

##### Returns

`U`

##### Inherited from

`Uint8Array.reduceRight`

***

### reverse()

> **reverse**(): `this`

Defined in: bee-js/node\_modules/typescript/lib/lib.es5.d.ts:2348

Reverses the elements in an Array.

#### Returns

`this`

#### Inherited from

`Uint8Array.reverse`

***

### set()

> **set**(`array`, `offset?`): `void`

Defined in: bee-js/node\_modules/typescript/lib/lib.es5.d.ts:2355

Sets a value or an array of values.

#### Parameters

##### array

`ArrayLike`\<`number`\>

A typed or untyped array of values to set.

##### offset?

`number`

The index in the current array at which the values are to be written.

#### Returns

`void`

#### Inherited from

`Uint8Array.set`

***

### slice()

> **slice**(`start?`, `end?`): `Uint8Array`\<`ArrayBuffer`\>

Defined in: bee-js/node\_modules/typescript/lib/lib.es5.d.ts:2362

Returns a section of an array.

#### Parameters

##### start?

`number`

The beginning of the specified portion of the array.

##### end?

`number`

The end of the specified portion of the array. This is exclusive of the element at the index 'end'.

#### Returns

`Uint8Array`\<`ArrayBuffer`\>

#### Inherited from

`Uint8Array.slice`

***

### some()

> **some**(`predicate`, `thisArg?`): `boolean`

Defined in: bee-js/node\_modules/typescript/lib/lib.es5.d.ts:2372

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

##### predicate

(`value`, `index`, `array`) => `unknown`

A function that accepts up to three arguments. The some method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value true, or until the end of the array.

##### thisArg?

`any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

#### Returns

`boolean`

#### Inherited from

`Uint8Array.some`

***

### sort()

> **sort**(`compareFn?`): `this`

Defined in: bee-js/node\_modules/typescript/lib/lib.es5.d.ts:2383

Sorts an array.

#### Parameters

##### compareFn?

(`a`, `b`) => `number`

Function used to determine the order of the elements. It is expected to return
a negative value if first argument is less than second argument, zero if they're equal and a positive
value otherwise. If omitted, the elements are sorted in ascending order.
```ts
[11,2,22,1].sort((a, b) => a - b)
```

#### Returns

`this`

#### Inherited from

`Uint8Array.sort`

***

### subarray()

> **subarray**(`begin?`, `end?`): `Uint8Array`\<`ArrayBufferLike`\>

Defined in: bee-js/node\_modules/typescript/lib/lib.es5.d.ts:2391

Gets a new Uint8Array view of the ArrayBuffer store for this array, referencing the elements
at begin, inclusive, up to end, exclusive.

#### Parameters

##### begin?

`number`

The index of the beginning of the array.

##### end?

`number`

The index of the end of the array.

#### Returns

`Uint8Array`\<`ArrayBufferLike`\>

#### Inherited from

`Uint8Array.subarray`

***

### text()

> **text**(): `string`

Defined in: [bee-js/src/types/index.ts:334](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L334)

Converts the binary data using UTF-8 decoding into string.

#### Returns

`string`

***

### toLocaleString()

#### Call Signature

> **toLocaleString**(): `string`

Defined in: bee-js/node\_modules/typescript/lib/lib.es5.d.ts:2396

Converts a number to a string by using the current locale.

##### Returns

`string`

##### Inherited from

`Uint8Array.toLocaleString`

#### Call Signature

> **toLocaleString**(`locales`, `options?`): `string`

Defined in: bee-js/node\_modules/typescript/lib/lib.es2015.core.d.ts:568

##### Parameters

###### locales

`string` | `string`[]

###### options?

`NumberFormatOptions`

##### Returns

`string`

##### Inherited from

`Uint8Array.toLocaleString`

***

### toString()

> **toString**(): `string`

Defined in: bee-js/node\_modules/typescript/lib/lib.es5.d.ts:2401

Returns a string representation of an array.

#### Returns

`string`

#### Inherited from

`Uint8Array.toString`

***

### valueOf()

> **valueOf**(): `this`

Defined in: bee-js/node\_modules/typescript/lib/lib.es5.d.ts:2404

Returns the primitive value of the specified object.

#### Returns

`this`

#### Inherited from

`Uint8Array.valueOf`

***

### values()

> **values**(): `ArrayIterator`\<`number`\>

Defined in: bee-js/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:328

Returns an list of values in the array

#### Returns

`ArrayIterator`\<`number`\>

#### Inherited from

`Uint8Array.values`
