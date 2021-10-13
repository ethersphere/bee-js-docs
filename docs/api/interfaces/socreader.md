---
id: "socreader"
title: "Interface: SOCReader"
sidebar_label: "SOCReader"
sidebar_position: 0
custom_edit_url: null
---

Interface for downloading single owner chunks

## Hierarchy

- **`SOCReader`**

  ↳ [`SOCWriter`](socwriter.md)

## Properties

### download

• **download**: (`identifier`: `Identifier`) =\> `Promise`<`SingleOwnerChunk`\>

#### Type declaration

▸ (`identifier`): `Promise`<`SingleOwnerChunk`\>

Downloads a single owner chunk

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `Identifier` | The identifier of the chunk |

##### Returns

`Promise`<`SingleOwnerChunk`\>

#### Defined in

[bee-js/src/types/index.ts:407](https://github.com/ethersphere/bee-js/blob/ae6a776/src/types/index.ts#L407)
