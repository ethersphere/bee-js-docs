---
id: "utils.eth.ethtoswarmaddress"
title: "Function: ethToSwarmAddress"
sidebar_label: "ethToSwarmAddress"
custom_edit_url: null
---

[Utils](../modules/utils.md).[Eth](../modules/utils.eth.md).ethToSwarmAddress

▸ **ethToSwarmAddress**(`ethAddress`, `networkId?`): [`OverlayAddress`](../types/utils.eth.overlayaddress.md)

Get swarm overlay address from public ethereum address and swarm network id

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `ethAddress` | `string` \| [`HexString`](../types/utils.hex.hexstring.md) \| [`HexEthAddress`](../types/utils.eth.hexethaddress.md) | `undefined` | Public ethereum address |
| `networkId` | `number` | `1` | Swarm network id |

#### Returns

[`OverlayAddress`](../types/utils.eth.overlayaddress.md)

Swarm overlay address

#### Defined in

[bee-js/src/utils/eth.ts:162](https://github.com/ethersphere/bee-js/blob/74056cb/src/utils/eth.ts#L162)
