---
title: "Block Production"
sidebar_position: 2
hide_table_of_contents: true
---

# Block Production

Since Telos is based on Antelope's DPoS consensus mechanism, there are only 21 active block producers at a time. An additional 21 block producers serve as standby that are continually tested for readiness by regularly rotating one standby block producer into active production.

Any Telos block producers that misses 15% of the blocks in any schedule is removed from its active role, and the 22nd ranked block producer is elevated from standby to active. Network resilience is maintained throughout this process. There are currently more than 50 block producers, see [here](https://explorer.telos.net/vote) for the up to date list. The reserve block producers are cycled as described in the [Telos Whitepaper](https://telos.net/wp-content/uploads/2021/02/Telos-Whitepaper-master-20180717.pdf). The block producers are ranked and accepted by TLOS holder voting.

Telos does not have minimum staking requirements for a block producer. The new block producers must accept the [Regproducer Ricardian Contract](https://hellotelos.medium.com/telos-regproducer-human-language-contract-3f91bbab564) and successfully run on a testnet for one week in addition to other minimum requirements, see the [Telos Block Producer Minimum Requirements Document](../../nodes/bp-nodes/Telos_BP_Requirements.md) for more info. These contracts also forbid collusion or using custodial TLOS tokens to participate in voting as well as dictating minimal levels of infrastructure that a block producer must operate. Block producers watch each other for misbehavior and can intervene based on the terms stipulated in the contracts.

Observers, hired through the Telos Works work proposal and payment system, can also identify violation of rules and propose remedies in the form of multi-signature contracts for the block producers to execute.

For any block producer motion to propagate, 15 of the 21 block producers in the current schedule must vote in favor of the multi-signature transaction, which may then be executed by any Telos account to complete the action.

The on-chain governance allows any holder of staked TLOS tokens (staked for CPU, NET or REX) to vote for block producers with the rank determined by the stake-weighted voting of all voters.

| Blockchain          | Active block producers                                                                                                      | Total block producers | Cost of becoming a block producer                                                    |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------| --------------------- | ------------------------------------------------------------------------------------ |
| Telos               | 21 (+21 standby)                                                                                                            | ≥50                   | No minimum stake                                                                     |
| Ethereum            | [Top 4 validators control <50% of staked ETH](https://www.coingecko.com/research/publications/ethereum-staking-statistics)  | -                     | [32 ETH](https://ethereum.org/en/staking/)                                           |
| Binance Smart Chain | [50](https://docs.bnbchain.org/docs/BSC-FAQs-validator)                                                                     | 50                    | [\~250,000 BNB](https://bscscan.com/validators#)                                     |
| Polygon             | 100                                                                                                                         | 100                   | [10,0000 MATIC](https://wiki.polygon.technology/docs/pos/design/validator/responsibilities/) |

## Consensus Mechanism

Telos and other modern blockchains are not based on the classic proof of work (PoW) consensus mechanism, which consumes a lot of energy (a wasteful way to run a blockchain). The table provides a summary of four mainstream blockchains with its respective consensus mechanism.

| Blockchain          | Consensus                                                                                                                  |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Telos               | Delegated Proof of Stake (DPoS)                                                                                            |
| Ethereum            | Proof of Stake (PoS)                                                                                                       |
| Binance Smart Chain | Proof of Authority (PoA) [Parlia](https://docs.bnbchain.org/docs/learn/consensus#parlia), inspired by Clique               |
| Polygon             | Proof of Authority (PoA) [Bor](https://wiki.polygon.technology/docs/pos/design/bor/overview/), inspired by Clique          |

For an in depth discussion on the protocol driving Telos consensus, click [here](../advanced/consensus.md).

## Block Time

Block times significantly influence the speed of transaction finality and the level of interactivity achievable in dApps. The table provides a summary of four mainstream blockchains with its respective block time.

| Blockchain          | Block time                                                              |
| ------------------- | ----------------------------------------------------------------------- |
| Telos               | [500 ms](https://en.wikipedia.org/wiki/EOS.IO) / 2 blocks per second    |
| Ethereum            | [12-13 seconds](https://ycharts.com/indicators/ethereum_average_block_time)|
| Binance Smart Chain | [3.0-5.0 seconds](https://www.bscscan.com/chart/blocktime)              |
| Polygon             | [2.2 seconds](https://explorer-mainnet.maticvigil.com)                  |

For more information on block time, click [here](../advanced/consensus.md).
