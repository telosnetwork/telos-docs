# Types of Nodes

In the Telos blockchain network, you might find the slightly different naming of nodes, such as an API node, Producer node, State History node, and Seed node.

These Nodes are setup with plugins in the EOSIO software that is provided [EOSIO](https://developers.eos.io/manuals/eos/v2.0/nodeos/plugins/index)

After proper installation of released EOSIO core software, each type of node is implemented by the same executable, however, each node would need to set up different configurations to start the node. Although a block producing node can have full state history or run as an API endpoint, that would be a waste of resources. Block producing nodes should run with minimal plugins. Also, producing nodes should not have open network ports. We strongly recommend all node service providers to run and maintain their own nodes for reliability and security reasons.

## API Node
---------                                       --------
API nodes provide network services to client applications. They usually have account transaction histories accessible though API calls, but can vary in the amount of available history.

## State Service API Node
--------                                        ---------
State History nodes are API nodes with a complete transaction history of all accounts that are used for querying transaction and account data from. 

## Seed Node   
-----------                                     --------------
__A seed node is a special node that allows the incorporation of new nodes to the network and maintains the strength of the network at all times, by allowing them to synchronize and obtain a copy of the data from the blockchain, replicating it and adding resistance and security to it.__



Once a node has entered the network it will receive additional node addresses from its peers, so all nodes can connect to each other. A seed node can also be an API node. The Telos core software i.e. EOSIO comes with a preconfigured list of seed nodes for easy bootstrapping.

Process of a client connecting through a seed node is done by having a client connect to the seed node. The seed operates as a gateway to the Telos Network. Thus, when a new node wants to join the Telos network, it must briefly connect to a seed node. They are essentially IP address locators, and are not used for block producing or for validating blocks and transactions. Rather, they are used only so that new nodes can enter and connect to the peer network through the active nodes. 