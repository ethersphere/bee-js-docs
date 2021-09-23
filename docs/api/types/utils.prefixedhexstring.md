---
id: "utils.prefixedhexstring"
title: "Type alias: PrefixedHexString"
sidebar_label: "PrefixedHexString"
custom_edit_url: null
---

[Utils](../modules/utils.md).PrefixedHexString

Ƭ **PrefixedHexString**: [`BrandedType`](brandedtype.md)<`string`, ``"PrefixedHexString"``\>

Type for HexString with prefix.
The main hex type used internally should be non-prefixed HexString
and therefore this type should be used as least as possible.
Because of that it does not contain the Length property as the variables
should be validated and converted to HexString ASAP.

#### Defined in

[bee-js/src/utils/hex.ts:23](https://github.com/ethersphere/bee-js/blob/5b112bf/src/utils/hex.ts#L23)
