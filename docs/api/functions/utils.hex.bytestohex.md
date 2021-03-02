---
id: "utils.hex.bytestohex"
title: "Function: bytesToHex"
sidebar_label: "bytesToHex"
custom_edit_url: null
hide_title: true
---

# Function: bytesToHex

[Utils](../modules/utils.md).[Hex](../modules/utils.hex.md).bytesToHex

▸ **bytesToHex**(`bytes`: Uint8Array, `withPrefix?`: *boolean*): [*HexString*](../types/utils.hex.hexstring.md)

Converts array of number or Uint8Array to hex string.

Optionally provides '0x' prefix.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`bytes` | Uint8Array | - | The input array   |
`withPrefix` | *boolean* | false | Provides '0x' prefix when true (default: false)    |

**Returns:** [*HexString*](../types/utils.hex.hexstring.md)

Defined in: [bee-js/src/utils/hex.ts:41](https://github.com/ethersphere/bee-js/blob/7dfd556/src/utils/hex.ts#L41)
