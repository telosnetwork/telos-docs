# Telos Native Installation


_**The purpose of this document is to help you understand the components and utility of the Telos native EOSIO platform**_

--------------------                           ------

## Overview

Telos inherits the EOSIO core blockchain software for native.

The Telos native platform provides a number of components and libraries which are used to operate blockchain nodes, collect blockchain data, to interact with these nodes, and to build smart contracts. The main component is nodeos (node + EOSIO = nodeos). This is the core EOSIO node daemon that can be configured with plugins to run a node. Example uses are block production, dedicated API endpoints, and local development. Cleos (CLI + EOSIO = cleos) is a command line interface which interacts with nodeos, allowing you to send commands and actions to a blockchain. Cleos also interacts with keosd (key + EOSIO = keosd), a local component that securely stores EOSIO keys.

--------------------------------                -------------

# Toolkit

![EOSIO](/img/eosio_development_lifecycle.png)

The Telos platform at protocol level is made out of the following components and toolchain:

**Nodeos**: For working with Nodes

**Cleos**: CLI for sending commands and actions to the blockchain

**Keosd**: The component that securely stores Telos keys in wallets

**EOSIO.CDT**: Toolchain for WebAssembly(Wasm) and a set of tools to facilitate smart contract writing for the Telos native blockchain


## Set Up Local Development Environment

1. Download EOSIO software. 
    - Install EOSIO Binaries: Steps to install EOSIO pre-built binaries

## Prebuilt Binaries

Prebuilt EOSIO software packages are available for the operating systems below. Find and follow the instructions for your OS:

### Mac OS X:

#### Mac OS X Brew Install
```sh
brew tap eosio/eosio
brew install eosio
```
Note: On MacOS 10.15 (Catalina), there is a chance to face the linking error below which prevents successful installation of EOSIO:
```
Reinstalling 1 broken dependent from source:
eosio/eosio/eosio
```
The following Homebrew commands will resolve this issue:
```sh
brew link eosio
```
#### Mac OS X Brew Uninstall
```sh
brew remove eosio
```

### Ubuntu Linux:

#### Ubuntu 20.04 Package Install
```sh
wget https://github.com/eosio/eos/releases/download/v2.1.0/eosio_2.1.0-1-ubuntu-20.04_amd64.deb
sudo apt install ./eosio_2.1.0-1-ubuntu-20.04_amd64.deb
```
#### Ubuntu 18.04 Package Install
```sh
wget https://github.com/eosio/eos/releases/download/v2.1.0/eosio_2.1.0-1-ubuntu-18.04_amd64.deb
sudo apt install ./eosio_2.1.0-1-ubuntu-18.04_amd64.deb
```
#### Ubuntu 16.04 Package Install
```sh
wget https://github.com/eosio/eos/releases/download/v2.1.0/eosio_2.1.0-1-ubuntu-16.04_amd64.deb
sudo apt install ./eosio_2.1.0-1-ubuntu-16.04_amd64.deb
```
#### Ubuntu Package Uninstall
```sh
sudo apt remove eosio
```

### RPM-based (CentOS, Amazon Linux, etc.):

#### RPM Package Install CentOS 7
```sh
wget https://github.com/eosio/eos/releases/download/v2.1.0/eosio-2.1.0-1.el7.x86_64.rpm
sudo yum install ./eosio-2.1.0-1.el7.x86_64.rpm
```
#### RPM Package Install CentOS 8
```sh
wget https://github.com/eosio/eos/releases/download/v2.1.0/eosio-2.1.0-1.el8.x86_64.rpm
sudo yum install ./eosio-2.1.0-1.el8.x86_64.rpm
```

#### RPM Package Uninstall
```sh
sudo yum remove eosio
```

## Uninstall Script
To uninstall the EOSIO built/installed binaries and dependencies, run:
```sh
./scripts/eosio_uninstall.sh
```

------    --------------                           ------

## Next Steps 

__head over to the overview page and get started with Creating a Development Wallet__

- Create Development Wallet: Cleos intro walkthrough
- Start Keosd and Nodeos: Walkthrough to start Keosd and Nodeos
- Create Development Accounts: Account generation walkthrough






