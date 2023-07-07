---
title: "Block Production"
sidebar_position: 2
hide_table_of_contents: true
---

# Block Production

Since Telos is based on Antelope's DPoS consensus mechanism, there are only 21 active block producers at a time. An additional 21 block producers serve as standby that are continually tested for readiness by regularly rotating one standby block producer into active production.

Any Telos block producers that misses 15% of the blocks in any schedule is removed from its active role, and the 22nd ranked block producer is elevated from standby to active. Network resilience is maintained throughout this process. [There are more than 50 block producers](https://telos.bloks.io). The reserve block producers are [cycled as described in the Telos whitepaper](https://telos.net/wp-content/uploads/2021/02/Telos-Whitepaper-master-20180717.pdf). The block producers are ranked and accepted by TLOS holder voting.

![](<../../../static/img/image (8).png>)

Telos does not have minimum staking requirements for a block producer. The new block producers must accept the[ Regproducer Ricardian Contract](https://tbnoa.org/details.html?docid=4) and successfully run on a testnet for one week in addition to other minimum requirements (see the[ Telos Block Producer Minimum Requirements Document](https://tbnoa.org/details.html?docid=1)). These contracts also forbid collusion or using custodial TLOS tokens to participate in voting as well as dictating minimul levels of infrastructure that a block producer must operate. Block producers watch each other for misbehavior and can intervene based on the terms stipulated in the contracts.

Observers, hired through the Telos Works work proposal and payment system, can also identify violation of rules and propose remedies in the form of multi-signiture contracts for the block producers to execute.

For any block producer motion to propagate, 15 of the 21 block producers in the current schedule must vote in favor of the multi-signature transaction, which may then be executed by any Telos account to complete the action.

The on-chain governance allows any holder of staked TLOS tokens (staked for CPU, NET or REX) to vote for block producers with the rank determined by the stake-weighted voting of all voters.

| Blockchain          | Active block producers                                                                                       | Total block producers | Cost of becoming a block producer                                                    |
| ------------------- | ------------------------------------------------------------------------------------------------------------ | --------------------- | ------------------------------------------------------------------------------------ |
| Telos               | 21 (+21 standby)                                                                                             | ≥50                   | No minimum stake                                                                     |
| Ethereum            | [Top 4 mining pools control 60% of hashing power](https://etherscan.io/stat/miner?range=7\&blocktype=blocks) | -                     | The capital cost of becoming a proof of work miner is in tens of millions of dollars |
| Binance Smart Chain | 21                                                                                                           | ?                     | [\~250,000 BNB](https://bscscan.com/validators#)                                     |
| Polygon             | ?                                                                                                            | ?                     | ?                                                                                    |

Data about Polygon block producers and auction prices to become a block producer could not [be found in Polygon documentation](https://docs.matic.network), at the time of writing this document.

## Consensus Mechanism

Telos and other modern blockchains are not based on the classic proof of work (PoW) consensus mechanism, which consumes a lot of energy (a wasteful way to run a blockchain). [Ethereum has the carbon footprint of Tanzania](https://digiconomist.net/ethereum-energy-consumption/). The table provides a summary of four mainstream blockchains with its respective consensus mechanism.

| Blockchain          | Consensus                                                                                                                  |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Telos               | Delegated Proof of Stake (DPoS)                                                                                            |
| Ethereum            | Proof of Work (PoW)                                                                                                        |
| Binance Smart Chain | Proof of Authority (PoA) [Parlia](https://docs.binance.org/smart-chain/guides/concepts/consensus.html), inspired by Clique |
| Polygon             | Proof of Authority (PoA) [Bor](https://docs.matic.network/docs/contribute/bor/consensus/), inspired by Clique              |

For an in depth discussion on the protocol driving Telos consensus, click [here](../advanced/consensus.md).

## Block Time

Block time and consensus algorithm affects how fast a transaction is finalized, and how interactive dapps can be. The table provides a summary of four mainstream blockchains with its respective block time.

| Blockchain          | Block time                                                              |
| ------------------- | ----------------------------------------------------------------------- |
| Telos               | [500 ms](https://en.wikipedia.org/wiki/EOS.IO) / 2 blocks per second    |
| Ethereum            | 12-15 seconds (plus mempool and miner pick up delay of several minutes) |
| Binance Smart Chain | [3.0-5.0 seconds](https://www.bscscan.com/chart/blocktime)              |
| Polygon             | [2.2 seconds](https://explorer-mainnet.maticvigil.com)                  |

For more information on block time, click [here](../advanced/consensus.md).