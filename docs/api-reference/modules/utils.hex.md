---
hide_title: true
title: Utils.Hex
---

# Namespace: Utils.Hex

## Table of contents

### Type aliases

- [HexString](utils.hex.md#hexstring)

### Functions

- [bytesToHex](utils.hex.md#bytestohex)
- [hexToBytes](utils.hex.md#hextobytes)
- [isHexString](utils.hex.md#ishexstring)
- [stripHexPrefix](utils.hex.md#striphexprefix)
- [verifyHex](utils.hex.md#verifyhex)

## Type aliases

### HexString

Ƭ **HexString**: [*BrandedString*](../typealiases/typealiases.md#brandedstring)<*HexString*\>

Nominal type to represent hex strings

Defined in: [src/utils/hex.ts:6](https://github.com/ethersphere/bee-js/blob/313830a/src/utils/hex.ts#L6)

## Functions

### bytesToHex

▸ **bytesToHex**(`bytes`: Uint8Array, `withPrefix?`: *boolean*): [*HexString*](utils.hex.md#hexstring)

Converts array of number or Uint8Array to hex string.

Optionally provides a the '0x' prefix.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`bytes` | Uint8Array | - | The input array   |
`withPrefix` | *boolean* | false | Provides '0x' prefix when true (default: false)    |

**Returns:** [*HexString*](utils.hex.md#hexstring)

Defined in: [src/utils/hex.ts:41](https://github.com/ethersphere/bee-js/blob/313830a/src/utils/hex.ts#L41)

___

### hexToBytes

▸ **hexToBytes**(`hex`: [*HexString*](utils.hex.md#hexstring)): Uint8Array

Converts a hex string to Uint8Array

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`hex` | [*HexString*](utils.hex.md#hexstring) | string input    |

**Returns:** Uint8Array

Defined in: [src/utils/hex.ts:22](https://github.com/ethersphere/bee-js/blob/313830a/src/utils/hex.ts#L22)

___

### isHexString

▸ **isHexString**(`s`: *string*): s is BrandedType<string, "HexString"\>

Type guard for HexStrings

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`s` | *string* | string input    |

**Returns:** s is BrandedType<string, "HexString"\>

Defined in: [src/utils/hex.ts:54](https://github.com/ethersphere/bee-js/blob/313830a/src/utils/hex.ts#L54)

___

### stripHexPrefix

▸ **stripHexPrefix**<T\>(`hex`: T): T

Strips the '0x' hex prefix from a string

#### Type parameters:

Name | Type |
------ | ------ |
`T` | *string* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`hex` | T | string input    |

**Returns:** T

Defined in: [src/utils/hex.ts:13](https://github.com/ethersphere/bee-js/blob/313830a/src/utils/hex.ts#L13)

___

### verifyHex

▸ **verifyHex**(`s`: *string*): [*HexString*](utils.hex.md#hexstring) \| *never*

Verifies if the provided input is a HexString.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`s` | *string* | string input    |

**Returns:** [*HexString*](utils.hex.md#hexstring) \| *never*

HexString or throws error

Defined in: [src/utils/hex.ts:65](https://github.com/ethersphere/bee-js/blob/313830a/src/utils/hex.ts#L65)
