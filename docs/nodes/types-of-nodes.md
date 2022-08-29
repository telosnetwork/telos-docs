# Types of Nodes

The main component of the Telos blockchain network is `nodeos` (node + Antelope). `nodeos` is the core node daemon that runs on every Telos node in the network and is distributed as part of the Antelope software suite. Each node can be configured to function as a

1. Block Producing node, or
2. Non-producing node (depending on the plugin's implemented).

### Producing Nodes
Producing nodes are configured for block production. They connect to the Telos peer-to-peer network and actively produce new blocks. Producing nodes produce blocks on the mainnet, if they are an assigned block producer as part of the active block producing schedule.

Each producer node (top-21 DPoS) validates all blocks and transactions it receives. The nodes of elected (top-21 DPoS) producers take turns in bundling new transactions into blocks and broadcasting them to the network.

### Non-producing nodes
Non-producing nodes also connect to the Telos peer-to-peer network, but they are not actively producing blocks. Instead, they are connected and synchronised with other peers from the Telos network.  Non-producing nodes are useful for:
- proxy nodes, 
- relaying API calls (API endpoints), 
- validating transactions, 
- monitoring the blockchain state history, and 
- broadcasting information to other nodes.

`nodeos` enables you to set up a device for local development as a single node blockchain network.
Non-producing nodes exposes one or more services publicly or privately by enabling one or more `nodeos` plug-ins, except the `producer_plugin`.

The behaviour of `nodeos` is determined mainly by which plug-ins are loaded and which plug-in options are selected. Some plug-ins are mandatory (`chain_plugin`, `net_plugin`, and `producer_plugin`) while others are optional. 

For a full list of plug-ins, please visit [Nodeos Plugins](https://developers.eos.io/manuals/eos/latest/nodeos/plugins/index).

## Telos Nodes
It's not uncommon to encounter a variety of different nodes such as: API node, Producer node, History node, and Seed node. All nodes update an internal database by applying the transactions as they arrive on incoming blocks. The difference between the node type lies in the amount of history they keep track of and the functionality they provide.

After proper installation of released Antelope.io core software, each node is implemented by the same executable, however, each node would need to set up different configurations to start. Although a block producing node can have full state history or run as an API endpoint, this would be a waste of resources. Block producing nodes should run with minimal plug-ins. Also, producing nodes should not have open network ports. We strongly recommend all node service providers to run and maintain their own nodes for reliability and security reasons.

### API Node
---------                                       --------
API nodes provide network services to client applications. They typically have account transaction histories accessible though API calls, but can vary in the amount of available history.

### History API Node
--------                                        ---------
State History (or History API) nodes are API nodes with a complete transaction history of all accounts that are used for querying transaction and account data from. There are various types of history API nodes, Hyperion being the most common on Telos.

### Seed Node   
-----------                                     --------------
Seed nodes are for peering with other nodes on the P2P network. They offer blocks to peers over the P2P protocol and accept incoming P2P connections. Seed nodes are the first nodes contacted by a freshly started node. In that sense, they serve as an entry point into the network.

Once a node has entered the network it will receive additional node addresses from its peers so all nodes can connect to each other. A seed node can also be an API node. The seed nodes are used only to locate or find complete nodes that are running the Telos Blockchain client.

When a new node wants to gain access to the network, it must connect with a seed node, which is a Telos client that is always active and has a static IP address. This client operates as a gateway to the Telos network. It is one of the first connections that Telos clients make at the beginning.

Seed nodes play an important role within the network, operating from highly trusted servers. They enable new clients to connect to the Telos network automatically and without the need for manual intervention by a user. There remaains a risk that a node may engage in malpractice that would result in a negative mpact on the network. Therefore, it is not recommended to place trust in a single seed node.

A seed node can also be an API node and the P2P list for mainnet and testnet can be found at the [node-template repo](https://github.com/telosnetwork/node-template). The genesis.json is also available there.
