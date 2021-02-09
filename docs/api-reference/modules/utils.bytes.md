[@ethersphere/bee-js](../README.md) / [Utils](utils.md) / Bytes

# Namespace: Bytes

[Utils](utils.md).Bytes

## Table of contents

### Interfaces

- [Bytes](../interfaces/utils.bytes.bytes.md)
- [FlexBytes](../interfaces/utils.bytes.flexbytes.md)

### Functions

- [bytesAtOffset](utils.bytes.md#bytesatoffset)
- [bytesEqual](utils.bytes.md#bytesequal)
- [flexBytesAtOffset](utils.bytes.md#flexbytesatoffset)
- [isBytes](utils.bytes.md#isbytes)
- [isFlexBytes](utils.bytes.md#isflexbytes)
- [verifyBytes](utils.bytes.md#verifybytes)
- [verifyFlexBytes](utils.bytes.md#verifyflexbytes)

## Functions

### bytesAtOffset

▸ **bytesAtOffset**<Length\>(`offset`: *number*, `length`: Length, `data`: Uint8Array): [*Bytes*](../interfaces/utils.bytes.bytes.md)<Length\>

Return `length` bytes starting from `offset`

#### Type parameters:

Name | Type |
------ | ------ |
`Length` | *number* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`offset` | *number* | The offset to start from   |
`length` | Length | The length of data to be returned   |
`data` | Uint8Array | The original data    |

**Returns:** [*Bytes*](../interfaces/utils.bytes.bytes.md)<Length\>

Defined in: [src/utils/bytes.ts:88](https://github.com/ethersphere/bee-js/blob/313830a/src/utils/bytes.ts#L88)

___

### bytesEqual

▸ **bytesEqual**(`a`: Uint8Array, `b`: Uint8Array): *boolean*

Returns true if two byte arrays are equal

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`a` | Uint8Array | Byte array to compare   |
`b` | Uint8Array | Byte array to compare    |

**Returns:** *boolean*

Defined in: [src/utils/bytes.ts:115](https://github.com/ethersphere/bee-js/blob/313830a/src/utils/bytes.ts#L115)

___

### flexBytesAtOffset

▸ **flexBytesAtOffset**<Min, Max\>(`offset`: *number*, `_min`: Min, `_max`: Max, `data`: Uint8Array): [*FlexBytes*](../interfaces/utils.bytes.flexbytes.md)<Min, Max\>

Return flex bytes starting from `offset`

#### Type parameters:

Name | Type |
------ | ------ |
`Min` | *number* |
`Max` | *number* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`offset` | *number* | The offset to start from   |
`_min` | Min | The minimum size of the data   |
`_max` | Max | The maximum size of the data   |
`data` | Uint8Array | The original data    |

**Returns:** [*FlexBytes*](../interfaces/utils.bytes.flexbytes.md)<Min, Max\>

Defined in: [src/utils/bytes.ts:100](https://github.com/ethersphere/bee-js/blob/313830a/src/utils/bytes.ts#L100)

___

### isBytes

▸ **isBytes**<Length\>(`length`: Length, `b`: Uint8Array): b is Bytes<Length\>

Type guard for Bytes\<T\> type

#### Type parameters:

Name | Type |
------ | ------ |
`Length` | *number* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`length` | Length | The length of the byte array   |
`b` | Uint8Array | The byte array    |

**Returns:** b is Bytes<Length\>

Defined in: [src/utils/bytes.ts:31](https://github.com/ethersphere/bee-js/blob/313830a/src/utils/bytes.ts#L31)

___

### isFlexBytes

▸ **isFlexBytes**<Min, Max\>(`min`: Min, `max`: Max, `b`: Uint8Array): b is FlexBytes<Min, Max\>

Type guard for FlexBytes<Min,Max> type

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`Min` | *number* | - |
`Max` | *number* | Min |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`min` | Min | Minimum size of the array   |
`max` | Max | Maximum size of the array   |
`b` | Uint8Array | The byte array    |

**Returns:** b is FlexBytes<Min, Max\>

Defined in: [src/utils/bytes.ts:55](https://github.com/ethersphere/bee-js/blob/313830a/src/utils/bytes.ts#L55)

___

### verifyBytes

▸ **verifyBytes**<Length\>(`length`: Length, `b`: Uint8Array): [*Bytes*](../interfaces/utils.bytes.bytes.md)<Length\> \| *never*

Verifies if a byte array has a certain length

#### Type parameters:

Name | Type |
------ | ------ |
`Length` | *number* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`length` | Length | The specified length   |
`b` | Uint8Array | The byte array    |

**Returns:** [*Bytes*](../interfaces/utils.bytes.bytes.md)<Length\> \| *never*

Defined in: [src/utils/bytes.ts:41](https://github.com/ethersphere/bee-js/blob/313830a/src/utils/bytes.ts#L41)

___

### verifyFlexBytes

▸ **verifyFlexBytes**<Min, Max\>(`min`: Min, `max`: Max, `b`: Uint8Array): [*FlexBytes*](../interfaces/utils.bytes.flexbytes.md)<Min, Max\> \| *never*

Verifies if a byte array has a certain length between min and max

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`Min` | *number* | - |
`Max` | *number* | Min |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`min` | Min | Minimum size of the array   |
`max` | Max | Maximum size of the array   |
`b` | Uint8Array | The byte array    |

**Returns:** [*FlexBytes*](../interfaces/utils.bytes.flexbytes.md)<Min, Max\> \| *never*

Defined in: [src/utils/bytes.ts:70](https://github.com/ethersphere/bee-js/blob/313830a/src/utils/bytes.ts#L70)
