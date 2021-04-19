---
id: "utils.bytes.assertflexbytes"
title: "Function: assertFlexBytes"
sidebar_label: "assertFlexBytes"
custom_edit_url: null
hide_title: true
---

# Function: assertFlexBytes

[Utils](../modules/utils.md).[Bytes](../modules/utils.bytes.md).assertFlexBytes

▸ **assertFlexBytes**<Min, Max\>(`b`: *unknown*, `min`: Min, `max`: Max): asserts b is FlexBytes<Min, Max\>

Verifies if a byte array has a certain length between min and max

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`Min` | *number* | - |
`Max` | *number* | Min |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`b` | *unknown* | The byte array   |
`min` | Min | Minimum size of the array   |
`max` | Max | Maximum size of the array    |

**Returns:** asserts b is FlexBytes<Min, Max\>

Defined in: [bee-js/src/utils/bytes.ts:72](https://github.com/ethersphere/bee-js/blob/8087a81/src/utils/bytes.ts#L72)
