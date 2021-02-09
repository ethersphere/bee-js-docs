[@ethersphere/bee-js](../README.md) / [Utils](utils.md) / File

# Namespace: File

[Utils](utils.md).File

## Table of contents

### Functions

- [fileArrayBuffer](utils.file.md#filearraybuffer)
- [isFile](utils.file.md#isfile)

## Functions

### fileArrayBuffer

▸ **fileArrayBuffer**(`file`: File): *Promise*<ArrayBuffer\>

Compatibility helper for browsers where the `arrayBuffer function is
missing from `File` objects.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`file` | File | A File object    |

**Returns:** *Promise*<ArrayBuffer\>

Defined in: [src/utils/file.ts:29](https://github.com/ethersphere/bee-js/blob/313830a/src/utils/file.ts#L29)

___

### isFile

▸ **isFile**(`file`: *unknown*): file is File

Compatibility functions for working with File API objects

https://developer.mozilla.org/en-US/docs/Web/API/File

#### Parameters:

Name | Type |
------ | ------ |
`file` | *unknown* |

**Returns:** file is File

Defined in: [src/utils/file.ts:7](https://github.com/ethersphere/bee-js/blob/313830a/src/utils/file.ts#L7)
