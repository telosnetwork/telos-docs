---
title: "Prerequisites"
sidebar_position: 1

---

## Antelope versions

The subsequent tutorials are up to date with the following Antelope components.

| Component | Version |
| ------ | ------ |
| [Leap](https://github.com/AntelopeIO/leap) | 3.1 |
| [CDT](https://github.com/AntelopeIO/cdt) | 3.0 |
| [eos-system-contracts](https://github.com/eosnetworkfoundation/eos-system-contracts) | 3.1 |

## Development Experience

Antelope based blockchains execute user-generated applications and code using WebAssembly (WASM). WASM is an emerging web standard with widespread support from Google, Microsoft, Apple, and industry leading companies.

At the moment the most mature toolchain for building applications that compile to WASM is clang/llvm with their C/C++ compiler. For best compatibility, it is recommended that you use the Antelope C++ toolchain.

Other toolchains in development by 3rd parties include: Rust, Python, and Solidity. While these other languages may appear simpler, their performance will likely impact the scale of application you can build. We expect that C++ will be the best language for developing high-performance and secure smart contracts and plan to use C++ for the foreseeable future.

## Operating System

The Antelope software supports the following environments for development and/or deployment:

* Ubuntu 18.04
* Ubuntu 20.04
* Ubuntu 22.04

__Note:__
 if you are developing on __Windows__, unfortunately we do not provide PowerShell ports and instructions at this time. In the future we may append PowerShell commands. In the mean-time your best bet is to use [DUNE](https://github.com/AntelopeIO/DUNE) or a VM with Ubuntu, and set up your development environment inside this VM. If you're an advanced Window's developer familiar with porting Linux instructions, you should encounter minimal issues.

### Command Line Knowledge

There are a variety of tools provided along with Antelope which requires you to have basic command line knowledge in order to interact with.

## Development Tools

We can use any text editor that, preferably, supports C++ syntax highlighting. Some of the popular editors are Sublime Text and Atom. Another option is an IDE, which provides a more sophisticated code completion and more complete development experience. You are welcome to use the software of your personal preference, but if you're unsure what to use we've provided some options for you to explore.

### Potential Editors and IDEs

- [Sublime Text](https://www.sublimetext.com/)
- [Atom Editor](https://atom.io/)
- [CLion](https://www.jetbrains.com/clion/)
- [Eclipse](http://www.eclipse.org/downloads/packages/release/oxygen/1a/eclipse-ide-cc-developers)
- [Visual Studio Code](https://code.visualstudio.com/)

[[info]]
| The resources listed above are developed, offered, and maintained by third-parties and not by Antelope coalition. Providing information, material, or commentaries about such third-party resources does not mean we endorse or recommend any of these resources. We are not responsible, and disclaim any responsibility or liability, for your use of or reliance on any of these resources. Third-party resources may be updated, changed or terminated at any time, so the information below may be out of date or inaccurate. USAGE AND RELIANCE IS ENTIRELY AT YOUR OWN RISK

<!-- validate this, or add an alternate IDE for Antelope, if any...
Alternatively, you can try out some community driven IDEs specifically developed for Antelope:

- [EOS Studio](https://www.eosstudio.io/)
-->

## What you'll learn

_Only a sample of what you'll learn_
- How to quickly spin up a node
- Manage wallets and keys
- Create Accounts
- Write some contracts
- Compilation and ABI
- Deploy contracts

## What's Next?
- [Before You Begin](./03_before-you-begin.md): Steps to download and install binaries on your system.
ngine methods and guide for governing network operations and amendments.  |