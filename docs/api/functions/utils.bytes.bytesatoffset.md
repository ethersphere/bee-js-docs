---
id: "utils.bytes.bytesatoffset"
title: "Function: bytesAtOffset"
sidebar_label: "bytesAtOffset"
custom_edit_url: null
---

[Utils](../modules/utils.md).[Bytes](../modules/utils.bytes.md).bytesAtOffset

▸ **bytesAtOffset**<`Length`\>(`data`, `offset`, `length`): [`Bytes`](../interfaces/utils.bytes.bytes.md)<`Length`\>

Return `length` bytes starting from `offset`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Length` | extends `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Uint8Array` | The original data |
| `offset` | `number` | The offset to start from |
| `length` | `Length` | The length of data to be returned |

#### Returns

[`Bytes`](../interfaces/utils.bytes.bytes.md)<`Length`\>

#### Defined in

[bee-js/src/utils/bytes.ts:91](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/utils/bytes.ts#L91)
