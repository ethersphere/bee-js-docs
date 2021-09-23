---
id: "utils.inttohex"
title: "Function: intToHex"
sidebar_label: "intToHex"
custom_edit_url: null
---

[Utils](../modules/utils.md).intToHex

▸ **intToHex**<`Length`\>(`int`, `len?`): [`HexString`](../types/utils.hexstring.md)<`Length`\>

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

[`HexString`](../types/utils.hexstring.md)<`Length`\>

#### Defined in

[bee-js/src/utils/hex.ts:109](https://github.com/ethersphere/bee-js/blob/5b112bf/src/utils/hex.ts#L109)
