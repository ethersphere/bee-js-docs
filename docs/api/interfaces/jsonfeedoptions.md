---
id: "jsonfeedoptions"
title: "Interface: JsonFeedOptions"
sidebar_label: "JsonFeedOptions"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`RequestOptions`](requestoptions.md)

  ↳ **`JsonFeedOptions`**

## Properties

### address

• `Optional` **address**: `string` \| `Uint8Array` \| [`EthAddress`](../types/utils.ethaddress.md)

Valid only for `get` action, where either this `address` or `signer` has
to be specified.

#### Defined in

[bee-js/src/types/index.ts:372](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L372)

___

### fetch

• `Optional` **fetch**: `Fetch`

User defined Fetch compatible function

#### Inherited from

[RequestOptions](requestoptions.md).[fetch](requestoptions.md#fetch)

#### Defined in

[bee-js/src/types/index.ts:92](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L92)

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

### signer

• `Optional` **signer**: `string` \| `Uint8Array` \| [`Signer`](../types/signer.md)

Custom Signer object or private key in either binary or hex form.
This required for `set` action, and optional for `get` although
if not specified for `get` then `address` option has to be specified.

#### Defined in

[bee-js/src/types/index.ts:379](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L379)

___

### timeout

• `Optional` **timeout**: `number`

Timeout of requests in milliseconds

#### Inherited from

[RequestOptions](requestoptions.md).[timeout](requestoptions.md#timeout)

#### Defined in

[bee-js/src/types/index.ts:79](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L79)

___

### type

• `Optional` **type**: ``"sequence"`` \| ``"epoch"``

#### Defined in

[bee-js/src/types/index.ts:380](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L380)
