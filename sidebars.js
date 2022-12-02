module.exports = {
  docs: [
    'overview',
    'how-it-works',
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/h00kd',
        'guides/h00kd_metadata',
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
