---
title: "References"
hide_table_of_contents: true
sidebar_position: 2
---

# References

As shown in this diagram, the Telos EVM node is composed of a minimun of five
diferent services, `tevmc` is a python package that handles:

* - Configuration creation from template
* - Building `docker` images from this templates
* - Bootstraping and managment of nodes
* - Automated test framework

![Telos EVM 1.5 node diagram](/fullstack_diagram.png)


# API Overview

## Modules

- [`config`](./config#module-config)
- [`config.default.local`](./local-template#module-configdefaultlocal)
- [`config.default.mainnet`](./mainnet-template#module-configdefaultmainnet)
- [`config.default.testnet`](./testnet-template#module-configdefaulttestnet)
- [`testing`](./testing#module-testing)
- [`testing.database`](./testing-database#module-testingdatabase)
- [`utils`](./utils#module-utils)
- [`tevmc`](./tevm-controller#module-tevmc)

## Classes

- [`database.ESDuplicatesFound`](./testing-database#class-esduplicatesfound)
- [`database.ESGapFound`](./testing-database#class-esgapfound)
- [`database.ElasticDataIntegrityError`](./testing-database#class-elasticdataintegrityerror)
- [`database.ElasticDriver`](./testing-database#class-elasticdriver)
- [`database.InternalEvmTransaction`](./testing-database#class-internalevmtransaction)
- [`database.StorageEosioAction`](./testing-database#class-storageeosioaction)
- [`database.StorageEosioDelta`](./testing-database#class-storageeosiodelta)
- [`database.StorageEvmTransaction`](./testing-database#class-storageevmtransaction)
- [`tevmc.TEVMCException`](./tevm-controller#class-tevmcexception)
- [`tevmc.TEVMController`](./tevm-controller#class-tevmcontroller)

## Functions

- [`config.add_virtual_networking`](./config#function-add_virtual_networking)
- [`config.build_docker_manifest`](./config#function-build_docker_manifest)
- [`config.check_docker_manifest`](./config#function-check_docker_manifest)
- [`config.get_config`](./config#function-get_config)
- [`config.load_config`](./config#function-load_config)
- [`config.randomize_conf_creds`](./config#function-randomize_conf_creds)
- [`config.randomize_conf_ports`](./config#function-randomize_conf_ports)
- [`testing.bootstrap_test_stack`](./testing#function-bootstrap_test_stack)
- [`testing.get_marker`](./testing#function-get_marker)
- [`testing.maybe_get_marker`](./testing#function-maybe_get_marker)
- [`testing.open_web3`](./testing#function-open_web3)
- [`testing.open_websocket_web3`](./testing#function-open_websocket_web3)
- [`testing.tevm_node`](./testing#function-tevm_node)
- [`database.format_block_numbers`](./testing-database#function-format_block_numbers)
- [`database.get_suffix`](./testing-database#function-get_suffix)
- [`database.index_to_suffix_num`](./testing-database#function-index_to_suffix_num)
- [`utils.add_0x_prefix`](./utils#function-add_0x_prefix)
- [`utils.decode_hex`](./utils#function-decode_hex)
- [`utils.docker_stream_logs`](./utils#function-docker_stream_logs): Streams logs from a running Docker container.
- [`utils.encode_hex`](./utils#function-encode_hex)
- [`utils.from_wei`](./utils#function-from_wei): Takes a number of wei and converts it to any other ether unit.
- [`utils.is_0x_prefixed`](./utils#function-is_0x_prefixed)
- [`utils.is_boolean`](./utils#function-is_boolean)
- [`utils.is_bytes`](./utils#function-is_bytes)
- [`utils.is_dict`](./utils#function-is_dict)
- [`utils.is_hex`](./utils#function-is_hex)
- [`utils.is_hexstr`](./utils#function-is_hexstr)
- [`utils.is_integer`](./utils#function-is_integer)
- [`utils.is_list`](./utils#function-is_list)
- [`utils.is_list_like`](./utils#function-is_list_like)
- [`utils.is_null`](./utils#function-is_null)
- [`utils.is_number`](./utils#function-is_number)
- [`utils.is_string`](./utils#function-is_string)
- [`utils.is_text`](./utils#function-is_text)
- [`utils.is_tuple`](./utils#function-is_tuple)
- [`utils.remove_0x_prefix`](./utils#function-remove_0x_prefix)
- [`utils.to_int`](./utils#function-to_int): Converts value to its integer representation.
- [`utils.to_wei`](./utils#function-to_wei): Takes a number of a unit and converts it to wei.

