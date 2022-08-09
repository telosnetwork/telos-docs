# ERC20 Mintable Token

An ERC20 token contract keeps track of fungible tokens. Any single token is equal to any other token; no tokens have special rights or associated behaviours. This makes ERC20 tokens useful for things like a medium of exchange, currency, voting rights, staking, and more.



__See this repository for a guide on how to mint ERC20 tokens on the Telos network.__ [ERC20 Mintable](https://github.com/telosnetwork/erc20-mintable-example).


## ERC20 EVM Template: Mintable example

This repo implements the ERC20 Template for Telos EVM Testnet Network

It was made for the [Native to EVM transaction How-To](https://github.com/telosnetwork/native-to-evm-transaction). It is ownable, adds a mint functionality and removes the initial supply sent on deployment.

**NOTE:** It does not aim to be production ready.

## REQUIREMENTS

This repository requires [NodeJS & NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to be installed on your machine and a [wallet address on the Telos EVM Testnet Network](https://www.telos.net/developers/getting-started-on-testnet).

Commands used below work on recent Linux or Windows versions but have not been verified for Mac.

## INSTALL

- Clone the [repository](https://github.com/telosnetwork/erc20-mintable-example).
- Add in the .env variables Account address, Token Name, Token Symbol.
- Install or clone the repo locally on your machine. 
- Go to the directory of the project in your terminal and install the dependencies with yarn or npm install.

## TEST
- Use ```npx hardhat test``` to run the test script on Hardhat local instance of a blockchain. 

## Deploy
- To deploy: ```npx hardhat --network testnet deploy```
- Save the contract address returned in the console for next steps.
- Interact with your contract using the hardhat console, our [block explorer](https://testnet.teloscan.io/), wallets like metamask, or by deploying our example wallet repo.

## VERIFY (OPTIONAL)
- Verify your new token contract with ```npx hardhat --network testnet sourcify```.
- You may run into a "gateway timeout" error message. If this occurs, do not worry, the contract will still verify.
- Make sure your contract is verified by running the command again. You should receive the following message: 

```already verified: MyContract (0x2A3b40A59109a84ab82a0Ff1A3910bb595082e09), skipping.```
