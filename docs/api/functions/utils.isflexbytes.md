---
id: "utils.isflexbytes"
title: "Function: isFlexBytes"
sidebar_label: "isFlexBytes"
custom_edit_url: null
---

[Utils](../modules/utils.md).isFlexBytes

▸ **isFlexBytes**<`Min`, `Max`\>(`b`, `min`, `max`): b is FlexBytes<Min, Max\>

Type guard for FlexBytes<Min,Max\> type

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

b is FlexBytes<Min, Max\>

#### Defined in

[bee-js/src/utils/bytes.ts:57](https://github.com/ethersphere/bee-js/blob/ae6a776/src/utils/bytes.ts#L57)
