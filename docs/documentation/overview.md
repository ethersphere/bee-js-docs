---
title: SDK Overview
id: overview
slug: /overview
sidebar_label: SDK Overview
description: Complete reference to all publicly available classes, methods, types, and utilities in the bee-js SDK.
---

This page serves as a complete reference to all publicly available classes, methods, types, and utilities provided by the `bee-js` SDK. After getting started, this is the place to explore everything you can do with `bee-js` and revisit whenever you need a reminder of how a function works or what a type represents.

### The two packages

`bee-js` is split across two packages:

| Package | Contents |
| ------- | -------- |
| [`@ethersphere/bee-js`](https://www.npmjs.com/package/@ethersphere/bee-js) | The `Bee` client and everything that talks to a Bee node over HTTP. |
| [`@ethersphere/core-sdk`](https://www.npmjs.com/package/@ethersphere/core-sdk) | The Swarm primitives with no network access: byte wrappers, chunks, Mantaray, erasure coding, encryption and stamp signing. |

Everything `core-sdk` exports that you are likely to need is re-exported by `bee-js`, so a single import is usually enough:

```js
import { Bee, Bytes, PrivateKey, Reference, Topic } from '@ethersphere/bee-js'
```

Install `core-sdk` directly when you want the primitives without the HTTP client, for example when hashing or signing chunks in a worker or on a server that never contacts a Bee node:

```sh
npm install @ethersphere/core-sdk
```

### Namespaces

Operations on the `Bee` class are grouped into namespaces by subject. Instead of one flat list of methods, you reach `bee.data.upload(...)`, `bee.stamp.getAll(...)`, `bee.feed.makeWriter(...)` and so on.

| Namespace | Purpose |
| --------- | ------- |
| [`bee.data`](../api/classes/Data.md) | Raw data uploads and downloads, backed by `/bytes`. |
| [`bee.file`](../api/classes/File.md) | Single-file uploads and downloads, backed by `/bzz`. |
| [`bee.collection`](../api/classes/Collection.md) | Multi-file (directory) uploads, backed by `/bzz`. |
| [`bee.chunk`](../api/classes/Chunk.md) | Individual chunk uploads and downloads, backed by `/chunks`. |
| [`bee.feed`](../api/classes/Feed.md) | Feed readers, writers and manifests. |
| [`bee.soc`](../api/classes/Soc.md) | Single owner chunk readers and writers. |
| [`bee.messaging`](../api/classes/Messaging.md) | PSS and GSOC messaging. |
| [`bee.stamp`](../api/classes/Stamp.md) | Postage batches expressed in amount and depth. |
| [`bee.storage`](../api/classes/Storage.md) | Postage batches expressed in size and duration. |
| [`bee.tag`](../api/classes/Tag.md) | Tags for tracking upload progress. |
| [`bee.pin`](../api/classes/Pin.md) | Local pinning and reuploading. |
| [`bee.grantee`](../api/classes/Grantee.md) | Access control (ACT) grantee lists. |
| [`bee.stake`](../api/classes/Stake.md) | Staking and the redistribution game. |
| [`bee.status`](../api/classes/Status.md) | Node health, version, chain and reserve state. |
| [`bee.connectivity`](../api/classes/Connectivity.md) | Peers, topology and node addresses. |
| [`bee.wallet`](../api/classes/Wallet.md) | Node wallet balances and external withdrawals. |
| [`bee.chequebook`](../api/classes/Chequebook.md) | Chequebook address, balance, deposits and withdrawals. |
| [`bee.cheque`](../api/classes/Cheque.md) | Cheques and cashouts. |
| [`bee.balance`](../api/classes/Balance.md) | SWAP balances with peers. |
| [`bee.settlement`](../api/classes/Settlement.md) | SWAP settlements with peers. |
| [`bee.transaction`](../api/classes/Transaction.md) | The node's pending transaction queue. |

A handful of methods stay directly on `bee` because they do not belong to any one subject: `makeContentAddressedChunk`, `unmarshalContentAddressedChunk`, `makeSingleOwnerChunk`, `unmarshalSingleOwnerChunk`, `calculateSingleOwnerChunkAddress`, `createEnvelope` and `rchash`.

:::tip Migrating from v12 or earlier
Earlier versions exposed every method directly on `bee`, for example `bee.uploadData` and `bee.getAllPostageBatch`. Those are now `bee.data.upload` and `bee.stamp.getAll`. A codemod ships with the library and rewrites the call sites for you. See [Migrating from v12 to v13](./migrating-to-v13.md) for the full mapping and the other breaking changes.
:::

### Type interfaces

`NumberString` is a branded type for marking strings that represent numbers. It interops with `string` and `bigint`
types. Where `NumberString` is present, `number` is disallowed in order to avoid pitfalls with unsafe large values.

### Byte primitives

All the classes below extend `Bytes`, therefore the following methods are available on all of them: `toUint8Array`,
`toHex`, `toBase64`, `toBase32`, `toUtf8`, `toJSON`, `static keccak256`, `static fromUtf8`.

The `toString` method uses `toHex`.

`Bytes` and its subclasses may be constructed with `new` from `Uint8Array` or hex `string`.

#### Elliptic

| Name       | Description               | Methods                                                |
| ---------- | ------------------------- | ------------------------------------------------------ |
| PrivateKey | 32 bytes private key      | `publicKey`, `sign`                                    |
| PublicKey  | 64 bytes public key       | `address`, `toCompressedUint8Array`, `toCompressedHex` |
| EthAddress | 20 bytes Ethereum address | `toChecksum`                                           |
| Signature  | 65 bytes signature        | `recoverPublicKey`                                     |

#### Swarm

| Name          | Description                         | Methods                         |
| ------------- | ----------------------------------- | ------------------------------- |
| Reference     | 32/64 bytes reference (chunk, feed) | `toCid`                         |
| Identifier    | 32 bytes identifier (SOC, Feed)     | -                               |
| TransactionId | 32 bytes transaction ID             | -                               |
| FeedIndex     | 8 bytes feed index (BE)             | `static fromBigInt`, `toBigInt` |
| Topic         | 32 bytes topic                      | `static fromString`             |
| PeerAddress   | 32 bytes peer address               | -                               |
| BatchId       | 32 bytes batch ID                   | -                               |
| Span          | 8 bytes span (LE)                   | `static fromBigInt`, `toBigInt` |

### Tokens

| Name | Description                 | Construction                                                        | Conversion                                                                       | Arithmetic and comparison                                                       |
| ---- | --------------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| DAI  | ERC20 DAI token (18 digits) | `static fromDecimalString`, `static fromWei`, `static fromFloat`    | `toWeiString`, `toWeiBigInt`, `toDecimalString`, `toFloat`, `toSignificantDigits`, `exchangeToBZZ` | `plus`, `minus`, `divide`, `gt`, `gte`, `lt`, `lte`, `eq`                        |
| BZZ  | ERC20 BZZ token (16 digits) | `static fromDecimalString`, `static fromPLUR`, `static fromFloat`   | `toPLURString`, `toPLURBigInt`, `toDecimalString`, `toFloat`, `toSignificantDigits`, `exchangeToDAI` | `plus`, `minus`, `divide`, `gt`, `gte`, `lt`, `lte`, `eq`                        |

Both are created through static factories, so they are called without `new`: `BZZ.fromDecimalString('1')`. Instances are immutable, and the arithmetic methods return a new instance rather than mutating the receiver.

### Units

| Name     | Description        | Methods                                                                                                                                                       |
| -------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Size     | A size in bytes    | `static fromBytes`, `static fromKilobytes`, `static fromMegabytes`, `static fromGigabytes`, `static parseFromString`, `toBytes`, `toGigabytes`, `toFormattedString` |
| Duration | A span of time     | `static fromSeconds`, `static fromHours`, `static fromDays`, `static fromWeeks`, `static fromYears`, `static fromEndDate`, `static parseFromString`, `toSeconds`, `toHours`, `toDays` |

Both use 1000 rather than 1024 as the base for unit conversions, matching the Swarm papers on theoretical and effective storage capacity.

### Swarm chunks

| Name             | Description                                                                                     | Creation                    |
| ---------------- | ----------------------------------------------------------------------------------------------- | --------------------------- |
| Chunk            | Span, max. 4096 bytes payload; address derived from content                                     | `makeContentAddressedChunk` |
| SingleOwnerChunk | Identifier, signature, span, max. 4096 bytes payload; address derived from identifier and owner | `makeSingleOwnerChunk`      |

### Swarm primitives

| Name          | Description                                          | Methods                                                                                                                                         |
| ------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| MantarayNode  | Compact trie with reference values and JSON metadata | `addFork`, `removeFork`, `calculateSelfAddress`, `find`, `findClosest`, `collect`, `marshal`, `unmarshal`, `saveRecursively`, `loadRecursively` |
| ChunkSplitter | Streaming BMT that turns a byte stream into chunks   | `append`, `finalize`, `static root`, `static encryptedRoot`                                                                                     |
| ChunkBuilder  | A single chunk under construction                    | `build`, `hash`, `encryptedHash`                                                                                                                |
| ChunkJoiner   | Reassembles a chunk tree back into bytes             | `join`, `static collect`, `static collectEncrypted`                                                                                             |
| Stamper       | Signs postage stamps locally                         | `stamp`, `getState`, `static fromBlank`, `static fromState`                                                                                     |

:::note `MerkleTree` was renamed
`MerkleTree` is now `ChunkSplitter`, and `ChunkBuilder.hash()` returns a `Reference` rather than a `Uint8Array`. The [codemod](./migrating-to-v13.md) handles both changes.
:::

### Swarm objects

| Name       | Description             | Creation              |
| ---------- | ----------------------- | --------------------- |
| SOCWriter  | SingleOwnerChunk writer | `bee.soc.makeWriter`  |
| SOCReader  | SingleOwnerChunk reader | `bee.soc.makeReader`  |
| FeedWriter | Feed writer             | `bee.feed.makeWriter` |
| FeedReader | Feed reader             | `bee.feed.makeReader` |

### Bee API

Each `bee-js` method corresponds to a particular endpoint from the API. The chart below maps each method to its corresponding API endpoint. Refer to the [Bee API specifications](https://docs.ethswarm.org/api/) for more details about each endpoint. It also specifies which [node type](https://docs.ethswarm.org/docs/bee/working-with-bee/node-types) is supported for each method/endpoint.

- ❌❌✅ - Full node only
- ❌✅✅ - Light node and full node
- ✅✅✅ - Ultra-light node, light node and full node

| JS Call | Bee Endpoint | Bee Mode |
| --- | --- | --- |
| `file.upload` | `POST /bzz` [🔗](https://docs.ethswarm.org/api/#tag/BZZ/paths/~1bzz/post) | ❌✅✅ |
| `collection.uploadFromDirectory` _Node.js_ | `POST /bzz` [🔗](https://docs.ethswarm.org/api/#tag/BZZ/paths/~1bzz/post) | ❌✅✅ |
| `collection.uploadFromFileList` _Browser_ | `POST /bzz` [🔗](https://docs.ethswarm.org/api/#tag/BZZ/paths/~1bzz/post) | ❌✅✅ |
| `collection.upload` | `POST /bzz` [🔗](https://docs.ethswarm.org/api/#tag/BZZ/paths/~1bzz/post) | ❌✅✅ |
| `data.upload` | `POST /bytes` [🔗](https://docs.ethswarm.org/api/#tag/Bytes/paths/~1bytes/post) | ❌✅✅ |
| `chunk.upload` | `POST /chunks` [🔗](https://docs.ethswarm.org/api/#tag/Chunk/paths/~1chunks/post) | ❌✅✅ |
| `collection.streamFromDirectory` _Node.js_ | `POST /chunks` [🔗](https://docs.ethswarm.org/api/#tag/Chunk/paths/~1chunks/post) | ❌✅✅ |
| `collection.stream` _Browser_ | `POST /chunks` [🔗](https://docs.ethswarm.org/api/#tag/Chunk/paths/~1chunks/post) | ❌✅✅ |
| `SOCWriter.upload` | `POST /soc/:owner/:identifier` [🔗](https://docs.ethswarm.org/api/#tag/Single-owner-chunk/paths/~1soc~1%7Bowner%7D~1%7Bid%7D/post) | ❌✅✅ |
| `FeedReader.downloadReference` / `downloadPayload` | `GET /feeds/:owner/:topic` [🔗](https://docs.ethswarm.org/api/#tag/Feed/paths/~1feeds~1%7Bowner%7D~1%7Btopic%7D/get) | ✅✅✅ |
| `FeedWriter.uploadReference` / `uploadPayload` | `POST /soc/:owner/:identifier` [🔗](https://docs.ethswarm.org/api/#tag/Single-owner-chunk/paths/~1soc~1%7Bowner%7D~1%7Bid%7D/post) | ❌✅✅ |
| `file.download` | `GET /bzz/:reference` [🔗](https://docs.ethswarm.org/api/#tag/BZZ/paths/~1bzz~1%7Breference%7D/get) | ✅✅✅ |
| `file.download` _with path_ | `GET /bzz/:reference/:path` [🔗](https://docs.ethswarm.org/api/#tag/BZZ/paths/~1bzz~1%7Breference%7D~1%7Bpath%7D/get) | ✅✅✅ |
| `file.downloadReadable` | `GET /bzz/:reference` [🔗](https://docs.ethswarm.org/api/#tag/BZZ/paths/~1bzz~1%7Breference%7D/get) | ✅✅✅ |
| `data.download` | `GET /bytes/:reference` [🔗](https://docs.ethswarm.org/api/#tag/Bytes/paths/~1bytes~1%7Breference%7D/get) | ✅✅✅ |
| `data.downloadReadable` | `GET /bytes/:reference` [🔗](https://docs.ethswarm.org/api/#tag/Bytes/paths/~1bytes~1%7Breference%7D/get) | ✅✅✅ |
| `data.probe` | `HEAD /bytes/:reference` [🔗](https://docs.ethswarm.org/api/#tag/Bytes/paths/~1bytes~1%7Breference%7D/head) | ✅✅✅ |
| `chunk.download` | `GET /chunks/:reference` [🔗](https://docs.ethswarm.org/api/#tag/Chunk/paths/~1chunks~1%7Baddress%7D/get) | ✅✅✅ |
| `feed.createManifest` | `POST /feeds/:owner/:topic` [🔗](https://docs.ethswarm.org/api/#tag/Feed/paths/~1feeds~1%7Bowner%7D~1%7Btopic%7D/post) | ❌✅✅ |
| `connectivity.isConnected` | `GET /` | ✅✅✅ |
| `connectivity.getNodeAddresses` | `GET /addresses` [🔗](https://docs.ethswarm.org/api/#tag/Connectivity/paths/~1addresses/get) | ✅✅✅ |
| `connectivity.getPeers` | `GET /peers` [🔗](https://docs.ethswarm.org/api/#tag/Connectivity/paths/~1peers/get) | ✅✅✅ |
| `connectivity.getBlocklist` | `GET /blocklist` [🔗](https://docs.ethswarm.org/api/#tag/Connectivity/paths/~1blocklist/get) | ✅✅✅ |
| `connectivity.removePeer` | `DELETE /peers/:peer` [🔗](https://docs.ethswarm.org/api/#tag/Connectivity/paths/~1peers~1%7Baddress%7D/delete) | ✅✅✅ |
| `connectivity.ping` | `POST /pingpong/:peer` [🔗](https://docs.ethswarm.org/api/#tag/Connectivity/paths/~1pingpong~1%7Bpeer-id%7D/post) | ✅✅✅ |
| `connectivity.getTopology` | `GET /topology` [🔗](https://docs.ethswarm.org/api/#tag/Connectivity/paths/~1topology/get) | ✅✅✅ |
| `status.getHealth` | `GET /health` [🔗](https://docs.ethswarm.org/api/#tag/Status/paths/~1health/get) | ✅✅✅ |
| `status.getReadiness` | `GET /readiness` [🔗](https://docs.ethswarm.org/api/#tag/Status/paths/~1readiness/get) | ✅✅✅ |
| `status.getNodeInfo` | `GET /node` [🔗](https://docs.ethswarm.org/api/#tag/Status/paths/~1node/get) | ✅✅✅ |
| `status.get` | `GET /status` [🔗](https://docs.ethswarm.org/api/#tag/Node-Status/paths/~1status/get) | ✅✅✅ |
| `status.getChainState` | `GET /chainstate` [🔗](https://docs.ethswarm.org/api/#tag/Status/paths/~1chainstate/get) | ❌✅✅ |
| `status.getReserveState` | `GET /reservestate` [🔗](https://docs.ethswarm.org/api/#tag/Status/paths/~1reservestate/get) | ❌❌✅ |
| `wallet.getBalance` | `GET /wallet` [🔗](https://docs.ethswarm.org/api/#tag/Wallet/paths/~1wallet/get) | ❌✅✅ |
| `wallet.withdrawBZZ` | `POST /wallet/withdraw/bzz` [🔗](https://docs.ethswarm.org/api/#tag/Wallet/paths/~1wallet~1withdraw~1bzz/post) | ❌✅✅ |
| `wallet.withdrawDAI` | `POST /wallet/withdraw/nativetoken` [🔗](https://docs.ethswarm.org/api/#tag/Wallet/paths/~1wallet~1withdraw~1nativetoken/post) | ❌✅✅ |
| `balance.getAll` | `GET /balances` [🔗](https://docs.ethswarm.org/api/#tag/Balance/paths/~1balances/get) | ❌✅✅ |
| `balance.getPeer` | `GET /balances/:peer` [🔗](https://docs.ethswarm.org/api/#tag/Balance/paths/~1balances~1%7Baddress%7D/get) | ❌✅✅ |
| `balance.getAllPastDueConsumption` | `GET /consumed` [🔗](https://docs.ethswarm.org/api/#tag/Balance/paths/~1consumed/get) | ❌✅✅ |
| `balance.getAllPastDueConsumptionForPeer` | `GET /consumed/:peer` [🔗](https://docs.ethswarm.org/api/#tag/Balance/paths/~1consumed~1%7Baddress%7D/get) | ❌✅✅ |
| `settlement.getAll` | `GET /settlements` [🔗](https://docs.ethswarm.org/api/#tag/Settlements/paths/~1settlements/get) | ❌✅✅ |
| `settlement.get` | `GET /settlements/:peer` [🔗](https://docs.ethswarm.org/api/#tag/Settlements/paths/~1settlements~1%7Baddress%7D/get) | ❌✅✅ |
| `chequebook.getAddress` | `GET /chequebook/address` [🔗](https://docs.ethswarm.org/api/#tag/Chequebook/paths/~1chequebook~1address/get) | ❌✅✅ |
| `chequebook.getBalance` | `GET /chequebook/balance` [🔗](https://docs.ethswarm.org/api/#tag/Chequebook/paths/~1chequebook~1balance/get) | ❌✅✅ |
| `chequebook.deposit` | `POST /chequebook/deposit` [🔗](https://docs.ethswarm.org/api/#tag/Chequebook/paths/~1chequebook~1deposit/post) | ❌✅✅ |
| `chequebook.withdraw` | `POST /chequebook/withdraw` [🔗](https://docs.ethswarm.org/api/#tag/Chequebook/paths/~1chequebook~1withdraw/post) | ❌✅✅ |
| `cheque.getAllLatest` | `GET /chequebook/cheque` [🔗](https://docs.ethswarm.org/api/#tag/Chequebook/paths/~1chequebook~1cheque/get) | ❌✅✅ |
| `cheque.getAllLatestForPeer` | `GET /chequebook/cheque/:peer` [🔗](https://docs.ethswarm.org/api/#tag/Chequebook/paths/~1chequebook~1cheque~1%7Bpeer-id%7D/get) | ❌✅✅ |
| `cheque.getLastCashoutAction` | `GET /chequebook/cashout/:peer` [🔗](https://docs.ethswarm.org/api/#tag/Chequebook/paths/~1chequebook~1cashout~1%7Bpeer-id%7D/get) | ❌✅✅ |
| `cheque.cashoutLast` | `POST /chequebook/cashout/:peer` [🔗](https://docs.ethswarm.org/api/#tag/Chequebook/paths/~1chequebook~1cashout~1%7Bpeer-id%7D/post) | ❌✅✅ |
| `transaction.getAll` | `GET /transactions` [🔗](https://docs.ethswarm.org/api/#tag/Transaction/paths/~1transactions/get) | ❌✅✅ |
| `transaction.get` | `GET /transactions/:id` [🔗](https://docs.ethswarm.org/api/#tag/Transaction/paths/~1transactions~1%7BtxHash%7D/get) | ❌✅✅ |
| `transaction.rebroadcast` | `POST /transactions/:id` [🔗](https://docs.ethswarm.org/api/#tag/Transaction/paths/~1transactions~1%7BtxHash%7D/post) | ❌✅✅ |
| `transaction.cancel` | `DELETE /transactions/:id` [🔗](https://docs.ethswarm.org/api/#tag/Transaction/paths/~1transactions~1%7BtxHash%7D/delete) | ❌✅✅ |
| `tag.create` | `POST /tags` [🔗](https://docs.ethswarm.org/api/#tag/Tag/paths/~1tags/post) | ❌✅✅ |
| `tag.get` | `GET /tags/:id` [🔗](https://docs.ethswarm.org/api/#tag/Tag/paths/~1tags~1%7Buid%7D/get) | ❌✅✅ |
| `tag.getAll` | `GET /tags` [🔗](https://docs.ethswarm.org/api/#tag/Tag/paths/~1tags/get) | ❌✅✅ |
| `tag.delete` | `DELETE /tags/:id` [🔗](https://docs.ethswarm.org/api/#tag/Tag/paths/~1tags~1%7Buid%7D/delete) | ❌✅✅ |
| `tag.update` | `PATCH /tags/:id` [🔗](https://docs.ethswarm.org/api/#tag/Tag/paths/~1tags~1%7Buid%7D/patch) | ❌✅✅ |
| `pin.add` | `POST /pins/:reference` [🔗](https://docs.ethswarm.org/api/#tag/Pinning/paths/~1pins~1%7Breference%7D/post) | ✅✅✅ |
| `pin.getAll` | `GET /pins` [🔗](https://docs.ethswarm.org/api/#tag/Pinning/paths/~1pins/get) | ✅✅✅ |
| `pin.get` | `GET /pins/:reference` [🔗](https://docs.ethswarm.org/api/#tag/Pinning/paths/~1pins~1%7Breference%7D/get) | ✅✅✅ |
| `pin.remove` | `DELETE /pins/:reference` [🔗](https://docs.ethswarm.org/api/#tag/Pinning/paths/~1pins~1%7Breference%7D/delete) | ✅✅✅ |
| `pin.reuploadData` | `PUT /stewardship/:reference` [🔗](https://docs.ethswarm.org/api/#tag/Stewardship/paths/~1stewardship~1%7Breference%7D/put) | ❌✅✅ |
| `data.isRetrievable` | `GET /stewardship/:reference` [🔗](https://docs.ethswarm.org/api/#tag/Stewardship/paths/~1stewardship~1%7Breference%7D/get) | ✅✅✅ |
| `grantee.get` | `GET /grantee/:reference` [🔗](https://docs.ethswarm.org/api/#tag/ACT/paths/~1grantee~1%7Breference%7D/get) | ❌✅✅ |
| `grantee.create` | `POST /grantee` [🔗](https://docs.ethswarm.org/api/#tag/ACT/paths/~1grantee/post) | ❌✅✅ |
| `grantee.patch` | `PATCH /grantee/:reference` [🔗](https://docs.ethswarm.org/api/#tag/ACT/paths/~1grantee~1%7Breference%7D/patch) | ❌✅✅ |
| `messaging.pssSend` | `POST /pss/send/:topic/:target` [🔗](https://docs.ethswarm.org/api/#tag/Postal-Service-for-Swarm/paths/~1pss~1send~1%7Btopic%7D~1%7Btargets%7D/post) | ❌✅✅ |
| `messaging.pssSubscribe` _Websocket_ | `GET /pss/subscribe/:topic` [🔗](https://docs.ethswarm.org/api/#tag/Postal-Service-for-Swarm/paths/~1pss~1subscribe~1%7Btopic%7D/get) | ❌❌✅ |
| `messaging.pssReceive` | `GET /pss/subscribe/:topic` [🔗](https://docs.ethswarm.org/api/#tag/Postal-Service-for-Swarm/paths/~1pss~1subscribe~1%7Btopic%7D/get) | ❌❌✅ |
| `messaging.gsocSend` | `POST /soc/:owner/:identifier` [🔗](https://docs.ethswarm.org/api/#tag/Single-owner-chunk/paths/~1soc~1%7Bowner%7D~1%7Bid%7D/post) | ❌✅✅ |
| `messaging.gsocSubscribe` _Websocket_ | `GET /gsoc/subscribe/:address` | ❌❌✅ |
| `stamp.getAll` | `GET /stamps` [🔗](https://docs.ethswarm.org/api/#tag/Postage-Stamps/paths/~1stamps/get) | ❌✅✅ |
| `stamp.get` | `GET /stamps/:batchId` [🔗](https://docs.ethswarm.org/api/#tag/Postage-Stamps/paths/~1stamps~1%7Bbatch_id%7D/get) | ❌✅✅ |
| `stamp.getBuckets` | `GET /stamps/:batchId/buckets` [🔗](https://docs.ethswarm.org/api/#tag/Postage-Stamps/paths/~1stamps~1%7Bbatch_id%7D~1buckets/get) | ❌✅✅ |
| `stamp.getAllGlobal` | `GET /batches` [🔗](https://docs.ethswarm.org/api/#tag/Postage-Stamps/paths/~1batches/get) | ❌✅✅ |
| `stamp.getGlobal` | `GET /batches/:batchId` [🔗](https://docs.ethswarm.org/api/#tag/Postage-Stamps/paths/~1batches/get) | ❌✅✅ |
| `stamp.create` | `POST /stamps/:amount/:depth` [🔗](https://docs.ethswarm.org/api/#tag/Postage-Stamps/paths/~1stamps~1%7Bamount%7D~1%7Bdepth%7D/post) | ❌✅✅ |
| `stamp.topUp` | `PATCH /stamps/topup/:batchId/:amount` [🔗](https://docs.ethswarm.org/api/#tag/Postage-Stamps/paths/~1stamps~1topup~1%7Bbatch_id%7D~1%7Bamount%7D/patch) | ❌✅✅ |
| `stamp.dilute` | `PATCH /stamps/dilute/:batchId/:depth` [🔗](https://docs.ethswarm.org/api/#tag/Postage-Stamps/paths/~1stamps~1dilute~1%7Bbatch_id%7D~1%7Bdepth%7D/patch) | ❌✅✅ |
| `stamp.updateLabel` | `PATCH /stamps/:batchId` [🔗](https://docs.ethswarm.org/api/#tag/Postage-Stamps/paths/~1stamps~1%7Bbatch_id%7D/patch) | ❌✅✅ |
| `createEnvelope` | `POST /envelope/:reference` [🔗](https://docs.ethswarm.org/api/#tag/Envelope/paths/~1envelope~1%7Baddress%7D/post) | ❌✅✅ |
| `stake.get` | `GET /stake` [🔗](https://docs.ethswarm.org/api/#tag/Staking/paths/~1stake/get) | ❌❌✅ |
| `stake.getWithdrawable` | `GET /stake/withdrawable` [🔗](https://docs.ethswarm.org/api/#tag/Staking/paths/~1stake~1withdrawable/get) | ❌❌✅ |
| `stake.deposit` | `POST /stake` [🔗](https://docs.ethswarm.org/api/#tag/Staking/paths/~1stake~1%7Bamount%7D/post) | ❌❌✅ |
| `stake.withdrawSurplus` | `DELETE /stake/withdrawable` [🔗](https://docs.ethswarm.org/api/#tag/Staking/paths/~1stake~1withdrawable/delete) | ❌❌✅ |
| `stake.migrate` | `DELETE /stake` [🔗](https://docs.ethswarm.org/api/#tag/Staking/paths/~1stake/delete) | ❌❌✅ |
| `stake.getRedistributionState` | `GET /redistributionstate` [🔗](https://docs.ethswarm.org/api/#tag/RedistributionState/paths/~1redistributionstate/get) | ❌❌✅ |
| `rchash` | `GET /rchash/:depth/:anchor1/:anchor2` [🔗](https://docs.ethswarm.org/api/#tag/RCHash/paths/~1rchash~1%7Bdepth%7D~1%7Banchor1%7D~1%7Banchor2%7D/get) | ❌❌✅ |

### Utils

Utilities are exposed under the `Utils` namespace: `import { Utils } from '@ethersphere/bee-js'`.

#### General

- `getCollectionSize`
- `getFolderSize`
- `makeCollectionFromFileList`

#### PSS

- `makeMaxTarget`

#### Erasure Coding

- `approximateOverheadForRedundancyLevel`
- `getRedundancyStat`
- `getRedundancyStats`

#### Stamps

- `getAmountForDuration`
- `getDepthForSize`
- `getStampCost`
- `getStampDuration`
- `getStampEffectiveBytes`
- `getStampEffectiveBytesBreakpoints`
- `getStampTheoreticalBytes`
- `getStampUsage`
- `convertEnvelopeToMarshaledStamp`
- `mapPostageBatch`
- `unmapPostageBatch`
