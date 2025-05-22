# Function: getAmountForDuration()

> **getAmountForDuration**(`duration`, `pricePerBlock`, `blockTime`): `bigint`

Defined in: [bee-js/src/utils/stamps.ts:125](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/stamps.ts#L125)

Get the postage batch `amount` required for a given `duration`.

## Parameters

### duration

[`Duration`](../../classes/Duration.md)

A duration object representing the duration of the storage.

### pricePerBlock

`number`

The price per block in PLUR.

### blockTime

`number`

The block time in seconds.

## Returns

`bigint`
