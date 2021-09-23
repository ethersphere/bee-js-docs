---
id: "utils.hextobytes"
title: "Function: hexToBytes"
sidebar_label: "hexToBytes"
custom_edit_url: null
---

[Utils](../modules/utils.md).hexToBytes

▸ **hexToBytes**<`Length`, `LengthHex`\>(`hex`): [`Bytes`](../interfaces/utils.bytes.md)<`Length`\>

Converts a hex string to Uint8Array

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Length` | extends `number` |
| `LengthHex` | extends `number``number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hex` | [`HexString`](../types/utils.hexstring.md)<`LengthHex`\> | string input without 0x prefix! |

#### Returns

[`Bytes`](../interfaces/utils.bytes.md)<`Length`\>

#### Defined in

[bee-js/src/utils/hex.ts:69](https://github.com/ethersphere/bee-js/blob/5b112bf/src/utils/hex.ts#L69)
