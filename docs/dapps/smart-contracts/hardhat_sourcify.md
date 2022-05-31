# How to Verify Smart Contracts with Hardhat Deploy plugin

Hardhat is a development environment to compile, deploy, test, and debug contracts for EVM compatible blockchains. 

This tutorial will cover how to use the [hardhat-deploy plugin](https://github.com/wighawag/hardhat-deploy), specifically to verify deployed contracts on the Telos explorer on mainnet. 


1. Setup Hardhat project with the hardhat-deploy plugin
2. Deploy contracts using the plugin
3. Verify the contracts on sourcify

### Verify contracts using hardhat-deploy plugin

**Setup**

First, we need to setup our local environment. If you don't already know how to set up a local hardhat project refer to [this page](https://hardhat.org/tutorial/setting-up-the-environment.html) to get your environment setup. 


Install the plugin in your hardhat project root directory

```js title="desktop/Basic_hardhat_project"
npm install -D hardhat-deploy
```
Import the plugin in your hardhat.config.js file
```js title="/hardhat.config.js"
require('hardhat-deploy');
```
Since hardhat-deploy-ethers is a fork of @nomiclabs/hardhat-ethers and that other plugin might have an hardcoded dependency on @nomiclabs/hardhat-ethers the best way to install hardhat-deploy-ethers and ensure compatibility is the following:
```js title="/Basic_hardhat_project"
npm install --save-dev  @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers
```
Don't forget to add: ``` require("@nomiclabs/hardhat-ethers"); ``` at the top of your hardhat.config.js file`


### Deploy

Using the hardhat sourcify command you can easily verify smart contracts with the


Once you have you deploy scripts simply run the following

```
npx hardhat --network telos_testnet sourcify
```

