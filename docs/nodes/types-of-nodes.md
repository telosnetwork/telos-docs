# Types of Nodes

In the Telos blockchain network, you might find the slightly different naming of nodes, such as an API node, Producer node, History node, and Seed node.

These Nodes are setup with plugins in the EOSIO software that is provided [EOSIO](https://developers.eos.io/manuals/eos/v2.0/nodeos/plugins/index)

After proper installation of released EOSIO core software, each type of node is implemented by the same executable, however, each node would need to set up different configurations to start the node. Although a block producing node can have full state history or run as an API endpoint, that would be a waste of resources. Block producing nodes should run with minimal plugins. Also, producing nodes should not have open network ports. We strongly recommend all node service providers to run and maintain their own nodes for reliability and security reasons.

## API Node
---------                                       --------
API nodes provide network services to client applications. They usually have account transaction histories accessible though API calls, but can vary in the amount of available history.

## History API Node
--------                                        ---------
History nodes are API nodes with a complete transaction history of all accounts that are used for querying transaction and account data from.  There are various types of history, Hyperion being the most common on Telos.

## Seed Node   
-----------                                     --------------
Seed nodes are for peering with other nodes on the P2P network.  They offer blocks to peers over the P2P protocol.



A seed node can also be an API node, and the P2P list for mainnet and testnet can be found at the [node-template](https://github.com/telosnetwork/node-template) repo, the genesis.json is also available there.