# Telos Docs

[docs.telos.net](https://docs.telos.net)

## About

Welcome to the Telos Docs. The Telos documentation is aimed to provide a list of comprehensive guides in building on Telos for web2 and web3 developers. You can fork the docs and work in a local environment or do a PR directly on one of the pages. 

**Please reach out** in [EVM](https://t.me/TelosEVMDevs) or [Dapps](https://t.me/dappstelos) development Telegram channels. 

Our docs are built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

Site will auto-update based on commits to the `master` branch, it is hosted in Cloudflare Pages.

## Recent Contributions

![Alt](https://repobeats.axiom.co/api/embed/261770e4a19da6061c5618a53bec3b3f7809db8e.svg "Repobeats analytics image")


## Installation

Clone repository and install dependencies

```
$ git clone https://github.com/telosnetwork/telos-docs.git
$ cd telos-docs
$ yarn
```

Start local development server

```
$ yarn start
```

Generate production build (in `build` directory) which can be served using any static hosting service

```
$ yarn build
```

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```
