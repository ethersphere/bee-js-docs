# Class: Messaging

Defined in: [bee-js/src/modules/messaging.ts:40](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/messaging.ts#L40)

Messaging protocols — PSS (Postal Service for Swarm) and GSOC. Method names keep
their `pss`/`gsoc` prefixes to distinguish the two protocols within the namespace.

Accessed as `bee.messaging`.

## Constructors

### Constructor

> **new Messaging**(`context`): `Messaging`

Defined in: [bee-js/src/modules/messaging.ts:41](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/messaging.ts#L41)

#### Parameters

##### context

`BeeContext`

#### Returns

`Messaging`

## Methods

### gsocMine()

> **gsocMine**(`targetOverlay`, `identifier`, `proximity`): [`PrivateKey`](../classes/PrivateKey.md)

Defined in: [bee-js/src/modules/messaging.ts:153](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/messaging.ts#L153)

Mines the signer (a private key) to be used to send GSOC messages to the specific target overlay address.

#### Parameters

##### targetOverlay

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`PeerAddress`](../classes/PeerAddress.md)

##### identifier

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Identifier`](../classes/Identifier.md)

##### proximity

`number` = `12`

#### Returns

[`PrivateKey`](../classes/PrivateKey.md)

***

### gsocSend()

> **gsocSend**(`postageBatchId`, `signer`, `identifier`, `data`, `options?`, `requestOptions?`): `Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

Defined in: [bee-js/src/modules/messaging.ts:188](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/messaging.ts#L188)

Sends a GSOC message with the specified signer and identifier.

**Warning! Only full nodes can accept GSOC messages.**

#### Parameters

##### postageBatchId

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](../classes/BatchId.md)

##### signer

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`PrivateKey`](../classes/PrivateKey.md)

##### identifier

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Identifier`](../classes/Identifier.md)

##### data

`string` | `Uint8Array`\<`ArrayBufferLike`\>

##### options?

[`UploadOptions`](../interfaces/UploadOptions.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`UploadResult`](../interfaces/UploadResult.md)\>

***

### gsocSubscribe()

> **gsocSubscribe**(`address`, `identifier`, `handler`): [`GsocSubscription`](../interfaces/GsocSubscription.md)

Defined in: [bee-js/src/modules/messaging.ts:215](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/messaging.ts#L215)

Subscribes to GSOC messages for the specified owner (of the signer) and identifier.

**Warning! Only full nodes can accept GSOC messages.**

#### Parameters

##### address

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`EthAddress`](../classes/EthAddress.md)

##### identifier

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`Identifier`](../classes/Identifier.md)

##### handler

[`GsocMessageHandler`](../interfaces/GsocMessageHandler.md)

#### Returns

[`GsocSubscription`](../interfaces/GsocSubscription.md)

***

### pssReceive()

> **pssReceive**(`topic`, `timeoutMsec`): `Promise`\<[`Bytes`](../classes/Bytes.md)\>

Defined in: [bee-js/src/modules/messaging.ts:113](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/messaging.ts#L113)

Receives a single message using the Postal Service for Swarm.

**Warning! Only full nodes can accept PSS messages.**

#### Parameters

##### topic

[`Topic`](../classes/Topic.md)

Topic name

##### timeoutMsec

`number` = `0`

Timeout in milliseconds

#### Returns

`Promise`\<[`Bytes`](../classes/Bytes.md)\>

***

### pssSend()

> **pssSend**(`postageBatchId`, `topic`, `target`, `data`, `recipient?`, `requestOptions?`): `Promise`\<`void`\>

Defined in: [bee-js/src/modules/messaging.ts:55](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/messaging.ts#L55)

Sends data to a recipient or target with the Postal Service for Swarm.

**Warning! Only full nodes can accept PSS messages.**

#### Parameters

##### postageBatchId

Postage BatchId that will be assigned to the sent message.

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`BatchId`](../classes/BatchId.md)

##### topic

[`Topic`](../classes/Topic.md)

Topic name

##### target

`string`

Target message address prefix

##### data

Message to send

`string` | `Uint8Array`\<`ArrayBufferLike`\>

##### recipient?

Optional recipient public key

`string` | [`PublicKey`](../classes/PublicKey.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<`void`\>

***

### pssSubscribe()

> **pssSubscribe**(`topic`, `handler`): [`PssSubscription`](../interfaces/PssSubscription.md)

Defined in: [bee-js/src/modules/messaging.ts:79](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/messaging.ts#L79)

Subscribes to messages for the given topic with the Postal Service for Swarm.

**Warning! Only full nodes can accept PSS messages.**

#### Parameters

##### topic

[`Topic`](../classes/Topic.md)

Topic name

##### handler

[`PssMessageHandler`](../interfaces/PssMessageHandler.md)

Message handler interface

#### Returns

[`PssSubscription`](../interfaces/PssSubscription.md)
