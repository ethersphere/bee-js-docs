# Class: MantarayNode

Defined in: [bee-js/src/manifest/manifest.ts:77](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/manifest/manifest.ts#L77)

bee-js's Bee-client-coupled view of a Mantaray node: the trie structure,
marshaling, and byte-level operations all delegate to core-sdk's
`MantarayNode`; this class only adds what needs a live `Bee` instance
(uploading/downloading, ACT history, feed resolution).

## Constructors

### Constructor

> **new MantarayNode**(`core`): `MantarayNode`

Defined in: [bee-js/src/manifest/manifest.ts:80](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/manifest/manifest.ts#L80)

#### Parameters

##### core

`MantarayNode` = `...`

#### Returns

`MantarayNode`

## Properties

### core

> `readonly` **core**: `MantarayNode`

Defined in: [bee-js/src/manifest/manifest.ts:78](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/manifest/manifest.ts#L78)

## Accessors

### forks

#### Get Signature

> **get** **forks**(): `Map`\<`number`, \{ `node`: `MantarayNode`; `prefix`: `Uint8Array`; \}\>

Defined in: [bee-js/src/manifest/manifest.ts:104](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/manifest/manifest.ts#L104)

##### Returns

`Map`\<`number`, \{ `node`: `MantarayNode`; `prefix`: `Uint8Array`; \}\>

***

### fullPath

#### Get Signature

> **get** **fullPath**(): `Uint8Array`

Defined in: [bee-js/src/manifest/manifest.ts:116](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/manifest/manifest.ts#L116)

##### Returns

`Uint8Array`

***

### fullPathString

#### Get Signature

> **get** **fullPathString**(): `string`

Defined in: [bee-js/src/manifest/manifest.ts:120](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/manifest/manifest.ts#L120)

##### Returns

`string`

***

### metadata

#### Get Signature

> **get** **metadata**(): `Record`\<`string`, `string`\> \| `null` \| `undefined`

Defined in: [bee-js/src/manifest/manifest.ts:96](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/manifest/manifest.ts#L96)

##### Returns

`Record`\<`string`, `string`\> \| `null` \| `undefined`

***

### obfuscationKey

#### Get Signature

> **get** **obfuscationKey**(): `Uint8Array`

Defined in: [bee-js/src/manifest/manifest.ts:84](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/manifest/manifest.ts#L84)

##### Returns

`Uint8Array`

***

### parent

#### Get Signature

> **get** **parent**(): `MantarayNode` \| `null`

Defined in: [bee-js/src/manifest/manifest.ts:108](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/manifest/manifest.ts#L108)

##### Returns

`MantarayNode` \| `null`

***

### path

#### Get Signature

> **get** **path**(): `Uint8Array`

Defined in: [bee-js/src/manifest/manifest.ts:100](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/manifest/manifest.ts#L100)

##### Returns

`Uint8Array`

***

### selfAddress

#### Get Signature

> **get** **selfAddress**(): `Uint8Array`\<`ArrayBufferLike`\> \| `null`

Defined in: [bee-js/src/manifest/manifest.ts:88](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/manifest/manifest.ts#L88)

##### Returns

`Uint8Array`\<`ArrayBufferLike`\> \| `null`

***

### targetAddress

#### Get Signature

> **get** **targetAddress**(): `Uint8Array`

Defined in: [bee-js/src/manifest/manifest.ts:92](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/manifest/manifest.ts#L92)

##### Returns

`Uint8Array`

***

### type

#### Get Signature

> **get** **type**(): `number` \| `null`

Defined in: [bee-js/src/manifest/manifest.ts:112](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/manifest/manifest.ts#L112)

##### Returns

`number` \| `null`

## Methods

### addFork()

> **addFork**(`path`, `reference`, `metadata?`): `void`

Defined in: [bee-js/src/manifest/manifest.ts:212](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/manifest/manifest.ts#L212)

Adds a fork to the node.

#### Parameters

##### path

`string` | `Uint8Array`\<`ArrayBufferLike`\>

##### reference

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Bytes`](Bytes.md) | [`Reference`](Reference.md)

##### metadata?

`Record`\<`string`, `string`\> | `null`

#### Returns

`void`

***

### calculateSelfAddress()

> **calculateSelfAddress**(): `Promise`\<[`Reference`](Reference.md)\>

Defined in: [bee-js/src/manifest/manifest.ts:230](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/manifest/manifest.ts#L230)

Calculates the self address of the node.

#### Returns

`Promise`\<[`Reference`](Reference.md)\>

***

### collect()

> **collect**(`nodes`): `MantarayNode`[]

Defined in: [bee-js/src/manifest/manifest.ts:272](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/manifest/manifest.ts#L272)

Returns an array of all nodes in the tree which have a target address set.

Must be called after `loadRecursively`.

#### Parameters

##### nodes

`MantarayNode`[] = `[]`

#### Returns

`MantarayNode`[]

***

### collectAndMap()

> **collectAndMap**(): `Record`\<`string`, `string`\>

Defined in: [bee-js/src/manifest/manifest.ts:281](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/manifest/manifest.ts#L281)

Returns a path:reference map of all nodes in the tree which have a target address set.

Must be called after `loadRecursively`.

#### Returns

`Record`\<`string`, `string`\>

***

### determineType()

> **determineType**(): `number`

Defined in: [bee-js/src/manifest/manifest.ts:285](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/manifest/manifest.ts#L285)

#### Returns

`number`

***

### find()

> **find**(`path`): `MantarayNode` \| `null`

Defined in: [bee-js/src/manifest/manifest.ts:256](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/manifest/manifest.ts#L256)

Finds a node in the tree by its path.

#### Parameters

##### path

`string` | `Uint8Array`\<`ArrayBufferLike`\>

#### Returns

`MantarayNode` \| `null`

***

### findClosest()

> **findClosest**(`path`, `current?`): \[`MantarayNode`, `Uint8Array`\<`ArrayBufferLike`\>\]

Defined in: [bee-js/src/manifest/manifest.ts:263](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/manifest/manifest.ts#L263)

Finds the closest node in the tree to the given path.

#### Parameters

##### path

`string` | `Uint8Array`\<`ArrayBufferLike`\>

##### current?

`Uint8Array`\<`ArrayBufferLike`\>

#### Returns

\[`MantarayNode`, `Uint8Array`\<`ArrayBufferLike`\>\]

***

### getDocsMetadata()

> **getDocsMetadata**(): `object`

Defined in: [bee-js/src/manifest/manifest.ts:140](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/manifest/manifest.ts#L140)

Returns the `swarm-index-document` and `swarm-error-document` metadata values.

#### Returns

`object`

##### errorDocument

> **errorDocument**: `string` \| `null`

##### indexDocument

> **indexDocument**: `string` \| `null`

***

### getRootMetadata()

> **getRootMetadata**(): `Optional`\<`Record`\<`string`, `string`\>\>

Defined in: [bee-js/src/manifest/manifest.ts:127](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/manifest/manifest.ts#L127)

Returns the metadata at the `/` path to access idiomatic properties.

#### Returns

`Optional`\<`Record`\<`string`, `string`\>\>

***

### loadRecursively()

> **loadRecursively**(`bee`, `options?`, `requestOptions?`): `Promise`\<`void`\>

Defined in: [bee-js/src/manifest/manifest.ts:249](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/manifest/manifest.ts#L249)

Loads the node and its children recursively.

#### Parameters

##### bee

[`Bee`](Bee.md)

##### options?

[`DownloadOptions`](../interfaces/DownloadOptions.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<`void`\>

***

### marshal()

> **marshal**(): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Defined in: [bee-js/src/manifest/manifest.ts:179](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/manifest/manifest.ts#L179)

Gets the binary representation of the node.

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

***

### removeFork()

> **removeFork**(`path`): `void`

Defined in: [bee-js/src/manifest/manifest.ts:223](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/manifest/manifest.ts#L223)

Removes a fork from the node.

#### Parameters

##### path

`string` | `Uint8Array`\<`ArrayBufferLike`\>

#### Returns

`void`

***

### resolveFeed()

> **resolveFeed**(`bee`, `requestOptions?`): `Promise`\<`Optional`\<`FeedPayloadResult`\>\>

Defined in: [bee-js/src/manifest/manifest.ts:159](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/manifest/manifest.ts#L159)

Attempts to resolve the manifest as a feed, returning the latest update.

#### Parameters

##### bee

[`Bee`](Bee.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<`Optional`\<`FeedPayloadResult`\>\>

***

### saveRecursively()

> **saveRecursively**(`bee`, `postageBatchId`, `options?`, `requestOptions?`): `Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

Defined in: [bee-js/src/manifest/manifest.ts:237](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/manifest/manifest.ts#L237)

Saves the node and its children recursively.

#### Parameters

##### bee

[`Bee`](Bee.md)

##### postageBatchId

`string` | [`BatchId`](BatchId.md)

##### options?

[`UploadOptions`](../interfaces/UploadOptions.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

***

### unmarshal()

> `static` **unmarshal**(`bee`, `reference`, `options?`, `requestOptions?`): `Promise`\<`MantarayNode`\>

Defined in: [bee-js/src/manifest/manifest.ts:188](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/manifest/manifest.ts#L188)

Downloads and unmarshals a MantarayNode from the given reference.

Do not forget calling `loadRecursively` on the returned node to load the entire tree.

#### Parameters

##### bee

[`Bee`](Bee.md)

##### reference

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](Reference.md)

##### options?

[`DownloadOptions`](../interfaces/DownloadOptions.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<`MantarayNode`\>

***

### unmarshalFromData()

> `static` **unmarshalFromData**(`data`, `selfAddress`): `MantarayNode`

Defined in: [bee-js/src/manifest/manifest.ts:205](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/manifest/manifest.ts#L205)

Unmarshals a MantarayNode from the given data.

Do not forget calling `loadRecursively` on the returned node to load the entire tree.

#### Parameters

##### data

`Uint8Array`

##### selfAddress

`Uint8Array`

#### Returns

`MantarayNode`
