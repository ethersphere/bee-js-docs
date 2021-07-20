---
id: "utils.bytes.flexbytesatoffset"
title: "Function: flexBytesAtOffset"
sidebar_label: "flexBytesAtOffset"
custom_edit_url: null
---

[Utils](../modules/utils.md).[Bytes](../modules/utils.bytes.md).flexBytesAtOffset

▸ **flexBytesAtOffset**<`Min`, `Max`\>(`data`, `offset`, `_min`, `_max`): [`FlexBytes`](../interfaces/utils.bytes.flexbytes.md)<`Min`, `Max`\>

Return flex bytes starting from `offset`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Min` | extends `number` |
| `Max` | extends `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Uint8Array` | The original data |
| `offset` | `number` | The offset to start from |
| `_min` | `Min` | The minimum size of the data |
| `_max` | `Max` | The maximum size of the data |

#### Returns

[`FlexBytes`](../interfaces/utils.bytes.flexbytes.md)<`Min`, `Max`\>

#### Defined in

[bee-js/src/utils/bytes.ts:108](https://github.com/ethersphere/bee-js/blob/6f227e1/src/utils/bytes.ts#L108)
