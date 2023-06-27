---
description: How does gas billing work in the Telos EVM?
title: "Gas Fees"
sidebar_position: 3
---

# Gas fees

### Overview

The general formula for calculating the gas fee is:

$$
gasUsed * gasPrice = gasFee
$$

Telos EVM uses the TLOS token as the native currency, similar to ether (ETH) on Ethereum. Therefore TLOS is used to pay for gas fees.

Transactions will contain two gas related values:

1. first we have the current gas price that the signer of the transaction will have to pay,&#x20;
2. and second is the gas limit, which is the most gas they will approve to be used for the transaction.

### Fee beneficiary

The fees collected as part of EVM gas billing are sent to a fees account as part of every transaction. These fees will be added back to the network reserve, which currently is where validator pay, REX rewards and other funding is sourced from.  This helps Telos to be a more sustainable tokenomic model.

### RAM as gas

Gas used is based on the number and type of operation (opcodes) that are executed as part of the transaction.  The Telos EVM uses the same opcode gas amounts as Ethereum and other EVMs so the gas used will be similar.\
\
The one major difference however, is that Telos EVM charges gas in TLOS Zero at a moving gas price that depends on the amount of RAM used on the EVM contract in the last few minutes. Therefore the current gas price is an estimation of the cost needed to cover the RAM used by EVM users and contracts.&#x20;

The gas price is calculated as follows:

$$
gasPrice = TLOSperByte/gasPerByte
$$

Where the "TLOS per Byte" is the current cost of RAM, which can be seen on a [block explorer](https://www.teloscan.io/). The "gas per byte" is a fixed value set in the EVM contract.

Because of the semi-fixed gas price and the inherent FIFO nature of Telos transaction processing, there is no means for [frontrunning](./why-telos.md#frontrunning-protection) using a higher gas price than another transaction.

#### Example of standard transfer

The gas amount for a standard transfer is 21000 gas. At the writing of this document, the TLOS per KB is 0.0390 and the gas per byte is set at 69.

The gas price is therefore close to 550 Gwei. Which means that a standard transfer would cost 21000\*550 Gwei = **0.01 TLOS**.

### Configurable settings

The Telos validator nodes can configure two settings (_init_ _&_ _setresources_) in the Telos EVM smart contract via a multi-sig transaction requiring 15/21 to approve.  Those settings can be seen at any time on chain via [block explorer](https://www.teloscan.io/) or by directly querying the [RPC](https://rpc1.eu.telos.net/evm).

#### Gas per byte

The estimated gas for each byte of RAM. This is essential to the calculation of the gas price. This value ensures that the RAM used gets paid for.

#### Target free

This is the amount of bytes that should remain free on the EVM contract.

#### Minimum Buy

This is the minimum number of bytes that had to be used before the gas price can change again.

#### Fee transfer percentage

This is the percentage amount of TLOS that gets transferred to the fees account. The rest will be left as a reserve to cover RAM costs.

### Telos Zero resource costs

As the Telos EVM runs as a smart contract on the Telos Zero network, there are still resource costs associated with the Telos Zero transaction involved with every EVM transaction. These resource costs are covered by the validator nodes which run the EVM RPC endpoints. &#x20;

As CPU/NET resources gets replenished over a daily average and are not actually "spent", it is only RAM which is a spent cost.  In the case of RAM, the EVM contract itself pays for the RAM and buys it as part of every transaction that uses it, thus constantly maintaining it's RAM supply and paying for it out of gas costs as mentioned above.

To learn more about Telos resources running the blockchain network, go to [Network Resources](../../zero/resource-management/overview.md) section.
