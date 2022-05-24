# DApps on Telos EVM

# Launch Your Ethereum DApp on Telos

## Overview

The purpose of this document is to help you with launching your existing dapp on Telos. It contains a series of resources designed to help you get the basics of Telos Platform and how it works, show how to connect to the network, how to use your existing tools and environments in developing and deploying on Telos, as well as some common pitfalls you need to consider when running your dapp on Telos.

## Platform Basics

Telos EVM is an implementation of the Ethereum EVM written as a Smart Contract in EOSIO(C++) that simply runs ontop of the native network. As far as your dapp is concerned, it will be running the same as on Ethereum, just quicker and cheaper. Let's find out how.

## Accessing Telos 

There are multiple ways of working with the Telos. We are creating more ways to connect in the near future

### Through MetaMask

You can access C-Chain through MetaMask, by defining a custom network. Go to MetaMask, log in, click the network dropdown, and select 'Custom RPC'. Data for Avalanche is as follows.

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
* **Explorer**: [https://testnet.telos.net/v2/explore/](https://testnet.telos.net/v2/explore/)

#### **Telos Websockets:**

* **Testnet : wss://testnet.telos.net/evm**

* **Mainnet: wss://mainnet.telos.net/evm**

## Running Your Own Node

If you don't want your dapp to depend on a centralized service you don't control, or have specific needs that cannot be met through the public API, you can run your own node and access the network that way. Running your own node also avoids potential issues with public API congestion and rate-limiting.

For development and experimental purposes...

### Node Configuration

Coming soon..

