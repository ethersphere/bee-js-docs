# Function: getStampTheoreticalBytes()

> **getStampTheoreticalBytes**(`depth`): `number`

Defined in: [bee-js/src/utils/stamps.ts:29](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/utils/stamps.ts#L29)

Utility function that calculates the theoritical maximum size of a postage batch based on its depth.

For smaller depths (up to 22), this may provide less accurate results.

## Parameters

### depth

`number`

## Returns

`number`

The maximum theoretical size of the postage batch in bytes.
