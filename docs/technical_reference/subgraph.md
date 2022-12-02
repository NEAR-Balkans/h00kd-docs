# Subgraph

<!-- Necessary comment to make work below header tag -->

## Main querries

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

## Filters

Filter can be implemented on all querries as follow:

```graphql
eventDatas(where: { country: "France" }) {
    id
    title
  }
```

This querry will return all events where country is "France".

Another intersting field we can filter by in the start or end date of an event. Filter by date as follows:

```graphql
eventDatas(where: { date_from_gt: 10000000 }) {
    id
    title
  }
```

Here you can find more information about [filters](https://thegraph.com/docs/en/querying/graphql-api/#all-filters)

## Pagination

When the number of events increases, fetching all the events can be overwealming. Ba using pagination we can efficiently index event data as follows:

```graphql
eventDatas(first: 5, skip: 50) { // Return the first n elements
    id
    title
  }
```

Here you can find more information about [GraphQL API](https://thegraph.com/docs/en/querying/graphql-api/)
