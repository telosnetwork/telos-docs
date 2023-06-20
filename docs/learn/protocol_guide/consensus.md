# Consensus 


# Overview

An Antelope blockchain is a highly efficient, deterministic, distributed state machine that can operate in a decentralized fashion. The blockchain keeps track of transactions within a sequence of interchanged blocks. Each block cryptographically commits to the previous blocks along the same chain. It is therefore intractable to modify a transaction recorded on a given block without breaking the cryptographic checks of successive blocks. This simple fact makes blockchain transactions immutable and secure.


## Block Producers  

Block producers are responsible for maintaining the blockchain by running nodes that perform block production and block validation. Producers are elected by TLOS holders. Each producer runs an instance of an Antelope node through nodeos service.  For this reason, producers that are on the active schedule to produce blocks are also called "active" or "producing" nodes.


### The Need for Consensus  

Block validation presents a challenge among any group of distributed nodes. A consensus model must be in place to validate such blocks in a fault tolerant way within the decentralized system. Consensus is the way for such distributed nodes and users to agree upon the current state of the blockchain

## Telos Consensus(DPoS = aBFT)

#### Layer 1: Native Consensus (aBFT)
This layer ultimately decides which blocks, received and synced among the elected producers, eventually become final, and hence permanently recorded in the blockchain. It gets a schedule of producers proposed by the second layer  and uses that schedule to determine which blocks are correctly signed by the appropriate producer. For byzantine fault tolerance, the layer uses a two-stage block confirmation process by which a two-thirds supermajority of producers from the current scheduled set confirm each block twice. The first confirmation stage proposes a last irreversible block (LIB). The second stage confirms the proposed LIB as final. At this point, the block becomes irreversible. This layer is also used to signal producer schedule changes, if any, at the beginning of every schedule round.

#### Antelope Algorithmic Finality
The Antelope consensus model achieves algorithmic finality (differing from the merely probabilistic finality that at best can be achieved in Proof of Work models) through the signatures from the chosen set of special participants (active producers) that are arranged in a schedule to determine which party is authorized to sign the block at a particular time slot. Changes to this schedule can be initiated by privileged smart contracts running on the Antelope blockchain, but any initiated changes to the schedule do not take effect until after the block that initiated the schedule change has been finalized by two stages of confirmations. Each stage of confirmations is performed by a supermajority of producers from the current scheduled set of active producers.

#### Layer 2: Delegated PoS (DPoS)
The Delegated PoS layer introduces the concepts of tokens, staking, voting/proxying, vote decay, vote tallying, producer ranking, and inflation pay. This layer is also in charge of generating new producer schedules from the rankings generated from producer voting. This occurs in schedule rounds of approximately two minutes (126 seconds) which is the period it takes for a block producer to be assigned a timeslot to produce and sign blocks. The timeslot lasts a total of 6 seconds per producer, which is the producer round, where a maximum of 12 blocks can be produced and signed. The DPoS layer is enabled by WASM smart contracts.
#### Stakeholders and Delegates
The actual selection of the active producers (the producer schedule) is open for voting every schedule round and it involves all Antelope stakeholders who exercise their right to participate. In practice, the rankings of the active producers do not change often, though. The stakeholders are regular Antelope account holders who vote for their block producers of preference to act on their behalf as DPoS delegates. A major departure from regular DPoS, however, is that once elected, all block producers have equal power regardless of the ranking of votes obtained. In other DPoS models, voting power is proportional to the number of votes obtained by each delegate.

## The Consensus Process
The Antelope consensus process consists of two parts:

- Producer voting/scheduling - performed by the DPoS layer 2
- Block production/validation - performed by the native consensus layer 1

These two processes are independent and can be executed in parallel, except for the very first schedule round after the boot sequence when the blockchain’s first genesis block is created.

## Producer Voting/Scheduling
The voting of the active producers to be included in the next schedule is implemented by the DPoS layer. Strictly speaking, a token holder must first stake some tokens to become a stakeholder and thus be able to vote with a given staking power.

#### Voting Process
Each Antelope stakeholder can vote for up to 30 block producers in one voting action. The top 21 elected producers will then act as DPoS delegates to produce and sign blocks on behalf of the stakeholders. The remaining producers are placed in a standby list in the order of votes obtained. The voting process repeats every schedule round by adding up the number of votes obtained by each producer. Producers that are not voted on get to keep their old votes.

#### Producers schedule
After the producers are voted on and selected for the next schedule, they are simply sorted alphabetically by producer name. This determines the production order. Each producer receives the proposed set of producers for the next schedule round within the very first block to be validated from the current schedule round that is about to start. When the first block that contains the proposed schedule is deemed irreversible by a supermajority of producers plus one, the proposed schedule becomes active for the next schedule round.

#### Production Parameters
The Antelope block production schedule is divided equally among the elected producers. The producers are scheduled to produce an expected number of blocks each schedule round, based on the following parameters (per schedule round):

Parameter	Description	Default	Layer
P (producers)	number of active producers	21	2
Bp (blocks/producer)	number of contiguous blocks per producer	12	1
Tb (s/block)	Production time per block (s: seconds)	0.5	1
It is important to mention that Bp (number of contiguous blocks per producer), and Tb (production time per block) are layer 1 consensus constants. In contrast, P (number of active producers) is a layer 2 constant configured by the DPoS layer, which is enabled by WASM contracts.

The following variables can be defined from the above parameters (per schedule round):

Variable	Description	Equation
B (blocks)	Total number of blocks	Bp (blocks/producer) x P (producers)
Tp (s/producer)	Production time per producer	Tb (s/block) x Bp (blocks/producer)
T (s)	Total production time	Tp (s/producer) x P (producers)
Therefore, the value of P, being defined at layer 2, can change dynamically in an Antelope blockchain. In practice, however, N is strategically set to 21 producers, which means that 15 producers are required for a two-thirds supermajority of producers plus one to reach consensus.

#### Production Default Values
With the current defaults: P=21 elected producers, Bp=12 blocks created per producer, and a block produced every T=0.5 seconds, current production times are as follows (per schedule round):

Variable	Value
Tp: Production time per producer	Tp = 0.5 (s/block) x 12 (blocks/producer) ⇒ Tp = 6 (s/producer)
T: Total production time	T = 6 (s/producer) x 21 (producers) ⇒ T = 126 (s)
When a block is not produced by a given producer during its assigned time slot, a gap results in the blockchain.

## Block Lifecycle
Blocks are created by the active producer on schedule during its assigned timeslot, then relayed to other producer nodes for syncing and validation. This process continues from producer to producer until a new schedule of producers is approved at a later schedule round. When a valid block meets the consensus requirements (see 3. Antelope Consensus), the block becomes final and is considered irreversible. Therefore, blocks undergo three major phases during their lifespan: production, validation, and finality. Each phase goes through various stages as well.

#### Block Structure
As an inter-chained sequence of blocks, the fundamental unit within the blockchain is the block. A block contains records of pre-validated transactions and additional cryptographic overhead such as hashes and signatures necessary for block confirmation, re-execution of transactions during validation, blockchain replays, protection against replay attacks, etc. (see block schema below).

__block schema__

![BlockSchema](/img/block_schema.png)


#### Block Production
During each schedule round of block production, the producer on schedule must create Bp=12 contiguous blocks containing as many validated transactions as possible. Each block is currently produced within a span of Tb=500 ms (0.5 s). To guarantee sufficient time to produce each block and transmit it to other nodes for validation, the block production time is further divided into two configurable parameters:

- maximum processing interval: time window to push transactions into the block (currently set at 200 ms).
- minimum propagation time: time window to propagate blocks to other nodes (currently set at 300 ms).
All loose transactions that have not expired yet, or dropped as a result of a previously failed validation, are kept in a local queue for both block inclusion and syncing with other nodes. During block production, the scheduled transactions are applied and validated by the producer on schedule, and if valid, pushed to the pending block within the processing interval. If the transaction falls outside this window, it is unapplied and rescheduled for inclusion in the next block. If there are no more block slots available for the current producer, the transaction is picked up eventually by another producing node (via the peer-to-peer protocol) and pushed to another block. The maximum processing interval is slightly less for the last block (from the producer round of Bp blocks) to compensate for network latencies during handoff to the next producer. By the end of the processing interval, no more transactions are allowed in the pending block, and the block goes through a finalization step before it gets broadcasted to other block producers for validation.

Blocks go through various stages during production: apply, finalize, sign, and commit.

#### Apply Block
Apply block essentially pushes the transactions received and validated by the producing node into a block. Internally, this step involves the creation and initialization of the block header and the signed block instance. The signed block instance simply extends the block header with a signature field. This field eventually holds the signature of the producer that signs the block. Furthermore, recent changes in Antelope allow multiple signatures to be included, which are stored in a header extensions field.

#### Finalize Block
Produced blocks need to be finalized before they can be signed, committed, relayed, and validated. During finalization, any field in the block header that is necessary for cryptographic validation is computed and stored in the block. This includes generating both merkle tree root hashes for the list of action receipts and the list of transaction receipts pushed to the block.

#### Sign Block
After the transactions have been pushed into the block and the block is finalized, the block is ready to be signed by the producer. This involves computing a signature digest from the serialized contents of the block header, which includes the transaction receipts included in the block. After the block is signed with the producer’s private key, the signature digest is added to the signed block instance. This completes the block signing.

#### Commit Block
After the block is signed, it is committed to the local chain. This pushes the block to the reversible block database (see Network Peer Protocol: 2.2.3. Fork Database). This makes the block available for syncing with other nodes for validation (see the Network Peer Protocol for more information about block syncing).

#### Block Validation
Block validation is a fundamental operation necessary to reach consensus within an Antelope blockchain. During block validation, producers receive incoming blocks from other peers and confirm the transactions included within each block. Block validation is about reaching enough quorum among active producers to agree upon:

- The integrity of the block and the transactions it contains.
- The deterministic, chronological order of transactions within each block.
The first step towards validating a block begins when a block is received by a node. At this point, some safety checks are performed on the block. If the block does not link to an already known block or it matches the block ID of any block already received and processed by the node, the block is discarded. If the block is new, it is pushed to the chain controller for processing.

#### Push Block
When the block is received by the chain controller, the software must determine where to add the block within the local chain. The fork database, or Fork DB for short, is used for this purpose. The fork database holds all the branches with reversible blocks that have been received but are not yet finalized. To that end, the following steps are performed:

1. Add block to the fork database.
2. If block is added to the main branch that contains the current head block, apply block; or

3. If block must be added to a different branch, then:

    - if that branch now becomes the preferred branch compared to the current main branch: rewind all blocks up to the nearest common ancestor (and rollback the database state in the process), re-apply all blocks in the different branch, add the new block and apply it. That branch now becomes the new main branch.
    - otherwise: add the new block to that branch in the fork database but do nothing else.


In order for the block to be added to fork database, some block validation must occur. Block header validation must always be done before adding a block to the fork database. And if the block must be applied, some validation of the transactions within the block must occur. The degree to which transactions are validated depends on the validation mode that nodeos is configured with. Two block validation modes are supported: full validation (the default mode), and light validation.
#### Full Validation
In full validation mode, every transaction that is applied is fully validated. This includes verifying the signatures on the transaction and checking authorizations.
#### Light Validation
In light validation mode, blocks signed by trusted producers (which can be configured locally per node) can skip some of the transaction validation done during full validation. For example, signature verification is skipped and all claimed authorizations on actions are assumed to be valid.

#### Block Finality
Block finality is the final outcome of Antelope consensus. It is achieved after a supermajority of active producers have validated the block according to the consensus rules (see 3.1. Layer 1: Native Consensus (aBFT)). Blocks that reach finality are permanently recorded in the blockchain and cannot be undone. In this regard, the last irreversible block (LIB) in the chain refers to the most recent block that has become final. Therefore, from that point backwards the transactions that have been recorded on the blockchain cannot be reversed, tampered, or erased.

#### Goal of Finality
The main point of finality is to give users confidence that transactions that were applied prior and up to the LIB block cannot be modified, rolled back, or dropped. The LIB block can also be useful for active nodes to determine quickly and efficiently which branch to build off from, regardless of which is the longest one. This is because a given branch might be longer without containing the most recent LIB, in which case a shorter branch with the most recent LIB must be selected.