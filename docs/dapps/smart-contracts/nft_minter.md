---
sidebar_position: 3
---

# ERC721 NFT

We are going to write an NFT minting smart contract that encapsulates all of the logic based on the NFTs you want to mint. Then we are going to be hosting all of our images and metadata on decentralized file storage. 


## Set up local Dev environment

**Prerequsites** follow [here](https://hardhat.org/tutorial/setting-up-the-environment.html) if you don't already have NodeJS version 16 or Hardhat installed.

**Note** you must be running NodeJS version 16 or less. 

#### First we initalize a local project and install hardhat tools for testing, compiling, and deploying our Smart Contracts. 

Open up a terminal and go to the directory where you want to create nft minter.
```
mkdir telos_nft_minter
cd telos_nft_minter
npm init -y
npm install --save-dev hardhat
```

## Hardhat Setup Walkthrough 
```
npx hardhat
```
Select create a sample project and hit return through all the questions asked in terminal. It will ask you to install ```hardhat-waffle``` and ```hardhat-ethers```. We will use these plugins to test and deploy smart contracts. 

**If not installed then download here**
```
npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers

```
#### Using the OpenZeppelin contracts Library API 

Benefts: Reusable Solidity components to build custom contracts, contracts are audited, flexible role based permissioning scheme

```
npm install @openzeppelin/contracts
```

## Solidity ERC721 Smart Contract Section 

First we are going to write our Smart Contract is a .sol file under contracts folder


```js title="/contracts/TelosNFTMinter.sol"
// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.1;

// Imports
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// Contract inherits methods from ERC721 Contract OpenZeppelin Library.
contract TelosNFTMinter is ERC721URIStorage {
    // Using Counter Method to keep track of token Ids.
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;


    // Pass name and symbol to ERC721 contract.
    constructor() ERC721 ("TelosNFT", "SURF") {
    }
    // Mint function for users to get their NFT.
    function mintNFT() public {
        uint newItemId = _tokenIds.current();

        // Mints NFT to the sender using msg.sender global variable
        _safeMint(msg.sender, newItemId);

        // This sets the NFT metadata put a photo of your favorite pet for now...
        _setTokenURI(newItemId, "insert JSON url here");

        console.log("#%s NFT has been minted to %s", newItemId, msg.sender);

        // This uses the Counters method inherited by Open Zeppelin library
        _tokenIds.increment();
    }

}
```

## Setting up a run.js file in Hardhat project 

We set up a run.js file to use a local instance of the blockchain created by Hardhat. This lets us toy around with our projects to test if our contracts are compiling and to make sure everything is running correctly.

```js title="scripts/run.js"
const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('TelosNFTMinter');
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);
  
    // Call the function.
    let txn = await nftContract.mintNFT()
    // Wait for it to be mined.
    await txn.wait()
  
  
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();
```
## Deploy in local testnet

```
npx hardhat run scripts/run.js
```
## Deploy on telos_testnet
To deploy on telos_testnet we have to provide the wallet credentials to sign the transaction.


## Set up Deploy.js File in /scripts folder
```js title="scripts/deploy.js"
const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('TelosNFTMinter');
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);
  
    // Call the function.
    let txn = await nftContract.mintNFT()
    // wait for contract to be mined .5seconds
    await txn.wait()
    console.log("Minted NFT #1")

  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }

  runMain();
```

Follow steps to deploy on telos_testnet
1. ```npm install dotenv``` We will be using dotenv plug in to load environment variables from .env file. 
**Note** .env file contains sensitive information and can be included in .gitignore to follow best practices
2. Create a seperate .env file to hide your private keys and paste you private keys. 
![dotenv](/img/dotenv.png)
3. Open hardhat.config.js file add network configuration for telos_testnet
Make sure to add ```require("dotenv").config({ path: ".env" });``` at the top of file.
telos_tesnet rpc = "https://testnet.telos.net/evm"
accounts: [process.env.TELOS]

```js title="Telos_NFT_MINTER/hardhat.config.js"
require('@nomiclabs/hardhat-waffle');
require("dotenv").config({ path: ".env" });

module.exports = {
  solidity: '0.8.1',
  networks: {
    telos_testnet: {
      url: "https://testnet.telos.net/evm",
      accounts: [process.env.TELOS_TESTNET_PRIVATEKEY],
    },
  },
};
```
run ```npx hardhat run scripts/deploy.js --network telos_testnet```

Voila you have minted an NFT using hardhat on the Telos Testnet

Now that you know how to mint on testnet you can play around more!

Part 2 integrate more NFTS with IPFS and generative art...

