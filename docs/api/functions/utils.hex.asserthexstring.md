---
id: "utils.hex.asserthexstring"
title: "Function: assertHexString"
sidebar_label: "assertHexString"
custom_edit_url: null
hide_title: true
---

# Function: assertHexString

[Utils](../modules/utils.md).[Hex](../modules/utils.hex.md).assertHexString

▸ **assertHexString**<Length\>(`s`: *unknown*, `len?`: *number*): asserts s is HexString<Length\>

Verifies if the provided input is a HexString.

TODO: Make Length mandatory: https://github.com/ethersphere/bee-js/issues/208

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`Length` | *number* | *number* |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`s` | *unknown* | string input   |
`len?` | *number* | expected length of the HexString   |

**Returns:** asserts s is HexString<Length\>

HexString or throws error

Defined in: [bee-js/src/utils/hex.ts:157](https://github.com/ethersphere/bee-js/blob/9a547fe/src/utils/hex.ts#L157)
