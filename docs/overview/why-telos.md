---
description: Why Telos is better than other Ethereum Virtual Machine (EVM) chains
title: "Why Telos?"
sidebar_position: 2
hide_table_of_contents: true
---

# Benefits of Telos

Telos is highly free of conflict of interest due to wide token distribution. This makes it a good candidate for co-operation among large and small cryptocurrency ecosystem actors. Furthermore, centralization increases regulatory risk by a government take down, and the risk of founders abandoning the project. Telos builds innovation on top of a Delegated Proof of Stake (DPoS) consensus mechanism. This mechanism is based on source code originally from Block.one's EOS blockchain. Their unique selling points include maturity, decentralization of stakeholders and validators, and a proven on-chain governance model.

In this document, a comparison between Telos and its EVM implementation and a few other well-known EVM chains are presented. One of Telos distinguishing features include the use of native WebAssembly based smart contracts, but in this section our focus will be on other aspects that make Telos EVM an appealing blockchain to deploy your Solidity/Vyper decentralized application.

## Maturity

Telos has been continuously operating since 2018, illustrating the robustness of the underlying technology stack and block producer community.

| Blockchain          | Continuously operating since | Blocks produced                                |
| ------------------- | ---------------------------- | ---------------------------------------------- |
| Telos               | 2018                         | >[145M](https://www.teloscan.io/)                |
| Ethereum            | 2015                         | [12M](https://etherscan.io)                    |
| Binance Smart Chain | 2020                         | [6M](https://bscscan.com)                      |
| Polygon             | 2021                         | [12M](https://explorer-mainnet.maticvigil.com) |

* The number of blocks produced are based on the available information at the time of writing this document.

## Decentralization

Telos is a fair-distribution chain. The original TLOS token distribution was made as wide as possible to ensure that Telos blockchain stays conflict-free and a community-led effort.[ More information about the fair distribution model can be found in the original Telos Whitepaper.](https://telos.net/wp-content/uploads/2021/02/Telos-Whitepaper-master-20180717.pdf)

![How the Telos genesis block was formed from EOS genesis block by doing a haircut on whale investors](<../../static/img/token_distribution.png>)

Top 10 accounts own % of tokens

A review of the top 30 individually-owned accounts on Telos (April 2, 2021), excluding chain- and exchange-owned acounts, reveals that the top accounts comprise <15% of the total current token-supply of the chain.

Telos token holders can be found [on TELOSTRACKER](https://telostracker.io/topHolders). Telos has a maximum supply cap. The current Telos inflation parameters can be changed by TLOS token holders through governance, but the maximum supply cap cannot be changed. Currently Telos has no inflation set. TLOS ERC-20 token accounts were not considered in the top 30.

Ethereum token holders can be found on [EtherScan](https://etherscan.io/accounts). Ethereum has no supply cap currently and the maximum supply cap is based on the current supply.

[Matic token holders were taken from EtherScan](https://etherscan.io/token/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0#balances). No data analysis was done for Polygon network addresses.

[BNB token holders were taken from EtherScan](https://etherscan.io/token/0xB8c77482e45F1F44dE1745F52C74426C631bDD52#balances). No data analysis was done for Binance Chain or Binance Smart Chain.


### Block production and validation, Fees, and Consensus

Since Telos is based on Antelope's DPoS consensus mechanism, there are only 21 active block producers at a time. An additional 21 block producers serve as standby that are continually tested for readiness by regularly rotating one standby block producer into active production.

Any Telos block producers that misses 15% of the blocks in any schedule is removed from its active role, and the 22nd ranked block producer is elevated from standby to active. Network resilience is maintained throughout this process. [There are more than 50 block producers](https://telos.bloks.io). The reserve block producers are [cycled as described in the Telos whitepaper](https://telos.net/wp-content/uploads/2021/02/Telos-Whitepaper-master-20180717.pdf). The block producers are ranked and accepted by TLOS holder voting.

![](<../../static/img/image (8).png>)

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

### Consensus Mechanism

Telos and other modern blockchains are not based on the classic proof of work (PoW) consensus mechanism, which consumes a lot of energy (a wasteful way to run a blockchain). [Ethereum has the carbon footprint of Tanzania](https://digiconomist.net/ethereum-energy-consumption/). The table provides a summary of four mainstream blockchains with its respective consensus mechanism.

| Blockchain          | Consensus                                                                                                                  |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Telos               | Delegated Proof of Stake (DPoS)                                                                                            |
| Ethereum            | Proof of Work (PoW)                                                                                                        |
| Binance Smart Chain | Proof of Authority (PoA) [Parlia](https://docs.binance.org/smart-chain/guides/concepts/consensus.html), inspired by Clique |
| Polygon             | Proof of Authority (PoA) [Bor](https://docs.matic.network/docs/contribute/bor/consensus/), inspired by Clique              |

For an in depth discussion on the protocol driving Telos consensus, click [here](./consensus.md).

### Block Time

Block time and consensus algorithm affects how fast a transaction is finalized, and how interactive dapps can be. The table provides a summary of four mainstream blockchains with its respective block time.

| Blockchain          | Block time                                                              |
| ------------------- | ----------------------------------------------------------------------- |
| Telos               | [500 ms](https://en.wikipedia.org/wiki/EOS.IO) / 2 blocks per second    |
| Ethereum            | 12-15 seconds (plus mempool and miner pick up delay of several minutes) |
| Binance Smart Chain | [3.0-5.0 seconds](https://www.bscscan.com/chart/blocktime)              |
| Polygon             | [2.2 seconds](https://explorer-mainnet.maticvigil.com)                  |

For more information on block time, click [here](./consensus.md).

### Fees

Currently, Telos Zero transactions have no fees. Telos Zero fees are set by block producers and voted by token holders.

EVM transactions will have a fee model similar to [the native Ethereum gas model](https://ethereum.org/en/developers/docs/gas/). The Ethereum account needs to have TLOS token to pay for the transaction. [Telos EVM fees](../evm/about/gas-fees.md) are expected to be < 0.1% of Ethereum gas fees for identical transactions.

The table provides a summary of four mainstream blockchains with its respective pricing (fees) model.

| **Blockchain**      | **Fee model**                                            |
| ------------------- | -------------------------------------------------------- |
| Telos               | Free on Zero & minimal on tEVM, settable by governance |
| Ethereum            | Very high ($30 for a token transfer)                     |
| Binance Smart Chain | Dictated by Binance                                      |
| Polygon             | ?                                                        |

At the time of writing this document, the fee model for Polygon could not be established.


## On-chain Governance and other advance features

### Introduction

Dive into the inner workings of Telos' Network governance documentation. Governance is a huge strength to the Telos network. Powered by the [Telos Decide](https://docs.telos.net/zero/governance/decide/) engine, Telos' governance structure puts network operations in the hands of token holders.

For a full list of Telos on-chain governance documentation, please visit [telos.net/governance](https://www.telos.net/governance).&#x20;

### Governance

Telos has a very advanced on-chain governance model. TLOS holders can participate in governance. Besides choosing the block producers, TLOS holders can draft and vote on proposals. The most common proposals include using Telos treasury to fund initiatives around the Telos ecosystem.

The underlying Telos blockchain rules are defined in [the system contracts](https://github.com/telosnetwork/telos.contracts), a smart contract suite defining the core of Telos network. Any change to the system contracts must go through code review, block producer acceptance and governance acceptance (vetoable). Telos Core Developers working on the system contract are chain-funded and can be paid or dismissed based on community voting. Additionally, Telos token holders are less concentrated than many similar chains.

Telos does not have whales and therefore block producers need only convince the broad collective of TLOS token holders of their strong candidacy. Additionally, Telos block producer voting is "inverse weighted" meaning that if you only vote for one or two block producers your votes have less weight than if you vote for 30. This encourages the majority of Telos members to become more educated about block producer candidates and discourages those who seek to vote only for themselves and their affiliates.

Telos maintains minimum standards for block producers to be eligible candidates. These standards are based on security, server capacity, information disclosure, and participation in the public and private testnet. Block producers are required to run two weeks without error on the testnet before going to the mainnet.

These standards will be enforced by smart contract from the time of mainnet activation and any block producer candidate that is not in compliant compliance will not be capable of serving, regardless of votes. All other block producer candidates will automatically rise up the block producer ranks to fill in until the minimum requirements are met.

Below is an example of active ballots being voted on. TLOS holder can review each of these proposal and subsequently vote on them.

![](<../../static/img/image (9).png>)

The most important proposals are setting the blockchain fees. Currently, there are no fees on TLOS Zero transactions. The table provides a summary of four mainstream blockchains with its respective governance model.

| Blockchain          | Governance model                                                                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Telos               | On-chain token-holder voting                                                                                                                                 |
| Ethereum            | [Mixed model developer anarchy and miner wars](https://www.coindesk.com/ethermine-adds-front-running-software-to-help-miners-offset-eip-1559-revenue-losses) |
| Binance Smart Chain | Binance dictatorship                                                                                                                                         |
| Polygon             | Polygon team dictatorship                                                                                                                                    |

### Conflict of interests

As mentioned in the [decentralization](#decentralization)

| Blockchain          | Conflict of interest issues                                          |
| ------------------- | -------------------------------------------------------------------- |
| Telos               | No conflict due to fair distribution and neutral foundation          |
| Ethereum            | No conflict, except if you have your own competing chain (Binance)   |
| Binance Smart Chain | Any centralized exchange has a conflict of interest to integrate BSC |
| Polygon             | Highly centralized and depends on the Polygon founders               |

### Scalability and state bloat

Blockchains have an issue [with state bloat](https://blocking.net/1417/blockchain-state-explosion-dilemma-hard-core-series/). If there is no way to reduce the cumulative state of all past transactions, the blockchain state grows out of the capabilities of commodity hardware. This in turn will increase the capital cost of running a node and leads to more centralization.

Below is a summary of different blockchains' approach towards state bloat at the moment. Telos Zero transactions use a resource rent model where different resources (CPU, network, storage) are priced separately and can be exchanged or rented.

Storage on Telos (often described as RAM) has a cost, which is set via AMM type system (using Bancor algorithm). The total amount of data stored on chain gives the size of the state. If a smart contract removes data from state, the RAM asset is returned to it's original owner (the account which paid for the storage being recovered), the state size shrinks and that account can then sell the RAM back to the system if it wishes. Via this mechanism, responsible usage of storage is maintained.

Beyond state, the full blockchain history is also a necessary component of the overall blockchain functionality and can be scaled horizontally across a cluster of commodity hardware. The [Hyperion](https://github.com/eosrio/hyperion-history-api) history solution addresses this for both Telos and the tEVM using elastic search and is ran by many Telos validator nodes around the world.

| Blockchain          | State management model                                                                                                                                  |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Telos               | [Resource exchange model (REX)](https://medium.com/telos-foundation/telos-users-guide-understanding-telos-rex-d94d081cd7bb) (does not apply to EVM yet) |
| Ethereum            | No approved proposals                                                                                                                                   |
| Binance Smart Chain | No approved proposals                                                                                                                                   |
| Polygon             | No approved proposals                                                                                                                                   |

### Frontrunning protection

Frontrunning is a situation where miners or bots do a high-frequency trade against the transaction of a genuine buyer causing monetary loss to the buyer. Sandwich Trading is a common form of frontrunning on swap pools that consists of viewing a pending transaction in the mempool and issuing another transaction, buying a large amount of the same transaction to increase the price prior to the genuine buyer's transaction execution followed by a sale afterwards.

The net effect is that value is drawn from the genuine buyer. Frontrunning is accomplished either by bots scouring the mempool for transactions and issuing competing trades with much higher gas fees, or more insidiously, with the participation of miners on the Ethereum mainnet who perform the frontrunning with or paid by the bot operators. This may cause millions of dollars of losses for dapp users.

Telos has binding rules for block producers, as described earlier. Any block producer that is caught manipulating transaction order can be blacklisted through on-chain governance. The fast block speed makes it less likely anyone can frontrun transactions in a public mempool. Telos Zero, and more importantly Telos EVM, have [fixed transaction costs](../evm/about/gas-fees.md). Unlike other systems there is no opportunity for one account to pay a higher fee/gas price to get their transaction processed sooner than another user's transaction. As a result, frontrunning is functionally eliminated from Telos and Telos EVM transactions.

| Blockchain          | Frontrunning situation                                                                                                                   |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Telos               | Prevented through governance                                                                                                             |
| Ethereum            | High incidence - [multiple existing frontrun bots](https://www.theblockcrypto.com/genesis/79937/a-case-study-in-miner-extractable-value) |
| Binance Smart Chain | No mitigation against frontrunning                                                                                                       |
| Polygon             | No mitigation against frontrunning                                                                                                       |
| Secret Network      | [Mitigated through private transactions](https://scrt.network/blog/secretswap-is-live-on-mainnet)                                        |

### Arbitration

Telos has an arbitration process through a body called Telos Arbitration Organization (TAO). There exist a board of arbitrators, elected members voted through TLOS governance. They act independently from block producers. The arbitrators can get involved in dispute cases between Telos users, block producers and deployed smart contracts. [More information about the arbitration process and arbitrators in Telos whitepaper](https://telos.net/wp-content/uploads/2021/02/Telos-Whitepaper-master-20180717.pdf).

Telos arbitration process has not yet been invoked but is planned for implementation by the end of 2021 or in any case where it proves critical to the network operations. The most common expected case of the invocation would be a large scale hack or a system failure. Eventually, Telos Arbitration will offer broad conflict resolution services on the Telos blockchain.

To read more about Telos on-chain governance, click [here](https://www.telos.net/governance).