---
title: Staking
id: staking
slug: /staking
sidebar_label: Staking
---


Operating a Bee full node and staking BZZ makes you eligible to participate in the redistribution game — a mechanism for earning additional BZZ through by sharing disk space with the Swarm network. This guide shows how to use `bee-js` to deposit stake and check your node's staking status.


:::danger
⚠️ **Important:** Staked BZZ is **non-refundable** — once deposited, it **cannot be withdrawn**.
:::


:::info
Currently, `bee-js` supports depositing stake and checking staking status, but does **not yet support** advanced features like [partial stake withdrawals](https://docs.ethswarm.org/docs/bee/working-with-bee/staking#partial-stake-withdrawals) or [reserve doubling](https://docs.ethswarm.org/docs/bee/working-with-bee/staking#reserve-doubling).


For a complete guide to the requirements and configuration for staking, refer to the [Bee documentation](https://docs.ethswarm.org/docs/bee/working-with-bee/staking).
:::





## Stake BZZ

To stake, use the `depositStake` method provided by `bee-js`. It accepts a value in PLUR, the smallest unit of BZZ (like wei in Ethereum). The `BZZ` utility class simplifies conversion from decimal string to PLUR.

```js
import { Bee, BZZ } from '@ethersphere/bee-js'

const bee = new Bee('http://localhost:1633')

async function main() {

  // Convert 10 BZZ to PLUR
  const amount = BZZ.fromDecimalString('10')

  const txHash = await bee.depositStake(amount)
  console.log('Stake deposited. Transaction hash:', txHash.toHex())
}

main().catch(console.error)
```

Example output:

```bash
Stake deposited. Transaction hash: e1b86eebc54b465d84ab278da94a387e9786076557ab8f3fe04ba1b52dc065c8
```
A successful staking transaction will return the transaction hash which you can look up on a blockchain explorer like [Gnosisscan](https://gnosisscan.io/tx/0xe1b86eebc54b465d84ab278da94a387e9786076557ab8f3fe04ba1b52dc065c8). 

## Check Staking Status

After staking, you can confirm the deposited amount and monitor your node’s participation in the redistribution game:

```js
import { Bee } from '@ethersphere/bee-js'

const bee = new Bee('http://localhost:1633')

async function main() {
  const stake = await bee.getStake()
  const redistributionState = await bee.getRedistributionState()

  console.log('Current staked amount:', stake.toDecimalString(), 'BZZ')
  console.log('\nRedistribution State:')
  console.log(JSON.stringify(redistributionState, null, 2))
}

main().catch(console.error)
```

Example output:

```bash
Current staked amount: 10.0000000000000001 BZZ

Redistribution State:
{
  "minimumGasFunds": {
    "state": "274506772500000"
  },
  "hasSufficientFunds": true,
  "isFrozen": false,
  "isFullySynced": true,
  "phase": "claim",
  "round": 261311,
  "lastWonRound": 0,
  "lastPlayedRound": 0,
  "lastFrozenRound": 0,
  "lastSelectedRound": 0,
  "lastSampleDurationSeconds": 0,
  "block": 39719372,
  "reward": {
    "state": "0"
  },
  "fees": {
    "state": "0"
  },
  "isHealthy": true
} 
```

For details on interpreting these values, refer to the [staking status section](https://docs.ethswarm.org/docs/bee/working-with-bee/staking#check-status) of the Bee documentation.