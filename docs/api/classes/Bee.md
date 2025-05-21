[**@ethersphere/bee-js**](../Overview.md)

***

[@ethersphere/bee-js](../Overview.md) / Bee

# Class: Bee

Defined in: [bee-js/src/bee.ts:142](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L142)

The main component that abstracts operations available on the main Bee API.

Not all methods are always available as it depends in what mode is Bee node launched in.
For example gateway mode and light node mode has only limited set of endpoints enabled.

## Extended by

- [`BeeDev`](BeeDev.md)

## Constructors

### Constructor

> **new Bee**(`url`, `options?`): `Bee`

Defined in: [bee-js/src/bee.ts:168](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L168)

#### Parameters

##### url

`string`

URL on which is the main API of Bee node exposed

##### options?

[`BeeOptions`](../interfaces/BeeOptions.md)

#### Returns

`Bee`

## Properties

### network

> `readonly` **network**: `"gnosis"` \| `"sepolia"`

Defined in: [bee-js/src/bee.ts:156](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L156)

Network on which the Bee node is running

***

### signer?

> `readonly` `optional` **signer**: [`PrivateKey`](PrivateKey.md)

Defined in: [bee-js/src/bee.ts:151](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L151)

Default Signer object used for signing operations, mainly Feeds.

***

### url

> `readonly` **url**: `string`

Defined in: [bee-js/src/bee.ts:146](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L146)

URL on which is the main API of Bee node exposed

## Methods

### buyStorage()

> **buyStorage**(`size`, `duration`, `options?`, `requestOptions?`): `Promise`\<[`BatchId`](BatchId.md)\>

Defined in: [bee-js/src/bee.ts:1649](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1649)

#### Parameters

##### size

[`Size`](Size.md)

##### duration

[`Duration`](Duration.md)

##### options?

[`PostageBatchOptions`](../interfaces/PostageBatchOptions.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`BatchId`](BatchId.md)\>

***

### cancelPendingTransaction()

> **cancelPendingTransaction**(`transactionHash`, `gasPrice?`, `options?`): `Promise`\<[`TransactionId`](TransactionId.md)\>

Defined in: [bee-js/src/bee.ts:1907](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1907)

Cancel currently pending transaction

#### Parameters

##### transactionHash

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`TransactionId`](TransactionId.md)

##### gasPrice?

`string` | `bigint` | [`NumberString`](../type-aliases/NumberString.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`TransactionId`](TransactionId.md)\>

***

### cashoutLastCheque()

> **cashoutLastCheque**(`address`, `options?`, `requestOptions?`): `Promise`\<[`TransactionId`](TransactionId.md)\>

Defined in: [bee-js/src/bee.ts:1425](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1425)

Cashout the last cheque for the peer

#### Parameters

##### address

Swarm address of peer

`string` | [`PeerAddress`](PeerAddress.md)

##### options?

[`TransactionOptions`](../interfaces/TransactionOptions.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`TransactionId`](TransactionId.md)\>

***

### checkConnection()

> **checkConnection**(`options?`): `Promise`\<`void`\>

Defined in: [bee-js/src/bee.ts:1265](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1265)

Ping the Bee node to see if there is a live Bee node on the given URL.

#### Parameters

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options that affects the request behavior

#### Returns

`Promise`\<`void`\>

#### Throws

If connection was not successful throw error

***

### createEnvelope()

> **createEnvelope**(`postageBatchId`, `reference`, `options?`): `Promise`\<[`EnvelopeWithBatchId`](../interfaces/EnvelopeWithBatchId.md)\>

Defined in: [bee-js/src/bee.ts:1241](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1241)

#### Parameters

##### postageBatchId

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](BatchId.md)

##### reference

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](Reference.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`EnvelopeWithBatchId`](../interfaces/EnvelopeWithBatchId.md)\>

***

### createFeedManifest()

> **createFeedManifest**(`postageBatchId`, `topic`, `owner`, `options?`, `requestOptions?`): `Promise`\<[`Reference`](Reference.md)\>

Defined in: [bee-js/src/bee.ts:1132](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1132)

Create feed manifest chunk and return the reference to it.

Feed manifest chunk allows for a feed to be able to be resolved through `/bzz` endpoint.

#### Parameters

##### postageBatchId

Postage BatchId to be used to create the Feed Manifest

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](BatchId.md)

##### topic

Topic in hex or bytes

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Topic`](Topic.md)

##### owner

Owner's ethereum address in hex or bytes

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`EthAddress`](EthAddress.md)

##### options?

[`UploadOptions`](../interfaces/UploadOptions.md)

Options that affects the request behavior

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`Reference`](Reference.md)\>

#### See

 - [Bee docs - Feeds](https://docs.ethswarm.org/docs/develop/tools-and-features/feeds)
 - [Bee API reference - `POST /feeds`](https://docs.ethswarm.org/api/#tag/Feed/paths/~1feeds~1{owner}~1{topic}/post)

***

### createGrantees()

> **createGrantees**(`postageBatchId`, `grantees`, `requestOptions?`): `Promise`\<[`GranteesResult`](../interfaces/GranteesResult.md)\>

Defined in: [bee-js/src/bee.ts:345](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L345)

Create a grantees list from the given array of public keys.

The grantees list can be obtained with the `getGrantees` method.

#### Parameters

##### postageBatchId

The ID of the postage batch.

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](BatchId.md)

##### grantees

An array of public keys representing the grantees.

`string`[] | `Uint8Array`\<`ArrayBufferLike`\>[] | [`PublicKey`](PublicKey.md)[]

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Optional request options.

#### Returns

`Promise`\<[`GranteesResult`](../interfaces/GranteesResult.md)\>

A promise that resolves to a `GranteesResult` object.

***

### createPostageBatch()

> **createPostageBatch**(`amount`, `depth`, `options?`, `requestOptions?`): `Promise`\<[`BatchId`](BatchId.md)\>

Defined in: [bee-js/src/bee.ts:1609](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1609)

Creates new postage batch from the funds that the node has available in its Ethereum account.

For better understanding what each parameter means and what are the optimal values please see
[Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/develop/access-the-swarm/introduction#keep-your-data-alive).

**WARNING: THIS CREATES TRANSACTIONS THAT SPENDS MONEY**

#### Parameters

##### amount

Amount that represents the value per chunk, has to be greater or equal zero.

`string` | `bigint` | [`NumberString`](../type-aliases/NumberString.md)

##### depth

`number`

Logarithm of the number of chunks that can be stamped with the batch.

##### options?

[`PostageBatchOptions`](../interfaces/PostageBatchOptions.md)

Options for creation of postage batch

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`BatchId`](BatchId.md)\>

#### Throws

BeeArgumentError when negative amount or depth is specified

#### Throws

TypeError if non-integer value is passed to amount or depth

#### See

 - [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/develop/access-the-swarm/introduction/#keep-your-data-alive)
 - [Bee Debug API reference - `POST /stamps`](https://docs.ethswarm.org/api/#tag/Postage-Stamps/paths/~1stamps~1{amount}~1{depth}/post)

***

### createTag()

> **createTag**(`options?`): `Promise`\<[`Tag`](../interfaces/Tag.md)\>

Defined in: [bee-js/src/bee.ts:649](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L649)

Create a new Tag which is meant for tracking progres of syncing data across network.

#### Parameters

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options that affects the request behavior

#### Returns

`Promise`\<[`Tag`](../interfaces/Tag.md)\>

#### See

 - [Bee docs - Syncing / Tags](https://docs.ethswarm.org/docs/develop/access-the-swarm/syncing)
 - [Bee API reference - `POST /tags`](https://docs.ethswarm.org/api/#tag/Tag/paths/~1tags/post)

***

### deleteTag()

> **deleteTag**(`tagUid`, `options?`): `Promise`\<`void`\>

Defined in: [bee-js/src/bee.ts:701](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L701)

Delete Tag

#### Parameters

##### tagUid

UID or tag object to be retrieved

`number` | [`Tag`](../interfaces/Tag.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options that affects the request behavior

#### Returns

`Promise`\<`void`\>

#### Throws

TypeError if tagUid is in not correct format

#### Throws

BeeResponse error if something went wrong on the Bee node side while deleting the tag.

#### See

 - [Bee docs - Syncing / Tags](https://docs.ethswarm.org/docs/develop/access-the-swarm/syncing)
 - [Bee API reference - `DELETE /tags/{uid}`](https://docs.ethswarm.org/api/#tag/Tag/paths/~1tags~1{uid}/delete)

***

### depositStake()

> **depositStake**(`amount`, `options?`, `requestOptions?`): `Promise`\<[`TransactionId`](TransactionId.md)\>

Defined in: [bee-js/src/bee.ts:1940](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1940)

Deposits given amount of BZZ token (in PLUR unit).

Be aware that staked BZZ tokens can **not** be withdrawn.

#### Parameters

##### amount

Amount of BZZ token (in PLUR unit) to be staked. Minimum is 100_000_000_000_000_000 PLUR (10 BZZ).

`string` | `bigint` | [`BZZ`](BZZ.md) | [`NumberString`](../type-aliases/NumberString.md)

##### options?

[`TransactionOptions`](../interfaces/TransactionOptions.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`TransactionId`](TransactionId.md)\>

***

### depositTokens()

> **depositTokens**(`amount`, `gasPrice?`, `options?`): `Promise`\<[`TransactionId`](TransactionId.md)\>

Defined in: [bee-js/src/bee.ts:1446](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1446)

Deposit tokens from overlay address into chequebook

#### Parameters

##### amount

Amount of tokens to deposit (must be positive integer)

`string` | `bigint` | [`BZZ`](BZZ.md) | [`NumberString`](../type-aliases/NumberString.md)

##### gasPrice?

Gas Price in WEI for the transaction call

`string` | `bigint` | [`NumberString`](../type-aliases/NumberString.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`TransactionId`](TransactionId.md)\>

string  Hash of the transaction

***

### diluteBatch()

> **diluteBatch**(`postageBatchId`, `depth`, `options?`): `Promise`\<[`BatchId`](BatchId.md)\>

Defined in: [bee-js/src/bee.ts:1786](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1786)

Dilute given Postage Batch with new depth (that has to be bigger then the original depth), which allows
the Postage Batch to be used for more chunks.

For better understanding what each parameter means and what are the optimal values please see
[Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/develop/access-the-swarm/introduction/#keep-your-data-alive).

#### Parameters

##### postageBatchId

Batch ID

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](BatchId.md)

##### depth

`number`

Amount to be added to the batch

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Request options

#### Returns

`Promise`\<[`BatchId`](BatchId.md)\>

#### See

 - [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/develop/access-the-swarm/introduction/#keep-your-data-alive)
 - [Bee Debug API reference - `PATCH /stamps/topup/${id}/${amount}`](https://docs.ethswarm.org/api/#tag/Postage-Stamps/paths/~1stamps~1dilute~1%7Bbatch_id%7D~1%7Bdepth%7D/patch)

***

### downloadChunk()

> **downloadChunk**(`reference`, `options?`, `requestOptions?`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Defined in: [bee-js/src/bee.ts:321](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L321)

Download chunk as a byte array

#### Parameters

##### reference

Bee chunk reference in hex string (either 64 or 128 chars long) or ENS domain.

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](Reference.md)

##### options?

[`DownloadOptions`](../interfaces/DownloadOptions.md)

Options that affects the request behavior

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

#### Throws

TypeError if some of the input parameters is not expected type

#### Throws

BeeArgumentError if there is passed ENS domain with invalid unicode characters

#### See

 - [Bee docs - Upload and download](https://docs.ethswarm.org/docs/develop/access-the-swarm/upload-and-download)
 - [Bee API reference - `GET /chunks`](https://docs.ethswarm.org/api/#tag/Chunk/paths/~1chunks~1{address}/get)

***

### downloadData()

> **downloadData**(`resource`, `options?`, `requestOptions?`): `Promise`\<[`Bytes`](Bytes.md)\>

Defined in: [bee-js/src/bee.ts:243](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L243)

Download data as a byte array

#### Parameters

##### resource

Swarm reference, Swarm CID, or ENS domain

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](Reference.md)

##### options?

[`DownloadOptions`](../interfaces/DownloadOptions.md)

Options that affects the request behavior

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`Bytes`](Bytes.md)\>

#### Throws

TypeError if some of the input parameters is not expected type

#### Throws

BeeArgumentError if there is passed ENS domain with invalid unicode characters

#### See

 - [Bee docs - Upload and download](https://docs.ethswarm.org/docs/develop/access-the-swarm/upload-and-download)
 - [Bee API reference - `GET /bytes`](https://docs.ethswarm.org/api/#tag/Bytes/paths/~1bytes~1{reference}/get)

***

### downloadFile()

> **downloadFile**(`resource`, `path`, `options?`, `requestOptions?`): `Promise`\<[`FileData`](../interfaces/FileData.md)\<[`Bytes`](Bytes.md)\>\>

Defined in: [bee-js/src/bee.ts:468](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L468)

Download single file.

#### Parameters

##### resource

Swarm reference, Swarm CID, or ENS domain

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](Reference.md)

##### path

`string` = `''`

If reference points to manifest, then this parameter defines path to the file

##### options?

[`DownloadOptions`](../interfaces/DownloadOptions.md)

Options that affects the request behavior

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`FileData`](../interfaces/FileData.md)\<[`Bytes`](Bytes.md)\>\>

#### Throws

TypeError if some of the input parameters is not expected type

#### Throws

BeeArgumentError if there is passed ENS domain with invalid unicode characters

#### See

 - Data
 - [Bee docs - Upload and download](https://docs.ethswarm.org/docs/develop/access-the-swarm/upload-and-download)
 - [Bee API reference - `GET /bzz`](https://docs.ethswarm.org/api/#tag/BZZ/paths/~1bzz~1%7Breference%7D~1%7Bpath%7D/get)

***

### downloadReadableData()

> **downloadReadableData**(`resource`, `options?`, `requestOptions?`): `Promise`\<`ReadableStream`\<`Uint8Array`\<`ArrayBufferLike`\>\>\>

Defined in: [bee-js/src/bee.ts:265](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L265)

Download data as a Readable stream

#### Parameters

##### resource

Swarm reference, Swarm CID, or ENS domain

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](Reference.md)

##### options?

[`DownloadOptions`](../interfaces/DownloadOptions.md)

Options that affects the request behavior

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<`ReadableStream`\<`Uint8Array`\<`ArrayBufferLike`\>\>\>

#### Throws

TypeError if some of the input parameters is not expected type

#### Throws

BeeArgumentError if there is passed ENS domain with invalid unicode characters

#### See

 - [Bee docs - Upload and download](https://docs.ethswarm.org/docs/develop/access-the-swarm/upload-and-download)
 - [Bee API reference - `GET /bytes`](https://docs.ethswarm.org/api/#tag/Bytes/paths/~1bytes~1{reference}/get)

***

### downloadReadableFile()

> **downloadReadableFile**(`reference`, `path`, `options?`, `requestOptions?`): `Promise`\<[`FileData`](../interfaces/FileData.md)\<`ReadableStream`\<`Uint8Array`\<`ArrayBufferLike`\>\>\>\>

Defined in: [bee-js/src/bee.ts:493](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L493)

Download single file as a readable stream

#### Parameters

##### reference

Bee file reference in hex string (either 64 or 128 chars long), ENS domain or Swarm CID.

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](Reference.md)

##### path

`string` = `''`

If reference points to manifest / collections, then this parameter defines path to the file

##### options?

[`DownloadOptions`](../interfaces/DownloadOptions.md)

Options that affects the request behavior

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`FileData`](../interfaces/FileData.md)\<`ReadableStream`\<`Uint8Array`\<`ArrayBufferLike`\>\>\>\>

#### Throws

TypeError if some of the input parameters is not expected type

#### Throws

BeeArgumentError if there is passed ENS domain with invalid unicode characters

#### See

 - [Bee docs - Upload and download](https://docs.ethswarm.org/docs/develop/access-the-swarm/upload-and-download)
 - [Bee API reference - `GET /bzz`](https://docs.ethswarm.org/api/#tag/BZZ/paths/~1bzz~1%7Breference%7D~1%7Bpath%7D/get)

***

### extendStorageDuration()

> **extendStorageDuration**(`postageBatchId`, `duration`, `options?`): `Promise`\<[`BatchId`](BatchId.md)\>

Defined in: [bee-js/src/bee.ts:1688](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1688)

#### Parameters

##### postageBatchId

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](BatchId.md)

##### duration

[`Duration`](Duration.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`BatchId`](BatchId.md)\>

***

### extendStorageSize()

> **extendStorageSize**(`postageBatchId`, `size`, `options?`): `Promise`\<[`BatchId`](BatchId.md)\>

Defined in: [bee-js/src/bee.ts:1674](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1674)

#### Parameters

##### postageBatchId

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](BatchId.md)

##### size

[`Size`](Size.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`BatchId`](BatchId.md)\>

***

### fetchLatestFeedUpdate()

> **fetchLatestFeedUpdate**(`topic`, `owner`, `requestOptions?`): `Promise`\<`FeedPayloadResult`\>

Defined in: [bee-js/src/bee.ts:1194](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1194)

#### Parameters

##### topic

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Topic`](Topic.md)

##### owner

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`EthAddress`](EthAddress.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<`FeedPayloadResult`\>

***

### getAllBalances()

> **getAllBalances**(`options?`): `Promise`\<[`BalanceResponse`](../interfaces/BalanceResponse.md)\>

Defined in: [bee-js/src/bee.ts:1325](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1325)

Get the balances with all known peers including prepaid services

#### Parameters

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`BalanceResponse`](../interfaces/BalanceResponse.md)\>

***

### ~~getAllGlobalPostageBatch()~~

> **getAllGlobalPostageBatch**(`options?`): `Promise`\<[`GlobalPostageBatch`](../interfaces/GlobalPostageBatch.md)[]\>

Defined in: [bee-js/src/bee.ts:1846](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1846)

Return all globally available postage batches.

#### Parameters

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`GlobalPostageBatch`](../interfaces/GlobalPostageBatch.md)[]\>

#### Deprecated

Use `getGlobalPostageBatches` instead

***

### getAllPendingTransactions()

> **getAllPendingTransactions**(`options?`): `Promise`\<[`TransactionInfo`](../interfaces/TransactionInfo.md)[]\>

Defined in: [bee-js/src/bee.ts:1870](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1870)

Return lists of all current pending transactions that the Bee made

#### Parameters

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`TransactionInfo`](../interfaces/TransactionInfo.md)[]\>

***

### getAllPins()

> **getAllPins**(`options?`): `Promise`\<[`Reference`](Reference.md)[]\>

Defined in: [bee-js/src/bee.ts:766](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L766)

Get list of all locally pinned references

#### Parameters

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options that affects the request behavior

#### Returns

`Promise`\<[`Reference`](Reference.md)[]\>

#### See

[Bee docs - Pinning](https://docs.ethswarm.org/docs/develop/access-the-swarm/pinning)

***

### ~~getAllPostageBatch()~~

> **getAllPostageBatch**(`options?`): `Promise`\<[`PostageBatch`](../interfaces/PostageBatch.md)[]\>

Defined in: [bee-js/src/bee.ts:1838](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1838)

Return all postage batches that has the node available.

#### Parameters

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`PostageBatch`](../interfaces/PostageBatch.md)[]\>

#### See

 - [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/develop/access-the-swarm/introduction/#keep-your-data-alive)
 - [Bee Debug API reference - `GET /stamps`](https://docs.ethswarm.org/api/#tag/Postage-Stamps/paths/~1stamps/get)

#### Deprecated

Use `getPostageBatches` instead

***

### getAllSettlements()

> **getAllSettlements**(`options?`): `Promise`\<[`AllSettlements`](../interfaces/AllSettlements.md)\>

Defined in: [bee-js/src/bee.ts:1506](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1506)

Get settlements with all known peers and total amount sent or received

#### Parameters

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`AllSettlements`](../interfaces/AllSettlements.md)\>

***

### getAllTags()

> **getAllTags**(`options?`, `requestOptions?`): `Promise`\<[`Tag`](../interfaces/Tag.md)[]\>

Defined in: [bee-js/src/bee.ts:665](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L665)

Fetches all tags.

The listing is limited by options.limit. So you have to iterate using options.offset to get all tags.

#### Parameters

##### options?

[`AllTagsOptions`](../interfaces/AllTagsOptions.md)

Options that affects the request behavior

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`Tag`](../interfaces/Tag.md)[]\>

#### Throws

TypeError if limit or offset are not numbers or undefined

#### Throws

BeeArgumentError if limit or offset have invalid options

#### See

 - [Bee docs - Syncing / Tags](https://docs.ethswarm.org/docs/develop/access-the-swarm/syncing)
 - [Bee API reference - `GET /tags`](https://docs.ethswarm.org/api/#tag/Tag/paths/~1tags/get)

***

### getBlocklist()

> **getBlocklist**(`options?`): `Promise`\<[`Peer`](../interfaces/Peer.md)[]\>

Defined in: [bee-js/src/bee.ts:1291](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1291)

#### Parameters

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`Peer`](../interfaces/Peer.md)[]\>

***

### getChainState()

> **getChainState**(`options?`): `Promise`\<[`ChainState`](../interfaces/ChainState.md)\>

Defined in: [bee-js/src/bee.ts:1579](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1579)

Get chain state

#### Parameters

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`ChainState`](../interfaces/ChainState.md)\>

***

### getChequebookAddress()

> **getChequebookAddress**(`options?`): `Promise`\<[`ChequebookAddressResponse`](../interfaces/ChequebookAddressResponse.md)\>

Defined in: [bee-js/src/bee.ts:1371](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1371)

Get the address of the chequebook contract used.

**Warning:** The address is returned with 0x prefix unlike all other calls.
https://github.com/ethersphere/bee/issues/1443

#### Parameters

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`ChequebookAddressResponse`](../interfaces/ChequebookAddressResponse.md)\>

***

### getChequebookBalance()

> **getChequebookBalance**(`options?`): `Promise`\<[`ChequebookBalanceResponse`](../interfaces/ChequebookBalanceResponse.md)\>

Defined in: [bee-js/src/bee.ts:1378](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1378)

Get the balance of the chequebook

#### Parameters

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`ChequebookBalanceResponse`](../interfaces/ChequebookBalanceResponse.md)\>

***

### getDurationExtensionCost()

> **getDurationExtensionCost**(`postageBatchId`, `duration`, `options?`): `Promise`\<[`BZZ`](BZZ.md)\>

Defined in: [bee-js/src/bee.ts:1736](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1736)

#### Parameters

##### postageBatchId

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](BatchId.md)

##### duration

[`Duration`](Duration.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`BZZ`](BZZ.md)\>

***

### getExtensionCost()

> **getExtensionCost**(`postageBatchId`, `size`, `duration`, `options?`): `Promise`\<[`BZZ`](BZZ.md)\>

Defined in: [bee-js/src/bee.ts:1700](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1700)

#### Parameters

##### postageBatchId

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](BatchId.md)

##### size

[`Size`](Size.md)

##### duration

[`Duration`](Duration.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`BZZ`](BZZ.md)\>

***

### getGlobalPostageBatches()

> **getGlobalPostageBatches**(`options?`): `Promise`\<[`GlobalPostageBatch`](../interfaces/GlobalPostageBatch.md)[]\>

Defined in: [bee-js/src/bee.ts:1863](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1863)

Return all globally available postage batches.

#### Parameters

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`GlobalPostageBatch`](../interfaces/GlobalPostageBatch.md)[]\>

***

### getGrantees()

> **getGrantees**(`reference`, `requestOptions?`): `Promise`\<[`GetGranteesResult`](../interfaces/GetGranteesResult.md)\>

Defined in: [bee-js/src/bee.ts:363](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L363)

Retrieves the grantees for a given reference.

#### Parameters

##### reference

The reference.

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](Reference.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Optional request options.

#### Returns

`Promise`\<[`GetGranteesResult`](../interfaces/GetGranteesResult.md)\>

A promise that resolves to a `GetGranteesResult` object.

***

### getHealth()

> **getHealth**(`options?`): `Promise`\<[`Health`](../interfaces/Health.md)\>

Defined in: [bee-js/src/bee.ts:1520](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1520)

Get health of node

#### Parameters

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`Health`](../interfaces/Health.md)\>

***

### getLastCashoutAction()

> **getLastCashoutAction**(`address`, `options?`): `Promise`\<[`LastCashoutActionResponse`](../interfaces/LastCashoutActionResponse.md)\>

Defined in: [bee-js/src/bee.ts:1408](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1408)

Get last cashout action for the peer

#### Parameters

##### address

Swarm address of peer

`string` | [`PeerAddress`](PeerAddress.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`LastCashoutActionResponse`](../interfaces/LastCashoutActionResponse.md)\>

***

### getLastCheques()

> **getLastCheques**(`options?`): `Promise`\<[`LastChequesResponse`](../interfaces/LastChequesResponse.md)\>

Defined in: [bee-js/src/bee.ts:1385](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1385)

Get last cheques for all peers

#### Parameters

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`LastChequesResponse`](../interfaces/LastChequesResponse.md)\>

***

### getLastChequesForPeer()

> **getLastChequesForPeer**(`address`, `options?`): `Promise`\<[`LastChequesForPeerResponse`](../interfaces/LastChequesForPeerResponse.md)\>

Defined in: [bee-js/src/bee.ts:1394](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1394)

Get last cheques for the peer

#### Parameters

##### address

Swarm address of peer

`string` | [`PeerAddress`](PeerAddress.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`LastChequesForPeerResponse`](../interfaces/LastChequesForPeerResponse.md)\>

***

### getNodeAddresses()

> **getNodeAddresses**(`options?`): `Promise`\<[`NodeAddresses`](../interfaces/NodeAddresses.md)\>

Defined in: [bee-js/src/bee.ts:1287](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1287)

#### Parameters

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`NodeAddresses`](../interfaces/NodeAddresses.md)\>

***

### getNodeInfo()

> **getNodeInfo**(`options?`): `Promise`\<[`NodeInfo`](../interfaces/NodeInfo.md)\>

Defined in: [bee-js/src/bee.ts:1534](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1534)

Get mode information of node

#### Parameters

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`NodeInfo`](../interfaces/NodeInfo.md)\>

***

### getPastDueConsumptionBalances()

> **getPastDueConsumptionBalances**(`options?`): `Promise`\<[`BalanceResponse`](../interfaces/BalanceResponse.md)\>

Defined in: [bee-js/src/bee.ts:1343](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1343)

Get the past due consumption balances with all known peers

#### Parameters

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`BalanceResponse`](../interfaces/BalanceResponse.md)\>

***

### getPastDueConsumptionPeerBalance()

> **getPastDueConsumptionPeerBalance**(`address`, `options?`): `Promise`\<[`PeerBalance`](../interfaces/PeerBalance.md)\>

Defined in: [bee-js/src/bee.ts:1352](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1352)

Get the past due consumption balance with a specific peer

#### Parameters

##### address

Swarm address of peer

`string` | [`PeerAddress`](PeerAddress.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`PeerBalance`](../interfaces/PeerBalance.md)\>

***

### getPeerBalance()

> **getPeerBalance**(`address`, `options?`): `Promise`\<[`PeerBalance`](../interfaces/PeerBalance.md)\>

Defined in: [bee-js/src/bee.ts:1334](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1334)

Get the balances with a specific peer including prepaid services

#### Parameters

##### address

Swarm address of peer

`string` | [`PeerAddress`](PeerAddress.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`PeerBalance`](../interfaces/PeerBalance.md)\>

***

### getPeers()

> **getPeers**(`options?`): `Promise`\<[`Peer`](../interfaces/Peer.md)[]\>

Defined in: [bee-js/src/bee.ts:1298](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1298)

Get list of peers for this node

#### Parameters

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`Peer`](../interfaces/Peer.md)[]\>

***

### getPendingTransaction()

> **getPendingTransaction**(`transactionHash`, `options?`): `Promise`\<[`TransactionInfo`](../interfaces/TransactionInfo.md)\>

Defined in: [bee-js/src/bee.ts:1878](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1878)

Return transaction information for specific transaction

#### Parameters

##### transactionHash

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`TransactionId`](TransactionId.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`TransactionInfo`](../interfaces/TransactionInfo.md)\>

***

### getPin()

> **getPin**(`reference`, `options?`): `Promise`\<[`Pin`](../interfaces/Pin.md)\>

Defined in: [bee-js/src/bee.ts:780](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L780)

Get pinning status of chunk with given reference

#### Parameters

##### reference

Bee data reference in hex string (either 64 or 128 chars long) or ENS domain.

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](Reference.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options that affects the request behavior

#### Returns

`Promise`\<[`Pin`](../interfaces/Pin.md)\>

#### Throws

TypeError if some of the input parameters is not expected type

#### Throws

BeeArgumentError if there is passed ENS domain with invalid unicode characters

#### See

[Bee docs - Pinning](https://docs.ethswarm.org/docs/develop/access-the-swarm/pinning)

***

### getPostageBatch()

> **getPostageBatch**(`postageBatchId`, `options?`): `Promise`\<[`PostageBatch`](../interfaces/PostageBatch.md)\>

Defined in: [bee-js/src/bee.ts:1805](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1805)

Return details for specific postage batch.

#### Parameters

##### postageBatchId

Batch ID

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](BatchId.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`PostageBatch`](../interfaces/PostageBatch.md)\>

#### See

 - [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/develop/access-the-swarm/introduction/#keep-your-data-alive)
 - [Bee Debug API reference - `GET /stamps/${id}`](https://docs.ethswarm.org/api/#tag/Postage-Stamps/paths/~1stamps~1%7Bbatch_id%7D/get)

***

### getPostageBatchBuckets()

> **getPostageBatchBuckets**(`postageBatchId`, `options?`): `Promise`\<[`PostageBatchBuckets`](../interfaces/PostageBatchBuckets.md)\>

Defined in: [bee-js/src/bee.ts:1822](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1822)

Return detailed information related to buckets for specific postage batch.

#### Parameters

##### postageBatchId

Batch ID

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](BatchId.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`PostageBatchBuckets`](../interfaces/PostageBatchBuckets.md)\>

#### See

 - [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/develop/access-the-swarm/introduction/#keep-your-data-alive)
 - [Bee Debug API reference - `GET /stamps/${id}/buckets`](https://docs.ethswarm.org/api/#tag/Postage-Stamps/paths/~1stamps~1%7Bbatch_id%7D~1buckets/get)

***

### getPostageBatches()

> **getPostageBatches**(`options?`): `Promise`\<[`PostageBatch`](../interfaces/PostageBatch.md)[]\>

Defined in: [bee-js/src/bee.ts:1856](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1856)

Return all postage batches that belong to the node.

#### Parameters

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`PostageBatch`](../interfaces/PostageBatch.md)[]\>

#### See

 - [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/develop/access-the-swarm/introduction/#keep-your-data-alive)
 - [Bee Debug API reference - `GET /stamps`](https://docs.ethswarm.org/api/#tag/Postage-Stamps/paths/~1stamps/get)

***

### getReadiness()

> **getReadiness**(`options?`): `Promise`\<[`Readiness`](../interfaces/Readiness.md)\>

Defined in: [bee-js/src/bee.ts:1527](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1527)

Get readiness of node

#### Parameters

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`Readiness`](../interfaces/Readiness.md)\>

***

### getRedistributionState()

> **getRedistributionState**(`options?`): `Promise`\<[`RedistributionState`](../interfaces/RedistributionState.md)\>

Defined in: [bee-js/src/bee.ts:1960](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1960)

Get current status of node in redistribution game

#### Parameters

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`RedistributionState`](../interfaces/RedistributionState.md)\>

***

### getRequestOptionsForCall()

> `protected` **getRequestOptionsForCall**(`options?`): [`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Defined in: [bee-js/src/bee.ts:1983](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1983)

#### Parameters

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

***

### getReserveState()

> **getReserveState**(`options?`): `Promise`\<[`ReserveState`](../interfaces/ReserveState.md)\>

Defined in: [bee-js/src/bee.ts:1572](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1572)

Get reserve state

#### Parameters

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`ReserveState`](../interfaces/ReserveState.md)\>

***

### getSettlements()

> **getSettlements**(`address`, `options?`): `Promise`\<[`Settlements`](../interfaces/Settlements.md)\>

Defined in: [bee-js/src/bee.ts:1497](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1497)

Get amount of sent and received from settlements with a peer

#### Parameters

##### address

Swarm address of peer

`string` | [`PeerAddress`](PeerAddress.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`Settlements`](../interfaces/Settlements.md)\>

***

### getSizeExtensionCost()

> **getSizeExtensionCost**(`postageBatchId`, `size`, `options?`): `Promise`\<[`BZZ`](BZZ.md)\>

Defined in: [bee-js/src/bee.ts:1717](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1717)

#### Parameters

##### postageBatchId

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](BatchId.md)

##### size

[`Size`](Size.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`BZZ`](BZZ.md)\>

***

### getStake()

> **getStake**(`options?`): `Promise`\<[`BZZ`](BZZ.md)\>

Defined in: [bee-js/src/bee.ts:1928](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1928)

Gets the staked amount of BZZ (in PLUR unit) as number string.

#### Parameters

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`BZZ`](BZZ.md)\>

***

### getStatus()

> **getStatus**(`options?`): `Promise`\<[`DebugStatus`](../interfaces/DebugStatus.md)\>

Defined in: [bee-js/src/bee.ts:1513](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1513)

Get status of node

#### Parameters

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`DebugStatus`](../interfaces/DebugStatus.md)\>

***

### getStorageCost()

> **getStorageCost**(`size`, `duration`, `options?`): `Promise`\<[`BZZ`](BZZ.md)\>

Defined in: [bee-js/src/bee.ts:1666](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1666)

#### Parameters

##### size

[`Size`](Size.md)

##### duration

[`Duration`](Duration.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`BZZ`](BZZ.md)\>

***

### getTopology()

> **getTopology**(`options?`): `Promise`\<[`Topology`](../interfaces/Topology.md)\>

Defined in: [bee-js/src/bee.ts:1308](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1308)

#### Parameters

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`Topology`](../interfaces/Topology.md)\>

***

### getVersions()

> **getVersions**(`options?`): `Promise`\<[`BeeVersions`](../interfaces/BeeVersions.md)\>

Defined in: [bee-js/src/bee.ts:1565](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1565)

Returns object with all versions specified by the connected Bee node (properties prefixed with `bee*`)
and versions that bee-js supports (properties prefixed with `supported*`).

#### Parameters

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`BeeVersions`](../interfaces/BeeVersions.md)\>

***

### getWalletBalance()

> **getWalletBalance**(`options?`): `Promise`\<[`WalletBalance`](../interfaces/WalletBalance.md)\>

Defined in: [bee-js/src/bee.ts:1588](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1588)

Get wallet balances for xDai and BZZ of the Bee node

#### Parameters

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`WalletBalance`](../interfaces/WalletBalance.md)\>

***

### gsocMine()

> **gsocMine**(`targetOverlay`, `identifier`, `proximity`): [`PrivateKey`](PrivateKey.md)

Defined in: [bee-js/src/bee.ts:1034](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1034)

#### Parameters

##### targetOverlay

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`PeerAddress`](PeerAddress.md)

##### identifier

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Identifier`](Identifier.md)

##### proximity

`number` = `12`

#### Returns

[`PrivateKey`](PrivateKey.md)

***

### gsocSend()

> **gsocSend**(`postageBatchId`, `signer`, `identifier`, `data`, `options?`, `requestOptions?`): `Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

Defined in: [bee-js/src/bee.ts:1054](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1054)

#### Parameters

##### postageBatchId

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](BatchId.md)

##### signer

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`PrivateKey`](PrivateKey.md)

##### identifier

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Identifier`](Identifier.md)

##### data

`string` | `Uint8Array`\<`ArrayBufferLike`\>

##### options?

[`UploadOptions`](../interfaces/UploadOptions.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

***

### gsocSubscribe()

> **gsocSubscribe**(`address`, `identifier`, `handler`): [`GsocSubscription`](../interfaces/GsocSubscription.md)

Defined in: [bee-js/src/bee.ts:1072](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1072)

#### Parameters

##### address

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`EthAddress`](EthAddress.md)

##### identifier

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Identifier`](Identifier.md)

##### handler

[`GsocMessageHandler`](../interfaces/GsocMessageHandler.md)

#### Returns

[`GsocSubscription`](../interfaces/GsocSubscription.md)

***

### hashDirectory()

> **hashDirectory**(`dir`): `Promise`\<[`Reference`](Reference.md)\>

Defined in: [bee-js/src/bee.ts:541](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L541)

#### Parameters

##### dir

`string`

#### Returns

`Promise`\<[`Reference`](Reference.md)\>

***

### isConnected()

> **isConnected**(`options?`): `Promise`\<`boolean`\>

Defined in: [bee-js/src/bee.ts:1275](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1275)

Ping the Bee node to see if there is a live Bee node on the given URL.

#### Parameters

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options that affects the request behavior

#### Returns

`Promise`\<`boolean`\>

true if successful, false on error

***

### isFeedRetrievable()

> **isFeedRetrievable**(`owner`, `topic`, `index?`, `options?`, `requestOptions?`): `Promise`\<`boolean`\>

Defined in: [bee-js/src/bee.ts:842](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L842)

Functions that validates if feed is retrievable in the network.

If no index is passed then it check for "latest" update, which is a weaker guarantee as nobody can be really
sure what is the "latest" update.

If index is passed then it validates all previous sequence index chunks if they are available as they are required
to correctly resolve the feed upto the given index update.

#### Parameters

##### owner

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`EthAddress`](EthAddress.md)

##### topic

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Topic`](Topic.md)

##### index?

[`FeedIndex`](FeedIndex.md)

##### options?

[`DownloadOptions`](../interfaces/DownloadOptions.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<`boolean`\>

***

### isReferenceRetrievable()

> **isReferenceRetrievable**(`reference`, `options?`): `Promise`\<`boolean`\>

Defined in: [bee-js/src/bee.ts:818](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L818)

Checks if content specified by reference is retrievable from the network.

#### Parameters

##### reference

Bee data reference to be checked in hex string (either 64 or 128 chars long) or ENS domain.

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](Reference.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options that affects the request behavior

#### Returns

`Promise`\<`boolean`\>

#### Throws

TypeError if some of the input parameters is not expected type

#### Throws

BeeArgumentError if there is passed ENS domain with invalid unicode characters

#### See

[Bee API reference - `GET /stewardship`](https://docs.ethswarm.org/api/#tag/Stewardship/paths/~1stewardship~1{reference}/get)

***

### isSupportedApiVersion()

> **isSupportedApiVersion**(`options?`): `Promise`\<`boolean`\>

Defined in: [bee-js/src/bee.ts:1555](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1555)

Connects to a node and checks if its Main API version matches with the one that bee-js supports.

This should be the main way how to check compatibility for your app and Bee node.

#### Parameters

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<`boolean`\>

***

### isSupportedExactVersion()

> **isSupportedExactVersion**(`options?`): `Promise`\<`boolean`\>

Defined in: [bee-js/src/bee.ts:1543](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1543)

Connects to a node and checks if its version matches with the one that bee-js supports.

#### Parameters

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<`boolean`\>

***

### makeFeedReader()

> **makeFeedReader**(`topic`, `owner`, `options?`): [`FeedReader`](../interfaces/FeedReader.md)

Defined in: [bee-js/src/bee.ts:1159](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1159)

Make a new feed reader for downloading feed updates.

#### Parameters

##### topic

Topic in hex or bytes

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Topic`](Topic.md)

##### owner

Owner's ethereum address in hex or bytes

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`EthAddress`](EthAddress.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options that affects the request behavior

#### Returns

[`FeedReader`](../interfaces/FeedReader.md)

#### See

[Bee docs - Feeds](https://docs.ethswarm.org/docs/develop/tools-and-features/feeds)

***

### makeFeedWriter()

> **makeFeedWriter**(`topic`, `signer?`, `options?`): [`FeedWriter`](../interfaces/FeedWriter.md)

Defined in: [bee-js/src/bee.ts:1179](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1179)

Make a new feed writer for updating feeds

#### Parameters

##### topic

Topic in hex or bytes

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Topic`](Topic.md)

##### signer?

The signer's private key or a Signer instance that can sign data

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`PrivateKey`](PrivateKey.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options that affects the request behavior

#### Returns

[`FeedWriter`](../interfaces/FeedWriter.md)

#### See

[Bee docs - Feeds](https://docs.ethswarm.org/docs/develop/tools-and-features/feeds)

***

### makeSOCReader()

> **makeSOCReader**(`ownerAddress`, `options?`): [`SOCReader`](../interfaces/SOCReader.md)

Defined in: [bee-js/src/bee.ts:1212](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1212)

Returns an object for reading single owner chunks

#### Parameters

##### ownerAddress

The ethereum address of the owner

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`EthAddress`](EthAddress.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options that affects the request behavior

#### Returns

[`SOCReader`](../interfaces/SOCReader.md)

#### See

[Bee docs - Chunk Types](https://docs.ethswarm.org/docs/develop/tools-and-features/chunk-types#single-owner-chunks)

***

### makeSOCWriter()

> **makeSOCWriter**(`signer?`, `options?`): [`SOCWriter`](../interfaces/SOCWriter.md)

Defined in: [bee-js/src/bee.ts:1228](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1228)

Returns an object for reading and writing single owner chunks

#### Parameters

##### signer?

The signer's private key or a Signer instance that can sign data

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`PrivateKey`](PrivateKey.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options that affects the request behavior

#### Returns

[`SOCWriter`](../interfaces/SOCWriter.md)

#### See

[Bee docs - Chunk Types](https://docs.ethswarm.org/docs/develop/tools-and-features/chunk-types#single-owner-chunks)

***

### patchGrantees()

> **patchGrantees**(`postageBatchId`, `reference`, `history`, `grantees`, `requestOptions?`): `Promise`\<[`GranteesResult`](../interfaces/GranteesResult.md)\>

Defined in: [bee-js/src/bee.ts:382](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L382)

Updates the grantees of a specific reference and history.

#### Parameters

##### postageBatchId

The ID of the postage batch.

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](BatchId.md)

##### reference

The reference.

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](Reference.md)

##### history

The history.

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](Reference.md)

##### grantees

The grantees.

###### add?

`string`[] \| `Uint8Array`\<`ArrayBufferLike`\>[] \| [`PublicKey`](PublicKey.md)[]

###### revoke?

`string`[] \| `Uint8Array`\<`ArrayBufferLike`\>[] \| [`PublicKey`](PublicKey.md)[]

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Optional request options.

#### Returns

`Promise`\<[`GranteesResult`](../interfaces/GranteesResult.md)\>

A Promise that resolves to to a `GranteesResult` object.

***

### pin()

> **pin**(`reference`, `options?`): `Promise`\<`void`\>

Defined in: [bee-js/src/bee.ts:739](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L739)

Pin local data with given reference

#### Parameters

##### reference

Data reference

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](Reference.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options that affects the request behavior

#### Returns

`Promise`\<`void`\>

#### Throws

TypeError if reference is in not correct format

#### See

[Bee docs - Pinning](https://docs.ethswarm.org/docs/develop/access-the-swarm/pinning)

***

### pingPeer()

> **pingPeer**(`peer`, `options?`): `Promise`\<[`PingResponse`](../interfaces/PingResponse.md)\>

Defined in: [bee-js/src/bee.ts:1312](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1312)

#### Parameters

##### peer

`string` | [`PeerAddress`](PeerAddress.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`PingResponse`](../interfaces/PingResponse.md)\>

***

### probeData()

> **probeData**(`reference`, `options?`): `Promise`\<[`ReferenceInformation`](../interfaces/ReferenceInformation.md)\>

Defined in: [bee-js/src/bee.ts:224](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L224)

Requests content length for a `/bytes` reference

#### Parameters

##### reference

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](Reference.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`ReferenceInformation`](../interfaces/ReferenceInformation.md)\>

#### See

[Bee API reference - `HEAD /bytes/`](https://docs.ethswarm.org/api/#tag/Bytes/paths/~1bytes~1%7Breference%7D/head)

***

### pssReceive()

> **pssReceive**(`topic`, `timeoutMsec`): `Promise`\<[`Bytes`](Bytes.md)\>

Defined in: [bee-js/src/bee.ts:1005](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1005)

Receive message with Postal Service for Swarm

Because sending a PSS message is slow and CPU intensive,
it is not supposed to be used for general messaging but
most likely for setting up an encrypted communication
channel by sending an one-off message.

This is a helper function to wait for exactly one message to
arrive and then cancel the subscription. Additionally a
timeout can be provided for the message to arrive or else
an error will be thrown.

**Warning! If connected Bee node is a light node, then he will never receive any message!**
This is because light nodes does not fully participate in the data exchange in Swarm network and hence the message won't arrive to them.

#### Parameters

##### topic

[`Topic`](Topic.md)

Topic name

##### timeoutMsec

`number` = `0`

Timeout in milliseconds

#### Returns

`Promise`\<[`Bytes`](Bytes.md)\>

Message in byte array

#### See

 - [Bee docs - PSS](https://docs.ethswarm.org/docs/develop/tools-and-features/pss)
 - [Bee API reference - `GET /pss`](https://docs.ethswarm.org/api/#tag/Postal-Service-for-Swarm/paths/~1pss~1subscribe~1{topic}/get)

***

### pssSend()

> **pssSend**(`postageBatchId`, `topic`, `target`, `data`, `recipient?`, `options?`): `Promise`\<`void`\>

Defined in: [bee-js/src/bee.ts:904](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L904)

Send data to recipient or target with Postal Service for Swarm.

Because sending a PSS message is slow and CPU intensive,
it is not supposed to be used for general messaging but
most likely for setting up an encrypted communication
channel by sending an one-off message.

**Warning! If the recipient Bee node is a light node, then he will never receive the message!**
This is because light nodes does not fully participate in the data exchange in Swarm network and hence the message won't arrive to them.

#### Parameters

##### postageBatchId

Postage BatchId that will be assigned to sent message

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](BatchId.md)

##### topic

[`Topic`](Topic.md)

Topic name

##### target

`string`

Target message address prefix. Has a limit on length. Recommend to use `Utils.Pss.makeMaxTarget()` to get the most specific target that Bee node will accept.

##### data

Message to be sent

`string` | `Uint8Array`\<`ArrayBufferLike`\>

##### recipient?

Recipient public key

`string` | [`PublicKey`](PublicKey.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options that affects the request behavior

#### Returns

`Promise`\<`void`\>

#### Throws

TypeError if `data`, `batchId`, `target` or `recipient` are in invalid format

#### See

 - [Bee docs - PSS](https://docs.ethswarm.org/docs/develop/tools-and-features/pss)
 - [Bee API reference - `POST /pss`](https://docs.ethswarm.org/api/#tag/Postal-Service-for-Swarm/paths/~1pss~1send~1{topic}~1{targets}/post)

***

### pssSubscribe()

> **pssSubscribe**(`topic`, `handler`): [`PssSubscription`](../interfaces/PssSubscription.md)

Defined in: [bee-js/src/bee.ts:938](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L938)

Subscribe to messages for given topic with Postal Service for Swarm

**Warning! If connected Bee node is a light node, then he will never receive any message!**
This is because light nodes does not fully participate in the data exchange in Swarm network and hence the message won't arrive to them.

#### Parameters

##### topic

[`Topic`](Topic.md)

Topic name

##### handler

[`PssMessageHandler`](../interfaces/PssMessageHandler.md)

Message handler interface

#### Returns

[`PssSubscription`](../interfaces/PssSubscription.md)

Subscription to a given topic

#### See

 - [Bee docs - PSS](https://docs.ethswarm.org/docs/develop/tools-and-features/pss)
 - [Bee API reference - `GET /pss`](https://docs.ethswarm.org/api/#tag/Postal-Service-for-Swarm/paths/~1pss~1subscribe~1{topic}/get)

***

### rchash()

> **rchash**(`depth`, `anchor1`, `anchor2`, `options?`): `Promise`\<`number`\>

Defined in: [bee-js/src/bee.ts:1255](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1255)

Get reserve commitment hash duration seconds

#### Parameters

##### depth

`number`

##### anchor1

`string`

##### anchor2

`string`

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<`number`\>

***

### rebroadcastPendingTransaction()

> **rebroadcastPendingTransaction**(`transactionHash`, `options?`): `Promise`\<[`TransactionId`](TransactionId.md)\>

Defined in: [bee-js/src/bee.ts:1893](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1893)

Rebroadcast already created transaction.
This is mainly needed when your transaction fall off mempool from other reason is not incorporated into block.

#### Parameters

##### transactionHash

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`TransactionId`](TransactionId.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`TransactionId`](TransactionId.md)\>

***

### removePeer()

> **removePeer**(`peer`, `options?`): `Promise`\<[`RemovePeerResponse`](../interfaces/RemovePeerResponse.md)\>

Defined in: [bee-js/src/bee.ts:1302](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1302)

#### Parameters

##### peer

`string` | [`PeerAddress`](PeerAddress.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`RemovePeerResponse`](../interfaces/RemovePeerResponse.md)\>

***

### retrieveTag()

> **retrieveTag**(`tagUid`, `options?`): `Promise`\<[`Tag`](../interfaces/Tag.md)\>

Defined in: [bee-js/src/bee.ts:684](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L684)

Retrieve tag information from Bee node

#### Parameters

##### tagUid

UID or tag object to be retrieved

`number` | [`Tag`](../interfaces/Tag.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options that affects the request behavior

#### Returns

`Promise`\<[`Tag`](../interfaces/Tag.md)\>

#### Throws

TypeError if tagUid is in not correct format

#### See

 - [Bee docs - Syncing / Tags](https://docs.ethswarm.org/docs/develop/access-the-swarm/syncing)
 - [Bee API reference - `GET /tags/{uid}`](https://docs.ethswarm.org/api/#tag/Tag/paths/~1tags~1{uid}/get)

***

### reuploadPinnedData()

> **reuploadPinnedData**(`postageBatchId`, `reference`, `options?`): `Promise`\<`void`\>

Defined in: [bee-js/src/bee.ts:797](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L797)

Instructs the Bee node to reupload a locally pinned data into the network.

#### Parameters

##### postageBatchId

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](BatchId.md)

##### reference

Bee data reference to be re-uploaded in hex string (either 64 or 128 chars long) or ENS domain.

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](Reference.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options that affects the request behavior

#### Returns

`Promise`\<`void`\>

#### Throws

BeeArgumentError if the reference is not locally pinned

#### Throws

TypeError if some of the input parameters is not expected type

#### Throws

BeeArgumentError if there is passed ENS domain with invalid unicode characters

#### See

[Bee API reference - `PUT /stewardship`](https://docs.ethswarm.org/api/#tag/Stewardship/paths/~1stewardship~1{reference}/put)

***

### streamDirectory()

> **streamDirectory**(`postageBatchId`, `dir`, `onUploadProgress?`, `options?`, `requestOptions?`): `Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

Defined in: [bee-js/src/bee.ts:545](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L545)

#### Parameters

##### postageBatchId

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](BatchId.md)

##### dir

`string`

##### onUploadProgress?

(`progress`) => `void`

##### options?

[`UploadOptions`](../interfaces/UploadOptions.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

***

### streamFiles()

> **streamFiles**(`postageBatchId`, `files`, `onUploadProgress?`, `options?`, `requestOptions?`): `Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

Defined in: [bee-js/src/bee.ts:564](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L564)

#### Parameters

##### postageBatchId

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](BatchId.md)

##### files

`File`[] | `FileList`

##### onUploadProgress?

(`progress`) => `void`

##### options?

[`UploadOptions`](../interfaces/UploadOptions.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

***

### topUpBatch()

> **topUpBatch**(`postageBatchId`, `amount`, `options?`): `Promise`\<[`BatchId`](BatchId.md)\>

Defined in: [bee-js/src/bee.ts:1761](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1761)

Topup a fresh amount of BZZ to given Postage Batch.

For better understanding what each parameter means and what are the optimal values please see
[Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/develop/access-the-swarm/introduction/#keep-your-data-alive).

#### Parameters

##### postageBatchId

Batch ID

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](BatchId.md)

##### amount

Amount to be added to the batch

`string` | `bigint` | [`NumberString`](../type-aliases/NumberString.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Request options

#### Returns

`Promise`\<[`BatchId`](BatchId.md)\>

#### See

 - [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/develop/access-the-swarm/introduction/#keep-your-data-alive)
 - [Bee Debug API reference - `PATCH /stamps/topup/${id}/${amount}`](https://docs.ethswarm.org/api/#tag/Postage-Stamps/paths/~1stamps~1topup~1{batch_id}~1{amount}/patch)

***

### unpin()

> **unpin**(`reference`, `options?`): `Promise`\<`void`\>

Defined in: [bee-js/src/bee.ts:754](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L754)

Unpin local data with given reference

#### Parameters

##### reference

Data reference

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](Reference.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options that affects the request behavior

#### Returns

`Promise`\<`void`\>

#### Throws

TypeError if reference is in not correct format

#### See

[Bee docs - Pinning](https://docs.ethswarm.org/docs/develop/access-the-swarm/pinning)

***

### updateTag()

> **updateTag**(`tagUid`, `reference`, `options?`): `Promise`\<`void`\>

Defined in: [bee-js/src/bee.ts:722](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L722)

Update tag's total chunks count.

This is important if you are uploading individual chunks with a tag. Then upon finishing the final root chunk,
you can use this method to update the total chunks count for the tag.

#### Parameters

##### tagUid

UID or tag object to be retrieved

`number` | [`Tag`](../interfaces/Tag.md)

##### reference

The root reference that contains all the chunks to be counted

`string` | [`Reference`](Reference.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options that affects the request behavior

#### Returns

`Promise`\<`void`\>

#### Throws

TypeError if tagUid is in not correct format

#### Throws

BeeResponse error if something went wrong on the Bee node side while deleting the tag.

#### See

 - [Bee docs - Syncing / Tags](https://docs.ethswarm.org/docs/develop/access-the-swarm/syncing)
 - [Bee API reference - `PATCH /tags/{uid}`](https://docs.ethswarm.org/api/#tag/Tag/paths/~1tags~1{uid}/patch)

***

### uploadChunk()

> **uploadChunk**(`stamp`, `data`, `options?`, `requestOptions?`): `Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

Defined in: [bee-js/src/bee.ts:288](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L288)

Upload chunk to a Bee node

#### Parameters

##### stamp

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](BatchId.md) | [`EnvelopeWithBatchId`](../interfaces/EnvelopeWithBatchId.md)

##### data

Raw chunk to be uploaded

`Uint8Array`\<`ArrayBufferLike`\> | `Chunk`

##### options?

[`UploadOptions`](../interfaces/UploadOptions.md)

Additional options like tag, encryption, pinning, content-type and request options

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

reference is a content hash of the data

#### See

 - [Bee docs - Upload and download](https://docs.ethswarm.org/docs/develop/access-the-swarm/upload-and-download)
 - [Bee API reference - `POST /chunks`](https://docs.ethswarm.org/api/#tag/Chunk/paths/~1chunks/post)

***

### uploadCollection()

> **uploadCollection**(`postageBatchId`, `collection`, `options?`, `requestOptions?`): `Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

Defined in: [bee-js/src/bee.ts:593](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L593)

Upload Collection that you can assembly yourself.

The returned `UploadResult.tag` might be undefined if called in CORS-enabled environment.
This will be fixed upon next Bee release. https://github.com/ethersphere/bee-js/issues/406

#### Parameters

##### postageBatchId

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](BatchId.md)

##### collection

[`Collection`](../type-aliases/Collection.md)

##### options?

[`CollectionUploadOptions`](../interfaces/CollectionUploadOptions.md)

Collections and request options

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

***

### uploadData()

> **uploadData**(`postageBatchId`, `data`, `options?`, `requestOptions?`): `Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

Defined in: [bee-js/src/bee.ts:203](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L203)

Upload data to a Bee node

#### Parameters

##### postageBatchId

Postage BatchId to be used to upload the data with

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](BatchId.md)

##### data

Data to be uploaded

`string` | `Uint8Array`\<`ArrayBufferLike`\>

##### options?

[`RedundantUploadOptions`](../interfaces/RedundantUploadOptions.md)

Additional options like tag, encryption, pinning, content-type and request options

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

reference is a content hash of the data

#### See

 - [Bee docs - Upload and download](https://docs.ethswarm.org/docs/develop/access-the-swarm/upload-and-download)
 - [Bee API reference - `POST /bytes`](https://docs.ethswarm.org/api/#tag/Bytes/paths/~1bytes/post)

***

### uploadFile()

> **uploadFile**(`postageBatchId`, `data`, `name?`, `options?`, `requestOptions?`): `Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

Defined in: [bee-js/src/bee.ts:420](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L420)

Upload single file to a Bee node.

#### Parameters

##### postageBatchId

Postage BatchId to be used to upload the data with

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](BatchId.md)

##### data

Data or file to be uploaded

`string` | `Uint8Array`\<`ArrayBufferLike`\> | `File` | `Readable`

##### name?

`string`

Optional name of the uploaded file

##### options?

[`FileUploadOptions`](../interfaces/FileUploadOptions.md)

Additional options like tag, encryption, pinning, content-type and request options

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

reference is a content hash of the file

#### See

 - [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/develop/access-the-swarm/introduction/#keep-your-data-alive)
 - [Bee docs - Upload and download](https://docs.ethswarm.org/docs/develop/access-the-swarm/upload-and-download)
 - [Bee API reference - `POST /bzz`](https://docs.ethswarm.org/api/#tag/BZZ/paths/~1bzz/post)

***

### uploadFiles()

> **uploadFiles**(`postageBatchId`, `fileList`, `options?`, `requestOptions?`): `Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

Defined in: [bee-js/src/bee.ts:524](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L524)

Upload collection of files to a Bee node

Uses the FileList API from the browser.

The returned `UploadResult.tag` might be undefined if called in CORS-enabled environment.
This will be fixed upon next Bee release. https://github.com/ethersphere/bee-js/issues/406

#### Parameters

##### postageBatchId

Postage BatchId to be used to upload the data with

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](BatchId.md)

##### fileList

list of files to be uploaded

`File`[] | `FileList`

##### options?

[`CollectionUploadOptions`](../interfaces/CollectionUploadOptions.md)

Additional options like tag, encryption, pinning and request options

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

#### See

 - [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/develop/access-the-swarm/introduction/#keep-your-data-alive)
 - [Bee docs - Upload directory](https://docs.ethswarm.org/docs/develop/access-the-swarm/upload-and-download#upload-a-directory)
 - [Bee API reference - `POST /bzz`](https://docs.ethswarm.org/api/#tag/BZZ/paths/~1bzz/post)

***

### uploadFilesFromDirectory()

> **uploadFilesFromDirectory**(`postageBatchId`, `dir`, `options?`, `requestOptions?`): `Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

Defined in: [bee-js/src/bee.ts:625](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L625)

Upload collection of files.

Available only in Node.js as it uses the `fs` module.

The returned `UploadResult.tag` might be undefined if called in CORS-enabled environment.
This will be fixed upon next Bee release. https://github.com/ethersphere/bee-js/issues/406

#### Parameters

##### postageBatchId

Postage BatchId to be used to upload the data with

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](BatchId.md)

##### dir

`string`

the path of the files to be uploaded

##### options?

[`CollectionUploadOptions`](../interfaces/CollectionUploadOptions.md)

Additional options like tag, encryption, pinning and request options

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

#### See

 - [Bee docs - Keep your data alive / Postage stamps](https://docs.ethswarm.org/docs/develop/access-the-swarm/introduction/#keep-your-data-alive)
 - [Bee docs - Upload directory](https://docs.ethswarm.org/docs/develop/access-the-swarm/upload-and-download#upload-a-directory)
 - [Bee API reference - `POST /bzz`](https://docs.ethswarm.org/api/#tag/BZZ/paths/~1bzz/post)

***

### withdrawTokens()

> **withdrawTokens**(`amount`, `gasPrice?`, `options?`): `Promise`\<[`TransactionId`](TransactionId.md)\>

Defined in: [bee-js/src/bee.ts:1470](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/bee.ts#L1470)

Withdraw tokens from the chequebook to the overlay address

#### Parameters

##### amount

Amount of tokens to withdraw (must be positive integer)

`string` | `bigint` | [`BZZ`](BZZ.md) | [`NumberString`](../type-aliases/NumberString.md)

##### gasPrice?

Gas Price in WEI for the transaction call

`string` | `bigint` | [`NumberString`](../type-aliases/NumberString.md)

##### options?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

#### Returns

`Promise`\<[`TransactionId`](TransactionId.md)\>

string  Hash of the transaction
