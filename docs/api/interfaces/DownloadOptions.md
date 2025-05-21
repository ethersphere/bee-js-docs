[**@ethersphere/bee-js**](../Overview.md)

***

[@ethersphere/bee-js](../Overview.md) / DownloadOptions

# Interface: DownloadOptions

Defined in: [bee-js/src/types/index.ts:179](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L179)

## Properties

### actHistoryAddress?

> `optional` **actHistoryAddress**: `string` \| `Uint8Array`\<`ArrayBufferLike`\> \| [`Reference`](../classes/Reference.md)

Defined in: [bee-js/src/types/index.ts:195](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L195)

***

### actPublisher?

> `optional` **actPublisher**: `string` \| `Uint8Array`\<`ArrayBufferLike`\> \| [`PublicKey`](../classes/PublicKey.md)

Defined in: [bee-js/src/types/index.ts:193](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L193)

***

### actTimestamp?

> `optional` **actTimestamp**: `string` \| `number`

Defined in: [bee-js/src/types/index.ts:197](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L197)

***

### fallback?

> `optional` **fallback**: `boolean`

Defined in: [bee-js/src/types/index.ts:187](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L187)

Specify if the retrieve strategies (chunk prefetching on redundant data) are used in a fallback cascade. The default is true.

***

### redundancyStrategy?

> `optional` **redundancyStrategy**: [`RedundancyStrategy`](../enumerations/RedundancyStrategy.md)

Defined in: [bee-js/src/types/index.ts:183](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L183)

Specify the retrieve strategy on redundant data.

***

### timeoutMs?

> `optional` **timeoutMs**: `number`

Defined in: [bee-js/src/types/index.ts:191](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L191)

Specify the timeout for chunk retrieval. The default is 30 seconds.
