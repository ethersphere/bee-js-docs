[**@ethersphere/bee-js**](../Overview.md)

***

[@ethersphere/bee-js](../Overview.md) / PostageBatchOptions

# Interface: PostageBatchOptions

Defined in: [bee-js/src/types/index.ts:537](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L537)

Options for creation of postage batch

## Properties

### gasPrice?

> `optional` **gasPrice**: `string` \| `bigint` \| [`NumberString`](../type-aliases/NumberString.md)

Defined in: [bee-js/src/types/index.ts:546](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L546)

Sets gas price in Wei for the transaction that creates the postage batch

***

### immutableFlag?

> `optional` **immutableFlag**: `boolean`

Defined in: [bee-js/src/types/index.ts:551](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L551)

Controls whether data can be overwritten that was uploaded with this postage batch.

***

### label?

> `optional` **label**: `string`

Defined in: [bee-js/src/types/index.ts:541](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L541)

Sets label for the postage batch

***

### waitForUsable?

> `optional` **waitForUsable**: `boolean`

Defined in: [bee-js/src/types/index.ts:563](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L563)

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

Defined in: [bee-js/src/types/index.ts:569](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L569)

When waiting for the postage stamp to become usable, this specify the timeout for the waiting.
Default: 120s
