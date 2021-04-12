---
id: "utils.hex.ishexstring"
title: "Function: isHexString"
sidebar_label: "isHexString"
custom_edit_url: null
hide_title: true
---

# Function: isHexString

[Utils](../modules/utils.md).[Hex](../modules/utils.hex.md).isHexString

▸ **isHexString**<Length\>(`s`: *unknown*, `len?`: *number*): s is HexString<Length\>

Type guard for HexStrings.
Requires no 0x prefix!

TODO: Make Length mandatory: https://github.com/ethersphere/bee-js/issues/208

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`Length` | *number* | *number* |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`s` | *unknown* | string input   |
`len?` | *number* | expected length of the HexString    |

**Returns:** s is HexString<Length\>

Defined in: [bee-js/src/utils/hex.ts:134](https://github.com/ethersphere/bee-js/blob/ce4d3fa/src/utils/hex.ts#L134)
