---
id: "requestoptions"
title: "Interface: RequestOptions"
sidebar_label: "RequestOptions"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- **`RequestOptions`**

  ↳ [`BeeOptions`](beeoptions.md)

  ↳ [`UploadOptions`](uploadoptions.md)

  ↳ [`AllTagsOptions`](alltagsoptions.md)

  ↳ [`JsonFeedOptions`](jsonfeedoptions.md)

  ↳ [`PostageBatchOptions`](postagebatchoptions.md)

  ↳ [`CashoutOptions`](cashoutoptions.md)

## Properties

### fetch

• `Optional` **fetch**: `Fetch`

User defined Fetch compatible function

#### Defined in

[bee-js/src/types/index.ts:92](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L92)

___

### retry

• `Optional` **retry**: `number`

Configure backoff mechanism for requests retries.
Specifies how many retries will be performed before failing a request.
Retries are performed for GET, PUT, HEAD, DELETE, OPTIONS and TRACE requests.
Default is 2.

#### Defined in

[bee-js/src/types/index.ts:87](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L87)

___

### timeout

• `Optional` **timeout**: `number`

Timeout of requests in milliseconds

#### Defined in

[bee-js/src/types/index.ts:79](https://github.com/ethersphere/bee-js/blob/5b112bf/src/types/index.ts#L79)
