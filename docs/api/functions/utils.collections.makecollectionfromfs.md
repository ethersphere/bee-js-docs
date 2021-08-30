---
id: "utils.collections.makecollectionfromfs"
title: "Function: makeCollectionFromFS"
sidebar_label: "makeCollectionFromFS"
custom_edit_url: null
---

[Utils](../modules/utils.md).[Collections](../modules/utils.collections.md).makeCollectionFromFS

▸ **makeCollectionFromFS**(`dir`): `Promise`<[`Collection`](../types/collection.md)<`Uint8Array`\>\>

Creates array in the format of Collection with data loaded from directory on filesystem.
The function loads all the data into memory!

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | `string` | path to the directory |

#### Returns

`Promise`<[`Collection`](../types/collection.md)<`Uint8Array`\>\>

#### Defined in

[bee-js/src/utils/collection.ts:28](https://github.com/ethersphere/bee-js/blob/74056cb/src/utils/collection.ts#L28)
