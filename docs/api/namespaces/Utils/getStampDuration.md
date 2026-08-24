# Function: getStampDuration()

> **getStampDuration**(`amount`, `pricePerBlock`, `blockTime`): [`Duration`](../../classes/Duration.md)

Defined in: [bee-js/src/utils/stamps.ts:35](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/utils/stamps.ts#L35)

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
