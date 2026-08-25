# Enumeration: RedundancyStrategy

Defined in: [bee-js/src/types/index.ts:198](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L198)

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

Defined in: [bee-js/src/types/index.ts:200](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L200)

***

### NONE

> **NONE**: `0`

Defined in: [bee-js/src/types/index.ts:199](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L199)

***

### PROX

> **PROX**: `2`

Defined in: [bee-js/src/types/index.ts:201](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L201)

***

### RACE

> **RACE**: `3`

Defined in: [bee-js/src/types/index.ts:202](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/types/index.ts#L202)
