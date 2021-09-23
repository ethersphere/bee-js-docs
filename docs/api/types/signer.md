---
id: "signer"
title: "Type alias: Signer"
sidebar_label: "Signer"
sidebar_position: 0
custom_edit_url: null
---

Ƭ **Signer**: `Object`

Interface for implementing Ethereum compatible signing.

In order to be compatible with Ethereum and its signing method `personal_sign`, the data
that are passed to sign() function should be prefixed with: `\x19Ethereum Signed Message:\n${data.length}`, hashed
and only then signed.
If you are wrapping another signer tool/library (like Metamask or some other Ethereum wallet), you might not have
to do this prefixing manually if you use the `personal_sign` method. Check documentation of the tool!
If you are writing your own storage for keys, then you have to prefix the data manually otherwise the Bee node
will reject the chunks signed by you!

For example see the hashWithEthereumPrefix() function.

**`property`** sign     The sign function that can be sync or async. This function takes non-prefixed data. See above.

**`property`** address  The ethereum address of the signer in bytes.

**`see`** hashWithEthereumPrefix

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address` | [`EthAddress`](utils.ethaddress.md) |
| `sign` | `SyncSigner` \| `AsyncSigner` |

#### Defined in

[bee-js/src/types/index.ts:542](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L542)
