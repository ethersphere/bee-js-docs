[**@ethersphere/bee-js**](../Overview.md)

***

[@ethersphere/bee-js](../Overview.md) / RedundancyStrategy

# Enumeration: RedundancyStrategy

Defined in: [bee-js/src/types/index.ts:172](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L172)

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

Defined in: [bee-js/src/types/index.ts:174](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L174)

***

### NONE

> **NONE**: `0`

Defined in: [bee-js/src/types/index.ts:173](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L173)

***

### PROX

> **PROX**: `2`

Defined in: [bee-js/src/types/index.ts:175](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L175)

***

### RACE

> **RACE**: `3`

Defined in: [bee-js/src/types/index.ts:176](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L176)
