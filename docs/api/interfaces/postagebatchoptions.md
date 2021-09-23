---
id: "postagebatchoptions"
title: "Interface: PostageBatchOptions"
sidebar_label: "PostageBatchOptions"
sidebar_position: 0
custom_edit_url: null
---

Options for creation of postage batch

## Hierarchy

- [`RequestOptions`](requestoptions.md)

  ↳ **`PostageBatchOptions`**

## Properties

### fetch

• `Optional` **fetch**: `Fetch`

User defined Fetch compatible function

#### Inherited from

[RequestOptions](requestoptions.md).[fetch](requestoptions.md#fetch)

#### Defined in

[bee-js/src/types/index.ts:92](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L92)

___

### gasPrice

• `Optional` **gasPrice**: [`NumberString`](../types/numberstring.md)

Sets gas price in Wei for the transaction that creates the postage batch

#### Defined in

[bee-js/src/types/index.ts:496](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L496)

___

### immutableFlag

• `Optional` **immutableFlag**: `boolean`

#### Defined in

[bee-js/src/types/index.ts:497](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L497)

___

### label

• `Optional` **label**: `string`

Sets label for the postage batch

#### Defined in

[bee-js/src/types/index.ts:491](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L491)

___

### retry

• `Optional` **retry**: `number`

Configure backoff mechanism for requests retries.
Specifies how many retries will be performed before failing a request.
Retries are performed for GET, PUT, HEAD, DELETE, OPTIONS and TRACE requests.
Default is 2.

#### Inherited from

[RequestOptions](requestoptions.md).[retry](requestoptions.md#retry)

#### Defined in

[bee-js/src/types/index.ts:87](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L87)

___

### timeout

• `Optional` **timeout**: `number`

Timeout of requests in milliseconds

#### Inherited from

[RequestOptions](requestoptions.md).[timeout](requestoptions.md#timeout)

#### Defined in

[bee-js/src/types/index.ts:79](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L79)
