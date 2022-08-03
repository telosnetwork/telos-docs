# Native multisig proposal example

The Telos EVM runs in one smart contract on the Telos Native blockchain, the eosio.evm contract. Calling a function of a Telos EVM smart contract from Telos Native requires the use of the eosio.evm contract's `raw(eosio::name &ram_payer,std::vector<int8_t> &tx, bool &estimate_gas,std::optional<eosio::checksum160> &sender)` action.

This action takes in the native account that will pay the RAM, the serialized EVM Transaction data and the sender address which the transaction will be sent from on EVM.

This guide will go over preparing and send a Telos Native multisig that can call a function of an EVM contract. An example implementation is available in our [native-to-evm-multisig-example repository](https://github.com/telosnetwork/native-to-evm-escrow-example) and will serve for our examples here.

__/!\ Make sure that the sender address has sufficient TLOS to pay for the gas of that function call__

## 1. Prepare the data using a script

The script will use a library like ethers or web3js to populate & serialize the EVM transaction into a hash which we need in order call to eosio.evm `raw(...)` method. 

We can refer to our [native-to-evm-escrow-example](https://github.com/telosnetwork/native-to-evm-escrow-example) repository for an example, with the `generateEVMTransaction.js` script

We get the linked EVM address & its nonce
```
try {
    var evmAccount = await evmApi.telos.getEthAccountByTelosAccount(nativeAccount);
    var evmAddress = evmAccount.address;
    var nonce = parseInt(await evmApi.telos.getNonce(evmAddress), 16);
} catch(e) {
    console.log(e.message);
    return;
}
```

We get gas data
```
const feeData = await provider.getFeeData()
const gasPrice = BigNumber.from(`0x${await evmApi.telos.getGasPrice()}`)
const gasLimit = 26166;
```

We populate the transaction with the relevant method call, in our case `setLockDuration`
```
// Use ether to populate the transaction with a call to the relevant method
try {
    var unsignedTrx =  await contract.populateTransaction.setLockDuration(process.env.DURATION);
} catch(e) {
    console.log(e.message);
    return;
}
```

Then we serialize the data using ethers utils
```
unsignedTrx.nonce = nonce;
unsignedTrx.gasLimit = gasLimit;
unsignedTrx.gasPrice = gasPrice;

try {
    var encodedTrx = await ethers.utils.serializeTransaction(unsignedTrx);
} catch(e) {
    console.log(e.message);
    return;
}
encodedTrx = encodedTrx.replace(/^0x/, '');
```

You can print the `encodedTrx` variable and use cleos to call __eosio.evm__ `raw()` method with it in order to check if your settings are correct.

For our purpose we need that encoded transaction string into a native transaction and a JSON file, which takes some tinkering. We will continue following our [example repository](https://github.com/telosnetwork/native-to-evm-escrow-example) to do just that next.

```
// We first save the native transaction to file using cleos
exec('cleos --url '+ process.env.NETWORK_ENDPOINT +' push action eosio.evm raw \'{"ram_payer": '+nativeAccount+', "tx": "'+ raw +'" , "estimate_gas": false, "sender": "'+ evmAddress.replace(/^0x/, '') +'"}\' --expiration 86400 -sjd --json-file output/transaction.json', (err, stdout, stderr) => {
    if (err) {
        console.error(err)
    } else {
        // We wait to let the command we launched finish
        await new Promise((resolve) => {
            setTimeout(resolve, 5000);
        });
        // We open and edit the transaction file
        fs.readFile('output/transaction.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
            } else {
                // We parse the data to JSON and correct some rows
                var jsonData = JSON.parse(data);
                jsonData.actions[0].data = jsonData.actions[0].hex_data;
                delete jsonData.actions[0].hex_data;
                jsonData.transaction_extensions = [];
                
                // We write the file to disk
                fs.writeFile('output/transaction.json', JSON.stringify(jsonData), (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log('Transaction JSON generated in output/transaction.json')
                    }

                });
            }
        });
    }
});
```

## 2. Prepare the permissions

To send a multisig, we need to setup the list of the needed signers' permissions. In our case, we will set our active BPs as the signer which requires a script, but you could just as well skip that step and use a static array of permission on step 3. 

We will refer to our [native-to-evm-escrow-example](https://github.com/telosnetwork/native-to-evm-escrow-example) example repository here, with its `generatePermissions.js ` script that fetches active BPs and writes their permission to a file on disk for later use.

```
import axios from 'axios';
import fs from 'fs';

const opts = [
  'telos.caleos.io', 
  '/v1/chain/get_table_rows?code=eosio&scope=eosio&table=producers', 
  {
    'accept': 'application/json',
    'content-type':'application/json'
  }
]

axios({
  method: 'post',
  url: 'https://telos.caleos.io/v1/chain/get_producers',
  data: {
    'limit':'20000',
    'json':true
  }
}).then((res) => {
  let bps = [];
  for (let i = 0; i < res.data.rows.length; i++) {
    let row = res.data.rows[i];
    if (row.is_active !== 1)
      continue

    bps.push({actor: row.owner, permission: 'active'})
  }
  fs.writeFile('output/permissions.json', JSON.stringify(bps, null, 4), {flag: 'a'}, err => {
    if (err) {
      console.error(err);
    } else {
      console.log('Permissions written to output/permissions.json')
    }
  });
})
```

## 3. Send your proposal using cleos

Run the following cleos command, replacing YOUR_NATIVE_ACCOUNT with your Telos native account name and PROPOSAL by your proposal's name.

cleos --url https://testnet.telos.net multisig propose_trx PROPOSAL ./output/permissions.json ./output/transaction.json YOUR_NATIVE_ACCOUNT

You could also use the EOSJS library to create the Multisig proposal directly from your script.
