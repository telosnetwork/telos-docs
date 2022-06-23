---
sidebar_position: 2
---


# Getting Started/Installation

### Prerequisites
----     -----

![eosioStart](/img/EOSIO_start.png)


## Workflows

1. Set up local development environment
2. Build and deploy a basic Hello World smart contract 

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


## Check if EOSIO is installed

```
cleos version client
```

output: ```- v2.1.0```