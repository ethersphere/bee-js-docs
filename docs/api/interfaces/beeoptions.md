---
id: "beeoptions"
title: "Interface: BeeOptions"
sidebar_label: "BeeOptions"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`RequestOptions`](requestoptions.md)

  ↳ **`BeeOptions`**

## Properties

### defaultHeaders

• `Optional` **defaultHeaders**: `Record`<`string`, `string`\>

Object that contains default headers that will be present
in all outgoing bee-js requests for instance of Bee class.

#### Defined in

[bee-js/src/types/index.ts:105](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L105)

___

### fetch

• `Optional` **fetch**: `Fetch`

User defined Fetch compatible function

#### Inherited from

[RequestOptions](requestoptions.md).[fetch](requestoptions.md#fetch)

#### Defined in

[bee-js/src/types/index.ts:92](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L92)

___

### onRequest

• `Optional` **onRequest**: [`HookCallback`](../types/hookcallback.md)<[`BeeRequest`](beerequest.md)\>

Function that registers listener callback for all outgoing HTTP requests that Bee instance makes.

#### Defined in

[bee-js/src/types/index.ts:110](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L110)

___

### onResponse

• `Optional` **onResponse**: [`HookCallback`](../types/hookcallback.md)<[`BeeResponse`](beeresponse.md)\>

Function that registers listener callback for all incoming HTTP responses that Bee instance made.

#### Defined in

[bee-js/src/types/index.ts:115](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L115)

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

Signer object or private key of the Signer in form of either hex string or Uint8Array that will be default signer for the instance.

#### Defined in

[bee-js/src/types/index.ts:99](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L99)

___

### timeout

• `Optional` **timeout**: `number`

Timeout of requests in milliseconds

#### Inherited from

[RequestOptions](requestoptions.md).[timeout](requestoptions.md#timeout)

#### Defined in

[bee-js/src/types/index.ts:79](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L79)
