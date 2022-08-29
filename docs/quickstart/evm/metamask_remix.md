# Remix Smart Contract Tutorial ERC20

__Prerequisites: MetaMask Wallet__

### Set Up MetaMask
1. Download MetaMask [here](https://metamask.io/download/) if you don't already have it installed.

**Note** Make a dev wallet for development purposes. This will reduce risk in short and long term. 

### Step 1: Set up Network configuration
You can setup Telos Mainnet or Testnet at [Chainlist](https://chainlist.org) or [Teloscan](https://teloscan.io) 
([testnet](https://testnet.teloscan.io)) by clicking "Connect Wallet".  The network settings in Metamask can be added manually as seen here:


![Metamask Network Config](/img/metamask_config.png)

#### **Telos Mainnet Settings:**

* **Network Name**: Telos Mainnet 
* **New RPC URL**: [https://mainnet.telos.net/evm](https://mainnet.telos.net/evm)
* **ChainID**: `40`
* **Symbol**: `TLOS`
* **Explorer**: [https://teloscan.io](https://teloscan.io)

#### **Telos Testnet Settings:**

* **Network Name**: Telos Testnet
* **New RPC URL**: [https://testnet.telos.net/evm](https://testnet.telos.net/evm)
* **ChainID**: `41`
* **Symbol**: `TLOS`
* **Explorer**: [https://testnet.teloscan.io](https://testnet.teloscan.io)

#### **Telos Websockets:**

* **Testnet : wss://testnet.telos.net/evm**
* **Mainnet: wss://mainnet.telos.net/evm**

### Step 2: Funding your Telos Testnet Account address

#### Using Test Network Faucet

You can use the Test Network Faucet to acquire funds for the test network 
Go to [Testnet Faucet](https://app.telos.net/testnet/developers)

![Testnet Faucet](/img/testnet_faucet.png)


Paste your address from Metamask in the space above the SEND TESTNET EVM TLOS button. 
Once completed, you will receive testnet funds to work with and write data to the blockchain. 

### Step 3: Connect MetaMask and deploy a smart contract using Remix

Open [Remix](http://remix.ethereum.org/)


1. Load or create the smart contracts you want to compile and deploy using Remix file explorer. Click the contracts tab and create a file named MyEpicToken.sol. 

2. For this example, we will deploy this ERC20 contract from [Open Zeppelin](https://docs.openzeppelin.com/contracts/4.x/erc20)

3. Copy and Paste the smart contract from Open Zeppelin under the contracts folder into MyEpicToken.sol file. 
![ERC20 Token Pic](/img/My_EPIC_ERC.png)

4. **Change network to Web3Injected to integrate Telos Testnet Through MetaMask**
Click on Ethereum Deploy Logo on the side

![web3injected pic](/img/Injectedweb3.png)
Then MetaMask will pop up, Click Next & allow the wallet to connect to Remix 

5. The next step is to **compile** the contract into byte code so the Telos EVM can read the state changes being made from our Solidity program. Note the compile version at the top. Always match it to the compiler you program. It will declare with Pragma. Once complete, the byte code will be ready to compile.

![compile pic](/img/compile.png)

5. Time for Deployment. 
- Click on the contract you have created called GLD Token that inherits the ERC20 standards
- Under Deploy, insert initial supply that will be passed to the constructor
- Transact

![transact](/img/deploy.png)

6. Call data from the blockchain to test view methods from ERC20 contract inherited. View the contract address where ERC20 is located. 


![calldata](/img/call_data.png)

### You can now go to Open Zeppelin and other Open Source sites to copy and paste contracts and easily interact with them on the Telos blockchain Network. 
