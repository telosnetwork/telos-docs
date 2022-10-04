# Liquid Staking on EVM (sTLOS)

__A guide on how to stake TLOS on EVM for the sTLOS receipt token.__

The sTLOS receipt token is very exciting for the future development of the Telos Defi ecosystem. sTLOS liquid staking allows you to remain flexible with your investments while enjoying staking rewards.

Once liquidity pairs for sTLOS/TLOS are available on our tEVM exchanges, these can be used to sell sTLOS receipt tokens at a market-determined price .

**Please be aware that a 10-day unstaking timer is applied when removing your funds from sTLOS liquid staking. Once unstaked and sent to the underlying ESCROW contract, you will no longer be able to sell or transfer your tokens.**

-------   --                    ------

## Purpose
In this guide, we will stake TLOS for sTLOS(receipt token) on [Teloscan](http://teloscan.io). 

### Why stake TLOS for sTLOS?
- Staked sTLOS helps you put your staked TLOS to work in Defi and explore additional yield opportunities.
- Helps lock TVL on EVM, enabling more attraction for investors and Dapps building on Telos. 

>   Disclaimer: Having sTLOS on the tEVM does not allow you to vote in governance processes (including block producers and worker proposals) - these are limited to the native Network. Stake on Native to participate in Defi. Stake on EVM for receipt token and more yield opportunities. It's simple to ask yourself this question: why am I staking? What is my defi play(have a plan), as there is a 3-5 day locking period.

## Prerequisites

You can easily create a new account on Metamask or utilize an existing tEVM account when staking to sTLOS. If you have never used tEVM before with your Telos native account, the following guide will assist you in creating a tEVM account using the [TLOS_Webwallet](https://wallet.telos.net/). 

To stake TLOS on EVM following pre-requisites are required:

- **An EVM account on Metamask**
- **Metamask** If you don't have Metamask, then follow this link [Download_Metamask](https://metamask.io/download/)
- **Add Telos EVM to MetaMask**

__Note: You may use [Chainlist](https://chainlist.org/) and select Chain ID 40 TLOS to connect Telos RPC to the Metamask client.__

For manual configuration, please use the following parameters:

- **Network:** Telos EVM Mainnet
- **RPC:** (https://mainnet.telos.net/evm)
- **Chain ID:** 40
- **Currency Symbol:** TLOS
- **Explorer:** (https://teloscan.io/)


------        ---           --------- 

## Stake TLOS on EVM

1. **Head over to [Teloscan](https://www.teloscan.io)**
 

2. **Navigate to the staking page**

- Click on the "Burger-menu" (top right of the page)

- Select **Stake Telos**

![StakeTelosbutton](/img/StakeTelosbutton.png)

3. **Connect Wallet**
 
![metamaskSTLOS](/img/metamaskSTLOS.png)


### Stake TLOS 

4. - Input a desired amount you want to lock up and stake.
 
 ![staking](/img/stake-on-evm.png)

5. **Add sTLOS token to your wallet**

- Add sTLOS to Metamask

- Click Stake Telos once your ready   
![confirmation](/img/add_sTLOS_token.png)

6. **Confirm the transaction on Metamask.**

![stake-tlos-metamask-tx](/img/stake-tlos-metamask-tx.png)
-------        --                    ------ 
 > **Note: After staking your sTLOS, it will be locked up and earning rewards on a fixed interval of 30 minutes.**
 
### Unstake
1. **Unstake**
- To unstake your tokens, select the amount, then click unstake.

![Unstake](/img/Unstake-tlos.png)
- Unstaking will swap your sTLOS receipt token for TLOS and transfer it to an ESCROW smart contract. The withdrawn balance will include all rewards. After the defined unstaking period, your TLOS can be claimed. 

**NOTE: Removing unstaked TLOS from the ECSROW contract is impossible until the unstaking period ends.**

2. **Unstake confirmation message**
- There will be a confirmation message pop-up that explains the unstaking process. Please read and confirm it.
 
![unstake-confirm](/img/unstaking-confirmation.png)
3. **Unstake transaction approval on Metamask**

![unstake-metamask-tx](/img/unstake-meta.png)

### Claim

**Claim your sTLOS rewards.**

Note: All matured positions will be claimed in one transaction when the claim button has been clicked and the transaction is confirmed.

1. **Select desired amount to claim**

![claim](/img/Claim-TLOS.png)

- **Authorize transaction & gas fee via Metamask**

**Thanks for using sTLOS liquid staking on the worlds fastest EVM!**
