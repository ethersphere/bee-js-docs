# Function: getStampUsage()

> **getStampUsage**(`utilization`, `depth`, `bucketDepth`): `number`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/stamper/capacity.d.cts:7

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
