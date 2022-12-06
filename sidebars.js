module.exports = {
  docs: [
    'overview',
    {
      type: 'category',
      label: 'Issuer Guide',
      items: [
        'issuer-guide/how-to-create-event',
        'issuer-guide/how-to-generate-keys-claim',
        'issuer-guide/how-to-generate-keys-create',
        'issuer-guide/how-to-close-event',
      ],
    },
    {
      type: 'category',
      label: 'Collector Guide',
      items: [
        'collector-guide/how-to-claim',
        'collector-guide/how-to-create-and-claim',
        'collector-guide/where-to-view-h00ks',
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
    'faq',
  ],
}
