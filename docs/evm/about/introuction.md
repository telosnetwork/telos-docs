---
description: The best thing since sliced bread
title: "Introduction to Telos EVM"
sidebar_position: 1
hide_table_of_contents: true
---

# Introduction to Telos EVM

Since the introduction of the Ethereum Virtual Machine (EVM), instead of having just a distributed ledger (blockchain 1.0), we have a distributed state machine (blockchain 2.0 - 3.0) which hosts the functionality of the blockchain network. Decentralization is the key when it comes to Blockchain technology.&#x20;

The Ethereum Virtual Machine (EVM) acts like a global prosessing unit or computer which is formed by the collective computing power of its network nodes, making the EVM accessable from anywhere in the world. These nodes lend their resources to developers to create smart contracts and decentralised apps (dApps) which relies on blockchain.

The EVM updates the state by computing valid state transitions as a result of smart contract code execution, as defined by the [blockchain protocol](https://github.com/ethereumbook/ethereumbook/blob/develop/13evm.asciidoc). The state machine can change from one state to another in response to external actors’ (i.e. account holder and block producer) inputs. A transaction represents a valid arc between two states. Therefore an EVM is also referred to as a transaction-based state machine.

The system state is a large data structure which holds not only all accounts and balances, but a machine state, which can change from block to block according to a predefined set of rules, and which can execute arbitrary machine code (bytecode). The specific rules of changing state from block to block are defined by the EVM.

Transactions are collected into blocks, which forms a package of data.

Due to the popularity of Ethereum, EVM and its programming languages (Solidity and Vyper) are the dominant smart contract execution and development environments.&#x20;

The Solidity code gets compiled into bytecode which is executed on their stack-based virtual machine. Before any transaction is executed, a gas fee is charged by the EVM. On the Ethereum blockchain these gas fees are large, depending on the size of the smart contract and how fast you would like it to execute your transaction. Users pay more gas to increase their transaction priority. This pricing model makes micro transactions impossible, and block times are slow. Ethereum has an average block time of [12-15 seconds](https://ethereum.org/en/developers/docs/blocks/#:\~:text=In%20Ethereum%2C%20the%20average%20block,is%20evaluated%20after%20each%20block), while only processing 15 transactions per second reported by [Coinbase](https://ca.finance.yahoo.com/news/ethereum-100-000-transactions-per-183200856.html#:\~:text=Too%20few%20transactions%20per%20second,times%20and%20high%20gas%20fees).

However, networks such as Ethereum have become near unusable for the average user, with slow transaction times and excessive transaction fees.

The tEVM improves on the EVM by implementing it’s own version of the EVM. Telos has implemented the original EVM as a smart contract on the tEVM. All activities that would normally be run by the EVM on an Ethereum node are run by a smart contract on the Telos blockchain.&#x20;

Telos smart contracts and dApps are written in C++ and compiled to WebAssembly (WASM) code. Any native C++ based smart contract is executed on Telos Zero network and no transaction fee is currently charged. It is totally free. Telos Zero fees are set by block producers and voted by token holders.

An Ethereum compatibility JSON-RPC server provides the API Ethereum applications are expecting. It does this by translating the Telos Zero state from the EVM smart contract to Ethereum expected format. EVM transactions that go through the tEVM will have a fee model similar to the native Ethereum gas model. The Ethereum account needs to have TLOS tokens on their tEVM wallet account to pay for the transactions (or code execution). Telos EVM fees are fixed at < 0.1% of Ethereum gas fees for identical transactions. No front-running or miner extracted value (MEV) can occur on tEVM due to tEVM’s first-in-first-out mempool structure.

To conclude, [Telos EVM (tEVM)](https://www.telos.net/evm) is an EVM running on a Telos blockchain as a smart contract. This allows for Ethereum based dApps to easily deploy on the Telos blockchain with all the benefits of Telos, such as

* no front-running,&#x20;
* faster transaction speeds,&#x20;
* and low transaction fees.&#x20;

For an in-depth comparison between the Telos EVM and other EVM based chains see the [Benefits of Telos compared to EVM chains](../../overview/why-telos/introduction.mdx).

These documents will guide Telos Zero users, as well as users coming from Ethereum, to get started on the tEVM. For a more technical overview of the EVM, navigate to the [Overview and architecture](./overview-and-architecture.md) section.&#x20;


For more information and other questions related to getting started with tEVM, click [here](https://help.telos.net).

Developers looking to start deploying on the tEVM can find support in the [Developer Guides](../smart-contracts/verify_with_remix.md).

