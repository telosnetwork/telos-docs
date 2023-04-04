---
sidebar_positon: 1
---

# EVM Indexer API

The EVM Indexer indexes all EVM transactions, traces, accounts, blocks, logs for Telos EVM. It also indexes derived data such as token balances, nfts, approvals & transfers.

Our API exposing the indexer's data mainly uses swagger for documentation, you can consult it using the following URLs:

- Testnet: [api.testnet.teloscan.io](http://api.testnet.teloscan.io/swagger/)
- Mainnet: [api.teloscan.io](http://api.teloscan.io/swagger/)

However we also implement some advanced fields, like the `topics` filter field, for which you will find the documentation below:

## Topics filter

Two routes implement a filter by topics:

- `/contract/{ADDRESS}/logs`
- `/event/{EVENT}/logs`

Using the `topics` field of those route, this filter allows you to find rows by topics.

#### Single topic
`{"topics[1]": {"_eq": "0x077511a636ba1f10551cc7b89c13ff66a6ac9344e8a917527817a9690b15af7a"}}`

#### Multiple topics

`{"_or": [{"topics[1]": {"_eq": "0x077511a636ba1f10551cc7b89c13ff66a6ac9344e8a917527817a9690b15af7a"}}, {"topics[1]": {"_eq": "0x0a24ea634Ce1f105E2cc7b89c13ff66a6ac9344e8a917527817a9690b15af7a"}}]}`

#### Available operators

- _and
- _or
- _ne
- _eq
