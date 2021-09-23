---
id: "utils.bytestohex"
title: "Function: bytesToHex"
sidebar_label: "bytesToHex"
custom_edit_url: null
---

[Utils](../modules/utils.md).bytesToHex

▸ **bytesToHex**<`Length`\>(`bytes`, `len?`): [`HexString`](../types/utils.hexstring.md)<`Length`\>

Converts array of number or Uint8Array to HexString without prefix.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Length` | extends `number``number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bytes` | `Uint8Array` | The input array |
| `len?` | `Length` | The length of the non prefixed HexString |

#### Returns

[`HexString`](../types/utils.hexstring.md)<`Length`\>

#### Defined in

[bee-js/src/utils/hex.ts:89](https://github.com/ethersphere/bee-js/blob/5b112bf/src/utils/hex.ts#L89)
