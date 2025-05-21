[@ethersphere/bee-js] / [Utils] / approximateOverheadForRedundancyLevel

# Function: approximateOverheadForRedundancyLevel()

> **approximateOverheadForRedundancyLevel**(`chunks`, `level`, `encrypted`): `number`

Defined in: [bee-js/src/utils/redundancy.ts:48](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/redundancy.ts#L48)

Returns an approximate multiplier for the overhead of a given redundancy level.
Redundancy level is a tradeoff between storage overhead and fault tolerance.
Use this number to estimate the amount of chunks that will be stored for a given
redundancy level.

## Parameters

### chunks

`number`

### level

[`RedundancyLevel`](../../enumerations/RedundancyLevel.md)

### encrypted

`boolean`

## Returns

`number`
