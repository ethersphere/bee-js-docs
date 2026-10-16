# Class: Bee

Defined in: [bee-js/src/bee.ts:52](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/bee.ts#L52)

The main component that abstracts operations available on the Bee API.

Instantiate with `new Bee(url, options)` where `url` is the Bee node URL and `options` are optional parameters.

## Example

```ts
const bee = new Bee('http://localhost:1633')
```

## Constructors

### Constructor

> **new Bee**(`url`, `options?`): `Bee`

Defined in: [bee-js/src/bee.ts:93](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/bee.ts#L93)

#### Parameters

##### url

`string`

URL on which is the main API of Bee node exposed

##### options?

[`BeeOptions`](../interfaces/BeeOptions.md)

#### Returns

`Bee`

#### Example

```ts
const bee = new Bee('http://localhost:1633')
```

## Properties

### balance

> `readonly` **balance**: [`Balance`](Balance.md)

Defined in: [bee-js/src/bee.ts:150](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/bee.ts#L150)

SWAP balance operations. Related to the bandwidth incentives and the chequebook.

***

### cheque

> `readonly` **cheque**: [`Cheque`](Cheque.md)

Defined in: [bee-js/src/bee.ts:200](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/bee.ts#L200)

Cheque operations (last cheques and cashouts).

***

### chequebook

> `readonly` **chequebook**: [`Chequebook`](Chequebook.md)

Defined in: [bee-js/src/bee.ts:195](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/bee.ts#L195)

Chequebook contract operations (address, balance, deposit, withdraw).

***

### chunk

> `readonly` **chunk**: [`Chunk`](Chunk.md)

Defined in: [bee-js/src/bee.ts:240](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/bee.ts#L240)

Chunk operations backed by the `/chunks` endpoint.

***

### collection

> `readonly` **collection**: [`Collection`](Collection.md)

Defined in: [bee-js/src/bee.ts:250](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/bee.ts#L250)

Collection (multi-file) operations backed by the `/bzz` endpoint.

***

### connectivity

> `readonly` **connectivity**: [`Connectivity`](Connectivity.md)

Defined in: [bee-js/src/bee.ts:170](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/bee.ts#L170)

Peer, topology and network connectivity operations.

***

### data

> `readonly` **data**: [`Data`](Data.md)

Defined in: [bee-js/src/bee.ts:235](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/bee.ts#L235)

Raw data operations backed by the `/bytes` endpoint.

***

### feed

> `readonly` **feed**: [`Feed`](Feed.md)

Defined in: [bee-js/src/bee.ts:225](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/bee.ts#L225)

Feed operations.

***

### file

> `readonly` **file**: [`File`](File.md)

Defined in: [bee-js/src/bee.ts:245](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/bee.ts#L245)

Single-file operations backed by the `/bzz` endpoint.

***

### grantee

> `readonly` **grantee**: [`Grantee`](Grantee.md)

Defined in: [bee-js/src/bee.ts:215](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/bee.ts#L215)

Grantee (access control) operations.

***

### messaging

> `readonly` **messaging**: [`Messaging`](Messaging.md)

Defined in: [bee-js/src/bee.ts:220](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/bee.ts#L220)

Messaging protocols — PSS and GSOC.

***

### network

> `readonly` **network**: `"gnosis"` \| `"sepolia"`

Defined in: [bee-js/src/bee.ts:79](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/bee.ts#L79)

Network on which the Bee node is running.

This is currently used to determine block time for postage batch time-to-live (TTL) calculations.
The block time for `gnosis` is `5` seconds, and for `sepolia` it is `15` seconds.

#### Default

```ts
'gnosis'
```

***

### pin

> `readonly` **pin**: [`Pin`](Pin.md)

Defined in: [bee-js/src/bee.ts:210](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/bee.ts#L210)

Local pinning operations.

***

### rollingFeed

> `readonly` **rollingFeed**: [`RollingFeed`](RollingFeed.md)

Defined in: [bee-js/src/bee.ts:255](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/bee.ts#L255)

Rolling feed operations.

***

### settlement

> `readonly` **settlement**: [`Settlement`](Settlement.md)

Defined in: [bee-js/src/bee.ts:155](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/bee.ts#L155)

Settlement operations. Related to the bandwidth incentives and the chequebook.

***

### signer?

> `readonly` `optional` **signer**: [`PrivateKey`](PrivateKey.md)

Defined in: [bee-js/src/bee.ts:69](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/bee.ts#L69)

Default signer (a private key) used for signing.

Mainly used in single-owner chunk (SOC) related operations, and consequently in feeds.

If not provided, methods such as `makeFeedWriter` and `makeSOCWriter`
must be provided with a private key in their respective function calls.

***

### soc

> `readonly` **soc**: [`Soc`](Soc.md)

Defined in: [bee-js/src/bee.ts:230](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/bee.ts#L230)

Single owner chunk (SOC) reader/writer operations.

***

### stake

> `readonly` **stake**: [`Stake`](Stake.md)

Defined in: [bee-js/src/bee.ts:165](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/bee.ts#L165)

Staking operations.

***

### stamp

> `readonly` **stamp**: [`Stamp`](Stamp.md)

Defined in: [bee-js/src/bee.ts:185](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/bee.ts#L185)

Low-level postage batch (stamp) operations.

***

### status

> `readonly` **status**: [`Status`](Status.md)

Defined in: [bee-js/src/bee.ts:175](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/bee.ts#L175)

Node status, health, version and chain/reserve state operations.

***

### storage

> `readonly` **storage**: [`Storage`](Storage.md)

Defined in: [bee-js/src/bee.ts:190](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/bee.ts#L190)

Ergonomic storage operations expressed in terms of size and duration.

***

### tag

> `readonly` **tag**: [`Tag`](Tag.md)

Defined in: [bee-js/src/bee.ts:205](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/bee.ts#L205)

Tag operations for tracking upload and synchronization progress.

***

### transaction

> `readonly` **transaction**: [`Transaction`](Transaction.md)

Defined in: [bee-js/src/bee.ts:160](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/bee.ts#L160)

Pending transaction operations for the Bee node's transaction queue.

***

### url

> `readonly` **url**: `string`

Defined in: [bee-js/src/bee.ts:59](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/bee.ts#L59)

Bee node API URL.

#### Example

```ts
`http://localhost:1633`
```

***

### wallet

> `readonly` **wallet**: [`Wallet`](Wallet.md)

Defined in: [bee-js/src/bee.ts:180](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/bee.ts#L180)

Node wallet operations (balances and external withdrawals).

## Methods

### calculateSingleOwnerChunkAddress()

> **calculateSingleOwnerChunkAddress**(`identifier`, `address`): [`Reference`](Reference.md)

Defined in: [bee-js/src/bee.ts:312](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/bee.ts#L312)

Calculates the address of a Single Owner Chunk based on its identifier and owner address.

#### Parameters

##### identifier

[`Identifier`](Identifier.md)

##### address

[`EthAddress`](EthAddress.md)

#### Returns

[`Reference`](Reference.md)

***

### createEnvelope()

> **createEnvelope**(`postageBatchId`, `reference`, `requestOptions?`): `Promise`\<[`EnvelopeWithBatchId`](../interfaces/EnvelopeWithBatchId.md)\>

Defined in: [bee-js/src/bee.ts:345](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/bee.ts#L345)

Creates the postage batch signature for a specific chunk address.

This is for advanced usage, where a pre-signed chunk can be uploaded
through a different Bee node.

#### Parameters

##### postageBatchId

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](BatchId.md)

##### reference

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](Reference.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`EnvelopeWithBatchId`](../interfaces/EnvelopeWithBatchId.md)\>

#### Example

```ts
const envelope = await bee.createEnvelope(batchId, chunk.address)
await bee.chunk.upload(envelope, chunk)
```

***

### makeContentAddressedChunk()

> **makeContentAddressedChunk**(`rawPayload`, `span?`): [`Chunk`](../interfaces/Chunk.md)

Defined in: [bee-js/src/bee.ts:267](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/bee.ts#L267)

Creates a Content Addressed Chunk.

To be uploaded with the uploadChunk method.

Payload size must be between 1 and 4096 bytes.

#### Parameters

##### rawPayload

Data to be stored in the chunk. If the data is a string, it will be converted to UTF-8 bytes.

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Bytes`](Bytes.md)

##### span?

Optional span for the chunk. If not provided, it will be set to the length of the payload.

`bigint` | [`Span`](Span.md)

#### Returns

[`Chunk`](../interfaces/Chunk.md)

***

### makeSingleOwnerChunk()

> **makeSingleOwnerChunk**(`address`, `span`, `payload`, `identifier`, `signer`): [`SingleOwnerChunk`](../interfaces/SingleOwnerChunk.md)

Defined in: [bee-js/src/bee.ts:296](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/bee.ts#L296)

Creates a Single Owner Chunk.

To be uploaded with the uploadChunk method.

Identical to chaining `makeContentAddressedChunk` and `toSingleOwnerChunk`.

Payload size must be between 1 and 4096 bytes.

#### Parameters

##### address

[`Reference`](Reference.md)

Address of the Content Addressed Chunk

##### span

[`Span`](Span.md)

Span of the Content Addressed Chunk

##### payload

[`Bytes`](Bytes.md)

Payload of the Content Addressed Chunk

##### identifier

The identifier of the chunk

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Identifier`](Identifier.md)

##### signer

The signer interface for signing the chunk

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`PrivateKey`](PrivateKey.md)

#### Returns

[`SingleOwnerChunk`](../interfaces/SingleOwnerChunk.md)

***

### rchash()

> **rchash**(`depth`, `anchor1`, `anchor2`, `requestOptions?`): `Promise`\<`number`\>

Defined in: [bee-js/src/bee.ts:372](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/bee.ts#L372)

Gets reserve commitment hash duration seconds.

To be able to participe in the storage incentives and not get frozen, this should
ideally run under 5 minutes.

This is a CPU intensice operation, as roughly 2^22 chunks are hashed in the process.

#### Parameters

##### depth

`number`

##### anchor1

`string`

##### anchor2

`string`

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<`number`\>

#### Example

```ts
const addresses = await bee.connectivity.getNodeAddresses()
const topology = await bee.connectivity.getTopology()
const result = await bee.rchash(topology.depth, addresses.overlay.toHex(), addresses.overlay.toHex())
// result is a number of seconds
```

***

### unmarshalContentAddressedChunk()

> **unmarshalContentAddressedChunk**(`data`): [`Chunk`](../interfaces/Chunk.md)

Defined in: [bee-js/src/bee.ts:277](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/bee.ts#L277)

Attempts to unmarshal arbitrary data into a Content Addressed Chunk.
Throws an error if the data is not a valid CAC.

#### Parameters

##### data

The chunk data (`span` and `payload`)

`Uint8Array`\<`ArrayBufferLike`\> | [`Bytes`](Bytes.md)

#### Returns

[`Chunk`](../interfaces/Chunk.md)

***

### unmarshalSingleOwnerChunk()

> **unmarshalSingleOwnerChunk**(`data`, `address`): [`SingleOwnerChunk`](../interfaces/SingleOwnerChunk.md)

Defined in: [bee-js/src/bee.ts:325](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/bee.ts#L325)

Attempts to unmarshal arbitrary data into a Single Owner Chunk.
Throws an error if the data is not a valid SOC.

#### Parameters

##### data

The chunk data

`Uint8Array`\<`ArrayBufferLike`\> | [`Bytes`](Bytes.md)

##### address

The address of the single owner chunk

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Reference`](Reference.md)

#### Returns

[`SingleOwnerChunk`](../interfaces/SingleOwnerChunk.md)

a single owner chunk or throws error
