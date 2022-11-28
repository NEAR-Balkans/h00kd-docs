# H00KD

- [Source Code](https://github.com/Shard-Labs/h00kd-contracts/blob/develop-2.0/h00kd/src/lib.rs)

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

## Initialization Method

### init()

Initializes the contract's state by setting an admin account id, contract metadata and a contract to interact with.

```rust
#[init]
pub fn init(metadata_contract: AccountId) -> Self
```

## Change Methods

### mint_nft()

Mint a new NFT token only if the transaction predecessor is the Admin of the contract or the contract set to interact with.

```rust
#[payable]
pub fn nft_mint(&mut self, token_metadata: TokenMetadata) -> Token
```

### clone_nft()

Clones a given token id into a new NFT. The new NFT will have the same metadata but different token id.

```rust
#[payable]
pub fn nft_clone(&mut self, clone_from_id: TokenId, token_owner_id: AccountId) -> Token
```

### account_created_and_clone()

Clones a given token id int a new NFT when the owner id is a new created NEAR account.

```rust
#[payable]
pub fn account_created_and_clone(
    &mut self,
    clone_from_id: TokenId,
    token_owner_id: AccountId,
) -> Token
```

## View Methods

### nft_metadata()

Returns H00kd Contract Metadata

```rust
pub fn nft_metadata(&self) -> NFTContractMetadata
```

### get_accounts()

Returns a list of account ids that have claimed a h00kd.

```rust
pub fn get_accounts(&self, genesis_token: TokenId) -> Option<Vec<AccountId>>
```

### get_tokens_metadata()

Returns a list of Token Metadata for each token id provided as argument.

```rust
pub fn get_tokens_metadata(&self, tokens_id: Vec<TokenId>) -> Vec<TokenMetadata>
```

#### Parameters:

| Name              | Type              | Description                                     |
| ----------------- | ----------------- | ----------------------------------------------- |
| metadata_contract | AccountId         | Contract account id that interacts with H00kd   |
| token_metadata    | TokenMetadata     | Metadata structure for NEP-141 contracts        |
| clone_from_id     | TokenId           | Token identifier used to clone into a new token |
| token_owner_id    | AccountId         | New NFT minted/cloned owner account             |
| genesis_token     | TokenId           | Token identifier used to clone into a new token |
| tokens_id         | Vector(AccountId) | List of token ids                               |