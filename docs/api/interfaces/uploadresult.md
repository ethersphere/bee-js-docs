---
id: "uploadresult"
title: "Interface: UploadResult"
sidebar_label: "UploadResult"
sidebar_position: 0
custom_edit_url: null
---

Result of upload calls.

## Properties

### reference

• **reference**: [`Reference`](../types/reference.md)

Reference of the uploaded data

#### Defined in

[bee-js/src/types/index.ts:125](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L125)

___

### tagUid

• `Optional` **tagUid**: `number`

Automatically created tag's UID.

There is bug in Bee, that does not return correct CORS header (Access-Control-Expose-Headers) for the `Swarm-Tag` to be exposed
in browser when uploading collection. The `tagUid` is marked as optional even though in 99% of results
it is present. The Optional mark will be removed with next Bee release.
TODO: Remove Optional with next Bee release: https://github.com/ethersphere/bee-js/issues/406

#### Defined in

[bee-js/src/types/index.ts:135](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L135)
