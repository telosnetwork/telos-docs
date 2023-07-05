---
sidebar_positon: 2
---

# Remix Smart Contract Tutorial ERC20

:::caution
MetaMask is required for this tutorial. [Set up MetaMask](./setup-a-wallet.md) if you haven't already.
:::

## Deploy a Smart Contract Using Remix

### Getting TLOS for Testnet

You can use the [Testnet Faucet](https://app.telos.net/testnet/developers) to acquire Testnet TLOS. Paste your address from MetaMask and press the SEND TESTNET EVM TLOS button. Once completed, you will receive testnet funds to work with and write data to the blockchain.

![Testnet Faucet](/img/testnet_faucet.png)


### Create Smart Contract

1. Open [Remix](http://remix.ethereum.org/)

2. Load or create the smart contracts you want to compile and deploy using Remix file explorer. Click the contracts tab and create a file named MyEpicToken.sol.

3. For this example, we will deploy this ERC20 contract from [Open Zeppelin](https://docs.openzeppelin.com/contracts/4.x/erc20)

4. Copy and Paste the smart contract from Open Zeppelin under the contracts folder into MyEpicToken.sol file. 
![ERC20 Token Pic](../../../static/img/My_EPIC_ERC.png)

### Connect MetaMask and Compile Smart Contract

1. Click on Ethereum Deploy Logo on the side, then change the environment to Injected Web3 to integrate Telos Testnet through MetaMask

![web3injected pic](../../../static/img/Injectedweb3.png)

2. On the MetaMask pop-up, follow the prompts and allow the wallet to connect to Remix.

3. The next step is to **compile** the contract into byte code so the Telos EVM can read the state changes being made from our Solidity program. Note the compile version at the top. Always match it to the compiler version listed in your program Pragma. Once complete, the byte code will be ready to compile.

![compile pic](/img/compile.png)

### Deploy Smart Contract

1. Click on the contract you have created called GLD Token that inherits the ERC20 standards
2. Under Deploy, enter the initial supply that will be passed to the constructor. Note that the ERC20 standard uses 18 decimal places by default. Meaning if you wanted a supply of 100 GLD Tokens, you would input 100000000000000000000.
3. Press Deploy and approve the transaction

![transact](/img/deploy.png)

Call data from the blockchain to test view methods from ERC20 contract inherited. View the contract address where ERC20 is located. 


![calldata](/img/call_data.png)

:::tip
You can now go to Open Zeppelin and other Open Source sites to copy and paste contracts and easily interact with them on the Telos blockchain Network.
:::
