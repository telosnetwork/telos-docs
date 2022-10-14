# Read EVM data from Telos Native

The Telos EVM runs on one smart contract on Telos Native: the __eosio.evm__ contract
This contract holds the state storage of the Telos EVM on the `accountstates` table that can be read to retreive all stored EVM data. This enables trustless communication from EVM to Native !

_Note that when reading that table the scope needs to be the index of your EVM contract in the __accounts__ eosio.evm table. In our example, on testnet, the scope to use is 35485_

As each EVM contract stores its data at different slots depending on the order and size of the contract's variables, the first step to be able to read EVM data from Native is to understand how ETH's key => value storage works, there are several resources available for this:

[Solidity documentation page](https://docs.soliditylang.org/en/v0.8.13/internals/layout_in_storage.html)

[Hackernoon's Medium article](https://medium.com/hackernoon/getting-deep-into-ethereum-how-data-is-stored-in-ethereum-e3f669d96033)

[Program The Blockchain's blog post](https://programtheblockchain.com/posts/2018/03/09/understanding-ethereum-smart-contract-storage/)

Once you got the slot index you are looking for you can use a library like ethers to compute the slot you need in a script or compute it from a smart contract using __eosio.evm__ utils. Below is an example that reads the storage of our testnet [RNGOracleBridge](https://github.com/telosnetwork/rng-oracle-bridge/blob/main/evm/contracts/RNGOracleBridge.sol) contract (0x10b95d422f2c9714c331b1a14829886b0910f55d).

## Using a script

You can use a library like ethers or web3js to call `getStorageAt`.

```
const provider = ethers.getDefaultProvider("https://testnet.telos.net/evm");

const addr =  "0x10b95d422f2c9714c331b1a14829886b0910f55d"; // Our contract address
const owner_slot = "0x00"; // Our first slot index "owner"

const owner =  await provider.getStorageAt(addr, owner_slot); // Read the storage
```

If you are looking for a dynamic array or mapping this first slot will only hold the length. You need to compute a key for each member and each of its properties in order to access all the values. For example with the array of Request struct in our [RNGOracleBridge](https://github.com/telosnetwork/rng-oracle-bridge/blob/main/evm/contracts/RNGOracleBridge.sol) contract:

```  
struct Request {
        uint id;
        address caller_address;
        uint caller_id;
        uint requested_at;
        uint64 seed;
        uint min;
        uint max;
}
Request[] public requests;
```  
 
We can access each member of that array and its properties like so:
```
const provider = ethers.getDefaultProvider("https://testnet.telos.net/evm");

const addr = "0x10b95d422f2c9714c331b1a14829886b0910f55d";

// Get the id slot
const id_slot = ethers.utils.keccak256(
        ethers.utils.hexZeroPad("0x02", 32),
);

// Get the array length
const array_length = await provider.getStorageAt(addr, "0x02");
console.log(array_length)

// If a value is set to 0 it won't be saved as a row in the table
// A request ID can be set to 0, hence we need to set it to 0 if the row doesn't exist
let id = 0;
try {
    id = await provider.getStorageAt(addr, id_slot);
} catch (e) {}
console.log(id);
```

To get the following members, you just need to increment that slot as many times as needed
```
var slot_caller_address = BigNumber.from(id_slot).add(1);

const caller_address = await provider.getStorageAt(addr, slot_caller_address);
console.log(caller_address)
```

If you need to loop over all members and not just retreive the first member's properties you can use the `array_length` value we retreived earlier to do so.

## Using a smart contract

You can use __eosio.evm__ utils to read EVM data from a Native Telos smart contract more easily. You will also need to integrate the intx library for the uint256 type.

We will base this example on our [rng-oracle-bridge](https://github.com/telosnetwork/rng-oracle-bridge/tree/main/antelope) repository, the variable we want to read is an array of Request structs.

First we need the array length and array content slot key
```
// Get array slot to find array length
auto account_states_bykey = account_states.get_index<"bykey"_n>();
auto storage_key = toChecksum256(uint256_t(2));
auto array_length = account_states_bykey.require_find(storage_key, "No requests");
// Get array content slot 
auto array_slot = checksum256ToValue(keccak_256(storage_key.extract_as_byte_array()));
```

Then we loop up to the array length in order to get all members of the array
```
// Loop to get all array member
for(uint256_t i = 0; i < array_length->value;i=i+1){
    auto position = array_length->value - i;
    
    // Get call ID variable
    auto id_slot = getArrayMemberSlot(array_slot, 0, 7, position); 
    auto call_id_checksum = account_states_bykey.find(id_slot);
    auto call_id = (call_id_checksum == account_states_bykey.end()) ? uint256_t(0) : call_id_checksum->value;

    // Get seed variable
    auto seed = account_states_bykey.require_find(getArrayMemberSlot(array_slot, 4, 7, position), "Seed not found");
    
    // Get max variable
    auto max_checksum = account_states_bykey.find(getArrayMemberSlot(array_slot, 6, 7, position));
    auto max = (max_checksum == account_states_bykey.end()) ? 0 : max_checksum->value;
    
    // Get min variable
    auto min_checksum = account_states_bykey.find(getArrayMemberSlot(array_slot, 5, 7, position));
    auto min = (min_checksum == account_states_bykey.end()) ? 0 : min_checksum->value;
}
```

This loop makes use of functions inside our [utils class](https://github.com/telosnetwork/rng-oracle-bridge/blob/main/antelope/include/util.hpp) like `getArrayMemberSlot`
