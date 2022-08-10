---
sidebar_position: 4
---

# Truffle Tutorial

__Truffle makes web3 production and development easier to get up and running, it eases developer experience with compilation, deployment, and testing smart contracts on EVM based blockchains.__

#### Truffle Features
**Modular Solidity versions:** Allows developers to very easily switch between solidity versions by just changing a configuration. 

**Ganache:** Local blockchain implementation that is isolated from mainnet.

**Mocha:** Simply and flexible JavaScript test framework easing the testing process in smart contract development.


## Getting Started

#### Requirements
- NodeJS v12 or later
- Windows, Linux or Mac OS X

Truffle requires you to connect to a EVM client.
- This tutorial we will be using the Telos testnet RPC endpoint.

#### Installations

1. Install Truffle globally. 

    ```npm install -g truffle ```

    Check if Truffle is on your local machine
    ```truffle version```

2. Setting up a Truffle project
    - Create a local folder, you can name it Truffle tutorial  
    - Go to the project directory and run ``` truffle init``` 

    **File Structure**
    - contracts: Hosts all the solidity smart contracts(.sol files)
    - migrations: Write deployment scritps, tell truffle how to deploy smart contracts to the blockchain with NodeJS
    - test: Hosts the testing scripts either in Solidity, Mocha, or NodeJS
    - truffle-config.js: Hosts network infomration for deploying smart contracts. 
3. Create Smart Contract
    - Open up project in a code editor. 
    - In the contracts folder create a new file named Simple_Storage.sol

    We will be using this basic smart contract   
```jsx title="/truffle_tutorial/contracts/Simple_Storage.sol"
pragma solidity ^0.8.4;

contract SimpleStorage {
    uint data;  

    function writeData(uint _data) external {
        data = _data;
    }

    function readData() external view returns(uint) {
        return data;
    }
}
```
**NOTE**: By default Truffle uses Solidity version 0.8.4. 

If you want to change the solidity version simply go to truffle-config.js and change the solidity version in the compilers object

4. Compile Contracts

```truffle compile``` Run this command in the root directory of your project.

__The compile produces artifact files which are saved within the ./build directory, along side the compiled deployed contract artifacts in ./build/contracts.__

**Build Artifacts:** Inside the build folder we have json files with ABI information, contract bytecode(For EVM), deployment details, compiler version etc. The ABI can be used by the front end of DApp in order to interact with the Smart Contract. 

#### Interacting With Your Contracts
Writing data is called a transaction whereas reading data is called a call.

Transactions change the state of the network, whereas calls just view the state of the network(specific data); they return a value immediately.


#### Contract Abstractions
Using either ethers.js or web3.js we can interact with a Telos node directly with a JavaScript library making it easy to read and write data to/from the blockchain. Truffle uses its own contract abstration via the @truffle/contract module, and it is this contract abrastraction that's described below. 

5. Testing Contracts
    - Ganache 
    test.js using ethers.js

```jsx title="/truffle_tutorial/test/simpleStorage.js"
const SimpleStorage = artifacts.require('SimpleStorage.sol');

contract('SimpleStorage', () => {
    it('Should update data', async () => {
        const storage = await SimpleStorage.new();
        await storage.writeData(10);
        const data = await storage.readData();
        assert(data.toString() === '10');
    });
});
```

Test the Contract using the test script abstraction:

```truffle test```

Truffle effecitively is creating a local test chain to test this contract.


```jsx "Output:"
Contract: SimpleStorage
    ✔ Should update data (2075ms)


  1 passing (2s)

```


6. Migrations for deploying Contracts.
    We will need to make a few adjustments to truffle-config.js

    - Open truffle.config.js
    - We will be using a private key provider method to connect to a Telos RPC node. 
    - NOTE: Use a Dev Wallet for safety purposes. 
```jsx title="/truffle_tutorial/truffle-config.js"
// require('dotenv').config(); If you want to use a dotenv file use this plugin. 
var PrivateKeyProvider = require("truffle-privatekey-provider");
var privateKey = "private key";// NOTE: Only use a Dev Wallet with Telos testnet otherwise in production or with real value use .env file and make sure to add .env to gitignore it so its not commited into github. 
var provider = new PrivateKeyProvider(privateKey, "https://testnet.telos.net/evm");


module.exports = {


  networks: {

    telos_testnet: {
      provider: () => new PrivateKeyProvider(privateKey, `https://testnet.telos.net/evm`),
      network_id: 41,       // Ropsten's id
    },

  },

  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.14",      // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },

};
```

7. Deploy the contract on Telos Testnet

Run the command 

```truffle migrate --network telos_testnet```

After deployment the output will show all the block information such as transaction hash, block number etc. 

Now that you know a tutorial with Truffle goahead and learn more [here](https://trufflesuite.com/docs/truffle/getting-started/creating-a-project/)




