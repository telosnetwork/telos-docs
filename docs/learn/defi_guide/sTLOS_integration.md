# StakedTLOS (sTLOS) integration

__A look at our StakedTLOS and TelosEscrow contracts on Telos EVM__

## RUNDOWN

The Telos EVM staking functionality revolves around 2 EVM smart contracts: the [__StakedTLOS contract__](https://github.com/telosnetwork/stlos/blob/dev/contracts/StakedTLOS.sol), a ERC20 token implementing [ERC4262](https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#ERC4626) that represents shares of deposited TLOS, and the [__TelosEscrow contract__](https://github.com/telosnetwork/stlos/blob/dev/contracts/TelosEscrow.sol), which locks up any TLOS deposited for a configurable amount of time.

When funds are withdrawn from the sTLOS contract, they are automatically sent over to the TelosEscrow contract and will only be withdrawable from there after a defined amount of time has passed.

## CONTRACTS

### StakedTLOS Contract

The [StakedTLOS contract](https://github.com/telosnetwork/stlos/blob/dev/contracts/StakedTLOS.sol) is based on the [ERC4262 tokenized vault standard](https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#ERC4626) which itself implements ERC20. 

- Users deposit their TLOS and get equivalent sTLOS tokens in return that represent their share of the total TLOS staked on the contract. 
- Rewards are sent to the contract every 30 minutes by the native [exrsrv.tf contract](https://github.com/telosnetwork/telos-distribute/blob/stlos/src/eosio.tedp.cpp) which increase the TLOS price of sTLOS over time. 
- Users can use their sTLOS tokens like any other ERC20 token.
- On withdrawl from the contract, sTLOS shares are converted back to TLOS which is then deposited, under the user address, directly to the __TelosEscrow contract__ (see below). 

#### Main functions

`depositTLOS(): uint256`

Deposits TLOS and gives the user back sTLOS

`withdraw(uint256 assets, address receiver, address owner): uint256`

Converts shares to TLOS and sends it to TelosEscrow contract

`maxWithdraw(address owner): uint256`

Returns the maximum TLOS withdraw amount given the address sTLOS balance

Preview methods are available to help with frontend integrations, such as:

`previewDeposit(uint256 assets): uint256`

`previewWithdraw(uint256 assets): uint256`

`previewMint(uint256 shares): uint256`

`previewRedeem(uint256 shares): uint256`

#### Testnet address:
#### Mainnet address: [0xB4B01216a5Bc8F1C8A33CD990A1239030E60C905](https://teloscan.io/address/0xB4B01216a5Bc8F1C8A33CD990A1239030E60C905)

### TelosEscrow Contract

The [TelosEscrow](https://github.com/telosnetwork/stlos/blob/dev/contracts/TelosEscrow.sol) contract receives TLOS and locks them for a configurable amount of time `lockDuration`. Deposits are limited to `maxDeposits` per address in order to keep gas fees in check. 

#### Main functions

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

#### Events

`Withdraw(address _from, address _to, uint _amount)`

Emitted on sucessfull call to withdraw()

`Deposit(address _from, address _depositor, uint _amount)`

Emitted on sucessfull call to deposit(address depositor)

#### Testnet address:
#### Mainnet address: [0x95F5713A1422Aa3FBD3DCB8D553945C128ee3855](https://teloscan.io/address/0x95F5713A1422Aa3FBD3DCB8D553945C128ee3855)
