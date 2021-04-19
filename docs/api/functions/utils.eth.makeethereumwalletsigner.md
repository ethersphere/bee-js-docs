---
id: "utils.eth.makeethereumwalletsigner"
title: "Function: makeEthereumWalletSigner"
sidebar_label: "makeEthereumWalletSigner"
custom_edit_url: null
hide_title: true
---

# Function: makeEthereumWalletSigner

[Utils](../modules/utils.md).[Eth](../modules/utils.eth.md).makeEthereumWalletSigner

▸ **makeEthereumWalletSigner**(`provider`: [*JsonRPC*](../interfaces/utils.eth.jsonrpc.md), `ethAddress?`: *string* \| [*HexString*](../types/utils.hex.hexstring.md) \| [*HexEthAddress*](../types/utils.eth.hexethaddress.md)): *Promise*<[*Signer*](../types/signer.md)\>

Function that takes Ethereum EIP-1193 compatible provider and create an Signer instance that
uses `personal_sign` method to sign requested data.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`provider` | [*JsonRPC*](../interfaces/utils.eth.jsonrpc.md) | Injected web3 provider like window.ethereum or other compatible with EIP-1193   |
`ethAddress?` | *string* \| [*HexString*](../types/utils.hex.hexstring.md) \| [*HexEthAddress*](../types/utils.eth.hexethaddress.md) | Optional address of the account which the data should be signed with. If not specified `eth_requestAccounts` request is used to get the account address.    |

**Returns:** *Promise*<[*Signer*](../types/signer.md)\>

Defined in: [bee-js/src/utils/eth.ts:192](https://github.com/ethersphere/bee-js/blob/8087a81/src/utils/eth.ts#L192)
