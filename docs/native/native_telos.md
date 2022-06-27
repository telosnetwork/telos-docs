# Telos Native Platform


_**The purpose of this document is to help you understand the components and utility of the Telos native EOSIO platform**_

--------------------                           ------

## Overview

Telos native leverages the EOSIO platform which applies in this section. 


For the quickest start at deploying and testing smart contracts on Telos you can use our web browser IDE [Telos Studio](https://studio.telos.net/)

The Telos native platform provides a number of components and libraries from EOSIO which are used to operate blockchain nodes, collect blockchain data, to interact with these nodes, and to build smart contracts. The main component is nodeos (node + EOSIO = nodeos). This is the core EOSIO node daemon that can be configured with plugins to run a node. Example uses are block production, dedicated API endpoints, and local development. Cleos (CLI + EOSIO = cleos) is a command line interface which interacts with nodeos, allowing you to send commands and actions to a blockchain. Cleos also interacts with keosd (key + EOSIO = keosd), a local component that securely stores EOSIO keys.

--------------------------------                -------------

# Toolkit

![EOSIO](/img/eosio_development_lifecycle.png)

The Telos platform at protocol level is made out of the following components and toolchain:

**Nodeos**: For working with Nodes

**Cleos**: CLI for sending commands and actions to the blockchain

**Keosd**: The component that securely stores Telos keys in wallets

**EOSIO.CDT**: Toolchain for WebAssembly(Wasm) and a set of tools to facilitate smart contract writing for the Telos native blockchain




------    --------------                           ------

## Next Steps 

__Head over to the [overview](/native/eosio_toolkit/README.md) page and get started with installing EOSIO__

Walkthrough below before deploying smart contracts:

- Create Development Wallet: Cleos intro walkthrough
- Start Keosd and Nodeos: Walkthrough to start Keosd and Nodeos
- Create Development Accounts: Account generation walkthrough






