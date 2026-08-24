# Class: Tag

Defined in: [bee-js/src/modules/tag.ts:13](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/tag.ts#L13)

Tag operations for tracking upload and synchronization progress.

Accessed as `bee.tag`.

## Constructors

### Constructor

> **new Tag**(`context`): `Tag`

Defined in: [bee-js/src/modules/tag.ts:14](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/tag.ts#L14)

#### Parameters

##### context

`BeeContext`

#### Returns

`Tag`

## Methods

### create()

> **create**(`requestOptions?`): `Promise`\<[`Tag`](../interfaces/Tag.md)\>

Defined in: [bee-js/src/modules/tag.ts:21](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/tag.ts#L21)

Creates a new tag which is meant for tracking upload and synchronization progress.

#### Parameters

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`Tag`](../interfaces/Tag.md)\>

***

### delete()

> **delete**(`tagUid`, `requestOptions?`): `Promise`\<`void`\>

Defined in: [bee-js/src/modules/tag.ts:57](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/tag.ts#L57)

Deletes a tag.

#### Parameters

##### tagUid

UID or tag object to be deleted

`number` | [`Tag`](../interfaces/Tag.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<`void`\>

***

### get()

> **get**(`tagUid`, `requestOptions?`): `Promise`\<[`Tag`](../interfaces/Tag.md)\>

Defined in: [bee-js/src/modules/tag.ts:45](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/tag.ts#L45)

Retrieves tag information from the Bee node.

#### Parameters

##### tagUid

UID or tag object to be retrieved

`number` | [`Tag`](../interfaces/Tag.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`Tag`](../interfaces/Tag.md)\>

***

### getAll()

> **getAll**(`options?`, `requestOptions?`): `Promise`\<[`Tag`](../interfaces/Tag.md)[]\>

Defined in: [bee-js/src/modules/tag.ts:31](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/tag.ts#L31)

Fetches all tags in a paginated manner.

#### Parameters

##### options?

[`AllTagsOptions`](../interfaces/AllTagsOptions.md)

Specify `limit` and `offset` to paginate through the tags.

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<[`Tag`](../interfaces/Tag.md)[]\>

***

### update()

> **update**(`tagUid`, `reference`, `requestOptions?`): `Promise`\<`void`\>

Defined in: [bee-js/src/modules/tag.ts:70](https://github.com/ethersphere/bee-js/blob/bab2b2e5a3874187d29a1c1e6c70f2f645ed53c2/src/modules/tag.ts#L70)

Updates a tag's total chunks count.

#### Parameters

##### tagUid

UID or tag object to be updated

`number` | [`Tag`](../interfaces/Tag.md)

##### reference

The root reference that contains all the chunks to be counted

`string` | [`Reference`](../classes/Reference.md)

##### requestOptions?

[`BeeRequestOptions`](../type-aliases/BeeRequestOptions.md)

Options for making requests, such as timeouts, custom HTTP agents, headers, etc.

#### Returns

`Promise`\<`void`\>
