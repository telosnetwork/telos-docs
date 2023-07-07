---
description: A Document Amendment Service for the Telos Blockchain Network
title: Getting Started
sidebar_position: 1
hide_table_of_contents: true
---

# Getting Started

Telos Amend is a Decentralized Document Amendment service for the Telos Blockchain Network. It allows any Telos holder to create text documents or links and allow a group of decentralized voters to propose amendments.

## Service Fees

| Fee Name | Fee Amount |
| :--- | :--- |
| New Document | 50.0000 TLOS |
| New Proposal | 10.0000 TLOS |

The above fees are adjustable by a Block Producer multisig or a referendum by the Telos token holders.

## Deposit into Telos Amend

To make a deposit to cover service fees, simply transfer TLOS to the `amend.decide` account. Telos Amend will catch the transfer and automatically create a deposit balance, if one doesn't already exist. Further deposits and withdrawals will automatically flow from this deposit balance.

## Withdraw from Telos Amend

To make a withdrawal from Telos Amend, call the `withdraw` action on the `amend.decide` contract.

