---
description: Store & Interact with the Telos Network
sidebar_positon: 1
---

# Accounts and Wallets

## Accounts on Telos

All accounts on Telos are identified by a twelve character (human-readable) name. This account name represents an uint64\_t (unsigned 64-bit integer) identifying the account. This integer is not the account’s public key, neither is it directly related to a specific key-pair. This account name is controlled by one or more key-pairs (which can be updated).

If there is a private key which controls the account _ACCOUNT\_NAME_, that private key can be updated to a new key. Multiple key-pairs can control that specific account, each with specific permissions. By default, the key permissions are “active” and “owner”.

An active key is allowed to take any action (staking, unstaking, resource management, token transfers, pushing actions to applications, etc). The active permission is allowed to update and change its key, but it cannot change the owner’s key.

The owner account has the exclusive function to change its own key, and always the ability to change the active key. This adds an extra layer of security to the system. In the event that an active key has been compromised, the owner key can update the active key.

More specific actions and permissions can be set-up, like multi-signature permissions attached to specific actions (as defined by the smart contract).

For a guided tutorial on how to create a Telos account click [here](../../zero/about/accounts.md#creating-an-account) or visit our site for more information [here](https://www.telos.net/).

For more information on how to change a Telos account's active and owner keys on Anchor, click [here](https://help.telos.net/en\_US/security/how-to-change-telos-keys-using-anchor).

## What is a Wallet?

A blockchain wallet (e-wallet, crypto wallet or signer) is a tool that you use to interact with a blockchain network. It is a digital wallet that allows users to store and manage their digital money (tokens or cryptocurrencies). A blockchain wallet allows the transfer of cryptocurrencies between users, and it has the ability to convert them back into a user’s local currency.

A wallet can either be a device or application that stores a collection of cryptographic keys and can be used to send, receive, and track ownership of cryptocurrencies. Wallets can take many forms. A wallet might be a directory or file in your computer's file system, a piece of paper, or a specialized device called a _hardware wallet_. There are also various smartphone apps and computer programs that provide a user-friendly way to create and manage wallets.

When interacting with the Telos blockchain, your choice of wallet software for safely storing and utilizing your tokens is one of the most critical decisions that you can make. Important factors include security, usability, and integrations for dApps and trading. Your wallet is your doorway into the Telos Blockchain network.

Once you have created your Telos account, and linked it with your wallet provider, then you are ready to start interacting with the Telos network.

**Telos support a range of wallets.** For the majority of users, we recommend using one of the app wallets or a browser-based web wallet, which will provide a more familiar user experience rather than needing to learn command line tools.

Currently, some of the more commonly used wallets are the following (_**please**_ _**note that this is not an endorsement of any of the following wallets**_**)**

## **Desktop Wallets**

The desktop version enables users to store their wallet directly on their computer.

* [Anchor](https://greymass.com/en/anchor): Uses the innovative ESR protocol, created by Telos BP Greymass
* [Wombat](https://www.wombat.app/): Simple wallet experience, focus on gameFi

## **Mobile Wallets**

* [Anchor](https://greymass.com/en/anchor): Uses the innovative ESR protocol, created by Telos BP Greymass
* [Wombat](https://www.wombat.app/): Simple wallet experience, focus on gameFi
 
## Command-Line Wallet

* [CLEOS](../../zero/developer-environment/cleos.md): developed by [Block.One](https://block.one)

Creating a Telos account typically requires a small deposit of another cryptocurrency, and should be finalized shortly after payment. From this point forward your account name can be used as your receiving address, and will be used to identify you on the blockchain.

For a more in-depth discussion on Accounts and account Permissions, click [here](../../zero/about/accounts.md).
