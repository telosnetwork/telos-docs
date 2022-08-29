---
sidebarId: 4
id: "Telos_BP_Requirements"
---

# Telos Block Producer Requirements

The aim of this section is to clarify the minimum requirements for block producers to participate in the Telos Blockchain Network (herein referred to as the “TBN”). There are multiple levels of participation, with each level having more stringent requirements than the previous one— this is intended to address the growing requirements of the network over time.

The specifications stated herein are subject to revision, as well as when the network progresses from stage to stage — as determined by a vote of ⅔ + 1 of the current block producers at the time of the proposed revisions.

Please visit https://www.telos.net/governance and navigate to Document: Block Producer Minimum Requirements for an up to date list of block producer hardware requirements per phase.

----                                          ------           

Regardless of their level of participation, to participate in the TBN at any phase, block producers candidates are required to provide, and abide by the following:

### A. Disclosures:

1. Block Producer Account Name
2. Block Prodcuer Public Key
3. Block Producer Organization Info: 
   - Candidate Name 
   - Candidate Website URL
   - Candidate country of registration for registered entity or residence of primary owner if not a registered entity as 2-letter ISO country code.
   - Candidate server location(s):
     - Location name
     - Country as 2-letter country code
     - Latitude
     - Longitude 
4.  Network Emergency Contact(s)
    - Name
    - Email address
    - Phone number (in a non-public, password protected, repository commonly accessible to any of the 51 paid Block Producers and Standbys).
5. Block Producer Entity Ownership
   - Disclosure of each beneficial owner of block producer entity along with percentage of ownership. [Enforced by smart contract].
   - Disclosure of accepted third-party identification verification service and identification hash for each beneficial owner (* to be implemented).

### B. Practices: 
1. Sync with an approved NTP server at least once per 24 hours.
2. Adoption of account blacklist maintained by the Elected Arbitrators

## Node Requirements
### Phase One — Minimum Requirements
1. Endpoints:
   - P2P endpoint
   - HTTP API endpoint
   - HTTPS API endpoint
2. Nodes:
    **a. Testnet Node**
    - Minimum RAM (per node): 8GB
    - Minimum Disk (per node): 100GB
    - A minimum of 1,200,000 blocks (approximately 7 days) of synched and registered operation of a Telos testnet block production node.
    - Ongoing operation of a synched, registered, and publicly accessible Telos testnet block production node within 500,000 blocks (approximately 70 hours)
    - A maximum total of 1,000,000 blocks of Telos testnet non-operational time within the most recent 5,000,000 blocks (approximately 29 days). Enforcement of which commences at Telos mainnet block height 5,000,000.
   
   **b. Producing Node**
   - Minimum RAM (per node): 16GB
   - Minimum Disk (per node): 100GB
   - Firewall: Active
   - Nodeos Plugins: `chain`, `producer`.
    
    **c. Full Node:**
    - Minimum RAM (per node): 16GB;
    - Minimum Disk (per node): 100GB
    - Firewall: Active
    - Nodeos Plugins: `chain`, `chain_api`


### Phase Two — Minimum Requirements
1. Endpoints:
   - P2P endpoint
   - HTTP API endpoint
   - HTTPS API endpoint
2. Nodes
    **a. Testnet Node**
    - Minimum RAM (per node): =/> current set ram + 2GB
    - Minimum Disk (per node): 150GB
    - Firewall: Active
    - A minimum of 1,200,000 blocks (approximately 7 days) of synched and registered operation of a Telos testnet block production node.
    - Ongoing operation of a synched, registered, and publicly accessible Telos testnet block production node within 500,000 blocks (approximately 70 hours).
    - A maximum total of 1,000,000 blocks of Telos testnet non-operational time within the most recent 5,000,000 blocks (approximately 29 days).
   
   **b. Staging Net Node**
   - Minimum RAM (per node): =/> current set ram + 2GB
   - Minimum Disk (per node): 150GB
   - Firewall: Active
   - Operation of a synched, registered, and operational staging net block producer node for a period of at least 150,000 blocks (approximately 21 hours) during the most recent staging net deployment. Any period of time that a block producer’s node is unregistered or otherwise disabled or removed as the direct result of a staging net test operation shall contribute to this minimum requirement period.
    
    **c. Producing Node**
    - Minimum RAM (per node): =/> current set ram + 2GB
    - Minimum Disk (per node): 150GB
    - Firewall: Active
    - Nodeos Plugins: `chain`, `producer`
    
    **d. Full Node**
    - Minimum RAM (per node): =/> current set ram + 2GB
    - Minimum Disk (per node): 150GB
    - Firewall: Active
    - Ndeos Plugins: `chain`, `chain_api`
    - SSL Proxy


### Phase Three — Minimum Requirements

1. **Endpoints**
   - P2P endpoint
   - HTTP API endpoint
   - HTTPS API endpoint
2. **Nodes**
    **a. Testnet Node**
    - Minimum RAM (per node): =/> current set ram + 2GB
    - Minimum Disk (per node): 300GB
    - Firewall: Active
    - A minimum of 1,200,000 blocks (approximately 7 days) of synched and registered operation of a Telos testnet block production node.
    - Ongoing operation of a synched, registered, and publicly accessible Telos testnet block production node within 500,000 blocks (approximately 70 hours).
    - A maximum total of 1,000,000 blocks of Telos testnet non-operational time within the most recent 5,000,000 blocks (approximately 29 days).
    
    **b. Staging Net Node**
    - Minimum RAM (per node): =/> current set ram + 2GB
    - Minimum Disk (per node): 300GB
    - Firewall: Active
    - Operation of a synched, registered, and operational staging net block producer node for a period of at least 150,000 blocks (approximately 21 hours) during the most recent staging net deployment. Any period of time that a block producer’s node is unregistered or otherwise disabled or removed as the direct result of a staging net test operation shall contribute to this minimum requirement period.
    
    **c. Producing Node**
    - Minimum RAM (per node): =/> current set ram + 2GB
    - Minimum Disk (per node): 300GB
    - Firewall: Active
    - Nodeos Plugins: `chain`, `producer`
    
    **d. Full Node**
    - Minimum RAM (per node): =/> current set ram + 2GB
    - Minimum Disk (per node): 300GB
    - Firewall: Active
    - Nodeos Plugins: `chain`, `chain_api`
    - SSL Proxy


