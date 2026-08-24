# Class: Feed

Defined in: [bee-js/src/modules/feed.ts:17](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/feed.ts#L17)

Feed operations.

Accessed as `bee.feed`. Delegates to the feed subsystem (`src/feed`).

## Constructors

### Constructor

> **new Feed**(`context`): `Feed`

Defined in: [bee-js/src/modules/feed.ts:18](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/feed.ts#L18)

#### Parameters

##### context

`BeeContext`

#### Returns

`Feed`

## Methods

### createManifest()

> **createManifest**(`postageBatchId`, `topic`, `owner`, `options?`, `requestOptions?`): `Promise`\<[`Reference`](../classes/Reference.md)\>

Defined in: [bee-js/src/modules/feed.ts:69](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/feed.ts#L69)

Creates a feed manifest chunk and returns the reference to it.

#### Parameters

##### postageBatchId

Postage BatchId to be used to create the Feed Manifest

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](../classes/BatchId.md)

##### topic

Topic in hex or bytes

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Topic`](../classes/Topic.md)

##### owner

Owner's ethereum address in hex or bytes

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`EthAddress`](../classes/EthAddress.md)

##### options?

[`UploadOptions`](../interfaces/UploadOptions.md)

Options that affect the request behavior

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`Reference`](../classes/Reference.md)\>

***

### fetchLatestUpdate()

> **fetchLatestUpdate**(`topic`, `owner`, `requestOptions?`): `Promise`\<`FeedPayloadResult`\>

Defined in: [bee-js/src/modules/feed.ts:100](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/feed.ts#L100)

Fetches the latest feed update.

#### Parameters

##### topic

Topic in hex or bytes

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Topic`](../classes/Topic.md)

##### owner

Owner's ethereum address in hex or bytes

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`EthAddress`](../classes/EthAddress.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<`FeedPayloadResult`\>

***

### isRetrievable()

> **isRetrievable**(`owner`, `topic`, `index?`, `options?`, `requestOptions?`): `Promise`\<`boolean`\>

Defined in: [bee-js/src/modules/feed.ts:121](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/feed.ts#L121)

Validates whether a feed is retrievable in the network.

#### Parameters

##### owner

Owner's ethereum address in hex or bytes

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`EthAddress`](../classes/EthAddress.md)

##### topic

Topic in hex or bytes

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Topic`](../classes/Topic.md)

##### index?

[`FeedIndex`](../classes/FeedIndex.md)

Optional feed index

##### options?

[`DownloadOptions`](../interfaces/DownloadOptions.md)

Download options

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<`boolean`\>

***

### makeReader()

> **makeReader**(`topic`, `owner`, `requestOptions?`): [`FeedReader`](../interfaces/FeedReader.md)

Defined in: [bee-js/src/modules/feed.ts:27](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/feed.ts#L27)

Makes a new feed reader for downloading feed updates.

#### Parameters

##### topic

Topic in hex or bytes

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Topic`](../classes/Topic.md)

##### owner

Owner's ethereum address in hex or bytes

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`EthAddress`](../classes/EthAddress.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

[`FeedReader`](../interfaces/FeedReader.md)

***

### makeWriter()

> **makeWriter**(`topic`, `signer?`, `requestOptions?`): [`FeedWriter`](../interfaces/FeedWriter.md)

Defined in: [bee-js/src/modules/feed.ts:46](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/feed.ts#L46)

Makes a new feed writer for updating feeds.

#### Parameters

##### topic

Topic in hex or bytes

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Topic`](../classes/Topic.md)

##### signer?

The signer's private key. Falls back to the Bee instance signer.

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`PrivateKey`](../classes/PrivateKey.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

[`FeedWriter`](../interfaces/FeedWriter.md)
