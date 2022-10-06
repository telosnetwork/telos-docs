# DApps on Telos EVM

# Launch Your Ethereum DApp on Telos

## Overview

This document aims to help developers launch their existing dApps on Telos. In this section, you will find a series of resources that will detail:

- The basics of the Telos platform.
- How to connect to the network. 
- How to use your existing tools and environments in developing and deploying on Telos. 
- Common pitfalls you may encounter when running your dapp on Telos.

## Platform Basics

Telos EVM is an implementation of the Ethereum EVM. It is written as a smart contract in EOSIO(C++) and runs on top of the native network. DApps built on the Telos EVM will run similarly to how they run on Ethereum, but with several key differences; namely, tEVM will execute transactions orders of magnitude faster and cheaper than on Ethereum. 

## Accessing Telos 

There are several ways developers can connect with Telos, as seen below:

### Through MetaMask

You can access TelosEVM through MetaMask by creating a custom network. Log into MetaMask and select the network dropdown. Then select 'Custom RPC' and enter the following data for Telos:

#### **Telos Mainnet Settings:**

* **Network Name**: Telos Mainnet 
* **New RPC URL**: [https://mainnet.telos.net/evm](https://mainnet.telos.net/evm)
* **ChainID**: `40`
* **Symbol**: `TLOS`
* **Explorer**: [https://www.teloscan.io/](https://www.teloscan.io/)

#### **Telos Testnet Settings:**

* **Network Name**: Telos Testnet
* **New RPC URL**: [https://testnet.telos.net/evm](https://testnet.telos.net/evm)
* **ChainID**: `41`
* **Symbol**: `TLOS`
* **Explorer**: [https://testnet.teloscan.io](https://testnet.teloscan.io/)

#### **Telos Websockets:**

* **Testnet : wss://testnet.telos.net/evm**

* **Mainnet: wss://mainnet.telos.net/evm**


