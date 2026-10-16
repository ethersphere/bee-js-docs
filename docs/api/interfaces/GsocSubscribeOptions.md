# Interface: GsocSubscribeOptions

Defined in: [bee-js/src/types/index.ts:395](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L395)

## Properties

### cacheWrappedChunk?

> `optional` **cacheWrappedChunk**: `boolean`

Defined in: [bee-js/src/types/index.ts:400](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L400)

Caches each message's wrapped chunk on the node so it can be read through the bytes endpoint.

***

### fields?

> `optional` **fields**: [`GsocField`](../type-aliases/GsocField.md)[]

Defined in: [bee-js/src/types/index.ts:397](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L397)

SOC fields concatenated into each message in this order; `payload` is variable length, so put it last.
