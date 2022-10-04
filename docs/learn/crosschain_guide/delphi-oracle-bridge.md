# DELPHI ORACLE BRIDGE

## REPOSITORY

You can find the repository for the Delphi Oracle Bridge [here](https://github.com/telosnetwork/delphi-oracle-bridge)

## DEPLOYMENTS

**MAINNET:** TBD

**TESTNET:** TBD

## HOW IT WORKS

The method we use is similar to Chainlink's Direct funding method. You must directly fund consuming contracts with TLOS tokens before they request randomness.

The `callback_gas` variable contains the gas units you estimate will be needed to call your `receiveDatapoints()` callback function in your own smart contract (ie: 50000). This is the maximum amount of gas that will be spent by the bridge when calling your contract.

### Note on transaction costs.

Because the consuming contract directly pays the TLOS for the request, the cost is calculated during the request and not during the callback when the randomness is fulfilled. Test your callback function to learn how to correctly estimate the callback gas limit.

You can query the TLOS value to pass in your `request()` function call by calling the `calculateRequestPrice(uint callback_gas)` public function. 

You can alternatively calculate that price by taking the gas price from the `GasOracleBridge` with `getPrice()`, multiply that price with your estimate gas units (ie: 50000) and add the fee from the `DelphiOracleBridge` that you can query with `fee()`:

`Price = Gas Units * Gas Price + Bridge Fee`

If the gas limit is underestimated, the callback fails and the consuming contract is still charged for the work done to generate the requested random values.
If the gas limit is overestimated, the callback function will be executed but your contract is not refunded for the excess gas amount that you paid.
Make sure that your consuming contracts are funded with enough TLOS tokens to cover the transaction costs. If the consuming contract doesn't have enough TLOS tokens, your request will revert.

