---
title: Voting
sidebar_position: 6
---


# Voting

## Voter Registration

The first step to becoming a voter is voter registration. Successful registration will open a zero-balance account for the new voter, allowing them to obtain tokens and cast votes and interact with any future or existing ballot launched by the treasury.

**Find a Treasury to Join**

Finding a Treasury to join is easy - just browse the treasury table and get the treasury symbol.

**Consider the Access Method**

Some treasuries are not open to the public and are instead only available based on an invite from a referrer. Typically the referrer must already be a voter for that treasury, but more tightly controlled `private` ballots require an invite from the treasury manager.

| Access Method | Description |
| :--- | :--- |
| Public | Open to everyone |
| Private | Requires referral by manager |
| Invite | Requires referral by voter |

**Call `regvoter()`**

Once a suitable treasury has been found, the voter \(or the referrer\) must call the `regvoter()` action and supply the following arguments:

* `voter`: This is the name of the new voter's Telos account.

  EX: `testaccounta` or `craig.tf`

* `treasury_symbol`: This is the symbol of the treasury to join. Treasury symbols are expressed as the token's precision \(i.e. the number of decimal places it has\) followed by the ticker symbol of the treasury token.

  EX: `2,TEST` or `4,VOTE`

* `referrer` \(Optional\): This is the account name of the referrer, if applicable. This account will authorize the registration of the `voter` account. If there is no referrer, then use `null`.

  EX: `peter.tf` or `null`

### Voting

After successful registration, the voter is allowed to begin casting votes on ballots.

1. **Obtain Tokens**

Once a voter is registered they must obtain tokens in order to cast a vote. The method for acquiring tokens will vary based on the treasury and project, but in general tokens can be acquired through a purchase, as a gift from another voter, or through the treasury manager directly.

1. **Find an Open Ballot**

After acquiring a balance of tokens, a voter can cast votes using the weight of those tokens. Any ballot with a status of `voting` is currently accepting votes.

1. **Cast Your Vote**

Once an open ballot has been found, all that's left to do is vote! Voters can submit their votes to the ballot by calling the `castvote()` action and supplying the following arguments:

* Voter

  This is the name of the voter's account.

  EX: `craig.tf`

* Ballot Name

  This is the name of the ballot to vote on.

  EX: `ballot1`

* Options

  This is the list of options that the voter wishes to vote on. The voter can vote for as many ballot options as they like, up to the max options limit set by the ballot.

  EX: `["option1", "option3", ...]`

### Unvoting

Sometimes voters want to retract previously submitted votes. Note that unvoting will rollback all votes cast on a ballot by a single user, but the vote receipt will remain on-chain until the ballot has reached its completion. This design allows the vote to track work performed on it and ensures that voters can't unvote and erase vote history.

### Staking and Unstaking

Certain treasuries will allow or disallow staking of tokens. If staking is allowed, vote weights will be pulled from the voter's staked amount instead of liquid when casting votes.

## Voters Table

Scope: `your-voter-name`

| Field | Type | Description |
| :--- | :--- | :--- |
| liquid | asset | Balance of liquid tokens. |
| staked | asset | Balance of staked tokens. |
| staked\_time | time\_point\_sec | Time point the last stake or unstake occurred. |
| delegated | asset | Tokens delegated to a registered delegate. |
| delegated\_to | name | The delegate account to which the voter's tokens are delegated. |
| delegation\_time | time\_point\_sec | Time point the last delegation or undelegation occurred. |

## Votes Table

Scope: `ballot-name`

| Field | Type | Description |
| :--- | :--- | :--- |
| voter | name | Account name of the voter. |
| is\_delegate | bool | True if the voter account is a delegate. |
| raw\_votes | asset | Amount of raw tokens cast for this vote. |
| weighted\_votes | map&lt;name, asset&gt; | Map of ballot option -&gt; total votes. |
| vote\_time | time\_point\_sec | Time point of vote. |



