---
sidebar_position: 3
---


# Verify Smart Contracts Manually using Remix IDE

Remix Online IDE is a powerful toolset for developing, deploying, debugging, and testing Ethereum and EVM-compatible smart contracts.

This tutorial will cover how to use the [Remix](https://remix-project.org/) Sourcify plugin to verify deployed smart contracts on the [Telos Explorer](https://www.teloscan.io/) on mainnet. 

__Note: It is important to verify smart contracts for a wide number of reasons in an open network environement like Telos EVM, ultimately to build transparency,  trust, and security within your developer and user community. It is advised to verify any smart contracts that are deployed onto the Telos network__

If you run into issues don't hesitate to reach out in our [community channels](docs/overview/getting-started/resources.md) for help or questions. 


#### High level overview of steps we will cover

**With Remix verification method it is required to compile the contracts in order to use the sourcify plug in and meta data must be exact same as deployment time**

- Set up Smart Contraact file in the contracts folder
- Compile the smart contract to byte code to be consumed by Telos EVM
- Connect Metamask Wallet using Injected provider
- Deploy Smart Contract
- Verify it using the sourcify plug in.

**Simply isn't it, well lets go ahead and get to it!!**

### Step 1. Open up [Remix](http://remix.ethereum.org/)

### Step 2. Set up Smart Contract

 For this example, we will compile, deploy, and verify this ERC20 contract from [Open Zeppelin](https://docs.openzeppelin.com/contracts/4.x/erc20)
```
// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GLDToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Gold", "GLD") {
        _mint(msg.sender, initialSupply);
    }
} 
```
Name it whatever you want. In this case we named it My_Epic_ERC.sol
### Step 3. Connect Metamask and Compile the contract

#### Connect Metamask
 **As an environment select ```Injected Provider - Metamask```**
Click on Ethereum Deploy Logo on the side

![web3injected pic](/img/Injectedweb3.png)
Then MetaMask will pop up, Click Next & allow the wallet to connect to Remix 


#### Compile
Simply  ```command+s``` works

#### OR

Run the compiler tab. Make sure to always make sure the compiler is >= pragma solidity declaration

In this case we used 0.8.7 in compiler and declared a pragma ^0.8.0
![compile pic](/img/compile.png)

### Step 4. Deploy Smart Contract
- Click on the contract you have created called GLD Token that inherits the ERC20 standards
- Under Deploy, insert initial supply that will be passed to the constructor
- Transact by confirming in Metamask pop up. 

![transact](/img/deploy.png)


### Step 5. Copy Contract Address

**Get the Contract Address we just deployed in the Deploy Tab**

![Grab_contract_address](/img/grab_contract_address.png)

### Step 6. Use the Sourcify Plug into Verify Contract
**Note:**
1. Compile contracts in Remix, before attempting verification
2. The metadata must be exactly the same as at deployment time


- Navigate to Sourcify Tab
- Select Verifier
- Since we just deployed using remix it already has contract metadata and sources.

![Remix_sourcify](/img/remix_sourcify.png)

**Select Verify**

![Verify_success](/img/verify_success.png)

We just verified a ERC20 contract using the Remix IDE -  Sourcify plug in.

Head over to [Hardhat Sourcify](docs/dapps/smart-contracts/hardhat_sourcify.md) for an automated method of verifying multiple smart contracts within a larger project dev environement, simutaneously with just one command!
