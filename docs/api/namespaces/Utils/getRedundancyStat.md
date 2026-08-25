# Function: getRedundancyStat()

> **getRedundancyStat**(`level`): `RedundancyStat`

Defined in: [core-sdk/src/erasure-coding/levels.ts:132](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/erasure-coding/levels.ts#L132)

Looks up a single redundancy level's stats by name ('medium'/'strong'/
'insane'/'paranoid', case-insensitive) or by its numeric level (1-4).

## Parameters

### level

`string` | `number`

## Returns

`RedundancyStat`
