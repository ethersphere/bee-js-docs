---
id: "fileuploadoptions"
title: "Interface: FileUploadOptions"
sidebar_label: "FileUploadOptions"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`UploadOptions`](uploadoptions.md)

  ↳ **`FileUploadOptions`**

## Properties

### contentType

• `Optional` **contentType**: `string`

Specifies given Content-Type so when loaded in browser the file is correctly represented.

**`see`** [Bee API reference - `POST /bzz`](https://docs.ethswarm.org/api/#tag/File)

#### Defined in

[bee-js/src/types/index.ts:185](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L185)

___

### encrypt

• `Optional` **encrypt**: `boolean`

Will encrypt the uploaded data and return longer hash which also includes the decryption key.

**Warning! Not allowed when node is in Gateway mode!**

**`see`** [Bee docs - Store with Encryption](https://docs.ethswarm.org/docs/access-the-swarm/store-with-encryption)

**`see`** [Bee API reference - `POST /bzz`](https://docs.ethswarm.org/api/#tag/Collection/paths/~1bzz/post)

**`see`** Reference

#### Inherited from

[UploadOptions](uploadoptions.md).[encrypt](uploadoptions.md#encrypt)

#### Defined in

[bee-js/src/types/index.ts:160](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L160)

___

### fetch

• `Optional` **fetch**: `Fetch`

User defined Fetch compatible function

#### Inherited from

[UploadOptions](uploadoptions.md).[fetch](uploadoptions.md#fetch)

#### Defined in

[bee-js/src/types/index.ts:92](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L92)

___

### pin

• `Optional` **pin**: `boolean`

Will pin the data locally in the Bee node as well.

Locally pinned data is possible to reupload to network if it disappear.

**Warning! Not allowed when node is in Gateway mode!**

**`see`** [Bee docs - Pinning](https://docs.ethswarm.org/docs/access-the-swarm/pinning)

**`see`** [Bee API reference - `POST /bzz`](https://docs.ethswarm.org/api/#tag/Collection/paths/~1bzz/post)

#### Inherited from

[UploadOptions](uploadoptions.md).[pin](uploadoptions.md#pin)

#### Defined in

[bee-js/src/types/index.ts:149](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L149)

___

### retry

• `Optional` **retry**: `number`

Configure backoff mechanism for requests retries.
Specifies how many retries will be performed before failing a request.
Retries are performed for GET, PUT, HEAD, DELETE, OPTIONS and TRACE requests.
Default is 2.

#### Inherited from

[UploadOptions](uploadoptions.md).[retry](uploadoptions.md#retry)

#### Defined in

[bee-js/src/types/index.ts:87](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L87)

___

### size

• `Optional` **size**: `number`

Specifies Content-Length for the given data. It is required when uploading with Readable.

**`see`** [Bee API reference - `POST /bzz`](https://docs.ethswarm.org/api/#tag/File)

#### Defined in

[bee-js/src/types/index.ts:178](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L178)

___

### tag

• `Optional` **tag**: `number`

Tags keep track of syncing the data with network. This option allows attach existing Tag UUID to the uploaded data.

**`see`** [Bee API reference - `POST /bzz`](https://docs.ethswarm.org/api/#tag/Collection/paths/~1bzz/post)

**`see`** [Bee docs - Syncing / Tags](https://docs.ethswarm.org/docs/access-the-swarm/syncing)

**`link`** Tag

#### Inherited from

[UploadOptions](uploadoptions.md).[tag](uploadoptions.md#tag)

#### Defined in

[bee-js/src/types/index.ts:169](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L169)

___

### timeout

• `Optional` **timeout**: `number`

Timeout of requests in milliseconds

#### Inherited from

[UploadOptions](uploadoptions.md).[timeout](uploadoptions.md#timeout)

#### Defined in

[bee-js/src/types/index.ts:79](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L79)
