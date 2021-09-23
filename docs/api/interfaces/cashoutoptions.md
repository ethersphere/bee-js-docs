---
id: "cashoutoptions"
title: "Interface: CashoutOptions"
sidebar_label: "CashoutOptions"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`RequestOptions`](requestoptions.md)

  ↳ **`CashoutOptions`**

## Properties

### fetch

• `Optional` **fetch**: `Fetch`

User defined Fetch compatible function

#### Inherited from

[RequestOptions](requestoptions.md).[fetch](requestoptions.md#fetch)

#### Defined in

[bee-js/src/types/index.ts:92](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L92)

___

### gasLimit

• `Optional` **gasLimit**: [`NumberString`](../types/numberstring.md)

Gas limit for the cashout transaction in WEI

#### Defined in

[bee-js/src/types/debug.ts:98](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/debug.ts#L98)

___

### gasPrice

• `Optional` **gasPrice**: [`NumberString`](../types/numberstring.md)

Gas price for the cashout transaction in WEI

#### Defined in

[bee-js/src/types/debug.ts:93](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/debug.ts#L93)

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
