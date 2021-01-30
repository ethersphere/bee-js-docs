---
title: BeeDebug
hide_title: true
---

# Class: BeeDebug

The BeeDebug class provides a way of interacting with the Bee debug APIs based on the provided url

**`param`** URL of a running Bee node

## Hierarchy

* **BeeDebug**

## Table of contents

### Constructors

- [constructor](beedebug#constructor)

### Properties

- [url](beedebug#url)

### Methods

- [getOverlayAddress](beedebug#getoverlayaddress)
- [getPssPublicKey](beedebug#getpsspublickey)

## Constructors

### constructor

\+ **new BeeDebug**(`url`: *string*): [*BeeDebug*](beedebug)

#### Parameters:

Name | Type |
------ | ------ |
`url` | *string* |

**Returns:** [*BeeDebug*](beedebug)

Defined in: [index.ts:342](https://github.com/ethersphere/bee-js/blob/54b2270/src/index.ts#L342)

## Properties

### url

• `Readonly` **url**: *string*

## Methods

### getOverlayAddress

▸ **getOverlayAddress**(): *Promise*<*string*\>

**Returns:** *Promise*<*string*\>

Defined in: [index.ts:345](https://github.com/ethersphere/bee-js/blob/54b2270/src/index.ts#L345)

___

### getPssPublicKey

▸ **getPssPublicKey**(): *Promise*<*string*\>

**Returns:** *Promise*<*string*\>

Defined in: [index.ts:351](https://github.com/ethersphere/bee-js/blob/54b2270/src/index.ts#L351)
