---
id: Overview
slug: /
---

# Telos Blockchain Network


## Introduction

#### What is Telos? 

Telos is a high performing blockchain network that provides access to a suite of tools for developing smart contracts with robust governance features and a vibrant community. Building a fairer, faster future with a community of contributors and users that are passionate about the future of web3. 

![Telos Performance Flex](/img/Telos_Infographic.png)


#### Establishment

The Telos Network is a real world ready blockchain which, through the culmination of years of challenges, innovation and web3 firsts has grown to be a network capable of supporting the extreme demands of the decentralized world of tomorrow. Launched in 2018 without an ICO and through a fair token distribution, the lead development team initially took the open source eos.io software and launched a specialized version with additional layers governance, tooling, and node configuration requirements. Through the years, the development team has been continuing to innovate based on the needs of builders and in late 2021 launched the first bespoke/ ground up Ethereum Virtual Machine (tEVM) which runs using a smart contract on the native chain's quick finality and node infrastructure.  The launch of the tEVM has given builders and users two networks, native supporting C++ based applications and the tEVM allowing for complete compatibility from any traditional EVM/solidity based applications.  Telos is continuing to push continuous advancement in the capabilities in what web3.0 networks can achieve and builders can look forward to additional performance and language capabilities as the Telos Network continues to grow.

#### Distinctive Attributes Telos provides
- **Uptime:** Operational integritiy of the Telos network has maintained a 100% uptime, meaning that nodes have been consistently producing blocks since genesis block.  
- **No Front Running:**  Telos is architected to not have a mempool and allows for transactions to be processed in a "First in First Out" basis, eliminating the ability for transactions to be front run.
- **Transaction Finality:** .5 second block times. It takes half a second to complete a transaction.
- **Transaction Throughput:** TELOS has successfully proven in excess of 10,000 Transactions Per Second in 2 blocks(1 second)
- **Security:** DPOS consensus mechanism provides strong security protection against a 51% attack. Telos requires 2/3s + 1 of the validators to sign blocks. 
- **Fixed Gas Rate:** Telos Gas Fees average in at .01, gas fees don't fluctuate with network volumes. Costs are more predictable and affordable for users and infrastructure. 
- **Sustainable:** Low carbon footprint, currently only uses 0.000001 kWh to execute one transaction.
- **Smart Contract Support:** Developers have the option to build smart contracts in multiple languages such as Solidity, C++, Go, and Rust making it one of the most flexible blockchains for builders. NOTE: Additional langauge support coming.


## Telos Native

#### Base Layer

EOSIO is the open source software platform that Telos is built upon.  EOSIO is the backbone of Telos as it provides functionalities such as consensus, accounts, authentication, state storage, P2P communication, and the very powerful WASM runtime. Telos has made a mark as an EOSIO chain and was the first to build an EVM on top of the EOSIO base layer. WebAssembly provides a universal compile target that enables applications to be developed in any language. Currently there are compilers for C, C++, RUST, and Typescrypt fitting needs of a diverse range of developers building smart contracts on the native layer of Telos. 

#### TLOS Coin

TLOS is the native currency of Telos.  The native Telos coin is important for governing the network and allocating system resources such as staking for annual returns in Resource Exchange(REX). TLOS is utilized to unlock bandwidth on the network in order to execute and interact with contracts, send tokens, and stake for network resources. TLOS is also used as the voting currency in on-chain goverancne. TLOS has a total supply of 355.2 million coins.

**Resource Overview**
- **RAM:** A size-based resource an account can use to store data within smart contracts.
- **CPU:** A time-based resource an account uses while performing smart contract actions.
- **NET:** A size-based resource an account uses while sending data to the blockchain.

**Governance Overview**

The Telos blockchain is a highly inclusive network consisting of contributors such as node operators, builders, and users responsible for participating in on-chain governance 
decisions with TLOS. To ensure strong governance and decentralization, Telos created the Telos Decide Governance Engine, a governance system designed to support on-chain voting with TLOS and any user created tokens as well.
Via Telos Decide, the tokenholders all contribute to decisions around upgrading the Telos native and EVM protocol, voting on Block Producers, proposals, amendments and elections.

## Telos EVM

### Overview

Telos has made substantial improvements that address problems other Layer 1 blockchains are facing such as performance, scalability, and energy consumption. The Telos EVM is designed to combat front running
so that transactions from large institutions or whales performing Defi transactions can't be pushed on top of retail traders in a mempool.

- **Architecture:** Telos EVM is a Smart Contract built on the native EOSIO layer, the EVM RPC plays a critical role by translating the native APIs to the standard EVM RPC methods so all EVM tools and wallets are compatible.
- **Solidity & Viper:** Telos EVM processes the same code as Ethereum's EVM and other EVMS, no modifications are needed. 
- **RPC Specification:** Every Telos client implements a JSON-RPC specification that is identical to Ethereum's making it easy to read blockchain data and/or send transactions to the network. 
- **Convenience Libraries:** Telos supports the same libraries for JSON-RPC API such as ethers.js & web3.js
- **Custom indexing COMING SOON**: A public API which will offer improved data over the standard RPC, such as token holder lists, NFTs, approvals and more.

#### Bridging Native to EVM
Bridge from Native to EVM with our [web wallet](https://wallet.telos.net) to use the EVM DApps. 

### Telos native to Telos EVM
The Telos EVM accounts can be mapped to the native network accounts so that users can bridge between the Native network and Telos EVM to leverage tools and DApps on both sides of the network. 

1. TLOS is the native currency for executing transactions on the EVM platform also known as the "gas token". 
2. When an EVM transaction is executed the RPC relays the raw transaction data to the native Telos smart contract, which executes the contract in the C++ WASM runtime. The RPC is responsible from translating the Ethereum JSON-RPC methods to
the APIs of the Telos native network, as well as for storing the historical transaction data to satisfy other JSON-RPC methods such as `eth_getTransactionReceipt`
3. Account and code tables match the specification in the Ethereum Yellow Paper but are implemented in the EOSIO smart contract.

## Core layer Consensus Protocol aBFT

At the core layer of block confirmation, Telos uses a asynchronous Byzantine Fault Tolerance consensus mechanism that processes transactions asynchronously and continue to operate if some of the networks nodes fail or act malicously. 



## Delegated Proof of Stake Mechanism

The DPoS consensus decides its block producers according to the votes of the entire community holding TLOS, thus achieving high scalibility in block production. 

**DPoS can be summarized into two phases**

1. Phase 1 Block Producer Election: 
    - 21 block producers are elected for block production.
    - To become a BP in the Telos network there is a node operator form with a list of requirements.
    - Top 21 candidates with the highest voting weight can become block producers and obtain block production rewards accordingly. 

2. Block Production
    - Block producers validate the transactions, construct the valid transactions into blocks and then produce blocks orderly linking prev block hash to new appended block
        - Missed blocks do not affect the subsequent block production
        - Round of block production lasts 126 seconds(each BP has 6 seconds to produce 12 blocks)
    - Every 12hrs a standby Block Producer from ranks 22-42 is rotated into the production schedule to test their readiness to sign blocks.
    - If a Block Producer misses blocks for more than a certain threshold (2hrs on average) then they are automatically kicked by the system for 2 days, this kick is recorded on chain.
      - This combined with the auto-rotation of standbys ensures all Block Producers are in compliance and ready to produce blocks.
    - A new block is confirmed once 15 block producers approve through signed messages. This block is then chained to the network. 

 

__Telos block producer voting is "inverse weighted" meaning that the less votes a user makes reduces voting power. This takes away Block Producers voting for themselves.__

**Documentation Purpose:** The Telos docs is aimed to provide a list of comprehensive guides in building on Telos for web2 and web3 developers. If you have any suggestions please list visit our [EVM](https://t.me/TelosEVMDevs) or [Native](https://t.me/dappstelos) development channels. If you want to contribute visit our [documentation repository](https://github.com/telosnetwork/telos-docs) and do Pull Request in an area where you can apply specific information/knowledge. 