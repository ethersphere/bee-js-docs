---
id: "utils.ishexstring"
title: "Function: isHexString"
sidebar_label: "isHexString"
custom_edit_url: null
---

[Utils](../modules/utils.md).isHexString

▸ **isHexString**<`Length`\>(`s`, `len?`): s is HexString<Length\>

Type guard for HexStrings.
Requires no 0x prefix!

TODO: Make Length mandatory: https://github.com/ethersphere/bee-js/issues/208

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Length` | extends `number``number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | `unknown` | string input |
| `len?` | `number` | expected length of the HexString |

#### Returns

s is HexString<Length\>

#### Defined in

[bee-js/src/utils/hex.ts:134](https://github.com/ethersphere/bee-js/blob/5b112bf/src/utils/hex.ts#L134)
