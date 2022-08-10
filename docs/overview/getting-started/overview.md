---
id: Overview
slug: /
---

# Telos Blockchain Network


## Introduction

#### What is Telos? 

Telos is a next-generation Delegated Proof of Stake (DPOS) Layer-1 blockchain network. It features unsurpassed compatibility for developers and provides an extensive suite of tools and onboarding support to develop and deploy smart contracts on the world's fastest, most scalable, and affordable Telos EVM. The network is backed by robust governance features and a vibrant community of passionate contributors and users excited about the future of Web3. 

![Telos Performance Flex](/img/Telos_Infographic.png)


#### Establishment

The Telos Network is a real-world-ready blockchain. Through years of challenges, innovation, and web3 firsts, Telos has grown into a network capable of supporting the extreme demands of the decentralized world of tomorrow. Launched in 2018 without an ICO and through a fair token distribution, the lead development team initially took the open source eos.io software and debuted a specialized version with additional layers of governance, tooling, and node configuration requirements. Through the years, the development team has continued to innovate based on the needs of builders and, in late 2021, launched the first bespoke/ground-up Ethereum Virtual Machine (tEVM), which runs using a smart contract on the native chain's quick finality and node infrastructure. The launch of the tEVM has given builders and users two networks, native supporting C++-based applications and the tEVM allowing for complete compatibility from any traditional EVM/solidity-based applications. Telos continues to push beyond the boundaries of what web3.0 networks can achieve, and builders can look forward to additional performance and language capabilities as the Telos Network continues on its sharp growth trajectory.

#### Distinctive Attributes Telos provides
- **Uptime:** Operational integrity of the Telos network has maintained a 100% uptime since December 2018 without any breaks, forks, or outages.  
- **No Front Running:**  Telos is architected not to have a mempool and allows for transactions to be processed on a "First in First Out" basis, eliminating the ability for transactions to be front run.
- **Transaction Finality:** .5 second block times. It takes half a second to complete a transaction.
- **Transaction Throughput:** Telos has successfully proven over 10,000 Transactions Per Second in 2 blocks(1 second)
- **Security:** DPOS consensus mechanism provides strong security protection against a 51% attack. Telos requires 2/3s + 1 of the validators to sign blocks. 
- **Fixed Gas Rate:** Telos Gas Fees average .01 per transaction. In addition, gas fees do not fluctuate with network volumes. As a result, costs are more predictable and affordable for users and infrastructure.
- **Sustainable:** Low carbon footprint. A typical transaction currently only consumes 0.000001 kWh to execute.
- **Smart Contract Support:** Smart Contract Support: Developers can build smart contracts on Telos in multiple languages, including Solidity, C++, Go, and Rust. This makes Telos the most compatible and versatile blockchain to build on (Additional language support to be added soon).


## Telos Native

#### Base Layer

EOSIO is the open-source software platform that Telos is built upon. EOSIO is the backbone of Telos as it provides functionalities such as consensus, accounts, authentication, state storage, P2P communication, and the very powerful WASM runtime. Telos has established itself as a high-powered open source EOSIO chain and was the first to build an EVM on top of the EOSIO base layer. WebAssembly provides a universal compile target that enables applications to be developed in any language. Currently, there are compilers for C, C++, RUST, and Typescript, catering to the needs of a diverse range of developers building smart contracts on the native layer of Telos.

#### TLOS Coin

TLOS is the native currency of Telos. The native Telos coin is vital for network governance and allocation of system resources, such as staking for annual returns in Resource Exchange (REX). TLOS is utilized to unlock network bandwidth to execute and interact with contracts, send tokens, and stake for network resources. TLOS is also used as the voting currency in on-chain governance. The total supply of TLOS is 355.2 million coins.

**Resource Overview**
- **RAM:** A size-based resource an account can use to store data within smart contracts.
- **CPU:** A time-based resource an account uses while performing smart contract actions.
- **NET:** A size-based resource an account uses while sending data to the blockchain.

**Governance Overview**

The Telos blockchain is a highly inclusive network. It comprises contributors such as node operators, builders, and users responsible for on-chain governance decisions with TLOS. To ensure transparent governance and decentralization, Telos created the Telos Decide Governance Engine, a system designed to support on-chain voting with TLOS and any user-created tokens. Via Telos Decide, the token holders contribute to decisions around upgrading the Telos native and EVM protocol, voting on Block Producers, proposals, amendments, and elections.

## Telos EVM

### Overview

Telos provides cutting-edge solutions to address the drawbacks developers and users face with other Layer 1 blockchains, such as lagging performance (high latency times & network congestion), limited scalability, and energy consumption. The Telos EVM also implements a fixed gas fee on all transactions, rendering it impossible for whales or any other user to front run their transaction in a mempool. 

- **Architecture:** Telos EVM is a Smart Contract built on the native EOSIO layer. The EVM RPC plays a critical role by translating the native APIs to the standard EVM RPC methods, so all EVM tools and wallets are compatible.
- **Solidity & Viper:** Telos EVM processes the same code as Ethereum's and other EVMs. No modifications are needed. 
- **RPC Specification:** Every Telos client implements a JSON-RPC specification identical to Ethereum's, making it easy to read blockchain data and send transactions to the network. 
- **Convenience Libraries:** Telos supports the same libraries for JSON-RPC API, such as ethers.js & web3.js.
- **Custom indexing COMING SOON**: A public API that will offer improved data over the standard RPC, such as token holder lists, NFTs, approvals, and more.


#### Bridging Native to EVM
Bridge from Native to EVM with our [web wallet](https://wallet.telos.net) to use the EVM DApps. 

### Telos native to Telos EVM
The Telos EVM accounts can be mapped to the native network accounts so users can bridge between the Native network and Telos EVM to leverage tools and DApps on both sides of the network.

1. TLOS, also known as the "gas token," is the native currency for executing transactions on the EVM platform.
2. When an EVM transaction is executed, the RPC relays the raw transaction data to the native Telos smart contract, which runs the contract in the C++ WASM runtime. The RPC is responsible for translating the Ethereum JSON-RPC methods to the APIs of the Telos native network, as well as storing the historical transaction data to satisfy other JSON-RPC methods such as "`eth_getTransactionReceipt`".
3. Account and code tables match the specification in the Ethereum Yellow Paper but are implemented in the EOSIO smart contract.

## Core layer Consensus Protocol aBFT

Telos uses an asynchronous Byzantine Fault Tolerance consensus mechanism at the core layer of block confirmation that processes transactions asynchronously and continues to operate if some of the network nodes fail or act maliciously.



## Delegated Proof of Stake Mechanism

The DPoS consensus decides its block producers according to the votes of the entire community of TLOS holders, which allows the network to achieve high scalability in block production.

**DPoS can be explained in terms of two phases:**

1. Phase 1 (Block Producer Selection): 
    - 21 block producers are elected for block production.
    - Applicants must fill out a node operator form with a list of requirements to become a BP in the Telos network.
    - The top 21 candidates with the highest voting weight can become block producers and obtain block production rewards accordingly. 

2. Phase 2 (Block Production)
    - Block producers validate transactions, construct valid transactions into blocks, and then produce blocks to link the previous block hash to the new appended block.
        - Missed blocks do not affect the subsequent block production.
        - Round of block production lasts 126 seconds (each BP has 6 seconds to produce 12 blocks).
    - Every 12hrs, a standby Block Producer from ranks 22-42 is rotated into the production schedule to test their readiness to sign blocks.
    - If a Block Producer misses blocks for more than a certain threshold (2hrs on average), they are automatically kicked by the system for two days. This kick is recorded on chain.
      - This, combined with the auto-rotation of standbys, ensures all Block Producers comply and are ready to produce blocks.
    - A new block is confirmed once 15 block producers approve through signed messages. This block is then chained to the network. 

 

__Telos block producer voting is "inversely weighted," meaning a user will have their voting power reduced for voting less. It also prevents Block Producers from voting for themselves.__

**Documentation Purpose:** The Telos docs provide a list of comprehensive guides for building on Telos dedicated to web2 and web3 developers. If you have any suggestions, please visit our [EVM](https://t.me/TelosEVMDevs) or [Native](https://t.me/dappstelos) development channels. To contribute, please visit our [documentation repository](https://github.com/telosnetwork/telos-docs) and do a Pull Request in an area where you can apply specific information/knowledge. 

