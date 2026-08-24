# Function: getStampEffectiveBytes()

> **getStampEffectiveBytes**(`depth`, `encryption?`, `erasureCodeLevel?`): `number`

Defined in: [core-sdk/src/stamper/capacity.ts:352](https://github.com/ethersphere/core-sdk/blob/96273dfdbc1c6dec040d5aa6df29834e14e33eff/src/stamper/capacity.ts#L352)

Calculates the effective size of a postage batch based on its depth.
Below depth 17 the effective size is 0.

When `encryption` and `erasureCodeLevel` (0=NONE, 1=MEDIUM, 2=STRONG,
3=INSANE, 4=PARANOID) are both given, uses the exact breakpoint table for
that combination; otherwise falls back to the encrypted+MEDIUM-optimised
default table.

## Parameters

### depth

`number`

### encryption?

`boolean`

### erasureCodeLevel?

`number`

## Returns

`number`

The effective size of the postage batch, in bytes.
