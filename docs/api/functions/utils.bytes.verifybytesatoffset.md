---
id: "utils.bytes.verifybytesatoffset"
title: "Function: verifyBytesAtOffset"
sidebar_label: "verifyBytesAtOffset"
custom_edit_url: null
hide_title: true
---

# Function: verifyBytesAtOffset

[Utils](../modules/utils.md).[Bytes](../modules/utils.bytes.md).verifyBytesAtOffset

▸ **verifyBytesAtOffset**<Length\>(`offset`: *number*, `length`: Length, `data`: Uint8Array): [*Bytes*](../interfaces/utils.bytes.bytes.md)<Length\>

Verifies if a byte array has a certain length starting from offset

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

Defined in: [bee-js/src/utils/bytes.ts:138](https://github.com/ethersphere/bee-js/blob/0ac3a7d/src/utils/bytes.ts#L138)
