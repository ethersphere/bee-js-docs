---
id: "utils.eth.fromlittleendian"
title: "Function: fromLittleEndian"
sidebar_label: "fromLittleEndian"
custom_edit_url: null
hide_title: true
---

# Function: fromLittleEndian

[Utils](../modules/utils.md).[Eth](../modules/utils.eth.md).fromLittleEndian

▸ **fromLittleEndian**(`littleEndian`: *number* \| *string* \| [*HexString*](../types/utils.hex.hexstring.md), `pad?`: *number*): [*HexString*](../types/utils.hex.hexstring.md) \| *never*

Convert little-endian hex or number to big-endian
Note: Before conversion it is automatically padded to even length hexstring

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`littleEndian` | *number* \| *string* \| [*HexString*](../types/utils.hex.hexstring.md) | - | Little-endian hex string or number to convert   |
`pad` | *number* | 2 | Length to which the string should be padded before conversion (defaul: 2)    |

**Returns:** [*HexString*](../types/utils.hex.hexstring.md) \| *never*

big-endian encoded hexstring

Defined in: [bee-js/src/utils/eth.ts:139](https://github.com/ethersphere/bee-js/blob/9a547fe/src/utils/eth.ts#L139)
