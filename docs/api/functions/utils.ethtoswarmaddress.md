---
id: "utils.ethtoswarmaddress"
title: "Function: ethToSwarmAddress"
sidebar_label: "ethToSwarmAddress"
custom_edit_url: null
---

[Utils](../modules/utils.md).ethToSwarmAddress

▸ **ethToSwarmAddress**(`ethAddress`, `networkId?`): `OverlayAddress`

Get swarm overlay address from public ethereum address and swarm network id

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `ethAddress` | `string` \| [`HexString`](../types/utils.hexstring.md) \| `HexEthAddress` | `undefined` | Public ethereum address |
| `networkId` | `number` | `1` | Swarm network id |

#### Returns

`OverlayAddress`

Swarm overlay address

#### Defined in

[bee-js/src/utils/eth.ts:162](https://github.com/ethersphere/bee-js/blob/ae6a776/src/utils/eth.ts#L162)
