# Liquid Staking on EVM (sTLOS) - UAT Guide

__A guide on how to stake TLOS on EVM for the sTLOS receipt token. We are in the UAT phase so this is not in effect on mainnet yet. Follow the guide and provide feedback.__

For UAT testers please stake 3 seperate positions. Try to stake and unstake as many times as you are willing to (3 is preferred amount). Please critique UI and provide your overall experience when staking Telos on EVM. If there is anything that you think missing or would benefit our end-users let us know in the Telegram channel. This is very exciting for the future development of the Telos Defi ecosystem. Let's set this off here. 

-------   --                    ------

## What we are doing here
In this guide we will stake TLOS for sTLOS(receipt token) on [Teloscan](http://teloscan.io). We are pushing for a few days of rigorous testing and feedback from our UAT particpants. 

## Testing Scenarios

- Connect to website
- Please stake several smaller positions and monitor behaviour
- Unstake several smaller positions
- wait some minutes and unstake further positions
- Claim earlier positions when matured, all should be claimed excepted those that are not matured, yet

## Why stake TLOS for sTLOS?
- Staked sTLOS helps you put your staked TLOS to work in Defi and explore additional yield opportunities.
- Helps lock TVL on EVM enabeling more attraction for investors and Dapps building on Telos. 

>   Disclaimer: Having sTLOS on the tEVM does not allow    you to vote in governance processes (including block producers and worker proposals) - these are limited to the native network. Stake on Native to participate in Defi. Stake on EVM for receipt token and more yield opportunties. It's simple ask yourself this question: why am I staking? What is my defi play(have a plan), as there is a 3-5 day locking period.

## Prerequisites

### In order to stake TLOS on EVM following pre-requisites are required:

- **A Telos EVM address:**
    - If you have not already generated a Telos EVM address, you will need to, follow this tutorial -> [Generate EVM account](https://help.telos.net/evm/creating-a-tevm-address).
- **Metamask** If you don't have Metamask then follow this link [Download_Metamask](https://metamask.io/download/)
- **Add Telos EVM Testnet to MetaMask**

__Note: You may use [Chainlist](https://chainlist.org/) and select Chain ID 41 to connect Telos RPC to Metamask client.__

### For manual configuration please use the following parameters:

- **Network:** Telos Testnet
- **RPC:** https://testnet.telos.net/evm
- **Chain ID:** 41
- **Currency Symbol:** tlos
Explorer: https://testnet.teloscan.io/
- **Testnet $TLOS tokens**, visit (https://app.telos.net/testnet/developers) to claim 50
 $TLOS
- **Acquiring Testnet TLOS guide** [here](https://docs.telos.net/quickstart/evm/testnet_tutorial)

------        ---           --------- 
## Steps to stake TLOS on EVM

1. **Head over to [Teloscan](https://www.teloscan.io)**
 

2. **Navigate to staking page**

- Click on the menu (top right of page)

- Select **Stake Telos**

![StakeTelosbutton](/img/StakeTelosbutton.png)

3. **Connect Wallet** 
![metamaskSTLOS](/img/metamaskSTLOS.png)


4. **Stake TLOS**
- Input a desired amount you want to lock up and stake. 
 ![staking](/img/stake-on-evm.png)

5. **Approve Staking Confirmation Msg**
    - Approve staking confirmation message
    - Add sTLOS to Metamask
    - Click Stake Telos once your ready   
![confirmation](/img/staking-confirmation.png)
6. **Approve the transcaction on Metamask.**
![stake-tlos-metamask-tx](/img/stake-tlos-metamask-tx.png)
-------        --                    ------ 
 > **Note: After staking your sTLOS, it will be locked up and earning rewards on a fixed interval 30 minutes.**
 


**Testnet Unstake comment:**
First we unstake which will be a 10 minute waiting period until we can then claim our staked TLOS and rewards. The unstake timer of the ESCROW conrtact on mainnet is set to 10 days, please note, that it will not be possible to access your funds within this time frame. 

### Unstake
1. **Unstake**
- Unstake your tokens, select amount then click unstake.
![Unstake](/img/Unstake-tlos.png)
- What is going on here is we are giving back our receipt (sTLOS tokens) to the smart contract. Then a waiting period is taken to provide the Telos rewards for the user to claim in the next step. 
2. **Unstake confirmation msg**
- There will be a confirmation message pop up that explains the unstaking process. Read and confirm it. 
![unstake-confirm](/img/unstaking-confirmation.png)
3. **Unstake transation approval on Metamask** 
![unstake-metamask-tx](/img/unstake-meta.png)

### Claim

**Claim your sTLOS rewards.**

Note: All matured positions will be claimed when executing when initialized.

1. **Select desired amount to claim**

![claim](/img/Claim_TLOS.png)

2. **Authorize transaction & gas fee via Metamask**
![metamask-claim](/img/claim-TLOS-metamask.png)
**Thanks for participating in the UAT feedback**
