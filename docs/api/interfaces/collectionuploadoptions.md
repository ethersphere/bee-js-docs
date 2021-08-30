---
id: "collectionuploadoptions"
title: "Interface: CollectionUploadOptions"
sidebar_label: "CollectionUploadOptions"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`UploadOptions`](uploadoptions.md)

  ↳ **`CollectionUploadOptions`**

## Properties

### axiosOptions

• `Optional` **axiosOptions**: `AxiosRequestConfig`

Alter default options of axios HTTP client

#### Inherited from

[UploadOptions](uploadoptions.md).[axiosOptions](uploadoptions.md#axiosoptions)

#### Defined in

[bee-js/src/types/index.ts:102](https://github.com/ethersphere/bee-js/blob/74056cb/src/types/index.ts#L102)

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

[bee-js/src/types/index.ts:90](https://github.com/ethersphere/bee-js/blob/74056cb/src/types/index.ts#L90)

___

### errorDocument

• `Optional` **errorDocument**: `string`

Configure custom error document to be returned when a specified path can not be found in collection.

**`see`** [Bee docs - Upload a directory](https://docs.ethswarm.org/docs/access-the-swarm/upload-a-directory)

**`see`** [Bee API reference - `POST /bzz`](https://docs.ethswarm.org/api/#tag/File)

#### Defined in

[bee-js/src/types/index.ts:136](https://github.com/ethersphere/bee-js/blob/74056cb/src/types/index.ts#L136)

___

### indexDocument

• `Optional` **indexDocument**: `string`

Default file to be returned when the root hash of collection is accessed.

**`see`** [Bee docs - Upload a directory](https://docs.ethswarm.org/docs/access-the-swarm/upload-a-directory)

**`see`** [Bee API reference - `POST /bzz`](https://docs.ethswarm.org/api/#tag/File)

#### Defined in

[bee-js/src/types/index.ts:128](https://github.com/ethersphere/bee-js/blob/74056cb/src/types/index.ts#L128)

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

[bee-js/src/types/index.ts:79](https://github.com/ethersphere/bee-js/blob/74056cb/src/types/index.ts#L79)

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

[bee-js/src/types/index.ts:99](https://github.com/ethersphere/bee-js/blob/74056cb/src/types/index.ts#L99)
