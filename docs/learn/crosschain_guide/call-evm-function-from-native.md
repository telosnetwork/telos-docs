# Call a EVM function from Telos Native

The __Telos EVM__ runs in one smart contract on the __Telos Native__ blockchain, the __eosio.evm__ contract.
Calling a function of a Telos EVM smart contract from Telos Native requires the use of the __eosio.evm__ contract's `raw(eosio::name &ram_payer,std::vector<int8_t> &tx, bool &estimate_gas,std::optional<eosio::checksum160> &sender)` action.

This action takes in the native account that will pay the RAM, the serialized EVM Transaction data and the sender address which the transaction will be sent from on EVM.

__/!\ Make sure that the sender address has sufficient TLOS to pay for the gas of that function call__

## Requirements

This requires a Telos Native account with a linked EVM address (hereby refered to as the __sender__)

## Get required static variables

You first need to get the __function signature__ of the EVM function you need to call, as well as its __gas limit__.

### 1) Get the function signature

_Function calls in the Ethereum Virtual Machine are specified by the first four bytes of data sent with a transaction. These 4-byte signatures are defined as the first four bytes of the Keccak hash (SHA3) of the canonical representation of the function signature._

The following is an example using ethersJS, for a `reply(uint, uint)` EVM function call:

`cont fnSig = await contract.interface.getSighash("reply(uint, uint)")`

### 2) Get the gas limit

The gas limit can be derived by doing tests calling the EVM function. Adding a margin to it is always recommended.
You could also estimate that gas limit at runtime.



## Get required dynamic variables

### 1) Get the sender's nonce

The nonce of an address being incremented at each transaction, you need to retreive it right before your call to __eosio.evm__ `raw()` method

#### A - Using a script

The following is an example using [@telosnetwork/telosevm-js](https://github.com/telosnetwork/telosevm-js):

`const nonce = parseInt(await evmApi.telos.getNonce(linkedAddress), 16)`

#### B - Using a smart contract

You can get the nonce of a linked EVM address from the eosio.evm accounts table, like so:

```
// find account
account_table _accounts("eosio.evm", "eosio.evm"_n);
auto accounts_byaccount = _accounts.get_index<"byaccount"_n>();
auto account = accounts_byaccount.require_find("MY NATIVE ACCOUNT", "Account not found");

// Get the nonce
const nonce = account->nonce;
```

### 2) Get the gas price

#### A - Using a script

The following is an example using [@telosnetwork/telosevm-js](https://github.com/telosnetwork/telosevm-js):

`const gasPrice = BigNumber.from('0x${await evmApi.telos.getGasPrice()}')`

#### A - Using a smart contract

You can get the EVM gas price from the __eosio.evm__ `config` singleton

### 3) Get the encoded transaction data

#### A - Using a script

Using the previously obtained __function signature__, __nonce__, __gas price__ and __gas limit__ values, get the encoded transaction data using a script. Libraries such as web3js and ethers have utilities that help a lot here.

_Refer to our native-to-evm-transaction repository's [generateEVMTransaction script](https://github.com/telosnetwork/native-to-evm-transaction/blob/main/generateEVMTransaction.js) for an example._

#### B - Using a smart contract

Using the previously obtained __function signature__ and __gas limit__ saved in your native contract, for example in a singleton (recommended) or by hard coding them as constants, as well as the dynamic __nonce__ and __gas price__  variable you can get the encoded transaction data using the [__RLP__ library](https://github.com/telosnetwork/telos.evm/tree/master/eosio.evm/external/rlp) included in __eosio.evm__

`rlp::encode(NONCE, GAS_PRICE, GAS_LIMIT, to, uint256_t(0), data, CHAIN_ID, 0, 0)`

`uint256_t(0)` is the value of the EVM transaction, here set at 0 (no value sent)

_Refer to our [rng-oracle-bridge repository](https://github.com/telosnetwork/rng-oracle-bridge/blob/ad255b872a238e4d3a3f59cdff44a206208ab67d/native/src/rng.bridge.cpp#L193) for an example._

## Call the eosio.evm `raw()` method

Use that __encoded transaction data__, as well as the  __ram payer__ native account and EVM __sender address__ to call the `raw()` action of the `eosio.evm` contract

### A - Using cleos

`cleos --url https://testnet.telos.net/ push action eosio.evm raw '{"ram_payer": 'NATIVE ACCOUNT HERE', "tx": "ENCODED TX DATA HERE" , "estimate_gas": false, "sender": "EVM SENDER ADDRESS HERE"' -p ' + nativeAccount`

Note that both the `tx` and `sender` arguments take hashes without '0x'

_Refer to our native-to-evm-transaction repository's [generateEVMTransaction script](https://github.com/telosnetwork/native-to-evm-transaction/blob/main/generateEVMTransaction.js) for an example._

### B - Using a smart contract

```
std::vector<uint8_t> to;
to.insert(to.end(),  evm_contract.begin(), evm_contract.end());

// Prepare solidity function parameters (function signature + call_id argument)
std::vector<uint8_t> data;
data.insert(data.end(), fnsig.begin(), fnsig.end());
data.insert(data.end(), call_id.begin(), call_id.end());

// Send it using eosio.evm
action(
    permission_level {get_self(), "active"_n},
    EVM_SYSTEM_CONTRACT,
    "raw"_n,
    std::make_tuple(NATIVE_RAM_PAYER, TX_DATA, false, std::optional<eosio::checksum160> (SENDER_EVM_ADDRESS))
).send();
```

_Refer to our [rng-oracle-bridge repository](https://github.com/telosnetwork/rng-oracle-bridge/blob/ad255b872a238e4d3a3f59cdff44a206208ab67d/native/src/rng.bridge.cpp#L193) for an example._

