# Function: getStampTheoreticalBytes()

> **getStampTheoreticalBytes**(`depth`): `number`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/stamper/capacity.d.cts:14

Calculates the theoretical maximum size of a postage batch based on its depth.
For smaller depths (up to 22), this may provide less accurate results.

## Parameters

### depth

`number`

## Returns

`number`

The maximum theoretical size of the postage batch, in bytes.
