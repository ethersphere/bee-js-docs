---
id: "reference"
title: "Type alias: Reference"
sidebar_label: "Reference"
sidebar_position: 0
custom_edit_url: null
---

Ƭ **Reference**: [`HexString`](utils.hex.hexstring.md)<typeof [`REFERENCE_HEX_LENGTH`](../variables/reference_hex_length.md)\> \| [`HexString`](utils.hex.hexstring.md)<typeof [`ENCRYPTED_REFERENCE_HEX_LENGTH`](../variables/encrypted_reference_hex_length.md)\>

Generic reference that can be either non-encrypted reference which is a hex string of length 64 or encrypted
reference which is a hex string of length 128.

Encrypted reference consists of two parts. The reference address itself (like non-encrypted reference) and decryption key.

**`see`** [Bee docs - Store with Encryption](https://docs.ethswarm.org/docs/access-the-swarm/store-with-encryption)

#### Defined in

[bee-js/src/types/index.ts:45](https://github.com/ethersphere/bee-js/blob/6f227e1/src/types/index.ts#L45)
