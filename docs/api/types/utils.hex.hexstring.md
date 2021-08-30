---
id: "utils.hex.hexstring"
title: "Type alias: HexString<Length>"
sidebar_label: "HexString"
custom_edit_url: null
---

[Utils](../modules/utils.md).[Hex](../modules/utils.hex.md).HexString

Ƭ **HexString**<`Length`\>: [`FlavoredType`](flavoredtype.md)<`string` & { `length`: `Length`  }, ``"HexString"``\>

Nominal type to represent hex strings WITHOUT '0x' prefix.
For example for 32 bytes hex representation you have to use 64 length.
TODO: Make Length mandatory: https://github.com/ethersphere/bee-js/issues/208

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Length` | extends `number``number` |

#### Defined in

[bee-js/src/utils/hex.ts:9](https://github.com/ethersphere/bee-js/blob/74056cb/src/utils/hex.ts#L9)
