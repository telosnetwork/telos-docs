# Staked TLOS (STLOS) integration

__A look at our Staked TLOS token on Telos EVM__

## RUNDOWN

The Telos EVM staking functionality revolves around 2 EVM smart contracts: the __STLOS contract__, which represent shares of the deposited TLOS, and the __TelosEscrow contract__, which lock ups TLOS deposited for a configurable amount of time.

## CONTRACTS

### STLOS Contract

The [STLOS contract](https://github.com/telosnetwork/stlos/blob/dev/contracts/StakedTLOS.sol) is based on the [ERC4262 tokenized vault standard](https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#ERC4626). 
Users deposit their TLOS and get equivalent STLOS tokens in return that represent their deposit. 
Rewards sent to the contract every 30 minutes by the native [exrsrv.tf contract](https://github.com/telosnetwork/telos-distribute/blob/stlos/src/eosio.tedp.cpp) increase the TLOS price of STLOS over time. 
Users can use their STLOS tokens like any other ERC20 token.
On withdrawl from the contract, STLOS shares are converted back to TLOS which is then deposited, under the user address, directly to the __TelosEscrow contract__ (see below). 
The main functions are:

`depositTLOS(): uint256`

Deposits TLOS and gives the user back STLOS

`withdraw(uint256 assets, address receiver, address owner): uint256`

Converts shares to TLOS and sends it to TelosEscrow contract

`maxWithdraw(address owner): uint256`

Returns the maximum TLOS withdraw amount given the address STLOS balance

Preview methods are available to help with frontend integrations, such as:

`previewDeposit(uint256 assets): uint256`

`previewWithdraw(uint256 assets): uint256`

`previewMint(uint256 shares): uint256`

`previewRedeem(uint256 shares): uint256`

### TelosEscrow Contract

The [TelosEscrow](https://github.com/telosnetwork/stlos/blob/dev/contracts/TelosEscrow.sol) contract receives TLOS and locks them for a configurable amount of time `lockDuration`. Deposits are limited to `maxDeposits` per address in order to keep gas fees in check. The main functions are:

`deposit(address depositor)`

Deposit and lock TLOS tokens

`withdraw()`

Withdraw all unlocked deposits

`balanceOf(address depositor): uint256`

Get total TLOS in Escrow for an address (lock & unlocked)

`maxWithdraw(address depositor): uint256`

Get total unlocked TLOS in Escrow for an address

`depositsOf(address depositor): array`

Returns the array of deposits of an address
