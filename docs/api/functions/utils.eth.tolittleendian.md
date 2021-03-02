---
id: "utils.eth.tolittleendian"
title: "Function: toLittleEndian"
sidebar_label: "toLittleEndian"
custom_edit_url: null
hide_title: true
---

# Function: toLittleEndian

[Utils](../modules/utils.md).[Eth](../modules/utils.eth.md).toLittleEndian

▸ **toLittleEndian**(`bigEndian`: *number* \| *string* \| [*HexString*](../types/utils.hex.hexstring.md), `pad?`: *number*): [*HexString*](../types/utils.hex.hexstring.md) \| *never*

Convert big-endian hex or number to little-endian.
Note: Before conversion it is automatically padded to even length hexstring

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`bigEndian` | *number* \| *string* \| [*HexString*](../types/utils.hex.hexstring.md) | - | Big-endian hex string or number to convert   |
`pad` | *number* | 2 | Length to which the string should be padded before conversion (defaul: 2)    |

**Returns:** [*HexString*](../types/utils.hex.hexstring.md) \| *never*

little-endian encoded hexstring

Defined in: [bee-js/src/utils/eth.ts:67](https://github.com/ethersphere/bee-js/blob/7dfd556/src/utils/eth.ts#L67)
