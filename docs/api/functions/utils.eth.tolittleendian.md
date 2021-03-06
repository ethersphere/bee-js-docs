---
id: "utils.eth.tolittleendian"
title: "Function: toLittleEndian"
sidebar_label: "toLittleEndian"
custom_edit_url: null
---

[Utils](../modules/utils.md).[Eth](../modules/utils.eth.md).toLittleEndian

▸ **toLittleEndian**(`bigEndian`, `pad?`): [`HexString`](../types/utils.hex.hexstring.md) \| `never`

Convert big-endian hex or number to little-endian.
Note: Before conversion it is automatically padded to even length hexstring

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `bigEndian` | `number` \| `string` \| [`HexString`](../types/utils.hex.hexstring.md) | `undefined` | Big-endian hex string or number to convert |
| `pad` | `number` | `2` | Length to which the string should be padded before conversion (defaul: 2) |

#### Returns

[`HexString`](../types/utils.hex.hexstring.md) \| `never`

little-endian encoded hexstring

#### Defined in

[bee-js/src/utils/eth.ts:106](https://github.com/ethersphere/bee-js/blob/6f227e1/src/utils/eth.ts#L106)
