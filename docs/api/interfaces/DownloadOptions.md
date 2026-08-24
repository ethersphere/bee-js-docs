# Interface: DownloadOptions

Defined in: [bee-js/src/types/index.ts:205](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L205)

## Properties

### actHistoryAddress?

> `optional` **actHistoryAddress**: `string` \| `Uint8Array`\<`ArrayBufferLike`\> \| [`Reference`](../classes/Reference.md)

Defined in: [bee-js/src/types/index.ts:229](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L229)

***

### actPublisher?

> `optional` **actPublisher**: `string` \| `Uint8Array`\<`ArrayBufferLike`\> \| [`PublicKey`](../classes/PublicKey.md)

Defined in: [bee-js/src/types/index.ts:227](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L227)

***

### actTimestamp?

> `optional` **actTimestamp**: `string` \| `number`

Defined in: [bee-js/src/types/index.ts:231](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L231)

***

### fallback?

> `optional` **fallback**: `boolean`

Defined in: [bee-js/src/types/index.ts:218](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L218)

Specify if the retrieve strategies (chunk prefetching on redundant data) are used in a fallback cascade. The default is true.

Only applicable for erasure coded data.

***

### redundancyStrategy?

> `optional` **redundancyStrategy**: [`RedundancyStrategy`](../enumerations/RedundancyStrategy.md)

Defined in: [bee-js/src/types/index.ts:211](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L211)

Specify the retrieve strategy on redundant data.

Only applicable for erasure coded data.

***

### timeoutMs?

> `optional` **timeoutMs**: `number`

Defined in: [bee-js/src/types/index.ts:225](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L225)

Specify the timeout for chunk retrieval. The default is 30 seconds.

This is not the timeout for the whole download operation, but rather for each chunk retrieval.
