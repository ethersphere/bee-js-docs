---
id: "utils.hooks.onresponse"
title: "Function: onResponse"
sidebar_label: "onResponse"
custom_edit_url: null
---

[Utils](../modules/utils.md).[Hooks](../modules/utils.hooks.md).onResponse

▸ **onResponse**(`cb`): `number`

Function that registers listener callback for all incoming HTTP responses that bee-js made.

**Be Aware! This listener listens to all Bee/BeeDebug class instances without differentiation!**

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `HookCallback`<[`BeeResponse`](../interfaces/beeresponse.md)\> |

#### Returns

`number`

ID of the listener that can be used to stop the callback to receive new responses

#### Defined in

[bee-js/src/utils/hooks.ts:76](https://github.com/ethersphere/bee-js/blob/6f227e1/src/utils/hooks.ts#L76)
