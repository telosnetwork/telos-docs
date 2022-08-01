# Call a EVM function from Telos Native

The __Telos EVM__ runs in one smart contract on the __Telos Native__ blockchain, the __eosio.evm__ contract.
Sending transactions to EVM from Native Telos requires the use of that contract's `raw(eosio::name &ram_payer,std::vector<int8_t> &tx, bool &estimate_gas,std::optional<eosio::checksum160> &sender)` action.

This action takes in the serialized EVM Transaction data, the native account that will pay the RAM and the sender address which the transaction will be sent from on EVM.

__/!\ Make sure that the sender address has sufficient TLOS to pay for the gas of that function call__

## Get the required data

You first need to get the __function signature__ of the EVM function you need to call, as well as its __gas limit__.

### 1) Get the function signature

_Function calls in the Ethereum Virtual Machine are specified by the first four bytes of data sent with a transaction. These 4-byte signatures are defined as the first four bytes of the Keccak hash (SHA3) of the canonical representation of the function signature._

### 2) Get the gas limit

### 3) Get the encoded transaction data

#### A - Using a script

Using the previously obtained __function signature__ and __gas limit__ values, get the encoded transaction data using a script

_Refer to our native-to-evm-transaction repository's [generateEVMTransaction script](https://github.com/telosnetwork/native-to-evm-transaction/blob/main/generateEVMTransaction.js) for an example._

#### B - Using a smart contract

Save the previously obtained __function signature__ and __gas limit__ in your native contract, for example in a singleton (recommended) or by hard coding them as constants.

Use those saved values as well as the __contract EVM address__ and the __EVM sender address nonce__ to get the encoded transaction data using the __RLP__ library

_Refer to our [rng-oracle-bridge repository](https://github.com/telosnetwork/rng-oracle-bridge/blob/ad255b872a238e4d3a3f59cdff44a206208ab67d/native/src/rng.bridge.cpp#L193) for an example._

## Call the eosio.evm `raw()` method

Use that __encoded transaction data__, as well as the native __ram payer__ account and EVM __sender address__ to call the `raw()` action of the `eosio.evm` contract

### A - Using cleos

`cleos --url https://testnet.telos.net/ push action eosio.evm raw '{"ram_payer": 'NATIVE ACCOUNT HERE', "tx": "ENCODED TX DATA HERE" , "estimate_gas": false, "sender": "EVM SENDER ADDRESS HERE"' -p ' + nativeAccount`

Note that both the `tx` and `sender` arguments take hashes without '0x'

### B - Using a smart contract
