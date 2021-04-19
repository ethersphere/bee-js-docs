---
id: "utils.hex.hextobytes"
title: "Function: hexToBytes"
sidebar_label: "hexToBytes"
custom_edit_url: null
hide_title: true
---

# Function: hexToBytes

[Utils](../modules/utils.md).[Hex](../modules/utils.hex.md).hexToBytes

▸ **hexToBytes**<Length, LengthHex\>(`hex`: [*HexString*](../types/utils.hex.hexstring.md)<LengthHex\>): [*Bytes*](../interfaces/utils.bytes.bytes.md)<Length\>

Converts a hex string to Uint8Array

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`Length` | *number* | - |
`LengthHex` | *number* | *number* |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`hex` | [*HexString*](../types/utils.hex.hexstring.md)<LengthHex\> | string input without 0x prefix!    |

**Returns:** [*Bytes*](../interfaces/utils.bytes.bytes.md)<Length\>

Defined in: [bee-js/src/utils/hex.ts:69](https://github.com/ethersphere/bee-js/blob/8087a81/src/utils/hex.ts#L69)
