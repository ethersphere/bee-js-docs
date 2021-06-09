---
id: "socwriter"
title: "Interface: SOCWriter"
sidebar_label: "SOCWriter"
custom_edit_url: null
hide_title: true
---

# Interface: SOCWriter

Interface for downloading and uploading single owner chunks

## Hierarchy

* [*SOCReader*](socreader.md)

  ↳ **SOCWriter**

## Properties

### download

• **download**: (`identifier`: Identifier) =\> *Promise*<SingleOwnerChunk\>

Downloads a single owner chunk

**`param`** The identifier of the chunk

#### Type declaration:

▸ (`identifier`: Identifier): *Promise*<SingleOwnerChunk\>

#### Parameters:

Name | Type |
:------ | :------ |
`identifier` | Identifier |

**Returns:** *Promise*<SingleOwnerChunk\>

Defined in: [bee-js/src/types/index.ts:220](https://github.com/ethersphere/bee-js/blob/430becc/src/types/index.ts#L220)

Inherited from: [SOCReader](socreader.md).[download](socreader.md#download)

Defined in: [bee-js/src/types/index.ts:220](https://github.com/ethersphere/bee-js/blob/430becc/src/types/index.ts#L220)

___

### upload

• **upload**: (`postageBatchId`: *string* \| [*BatchId*](../types/batchid.md), `identifier`: Identifier, `data`: *Uint8Array*, `options?`: [*UploadOptions*](uploadoptions.md)) =\> *Promise*<[*Reference*](../types/reference.md)\>

Uploads a single owner chunk

**`param`** The identifier of the chunk

**`param`** The chunk payload data

**`param`** Upload options

#### Type declaration:

▸ (`postageBatchId`: *string* \| [*BatchId*](../types/batchid.md), `identifier`: Identifier, `data`: *Uint8Array*, `options?`: [*UploadOptions*](uploadoptions.md)): *Promise*<[*Reference*](../types/reference.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`postageBatchId` | *string* \| [*BatchId*](../types/batchid.md) |
`identifier` | Identifier |
`data` | *Uint8Array* |
`options?` | [*UploadOptions*](uploadoptions.md) |

**Returns:** *Promise*<[*Reference*](../types/reference.md)\>

Defined in: [bee-js/src/types/index.ts:234](https://github.com/ethersphere/bee-js/blob/430becc/src/types/index.ts#L234)

Defined in: [bee-js/src/types/index.ts:234](https://github.com/ethersphere/bee-js/blob/430becc/src/types/index.ts#L234)
