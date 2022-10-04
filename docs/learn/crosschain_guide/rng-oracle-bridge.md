# RNG ORACLE BRIDGE

## REPOSITORY

You can find the repository for the RNG Oracle Bridge [here](https://github.com/telosnetwork/rng-oracle-bridge)

## DEPLOYMENTS

**MAINNET:** TBD

**TESTNET:** TBD

## IMPORTANT CONSIDERATIONS

There is a max request per consumer contract, if you reach it, wait for an answer or use the `deleteRequestorRequest(address requestor, uint callId)` method from your the smart contract that made the request to delete one.

Your implementation of the `receiveRandom()` callback function must not revert

## HOW IT WORKS

The method we use is similar to Chainlink's Direct funding method. You must directly fund consuming contracts with TLOS tokens before they request randomness.

The `callback_gas` variable contains the gas units you estimate will be needed to call your `receiveRandom()` callback function in your own smart contract (ie: 50000). This is the maximum amount of gas that will be spent by the bridge when calling your contract.

### Note on transaction costs.

Because the consuming contract directly pays the TLOS for the request, the cost is calculated during the request and not during the callback when the randomness is fulfilled. Test your callback function to learn how to correctly estimate the callback gas limit.

You can query the TLOS value to pass in your `request()` function call by calling the `calculateRequestPrice(uint callback_gas)` public function. 

You can alternatively calculate that price by taking the gas price from the `GasOracleBridge` with `getPrice()`, multiply that price with your estimate gas units (ie: 50000) and add the fee from the `RNGOracleBridge` that you can query with `fee()`:

`Price = Gas Units * Gas Price + Bridge Fee`

If the gas limit is underestimated, the callback fails and the consuming contract is still charged for the work done to generate the requested random values.
If the gas limit is overestimated, the callback function will be executed but your contract is not refunded for the excess gas amount that you paid.
Make sure that your consuming contracts are funded with enough TLOS tokens to cover the transaction costs. If the consuming contract doesn't have enough TLOS tokens, your request will revert.

## REQUEST & RECEIVE DATA
 
![RNGOracleBridge](https://user-images.githubusercontent.com/5913758/193873078-b8e2e7ab-1f33-41d8-ac47-32ec81548c64.jpg)

## MAKE A REQUEST !

Deploy a contract that calls the `RNGOracleBridge` contract's `request()` function, passing a value to cover fee and callback gas cost (refer to the **callback gas** section further ahead).

```
interface IRNGOracleBridge {
    function request(uint callId, uint64 seed, uint callback_gas, address callback_address, uint number_count) external payable;
}

contract MyContract {
    IRNGOracleBridge bridge;

    constructor(address _bridge) {
        bridge = IRNGOracleBridge(_bridge);
    }
    
    function makeRequest(uint64 seed, uint callback_gas, uint count) external  payable {
        ... YOUR LOGIC TO SETUP THE CALLID, ETC...
        bridge.request{value: msg.value }(callId, seed, callback_gas, address(this), count);
    }
}
```

The request function takes in a **callId**, for you to keep track of the requests & handle answers later, a **seed** for the random generation that you can generate however you like as long as it fits into 64 bytes, the **callback_gas** unit (see below), the **callback_address** where to call your implementation of the callback function  and the **number_count** of requested numbers. 

On the same contract, or in a new one, implement a `receiveRandom(uint callId, uint[] numbers) external` callback function in order to receive the oracle's answer, like so:


```
contract MyContract {
    IRNGOracleBridge bridge;

    constructor(address _bridge) {
        bridge = IRNGOracleBridge(_bridge);
    }
    
    function receiveRandom(callId, numbers){
       require(msg.sender == address(bridge), "Only the bridge contract can call this function");
        
       // Handle whatever logic you need with the random numbers received here
    
    }
}
```

You can refer to the [`RNGOracleConsumer`](https://github.com/telosnetwork/rng-oracle-bridge/blob/main/evm/contracts/RNGOracleConsumer.sol) EVM contract for a complete example. 
