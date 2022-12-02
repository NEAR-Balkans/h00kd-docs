module.exports = {
  docs: [
    'overview',
    {
      type: 'category',
      label: 'User guide',
      items: [
        'user-guide/how-to-create-event',
        'user-guide/how-to-generate-keys-claim',
        'user-guide/how-to-generate-keys-create',
        'user-guide/how-to-close-event',
      ],
    },
    {
      type: 'category',
      label: 'Technical Reference',
      items: [
        'technical_reference/architecture',
        'technical_reference/ipfs',
        'technical_reference/subgraph'
      ]
    },
    {
      type: 'category',
      label: 'Contracts',
      items: [
        'contracts/h00kd',
        'contracts/h00kd_metadata',
      ],
    },
    /*
    {
      type: 'category',
      label: 'Security',
      items: ['security/bugbounty'],
    },*/
    'deployed-contracts',
  ],
}
