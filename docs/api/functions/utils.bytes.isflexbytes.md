---
id: "utils.bytes.isflexbytes"
title: "Function: isFlexBytes"
sidebar_label: "isFlexBytes"
custom_edit_url: null
hide_title: true
---

# Function: isFlexBytes

[Utils](../modules/utils.md).[Bytes](../modules/utils.bytes.md).isFlexBytes

▸ **isFlexBytes**<Min, Max\>(`min`: Min, `max`: Max, `b`: Uint8Array): b is FlexBytes<Min, Max\>

Type guard for FlexBytes<Min,Max\> type

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`Min` | *number* | - |
`Max` | *number* | Min |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`min` | Min | Minimum size of the array   |
`max` | Max | Maximum size of the array   |
`b` | Uint8Array | The byte array    |

**Returns:** b is FlexBytes<Min, Max\>

Defined in: [bee-js/src/utils/bytes.ts:55](https://github.com/ethersphere/bee-js/blob/7dfd556/src/utils/bytes.ts#L55)
