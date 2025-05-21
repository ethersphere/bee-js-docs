[**@ethersphere/bee-js**](../Overview.md)

***

[@ethersphere/bee-js](../Overview.md) / UploadOptions

# Interface: UploadOptions

Defined in: [bee-js/src/types/index.ts:97](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L97)

## Extended by

- [`RedundantUploadOptions`](RedundantUploadOptions.md)
- [`FileUploadOptions`](FileUploadOptions.md)
- [`CollectionUploadOptions`](CollectionUploadOptions.md)

## Properties

### act?

> `optional` **act**: `boolean`

Defined in: [bee-js/src/types/index.ts:101](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L101)

If set to true, an ACT will be created for the uploaded data.

***

### actHistoryAddress?

> `optional` **actHistoryAddress**: `string` \| `Uint8Array`\<`ArrayBufferLike`\> \| [`Reference`](../classes/Reference.md)

Defined in: [bee-js/src/types/index.ts:103](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L103)

***

### deferred?

> `optional` **deferred**: `boolean`

Defined in: [bee-js/src/types/index.ts:143](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L143)

Determines if the uploaded data should be sent to the network immediately (eq. deferred=false) or in a deferred fashion (eq. deferred=true).

With deferred style client uploads all the data to Bee node first and only then Bee node starts push the data to network itself. The progress of this upload can be tracked with tags.
With non-deferred style client uploads the data to Bee which immediately starts pushing the data to network. The request is only finished once all the data was pushed through the Bee node to the network.

In future there will be move to the non-deferred style and even the support for deferred upload will be removed from Bee itself.

#### Default

```ts
true
```

***

### encrypt?

> `optional` **encrypt**: `boolean`

Defined in: [bee-js/src/types/index.ts:122](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L122)

Will encrypt the uploaded data and return longer hash which also includes the decryption key.

#### See

 - [Bee docs - Store with Encryption](https://docs.ethswarm.org/docs/develop/access-the-swarm/store-with-encryption)
 - [Bee API reference - `POST /bzz`](https://docs.ethswarm.org/api/#tag/BZZ/paths/~1bzz/post)
 - Reference

***

### pin?

> `optional` **pin**: `boolean`

Defined in: [bee-js/src/types/index.ts:113](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L113)

Will pin the data locally in the Bee node as well.

Locally pinned data is possible to reupload to network if it disappear.

#### See

 - [Bee docs - Pinning](https://docs.ethswarm.org/docs/develop/access-the-swarm/pinning)
 - [Bee API reference - `POST /bzz`](https://docs.ethswarm.org/api/#tag/BZZ/paths/~1bzz/post)

***

### tag?

> `optional` **tag**: `number`

Defined in: [bee-js/src/types/index.ts:131](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L131)

Tags keep track of syncing the data with network. This option allows attach existing Tag UUID to the uploaded data.

#### See

 - [Bee API reference - `POST /bzz`](https://docs.ethswarm.org/api/#tag/BZZ/paths/~1bzz/post)
 - [Bee docs - Syncing / Tags](https://docs.ethswarm.org/docs/develop/access-the-swarm/syncing)

#### Link

Tag
