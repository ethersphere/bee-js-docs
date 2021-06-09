module.exports = [
  "api/index",
  {
    "type": "category",
    "label": "Namespaces",
    "items": [
      "api/modules/utils",
      "api/modules/utils.bytes",
      "api/modules/utils.data",
      "api/modules/utils.eth",
      "api/modules/utils.file",
      "api/modules/utils.hex",
      "api/modules/utils.tar"
    ]
  },
  {
    "type": "category",
    "label": "Classes",
    "items": [
      "api/classes/bee",
      "api/classes/beeargumenterror",
      "api/classes/beedebug",
      "api/classes/beeerror",
      "api/classes/beerequesterror",
      "api/classes/beeresponseerror"
    ]
  },
  {
    "type": "category",
    "label": "Interfaces",
    "items": [
      "api/interfaces/utils.bytes.bytes",
      "api/interfaces/utils.bytes.flexbytes",
      "api/interfaces/utils.eth.jsonrpc",
      "api/interfaces/allsettlements",
      "api/interfaces/balanceresponse",
      "api/interfaces/beeoptions",
      "api/interfaces/beeresponse",
      "api/interfaces/bin",
      "api/interfaces/cashoutoptions",
      "api/interfaces/cashoutresult",
      "api/interfaces/chainstate",
      "api/interfaces/cheque",
      "api/interfaces/chequebookaddressresponse",
      "api/interfaces/chequebookbalanceresponse",
      "api/interfaces/collectionentry",
      "api/interfaces/collectionuploadoptions",
      "api/interfaces/data",
      "api/interfaces/dictionary",
      "api/interfaces/feedreader",
      "api/interfaces/feedwriter",
      "api/interfaces/filedata",
      "api/interfaces/fileheaders",
      "api/interfaces/fileuploadoptions",
      "api/interfaces/health",
      "api/interfaces/jsonfeedoptions",
      "api/interfaces/lastcashoutactionresponse",
      "api/interfaces/lastchequesforpeerresponse",
      "api/interfaces/lastchequesresponse",
      "api/interfaces/nodeaddresses",
      "api/interfaces/peer",
      "api/interfaces/peerbalance",
      "api/interfaces/pin",
      "api/interfaces/pingresponse",
      "api/interfaces/postagebatch",
      "api/interfaces/postagebatchoptions",
      "api/interfaces/pssmessagehandler",
      "api/interfaces/psssubscription",
      "api/interfaces/referenceresponse",
      "api/interfaces/removepeerresponse",
      "api/interfaces/reservestate",
      "api/interfaces/socreader",
      "api/interfaces/socwriter",
      "api/interfaces/settlements",
      "api/interfaces/tag",
      "api/interfaces/topology",
      "api/interfaces/transactionresponse",
      "api/interfaces/uploadheaders",
      "api/interfaces/uploadoptions"
    ]
  },
  {
    "type": "category",
    "label": "Type aliases",
    "items": [
      "api/types/utils.eth.ethaddress",
      "api/types/utils.eth.hexethaddress",
      "api/types/utils.eth.overlayaddress",
      "api/types/utils.hex.hexstring",
      "api/types/utils.hex.prefixedhexstring",
      "api/types/address",
      "api/types/addressprefix",
      "api/types/anyjson",
      "api/types/batchid",
      "api/types/brandedstring",
      "api/types/brandedtype",
      "api/types/collection",
      "api/types/flavoredtype",
      "api/types/privatekeybytes",
      "api/types/publickey",
      "api/types/reference",
      "api/types/signature",
      "api/types/signer",
      "api/types/topic"
    ]
  },
  {
    "type": "category",
    "label": "Variables",
    "items": [
      "api/variables/address_hex_length",
      "api/variables/batch_id_hex_length",
      "api/variables/encrypted_reference_bytes_length",
      "api/variables/encrypted_reference_hex_length",
      "api/variables/pubkey_hex_length",
      "api/variables/reference_bytes_length",
      "api/variables/reference_hex_length",
      "api/variables/signature_bytes_length",
      "api/variables/signature_hex_length",
      "api/variables/stamps_depth_max",
      "api/variables/stamps_depth_min",
      "api/variables/supported_bee_version",
      "api/variables/supported_bee_version_exact",
      "api/variables/topic_bytes_length",
      "api/variables/topic_hex_length"
    ]
  },
  {
    "type": "category",
    "label": "Functions",
    "items": [
      "api/functions/utils.bytes.assertbytes",
      "api/functions/utils.bytes.assertflexbytes",
      "api/functions/utils.bytes.bytesatoffset",
      "api/functions/utils.bytes.bytesequal",
      "api/functions/utils.bytes.flexbytesatoffset",
      "api/functions/utils.bytes.isbytes",
      "api/functions/utils.bytes.isflexbytes",
      "api/functions/utils.bytes.makebytes",
      "api/functions/utils.bytes.wrapbyteswithhelpers",
      "api/functions/utils.data.preparedata",
      "api/functions/utils.data.preparewebsocketdata",
      "api/functions/utils.eth.ethtoswarmaddress",
      "api/functions/utils.eth.fromlittleendian",
      "api/functions/utils.eth.ishexethaddress",
      "api/functions/utils.eth.makeethaddress",
      "api/functions/utils.eth.makeethereumwalletsigner",
      "api/functions/utils.eth.makehexethaddress",
      "api/functions/utils.eth.tolittleendian",
      "api/functions/utils.file.filearraybuffer",
      "api/functions/utils.file.isfile",
      "api/functions/utils.hex.asserthexstring",
      "api/functions/utils.hex.assertprefixedhexstring",
      "api/functions/utils.hex.bytestohex",
      "api/functions/utils.hex.hextobytes",
      "api/functions/utils.hex.inttohex",
      "api/functions/utils.hex.ishexstring",
      "api/functions/utils.hex.isprefixedhexstring",
      "api/functions/utils.hex.makehexstring",
      "api/functions/utils.tar.maketar",
      "api/functions/utils.keccak256hash",
      "api/functions/utils.setdefaultheaders"
    ]
  }
];