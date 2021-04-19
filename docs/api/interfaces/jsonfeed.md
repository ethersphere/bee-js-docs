---
id: "jsonfeed"
title: "Interface: JsonFeed<T>"
sidebar_label: "JsonFeed"
custom_edit_url: null
hide_title: true
---

# Interface: JsonFeed<T\>

Higher level abstraction build on top of Feeds that allow easy setting and getting
data from feeds. It works closely with JSON.parse/stringify so all supported data
types by that is also supported by this abstraction.

## Type parameters

Name | Type |
:------ | :------ |
`T` | [*AnyJson*](../types/anyjson.md) |

## Properties

### writer

• `Readonly` **writer**: [*FeedWriter*](feedwriter.md)

Defined in: [bee-js/src/types/index.ts:157](https://github.com/ethersphere/bee-js/blob/8087a81/src/types/index.ts#L157)

## Methods

### get

▸ **get**(): *Promise*<T\>

**Returns:** *Promise*<T\>

Defined in: [bee-js/src/types/index.ts:159](https://github.com/ethersphere/bee-js/blob/8087a81/src/types/index.ts#L159)

___

### set

▸ **set**(`data`: [*AnyJson*](../types/anyjson.md)): *Promise*<[*ReferenceResponse*](referenceresponse.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`data` | [*AnyJson*](../types/anyjson.md) |

**Returns:** *Promise*<[*ReferenceResponse*](referenceresponse.md)\>

Defined in: [bee-js/src/types/index.ts:158](https://github.com/ethersphere/bee-js/blob/8087a81/src/types/index.ts#L158)
