# H00KD Metadata

- [Source Code](https://github.com/Shard-Labs/h00kd-contracts/blob/develop-2.0/h00kd_metadata/src/lib.rs)

H00kd Metadata enables users to create new events, claim all kind of NFTs and create new NEAR accounts.

## Initialization Method

### init()

Initializes the contract's state by setting the H00KD account id to interact with and the Linkdrop account id to create new accounts.

```rust
#[init]
pub fn init(h00kd_contract: AccountId, linkdrop_contract: AccountId) -> Self
```

## Change Methods

### create_event()

Creates a new event by storing some of the event data and minting tho so called "genesis token".

```rust
#[payable]
pub fn create_event(
    &mut self,
    event_uri: String,
    token_metadata: TokenMetadata,
    event_starts: u64,
    event_ends: u64,
) -> Promise
```

### close_event()

Closes a given event if the conditions are fullfiled. All remaining deposit is returned to the event owner

```rust
pub fn close_event(&mut self, event_id: u64)
```

### cancel_event()

Cancels a given event if the conditions are fullfiled. All deposit is returned to the event owner.

```rust
pub fn cancel_event(&mut self, event_id: u64)
```

### add_claim_keys()

Enables event owners to add public keys as function access keys to the contract.

```rust
#[payable]
pub fn add_claim_keys(
    &mut self,
    public_keys: Vec<PublicKey>,
    pk_attributes: PublicKeyAttributes,
    is_create_account: bool,
)
```

### drop_public_keys()

Removes public keys from the contract's access key register.

```rust
pub fn drop_public_keys(&mut self, event_id: u64, public_keys: Vec<PublicKey>)
```

### create_account_and_claim

Allows users to create a new NEAR account and claim an NFT using their new account id.

```rust
pub fn create_account_and_claim(
    &mut self,
    new_account_id: AccountId,
    new_public_key: PublicKey,
) -> Promise
```

### claim()

Enables users to claim an NFT to their account id from NEAR Wallet.

```rust
pub fn claim(&mut self, account_id: AccountId) -> Promise
```

### claim_h00kd()

Enables users to claim an NFT to their account id from H00KD.

```rust
pub fn claim_h00kd(&mut self, account_id: AccountId) -> Promise
```

## View Methods

### get_key_balance()

Returns the balance associated with the public key

```rust
pub fn get_key_balance(&self, key: PublicKey) -> U128
```

### can_claim_with_public()

Checks if public key can be used to claim. Returns the public key contract attributes.

```rust
pub fn can_claim_with_public(&self, public_key: &PublicKey) -> Option<PublicKeyAttributes>
```

### get_public_key_event_data()

Returns an event data structure associated to the given public key.

```rust
pub fn get_public_key_event_data(&self, public_key: PublicKey) -> EventData
```

### get_event_data()

Returns an event data structure associated to the given event id.

```rust
pub fn get_event_data(&self, event_id: u64) -> EventData
```

### get_owner_event_data()

Returns a list of events owned by the given account id.

```rust
pub fn get_owner_event_data(
    &self,
    owner_account_id: AccountId,
    from_index: Option<U128>,
    limit: Option<u64>,
) -> Vec<(u64, EventData)>
```

### get_events()

Returns a list of event data.

```rust
pub fn get_events(
    &self,
    from_index: Option<U128>,
    limit: Option<u64>,
) -> Vec<(u64, EventData)>
```

### get_number_of_events_created()

Returns the total number of events created since deployment.

```rust
pub fn get_number_of_events_created(&self) -> u64
```

### get_number_of_events_by_owner()

Returns the total number of events owned by a given account id.

```rust
pub fn get_number_of_events_by_owner(&self, account_id: AccountId) -> u64
```

### get_access_key_allowance_amount()

Returns the access key allowance set by the contract.

```rust
pub fn get_access_key_allowance_amount(&self) -> (U128, U128)
```

### get_mint_storage_cost_amount()

Returns the mint storage amount set by the contract.

```rust
pub fn get_mint_storage_cost_amount(&self) -> U128
```

## Parameters

| Name              | Type                | Description                                                                |
| ----------------- | ------------------- | -------------------------------------------------------------------------- |
| event_uri         | String              | Hash event data on IPFS identifier                                         |
| token_metadata    | TokenMetadata       | Contract metadata description according to NEP-141                         |
| event_starts      | u64                 | Event's starting date in nanoseconds from epoch                            |
| event_ends        | u64                 | Event's ending date in nanoseconds from epoch                              |
| event_id          | u64                 | Event unique identifier                                                    |
| public_keys       | Vector(PublicKey)   | List of public keys                                                        |
| pk_attributes     | PublicKeyAttributes | Structure containing public key attributes as event id and attached amount |
| is_create_account | bool                | Indicates if the a public key will be used to create a new NEAR account    |
| new_account_id    | AccountId           | New account to be created using the Linkdrop contract                      |
| new_public_key    | PublicKey           | New public key associated to the new account id                            |
| account_id        | AccountId           | NEAR account id                                                            |
| public_key        | PublicKey           | NEAR public key                                                            |
| owner_account_id  | AccountId           | Event owner account id                                                     |
| from_index        | U128                | Start index                                                                |
| limit             | u64                 | End index                                                                  |
