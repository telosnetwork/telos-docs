---
id: Overview
slug: /
---

# Overview


## Introduction

Telos is an open source platform built for launching decentralized applications with a variety of features powered by Smart Contracts. Telos is the first EVM built on top of an EOSIO blockchain powering EVM developers to quickly build on Telos as Solidity based Dapps work out-of-the-box. 


A key difference between Telos and other decentralized networks is the consensus protocol. Over time, people have come to a false understanding that blockchains have to be slow and not scalable. The Telos protocol employs a novel approach to consensus to achieve a quick finality, energy efficient, and high throughput blockchain with strong safety guarentees. 


## TELOS

TLOS is the native token of Telos. It’s a hard-capped, scarce asset that is used to pay for fees, secure the platform through staking, and provide a basic unit of account between the native network and EVM. 

## Core layer Consensus Protocol aBFT

At the core layer of block confirmation, Telos uses a asynchronous Byzantine Fault Tolerance consensus mechanism that allows transactions to be processed asynchronously and continue to operate if some of the networks nodes fail or act malicously. 





## Delegated Proof of Stake Mechanism

Telos inherits EOSIO blockchain software at its main core which provides an operating environment for aBFT and DPoS. 

The DPoS consensus decides its block producers according to the votes of the entire community holding TLOS, thus achieving high scalibility in block production. 

**DPoS can be summarized into two phases**

1. Phase 1 Block Producer Election: 
    - 21 block producers are elected for block production.
    - By EOSIO open network nature anyone with hardware resources can become BP
    - Top 21 candidates with the highest voting weight can become block producers and obtain block production rewards accordingly. 

2. Block Production
    - Block producers validate the transactions, construct the valid transactions into blocks and then produce blocks orderly linking prev block hash to new appended block
        - Missed blocks do not affect the subsequent block production
        - Round of block produciton lasts 63 seconds(each BP has 3 seconds to produce 6 blocks)
    - A new block is confirmed once 15 block producers approve through signed messages. This block is then chained to the network. 

 

__Telos block producer voting is "inverse weighted" meaning that the less votes a user makes reduces voting power. This takes away blockproducers voting for themselves.__

## Telos EVM

Telos has an EVM encapsulated into its native network that simulates the same composability and programming language as Ethereum and other EVMs, but has substantial improvements that address problems other Layer 1 blockchains are facing such as performance, scalability, and energy consumption. The Telos EVM is designed to combat front running so that large institutions or whales performing Defi transactions can't be pushed on top of retail traders in a mem pool. 


## Key Features & Performance Metrics

### Speed

Block produciton: .5 second time for block to be generated


### Scalability

Capable of 10,0000 transactions per half second–an order of magnitude greater than existing blockchains.

### Security

Ensures stronger security guarantees well-above the 51% standard of other networks. 

### Front-running protection

First in, first out transactions functionally eliminate front running. Fixed-rate gas fees, no mem pool. 

### Smart contract support

Telos is fully compatible with Ethereum. Developers can create and deploy smart contracts as they would on Ethereum. 

### Sustainability

Currently uses only 0.000001 kWh to execute one transaction making it a more efficient blockchain compared to other PoS chains and PoW. 

### Smart Contract Support

Supports the creation of Solidity smart contracts and your favorite Ethereum tools like Remix, Metamask, Truffle, and more.

### Affordable gas fees

Native network is feeless.
Telos EVM transaction fees average $0.01
