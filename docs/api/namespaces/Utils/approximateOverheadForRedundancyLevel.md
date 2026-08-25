# Function: approximateOverheadForRedundancyLevel()

> **approximateOverheadForRedundancyLevel**(`chunks`, `level`, `encrypted`): `number`

Defined in: [core-sdk/src/erasure-coding/levels.ts:95](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/erasure-coding/levels.ts#L95)

Returns an approximate multiplier for the storage overhead of uploading
`chunks` data shards at the given redundancy level: use it to estimate how
many extra chunks will be stored (chunks * overhead) for that upload.

Computed directly from getParities' exact tables above rather than a
separate estimation table - bee-js's own redundancy.ts had a second,
independent set of tables for this that turned out to be a rougher
approximation of the same data (one threshold short per level), not a
genuinely different computation.

## Parameters

### chunks

`number`

### level

`number`

### encrypted

`boolean`

## Returns

`number`
