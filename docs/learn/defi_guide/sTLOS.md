# sTLOS - EVM Single Assset Staking
The following excerpt is from an article posted on 19 July 2022, "sTLOS EVM Single Asset Staking Implementation Governance Amendment"
by Telos Foundation on Medium.

## Introduction to sTLOS
Token staking is an essential component of blockchain economies that affects tokenomics, governance, and project valuation. 
Telos users have enjoyed the benefits of substantial annual returns from Resource Exchange (REX) staking due to inflows from the Telos token reserves while still garnering Telos governance voting rights simply by staking their TLOS tokens into REX.

With the launch and growth of Telos EVM (tEVM), however, the advantages of staking enjoyed by users of native Telos features are not equitably shared by Telos EVM users. Tokens cannot be staked on tEVM into pools replicating the security, impermanent loss (IL) protection, and governance participation advantages of native TLOS staking. 
This divides the rewards to Telos users depending on the sub-platform (native or EVM) that they engage in, which is outside the ethos of the Telos community. 

This proposal aims to begin to correct this imbalance and provide other benefits, such as increasing the Total Value Locked (TVL) in DeFi protocols on the overall Telos network.

The method for addressing this is to create a staking mechanism suitable for the tEVM ecosystem that best equalizes the benefits across users of both platforms. 
This new tEVM staking mechanism is called sTLOS, or single-asset staked TLOS, on the Telos EVM that will allow users to receive similar benefits to those enjoyed by native TLOS stakers while expanding the ability for TVL on the overall Telos network.

- For a more in-depth review on sTLOS, please read the full article [here](https://medium.com/telos-foundation/stlos-evm-single-asset-staking-implementation-governance-amendment-52d5129cf339). 
- [Telos Tech Talk](https://www.telos.net/news/staking-with-benefits-stlos-erc4626-evm-single-asset-staking-governance) Staking with Benefits - sTLOS ERC4626 EVM Single Asset Staking & Governance

### Latest update:
All contracts were audited by Sentnl. Work on the ERC4626 contract requires some minor bug fixes since we identified an issue during testing; the same applies to the ESCROW unstaking contract and the Telos native REX contracts. 

All smart contracts will be re-deployed on the testnet and await end-to-end testing and re-audit. The sTLOS user interfaces are close to final development. The governance amendment proposal passed successfully, and we are currently finalizing all steps for the go-live of sTLOS. 

We are hand-selecting active community members soon to perform a final user acceptance test (UAT). We apologize for the launch delay, but we will always prioritize the security of your funds above all else.
