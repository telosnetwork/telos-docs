# Multi-Signature Proposal on OBE


__Telos Open Block Explorer (OBE) allows for the creation of multi-sig proposed transactions.__
 
Telos OBE provides a wrapper to interact with the eosio.msig contract easily. One user creates a proposal. Another user(s) reviews the transaction and then approves it for execution.  

Telos has made it easy to propose, review, approve and execute a multi-sig transaction. 

## Overview

Now with Telos OBE, you can easily submit, review, approve, cancel, and execute new proposals without the hassle of using cleos or generating a JSON file for eosio.msig.


__Proposal actions supported by Telos OBE include:__

1. __Propose__ 
    __a.__ To submit a proposal you need the following parameters:
        i.      A proposer(the account proposing the transaction)
        ii.     A proposal name (a unique name for the proposal)
        iii.	Requested (Permission levels expected to approve the proposal).  
        iv.     trx (Proposed transaction).
2. __Approve__  
    __a.__ Approves the existing proposal.
3. __Unapprove__  
    __a.__ Revokes an existing proposal.
4. __Cancel__  
    __a.__ Cancels an existing proposal.
5. __Exec__
    __a.__ Exec action allows an executor account to execute the proposal under certain conditions:
        i.	Executer has authorization.
        ii.	Proposal name is found in the proposals table.
        iii.All requested approvals are received.
        iv.	Proposed transaction has not expired.
        v.	None of the approval accounts are in the invalidations table.
6. __Invalidate__


## Multi-transfer actions
Telos OBE offers multi-transfer actions(more than one action) within one multi-sig proposal. Just import a .csv file to execute more than one token send transaction in one go.

## Actor for approval vs. actor for authorization

__Note: There is a difference between an "actor for approval" and an "actor for authorization".__

    ●	The actor for the approval of a proposal is all the accounts required to approve a msig transaction for an account. 
    ●	The actor for authorization is the actual msig account that will perform the transaction AFTER approvers have signed.


## Walkthrough

__In this tutorial we will be creatinga  multi-sig proposal to transfer tokens from one account to another using the eosio.token contract as an example.__

Steps

1. Go to Telos OBE
2. Select "Connect" to conenct your wallet(Anchor or Cleos).   
