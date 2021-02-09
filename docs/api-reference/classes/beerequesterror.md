---
hide_title: true
title: BeeRequestError
---

# Class: BeeRequestError

## Hierarchy

* [*BeeError*](beeerror.md)

  ↳ **BeeRequestError**

## Table of contents

### Constructors

- [constructor](beerequesterror.md#constructor)

### Properties

- [message](beerequesterror.md#message)
- [name](beerequesterror.md#name)
- [prepareStackTrace](beerequesterror.md#preparestacktrace)
- [stack](beerequesterror.md#stack)
- [stackTraceLimit](beerequesterror.md#stacktracelimit)

### Methods

- [captureStackTrace](beerequesterror.md#capturestacktrace)

## Constructors

### constructor

\+ **new BeeRequestError**(`message`: *string*): [*BeeRequestError*](beerequesterror.md)

#### Parameters:

Name | Type |
------ | ------ |
`message` | *string* |

**Returns:** [*BeeRequestError*](beerequesterror.md)

Inherited from: [BeeError](beeerror.md)

Defined in: [src/utils/error.ts:13](https://github.com/ethersphere/bee-js/blob/313830a/src/utils/error.ts#L13)

## Properties

### message

• **message**: *string*

Inherited from: [BeeError](beeerror.md).[message](beeerror.md#message)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: *string*

Inherited from: [BeeError](beeerror.md).[name](beeerror.md#name)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:973

___

### prepareStackTrace

• `Optional` **prepareStackTrace**: *undefined* \| (`err`: Error, `stackTraces`: CallSite[]) => *any*

Optional override for formatting stack traces

**`see`** https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces

Defined in: node_modules/@types/node/globals.d.ts:11

___

### stack

• `Optional` **stack**: *undefined* \| *string*

Inherited from: [BeeError](beeerror.md).[stack](beeerror.md#stack)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:975

___

### stackTraceLimit

• **stackTraceLimit**: *number*

Defined in: node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`: *object*, `constructorOpt?`: Function): *void*

Create .stack property on a target object

#### Parameters:

Name | Type |
------ | ------ |
`targetObject` | *object* |
`constructorOpt?` | Function |

**Returns:** *void*

Defined in: node_modules/@types/node/globals.d.ts:4
