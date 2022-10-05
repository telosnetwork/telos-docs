# GAS ORACLE BRIDGE

## REPOSITORY
You can find the repository for the Gas Oracle Bridge [here](https://github.com/telosnetwork/gas-oracle-bridge)

## DEPLOYMENTS

**MAINNET:** TBD

**TESTNET:** TBD

## HOW IT WORKS

A listener compares the gas price stored on the `GasOracleBridge` EVM contract to the one stored and the `eosio.evm` Antelope contract. If they are different they notify the bridge's antelope contract to query the new price from `eosio.evm` and update the bridge's EVM contract accordingly.

You can query the current gas price by calling the `getPrice()` public function of the `GasOracleBridge` contract on EVM.
