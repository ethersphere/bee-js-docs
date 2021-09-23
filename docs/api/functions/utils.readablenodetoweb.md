---
id: "utils.readablenodetoweb"
title: "Function: readableNodeToWeb"
sidebar_label: "readableNodeToWeb"
custom_edit_url: null
---

[Utils](../modules/utils.md).readableNodeToWeb

▸ **readableNodeToWeb**(`nodeStream`): `ReadableStream`<`Uint8Array`\>

Function that converts Node's Readable into WHATWG ReadableStream

Taken over from https://github.com/gwicke/node-web-streams/blob/master/lib/conversions.js
Because it uses forked web-streams-polyfill that are outdated.

**`author`** https://github.com/gwicke

**`licence`** Apache License 2.0 https://github.com/gwicke/node-web-streams/blob/master/LICENSE

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeStream` | `NodeReadableType` |

#### Returns

`ReadableStream`<`Uint8Array`\>

#### Defined in

[bee-js/src/utils/stream.ts:62](https://github.com/ethersphere/bee-js/blob/5b112bf/src/utils/stream.ts#L62)
