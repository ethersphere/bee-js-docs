---
id: "utils.hex.inttohex"
title: "Function: intToHex"
sidebar_label: "intToHex"
custom_edit_url: null
---

[Utils](../modules/utils.md).[Hex](../modules/utils.hex.md).intToHex

▸ **intToHex**<`Length`\>(`int`, `len?`): [`HexString`](../types/utils.hex.hexstring.md)<`Length`\>

Converts integer number to hex string.

Optionally provides '0x' prefix or padding

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Length` | extends `number``number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `int` | `number` | The positive integer to be converted |
| `len?` | `Length` | The length of the non prefixed HexString |

#### Returns

[`HexString`](../types/utils.hex.hexstring.md)<`Length`\>

#### Defined in

[bee-js/src/utils/hex.ts:109](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/utils/hex.ts#L109)
