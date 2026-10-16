# Enumeration: RedundancyStrategy

Defined in: [bee-js/src/types/index.ts:206](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L206)

Specify the retrieve strategy on redundant data.
The possible values are NONE, DATA, PROX and RACE.
Strategy NONE means no prefetching takes place.
Strategy DATA means only data chunks are prefetched.
Strategy PROX means only chunks that are close to the node are prefetched.
Strategy RACE means all chunks are prefetched: n data chunks and k parity chunks. The first n chunks to arrive are used to reconstruct the file.
Multiple strategies can be used in a fallback cascade if the swarm redundancy fallback mode is set to true.
The default strategy is NONE, DATA, falling back to PROX, falling back to RACE

## Enumeration Members

### DATA

> **DATA**: `1`

Defined in: [bee-js/src/types/index.ts:208](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L208)

***

### NONE

> **NONE**: `0`

Defined in: [bee-js/src/types/index.ts:207](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L207)

***

### PROX

> **PROX**: `2`

Defined in: [bee-js/src/types/index.ts:209](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L209)

***

### RACE

> **RACE**: `3`

Defined in: [bee-js/src/types/index.ts:210](https://github.com/ethersphere/bee-js/blob/549318851eb60f91ad249acad8431ffc2cf86773/src/types/index.ts#L210)
