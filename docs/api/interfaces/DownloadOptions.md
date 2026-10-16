# Interface: DownloadOptions

Defined in: [bee-js/src/types/index.ts:213](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L213)

## Properties

### actHistoryAddress?

> `optional` **actHistoryAddress**: `string` \| `Uint8Array`\<`ArrayBufferLike`\> \| [`Reference`](../classes/Reference.md)

Defined in: [bee-js/src/types/index.ts:237](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L237)

***

### actPublisher?

> `optional` **actPublisher**: `string` \| `Uint8Array`\<`ArrayBufferLike`\> \| [`PublicKey`](../classes/PublicKey.md)

Defined in: [bee-js/src/types/index.ts:235](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L235)

***

### actTimestamp?

> `optional` **actTimestamp**: `string` \| `number`

Defined in: [bee-js/src/types/index.ts:239](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L239)

***

### fallback?

> `optional` **fallback**: `boolean`

Defined in: [bee-js/src/types/index.ts:226](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L226)

Specify if the retrieve strategies (chunk prefetching on redundant data) are used in a fallback cascade. The default is true.

Only applicable for erasure coded data.

***

### redundancyStrategy?

> `optional` **redundancyStrategy**: [`RedundancyStrategy`](../enumerations/RedundancyStrategy.md)

Defined in: [bee-js/src/types/index.ts:219](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L219)

Specify the retrieve strategy on redundant data.

Only applicable for erasure coded data.

***

### timeoutMs?

> `optional` **timeoutMs**: `number`

Defined in: [bee-js/src/types/index.ts:233](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L233)

Specify the timeout for chunk retrieval. The default is 30 seconds.

This is not the timeout for the whole download operation, but rather for each chunk retrieval.
