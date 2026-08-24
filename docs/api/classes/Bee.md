# Class: Bee

Defined in: [bee-js/src/bee.ts:51](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/bee.ts#L51)

The main component that abstracts operations available on the Bee API.

Instantiate with `new Bee(url, options)` where `url` is the Bee node URL and `options` are optional parameters.

## Example

```ts
const bee = new Bee('http://localhost:1633')
```

## Constructors

### Constructor

> **new Bee**(`url`, `options?`): `Bee`

Defined in: [bee-js/src/bee.ts:92](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/bee.ts#L92)

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

> `readonly` **balance**: `Balance`

Defined in: [bee-js/src/bee.ts:148](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/bee.ts#L148)

SWAP balance operations. Related to the bandwidth incentives and the chequebook.

***

### cheque

> `readonly` **cheque**: `Cheque`

Defined in: [bee-js/src/bee.ts:198](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/bee.ts#L198)

Cheque operations (last cheques and cashouts).

***

### chequebook

> `readonly` **chequebook**: `Chequebook`

Defined in: [bee-js/src/bee.ts:193](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/bee.ts#L193)

Chequebook contract operations (address, balance, deposit, withdraw).

***

### chunk

> `readonly` **chunk**: `Chunk`

Defined in: [bee-js/src/bee.ts:238](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/bee.ts#L238)

Chunk operations backed by the `/chunks` endpoint.

***

### collection

> `readonly` **collection**: `Collection`

Defined in: [bee-js/src/bee.ts:248](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/bee.ts#L248)

Collection (multi-file) operations backed by the `/bzz` endpoint.

***

### connectivity

> `readonly` **connectivity**: `Connectivity`

Defined in: [bee-js/src/bee.ts:168](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/bee.ts#L168)

Peer, topology and network connectivity operations.

***

### data

> `readonly` **data**: `Data`

Defined in: [bee-js/src/bee.ts:233](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/bee.ts#L233)

Raw data operations backed by the `/bytes` endpoint.

***

### feed

> `readonly` **feed**: `Feed`

Defined in: [bee-js/src/bee.ts:223](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/bee.ts#L223)

Feed operations.

***

### file

> `readonly` **file**: `File`

Defined in: [bee-js/src/bee.ts:243](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/bee.ts#L243)

Single-file operations backed by the `/bzz` endpoint.

***

### grantee

> `readonly` **grantee**: `Grantee`

Defined in: [bee-js/src/bee.ts:213](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/bee.ts#L213)

Grantee (access control) operations.

***

### messaging

> `readonly` **messaging**: `Messaging`

Defined in: [bee-js/src/bee.ts:218](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/bee.ts#L218)

Messaging protocols — PSS and GSOC.

***

### network

> `readonly` **network**: `"gnosis"` \| `"sepolia"`

Defined in: [bee-js/src/bee.ts:78](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/bee.ts#L78)

Network on which the Bee node is running.

This is currently used to determine block time for postage batch time-to-live (TTL) calculations.
The block time for `gnosis` is `5` seconds, and for `sepolia` it is `15` seconds.

#### Default

```ts
'gnosis'
```

***

### pin

> `readonly` **pin**: `Pin`

Defined in: [bee-js/src/bee.ts:208](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/bee.ts#L208)

Local pinning operations.

***

### settlement

> `readonly` **settlement**: `Settlement`

Defined in: [bee-js/src/bee.ts:153](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/bee.ts#L153)

Settlement operations. Related to the bandwidth incentives and the chequebook.

***

### signer?

> `readonly` `optional` **signer**: [`PrivateKey`](PrivateKey.md)

Defined in: [bee-js/src/bee.ts:68](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/bee.ts#L68)

Default signer (a private key) used for signing.

Mainly used in single-owner chunk (SOC) related operations, and consequently in feeds.

If not provided, methods such as `makeFeedWriter` and `makeSOCWriter`
must be provided with a private key in their respective function calls.

***

### soc

> `readonly` **soc**: `Soc`

Defined in: [bee-js/src/bee.ts:228](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/bee.ts#L228)

Single owner chunk (SOC) reader/writer operations.

***

### stake

> `readonly` **stake**: `Stake`

Defined in: [bee-js/src/bee.ts:163](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/bee.ts#L163)

Staking operations.

***

### stamp

> `readonly` **stamp**: `Stamp`

Defined in: [bee-js/src/bee.ts:183](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/bee.ts#L183)

Low-level postage batch (stamp) operations.

***

### status

> `readonly` **status**: `Status`

Defined in: [bee-js/src/bee.ts:173](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/bee.ts#L173)

Node status, health, version and chain/reserve state operations.

***

### storage

> `readonly` **storage**: `Storage`

Defined in: [bee-js/src/bee.ts:188](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/bee.ts#L188)

Ergonomic storage operations expressed in terms of size and duration.

***

### tag

> `readonly` **tag**: `Tag`

Defined in: [bee-js/src/bee.ts:203](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/bee.ts#L203)

Tag operations for tracking upload and synchronization progress.

***

### transaction

> `readonly` **transaction**: `Transaction`

Defined in: [bee-js/src/bee.ts:158](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/bee.ts#L158)

Pending transaction operations for the Bee node's transaction queue.

***

### url

> `readonly` **url**: `string`

Defined in: [bee-js/src/bee.ts:58](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/bee.ts#L58)

Bee node API URL.

#### Example

```ts
`http://localhost:1633`
```

***

### wallet

> `readonly` **wallet**: `Wallet`

Defined in: [bee-js/src/bee.ts:178](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/bee.ts#L178)

Node wallet operations (balances and external withdrawals).

## Methods

### calculateSingleOwnerChunkAddress()

> **calculateSingleOwnerChunkAddress**(`identifier`, `address`): [`Reference`](Reference.md)

Defined in: [bee-js/src/bee.ts:305](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/bee.ts#L305)

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

Defined in: [bee-js/src/bee.ts:338](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/bee.ts#L338)

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

Defined in: [bee-js/src/bee.ts:260](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/bee.ts#L260)

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

Defined in: [bee-js/src/bee.ts:289](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/bee.ts#L289)

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

Defined in: [bee-js/src/bee.ts:365](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/bee.ts#L365)

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

Defined in: [bee-js/src/bee.ts:270](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/bee.ts#L270)

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

Defined in: [bee-js/src/bee.ts:318](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/bee.ts#L318)

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
