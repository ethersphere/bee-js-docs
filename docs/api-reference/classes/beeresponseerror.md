[@ethersphere/bee-js](../README.md) / BeeResponseError

# Class: BeeResponseError

## Hierarchy

* [*BeeError*](beeerror.md)

  ↳ **BeeResponseError**

## Table of contents

### Constructors

- [constructor](beeresponseerror.md#constructor)

### Properties

- [message](beeresponseerror.md#message)
- [name](beeresponseerror.md#name)
- [prepareStackTrace](beeresponseerror.md#preparestacktrace)
- [stack](beeresponseerror.md#stack)
- [stackTraceLimit](beeresponseerror.md#stacktracelimit)
- [status](beeresponseerror.md#status)

### Methods

- [captureStackTrace](beeresponseerror.md#capturestacktrace)

## Constructors

### constructor

\+ **new BeeResponseError**(`status`: *number*, `message`: *string*): [*BeeResponseError*](beeresponseerror.md)

#### Parameters:

Name | Type |
------ | ------ |
`status` | *number* |
`message` | *string* |

**Returns:** [*BeeResponseError*](beeresponseerror.md)

Inherited from: [BeeError](beeerror.md)

Defined in: [src/utils/error.ts:19](https://github.com/ethersphere/bee-js/blob/313830a/src/utils/error.ts#L19)

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

___

### status

• `Readonly` **status**: *number*

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
