# Interface: PostageBatchOptions

Defined in: [bee-js/src/types/index.ts:606](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L606)

Options for creation of postage batch

## Properties

### gasPrice?

> `optional` **gasPrice**: `string` \| `bigint` \| [`NumberString`](../type-aliases/NumberString.md)

Defined in: [bee-js/src/types/index.ts:615](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L615)

Sets gas price in Wei for the transaction that creates the postage batch

***

### immutableFlag?

> `optional` **immutableFlag**: `boolean`

Defined in: [bee-js/src/types/index.ts:620](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L620)

Controls whether data can be overwritten that was uploaded with this postage batch.

***

### label?

> `optional` **label**: `string`

Defined in: [bee-js/src/types/index.ts:610](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L610)

Sets label for the postage batch

***

### waitForUsable?

> `optional` **waitForUsable**: `boolean`

Defined in: [bee-js/src/types/index.ts:632](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L632)

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

Defined in: [bee-js/src/types/index.ts:638](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L638)

When waiting for the postage stamp to become usable, this specify the timeout for the waiting.
Default: 120s
