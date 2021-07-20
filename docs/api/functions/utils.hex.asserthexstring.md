---
id: "utils.hex.asserthexstring"
title: "Function: assertHexString"
sidebar_label: "assertHexString"
custom_edit_url: null
---

[Utils](../modules/utils.md).[Hex](../modules/utils.hex.md).assertHexString

▸ **assertHexString**<`Length`\>(`s`, `len?`, `name?`): asserts s is HexString<Length\>

Verifies if the provided input is a HexString.

TODO: Make Length mandatory: https://github.com/ethersphere/bee-js/issues/208

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Length` | extends `number``number` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `s` | `unknown` | `undefined` | string input |
| `len?` | `number` | `undefined` | expected length of the HexString |
| `name` | `string` | `'value'` | optional name for the asserted value |

#### Returns

asserts s is HexString<Length\>

HexString or throws error

#### Defined in

[bee-js/src/utils/hex.ts:158](https://github.com/ethersphere/bee-js/blob/6f227e1/src/utils/hex.ts#L158)
