---
id: "beeresponseerror"
title: "Class: BeeResponseError"
sidebar_label: "BeeResponseError"
custom_edit_url: null
hide_title: true
---

# Class: BeeResponseError

## Hierarchy

* [*BeeError*](beeerror.md)

  ↳ **BeeResponseError**

## Constructors

### constructor

\+ **new BeeResponseError**(`status`: *number*, `message`: *string*): [*BeeResponseError*](beeresponseerror.md)

#### Parameters:

Name | Type |
:------ | :------ |
`status` | *number* |
`message` | *string* |

**Returns:** [*BeeResponseError*](beeresponseerror.md)

Inherited from: [BeeError](beeerror.md)

Defined in: [bee-js/src/utils/error.ts:19](https://github.com/ethersphere/bee-js/blob/430becc/src/utils/error.ts#L19)

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

___

### status

• `Readonly` **status**: *number*

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
