---
sidebar_positon: 2
hide_table_of_contents: true
title: Simple User Onboarding With ORE ID
---

# ORE ID 

## Introduction

ORE ID is the universal authentication & authorization platform for blockchain. It works seamlessly on web, mobile, and legacy applications. This documentation focuses on helping developers understand how to utilize the `oreid-js` library to facilitate transaction creation, signing, and broadcasting for users on their platform without the user having to manually manage blockchain complexities.

:::info
The following information is an extraction from the [OreIdAuth class](https://github.com/telosnetwork/telos-wallet/blob/develop/src/antelope/wallets/authenticators/OreIdAuth.ts) which implements all examples presented in this doc.
:::

## Installation

Before you begin, make sure you have installed the `oreid-js` library. If not, you can do so via npm:

```bash
npm install oreid-js
```

## Importing Required Dependencies

To start, you will need to import the necessary modules and types from the `oreid-js` package:

```typescript
import { AuthProvider, ChainNetwork, OreId, OreIdOptions, JSONObject, UserChainAccount } from 'oreid-js';
```

The type `addressString` is used to ensure a valid blockchain address format:

```typescript
type addressString = `0x${string}`;
```

## *STEP 1*: Creating Transaction Bodies

Based on the action (transaction) you intend to execute, you first need to create its body. Here are configurations for several common transaction types:

### 1. **System Token Transfer**

This is a basic token transfer within the system:

```typescript
const systemTransferBody = {
    from, // addressString: sender's address
    to, // addressString: recipient's address
    value,  // amount to transfer, use ethers.BigNumber.toHexString() for conversion
};
```

### 2. **ERC20 Token Transfer**

To transfer ERC20 tokens:

```typescript
const erc20TransferBody = {
    from, // addressString: sender's address
    to: token.address, // the contract address of the ERC20 token
    contract: {
        abi, // ABI of the ERC20 token contract
        parameters: [to, value], // parameters needed for the transfer method
        method: 'transfer', // method name for the ERC20 transfer
    },
} as unknown as JSONObject;
```

### 3. **Wrap System Token into ERC20 Token**

If you want to wrap your system token into an ERC20 token:

```typescript
const wrapTransactionBody = {
    from, // addressString: sender's address
    to: wrappedSystemTokenContractAddress, // contract address of the wrapped system token
    value, // amount to wrap
    contract: {
        abi, // ABI of the contract
        parameters: [], 
        method: 'deposit', // method name for depositing
    },
} as unknown as JSONObject;
```

### 4. **Unwrap ERC20 Back to System Token**

To convert your wrapped ERC20 token back into a system token:

```typescript
const unwrapTransactionBody = {
    from, // addressString: sender's address
    to: wrappedSystemTokenContractAddress, // contract address of the wrapped system token
    contract: {
        abi, // ABI of the contract
        parameters: [value], // value to unwrap, use ethers.BigNumber.toHexString() for conversion
        method: 'withdraw', // method name for withdrawing
    },
} as unknown as JSONObject;
```

## *STEP 2*: Constructing the Transaction

With the transaction body configured, the next step is to construct the final transaction structure:

```typescript
const transaction = await oreId.createTransaction({
    transaction: transactionBody, // use one of the previously created transaction bodies
    chainAccount: from, // sender's blockchain account address
    chainNetwork: 'telos.evm', // specify the blockchain network
    signOptions: {
        broadcast: true, // to effectively send the transaction
        returnSignedTransaction: true, // to get a response after transaction execution
    },
});
```

## *STEP 3*: Signing and Broadcasting the Transaction

After constructing the transaction, prompt the user to sign it using a popup:

```typescript
const { transactionId } = await oreId.popup.sign({ transaction });
console.log('transaction hash:', transactionId);
```

The user will see a popup window where they can either confirm or reject the transaction.

## Conclusion

With `oreid-js`, you can seamlessly integrate blockchain transactions into your web or mobile application. By abstracting away the complexities, ORE ID ensures a smooth user experience while maintaining the security and integrity of blockchain transactions.
