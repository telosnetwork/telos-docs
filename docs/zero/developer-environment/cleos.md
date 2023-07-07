---
title: CLEOS Wallet Overview
sidebar_position: 4
hide_table_of_contents: true
---


# CLEOS Wallet Overview
-----       ------
Telos Zero wallets are applications that let you interact with your Telos Zero accounts. CLEOS is a command line tool that interfaces with the REST API exposed by nodeos. You can use ```cleos``` to deploy and test Antelope smart contracts. The wallet acts a container that is used to store key pairs/accounts for the blockchain. 

**Telos wallets are unique as you can store multiple accounts and keys unlike MetaMask.**

__Simply create a Development Wallet with Cleos commands__


## Step 1: Create a Wallet
Using Cleos to create the wallet:
This example will use the ```--to-console``` command for simplicity. If you are creating a wallet in production, use ```--to-file``` to ensure your wallet password is not recorded in your bash history. 

```cleos wallet create --to-console ```

**Cleos will return a password, save this password somewhere as you will likely need it later on in the tutorial.**


![CleosPassword](/img/cleos_password.png)

**About Wallets** A common misconception in cryptocurrency regarding wallets is that they store tokens. However, a wallet is used to store private keys in an encrypted file to sign transactions. Wallets do not serve as a storage medium for tokens. Private keys are used for authentication (proof of ownership over a public address) and signing transactions/messages.

A user builds a transaction object usually through an interface and sends that object to the wallet to be signed. The wallet then returns the transaction object with a signature which is then broadcast to the network. When/if the network confirms that the transaction is valid, it is included into a block on the blockchain.

----            -----

## Step 2: Wallet commands

1. Check that the wallet is created and initialized.

```
cleos wallet list  
```   

![CleosWalletList](/img/cleoswalletlist.png)

### UNLOCK WALLET

Enter wallet command and name of wallet
```
cleos wallet unlock -n WalletName
```
It will then prompt you to enter wallet password

![unlockWallet](/img/unlockWallet.png)

Wallet will unlock

**Check if wallet has keys**
```
cleos wallet keys
```
**New Wallet Output**
```
[] //Wallet is empty orivate keys have yet to be imported. 
```


## Step 3: Key Generation
__You can use the CLEOS CLI Or Telos Signup to generate your keys__
### Generate keys with Cleos CLI

```
cleos create key --to-console // Print private/public keys to console
```
**OR Save to File**
```
cleos create key --file FILENAME // Save output in specified file
```


### Generate Keys and Account on [Telos Signup](https://www.telos.net/signup) 

## Step 4: Import Keys
Import private key or keys into wallet. 
```
cleos wallet import 
```
The command asks for the private key. Enter:
```
5KDNWQvY2seBPVUz7MiiaEDGTwACfuXu78bwZu7w2UDM9A3u3Fs
```
**Example Output**
```
private key: imported private key for: EOS5zG7PsdtzQ9achTdRtXwHieL7yyigBFiJDRAQonqBsfKyL3XhC
```
**Import private key to named wallet**
 ```
cleos wallet import --name my_wallet --private-key 5KDNWQvY2seBPVUz7MiiaEDGTwACfuXu78bwZu7w2UDM9A3u3Fs
```  
**Example Output**
```
imported private key for: EOS5zG7PsdtzQ9achTdRtXwHieL7yyigBFiJDRAQonqBsfKyL3XhC

```


------                                           ------


