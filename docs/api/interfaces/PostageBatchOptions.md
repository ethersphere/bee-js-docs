# Interface: PostageBatchOptions

Defined in: [bee-js/src/types/index.ts:587](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L587)

Options for creation of postage batch

## Properties

### gasPrice?

> `optional` **gasPrice**: `string` \| `bigint` \| [`NumberString`](../type-aliases/NumberString.md)

Defined in: [bee-js/src/types/index.ts:596](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L596)

Sets gas price in Wei for the transaction that creates the postage batch

***

### immutableFlag?

> `optional` **immutableFlag**: `boolean`

Defined in: [bee-js/src/types/index.ts:601](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L601)

Controls whether data can be overwritten that was uploaded with this postage batch.

***

### label?

> `optional` **label**: `string`

Defined in: [bee-js/src/types/index.ts:591](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L591)

Sets label for the postage batch

***

### waitForUsable?

> `optional` **waitForUsable**: `boolean`

Defined in: [bee-js/src/types/index.ts:613](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L613)

The returned Promise will await until the purchased Postage Batch is usable.
In other word, it has to have enough block confirmations that Bee pronounce it usable.
When turned on, this significantly prolongs the creation of postage batch!

If you plan to use the stamp right away for some action with Bee (like uploading using this stamp) it is
highly recommended to use this option, otherwise you might get errors "stamp not usable" from Bee.

#### Default

```ts
true
```

***

### waitForUsableTimeout?

> `optional` **waitForUsableTimeout**: `number`

Defined in: [bee-js/src/types/index.ts:619](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L619)

When waiting for the postage stamp to become usable, this specify the timeout for the waiting.
Default: 120s
