---
id: 'Nodes and Clients'
sidebar_position: 1
---

__ A guide to understanding, building, and maintaining nodes on the Telos Blockchain Network __

Telos uses EOSIO platform-specific components and libraries (`nodeos`, `cleos`, `keosd`, `EOSIO.CDT`, and `EOSJS`) to operate blockchain nodes, collect blockchain data, interact with nodes, and build smart contracts.

All Telos nodes must implement the client service daemon protocol called **nodeos**. It is a child of EOSIO and is responsible for processing smart contracts, validating transactions, producing blocks, and confirming blocks on the Telos blockchain.

## Node Types

If you are interested in running a Telos node or a Dapp developer, you should consider running a Telos node and understand the differences between validators and block producers. 
1. Producing Nodes: Configured for block production. Each active producing node top-21(DPOS) validates all blocks and transactions it receives


2. Non-producing Nodes: These nodes verify each block and maintain copies of the blockchain. Non-producing nodes mainly operate in standby mode. At a high level, they do much more than checking and verifying the blockchain in Core consensus, including: 
    - Proxy, gateway to Blockchain data;
    - Relaying API calls (API endpoints);
    - Securing the network and boost RPC call performance.

# Telos Nodes Menu

| Title | Description |
| :--- | :--- |
| [**Types of Nodes**](Nodeos) | Learn about Telos node architecture and the different types of Nodes. |
| [**Requirements for running a Node**](Telos_BP_Requirements) | KYC node verification process guide. |
| [**Nodeos Client Software**](Nodeos) | Learn about Telos client software Nodeos. |
| [**Run a Telos Node**](Run-A-Node) | Walkthrough setup Telos node. |
| [**Telos EVM Docker**](TEVM-local-guide) | Guide for running a local tEVM implementation. |

