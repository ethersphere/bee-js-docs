---
id: "utils.hex.bytestohex"
title: "Function: bytesToHex"
sidebar_label: "bytesToHex"
custom_edit_url: null
hide_title: true
---

# Function: bytesToHex

[Utils](../modules/utils.md).[Hex](../modules/utils.hex.md).bytesToHex

▸ **bytesToHex**<Length\>(`bytes`: Uint8Array, `len?`: Length): [*HexString*](../types/utils.hex.hexstring.md)<Length\>

Converts array of number or Uint8Array to HexString without prefix.

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`Length` | *number* | *number* |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`bytes` | Uint8Array | The input array   |
`len?` | Length | The length of the non prefixed HexString    |

**Returns:** [*HexString*](../types/utils.hex.hexstring.md)<Length\>

Defined in: [bee-js/src/utils/hex.ts:89](https://github.com/ethersphere/bee-js/blob/9a547fe/src/utils/hex.ts#L89)
