---
id: "utils.bytes.bytesatoffset"
title: "Function: bytesAtOffset"
sidebar_label: "bytesAtOffset"
custom_edit_url: null
hide_title: true
---

# Function: bytesAtOffset

[Utils](../modules/utils.md).[Bytes](../modules/utils.bytes.md).bytesAtOffset

▸ **bytesAtOffset**<Length\>(`offset`: *number*, `length`: Length, `data`: Uint8Array): [*Bytes*](../interfaces/utils.bytes.bytes.md)<Length\>

Return `length` bytes starting from `offset`

#### Type parameters:

Name | Type |
:------ | :------ |
`Length` | *number* |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`offset` | *number* | The offset to start from   |
`length` | Length | The length of data to be returned   |
`data` | Uint8Array | The original data    |

**Returns:** [*Bytes*](../interfaces/utils.bytes.bytes.md)<Length\>

Defined in: [bee-js/src/utils/bytes.ts:91](https://github.com/ethersphere/bee-js/blob/ce4d3fa/src/utils/bytes.ts#L91)
