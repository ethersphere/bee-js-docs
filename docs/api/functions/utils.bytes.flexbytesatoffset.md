---
id: "utils.bytes.flexbytesatoffset"
title: "Function: flexBytesAtOffset"
sidebar_label: "flexBytesAtOffset"
custom_edit_url: null
hide_title: true
---

# Function: flexBytesAtOffset

[Utils](../modules/utils.md).[Bytes](../modules/utils.bytes.md).flexBytesAtOffset

▸ **flexBytesAtOffset**<Min, Max\>(`data`: Uint8Array, `offset`: *number*, `_min`: Min, `_max`: Max): [*FlexBytes*](../interfaces/utils.bytes.flexbytes.md)<Min, Max\>

Return flex bytes starting from `offset`

#### Type parameters:

Name | Type |
:------ | :------ |
`Min` | *number* |
`Max` | *number* |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`data` | Uint8Array | The original data   |
`offset` | *number* | The offset to start from   |
`_min` | Min | The minimum size of the data   |
`_max` | Max | The maximum size of the data    |

**Returns:** [*FlexBytes*](../interfaces/utils.bytes.flexbytes.md)<Min, Max\>

Defined in: [bee-js/src/utils/bytes.ts:108](https://github.com/ethersphere/bee-js/blob/8087a81/src/utils/bytes.ts#L108)
