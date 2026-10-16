# Function: getStampEffectiveBytesBreakpoints()

> **getStampEffectiveBytesBreakpoints**(`encryption`, `erasureCodeLevel?`): `Map`\<`number`, `number`\>

Defined in: [core-sdk/src/stamper/capacity.ts:379](https://github.com/ethersphere/core-sdk/blob/599be256a6dfdd96418988f234bbe147146fe59b/src/stamper/capacity.ts#L379)

Returns the effective size (in bytes) for every depth in the supported
breakpoint range (17..34), keyed by depth.

## Parameters

### encryption

`boolean`

### erasureCodeLevel?

`number`

## Returns

`Map`\<`number`, `number`\>
