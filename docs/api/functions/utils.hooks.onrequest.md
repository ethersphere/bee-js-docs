---
id: "utils.hooks.onrequest"
title: "Function: onRequest"
sidebar_label: "onRequest"
custom_edit_url: null
---

[Utils](../modules/utils.md).[Hooks](../modules/utils.hooks.md).onRequest

▸ **onRequest**(`cb`): `number`

Function that registers listener callback for all outgoing HTTP requests that bee-js makes.

**Be Aware! This listener listens to all Bee/BeeDebug class instances without differentiation!**

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `HookCallback`<[`BeeRequest`](../interfaces/beerequest.md)\> |

#### Returns

`number`

ID of the listener that can be used to stop the callback to receive new requests

#### Defined in

[bee-js/src/utils/hooks.ts:56](https://github.com/ethersphere/bee-js/blob/6f227e1/src/utils/hooks.ts#L56)
