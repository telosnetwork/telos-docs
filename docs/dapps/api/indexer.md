## Telos EVM Indexer API

Our API mainly uses swagger for documentation, you can consult it using the following URLs:

- Testnet: [api.testnet.teloscan.io](http://api.testnet.teloscan.io/swagger/)
- Mainnet: [api.teloscan.io](http://api.teloscan.io/swagger/)

We do however implement some advanced fields, like the `topics` filter field, for which you will find the documentation below

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
