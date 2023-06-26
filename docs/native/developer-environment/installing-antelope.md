---
title: Installing Antelope.io
sidebar_position: 2
---


# Installating Antelope.io

----     -----

__This provides a walkthrough to install Antelope software using pre-built binaries and a download from source repository located at the bottom of the page for experienced developers.__

## Prebuilt Binaries

Prebuilt Antelope software packages are available for the operating systems below. Find and follow the instructions for your OS:


## Supported Operating Systems
**macOS**
- macOS (Mojave)
- macOS (Catalina)
- macOS (Monterey)

**Linux**
- Amazon Linux 2
- CentOS Linux 8.x
- CentOS Linux 7.x
- Ubuntu 20.04
- Ubuntu 18.04

## Install Antelop Binaries
----             -----
### Mac OS X:

#### Mac OS X Brew Install
```sh
brew tap eosio/eosio
brew install eosio
```
Note: On MacOS 10.15 (Catalina), there is a chance to face the linking error below which prevents successful installation of Antelope:
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


## Check if Antelope is installed

```
cleos version client
```

output: ```- v2.1.0```

__Now its time to build on Telos using the Antelope platform head over to [get started with Telos Development Wallet creation!](/native/eosio_toolkit/cleos)__

------------                                            ------------

## Download From Source Code Install Method #2

**For experienced devs and BPs**

Clone the [EOS repo](https://github.com/EOSIO/eos) and its submodules in a local folder. 

```
mkdir -p ~/eosio && cd ~/eosio
git clone --recursive https://github.com/EOSIO/eos
```


**Update Submodules** 
```
cd ~/eosio/eos
git submodule update --init --recursive
```

**Pull Changes**

```
[git checkout <branch>]  (optional)
git pull --recurse-submodules
```


### Build Antelope Binaries
Using shell scripts from source code we downloaded above.

The build script first installs all dependencies and then builds EOSIO. The script supports these Operating Systems. To run it, first change to the ~/eosio/eos folder, then launch the script:

```
cd ~/eosio/eos
./scripts/eosio_build.sh
```

We now have a temporary build binary that is executable

### Install Antelope Binaries

Execute install script

```
cd ~/eosio/eos
./scripts/eosio_install.sh
```

ALTERNATIVELY YOU CAN DO EOSIO MANUAL INSTALL 

**Antelope manual install** 

```
cd ~/eosio/eos/build
make install
```


**Test Antelope Binaries** 
Validate the software has been installed successfully.

Run test sweet via

```
cd ~/eosio/eos/build
make test
```

