---
id: "beeargumenterror"
title: "Class: BeeArgumentError"
sidebar_label: "BeeArgumentError"
custom_edit_url: null
hide_title: true
---

# Class: BeeArgumentError

## Hierarchy

* [*BeeError*](beeerror.md)

  ↳ **BeeArgumentError**

## Constructors

### constructor

\+ **new BeeArgumentError**(`message`: *string*, `value`: *unknown*): [*BeeArgumentError*](beeargumenterror.md)

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |
`value` | *unknown* |

**Returns:** [*BeeArgumentError*](beeargumenterror.md)

Inherited from: [BeeError](beeerror.md)

Defined in: [bee-js/src/utils/error.ts:7](https://github.com/ethersphere/bee-js/blob/ce4d3fa/src/utils/error.ts#L7)

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

• `Optional` **prepareStackTrace**: *undefined* \| (`err`: Error, `stackTraces`: CallSite[]) =\> *any*

Optional override for formatting stack traces

**`see`** https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces

Defined in: bee-js/node_modules/@types/node/globals.d.ts:11

___

### stack

• `Optional` **stack**: *undefined* \| *string*

Inherited from: [BeeError](beeerror.md).[stack](beeerror.md#stack)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:975

___

### stackTraceLimit

• **stackTraceLimit**: *number*

Defined in: bee-js/node_modules/@types/node/globals.d.ts:13

___

### value

• `Readonly` **value**: *unknown*

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`: *object*, `constructorOpt?`: Function): *void*

Create .stack property on a target object

#### Parameters:

Name | Type |
:------ | :------ |
`targetObject` | *object* |
`constructorOpt?` | Function |

**Returns:** *void*

Defined in: bee-js/node_modules/@types/node/globals.d.ts:4
