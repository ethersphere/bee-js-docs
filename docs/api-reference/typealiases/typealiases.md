---
hide_title: true
title: Type Aliases
---

## Type aliases

### Address

Ƭ **Address**: *string*

Defined in: [src/types/index.ts:10](https://github.com/ethersphere/bee-js/blob/313830a/src/types/index.ts#L10)

___

### AddressPrefix

Ƭ **AddressPrefix**: [*Address*](#address)

Defined in: [src/types/index.ts:11](https://github.com/ethersphere/bee-js/blob/313830a/src/types/index.ts#L11)

___

### BrandedString

Ƭ **BrandedString**<N\>: [*BrandedType*](#brandedtype)<*string*, N\>

#### Type parameters:

Name |
------ |
`N` |

Defined in: [src/types/index.ts:103](https://github.com/ethersphere/bee-js/blob/313830a/src/types/index.ts#L103)

___

### BrandedType

Ƭ **BrandedType**<T, N\>: T & { `__tag__`: N  }

These type are used to create new nominal types

See https://spin.atomicobject.com/2018/01/15/typescript-flexible-nominal-typing/

#### Type parameters:

Name |
------ |
`T` |
`N` |

Defined in: [src/types/index.ts:101](https://github.com/ethersphere/bee-js/blob/313830a/src/types/index.ts#L101)

___

### Collection

Ƭ **Collection**<T\>: [*CollectionEntry*](../interfaces/collectionentry.md)<T\>[]

Represents Collections

#### Type parameters:

Name |
------ |
`T` |

Defined in: [src/types/index.ts:75](https://github.com/ethersphere/bee-js/blob/313830a/src/types/index.ts#L75)

___

### FlavoredType

Ƭ **FlavoredType**<T, N\>: T & { `__tag__?`: N  }

#### Type parameters:

Name |
------ |
`T` |
`N` |

Defined in: [src/types/index.ts:105](https://github.com/ethersphere/bee-js/blob/313830a/src/types/index.ts#L105)

___

### PublicKey

Ƭ **PublicKey**: *string*

Defined in: [src/types/index.ts:8](https://github.com/ethersphere/bee-js/blob/313830a/src/types/index.ts#L8)

___

### Reference

Ƭ **Reference**: *string*

Defined in: [src/types/index.ts:7](https://github.com/ethersphere/bee-js/blob/313830a/src/types/index.ts#L7)
