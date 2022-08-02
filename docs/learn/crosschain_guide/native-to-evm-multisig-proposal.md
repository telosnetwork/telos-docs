# Native multisig proposal example

The Telos EVM runs in one smart contract on the Telos Native blockchain, the eosio.evm contract. Calling a function of a Telos EVM smart contract from Telos Native requires the use of the eosio.evm contract's raw(eosio::name &ram_payer,std::vector<int8_t> &tx, bool &estimate_gas,std::optional<eosio::checksum160> &sender) action.

This action takes in the native account that will pay the RAM, the serialized EVM Transaction data and the sender address which the transaction will be sent from on EVM.

This guide will go over preparing and send a Telos Native multisig that can call a function of an EVM contract. An example implementation is available in our [native-to-evm-multisig-example repository](https://github.com/telosnetwork/native-to-evm-escrow-example) and will serve for our examples here.

__/!\ Make sure that the sender address has sufficient TLOS to pay for the gas of that function call__
