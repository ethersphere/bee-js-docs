[**@ethersphere/bee-js**]

***

[@ethersphere/bee-js] / [Utils] / getStampUsage

# Function: getStampUsage()

> **getStampUsage**(`utilization`, `depth`, `bucketDepth`): `number`

Defined in: [bee-js/src/utils/stamps.ts:18](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/stamps.ts#L18)

Utility function that calculates usage of postage batch based on its utilization, depth and bucket depth.

For smaller depths (up to 20), this may provide less accurate results.

## Parameters

### utilization

`number`

### depth

`number`

### bucketDepth

`number`

## Returns

`number`

A number between 0 and 1 representing the usage of the postage batch.
