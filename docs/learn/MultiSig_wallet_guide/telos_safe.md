# Telos Safe

__Telos Safe is the most trusted platform to manage digital assets on the Telos network. Multisigs are shaping the future of Web3 and expansion of crypto assets.__

### Overview

This guide will walk through how you can deploy your own multisignature wallet, using Telos Safe Wallet and having it act as a Light Wallet(contract account wallet). This wallet provides unique use cases in crypto today due to it's multi-signature arrangement of funds with chosen partners, you can think of it as a shared bank account or shared wallet. Telos Safe enables users to control Telos minted assets(ERC-20, ERC-721, ERC-1155) and TLOS on the EVM. 


#### Prerequisites

In this guide, we will be using: 

- Telos Testnet 

- the Telos Safe UI at https://safe.telos.net/, with settings selected to Telos Testnet 

- Testnet TLOS get some [here](https://app.telos.net/testnet/developers) or read this [Telos Testnet Faucet Guide](https://docs.telos.net/quickstart/evm/testnet_tutorial) to learn how to obtain testnet TLOS 

- MetaMask

If you don't have MetaMask install it [here](https://metamask.io/download/)

### Create a Safe(multisig wallet)

We are going to create a new Safe on the Telos EVM! Make sure you are on the Telos testnet for gaining a good understanding. 

![create a safe](/img/create_safe.png)


1. Connect wallet & select network. We will be using Telos testnet in this. 

![telos_network_safe](/img/telos_network_safe.png)

2. Go ahead and Name the wallet. 

![Safe Name](/img/safe_name.png)

3. Firstly, set your owner name. The wallet prefilled the Owner Address with your connected Metamask primary account. 

- **Note:If you want you can add permissions to additional accounts in you Metamask to test functionality.**

![Owners and Confirmations](/img/owners_and_confirmations.png)

4. Review Safe Owners

![review Safe details](/img/review_safe.png)

4. Confirm Metamask transaction.


![confirm the transaction](/img/confirm.png)

**Should receive a Safe Created Notification!**

![safe created](/img/safe_created.png)


### Explore the multisig wallet more on Gnosis Safe docs.

Head over to [Gnosis Docs](https://docs.gnosis-safe.io/) to learn more about the multisig usage and usecases. 
