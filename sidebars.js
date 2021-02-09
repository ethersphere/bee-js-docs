module.exports = {
  Balls: [
    'introduction',
    {
      type: 'category',
      label: 'User Documentation',
      items: [
        'user-documentation/getting-started',
        'user-documentation/upload-download',
        'user-documentation/track-upload',
        // 'user-documentation/pss',
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
            'api-reference/classes/beeargumenterror',
            'api-reference/classes/beedebug',
            'api-reference/classes/beeerror',
            'api-reference/classes/beerequesterror',
            'api-reference/classes/beeresponseerror',
          ],
          Interfaces: [
            "api-reference/interfaces/beeresponse",
            "api-reference/interfaces/beeresponse",
            "api-reference/interfaces/collectionentry",
            "api-reference/interfaces/collectionuploadoptions",
            "api-reference/interfaces/dictionary",
            "api-reference/interfaces/downloadoptions",
            "api-reference/interfaces/filedata",
            "api-reference/interfaces/fileheaders",
            "api-reference/interfaces/fileuploadoptions",
            "api-reference/interfaces/pssmessagehandler",
            "api-reference/interfaces/psssubscription",
            "api-reference/interfaces/referenceresponse",
            "api-reference/interfaces/tag",
            "api-reference/interfaces/uploadheaders",
            "api-reference/interfaces/uploadoptions",
            "api-reference/interfaces/utils.bytes.bytes",
            "api-reference/interfaces/utils.bytes.flexbytes"
          ],
          Namespaces: [
            'api-reference/modules/utils.bytes',
            'api-reference/modules/utils.data',
            'api-reference/modules/utils.file',
            'api-reference/modules/utils.hex',
            'api-reference/modules/utils.tar',
          ],
        },
        'api-reference/typealiases/typealiases',
        'api-reference/variables/variables',
      ],
      collapsed: false
    },
  ]
};