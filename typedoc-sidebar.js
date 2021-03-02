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
      "api/interfaces/allsettlements",
      "api/interfaces/balanceresponse",
      "api/interfaces/beeresponse",
      "api/interfaces/cashoutresponse",
      "api/interfaces/cashoutresult",
      "api/interfaces/cheque",
      "api/interfaces/chequebookaddressresponse",
      "api/interfaces/chequebookbalanceresponse",
      "api/interfaces/collectionentry",
      "api/interfaces/collectionuploadoptions",
      "api/interfaces/deposittokensresponse",
      "api/interfaces/dictionary",
      "api/interfaces/downloadoptions",
      "api/interfaces/filedata",
      "api/interfaces/fileheaders",
      "api/interfaces/fileuploadoptions",
      "api/interfaces/lastcashoutactionresponse",
      "api/interfaces/lastchequesforpeerresponse",
      "api/interfaces/lastchequesresponse",
      "api/interfaces/nodeaddresses",
      "api/interfaces/peer",
      "api/interfaces/peerbalance",
      "api/interfaces/pssmessagehandler",
      "api/interfaces/psssubscription",
      "api/interfaces/referenceresponse",
      "api/interfaces/settlements",
      "api/interfaces/tag",
      "api/interfaces/uploadheaders",
      "api/interfaces/uploadoptions",
      "api/interfaces/withdrawtokensresponse"
    ]
  },
  {
    "type": "category",
    "label": "Type aliases",
    "items": [
      "api/types/utils.eth.hexethaddress",
      "api/types/utils.eth.overlayaddress",
      "api/types/utils.hex.hexstring",
      "api/types/address",
      "api/types/addressprefix",
      "api/types/brandedstring",
      "api/types/brandedtype",
      "api/types/collection",
      "api/types/flavoredtype",
      "api/types/publickey",
      "api/types/reference"
    ]
  },
  {
    "type": "category",
    "label": "Variables",
    "items": [
      "api/variables/encrypted_hex_reference_length",
      "api/variables/hex_reference_length"
    ]
  },
  {
    "type": "category",
    "label": "Functions",
    "items": [
      "api/functions/utils.bytes.bytesatoffset",
      "api/functions/utils.bytes.bytesequal",
      "api/functions/utils.bytes.flexbytesatoffset",
      "api/functions/utils.bytes.isbytes",
      "api/functions/utils.bytes.isflexbytes",
      "api/functions/utils.bytes.makebytes",
      "api/functions/utils.bytes.verifybytes",
      "api/functions/utils.bytes.verifybytesatoffset",
      "api/functions/utils.bytes.verifyflexbytes",
      "api/functions/utils.data.preparedata",
      "api/functions/utils.data.preparewebsocketdata",
      "api/functions/utils.eth.ethtoswarmaddress",
      "api/functions/utils.eth.fromlittleendian",
      "api/functions/utils.eth.isethaddress",
      "api/functions/utils.eth.tolittleendian",
      "api/functions/utils.file.filearraybuffer",
      "api/functions/utils.file.isfile",
      "api/functions/utils.hex.bytestohex",
      "api/functions/utils.hex.hextobytes",
      "api/functions/utils.hex.inttohex",
      "api/functions/utils.hex.ishexstring",
      "api/functions/utils.hex.striphexprefix",
      "api/functions/utils.hex.verifyhex",
      "api/functions/utils.tar.maketar"
    ]
  }
];