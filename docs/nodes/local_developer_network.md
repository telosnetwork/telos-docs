---
id: "Antelope.io-network-spinup"
---

# Local Developer Network 
__This tutorial explains how to configure a local test network, setup Antelope system accounts, and create a native currency.__

# Installations
Make sure you have EOSIO installed via ``` cleos version client``` 
If not currently installed, follow this link before proceeding: [Antelope installation guide](../native/eosio_toolkit/getting_started_eosio)

## Node Template
This example will use the node template found [here](https://github.com/telosnetwork/node-template) to set up a local dev node. 

__Clone the Node template to local project folder and open Code IDE.__


# Start here

## 1. Edit Config Files
In the node_config file set LOCALIZE_LOG=true and set the nodeos and cleos binaries as the name of the binary without a specific path:

```
BUILD_ROOT="/path/to/binaries/2.0.4"
CLIENT_BIN="cleos"
NODEOS_BIN="nodeos"
CPU="0"
LOCALIZE_LOG=true
```
The whole node will be contained within this ```node-template``` repo's directory.

To reset the node, either remove or rename the ```data``` directory.

## 2. Local Dev wallet (CLEOS)
First, generate a key to use for this local network's ```eosio``` super-user account:

**NOTE** SAVE THESE KEYS for creating system accounts

```cleos create key --to-console ```

Create a dev wallet, save this password: 

```cleos wallet create -n dev --to-console```


Import the key into cleos, paste the private key when prompted:
```cleos wallet import -n dev```


__Now that the private keys have been imported to the newly generated account, the next step is to configure the files__

## 3. Configure local Node template files 

Generate a genesis block```genesis.json``` file (This is the standard for EOSIO launches):

``` nodeos --extract-genesis-json genesis.json ```

Edit the genesis.json and set the ```initial_key``` to the public key that you genereated above for ```eosio```: 

```"initial_key": "EOS6hbvsZnQGnYxUwcY62U9hfneSJ8cGxX7ufogD2iFuUEKwipHAS"```


Edit the config.ini file to configure this node to produce blocks as ```eosio```

```vi config.ini```

Also change the following, setting the key to the you generated above for EOSIO super account:

```producer-name = eosio```

```signature-provider = EOS6nrS...=KEY:5HxQ...``` ```<PublicKey>=KEY:<PrivateKey>```

Uncomment the producer API Plugin in config.ini file:

```plugin = eosio::producer_api_plugin```

### Start the node
1. Start the node for the first time:

```./start.sh --enable-stale-production --genesis-json genesis.json```

2. View the blocks being confirmed in a new terminal and run the command:

```tail -f node-template.log```

3. Stop the Node:

```./stop.sh```

4. Start the node in dev mode (this is how you will start the node from now on):

```./start.sh --enable-stale-production```


## Create System Accounts
Make sure to have your key pair that was initialized at the start of the tutorial.

Run the following command to double check the correct wallet key is being used:

```cleos wallet private_keys -n <YourWalletName>```

Command for creating accounts (Usage: **cleos create account [OPTIONS] creator name OwnerKey [ActiveKey]**)


```cleos create account eosio eosio.token <OwnerKey> <ActiveKey>```

```cleos create account eosio eosio.bpay <OwnerKey> <ActiveKey>```

```cleos create account eosio eosio.vpay <OwnerKey> <ActiveKey>```

```cleos create account eosio eosio.msig <OwnerKey> <ActiveKey>```

```cleos create account eosio eosio.names <OwnerKey> <ActiveKey>```

```cleos create account eosio eosio.ram <OwnerKey> <ActiveKey>```

```cleos create account eosio eosio.ramfee <OwnerKey> <ActiveKey>```

```cleos create account eosio eosio.rex <OwnerKey> <ActiveKey>```

```cleos create account eosio eosio.saving <OwnerKey> <ActiveKey>```

```cleos create account eosio eosio.stake <OwnerKey> <ActiveKey>```

**NOTE:** Users can only create accounts with this command before the system.contract is deployed. Once deployed, you must use ```cleos system newaccount ...```

Check created accounts under the EOSIO account:

```cleos get accounts <PublicKey>```

**Output**: {
  "account_names": [
    "eosio.bpay",
    "eosio.msig",
    "eosio.names",
    "eosio.ram",
    "eosio.ramfee",
    "eosio.rex",
    "eosio.saving",
    "eosio.stake",
    "eosio.token",
    "eosio.vpay",
    ]
}
## EOSIO Token Contract
__Defines the structures and actions allowing users to create, issue, and manage tokens on EOSIO-based blockchains.__
1. Create the eosio.token contract account
    ```cleos create account eosio eosio.token <OwnerKey> <ActiveKey>```

2. Change directory into the contracts directory then move into eosio.token

    ```cd contracts/eosio.token```
3. Deploy the eosio.token contract   

    ```cleos set contract eosio.token . ./eosio.token.wasm ./eosio.token.abi```  

4. Write actions on the local blockchain. 
```cleos push action eosio.token create '["eosio","100000000.0000 TLOS"]' -p eosio.token@active```

Issue Max Supply to EOSIO account
```cleos push action eosio.token issue '["eosio","100000000.0000 TLOS","Issue max supply to eosio"]' -p eosio@active```


## Deploy the System Contract 
The next step is to deploy the standard system contract that comes with EOSIO software and initialize it using the Init action. 

1. First run the curl command

```curl -X POST http://127.0.0.1:8888/v1/producer/schedule_protocol_feature_activations -d '{"protocol_features_to_activate": ["0ec7e080177b2c02b278d5088611686b49d739925a92d9bfcacd7fc6b74053bd"]}' | jq```

2. Change directory into contracts/eosio.system  

```cd contracts/eosio.system```

3. Deploy Eosio.system contract

```cleos set contract eosio . ./eosio.system.wasm ./eosio.system.abi```

4. Push the Init action to initiailize the new native currency

```cleos push action eosio init '[0,"4,TLOS"]' -p eosio@active```



