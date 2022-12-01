# Subgraph

We provide a [Subgraph](https://thegraph.com/hosted-service/subgraph/ioansl/h00kd---testnet) that everyone can use for our testnet contracts. Currently it provides four different objects.

Here's an example of all available querries on plural form.

```graphql
{
  createEvents(first: 5) {
    id
    event_fn
    account_id
    cid
  }
  events(first: 5) {
    id
    title
    description
    tags
  }

  eventPubKeys(first: 5) {
    id
    event_fn
    public_key
    amount
    uses
  }
  eventUsers(first: 5) {
    id
    event_fn
    event_id
    public_key
  }
  userActivities(first: 5) {
    id
    user
    event_fn
  }
}
```

Here you can find more information about [GraphQL API](https://thegraph.com/docs/en/querying/graphql-api/) and [filters](https://thegraph.com/docs/en/querying/graphql-api/#all-filters)
