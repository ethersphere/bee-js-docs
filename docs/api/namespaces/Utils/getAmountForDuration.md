# Function: getAmountForDuration()

> **getAmountForDuration**(`duration`, `pricePerBlock`, `blockTime`): `bigint`

Defined in: [bee-js/src/utils/stamps.ts:52](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/utils/stamps.ts#L52)

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
