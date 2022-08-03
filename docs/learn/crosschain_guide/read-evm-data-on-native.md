# Read EVM data from Telos Native

The Telos EVM runs on one smart contract on Telos Native: the __eosio.evm__ contract
This contract holds the state storage of the Telos EVM on the `accountstates` table that can be read to retreive all stored EVM data.

As each EVM contract stores its data at different slots depending on the order and size of the contract's variables, the first step to be able to read EVM data from Native is to understand how ETH storage works, there are several resources available for this:

[Solidity documentation page](https://docs.soliditylang.org/en/v0.8.13/internals/layout_in_storage.html)

[Hackernoon's Medium article](https://medium.com/hackernoon/getting-deep-into-ethereum-how-data-is-stored-in-ethereum-e3f669d96033)

[Program The Blockchain's blog post](https://programtheblockchain.com/posts/2018/03/09/understanding-ethereum-smart-contract-storage/)

## Using a script

## Using a smart contract
