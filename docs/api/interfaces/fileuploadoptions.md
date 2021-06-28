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

### axiosOptions

• `Optional` **axiosOptions**: `AxiosRequestConfig`

Alter default options of axios HTTP client

#### Inherited from

[UploadOptions](uploadoptions.md).[axiosOptions](uploadoptions.md#axiosoptions)

#### Defined in

[bee-js/src/types/index.ts:99](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/types/index.ts#L99)

___

### contentType

• `Optional` **contentType**: `string`

Specifies given Content-Type so when loaded in browser the file is correctly represented.

**`see`** [Bee API reference - `POST /bzz`](https://docs.ethswarm.org/api/#tag/File)

#### Defined in

[bee-js/src/types/index.ts:115](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/types/index.ts#L115)

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

[bee-js/src/types/index.ts:87](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/types/index.ts#L87)

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

[bee-js/src/types/index.ts:76](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/types/index.ts#L76)

___

### size

• `Optional` **size**: `number`

Specifies Content-Length for the given data. It is required when uploading with Readable.

**`see`** [Bee API reference - `POST /bzz`](https://docs.ethswarm.org/api/#tag/File)

#### Defined in

[bee-js/src/types/index.ts:108](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/types/index.ts#L108)

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

[bee-js/src/types/index.ts:96](https://github.com/ethersphere/bee-js/blob/0e69ca1/src/types/index.ts#L96)
