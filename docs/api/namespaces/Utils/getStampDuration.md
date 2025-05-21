[**@ethersphere/bee-js**]

***

[@ethersphere/bee-js] / [Utils] / getStampDuration

# Function: getStampDuration()

> **getStampDuration**(`amount`, `pricePerBlock`, `blockTime`): [`Duration`](../../classes/Duration.md)

Defined in: [bee-js/src/utils/stamps.ts:108](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/stamps.ts#L108)

Utility function that calculates the TTL of a postage batch based on its amount, price per block and block time.

For more accurate results, get the price per block and block time from the Bee node or the blockchain.

## Parameters

### amount

`string` | `bigint` | [`NumberString`](../../type-aliases/NumberString.md)

### pricePerBlock

`number`

### blockTime

`number`

## Returns

[`Duration`](../../classes/Duration.md)

The TTL of the postage batch.
