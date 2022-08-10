---
sidebar_position: 2
---


# How to Verify Smart Contracts with Hardhat Deploy plugin

__ Refer to [this](https://github.com/nathanduft44/telos_hardhat_deploy) repository for project setup. __

Hardhat is a development environment to compile, deploy, test, and debug contracts for EVM compatible blockchains. 

This tutorial will cover how to use the [hardhat-deploy plugin](https://github.com/wighawag/hardhat-deploy), specifically to verify deployed contracts on the Telos explorer on mainnet. 


1. Setup Hardhat project with the hardhat-deploy plugin
2. Deploy contracts using the plugin
3. Verify the contracts on sourcify

### Verify contracts using hardhat-deploy plugin

**Setup**

First, we need to setup our local environment. If you don't already know how to set up a local hardhat project refer to [this page](https://hardhat.org/tutorial/setting-up-the-environment.html) to get your environment setup. 



1. Add a deploy folder in primary directory

Past the following code block into the deploy folder under filename - deploy.js

```js title="hardhat_project/deploy/00_deploy_my_contract.js"
module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy} = deployments;
    const {deployer} = await getNamedAccounts();
    await deploy('Greeter', {
      from: deployer,
      args: ['Hello'],
      log: true,
    });
  };
```

2. Add a blank deployments folder in root directory. This is where the Json ABI and byte will be pasted automatically when we run a deploy command. 

## Installations

### Package Checklist
__ Make sure these packages are included in your package.json list before running a deploy command.__

If some of the following packages are missing just run npm install <package_name>
- @nomiclabs/hardhat-ethers
- @nomiclabs/hardhat-waffle
- chai
- ethereum-waffle
- ethers
- hardhat
- @openzeppelin/contracts
- dotenv


**Hardhat Plugin**
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
Hardhat config file should look something like this:
```js title="/hardhat.config.js"
require("@nomiclabs/hardhat-waffle");
require('dotenv').config({path: '.env'});
require('hardhat-deploy');
require("@nomiclabs/hardhat-ethers");


module.exports = {
  solidity: "0.8.1",
  defaultNetwork: "telos_testnet",
    namedAccounts: {
      deployer: 0
    },
  networks: {
    telos_testnet: {
      url: "https://testnet.telos.net/evm",
      accounts: [process.env.TELOS_TESTNET_PRIVATE_KEY],
      chainId: 41,
    },
  }
};
```
### Run Deploy command

```
npx hardhat --network telos_testnet deploy
```

**Output**
```
deploying "Greeter" (tx: 0xc800f2bfa3ef75768045d885210a8dfc4148ba2f9838f27113d40db7d26e0024)...: deployed at 0x5C94BA8feC1a9FedE0a1Fdd55f2a860Ad97467ce with 496906 gas
```



### Verify

Using the hardhat sourcify command you can easily verify smart contracts with the hardhat deploy sourcify command from the plugin.


 ``` npx hardhat --network telos_testnet sourcify```


Console output should result in contract printed and green verification text printed.

Voila you should have successfully followed the steps to verify the contract. 


![verify](/img/verify.png)

