---
sidebar_position: 4
---


# Create Development Wallet
-----       ------
The most important aspect to wallets is that they store both public-private key pairs in an encrypted manner, which places custody to the user who has access to this information. Wallets are accessed using Cleos on Telos Native.

__This Tutorial will go through creating a development wallet with Cleos__


## Step 1: Create a Wallet
Using Cleos to create the wallet.
We will be using the ```--to-console``` command for simplicity. If you are creating a wallet in production use ```--to-file``` so your wallet password is not in your bash history. 

```cleos wallet create --to-console ```

Cleos will return a password, save this password somewhere as you will likely need it later in the tutorial.


![CleosPassword](/img/cleos_password.png)

**About Wallets** A common misconception in cryptocurrency regarding wallets is that they store tokens. However, in reality, a wallet is used to store private keys in an encrypted file to sign transactions. Wallets do not serve as a storage medium for tokens.

A user builds a transaction object, usually through an interface, sends that object to the wallet to be signed, the wallet then returns that transaction object with a signature which is then broadcast to the network. When/if the network confirms that the transaction is valid, it is included into a block on the blockchain.

----            -----

## Step 2: Open the Wallet

