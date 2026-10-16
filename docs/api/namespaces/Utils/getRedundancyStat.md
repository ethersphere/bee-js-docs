# Function: getRedundancyStat()

> **getRedundancyStat**(`level`): `RedundancyStat`

Defined in: [core-sdk/src/erasure-coding/levels.ts:132](https://github.com/ethersphere/core-sdk/blob/599be256a6dfdd96418988f234bbe147146fe59b/src/erasure-coding/levels.ts#L132)

Looks up a single redundancy level's stats by name ('medium'/'strong'/
'insane'/'paranoid', case-insensitive) or by its numeric level (1-4).

## Parameters

### level

`string` | `number`

## Returns

`RedundancyStat`
