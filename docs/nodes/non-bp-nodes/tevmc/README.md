---
title: "Introduction"
id: tevmc
description: >-
  tevmc is a python 3.x library/command line tool to help bootstrap and
  managment of Telos EVM local, testnet and mainnet nodes.
hide_table_of_contents: true
sidebar_position: 1
---

# Telos EVM Controller

## Requirements

* `git`
* `docker`
* `python3`

## Quickstart

Thanks to Teo from TelosKoreaBP for this quick rundown:

```
## Need installed python version >= python 3.8
## Requires root at the moment.

git clone https://github.com/telosnetwork/telos-evm-docker.git -b v1.5.0
cd telos-evm-docker

# Two posibilities:
# 1) Recommended: Install poetry python package manager dependecy to /usr/local (REQUIRES SUDO)
sudo ./install.sh

# 2) Install dependency to another $DIRECTORY that is already on $PATH
./install.sh $DIRECTORY

source ./activate.sh

## from now on we are working in the virtual environment.
## just run 'deactivate' when you want to deactivate virtual environment.

tevmc init testnet
cd testnet

## Modify tevmc.json
## For mainnet, signer_account, signer_permission, signer_key
## Containers use ports of host machine so you need to check the ports if used already.

## Launch and store logs, also detach from session
nohup tevmc up 2>&1 > tevmc.log &

## Wait until synced and evm-rpc activated.
## To stop:
tevmc down
```

## Installation

`tevmc` is a [python installable package](https://docs.python.org/3/installing/index.html), and its currently [available on github](https://github.com/telosnetwork/telos-evm-docker).&#x20;

1. `git clone git@github.com:telosnetwork/telos-evm-docker.git`&#x20;
2. `cd telos-evm-docker`
3. `git checkout v1.5.0`
4. `sudo ./install.sh`&#x20;
5. `source ./activate.sh`

`tevmc` can be used as a command line utiliy to manually manage Telos EVM nodes, [but is usable as a library](../tevmc/references).

Once the package installation finishes, you should be able to invoke:

* `tevmc --help`

## Initialization

`tevmc` uses a specific self-contained directory structure for each individual node, to create a new node directory from template use the `init` sub command.

* `tevmc init {node name}`

There are three templates available:

* `local`: Local development testnet
* `testnet`: Standard testnet node
* `mainnet`: Standard mainnet node

If your node name contains any of this names the corresponding template will be selected. Examples:

* `tevmc init local-dev-1  # will use local template`
* `tevmc init us-testnet-04  # will use testnet template`
* `tevmc init rpc.mainnet-07  # will use mainnet template`

## Configuration

Inside the directory created by the `init` command you'll see a `docker` directory and the unified config file `tevmc.json`.&#x20;

On startup `tevmc` will populate all the different config files in the `docker` directory based of the values in the unified config file.
After that it will only re-create the files from templates if it detects changes on `tevmc.json`.

## Bootstrap

With the docker images built we can launch the node:

> `tevmc up  # launch as foreground process Ctrl+C to exit`&#x20;
>
> `nohup tevmc up 2>&1 > tevmc.log &  # launch as background process` &#x20;

You should eventually see `control point reached!` in the logs, at that point the full node stack should be up and ready to serve requests.

## Where is the data?

The idea is to create self contained node directories, which can be easily moved with the stack down.

Each sub-directory inside main docker path generally contains a combination of this directories:

* `build` docker build context
* `config` editable configuration files, mounted to were they are needed inside the respective container.
* `data` permanent storage kept between runs
* `logs` log file location

### Full directory structure

```
node/
├── docker/
│   ├── beats/
│   ├── elasticsearch/
│   ├── leap/
│   ├── telosevm-translator/
│   ├── telos-evm-rpc/
│   ├── kibana/
│   └── redis/
└── tevmc.json
```

## Monitoring

You can stream logs from any container using the `stream` sub command:

> `tevmc stream {source}`

Available sources:

* `daemon`&#x20;
* `redis`
* `beats`
* `elasticsearch`
* `kibana`
* `nodeos`
* `indexer`
* `rpc`

## Landing

To bring the stack down run:

> `tevmc down`

This will perform graceful `nodeos` stop and bring down all containers.

## FAQ

### Can I use this to process and index both Zero & EVM transactions?

> Yes, but will need to set correct producer keys on `nodeos` and un-whitelist `eosio.evm` on Hyperion config.

### As  soon as I launch the stack it crashes with an error like this one:

```
07:00:32:WARNING:Starting daemon.
07:00:32:INFO:opening redis-2122399...
07:00:33:INFO:running
07:00:33:INFO:
07:00:33:INFO:*** FATAL CONFIG FILE ERROR (Redis 6.2.6) ***
07:00:33:INFO:Reading the configuration file, at line 92
07:00:33:INFO:>>> 'port $redis_port'
07:00:33:INFO:argument couldn't be parsed into an integer
07:00:33:CRITICAL:container status: removing, log dump:
07:00:33:CRITICAL:couldn't access logs.
07:00:33:WARNING:Stopping daemon.
```

> This error usually happens when trying to launch a stack without previously running `tevmc build` first.

### While in the process of launching the `nodeos` service, it crashes with an error like this one:

```
warn  2023-08-20T19:22:30.845 nodeos    chain_plugin.cpp:1085         plugin_initialize    ] 13 N5boost10wrapexceptINSt3__112sy
stem_errorEEE: Database dirty flag set
rethrow Database dirty flag set:
    {"what":"Database dirty flag set"}
    nodeos  chain_plugin.cpp:1085 plugin_initialize

error 2023-08-20T19:22:30.845 nodeos    main.cpp:157                  main                 ] database dirty flag set (likely du
e to unclean shutdown): replay required
```

> Usually means `nodeos` data is corrupted due to an ungraceful stop. Run `tevmc repair` from the node directory with the stack down to repair data.

### Can I start indexing from a custom snapshot?

> Yes set the `snapshot` config on `nodeos` section and also `start_block` on `evm-rpc` section.

### Stack is correctly launched but when running transactions I get an error like this one on `hyperion-api` logs:

```
2022-02-10T01:15:37: In raw, tx is: f86c80....
2022-02-10T01:15:37: transaction declares authority 
'{"actor":"rpc.evm","permission":"rpc"}', but does not have signatures for it.
2022-02-10T01:15:37: RPCERROR: 2022-02-10T01:15:37.913Z -
{"error":{"code":3,"message":"transaction declares authority...
```

> Setup correct signing account on `telos-evm` section of `evm-rpc` configuration.

### Is `kubernetes` supported?

> No
