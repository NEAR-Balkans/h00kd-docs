module.exports = {
  docs: [
    'overview',
    'administration',
    'architecture',
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
      label: 'Contracts',
      items: [
        'contracts/h00kd',
        'contracts/h00kd_metadata',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items: ['security/bugbounty'],
    },
    'deployed-contracts',
    'subgraph'
  ],
}
