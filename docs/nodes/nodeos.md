---
sidebarId: 3
id: "Nodeos"
---

# Nodeos

`Nodeos` is distributed as part of the Antelope.io software suite. Each node can be configured (with specific functional plugins) to function as a:
1. Block Producing node; or as 
2. Non-producing node.

The behaviour of nodeos is determined mainly by which plug-ins are loaded and which plug-in options are used. Some plug-ins are mandatory (`chain_plugin`, `net_plugin`, and `producer_plugin`) while others are optional. For a full list of plug-ins, please visit [Nodeos Plug-ins](https://developers.eos.io/manuals/eos/latest/nodeos/plugins/index) for more details.

`cleos` (CLI + EOS) is a command line interface with REST APIs exposed by `nodeos`. `cleos`. It is required to interact with the blockchain (via `nodeos`) and manages wallets (via `keosd`). Developers can also use cleos to deploy and test Telos smart contracts.

`keosd` (Key + EOS)  is a key manager service daemon for storing private keys and signing digital messages. It provides a secure key storage medium for keys to be encrypted at rest in the associated wallet file. `keosd` also defines a secure enclave for signing transaction created by cleos or a third part library.

# Nodeos Getting Started

To install `nodeos` visit [Antelope.io Software Installation section](https://developers.eos.io/manuals/eos/latest/install/index), and follow the instructions provided. If you are new to Antelope, it is recommended that you install the [Antelope Prebuilt Binaries](https://developers.eos.io/manuals/eos/latest/install/install-prebuilt-binaries), then proceed to the Getting Started section of the Antelope Developer Portal. 

If you are an advanced developer, a block producer, or no binaries are available for your platform, you may need to Build Antelope from source instead.
