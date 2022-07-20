---
sidebar_position: 5
---
# Accounts and Permissions
--------                                    -------- 

## Overview

An account identifies a participant in an EOSIO blockchain. A participant can be an individual or a group depending on the assigned permissions within the account. Accounts also represent the smart contract actors that push and receive actions to and from other accounts in the blockchain. Actions are always contained within transactions. A transaction can be one or more atomic actions.

Permissions associated with an account are used to authorize actions and transactions to other accounts. Each permission is linked to an authority table which contains a threshold that must be reached in order to allow the action associated with the given permission to be authorized for execution. The following diagram illustrates the relationship between accounts, permissions, and authorities.


![AccountsPerms](/img/accounts_perms_auths.png)


By default when Alice's account was generated it initialized 2 native permissions also known as addresses specifically the __Owner and Active Keys__.

- After that then the owner was able to grant permissions to family, friends, and lawyer with weights applied as seen in the threshold chart. 

----            -----           

#### __EOS Accounts features__
- Simple 12 characters long (human readable)
- Keychain, can link multiple key pairs as authorizations. 
- Can store multiple key pairs in a single account. 

#### __Use Cases__ 
- Can be a contract account, multisig wallet, or single user account(EOA). 

#### MultiSig Accounts: 
Designed for security and consensus amongst a group of stakeholders in a business or for an individual ramping up security. It simply is an account that has enabled permissions to multiple entities with keys within that account and requires most of the keys to sign the transaction to execute.

## Creating an Account 
There are various ways to create an EOS account, some methods are really easy whereas other methods can be more secure yet more complicated. Simply the 2 methods covered are the automated Telos Account generator on the browser and the Cleos generate account command for local dev purposes. 



## Telos Account Generator
The easiest way to create an account via [Telos Account Generator](https://www.telos.net/signup)
- Go ahead and enter a preferred account name and Telos super account will automatically generate an account with key pairs linked to the new account. 

## CLEOS Account Command  
Simply generate a new account using the eosio for creator account then name the account a desired name with the Owner Key after all other parameters. 


```cleos create account [OPTIONS] creator name OwnerKey [ActiveKey]```




## Actions and Transactions 

Besides identifying participants in an EOSIO blockchain, actions and transactions are the other reason for accounts to exist. An action requires one or more actors to push or send the action, and a receiver account to whom the action is directed. A receiver account is also needed when leaving proof, in an action receipt, that the action was pushed to the intended recipient.

In contrast, transactions are agnostic to accounts, although there is an indirect link to them through their associated keys. Transactions are signed using one or more signing keys belonging to the one or more actors involved in the actions that form the transaction. This can be the receiving account itself or other authorized actors specified on the authority table from the receiving account's permission.

## Permissions

Permissions control what EOSIO accounts can do and how actions are authorized. This is accomplished through a flexible permission structure that links each account to a list of hierarchical named permissions, and each named permission to an authority table (see permission schema below).

![PermissionSchema](/img/premissionschema.png)