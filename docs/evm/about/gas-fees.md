---
description: How does gas billing work in the Telos EVM?
title: "Gas Fees"
sidebar_position: 3
---

# Gas Fees

## Overview

:::tip
Telos EVM uses the TLOS token as the native currency, similar to ether (ETH) on Ethereum. Therefore TLOS is used to pay for gas fees.
:::

Gas price is fixed, you can enter a higher price but will only be charged the current set price, you cannot enter a lower price or the transaction will be rejected (no gas charged). This means you cannot front run other transactions or speed yours up, but block times are .5 seconds so there is no need to speed them up.

The general formula for calculating the gas fee is: __gasUsed * gasPrice = gasFee__

Transactions will contain two gas related values:

1. first we have the current gas price that the signer of the transaction will have to pay,&#x20;
2. and second is the gas limit, which is the most gas they will approve to be used for the transaction.

## Fee Beneficiary

The fees collected as part of EVM gas billing are sent to a fees account as part of every transaction. These fees will be added back to the network reserve, which currently is where validator pay, REX rewards and other funding is sourced from.  This helps Telos to be a more sustainable tokenomic model.

## Example of Standard Transfer

The gas amount for a standard transfer is 21000 gas. At the writing of this document, the TLOS per KB is 0.0390 and the gas per byte is set at 69.

The gas price is therefore close to 550 Gwei. Which means that a standard transfer would cost 21000\*550 Gwei = **0.01 TLOS**.
