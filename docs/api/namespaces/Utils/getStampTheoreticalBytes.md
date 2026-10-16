# Function: getStampTheoreticalBytes()

> **getStampTheoreticalBytes**(`depth`): `number`

Defined in: [core-sdk/src/stamper/capacity.ts:17](https://github.com/ethersphere/core-sdk/blob/599be256a6dfdd96418988f234bbe147146fe59b/src/stamper/capacity.ts#L17)

Calculates the theoretical maximum size of a postage batch based on its depth.
For smaller depths (up to 22), this may provide less accurate results.

## Parameters

### depth

`number`

## Returns

`number`

The maximum theoretical size of the postage batch, in bytes.
