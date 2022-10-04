# DELPHI ORACLE BRIDGE

## REPOSITORY

You can find the repository for the Delphi Oracle Bridge [here](https://github.com/telosnetwork/delphi-oracle-bridge)

## DEPLOYMENTS

**MAINNET:** TBD

**TESTNET:** TBD

## HOW IT WORKS

The method we use is similar to Chainlink's Direct funding method. You must directly fund consuming contracts with TLOS tokens before they request datapoints.

The `callback_gas` variable contains the maximum gas units you estimate will be needed to call your `receiveDatapoints()` callback function in your own smart contract (ie: 50000). This is the maximum amount of gas that will be spent by the bridge when calling your contract.

### Note on transaction costs.

Because the consuming contract directly pays the TLOS for the request, the cost is calculated during the request and not during the callback when the request is fulfilled. Test your callback function to learn how to correctly estimate the callback gas limit.

You can query the TLOS value to pass in your `request()` function call by calling the `calculateRequestPrice(uint callback_gas)` public function. 

You can alternatively calculate that price by taking the gas price from the `GasOracleBridge` with `getPrice()`, multiply that price with your estimate gas units (ie: 50000) and add the fee from the `DelphiOracleBridge` that you can query with `fee()`:

`Price = Gas Units * Gas Price + Bridge Fee`

If the gas limit is underestimated, the callback fails and the consuming contract is still charged for the work done to generate the requested random values.
If the gas limit is overestimated, the callback function will be executed but your contract is not refunded for the excess gas amount that you paid.
Make sure that your consuming contracts are funded with enough TLOS tokens to cover the transaction costs. If the consuming contract doesn't have enough TLOS tokens, your request will revert. 

## MAKE A REQUEST !

Deploy a contract that calls the `RNGOracleBridge` contract's `request()` function, passing a value to cover fee and callback gas cost (refer to the **callback gas** section further ahead).

```
interface IDelphiOracleBridge {
    function request(uint callId, string calldata pair, uint limit, uint callback_gas, address callback_address) external payable;
}

contract MyContract {
    IDelphiOracleBridge bridge;

    constructor(address _bridge) {
        bridge = IRNGOracleBridge(_bridge);
    }
    
    function makeRequest(string calldata pair, uint limit, uint callback_gas) external payable {
        ... YOUR LOGIC TO SETUP THE CALLID, ETC...
        bridge.request{value: msg.value }(callId, pair, limit, callback_gas, address(this));
    }
}
```

The request function takes in a **callId**, for you to keep track of the requests & handle answers later, the **pair** you are requesting, the **limit** of the datapoints to receive, the **callback_gas** unit (see below) and the **callback_address** where to call your implementation of the callback function. 

On the same contract, or in a new one, implement a `receiveDatapoints(uint callId, Datapoint[] calldata datapoints) external` callback function in order to receive the oracle's answer, like so:


```
interface IDelphiOracleBridge {
    function request(uint callId, string calldata pair, uint limit, uint callback_gas, address callback_address) external payable;
}

contract MyContract {
    IDelphiOracleBridge bridge;
    
    struct Datapoint {
        string pair;
        string owner;
        uint timestamp;
        uint median;
        uint value;
    }
    
    constructor(address _bridge) {
        bridge = IDelphiOracleBridge(_bridge);
    }
    
    function receiveDatapoints(uint callId, Datapoint[] calldata datapoints) external {
       require(msg.sender == address(bridge), "Only the bridge contract can call this function");
        
       // Handle whatever logic you need with the random numbers received here
    
    }
}
```

You can refer to the [`DelphiOracleConsumer`](https://github.com/telosnetwork/delphi-oracle-bridge/blob/main/evm/contracts/DelphiOracleConsumer.sol) EVM contract for a complete example. 

## IMPORTANT CONSIDERATIONS

There is a max request per consumer contract, set at 25 for now, if you reach it wait for an answer or use the `deleteRequestorRequest(address requestor, uint callId)` method from your the smart contract that made that request to delete one.

Your implementation of the `receiveDatapoints()` callback function must not revert

