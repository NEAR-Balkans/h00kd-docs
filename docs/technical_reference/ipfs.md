# IPFS

Previously to interacting with the contract, the event data needs to be stored on IPFS. The CID is needed to be stored within the contrac for traceability reasons. The CID is currently being used to querry the event data using GraphQL, so make sure you are using the [CID V1](https://docs.ipfs.tech/concepts/content-addressing/#version-1-v1) format.

Here's an example of how one can store event data on IPFS using JS.

```js
import * as IPFS from 'ipfs-core'

let IPFS_event_data = {
  title: 'Event Title',
  description: 'description',
  tags: 'tags',
  country: 'country',
  city: 'city',
  date_from: 1000000000,
  date_to: 10000000000000000,
  image: 'some image',
  links: 'links to event',
}

const fileAdded = await node.add({
  path: `${nearNetworkId}_event_${element.event_id}.json`,
  content: JSON.stringify(IPFS_event_data),
})
```

[More about ipfs-core here](https://docs.ipfs.tech/basics/js/js-ipfs/)
