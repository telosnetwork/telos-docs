---
description: 'This is the roadmap for Telos EVM:'
title: "Roadmap"
sidebar_position: 7
---

# Roadmap

{% hint style="info" %}
For our latest announcements regarding our roadmap for 2022 and beyond, visit our site [here](https://www.telos.net/news/telos-roadmap-2022-beyond).
{% endhint %}

### Milestone 1: Testnet trials&#x20;

This milestone contains some of the first user testable features of Telos EVM.

* Runs on a testnet
* Limited EVM and JSON-RPC compatibility

| Task                                        | Description                                                                                               | Status          |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------- |
| EVM as Telos smart contract                 | Initial work to make EVM smart contract runnable on Telos blockchain                                      | ✅               |
| Ethereum JSON-RPC API compatibility server  | Initial work for Express.js application that offers Ethereum JSON-RPC compatible API to access Telos EVM  | <p>✅</p><p></p> |
| Architecture documentation                  | Developer documentation how Telos EVM is structured and how it works                                      | ✅               |
| Unique selling point documentation          | What makes Telos EVM better than other EVM based chains                                                   | ✅               |
| EVM test suite                              | An automated test suite that executes EVM compatibility tests against Telos EVM smart contract            | 🟡              |
| MetaMask connectivity                       | Users can connect their MetaMask and see token balances                                                   | ✅               |
| Developer community chat                    | Public chat for Ethereum focused developers                                                               | ✅               |
| How to connect to the testnet               | How the developers can connect to a public EVM JSON-RPC endpoint                                          | ✅               |
| An open-source demo app                     | An ERC-20 token faucet running on testnet EVM                                                             | ✅               |
| Testnet token faucet                        | Get EVM TLOS and ERC-20 tokens into your MetaMask                                                         | ✅               |

### Milestone 2: EVM and JSON-RPC compatibility on testnet

* Runs on a testnet
* Developers can deploy their own Telos EVM instances for local development
* Runs automated test suites of popular EVM projects (SushiSwap, OpenZeppelin, MakerDAO)

| Task                          | Description                                                                                                                      | Status |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Gas fee price list            | Documentation how Telos EVM consumes gas and what developers should expect                                                       | ✅      |
| getLogs compatibility         | Solve how to make eth\_getLogs API for Telos                                                                                     | ✅      |
| Incompatibility documentation | How Telos EVM differs from Ethereun mainnet EVM                                                                                  | ✅      |
| Developer instance automation | Automated set up and tear down of local Telos EVM test instances                                                                 | ✅      |
| JSON-RPC test methods         | Implementation of time travel, account reset and other test suite specific JSON-RPC methods                                      | 🛑     |
| JSON-RPC test wrapper         | Allow running a test suite against Telos EVM from popular Solidity development frameworks like Truffle, Hardhat and OpenZeppelin | ✅      |
| Developer tutorial            | A simple Solidity Hello World application on Telos EVM for developers                                                            | ✅      |
| Blockchain explorer           | A basic open-source blockchain explorer that allows you to see EVM transactions on testnet                                       | 🟡     |
| Complex DApp example          | An example of complex DApp ported to the testnet (Uniswap, Aave, others)                                                         | 🟡     |

### Milestone 3: First mainnet release

EVM readiness for real-word DApps and decentralised finance.

* Mainnet launch with an alpha state

| Task                         | Description                                                                                                       | Status |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------ |
| EVM deployment on mainnet    | The first deployment of EVM contract on the mainnet                                                               | ✅      |
| Advanced blockchain explorer | A SaaS blockchain explorer that can do verified contracts, token transfer maps and all features DeFi users expect | 🛑     |
| Public JSON-RPC endpoint     | Developer friendly JSON-RPC endpoints for testnet and mainnet                                                     | 🛑     |
| Websocket Support            | Websockets to connect to the RPC endpoints.                                                                       | 🛑     |
| TheGraph integration         | TheGraph backend for the Telos EVM chains                                                                         | 🛑     |

### Milestone 4: Additional ecosystem improvements

First DeFi applications running on Telos EVM on mainnet

| Task                                            | Description                                                                                                                                                    | Status |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| ERC-20 bridge                                   | Easily moving tokens between Telos EVM mainnet and other EVM based  blockchains                                                                                | 🛑     |
| Telos native and EVM smart contract integration | SDK for integrating between native Telos smart contracts and EVM based contracts                                                                               | 🛑     |
| Block producer modifications                    | Any modifications needed for block producers or system contracts to make Telos EVM more attractive than other EVM based chains as a DApp execution environment | 🛑     |

