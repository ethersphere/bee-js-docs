---
id: "socwriter"
title: "Interface: SOCWriter"
sidebar_label: "SOCWriter"
sidebar_position: 0
custom_edit_url: null
---

Interface for downloading and uploading single owner chunks

## Hierarchy

- [`SOCReader`](socreader.md)

  ↳ **`SOCWriter`**

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

#### Inherited from

[SOCReader](socreader.md).[download](socreader.md#download)

#### Defined in

[bee-js/src/types/index.ts:345](https://github.com/ethersphere/bee-js/blob/74056cb/src/types/index.ts#L345)

___

### upload

• **upload**: (`postageBatchId`: `string` \| [`BatchId`](../types/batchid.md), `identifier`: `Identifier`, `data`: `Uint8Array`, `options?`: [`UploadOptions`](uploadoptions.md)) =\> `Promise`<[`Reference`](../types/reference.md)\>

#### Type declaration

▸ (`postageBatchId`, `identifier`, `data`, `options?`): `Promise`<[`Reference`](../types/reference.md)\>

Uploads a single owner chunk

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `postageBatchId` | `string` \| [`BatchId`](../types/batchid.md) | - |
| `identifier` | `Identifier` | The identifier of the chunk |
| `data` | `Uint8Array` | The chunk payload data |
| `options?` | [`UploadOptions`](uploadoptions.md) | Upload options |

##### Returns

`Promise`<[`Reference`](../types/reference.md)\>

#### Defined in

[bee-js/src/types/index.ts:359](https://github.com/ethersphere/bee-js/blob/74056cb/src/types/index.ts#L359)
