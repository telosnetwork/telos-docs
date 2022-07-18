# Remix Smart Contract Tutorial ERC20

__Prerequisites: MetaMask Wallet__

### Set Up MetaMask
1. If you dont already have MetaMask then download it [here](https://metamask.io/download/) 

**Note** Make a dev wallet for development purposes. This will reduce risk in short and long term. 

### Step 1: Set up Network configuration
![Metamask Network Config](/img/metamask_config.png)

#### **Telos Mainnet Settings:**

* **Network Name**: Telos Mainnet 
* **New RPC URL**: [https://mainnet.telos.net/evm](https://mainnet.telos.net/evm)
* **ChainID**: `40`
* **Symbol**: `TLOS`
* **Explorer**: [https://www.teloscan.io/](https://www.teloscan.io/)

#### **Telos Testnet Settings:**

* **Network Name**: Telos Testnet
* **New RPC URL**: [https://testnet.telos.net/evm](https://testnet.telos.net/evm)
* **ChainID**: `41`
* **Symbol**: `TLOS`
* **Explorer**: [https://testnet.telos.net/v2/explore/](https://testnet.telos.net/v2/explore/)

#### **Telos Websockets:**

* **Testnet : wss://testnet.telos.net/evm**
* **Mainnet: wss://mainnet.telos.net/evm**

### Step 2: Funding your Telos Testnet Account address

#### Using Test Network Faucet

For funding on the test nework, you can use the Test Network Faucet. 
Go to [Testnet Faucet](https://app.telos.net/testnet/developers)

![Testnet Faucet](/img/testnet_faucet.png)


Paste your address from Metamask in at the bottom above the SEND TESTNET EVM TLOS BUTTON
Then Boom you should have Fake money to play with and write data to the blockchain. 

### Step 3: Connect MetaMask and deploy a smart contract using Remix

Open [Remix](http://remix.ethereum.org/)


1. Load or create the smart contracts that we want to compile and deploy using Remix file explorer. Go under contracts tab and create a file named MyEpicToken.sol. 

2. For this example, we will deploy this ERC20 contract from [Open Zeppelin](https://docs.openzeppelin.com/contracts/4.x/erc20)

3. Copy and Paste the Smart Contract from Open Zeppelin under the contracts folder into MyEpicToken.sol file. 
![ERC20 Token Pic](/img/My_EPIC_ERC.png)
4. **Change network to Web3Injected to integrate Telos Testnet Through MetaMask**
Click on Ethereum Deploy Logo on the side
![web3injected pic](/img/Injectedweb3.png)
Then MetaMask will pop up, Click Next & allow the wallet to connect to Remix 

5. Were going to **compile** the contract into byte code so the Telos EVM can read the state changes being made from our Solidity program. Note the compile version at the top. Always match it to atleast the compiler you program declares with Pragma. Then Compile!!

![compile pic](/img/compile.png)

5. Time for Deployment. 
- Click on the Contract we created called GLD Token that inherits the ERC20 standards
- Under Deploy insert initial supply we will be passing to the constructor
- Transact

![transact](/img/deploy.png)

6. Call data from the blockchain to test view methods from ERC20 contract inherited. View the contract address where ERC20 is located. 


![calldata](/img/call_data.png)

### Now you can go on Open Zeppelin and other Open Source sites to copy and paste contracts and easily interact with them on the Telos blockchain Network. 