---
hide_title: true
title: BeeError
---

# Class: BeeError

## Hierarchy

* *Error*

  ↳ **BeeError**

  ↳↳ [*BeeArgumentError*](beeargumenterror.md)

  ↳↳ [*BeeRequestError*](beerequesterror.md)

  ↳↳ [*BeeResponseError*](beeresponseerror.md)

## Table of contents

### Constructors

- [constructor](beeerror.md#constructor)

### Properties

- [message](beeerror.md#message)
- [name](beeerror.md#name)
- [stack](beeerror.md#stack)
- [prepareStackTrace](beeerror.md#preparestacktrace)
- [stackTraceLimit](beeerror.md#stacktracelimit)

### Methods

- [captureStackTrace](beeerror.md#capturestacktrace)

## Constructors

### constructor

\+ **new BeeError**(`message`: *string*): [*BeeError*](beeerror.md)

#### Parameters:

Name | Type |
------ | ------ |
`message` | *string* |

**Returns:** [*BeeError*](beeerror.md)

Defined in: [src/utils/error.ts:1](https://github.com/ethersphere/bee-js/blob/313830a/src/utils/error.ts#L1)

## Properties

### message

• **message**: *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:973

___

### stack

• `Optional` **stack**: *undefined* \| *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:975

___

### prepareStackTrace

▪ `Optional` `Static` **prepareStackTrace**: *undefined* \| (`err`: Error, `stackTraces`: CallSite[]) => *any*

Optional override for formatting stack traces

**`see`** https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces

Defined in: node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: *number*

Defined in: node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static`**captureStackTrace**(`targetObject`: *object*, `constructorOpt?`: Function): *void*

Create .stack property on a target object

#### Parameters:

Name | Type |
------ | ------ |
`targetObject` | *object* |
`constructorOpt?` | Function |

**Returns:** *void*

Defined in: node_modules/@types/node/globals.d.ts:4
