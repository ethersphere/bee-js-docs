[**@ethersphere/bee-js**](../Overview.md)

***

[@ethersphere/bee-js](../Overview.md) / MantarayNode

# Class: MantarayNode

Defined in: [bee-js/src/manifest/manifest.ts:121](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/manifest/manifest.ts#L121)

## Constructors

### Constructor

> **new MantarayNode**(`options?`): `MantarayNode`

Defined in: [bee-js/src/manifest/manifest.ts:130](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/manifest/manifest.ts#L130)

#### Parameters

##### options?

`MantarayNodeOptions`

#### Returns

`MantarayNode`

## Properties

### forks

> **forks**: `Map`\<`number`, `Fork`\>

Defined in: [bee-js/src/manifest/manifest.ts:127](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/manifest/manifest.ts#L127)

***

### metadata

> **metadata**: `undefined` \| `null` \| `Record`\<`string`, `string`\> = `null`

Defined in: [bee-js/src/manifest/manifest.ts:125](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/manifest/manifest.ts#L125)

***

### obfuscationKey

> **obfuscationKey**: `Uint8Array`

Defined in: [bee-js/src/manifest/manifest.ts:122](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/manifest/manifest.ts#L122)

***

### parent

> **parent**: `null` \| `MantarayNode` = `null`

Defined in: [bee-js/src/manifest/manifest.ts:128](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/manifest/manifest.ts#L128)

***

### path

> **path**: `Uint8Array`

Defined in: [bee-js/src/manifest/manifest.ts:126](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/manifest/manifest.ts#L126)

***

### selfAddress

> **selfAddress**: `null` \| `Uint8Array`\<`ArrayBufferLike`\> = `null`

Defined in: [bee-js/src/manifest/manifest.ts:123](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/manifest/manifest.ts#L123)

***

### targetAddress

> **targetAddress**: `Uint8Array`

Defined in: [bee-js/src/manifest/manifest.ts:124](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/manifest/manifest.ts#L124)

## Accessors

### fullPath

#### Get Signature

> **get** **fullPath**(): `Uint8Array`

Defined in: [bee-js/src/manifest/manifest.ts:156](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/manifest/manifest.ts#L156)

##### Returns

`Uint8Array`

***

### fullPathString

#### Get Signature

> **get** **fullPathString**(): `string`

Defined in: [bee-js/src/manifest/manifest.ts:160](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/manifest/manifest.ts#L160)

##### Returns

`string`

## Methods

### addFork()

> **addFork**(`path`, `reference`, `metadata?`): `void`

Defined in: [bee-js/src/manifest/manifest.ts:307](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/manifest/manifest.ts#L307)

Adds a fork to the node.

#### Parameters

##### path

`string` | `Uint8Array`\<`ArrayBufferLike`\>

##### reference

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Bytes`](Bytes.md) | [`Reference`](Reference.md)

##### metadata?

`null` | `Record`\<`string`, `string`\>

#### Returns

`void`

***

### calculateSelfAddress()

> **calculateSelfAddress**(): `Promise`\<[`Reference`](Reference.md)\>

Defined in: [bee-js/src/manifest/manifest.ts:387](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/manifest/manifest.ts#L387)

Calculates the self address of the node.

#### Returns

`Promise`\<[`Reference`](Reference.md)\>

***

### collect()

> **collect**(`nodes`): `MantarayNode`[]

Defined in: [bee-js/src/manifest/manifest.ts:463](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/manifest/manifest.ts#L463)

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

Defined in: [bee-js/src/manifest/manifest.ts:479](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/manifest/manifest.ts#L479)

Returns a path:reference map of all nodes in the tree which have a target address set.

Must be called after `loadRecursively`.

#### Returns

`Record`\<`string`, `string`\>

***

### determineType()

> **determineType**(): `number`

Defined in: [bee-js/src/manifest/manifest.ts:490](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/manifest/manifest.ts#L490)

#### Returns

`number`

***

### find()

> **find**(`path`): `null` \| `MantarayNode`

Defined in: [bee-js/src/manifest/manifest.ts:433](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/manifest/manifest.ts#L433)

Finds a node in the tree by its path.

#### Parameters

##### path

`string` | `Uint8Array`\<`ArrayBufferLike`\>

#### Returns

`null` \| `MantarayNode`

***

### findClosest()

> **findClosest**(`path`, `current`): \[`MantarayNode`, `Uint8Array`\<`ArrayBufferLike`\>\]

Defined in: [bee-js/src/manifest/manifest.ts:442](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/manifest/manifest.ts#L442)

Finds the closest node in the tree to the given path.

#### Parameters

##### path

`string` | `Uint8Array`\<`ArrayBufferLike`\>

##### current

`Uint8Array` = `...`

#### Returns

\[`MantarayNode`, `Uint8Array`\<`ArrayBufferLike`\>\]

***

### getDocsMetadata()

> **getDocsMetadata**(): `object`

Defined in: [bee-js/src/manifest/manifest.ts:180](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/manifest/manifest.ts#L180)

Returns the `swarm-index-document` and `swarm-error-document` metadata values.

#### Returns

`object`

##### errorDocument

> **errorDocument**: `null` \| `string`

##### indexDocument

> **indexDocument**: `null` \| `string`

***

### getRootMetadata()

> **getRootMetadata**(): `Optional`\<`Record`\<`string`, `string`\>\>

Defined in: [bee-js/src/manifest/manifest.ts:167](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/manifest/manifest.ts#L167)

Returns the metadata at the `/` path to access idiomatic properties.

#### Returns

`Optional`\<`Record`\<`string`, `string`\>\>

***

### loadRecursively()

> **loadRecursively**(`bee`, `options?`, `requestOptions?`): `Promise`\<`void`\>

Defined in: [bee-js/src/manifest/manifest.ts:416](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/manifest/manifest.ts#L416)

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

Defined in: [bee-js/src/manifest/manifest.ts:219](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/manifest/manifest.ts#L219)

Gets the binary representation of the node.

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

***

### removeFork()

> **removeFork**(`path`): `void`

Defined in: [bee-js/src/manifest/manifest.ts:362](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/manifest/manifest.ts#L362)

Removes a fork from the node.

#### Parameters

##### path

`string` | `Uint8Array`\<`ArrayBufferLike`\>

#### Returns

`void`

***

### resolveFeed()

> **resolveFeed**(`bee`, `requestOptions?`): `Promise`\<`Optional`\<`FeedPayloadResult`\>\>

Defined in: [bee-js/src/manifest/manifest.ts:199](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/manifest/manifest.ts#L199)

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

Defined in: [bee-js/src/manifest/manifest.ts:398](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/manifest/manifest.ts#L398)

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

Defined in: [bee-js/src/manifest/manifest.ts:263](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/manifest/manifest.ts#L263)

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

Defined in: [bee-js/src/manifest/manifest.ts:280](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/manifest/manifest.ts#L280)

Unmarshals a MantarayNode from the given data.

Do not forget calling `loadRecursively` on the returned node to load the entire tree.

#### Parameters

##### data

`Uint8Array`

##### selfAddress

`Uint8Array`

#### Returns

`MantarayNode`
