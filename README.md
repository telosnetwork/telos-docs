# Telos Docs

Welcome to the Telos Docs. The Telos documentation is aimed to provide a list of comprehensive guides in building on Telos for web2 and web3 developers. You can fork the docs and work in a local environment or do a PR directly on one of the pages. 

**Please reach out** [EVM](https://t.me/TelosEVMDevs) or [Dapps](https://t.me/dappstelos) development channels. 



Our docs are built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

https://docs.telos.net will auto-update based on commits to the `master` branch, it is hosted in Cloudflare Pages.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```
