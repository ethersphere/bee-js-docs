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

[bee-js/src/types/index.ts:157](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/types/index.ts#L157)

___

### startedAt

• **startedAt**: `string`

When the upload process started

#### Defined in

[bee-js/src/types/index.ts:172](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/types/index.ts#L172)

___

### synced

• **synced**: `number`

Number of chunks that arrived to their designated destination in the network

#### Defined in

[bee-js/src/types/index.ts:162](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/types/index.ts#L162)

___

### total

• **total**: `number`

Number of all chunks that the data will be split into.

#### Defined in

[bee-js/src/types/index.ts:152](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/types/index.ts#L152)

___

### uid

• **uid**: `number`

Unique identifier

#### Defined in

[bee-js/src/types/index.ts:167](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/types/index.ts#L167)
