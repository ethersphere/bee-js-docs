module.exports = {
  Balls: [
    'introduction',
    {
      type: 'category',
      label: 'User Documentation',
      items: [
        'user-documentation/getting-started',
        'user-documentation/upload-download-data',
      ],
      collapsed: false
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