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

- [`config`](./config.md#module-config)
- [`config.default.local`](./local-template.md#module-configdefaultlocal)
- [`config.default.mainnet`](./mainnet-template.md#module-configdefaultmainnet)
- [`config.default.testnet`](./testnet-template.md#module-configdefaulttestnet)
- [`testing`](./testing.md#module-testing)
- [`testing.database`](./testing-database.md#module-testingdatabase)
- [`utils`](./utils.md#module-utils)
- [`tevmc`](./tevm-controller.md#module-tevmc)

## Classes

- [`database.ESDuplicatesFound`](./testing-database.md#class-esduplicatesfound)
- [`database.ESGapFound`](./testing-database.md#class-esgapfound)
- [`database.ElasticDataIntegrityError`](./testing-database.md#class-elasticdataintegrityerror)
- [`database.ElasticDriver`](./testing-database.md#class-elasticdriver)
- [`database.InternalEvmTransaction`](./testing-database.md#class-internalevmtransaction)
- [`database.StorageEosioAction`](./testing-database.md#class-storageeosioaction)
- [`database.StorageEosioDelta`](./testing-database.md#class-storageeosiodelta)
- [`database.StorageEvmTransaction`](./testing-database.md#class-storageevmtransaction)
- [`tevmc.TEVMCException`](./tevm-controller.md#class-tevmcexception)
- [`tevmc.TEVMController`](./tevm-controller.md#class-tevmcontroller)

## Functions

- [`config.add_virtual_networking`](./config.md#function-add_virtual_networking)
- [`config.build_docker_manifest`](./config.md#function-build_docker_manifest)
- [`config.check_docker_manifest`](./config.md#function-check_docker_manifest)
- [`config.get_config`](./config.md#function-get_config)
- [`config.load_config`](./config.md#function-load_config)
- [`config.randomize_conf_creds`](./config.md#function-randomize_conf_creds)
- [`config.randomize_conf_ports`](./config.md#function-randomize_conf_ports)
- [`testing.bootstrap_test_stack`](./testing.md#function-bootstrap_test_stack)
- [`testing.get_marker`](./testing.md#function-get_marker)
- [`testing.maybe_get_marker`](./testing.md#function-maybe_get_marker)
- [`testing.open_web3`](./testing.md#function-open_web3)
- [`testing.open_websocket_web3`](./testing.md#function-open_websocket_web3)
- [`testing.tevm_node`](./testing.md#function-tevm_node)
- [`database.format_block_numbers`](./testing-database.md#function-format_block_numbers)
- [`database.get_suffix`](./testing-database.md#function-get_suffix)
- [`database.index_to_suffix_num`](./testing-database.md#function-index_to_suffix_num)
- [`utils.add_0x_prefix`](./utils.md#function-add_0x_prefix)
- [`utils.decode_hex`](./utils.md#function-decode_hex)
- [`utils.docker_stream_logs`](./utils.md#function-docker_stream_logs): Streams logs from a running Docker container.
- [`utils.encode_hex`](./utils.md#function-encode_hex)
- [`utils.from_wei`](./utils.md#function-from_wei): Takes a number of wei and converts it to any other ether unit.
- [`utils.is_0x_prefixed`](./utils.md#function-is_0x_prefixed)
- [`utils.is_boolean`](./utils.md#function-is_boolean)
- [`utils.is_bytes`](./utils.md#function-is_bytes)
- [`utils.is_dict`](./utils.md#function-is_dict)
- [`utils.is_hex`](./utils.md#function-is_hex)
- [`utils.is_hexstr`](./utils.md#function-is_hexstr)
- [`utils.is_integer`](./utils.md#function-is_integer)
- [`utils.is_list`](./utils.md#function-is_list)
- [`utils.is_list_like`](./utils.md#function-is_list_like)
- [`utils.is_null`](./utils.md#function-is_null)
- [`utils.is_number`](./utils.md#function-is_number)
- [`utils.is_string`](./utils.md#function-is_string)
- [`utils.is_text`](./utils.md#function-is_text)
- [`utils.is_tuple`](./utils.md#function-is_tuple)
- [`utils.remove_0x_prefix`](./utils.md#function-remove_0x_prefix)
- [`utils.to_int`](./utils.md#function-to_int): Converts value to its integer representation.
- [`utils.to_wei`](./utils.md#function-to_wei): Takes a number of a unit and converts it to wei.

