# Function: getStampUsage()

> **getStampUsage**(`utilization`, `depth`, `bucketDepth`): `number`

Defined in: [core-sdk/src/stamper/capacity.ts:7](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/stamper/capacity.ts#L7)

Calculates usage of a postage batch based on its utilization, depth, and bucket depth.
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
