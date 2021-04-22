---
id: "utils.hex.makehexstring"
title: "Function: makeHexString"
sidebar_label: "makeHexString"
custom_edit_url: null
hide_title: true
---

# Function: makeHexString

[Utils](../modules/utils.md).[Hex](../modules/utils.hex.md).makeHexString

▸ **makeHexString**<L\>(`input`: *string* \| *number* \| Uint8Array \| *unknown*, `len?`: L): [*HexString*](../types/utils.hex.hexstring.md)<L\>

Creates unprefixed hex string from wide range of data.

TODO: Make Length mandatory: https://github.com/ethersphere/bee-js/issues/208

#### Type parameters:

Name | Type |
:------ | :------ |
`L` | *number* |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`input` | *string* \| *number* \| Uint8Array \| *unknown* |  |
`len?` | L | of the resulting HexString WITHOUT prefix!    |

**Returns:** [*HexString*](../types/utils.hex.hexstring.md)<L\>

Defined in: [bee-js/src/utils/hex.ts:33](https://github.com/ethersphere/bee-js/blob/9a547fe/src/utils/hex.ts#L33)
