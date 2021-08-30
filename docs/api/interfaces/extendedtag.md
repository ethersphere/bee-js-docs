---
id: "extendedtag"
title: "Interface: ExtendedTag"
sidebar_label: "ExtendedTag"
sidebar_position: 0
custom_edit_url: null
---

Object that contains information about progress of upload of data to network.

**`see`** [Bee docs - Syncing / Tags](https://docs.ethswarm.org/docs/access-the-swarm/syncing)

## Properties

### address

• **address**: [`Reference`](../types/reference.md)

The associated swarm hash for this tag

#### Defined in

[bee-js/src/types/debug.ts:48](https://github.com/ethersphere/bee-js/blob/74056cb/src/types/debug.ts#L48)

___

### seen

• **seen**: `number`

Number of chunks already seen

#### Defined in

[bee-js/src/types/debug.ts:23](https://github.com/ethersphere/bee-js/blob/74056cb/src/types/debug.ts#L23)

___

### sent

• **sent**: `number`

Number of chunks sent for push syncing

#### Defined in

[bee-js/src/types/debug.ts:33](https://github.com/ethersphere/bee-js/blob/74056cb/src/types/debug.ts#L33)

___

### split

• **split**: `number`

Number of chunks already processed by splitter for hashing

#### Defined in

[bee-js/src/types/debug.ts:18](https://github.com/ethersphere/bee-js/blob/74056cb/src/types/debug.ts#L18)

___

### startedAt

• **startedAt**: `string`

When the upload process started

#### Defined in

[bee-js/src/types/debug.ts:53](https://github.com/ethersphere/bee-js/blob/74056cb/src/types/debug.ts#L53)

___

### stored

• **stored**: `number`

Number of chunks already stored locally

#### Defined in

[bee-js/src/types/debug.ts:28](https://github.com/ethersphere/bee-js/blob/74056cb/src/types/debug.ts#L28)

___

### synced

• **synced**: `number`

Number of chunks synced with proof

#### Defined in

[bee-js/src/types/debug.ts:38](https://github.com/ethersphere/bee-js/blob/74056cb/src/types/debug.ts#L38)

___

### total

• **total**: `number`

Number of all chunks that the data will be split into.

#### Defined in

[bee-js/src/types/debug.ts:13](https://github.com/ethersphere/bee-js/blob/74056cb/src/types/debug.ts#L13)

___

### uid

• **uid**: `number`

Unique identifier

#### Defined in

[bee-js/src/types/debug.ts:43](https://github.com/ethersphere/bee-js/blob/74056cb/src/types/debug.ts#L43)
