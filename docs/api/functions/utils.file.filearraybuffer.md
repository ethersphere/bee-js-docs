---
id: "utils.file.filearraybuffer"
title: "Function: fileArrayBuffer"
sidebar_label: "fileArrayBuffer"
custom_edit_url: null
---

[Utils](../modules/utils.md).[File](../modules/utils.file.md).fileArrayBuffer

▸ **fileArrayBuffer**(`file`): `Promise`<`ArrayBuffer`\>

Compatibility helper for browsers where the `arrayBuffer function is
missing from `File` objects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `File` | A File object |

#### Returns

`Promise`<`ArrayBuffer`\>

#### Defined in

[bee-js/src/utils/file.ts:29](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/utils/file.ts#L29)
