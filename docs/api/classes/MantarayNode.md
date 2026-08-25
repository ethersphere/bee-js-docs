# Class: MantarayNode

Defined in: [bee-js/src/manifest/manifest.ts:79](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/manifest/manifest.ts#L79)

bee-js's Bee-client-coupled view of a Mantaray node: the trie structure,
marshaling, and byte-level operations all delegate to core-sdk's
`MantarayNode`; this class only adds what needs a live `Bee` instance
(uploading/downloading, ACT history, feed resolution).

## Constructors

### Constructor

> **new MantarayNode**(`core`): `MantarayNode`

Defined in: [bee-js/src/manifest/manifest.ts:82](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/manifest/manifest.ts#L82)

#### Parameters

##### core

`MantarayNode` = `...`

#### Returns

`MantarayNode`

## Properties

### core

> `readonly` **core**: `MantarayNode`

Defined in: [bee-js/src/manifest/manifest.ts:80](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/manifest/manifest.ts#L80)

## Accessors

### forks

#### Get Signature

> **get** **forks**(): `Map`\<`number`, \{ `node`: `MantarayNode`; `prefix`: `Uint8Array`; \}\>

Defined in: [bee-js/src/manifest/manifest.ts:106](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/manifest/manifest.ts#L106)

##### Returns

`Map`\<`number`, \{ `node`: `MantarayNode`; `prefix`: `Uint8Array`; \}\>

***

### fullPath

#### Get Signature

> **get** **fullPath**(): `Uint8Array`

Defined in: [bee-js/src/manifest/manifest.ts:118](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/manifest/manifest.ts#L118)

##### Returns

`Uint8Array`

***

### fullPathString

#### Get Signature

> **get** **fullPathString**(): `string`

Defined in: [bee-js/src/manifest/manifest.ts:122](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/manifest/manifest.ts#L122)

##### Returns

`string`

***

### metadata

#### Get Signature

> **get** **metadata**(): `Record`\<`string`, `string`\> \| `null` \| `undefined`

Defined in: [bee-js/src/manifest/manifest.ts:98](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/manifest/manifest.ts#L98)

##### Returns

`Record`\<`string`, `string`\> \| `null` \| `undefined`

***

### obfuscationKey

#### Get Signature

> **get** **obfuscationKey**(): `Uint8Array`

Defined in: [bee-js/src/manifest/manifest.ts:86](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/manifest/manifest.ts#L86)

##### Returns

`Uint8Array`

***

### parent

#### Get Signature

> **get** **parent**(): `MantarayNode` \| `null`

Defined in: [bee-js/src/manifest/manifest.ts:110](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/manifest/manifest.ts#L110)

##### Returns

`MantarayNode` \| `null`

***

### path

#### Get Signature

> **get** **path**(): `Uint8Array`

Defined in: [bee-js/src/manifest/manifest.ts:102](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/manifest/manifest.ts#L102)

##### Returns

`Uint8Array`

***

### selfAddress

#### Get Signature

> **get** **selfAddress**(): `Uint8Array`\<`ArrayBufferLike`\> \| `null`

Defined in: [bee-js/src/manifest/manifest.ts:90](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/manifest/manifest.ts#L90)

##### Returns

`Uint8Array`\<`ArrayBufferLike`\> \| `null`

***

### targetAddress

#### Get Signature

> **get** **targetAddress**(): `Uint8Array`

Defined in: [bee-js/src/manifest/manifest.ts:94](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/manifest/manifest.ts#L94)

##### Returns

`Uint8Array`

***

### type

#### Get Signature

> **get** **type**(): `number` \| `null`

Defined in: [bee-js/src/manifest/manifest.ts:114](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/manifest/manifest.ts#L114)

##### Returns

`number` \| `null`

## Methods

### addFork()

> **addFork**(`path`, `reference`, `metadata?`): `void`

Defined in: [bee-js/src/manifest/manifest.ts:214](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/manifest/manifest.ts#L214)

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

Defined in: [bee-js/src/manifest/manifest.ts:232](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/manifest/manifest.ts#L232)

Calculates the self address of the node.

#### Returns

`Promise`\<[`Reference`](Reference.md)\>

***

### collect()

> **collect**(`nodes`): `MantarayNode`[]

Defined in: [bee-js/src/manifest/manifest.ts:274](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/manifest/manifest.ts#L274)

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

Defined in: [bee-js/src/manifest/manifest.ts:283](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/manifest/manifest.ts#L283)

Returns a path:reference map of all nodes in the tree which have a target address set.

Must be called after `loadRecursively`.

#### Returns

`Record`\<`string`, `string`\>

***

### determineType()

> **determineType**(): `number`

Defined in: [bee-js/src/manifest/manifest.ts:287](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/manifest/manifest.ts#L287)

#### Returns

`number`

***

### find()

> **find**(`path`): `MantarayNode` \| `null`

Defined in: [bee-js/src/manifest/manifest.ts:258](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/manifest/manifest.ts#L258)

Finds a node in the tree by its path.

#### Parameters

##### path

`string` | `Uint8Array`\<`ArrayBufferLike`\>

#### Returns

`MantarayNode` \| `null`

***

### findClosest()

> **findClosest**(`path`, `current?`): \[`MantarayNode`, `Uint8Array`\<`ArrayBufferLike`\>\]

Defined in: [bee-js/src/manifest/manifest.ts:265](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/manifest/manifest.ts#L265)

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

Defined in: [bee-js/src/manifest/manifest.ts:142](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/manifest/manifest.ts#L142)

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

Defined in: [bee-js/src/manifest/manifest.ts:129](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/manifest/manifest.ts#L129)

Returns the metadata at the `/` path to access idiomatic properties.

#### Returns

`Optional`\<`Record`\<`string`, `string`\>\>

***

### loadRecursively()

> **loadRecursively**(`bee`, `options?`, `requestOptions?`): `Promise`\<`void`\>

Defined in: [bee-js/src/manifest/manifest.ts:251](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/manifest/manifest.ts#L251)

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

Defined in: [bee-js/src/manifest/manifest.ts:181](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/manifest/manifest.ts#L181)

Gets the binary representation of the node.

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

***

### removeFork()

> **removeFork**(`path`): `void`

Defined in: [bee-js/src/manifest/manifest.ts:225](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/manifest/manifest.ts#L225)

Removes a fork from the node.

#### Parameters

##### path

`string` | `Uint8Array`\<`ArrayBufferLike`\>

#### Returns

`void`

***

### resolveFeed()

> **resolveFeed**(`bee`, `requestOptions?`): `Promise`\<`Optional`\<`FeedPayloadResult`\>\>

Defined in: [bee-js/src/manifest/manifest.ts:161](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/manifest/manifest.ts#L161)

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

Defined in: [bee-js/src/manifest/manifest.ts:239](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/manifest/manifest.ts#L239)

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

Defined in: [bee-js/src/manifest/manifest.ts:190](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/manifest/manifest.ts#L190)

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

Defined in: [bee-js/src/manifest/manifest.ts:207](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/manifest/manifest.ts#L207)

Unmarshals a MantarayNode from the given data.

Do not forget calling `loadRecursively` on the returned node to load the entire tree.

#### Parameters

##### data

`Uint8Array`

##### selfAddress

`Uint8Array`

#### Returns

`MantarayNode`
