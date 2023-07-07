---
sidebar_position: 6
hide_table_of_contents: true
---

# Truffle Tutorial

**Truffle simplifies the process of operating Web3 production and development. It eases a developer's overall experience with compilation, deployment, and testing of smart contracts on EVM-based blockchains.**

#### Truffle Features

**Modular Solidity versions:** Allows developers to switch between Solidity versions with a simple configuration change.

**Ganache:** Local blockchain implementation isolated from mainnet.

**Mocha:** Simple and flexible, the JavaScript test framework eases the testing process in smart contract development.

## Getting Started

#### Requirements

- NodeJS v12 or later
- Windows, Linux or Mac OS X

Truffle requires users to connect to an EVM client.

- This tutorial will explain the process while utilizing the Telos testnet RPC endpoint.

#### Installations

1. Install Truffle globally.

   `npm install -g truffle `

   Check that Truffle is on your local machine
   `truffle version`

2. Setting up a Truffle project

   - Create a local folder and choose a name (i.e.,Truffle tutorial)
   - Proceed to the project directory and run ` truffle init`

   **File Structure**

   - contracts: Hosts all solidity smart contracts (.sol files)
   - migrations: Writes deployment scritps and tells truffle how to deploy smart contracts to the blockchain with NodeJS
   - test: Hosts the testing scripts either in Solidity, Mocha, or NodeJS
   - truffle-config.js: Hosts network infomration for deploying smart contracts.

3. Create Smart Contract

   - Open the project in a code editor.
   - In the contracts folder, create a new file named Simple_Storage.sol

   The following basic smart contract will be used as an example:

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

**NOTE**: Truffle uses Solidity version 0.8.4. by default.

To change the Solidity version, proceed to truffle-config.js and change the Solidity version in the compilers object.

4. Compile Contracts

`truffle compile` Run this command in the root directory of your project.

**The compile produces artifact files which are saved within the ./build directory, alongside the compiled deployed contract artifacts in ./build/contracts.**

**Build Artifacts:** JSON files with ABI information, contract bytecode(For EVM), deployment details, compiler version, and other data are located inside the build folder. The ABI can be used by the front end of the dApp to interact with the smart contract.

#### Interacting With Your Contracts

Writing data is referred to as a transaction, whereas reading data refers to a call.

Transactions change the state of the network, whereas calls just view the state of the network(specific data); they return a value immediately.

#### Contract Abstractions

Using either ethers.js or web3.js, a user can interact with a Telos node directly with a JavaScript library, making it easy to read and write data to/from the blockchain. Truffle uses its own contract abstraction via the @truffle/contract module, described below:

5. Testing Contracts
   - Ganache
     test.js using ethers.js

```jsx title="/truffle_tutorial/test/simpleStorage.js"
const SimpleStorage = artifacts.require("SimpleStorage.sol");

contract("SimpleStorage", () => {
  it("Should update data", async () => {
    const storage = await SimpleStorage.new();
    await storage.writeData(10);
    const data = await storage.readData();
    assert(data.toString() === "10");
  });
});
```

Test the contract using the test script abstraction:

`truffle test`

Truffle effecitively creates a local test chain to test this contract.

```jsx "Output:"
Contract: SimpleStorage
    ✔ Should update data (2075ms)


  1 passing (2s)

```

6. Migrations for deploying Contracts will require users to make several adjustments to truffle-config.js.

   - Open truffle.config.js
   - A private key provider method will be used to connect to a Telos RPC node.
   - NOTE: Use a Dev Wallet for safety purposes.

```jsx title="/truffle_tutorial/truffle-config.js"
// require('dotenv').config(); If you want to use a dotenv file use this plugin.
var PrivateKeyProvider = require("truffle-privatekey-provider");
var privateKey = "private key"; // NOTE: Only use a Dev Wallet with Telos testnet otherwise in production or with real value use .env file and make sure to add .env to gitignore it so its not commited into github.
var provider = new PrivateKeyProvider(
  privateKey,
  "https://testnet.telos.net/evm"
);

module.exports = {
  networks: {
    telos_testnet: {
      provider: () =>
        new PrivateKeyProvider(privateKey, `https://testnet.telos.net/evm`),
      network_id: 41, // Ropsten's id
    },
  },

  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.14", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    },
  },
};
```

7. Deploy the contract on Telos Testnet, then run the following command:

`truffle migrate --network telos_testnet`

After deployment, the output will display the block information such as transaction hash, block number etc.

This completes the Truffle tutorial. Click [here](https://trufflesuite.com/docs/truffle/getting-started/creating-a-project/) for further information on creating a project on Truffle.
