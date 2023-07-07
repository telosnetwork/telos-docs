---
title: "Frontrunning Protection"
sidebar_position: 6
hide_table_of_contents: true
---

# Frontrunning Protection

Frontrunning is a situation where miners or bots do a high-frequency trade against the transaction of a genuine buyer causing monetary loss to the buyer. Sandwich Trading is a common form of frontrunning on swap pools that consists of viewing a pending transaction in the mempool and issuing another transaction, buying a large amount of the same transaction to increase the price prior to the genuine buyer's transaction execution followed by a sale afterwards.

The net effect is that value is drawn from the genuine buyer. Frontrunning is accomplished either by bots scouring the mempool for transactions and issuing competing trades with much higher gas fees, or more insidiously, with the participation of miners on the Ethereum mainnet who perform the frontrunning with or paid by the bot operators. This may cause millions of dollars of losses for dapp users.

Telos has binding rules for block producers, as described earlier. Any block producer that is caught manipulating transaction order can be blacklisted through on-chain governance. The fast block speed makes it less likely anyone can frontrun transactions in a public mempool. Telos Zero, and more importantly Telos EVM, have [fixed transaction costs](../../evm/about/gas-fees.md). Unlike other systems there is no opportunity for one account to pay a higher fee/gas price to get their transaction processed sooner than another user's transaction. As a result, frontrunning is functionally eliminated from Telos and Telos EVM transactions.

| Blockchain          | Frontrunning situation                                                                                                                   |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Telos               | Prevented through governance                                                                                                             |
| Ethereum            | High incidence - [multiple existing frontrun bots](https://www.theblockcrypto.com/genesis/79937/a-case-study-in-miner-extractable-value) |
| Binance Smart Chain | No mitigation against frontrunning                                                                                                       |
| Polygon             | No mitigation against frontrunning                                                                                                       |
| Secret Network      | [Mitigated through private transactions](https://scrt.network/blog/secretswap-is-live-on-mainnet)          