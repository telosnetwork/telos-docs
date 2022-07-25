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

5. 







