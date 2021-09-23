---
id: "tag"
title: "Interface: Tag"
sidebar_label: "Tag"
sidebar_position: 0
custom_edit_url: null
---

Object that contains infromation about progress of upload of data to network.

**`see`** [Bee docs - Syncing / Tags](https://docs.ethswarm.org/docs/access-the-swarm/syncing)

## Properties

### processed

• **processed**: `number`

Number of chunks that is locally stored in the Bee node.

#### Defined in

[bee-js/src/types/index.ts:227](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L227)

___

### startedAt

• **startedAt**: `string`

When the upload process started

#### Defined in

[bee-js/src/types/index.ts:242](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L242)

___

### synced

• **synced**: `number`

Number of chunks that arrived to their designated destination in the network

#### Defined in

[bee-js/src/types/index.ts:232](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L232)

___

### total

• **total**: `number`

Number of all chunks that the data will be split into.

#### Defined in

[bee-js/src/types/index.ts:222](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L222)

___

### uid

• **uid**: `number`

Unique identifier

#### Defined in

[bee-js/src/types/index.ts:237](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L237)
