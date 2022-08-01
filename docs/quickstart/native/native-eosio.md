# Native EOSIO

Native EOSIO software is for building applications and working with nodes on the Telos native blockchain. It isn't necessary for EVM DApp developers unless they are looking to run a node or build a native app. 

## Platform & Toolchain

The Telos platform is made up of the following components and toolchain:

- Nodeos: The core telos node deamon that can be configured with plugins and docker to run a node. Such as block production, dedicated API endpoints, and local development.
- Cleos: CLI to interact with the blockchain and to manage wallets.
- Keosd: the component that securely stores Telos keys in wallets.
- EOSIO.CDT: Toolchain for WebAssembly(Wasm) and a set of tools to facilitate smart contract writing for the Telos native blockchain. 

![EOSIO](/img/eosio_development_lifecycle.png)

__If you are interested in learning more about the Native Telos platform please head over to our Native section__ [Telos Native Overview](/native/native_telos)