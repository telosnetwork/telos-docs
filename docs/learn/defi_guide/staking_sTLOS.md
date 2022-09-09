# Liquid Staking on EVM (sTLOS) - UAT Guide

__A guide on how to stake TLOS on EVM for the sTLOS receipt token. We are in the UAT phase so this is not in effect on mainnet yet. Follow the guide and provide feedback.__

For UAT testers please follow the testing scenarios. Try to stake and unstake as many times as you are willing to. Please let us know your opinion on UI and provide your overall experience when staking Telos on EVM. If there is anything that you think missing or would benefit our end-users let us know in the Telegram channel. This is very exciting for the future development of the Telos Defi ecosystem. Let's set this off here. 

-------   --                    ------

## Purpose
In this guide we will stake TLOS for sTLOS(receipt token) on [Teloscan](http://teloscan.io). We are pushing for a few days of rigorous testing and feedback from our UAT particpants. 

### Testing Scenarios

- Connect to website
- Please stake several smaller positions and monitor behaviour
- Unstake several smaller positions
- wait some minutes and unstake further positions
- Claim earlier positions when matured, all should be claimed excepted those that are not matured, yet

### Why stake TLOS for sTLOS?
- Staked sTLOS helps you put your staked TLOS to work in Defi and explore additional yield opportunities.
- Helps lock TVL on EVM enabling more attraction for investors and Dapps building on Telos. 

>   Disclaimer: Having sTLOS on the tEVM does not allow you to vote in governance processes (including block producers and worker proposals) - these are limited to the native network. Stake on Native to participate in Defi. Stake on EVM for receipt token and more yield opportunties. It's simple ask yourself this question: why am I staking? What is my defi play(have a plan), as there is a 3-5 day locking period.

## Prerequisites

You can easily create a new account on Metamask or utilize an existing tEVM account when staking to sTLOS. In case you have never used tEVM before with your Telos native account, following guide will assist you to get started using to create a tEVM account using the [TLOS_Webwallet](https://wallet.telos.net/). 

In order to stake TLOS on EVM following pre-requisites are required:

- **An EVM account on Metamask**
- **Metamask** If you don't have Metamask then follow this link [Download_Metamask](https://metamask.io/download/)
- **Add Telos EVM Testnet to MetaMask**

__Note: You may use [Chainlist](https://chainlist.org/) and select Chain ID 41 to connect Telos RPC to Metamask client.__

For manual configuration please use the following parameters:

- **Network:** Telos Testnet
- **RPC:** https://testnet.telos.net/evm
- **Chain ID:** 41
- **Currency Symbol:** tlos
Explorer: https://testnet.teloscan.io/

You will need tokens on our testnet, here is how you can acquire some for the test:

- **Testnet $TLOS tokens**, visit (https://app.telos.net/testnet/developers) to claim 50
 $TLOS
- **Acquiring Testnet TLOS guide** [here](https://docs.telos.net/quickstart/evm/testnet_tutorial)

------        ---           --------- 
## Stake TLOS on EVM

1. **Head over to [Teloscan](https://www.teloscan.io)**
 

2. **Navigate to staking page**

- Click on the "Burger-menu" (top right of page)

- Select **Stake Telos**

![StakeTelosbutton](/img/StakeTelosbutton.png)

3. **Connect Wallet**
 
![metamaskSTLOS](/img/metamaskSTLOS.png)


### Stake TLOS 

4. - Input a desired amount you want to lock up and stake.
 
 ![staking](/img/stake-on-evm.png)

5. **Approve Staking Confirmation Msg**

- Approve staking confirmation message
- Add sTLOS to Metamask
- Click Stake Telos once your ready   
![confirmation](/img/staking-confirmation.png)

6. **Approve the transaction on Metamask.**

![stake-tlos-metamask-tx](/img/stake-tlos-metamask-tx.png)
-------        --                    ------ 
 > **Note: After staking your sTLOS, it will be locked up and earning rewards on a fixed interval of 30 minutes.**
 
### Unstake
1. **Unstake**
- Unstake your tokens, select amount then click unstake.

![Unstake](/img/Unstake-tlos.png)
- Unstaking will swap your sTLOS receipt token for TLOS and transfer it to an ESCROW smart contract. All rewards will be included in the withdrawn balance. After the defined unstaking period your TLOS can be claimed.
2. **Unstake confirmation msg**
- There will be a confirmation message pop up that explains the unstaking process. Read and confirm it.
 
![unstake-confirm](/img/unstaking-confirmation.png)
3. **Unstake transation approval on Metamask**

![unstake-metamask-tx](/img/unstake-meta.png)

### Claim

**Claim your sTLOS rewards.**

Note: All matured positions will be claimed in one transaction when claim has been clicked and confirmed.

1. **Select desired amount to claim**

![claim](/img/Claim-TLOS.png)

2. **Authorize transaction & gas fee via Metamask**

![metamask-claim](/img/claim-TLOS-metamask.png)

**Thanks for participating in the UAT feedback**
