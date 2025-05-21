# Interface: Data

Defined in: [bee-js/src/types/index.ts:292](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L292)

Helper interface that adds utility functions
to work more conveniently with bytes in normal
user scenarios.

Concretely: text(), hex(), json()

## Extends

- `Uint8Array`

## Indexable

\[`index`: `number`\]: `number`

## Methods

### hex()

> **hex**(): `string`

Defined in: [bee-js/src/types/index.ts:301](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L301)

Converts the binary data into hex-string.

#### Returns

`string`

***

### json()

> **json**(): `Record`\<`string`, `unknown`\>

Defined in: [bee-js/src/types/index.ts:306](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L306)

Converts the binary data into string which is then parsed into JSON.

#### Returns

`Record`\<`string`, `unknown`\>

***

### text()

> **text**(): `string`

Defined in: [bee-js/src/types/index.ts:296](https://github.com/ethersphere/bee-js/blob/3abbe2b1b264d6b586511a56e93badb2236bd09d/src/types/index.ts#L296)

Converts the binary data using UTF-8 decoding into string.

#### Returns

`string`
