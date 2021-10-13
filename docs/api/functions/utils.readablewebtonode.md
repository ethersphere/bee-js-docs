---
id: "utils.readablewebtonode"
title: "Function: readableWebToNode"
sidebar_label: "readableWebToNode"
custom_edit_url: null
---

[Utils](../modules/utils.md).readableWebToNode

▸ **readableWebToNode**(`webStream`, `options?`): `NodeReadableType`

Function that converts WHATWG ReadableStream into Node's Readable

Taken over from https://github.com/gwicke/node-web-streams/blob/master/lib/conversions.js
Because it uses forked web-streams-polyfill that are outdated.

**`author`** https://github.com/gwicke

**`licence`** Apache License 2.0 https://github.com/gwicke/node-web-streams/blob/master/LICENSE

#### Parameters

| Name | Type |
| :------ | :------ |
| `webStream` | `ReadableStream` |
| `options?` | `NodeReadableOptions` |

#### Returns

`NodeReadableType`

#### Defined in

[bee-js/src/utils/stream.ts:134](https://github.com/ethersphere/bee-js/blob/ae6a776/src/utils/stream.ts#L134)
