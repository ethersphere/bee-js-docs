# Interface: CollectionUploadOptions

Defined in: [bee-js/src/types/index.ts:252](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L252)

## Extends

- [`UploadOptions`](UploadOptions.md)

## Properties

### act?

> `optional` **act**: `boolean`

Defined in: [bee-js/src/types/index.ts:127](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L127)

If set to true, an ACT will be created for the uploaded data.

#### Inherited from

[`UploadOptions`](UploadOptions.md).[`act`](UploadOptions.md#act)

***

### actHistoryAddress?

> `optional` **actHistoryAddress**: `string` \| `Uint8Array`\<`ArrayBufferLike`\> \| [`Reference`](../classes/Reference.md)

Defined in: [bee-js/src/types/index.ts:129](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L129)

#### Inherited from

[`UploadOptions`](UploadOptions.md).[`actHistoryAddress`](UploadOptions.md#acthistoryaddress)

***

### deferred?

> `optional` **deferred**: `boolean`

Defined in: [bee-js/src/types/index.ts:169](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L169)

Determines if the uploaded data should be sent to the network immediately (eq. deferred=false) or in a deferred fashion (eq. deferred=true).

With deferred style client uploads all the data to Bee node first and only then Bee node starts push the data to network itself. The progress of this upload can be tracked with tags.
With non-deferred style client uploads the data to Bee which immediately starts pushing the data to network. The request is only finished once all the data was pushed through the Bee node to the network.

In future there will be move to the non-deferred style and even the support for deferred upload will be removed from Bee itself.

#### Default

```ts
true
```

#### Inherited from

[`UploadOptions`](UploadOptions.md).[`deferred`](UploadOptions.md#deferred)

***

### encrypt?

> `optional` **encrypt**: `boolean`

Defined in: [bee-js/src/types/index.ts:148](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L148)

Will encrypt the uploaded data and return longer hash which also includes the decryption key.

#### See

 - [Bee docs - Store with Encryption](https://docs.ethswarm.org/docs/develop/access-the-swarm/store-with-encryption)
 - [Bee API reference - `POST /bzz`](https://docs.ethswarm.org/api/#tag/BZZ/paths/~1bzz/post)
 - Reference

#### Inherited from

[`UploadOptions`](UploadOptions.md).[`encrypt`](UploadOptions.md#encrypt)

***

### errorDocument?

> `optional` **errorDocument**: `string`

Defined in: [bee-js/src/types/index.ts:267](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L267)

Configure custom error document to be returned when a specified path can not be found in collection.

#### See

 - [Bee docs - Upload a directory](https://docs.ethswarm.org/docs/develop/access-the-swarm/upload-and-download#upload-a-directory)
 - [Bee API reference - `POST /bzz`](https://docs.ethswarm.org/api/#tag/BZZ/paths/~1bzz/post)

***

### indexDocument?

> `optional` **indexDocument**: `string`

Defined in: [bee-js/src/types/index.ts:259](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L259)

Default file to be returned when the root hash of collection is accessed.

#### See

 - [Bee docs - Upload a directory](https://docs.ethswarm.org/docs/develop/access-the-swarm/upload-and-download#upload-a-directory)
 - [Bee API reference - `POST /bzz`](https://docs.ethswarm.org/api/#tag/BZZ/paths/~1bzz/post)

***

### pin?

> `optional` **pin**: `boolean`

Defined in: [bee-js/src/types/index.ts:139](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L139)

Will pin the data locally in the Bee node as well.

Locally pinned data is possible to reupload to network if it disappear.

#### See

 - [Bee docs - Pinning](https://docs.ethswarm.org/docs/develop/access-the-swarm/pinning)
 - [Bee API reference - `POST /bzz`](https://docs.ethswarm.org/api/#tag/BZZ/paths/~1bzz/post)

#### Inherited from

[`UploadOptions`](UploadOptions.md).[`pin`](UploadOptions.md#pin)

***

### redundancyLevel?

> `optional` **redundancyLevel**: [`RedundancyLevel`](../enumerations/RedundancyLevel.md)

Defined in: [bee-js/src/types/index.ts:269](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L269)

***

### tag?

> `optional` **tag**: `number`

Defined in: [bee-js/src/types/index.ts:157](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L157)

Tags keep track of syncing the data with network. This option allows attach existing Tag UUID to the uploaded data.

#### See

 - [Bee API reference - `POST /bzz`](https://docs.ethswarm.org/api/#tag/BZZ/paths/~1bzz/post)
 - [Bee docs - Syncing / Tags](https://docs.ethswarm.org/docs/develop/access-the-swarm/syncing)

#### Link

Tag

#### Inherited from

[`UploadOptions`](UploadOptions.md).[`tag`](UploadOptions.md#tag)
