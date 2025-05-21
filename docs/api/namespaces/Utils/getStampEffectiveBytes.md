[**@ethersphere/bee-js**]

***

[@ethersphere/bee-js] / [Utils] / getStampEffectiveBytes

# Function: getStampEffectiveBytes()

> **getStampEffectiveBytes**(`depth`): `number`

Defined in: [bee-js/src/utils/stamps.ts:66](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/stamps.ts#L66)

Utility function that calculates the effective size of a postage batch based on its depth.

Below 22 depth the effective size is 0
Above 34 it's always > 99%

## Parameters

### depth

`number`

## Returns

`number`

The effective size of the postage batch in bytes.
