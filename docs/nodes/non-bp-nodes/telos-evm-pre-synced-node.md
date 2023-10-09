# Telos EVM Pre-Synced Package

## Recommended Machine Specs: 
* 1TB SSD (nvme preferred)
* 32 GB RAM
* Faster clock speeds preferred over core count
* As of this writing (October 9, 2023), the uncompressed data is ~335GB.

## Prerequisites: 
* Install redis
  * `sudo apt install redis`
* Install Node Version Manager and install Node version 18 along with pm2 and yarn
  * `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`
  * `export NVM_DIR="$HOME/.nvm"`
  * `[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm`
  * `[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion`
  * `nvm install 18`
  * `npm install pm2 yarn -g`

## Download the full, pre-synced repository and untar. 
Contact the Telos Core Developers team for an updated link.

untar/gzip the telosevm.tgz file: `tar -zxvf /path/to/file/telosevm.tgz -C /destination/path`

* Contents:
  * **data** - Contains all **nodeos_data** (266GB) and all **elastic_data** (64GB)
  * **elastic** - Elastic Search 8.x binaries and configuration
  * **kibana** - Kibana 8.x binaries and configuration.
  * **nodeos** - Telos Nodeos binary and configuration
  * **telos-evm-rpc** - Telos EVM RPC service
  * **telosevm-translator** - Telos EVM translator service. This service is responsible for extracting all EVM transactions from the Telos Zero layer to be accessed by the EVM RPC service.

## Update and Build:

1. cd to the **telos-evm-rpc** directory
1. run `git pull`
1. run `yarn`
1. cd to the **telosevm-translator** directory
1. run `git pull`
1. run `yarn`

## A note about permissions
It is recommended to run all the following services under a common account and directory permissions structure. Create something like a `telos` user where admins can `sudo su - telos` and perform administrative functions.

## Set config paths as needed
Important configuration files are as follows:

* Elastic
  * /telosevm/elastic/es1/config/elasticsearc.yml
    * Set `cluster.name` to whatever you desire. Changing this will also change the log file names.
    * By default the data path is set to: `path.data: /telosevm/data/elastic_data/es1`
    * By default the log path is set to: `path.logs: /telosevm/elastic/es1/logs`
    * For simplicity, xpack security is disabled and Elastic port 9200 is limited to localhost and can also be managed by firewall. For setting up your own security needs, please see this guide: https://www.elastic.co/guide/en/elasticsearch/reference/current/security-minimal-setup.html
  * The Java Heap size has been changed from default here: `/telosevm/elastic/es1/config/jvm.options.d/heap.options` to 24GB. You may modify it as needed.
* Nodeos
  * /telosevm/nodeos/config.ini
    * Adjust `agnet-name` as needed.
* telos-evm-rpc
  * /telosevm/telos-evm-rpc/config.json
* telosevm-translator
    * /telosevm/telosevm-translator/config.json
* Kibana (Optional)
  */telosevm/kibana/config/kibana.yml

## Bring the node online:
1. Start the nodeos process
   * `/telosevm/nodeos/start.sh`
   * To confirm the node is running, `tail -f /telosevm/nodeos/logs/nodeos.log`
   * It is recommended to include this directory in your `logrotate.d` configs.
   * You will know the node is at head when the received block count increments every .5 seconds.
1. Start the Elastic Search process
   * `/telosevm/elastic/start_elastic_es1.sh`
   * To confirm no issues at startup, check logs here: `tail -f /telosevm/elastic/es1/logs/rpc4.us.telos.net.log`. If the Elastic node name is changed from the default, the log name will also change and the new name should be used.
   * The status of the node can be checked locally by running `curl -X GET "localhost:9200/_cluster/health?wait_for_status=yellow&timeout=50s&pretty"`
1. After Elastic is confirmed running and the state is green, start the Telos EVM Translator Service. After starting, this service will be managed by PM2 under the user profile that started the service.
   * Run `/telosevm/telosevm-translator/start.sh`
   * Check status by running `pm2 status`
   * Check logs by running `pm2 log telosmain-evm15-translator`
   * Start-up will go through a gap check against Elastic Search data. After the gap search is complete, it will begin pull data from the local nodeos service on port 19000. Once caught up to head, it will start syncing at 2 blocks per second.
2. After the Translator is running, the RPC service should be started. After running the start script, this process will also be managed by PM2.
   * `/telosevm/telos-evm-rpc/start.sh`
   * Check status by running `pm2 status`
   * Check logs by running `pm2 log telos-mainnet-15-RPC`

## Testing RPC
The RPC can be accessed on port 7000. When allowing outside access, it is recommended to run an nginx reverse proxy on ports 80 and 443 with an appropriate SSL certificate.

Running `curl http://localhost:7000/evm -X POST -H "Content-Type: application/json" --data '{"method":"eth_blockNumber","params":[],"id":1,"jsonrpc":"2.0"}'` should result in the latest EVM block and running this command repeatedly should result in an incrementing hex value.

## Gracefully stopping all services
All services can be gracefully stopped as follows:
* `pm2 stop all`
* `/telosevm/elastic/stop_elastic_es1.sh`
* `/telosevm/nodeos/stop.sh`

## Firewall Ports Required
This package is meant to serve as an all-in-one RPC node. If services are going to be split between servers for performance or other reasons, the follow ports will be required. 
* 8888 - Nodeos API
* 9876 - Nodeos Peering
* 19000 - Nodeos State History
* 9200 - Elastic Search
* 5601 - Kibana HTTP
* 7000 - Telos EVM RPC
* 7400 - Telos EVM RPC Websocket
* 7300 - Telos EVM Translator Websocket



