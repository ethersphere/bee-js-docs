---
id: "jsonfeedoptions"
title: "Interface: JsonFeedOptions"
sidebar_label: "JsonFeedOptions"
custom_edit_url: null
hide_title: true
---

# Interface: JsonFeedOptions

## Properties

### address

• `Optional` **address**: *undefined* \| *string* \| *Uint8Array* \| [*EthAddress*](../types/utils.eth.ethaddress.md)

Valid only for `get` action, where either this `address` or `signer` has
to be specified.

Defined in: [bee-js/src/types/index.ts:156](https://github.com/ethersphere/bee-js/blob/9a547fe/src/types/index.ts#L156)

___

### signer

• `Optional` **signer**: *undefined* \| *string* \| *Uint8Array* \| [*Signer*](../types/signer.md)

Custom Signer object or private key in either binary or hex form.
This required for `set` action, and optional for `get` although
if not specified for `get` then `address` option has to be specified.

Defined in: [bee-js/src/types/index.ts:163](https://github.com/ethersphere/bee-js/blob/9a547fe/src/types/index.ts#L163)

___

### type

• `Optional` **type**: *undefined* \| *sequence* \| *epoch*

Defined in: [bee-js/src/types/index.ts:164](https://github.com/ethersphere/bee-js/blob/9a547fe/src/types/index.ts#L164)
