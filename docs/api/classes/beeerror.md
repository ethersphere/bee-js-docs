---
id: "beeerror"
title: "Class: BeeError"
sidebar_label: "BeeError"
custom_edit_url: null
hide_title: true
---

# Class: BeeError

## Hierarchy

* *Error*

  ↳ **BeeError**

  ↳↳ [*BeeArgumentError*](beeargumenterror.md)

  ↳↳ [*BeeRequestError*](beerequesterror.md)

  ↳↳ [*BeeResponseError*](beeresponseerror.md)

## Constructors

### constructor

\+ **new BeeError**(`message`: *string*): [*BeeError*](beeerror.md)

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |

**Returns:** [*BeeError*](beeerror.md)

Defined in: [bee-js/src/utils/error.ts:1](https://github.com/ethersphere/bee-js/blob/8087a81/src/utils/error.ts#L1)

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

▪ `Optional` `Static` **prepareStackTrace**: *undefined* \| (`err`: Error, `stackTraces`: CallSite[]) =\> *any*

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

Defined in: bee-js/node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: *number*

Defined in: bee-js/node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static`**captureStackTrace**(`targetObject`: *object*, `constructorOpt?`: Function): *void*

Create .stack property on a target object

#### Parameters:

Name | Type |
:------ | :------ |
`targetObject` | *object* |
`constructorOpt?` | Function |

**Returns:** *void*

Defined in: bee-js/node_modules/@types/node/globals.d.ts:4
