---
id: "utils.bytes.assertflexbytes"
title: "Function: assertFlexBytes"
sidebar_label: "assertFlexBytes"
custom_edit_url: null
---

[Utils](../modules/utils.md).[Bytes](../modules/utils.bytes.md).assertFlexBytes

▸ **assertFlexBytes**<`Min`, `Max`\>(`b`, `min`, `max`): asserts b is FlexBytes<Min, Max\>

Verifies if a byte array has a certain length between min and max

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Min` | extends `number` |
| `Max` | extends `number``Min` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `b` | `unknown` | The byte array |
| `min` | `Min` | Minimum size of the array |
| `max` | `Max` | Maximum size of the array |

#### Returns

asserts b is FlexBytes<Min, Max\>

#### Defined in

[bee-js/src/utils/bytes.ts:72](https://github.com/ethersphere/bee-js/blob/74056cb/src/utils/bytes.ts#L72)
