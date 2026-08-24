# Class: Soc

Defined in: [bee-js/src/modules/soc.ts:11](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/soc.ts#L11)

Single owner chunk (SOC) reader/writer operations.

Accessed as `bee.soc`.

## Constructors

### Constructor

> **new Soc**(`context`): `Soc`

Defined in: [bee-js/src/modules/soc.ts:12](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/soc.ts#L12)

#### Parameters

##### context

`BeeContext`

#### Returns

`Soc`

## Methods

### makeReader()

> **makeReader**(`ownerAddress`, `requestOptions?`): [`SOCReader`](../interfaces/SOCReader.md)

Defined in: [bee-js/src/modules/soc.ts:20](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/soc.ts#L20)

Returns an object for reading single owner chunks.

#### Parameters

##### ownerAddress

The ethereum address of the owner

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`EthAddress`](../classes/EthAddress.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

[`SOCReader`](../interfaces/SOCReader.md)

***

### makeWriter()

> **makeWriter**(`signer?`, `requestOptions?`): [`SOCWriter`](../interfaces/SOCWriter.md)

Defined in: [bee-js/src/modules/soc.ts:35](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/soc.ts#L35)

Returns an object for reading and writing single owner chunks.

#### Parameters

##### signer?

The signer's private key. Falls back to the Bee instance signer.

`string` | `Uint8Array`\<`ArrayBufferLike`\> | [`PrivateKey`](../classes/PrivateKey.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

[`SOCWriter`](../interfaces/SOCWriter.md)
