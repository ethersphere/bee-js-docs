module.exports = {
  Balls: [
    'introduction',
    {
      type: 'category',
      label: 'Usage',
      items: [
        'documentation/getting-started',
        'documentation/overview',
        'documentation/status',
        'documentation/chequebook',
        'documentation/storage',
        'documentation/upload-download',
        'documentation/tracking-uploads',
        'documentation/pinning',
        'documentation/staking',
        'documentation/pss',
        'documentation/gsoc',
        'documentation/soc-and-feeds',
        'documentation/act',
        // 'documentation/manifests',
        
        
  
        'documentation/utilities',
      ],
      collapsed: false
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'resources/community'
      ],
      collapsed: false
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        {
          type: 'link',
          label: 'Ethereum wallet used for signing Feeds',
          href: 'https://github.com/ethersphere/examples-js/tree/master/eth-wallet-signing'
        },
        {
          type: 'link',
          label: 'React Upload application',
          href: 'https://github.com/ethersphere/examples-js/tree/master/upload-react'
        }
      ],
      collapsed: false
    },
    
  ]
}
