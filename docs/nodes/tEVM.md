---
sidebarId: 5
id: "TEVM-local-guide"
hide_table_of_contents: true
---
# Telos EVM Controller (tevmc) Guide
### Coming soon.

`tevmc` is an upcoming python 3.x library / command line tool to help bootstrap and manage Telos EVM local, testnet and mainnet nodes through automating the startup and maintance of Telos nodes. It is geared towards inexperienced node operators for quick setup. `tevmc` removes the need to manually download and configure `nodeos`.

`tevmc` uses a spesific self-contained directory structure (docker) for each individual node to create a new node directory from a template for each spesific usecase (local, testnet, or mainnet). The first time you build the `tevmc` image, it will populate the different config files based on the unified config file (`tevmc.json`). After the docker images are built, the node can be launched.

When the `tevmc` detect changes in the `tevmc.json` file, it will prompt the recreation of those respective config files from the template to ensure that each node is up to date.

Follow us on our social media platforms to make sure you do not miss the launch of `tevmc`!
