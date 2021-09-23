---
id: "alltagsoptions"
title: "Interface: AllTagsOptions"
sidebar_label: "AllTagsOptions"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`RequestOptions`](requestoptions.md)

  ↳ **`AllTagsOptions`**

## Properties

### fetch

• `Optional` **fetch**: `Fetch`

User defined Fetch compatible function

#### Inherited from

[RequestOptions](requestoptions.md).[fetch](requestoptions.md#fetch)

#### Defined in

[bee-js/src/types/index.ts:92](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L92)

___

### limit

• `Optional` **limit**: `number`

#### Defined in

[bee-js/src/types/index.ts:246](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L246)

___

### offset

• `Optional` **offset**: `number`

#### Defined in

[bee-js/src/types/index.ts:247](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L247)

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
