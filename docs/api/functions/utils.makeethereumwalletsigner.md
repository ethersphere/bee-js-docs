---
id: "utils.makeethereumwalletsigner"
title: "Function: makeEthereumWalletSigner"
sidebar_label: "makeEthereumWalletSigner"
custom_edit_url: null
---

[Utils](../modules/utils.md).makeEthereumWalletSigner

▸ **makeEthereumWalletSigner**(`provider`, `ethAddress?`): `Promise`<[`Signer`](../types/signer.md)\>

Function that takes Ethereum EIP-1193 compatible provider and create an Signer instance that
uses `personal_sign` method to sign requested data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `JsonRPC` | Injected web3 provider like window.ethereum or other compatible with EIP-1193 |
| `ethAddress?` | `string` \| [`HexString`](../types/utils.hexstring.md) \| `HexEthAddress` | Optional address of the account which the data should be signed with. If not specified `eth_requestAccounts` request is used to get the account address. |

#### Returns

`Promise`<[`Signer`](../types/signer.md)\>

#### Defined in

[bee-js/src/utils/eth.ts:192](https://github.com/ethersphere/bee-js/blob/ae6a776/src/utils/eth.ts#L192)
