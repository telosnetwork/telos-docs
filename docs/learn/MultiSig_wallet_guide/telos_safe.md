# Telos Safe Quickstart

__[Telos Safe](https://safe.telos.net/) is the most trusted platform to manage digital assets on the Telos network.__

### Overview

__This guide will walk through how you can create your own MultiSig wallet on the Telos EVM and utilize the Gnosis Safe Help center to understand all of the functionality this MultiSig interface provides.__


### What is Telos Safe? 
- Telos Safe is a fork of Gnosis Safe. The code is exactly the same as Gnosis Safe, the only few diferences are links you may notice in the [Gnosis Safe help center](https://help.gnosis-safe.io/en/articles/3876456-what-is-gnosis-safe).

Telos Safe enables users to securely store Telos minted assets(ERC-20, ERC-721, ERC-1155) and TLOS on the EVM. The Safe is a Multisig account that is controlled by its signer keys. Please refer to [here](https://help.gnosis-safe.io/en/articles/3876456-what-is-gnosis-safe) to learn more about the Telos Safe Multisig application.

#### Prerequisites

In this guide, we will be using: 

- Telos Testnet 

- the Telos Safe UI at https://safe.telos.net/, with settings selected to Telos Testnet 

- Testnet TLOS get some [here](https://app.telos.net/testnet/developers) or read this [Telos Testnet Faucet Guide](https://docs.telos.net/quickstart/evm/testnet_tutorial) to learn how to obtain testnet TLOS 

- MetaMask

If you don't have MetaMask install it [here](https://metamask.io/download/)

### Create a Safe(multisig wallet)

We are going to create a new Safe on the Telos EVM! Make sure you are on the Telos testnet for gaining a good understanding. 
1. Click Create new Safe to get the process started. 
![create a safe](/img/create_safe.png)


2. Connect a signer wallet & select network. We will be using Telos testnet in this. 

![telos_network_safe](/img/telos_network_safe.png)

3. Once a wallet is selected, you can start the process of setting up your Safe by clicking on **"Create New Safe"**. First, you'll need to give a name to your new Safe. This name is only stored locally on your computer and never shared with any third party.

![Safe Name](/img/safe_name.png)

3. **Select Signers**, set your owner name. The wallet prefilled the Owner Address with your connected Metamask primary account. 

- **Note:If you want you can add permissions to additional accounts in you Metamask to test functionality.**

![Owners and Confirmations](/img/owners_and_confirmations.png)

4. **Review Safe Owners.** You have the option to add additional owners to confirm transactions and determine how many owners it may take to confirm a transaction. Depending on your Multisig purpose you will need to add additional owners. For an individual looking to protect NFTs or ERC-20s on the Telos network. One can add an additional Owner 2 and set smart contract to require confirmation of 1 owner out of 2 to adhere to risk of losing private keys. The point is that this wallet is very flexible and it's worth understanding your multisigs usecase. 
 **Approve new Safe transaction**
![review Safe details](/img/review_safe.png)

4. Confirm Metamask transaction.


![confirm the transaction](/img/confirm.png)

**Should receive a Safe Created Notification!**

![safe created](/img/safe_created.png)

## Additional Security Guide

__One of the best practices in creating a new Safe is understanding why you must set a threshold greater than 0 and adding additional owners you trust or maintain on your end.__

5. Add Additional Owners to the Safe. On the left side of the browser page scroll down to settings, click the drop down arrow. Proceed to Owners. Click Add new owner 

**Navigate to Settings**

![Telos-Safe-Settings](/img/telos_safe_settings.png)

**Look at Add Owner Menu**

![Add-Owner-Menu](/img/add_owner_menu.png)

**Add an Owner name and Owner address.** 

![Add-Owner](/img/add_owner.png)

6. Set the threshold for how many owners to confirm a transaction. Note adding an owner will require just .06 TLOS in this transaction. 


__To add an owner to the Safe you must be using a signer account(be an owner)__



![Set-Threshold](/img/set_threshold.png)

Now that you have added a few owners and determined a threshold for you Safe. It is time to explore more features. Check out the Feature guide below for more resources. 

Also the [Gnosis Safe help center](https://help.gnosis-safe.io/en/)

### FAQs for Telos Safe

**What do I do if I lost access to my Safe?** 

- Paste the address you initially created the Safe with or have interacted with in the [Teloscan Block Explorer](https://www.teloscan.io/) to locate the Safe. 
**Note** The Contract function invoked for creating a Safe is **createProxyWithNonce** the contract that is interacted with to create a new Safe is called **GnosisSafeProxyFactory**



### Features Guide
**Telos Safe provides a lot of rich features. Check the links out below for best practices and utilizing all features**

- [Managing Assets](https://help.gnosis-safe.io/en/collections/2767362-assets)
- [Interact with Decentralized Finance DApps](https://help.gnosis-safe.io/en/collections/2331556-dapps-defi)
- [Manage owners, policies and more](https://help.gnosis-safe.io/en/collections/2289657-settings)
- [Security](https://help.gnosis-safe.io/en/collections/794057-security)



### Learn more about Telos Safe and building apps with Gnosis Safe

- Learn from the [Gnosis Safe Team](https://help.gnosis-safe.io/en/) with these extensive guides to get the most value out of the Telos Safe!

- Head over to [Gnosis Docs for Developers](https://docs.gnosis-safe.io/) to learn more about building applications with Gnosis Safe contracts and SDKs.. 
