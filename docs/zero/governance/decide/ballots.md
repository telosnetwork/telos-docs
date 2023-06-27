---
title: Ballots
sidebar_position: 3
---

# Ballots

## Ballot Creation

To create a new ballot, call the `newballot()` action. Note that the account publishing the ballot must also be a member of the group they wish to publish the ballot under.

**Ballot Statuses**

Ballot statuses describe the current stage of a ballot's lifecycle. All new ballots begin with the `setup` status.

| Status | Description |
| :--- | :--- |
| setup | Ballot is being drafted. |
| voting | Ballot is currently open for voting. |
| closed | Ballot is closed and final results have been rendered. |
| cancelled | Ballot was cancelled, awaiting deletion. |
| archived | Ballot is currently archived and can't be deleted. |

### Voting Methods

Voting Methods describe how a ballot will react to voters with different token balances. One method splits a voter's balance among all of their selections, and another casts their full balance on each selection, for example.

| Voting Method | Description | Raw Token Weight | Transformed Weight Per Selection |
| :--- | :--- | :--- | :--- |
| 1acct1vote | Every voter gets 1 whole token vote, regardless of account balance. Zero balances don't count. | 0.01 TEST | 1.00 TEST Each |
| 1tokennvote | Raw token weight is applied to each option selected. | 3.00 TEST | 3.00 TEST Each |
| 1token1vote | Raw token weight is split among all selections. | 3.00 TEST | 1.00 TEST Each |
| 1tsquare1v | Raw weight is split among selections and each weight squared. At ballot closure each option's total will be square-rooted | 3.00 TEST | 9.00 TEST Each |
| quadratic | Raw weight is square-rooted and split among selections. | 3.00 TEST | 9.00 Each |

**Ballot Settings**

Ballots have a range of settings that further alter their behavior.

| Setting | Description | Default |
| :--- | :--- | :--- |
| lightballot | Marks as a light ballot. | false |
| revotable | Allows revoting on the ballot. | true |
| voteliquid | Considers voter's liquid balance into vote weight. | false |
| votestake | Considers voter's staked balance into vote weight. | true |

## Table Breakdown

Table: `ballots`

Scope: `self`

| Field Name | Field Type | Description |
| :--- | :--- | :--- |
| ballot\_name | name | Name of ballot. |
| category | name | Ballot category name. |
| publisher | name | Account that published the ballot. |
| status | name | Ballot status. |
| title | string | Ballot title. |
| description | string | Tweet-length ballot description. |
| content | string | Link or hash of external content. |
| treasury\_symbol | symbol | Treasury that ballot belongs to. |
| voting\_method | name | Name of selected voting method. |
| min\_options | uint8\_t | Minimum ballot selections allowed on a vote. |
| max\_options | uint8\_t | Maximum ballot selections allowed on a vote. |
| options | map&lt;name, asset&gt; | Map of Ballot Options and their current vote tallies. |
| total\_voters | uint32\_t | Number of voters who participated on ballot. |
| total\_delegates | uint32\_t | Number of delegates who participated on ballot. |
| total\_raw\_weight | asset | Total number of raw tokens cast on ballot. |
| cleaned\_count | uint32\_t | Number of expired vote receipts that have been cleaned. |
| settings | map&lt;name, bool&gt; | Map of setting names and on/off states. |
| begin\_time | time\_point\_sec | Time ballot voting is opened. |
| end\_time | time\_point\_sec | Time ballot voting closes. |

