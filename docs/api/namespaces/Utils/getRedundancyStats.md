# Function: getRedundancyStats()

> **getRedundancyStats**(): `object`

Defined in: [core-sdk/src/erasure-coding/levels.ts:119](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/erasure-coding/levels.ts#L119)

Returns descriptive stats (label, level, expected error tolerance) for
every redundancy level above NONE.

## Returns

`object`

### insane

> **insane**: `RedundancyStat`

### medium

> **medium**: `RedundancyStat`

### paranoid

> **paranoid**: `RedundancyStat`

### strong

> **strong**: `RedundancyStat`
