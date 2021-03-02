---
id: "utils.bytes.verifyflexbytes"
title: "Function: verifyFlexBytes"
sidebar_label: "verifyFlexBytes"
custom_edit_url: null
hide_title: true
---

# Function: verifyFlexBytes

[Utils](../modules/utils.md).[Bytes](../modules/utils.bytes.md).verifyFlexBytes

▸ **verifyFlexBytes**<Min, Max\>(`min`: Min, `max`: Max, `b`: Uint8Array): [*FlexBytes*](../interfaces/utils.bytes.flexbytes.md)<Min, Max\> \| *never*

Verifies if a byte array has a certain length between min and max

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

**Returns:** [*FlexBytes*](../interfaces/utils.bytes.flexbytes.md)<Min, Max\> \| *never*

Defined in: [bee-js/src/utils/bytes.ts:70](https://github.com/ethersphere/bee-js/blob/7dfd556/src/utils/bytes.ts#L70)
