---
id: "beerequesterror"
title: "Class: BeeRequestError"
sidebar_label: "BeeRequestError"
custom_edit_url: null
hide_title: true
---

# Class: BeeRequestError

## Hierarchy

* [*BeeError*](beeerror.md)

  ↳ **BeeRequestError**

## Constructors

### constructor

\+ **new BeeRequestError**(`message`: *string*): [*BeeRequestError*](beerequesterror.md)

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |

**Returns:** [*BeeRequestError*](beerequesterror.md)

Inherited from: [BeeError](beeerror.md)

Defined in: [bee-js/src/utils/error.ts:13](https://github.com/ethersphere/bee-js/blob/8087a81/src/utils/error.ts#L13)

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

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

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
