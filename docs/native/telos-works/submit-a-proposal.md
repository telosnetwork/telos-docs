---
description: Follow the guide below to draft and run a Telos Works Proposal
---

# Submit a Proposal

## Categories

| Category Name | Identifier | Description                                                            |
| ------------- | ---------- | ---------------------------------------------------------------------- |
| Marketing     | marketing  | Marketing content including audio, video, articles, etc.               |
| Apps          | apps       | Apps that interact with Telos.                                         |
| Developers    | developers | Developer-specific content such as dev tools, libraries, modules, etc. |
| Education     | education  | Educational material such as tutorials, guides, workshops, etc.        |

## 1. Draft a Proposal

To draft a new Telos Works Proposal, simply call the `draftprop()` action on the `works.decide` contract.

### ACTION `draftprop`

| Parameter Name        | Parameter Type | Description                                  | Example                       |
| --------------------- | -------------- | -------------------------------------------- | ----------------------------- |
| title                 | string         | Proposal title                               | "Example Proposal 1"          |
| description           | string         | Proposal description                         | "Short tweet-length subtitle" |
| content               | string         | Proposal main content or link                | "someipfshash"                |
| proposal\_name        | name           | Name of proposal                             | prop1                         |
| proposer              | name           | Account name of proposer                     | craig.tcd                     |
| category              | name           | Category name                                | apps                          |
| total\_requested      | asset          | Total requested funds                        | 50,000.0000 TLOS              |
| milestones (optional) | uint16\_t      | Number of milestones proposal is broken into | 5                             |

{% tabs %}
{% tab title="Cleos" %}
```
cleos push action works.decide draftprop '{ ... }' -p proposer
```
{% endtab %}

{% tab title="eosjs" %}
```
```
{% endtab %}
{% endtabs %}

## 2. Edit Milestones (Optional)

By default, proposals are drafted with an equal amount of TLOS for each milestone, but while the proposal is still in draft mode milestones can be edited to request specific amounts.

In the example above, we requested 50,000 TLOS across 5 milestones, meaning the default value for each milestone is 10,000 TLOS. These values can be edited to craft the most appropriate milestone breakdown for a given proposal. Here are a few examples:

| Milestone Number | Default     | Example A   | Example B   | Example C   |
| ---------------- | ----------- | ----------- | ----------- | ----------- |
| 1                | 10,000 TLOS | 5,000 TLOS  | 15,000 TLOS | 1 TLOS      |
| 2                | 10,000 TLOS | 5,000 TLOS  | 1,000 TLOS  | 1 TLOS      |
| 3                | 10,000 TLOS | 5,000 TLOS  | 9,000 TLOS  | 1 TLOS      |
| 4                | 10,000 TLOS | 5,000 TLOS  | 20,000 TLOS | 1 TLOS      |
| 5                | 10,000 TLOS | 30,000 TLOS | 5,000 TLOS  | 49,996 TLOS |

Each lettered example above outlines a valid milestone breakdown for a proposal. It's up to the proposer to determine what structure would ideal for their project. In general, it's best to craft a proposal that asks for fewer TLOS up front, since those proposals require much less risk and the proposer has an opportunity throughout the early milestones to prove they can deliver results.

{% hint style="info" %}
Note that there is a platform-wide cap enforced on the total requested TLOS for a single project. Editing milestones will automatically update this total requested amount and will only allow the proposer to request an amount less than or equal to the defined maximum.
{% endhint %}

{% tabs %}
{% tab title="Cleos" %}
```
cleos push action works.decide editms '{ ... }' -p proposer
```
{% endtab %}

{% tab title="eosjs" %}
```
```
{% endtab %}
{% endtabs %}

## 3. Launch Proposal

When drafting has been completed by the proposer, the proposal can be officially launched. This will open voting to the public and prevent any further alteration by the proposer.

### ACTION `launchprop`

| Parameter Name | Parameter Type | Description      | Example    |
| -------------- | -------------- | ---------------- | ---------- |
| proposal\_name | name           | Name of proposal | worksprop1 |

{% tabs %}
{% tab title="Cleos" %}
```
cleos push action works.decide launchprop '{ ... }' -p proposer
```
{% endtab %}

{% tab title="eosjs" %}
```
```
{% endtab %}
{% endtabs %}

{% hint style="warning" %}
This action will charge a fee to the proposer's works.decide account balance. The fee is calculated as 5% of the total requested funding from the proposal, plus a flat 10 TLOS fee to cover the Telos Decide ballot fee.&#x20;

Note that if the proposal manages to pass a certain acceptance and quorum threshold, the 5% fee will be returned to the proposer's account.
{% endhint %}

## 4. Vote On Telos Decide

Once the proposal has been launched, it will be open for voting on the Telos Decide platform. Any registered voter can cast the full weight of their TLOS tokens towards one of the following ballot options:

| Option Name | Description                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------------ |
| yes         | Indicates approval of the current milestone.                                                           |
| no          | Indicates disapproval of the current milestone.                                                        |
| abstain     | Indicates neither approval nor disapproval, but votes will still count towards the quorum requirement. |

{% hint style="info" %}
Note that in order to pass, a vote must achieve the pass threshold and the quorum threshold as defined in the Telos Decide config. The pass threshold represents the ratio of yes to no votes required, and the quorum threshold is simply the minimum participation required for the vote to be considered valid.
{% endhint %}

## 5. Close First Milestone

After the voting period has ended, it's time to close the milestone and allow Telos Works to render a decision based on the results. To do this, call the `closems` action:

### ACTION `closems`

| Parameter Name | Type | Description                | Example    |
| -------------- | ---- | -------------------------- | ---------- |
| proposal\_name | name | Name of the Works Proposal | worksprop1 |

{% tabs %}
{% tab title="Cleos" %}
```
cleos push action works.decide closems '{ ... }' -p proposer
```
{% endtab %}

{% tab title="eosjs" %}
```
```
{% endtab %}
{% endtabs %}

## 6. Submit Milestone Report

If the milestone passed, then the proposer must submit a milestone report before claiming funds. To submit a milestone report, call the `submitreport` action:

### ACTION `submitreport`

| Parameter Name | Type   | Description                      | Example        |
| -------------- | ------ | -------------------------------- | -------------- |
| proposal\_name | name   | Name of the Works Proposal       | worksprop1     |
| report         | string | Link to milestone report content | "someipfshash" |

{% tabs %}
{% tab title="Cleos" %}
```
cleos push action works.decide submitreport '{ ... }' -p proposer
```
{% endtab %}

{% tab title="eosjs" %}
```
```
{% endtab %}
{% endtabs %}

## 7. Claim Funds

Finally, to claim funding from an approved milestone, call the `claimfunds` action:

### ACTION `claimfunds`

| Parameter Name | Type | Description                | Example    |
| -------------- | ---- | -------------------------- | ---------- |
| proposal\_name | name | Name of the Works Proposal | worksprop1 |

{% tabs %}
{% tab title="Cleos" %}
```
cleos push action works.decide claimfunds '{ ... }' -p proposer
```
{% endtab %}

{% tab title="eosjs" %}
```
```
{% endtab %}
{% endtabs %}

## 8. Launch Next Milestone (If Applicable)

If there are remaining milestones left on the proposal, the next one can be launched with the `nextms` action:

### ACTION `nextms`

| Parameter Name | Type | Description                                    | Example    |
| -------------- | ---- | ---------------------------------------------- | ---------- |
| proposal\_name | name | Name of Works Proposal                         | worksprop1 |
| ballot\_name   | name | Name of Telos Decide Ballot for next milestone | worksbal2  |

{% tabs %}
{% tab title="Cleos" %}
```
cleos push action works.decide nextms '{ ... }' -p proposer
```
{% endtab %}

{% tab title="eosjs" %}
```
```
{% endtab %}
{% endtabs %}

{% hint style="warning" %}
This action will cost a flat 10 TLOS from the proposer's balance to cover the Telos Decide ballot fee.
{% endhint %}
