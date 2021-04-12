---
id: "utils.eth.ishexethaddress"
title: "Function: isHexEthAddress"
sidebar_label: "isHexEthAddress"
custom_edit_url: null
hide_title: true
---

# Function: isHexEthAddress

[Utils](../modules/utils.md).[Eth](../modules/utils.eth.md).isHexEthAddress

▸ **isHexEthAddress**(`address`: *string* \| [*HexString*](../types/utils.hex.hexstring.md) \| [*HexEthAddress*](../types/utils.eth.hexethaddress.md)): address is HexEthAddress

Check if is valid ethereum address

Pretty much typed version from web3js
https://github.com/ChainSafe/web3.js/blob/1.x/packages/web3-utils/src/utils.js

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`address` | *string* \| [*HexString*](../types/utils.hex.hexstring.md) \| [*HexEthAddress*](../types/utils.eth.hexethaddress.md) | Ethereum address as hex string    |

**Returns:** address is HexEthAddress

True if is valid eth address

Defined in: [bee-js/src/utils/eth.ts:90](https://github.com/ethersphere/bee-js/blob/ce4d3fa/src/utils/eth.ts#L90)
