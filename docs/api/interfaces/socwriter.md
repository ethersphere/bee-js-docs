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

Defined in: [bee-js/src/types/index.ts:175](https://github.com/ethersphere/bee-js/blob/0ac3a7d/src/types/index.ts#L175)

Inherited from: [SOCReader](socreader.md).[download](socreader.md#download)

Defined in: [bee-js/src/types/index.ts:175](https://github.com/ethersphere/bee-js/blob/0ac3a7d/src/types/index.ts#L175)

___

### upload

• **upload**: (`identifier`: Identifier, `data`: *Uint8Array*, `options?`: [*UploadOptions*](uploadoptions.md)) =\> *Promise*<[*ReferenceResponse*](referenceresponse.md)\>

Uploads a single owner chunk

**`param`** The identifier of the chunk

**`param`** The chunk payload data

**`param`** Upload options

#### Type declaration:

▸ (`identifier`: Identifier, `data`: *Uint8Array*, `options?`: [*UploadOptions*](uploadoptions.md)): *Promise*<[*ReferenceResponse*](referenceresponse.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`identifier` | Identifier |
`data` | *Uint8Array* |
`options?` | [*UploadOptions*](uploadoptions.md) |

**Returns:** *Promise*<[*ReferenceResponse*](referenceresponse.md)\>

Defined in: [bee-js/src/types/index.ts:189](https://github.com/ethersphere/bee-js/blob/0ac3a7d/src/types/index.ts#L189)

Defined in: [bee-js/src/types/index.ts:189](https://github.com/ethersphere/bee-js/blob/0ac3a7d/src/types/index.ts#L189)