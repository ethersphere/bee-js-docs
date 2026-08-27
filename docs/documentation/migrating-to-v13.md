---
title: Migrating from v12 to v13
id: migrating-to-v13
slug: /migrating-to-v13
sidebar_label: Migrating from v12
description: What changed in bee-js v13, how to run the bundled codemod, and the complete mapping from the old flat Bee methods to the new namespaced ones.
---

Version 13 reorganizes the `bee-js` surface. The `Bee` class had grown to well over a hundred methods, so they are now grouped into namespaces by subject, and the Swarm primitives that need no network access were moved into a separate package.

Almost nothing was removed in the process. Every v12 method but one has a v13 equivalent, and the renames can be rewritten automatically.

## Run the codemod

A codemod ships with the library. It reads your project's types to work out which variables hold a `Bee` instance, then rewrites the call sites in place:

```sh
npx bee-js-codemod ./src --from v12
```

Requirements and behavior:

- `typescript` 5.x must be installed in your project, since the codemod uses the TypeScript compiler API to resolve types. TypeScript 7 removed that API and is not supported.
- It rewrites `.ts`, `.tsx`, `.js` and `.jsx` files, skipping `node_modules`, `dist` and `.git`.
- It edits files in place, so commit or stash your work first.
- The target can be a directory or a single file.

It handles the method renames below, the `MerkleTree` rename, the `@upcoming/swarm-core` import path, and `jest.spyOn` calls that reference method names as strings. It cannot see through dynamic property access such as `bee[methodName]()`, so check for those by hand.

## What changed

### Methods moved into namespaces

`bee.uploadData` is now `bee.data.upload`, `bee.getAllPostageBatch` is now `bee.stamp.getAll`, and so on. See the [full mapping](#full-mapping) below.

A few methods stayed directly on `bee` because they do not belong to any one subject: `makeContentAddressedChunk`, `unmarshalContentAddressedChunk`, `makeSingleOwnerChunk`, `unmarshalSingleOwnerChunk`, `calculateSingleOwnerChunkAddress`, `createEnvelope` and `rchash`.

### Swarm primitives moved to `@ethersphere/core-sdk`

The byte wrappers, chunk construction, the Mantaray trie, erasure coding, encryption and postage stamp signing now live in [`@ethersphere/core-sdk`](https://www.npmjs.com/package/@ethersphere/core-sdk), which performs no network I/O.

`bee-js` depends on it and re-exports everything you are likely to need, so existing imports keep working:

```js
import { Bee, Bytes, PrivateKey, Reference, Topic } from '@ethersphere/bee-js'
```

Install `core-sdk` directly when you want the primitives without the HTTP client, for example in a worker or on a server that never contacts a Bee node.

If you were using the `@upcoming/swarm-core` prerelease, the package is now `@ethersphere/core-sdk`. The codemod rewrites that import path.

### `MerkleTree` is now `ChunkSplitter`

`MerkleTree` was renamed to `ChunkSplitter`, and `ChunkBuilder.hash()` returns a `Reference` instead of a `Uint8Array`. The codemod renames the class and appends `.toUint8Array()` to `hash()` calls so the result type stays the same.

`ChunkJoiner` is the counterpart that reassembles a chunk tree back into bytes.

### `bee.stamp` and `bee.storage`

Postage batch operations are split across two namespaces. `bee.stamp` is the low-level view, taking an amount and a depth. `bee.storage` is the ergonomic view, taking a `Size` and a `Duration`. The old `createPostageBatch` maps to `bee.stamp.create`, and the old `buyStorage` maps to `bee.storage.buy`.

### `waitForUsablePostageStamp` is gone

`bee.waitForUsablePostageStamp(batchId)` is the one v12 method with no direct v13 replacement, and the codemod cannot rewrite it. It is no longer needed in most cases: `bee.stamp.create` and `bee.storage.buy` wait for the new batch to become usable before resolving, and you can opt out with `waitForUsable: false` or change the deadline with `waitForUsableTimeout`.

Aside from that one method, the codemod covers every public method the `Bee` class had in v12.

## Also worth checking

These are not v13 changes, but they are easy to miss when upgrading from older code or from examples written against earlier versions.

### PSS and GSOC handlers require `onClose`

Since v10, the handler object passed to `bee.messaging.pssSubscribe` and `bee.messaging.gsocSubscribe` must provide all three callbacks. A handler without `onClose` throws `Expected function for onClose, got: undefined` before the subscription is opened:

```js
const subscription = bee.messaging.pssSubscribe(topic, {
  onMessage: message => console.log(message.toUtf8()),
  onError: error => console.error(error),
  onClose: () => console.log('subscription closed'),
})
```

This is not something the codemod can fill in for you, since only you know what closing should do.

### Ambiguous feed methods are deprecated

`FeedWriter.upload()` and `FeedReader.download()` still work, but it is ambiguous whether the value being written or read is a payload or a reference. Use the explicit pairs instead:

| Deprecated | Use instead |
| --- | --- |
| `writer.upload(batchId, value)` | `writer.uploadReference(batchId, reference)` or `writer.uploadPayload(batchId, payload)` |
| `reader.download()` | `reader.downloadReference()` or `reader.downloadPayload()` |

## Full mapping

### `bee.data`

| v12 | v13 |
| --- | --- |
| `bee.downloadData` | `bee.data.download` |
| `bee.downloadReadableData` | `bee.data.downloadReadable` |
| `bee.isReferenceRetrievable` | `bee.data.isRetrievable` |
| `bee.probeData` | `bee.data.probe` |
| `bee.uploadData` | `bee.data.upload` |

### `bee.file`

| v12 | v13 |
| --- | --- |
| `bee.downloadFile` | `bee.file.download` |
| `bee.downloadReadableFile` | `bee.file.downloadReadable` |
| `bee.uploadFile` | `bee.file.upload` |

### `bee.collection`

| v12 | v13 |
| --- | --- |
| `bee.hashDirectory` | `bee.collection.hashDirectory` |
| `bee.streamFiles` | `bee.collection.stream` |
| `bee.streamDirectory` | `bee.collection.streamFromDirectory` |
| `bee.uploadCollection` | `bee.collection.upload` |
| `bee.uploadFilesFromDirectory` | `bee.collection.uploadFromDirectory` |
| `bee.uploadFiles` | `bee.collection.uploadFromFileList` |

### `bee.chunk`

| v12 | v13 |
| --- | --- |
| `bee.downloadChunk` | `bee.chunk.download` |
| `bee.uploadChunk` | `bee.chunk.upload` |

### `bee.feed`

| v12 | v13 |
| --- | --- |
| `bee.createFeedManifest` | `bee.feed.createManifest` |
| `bee.fetchLatestFeedUpdate` | `bee.feed.fetchLatestUpdate` |
| `bee.isFeedRetrievable` | `bee.feed.isRetrievable` |
| `bee.makeFeedReader` | `bee.feed.makeReader` |
| `bee.makeFeedWriter` | `bee.feed.makeWriter` |

### `bee.soc`

| v12 | v13 |
| --- | --- |
| `bee.makeSOCReader` | `bee.soc.makeReader` |
| `bee.makeSOCWriter` | `bee.soc.makeWriter` |

### `bee.messaging`

| v12 | v13 |
| --- | --- |
| `bee.gsocMine` | `bee.messaging.gsocMine` |
| `bee.gsocSend` | `bee.messaging.gsocSend` |
| `bee.gsocSubscribe` | `bee.messaging.gsocSubscribe` |
| `bee.pssReceive` | `bee.messaging.pssReceive` |
| `bee.pssSend` | `bee.messaging.pssSend` |
| `bee.pssSubscribe` | `bee.messaging.pssSubscribe` |

### `bee.stamp`

| v12 | v13 |
| --- | --- |
| `bee.calculateTopUpForBzz` | `bee.stamp.calculateTopUpForBZZ` |
| `bee.createPostageBatch` | `bee.stamp.create` |
| `bee.diluteBatch` | `bee.stamp.dilute` |
| `bee.getPostageBatch` | `bee.stamp.get` |
| `bee.getAllPostageBatch` | `bee.stamp.getAll` |
| `bee.getPostageBatches` | `bee.stamp.getAll` |
| `bee.getAllGlobalPostageBatch` | `bee.stamp.getAllGlobal` |
| `bee.getGlobalPostageBatches` | `bee.stamp.getAllGlobal` |
| `bee.getPostageBatchBuckets` | `bee.stamp.getBuckets` |
| `bee.getGlobalPostageBatch` | `bee.stamp.getGlobal` |
| `bee.topUpBatch` | `bee.stamp.topUp` |
| `bee.updatePostageBatchLabel` | `bee.stamp.updateLabel` |

### `bee.storage`

| v12 | v13 |
| --- | --- |
| `bee.buyStorage` | `bee.storage.buy` |
| `bee.extendStorage` | `bee.storage.extend` |
| `bee.extendStorageDuration` | `bee.storage.extendDuration` |
| `bee.extendStorageSize` | `bee.storage.extendSize` |
| `bee.getStorageCost` | `bee.storage.getCost` |
| `bee.getDurationExtensionCost` | `bee.storage.getDurationExtensionCost` |
| `bee.getExtensionCost` | `bee.storage.getExtensionCost` |
| `bee.getSizeExtensionCost` | `bee.storage.getSizeExtensionCost` |
| `bee.renameStorage` | `bee.storage.rename` |

### `bee.tag`

| v12 | v13 |
| --- | --- |
| `bee.createTag` | `bee.tag.create` |
| `bee.deleteTag` | `bee.tag.delete` |
| `bee.retrieveTag` | `bee.tag.get` |
| `bee.getAllTags` | `bee.tag.getAll` |
| `bee.updateTag` | `bee.tag.update` |

### `bee.pin`

| v12 | v13 |
| --- | --- |
| `bee.pin` | `bee.pin.add` |
| `bee.getPin` | `bee.pin.get` |
| `bee.getAllPins` | `bee.pin.getAll` |
| `bee.unpin` | `bee.pin.remove` |
| `bee.reuploadPinnedData` | `bee.pin.reuploadData` |

### `bee.grantee`

| v12 | v13 |
| --- | --- |
| `bee.createGrantees` | `bee.grantee.create` |
| `bee.getGrantees` | `bee.grantee.get` |
| `bee.patchGrantees` | `bee.grantee.patch` |

### `bee.stake`

| v12 | v13 |
| --- | --- |
| `bee.depositStake` | `bee.stake.deposit` |
| `bee.getStake` | `bee.stake.get` |
| `bee.getRedistributionState` | `bee.stake.getRedistributionState` |
| `bee.getWithdrawableStake` | `bee.stake.getWithdrawable` |
| `bee.migrateStake` | `bee.stake.migrate` |
| `bee.withdrawSurplusStake` | `bee.stake.withdrawSurplus` |

### `bee.status`

| v12 | v13 |
| --- | --- |
| `bee.getStatus` | `bee.status.get` |
| `bee.getChainState` | `bee.status.getChainState` |
| `bee.getHealth` | `bee.status.getHealth` |
| `bee.getNodeInfo` | `bee.status.getNodeInfo` |
| `bee.getReadiness` | `bee.status.getReadiness` |
| `bee.getReserveState` | `bee.status.getReserveState` |
| `bee.getVersions` | `bee.status.getVersions` |
| `bee.isSupportedApiVersion` | `bee.status.isSupportedApiVersion` |
| `bee.isSupportedExactVersion` | `bee.status.isSupportedExactVersion` |

### `bee.connectivity`

| v12 | v13 |
| --- | --- |
| `bee.checkConnection` | `bee.connectivity.checkConnection` |
| `bee.getBlocklist` | `bee.connectivity.getBlocklist` |
| `bee.getNodeAddresses` | `bee.connectivity.getNodeAddresses` |
| `bee.getPeers` | `bee.connectivity.getPeers` |
| `bee.getTopology` | `bee.connectivity.getTopology` |
| `bee.isConnected` | `bee.connectivity.isConnected` |
| `bee.isGateway` | `bee.connectivity.isGateway` |
| `bee.pingPeer` | `bee.connectivity.ping` |
| `bee.removePeer` | `bee.connectivity.removePeer` |

### `bee.wallet`

| v12 | v13 |
| --- | --- |
| `bee.getWalletBalance` | `bee.wallet.getBalance` |
| `bee.withdrawBZZToExternalWallet` | `bee.wallet.withdrawBZZ` |
| `bee.withdrawDAIToExternalWallet` | `bee.wallet.withdrawDAI` |

### `bee.chequebook`

| v12 | v13 |
| --- | --- |
| `bee.depositBZZToChequebook` | `bee.chequebook.deposit` |
| `bee.depositTokens` | `bee.chequebook.deposit` |
| `bee.getChequebookAddress` | `bee.chequebook.getAddress` |
| `bee.getChequebookBalance` | `bee.chequebook.getBalance` |
| `bee.withdrawBZZFromChequebook` | `bee.chequebook.withdraw` |
| `bee.withdrawTokens` | `bee.chequebook.withdraw` |

### `bee.cheque`

| v12 | v13 |
| --- | --- |
| `bee.cashoutLastCheque` | `bee.cheque.cashoutLast` |
| `bee.getLastCheques` | `bee.cheque.getAllLatest` |
| `bee.getLastChequesForPeer` | `bee.cheque.getAllLatestForPeer` |
| `bee.getLastCashoutAction` | `bee.cheque.getLastCashoutAction` |

### `bee.balance`

| v12 | v13 |
| --- | --- |
| `bee.getAllBalances` | `bee.balance.getAll` |
| `bee.getPastDueConsumptionBalances` | `bee.balance.getAllPastDueConsumption` |
| `bee.getPastDueConsumptionPeerBalance` | `bee.balance.getAllPastDueConsumptionForPeer` |
| `bee.getPeerBalance` | `bee.balance.getPeer` |

### `bee.settlement`

| v12 | v13 |
| --- | --- |
| `bee.getSettlements` | `bee.settlement.get` |
| `bee.getAllSettlements` | `bee.settlement.getAll` |

### `bee.transaction`

| v12 | v13 |
| --- | --- |
| `bee.cancelPendingTransaction` | `bee.transaction.cancel` |
| `bee.getPendingTransaction` | `bee.transaction.get` |
| `bee.getAllPendingTransactions` | `bee.transaction.getAll` |
| `bee.rebroadcastPendingTransaction` | `bee.transaction.rebroadcast` |

## After migrating

- Run your type checker. Argument order and types are unchanged for every renamed method, so a clean type check is a strong signal the migration is complete.
- Search for remaining bare method names in strings, dynamic property access, and comments. The codemod resolves types, not string keys other than `jest.spyOn`.
- Add `onClose` to every PSS and GSOC handler.
