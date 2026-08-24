# Function: approximateOverheadForRedundancyLevel()

> **approximateOverheadForRedundancyLevel**(`chunks`, `level`, `encrypted`): `number`

Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/erasure-coding/levels.d.cts:22

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
