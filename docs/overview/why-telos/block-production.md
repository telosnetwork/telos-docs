---
title: "Block Production"
sidebar_position: 5
hide_table_of_contents: true
---

# Block Production

Since Telos is based on Antelope's DPoS consensus mechanism, there are only 21 active block producers at a time. An additional 21 block producers serve as standby that are continually tested for readiness by regularly rotating one standby block producer into active production.

Any Telos block producers that misses 15% of the blocks in any schedule is removed from its active role, and the 22nd ranked block producer is elevated from standby to active. Network resilience is maintained throughout this process. There are currently more than 50 block producers, see [here](https://explorer.telos.net/vote) for the up to date list. The reserve block producers are cycled as described in the [Telos Whitepaper](https://telos.net/wp-content/uploads/2021/02/Telos-Whitepaper-master-20180717.pdf). The block producers are ranked and accepted by TLOS holder voting.

Telos does not have minimum staking requirements for a block producer. The new block producers must accept the [Regproducer Ricardian Contract](https://hellotelos.medium.com/telos-regproducer-human-language-contract-3f91bbab564) and successfully run on a testnet for one week in addition to other minimum requirements, see the [Telos Block Producer Minimum Requirements Document](../../nodes/bp-nodes/Telos_BP_Requirements.md) for more info. These contracts also forbid collusion or using custodial TLOS tokens to participate in voting as well as dictating minimal levels of infrastructure that a block producer must operate. Block producers watch each other for misbehavior and can intervene based on the terms stipulated in the contracts.

Observers, hired through the Telos Works work proposal and payment system, can also identify violation of rules and propose remedies in the form of multi-signature contracts for the block producers to execute.

For any block producer motion to propagate, 15 of the 21 block producers in the current schedule must vote in favor of the multi-signature transaction, which may then be executed by any Telos account to complete the action.

The on-chain governance allows any holder of staked TLOS tokens (staked for CPU, NET or REX) to vote for block producers with the rank determined by the stake-weighted voting of all voters.

## Consensus Mechanism

Telos and other modern blockchains are not based on the classic proof of work (PoW) consensus mechanism, which consumes a lot of energy (a wasteful way to run a blockchain). The table provides a summary of four mainstream blockchains with its respective consensus mechanism.

For an in depth discussion on the protocol driving Telos consensus, click [here](../advanced/consensus.md).

## Block Time

Block times significantly influence the speed of transaction finality and the level of interactivity achievable in dApps. The table provides a summary of four mainstream blockchains with its respective block time.

For more information on block time, click [here](../advanced/consensus.md).
