module.exports = {
  Balls: [
    'introduction',
    {
      type: 'category',
      label: 'Installation',
      items: [
        'installation/quick-start'
      ],
      collapsed: false
    },
    {
      type: 'category',
      label: 'Basic Usage',
      items: [
        'getting-started/upload-your-data',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api-reference/api-reference',
        {
          Classes: [
            'api-reference/classes/bee',
            'api-reference/classes/beedebug',
          ],
        },
      ],
      collapsed: false
    },
  ]
};