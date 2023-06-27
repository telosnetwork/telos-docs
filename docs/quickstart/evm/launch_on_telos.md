---
sidebar_positon: 3
---

# Deploy an Existing DApp on Telos EVM Mainnet

**Considerations and coverage for launching a DApp live on the Telos mainnet.**

**Disclaimer**: This tutorial is for those already familiar with developing smart contracts on EVM-compatible chains and using tools like Solidity, Ethers.js, and Hardhat or Truffle. If you are not versed in these tools, please visit our [EVM tools section](../../evm/smart-contracts/README.md).

## Test Smart Contracts on Testnet

The Telos testnet tokens can be acquired in the [Testnet Faucet](https://app.telos.net/testnet/developers).

[Testnet Walkthrough](testnet_tutorial.md)

#### **Telos Testnet Settings:**

- **Network Name**: Telos Testnet
- **New RPC URL**: [https://testnet.telos.net/evm](https://testnet.telos.net/evm)
- **ChainID**: `41`
- **Symbol**: `TLOS`
- **Explorer**: [https://testnet.teloscan.io/](https://testnet.teloscan.io/)

## Telos Mainnet

#### **Telos Mainnet Settings:**

- **Network Name**: Telos Mainnet
- **New RPC URL**: [https://mainnet.telos.net/evm](https://mainnet.telos.net/evm)
- **ChainID**: `40`
- **Symbol**: `TLOS`
- **Explorer**: [https://www.teloscan.io/](https://www.teloscan.io/)

#### Websocket connections

- **Testnet : wss://testnet.telos.net/evm**

- **Mainnet: wss://mainnet.telos.net/evm**

## Audit and Optimize Smart Contracts

Optimize the contract to ensure its safety and efficiency.

- It is strongly recommended to review audit reports and old hacks to identify mistakes that have been made in Solidity.
- Paid audits from firms such as [Sentnl](https://sentnl.io/), [solidity.finance](https://solidity.finance/), or others

## Estimate Cost of Deployment

- Telos is an inexpensive chain to build on; transactions average $.01.
- Gas price is currently fixed at ~500 GWEI. 
- To calculate the cost of deployment on mainnet, simply multiply gas consumed by the gas price using the Ethers library. 

## Acquiring TLOS for mainnet

The easiest way to acquire the Telos native currency is through an exchange. After you purchase native Telos, you will have to bridge it over to the EVM contract by using https://wallet.telos.net/

**Most Affordable Method** Purchase Telos on a centralized exchange, then send it to Telos web wallet or Anchor wallet. (12 character public key aka username)

- Go on Telos web wallet and bridge to Telos EVM.

**These are the current platforms Telos is listed on**

- Kucoin
- gate.io
- Huobi
- Uniswap
- Sushiswap
- Pancakeswap

**Another way to acquire Telos EVM coins is to use a Crosschain Bridge**

- [Rubic](https://rubic.exchange/)

## Configuring your Deployment script

In order to deploy to Telos EVM you will need the following:

- **RPC_URL:** https://mainnet.telos.net/evm
- **Websocket:** wss://mainnet.telos.net/evm
- **Block Explorer:** https://www.teloscan.io/

```js title="hardhat_project/hardhat.config.js"
module.exports = {
  solidity: "0.8.1",
  networks: {
    telos_mainnet: {
      url: "https://mainnet.telos.net/evm",
      accounts: [process.env.TELOS_TESTNET_PRIVATEKEY],
    },
  },
};
```

** As is good practice, define the deployment wallet's private key in a .env file that will not be committed to the git repository.**

Next, run your deploy script, and once complete, you will have successfully launched onto Telos mainnet. 

Now run the code below.

`npx hardhat run scripts/deploy.js --network telos_mainnet`

To check the gas price set by Telos resources go to [teloscan](https://www.teloscan.io/)

When you deploy using hardhat, it automatically drains your wallet of the funds it needs to perform the request. In other words, there is no pop-up confirmation from Metamask. Once you run the deploy script command, you will be charged gas fees, and your contract will be deployed.
