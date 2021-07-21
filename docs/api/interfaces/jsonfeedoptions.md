---
id: "jsonfeedoptions"
title: "Interface: JsonFeedOptions"
sidebar_label: "JsonFeedOptions"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### address

• `Optional` **address**: `string` \| `Uint8Array` \| [`EthAddress`](../types/utils.eth.ethaddress.md)

Valid only for `get` action, where either this `address` or `signer` has
to be specified.

#### Defined in

[bee-js/src/types/index.ts:305](https://github.com/ethersphere/bee-js/blob/6f227e1/src/types/index.ts#L305)

___

### signer

• `Optional` **signer**: `string` \| `Uint8Array` \| [`Signer`](../types/signer.md)

Custom Signer object or private key in either binary or hex form.
This required for `set` action, and optional for `get` although
if not specified for `get` then `address` option has to be specified.

#### Defined in

[bee-js/src/types/index.ts:312](https://github.com/ethersphere/bee-js/blob/6f227e1/src/types/index.ts#L312)

___

### type

• `Optional` **type**: ``"sequence"`` \| ``"epoch"``

#### Defined in

[bee-js/src/types/index.ts:313](https://github.com/ethersphere/bee-js/blob/6f227e1/src/types/index.ts#L313)
