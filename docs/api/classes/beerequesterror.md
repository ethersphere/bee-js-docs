---
id: "beerequesterror"
title: "Class: BeeRequestError"
sidebar_label: "BeeRequestError"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`BeeError`](beeerror.md)

  ↳ **`BeeRequestError`**

## Constructors

### constructor

• **new BeeRequestError**(`message`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Overrides

[BeeError](beeerror.md).[constructor](beeerror.md#constructor)

#### Defined in

[bee-js/src/utils/error.ts:13](https://github.com/ethersphere/bee-js/blob/6f227e1/src/utils/error.ts#L13)

## Properties

### message

• **message**: `string`

#### Inherited from

[BeeError](beeerror.md).[message](beeerror.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: `string`

#### Inherited from

[BeeError](beeerror.md).[name](beeerror.md#name)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:973

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[BeeError](beeerror.md).[stack](beeerror.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) =\> `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

[BeeError](beeerror.md).[prepareStackTrace](beeerror.md#preparestacktrace)

#### Defined in

bee-js/node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[BeeError](beeerror.md).[stackTraceLimit](beeerror.md#stacktracelimit)

#### Defined in

bee-js/node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

[BeeError](beeerror.md).[captureStackTrace](beeerror.md#capturestacktrace)

#### Defined in

bee-js/node_modules/@types/node/globals.d.ts:4
