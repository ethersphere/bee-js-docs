---
title: Utility Classes
id: utilities
slug: /utilities
sidebar_label: Utility Classes
---


`bee-js` includes a variety of utility classes with methods for working with different data types, Ethereum-compatible keys, signatures, addresses, token values, content references, hashing, and more. 

## *Bytes* - Data Conversions & Manipulation

The `Bytes` class in `bee-js` provides a convenient wrapper for manipulating byte arrays, converting between encodings, slicing, hashing, and more. 
It’s used throughout `bee-js` as the basis for cryptographic types like `Signature`, `Reference`, `PrivateKey`, and more which extend the `Bytes` class.

It is also a **core data type** used throughout the SDK as expected input/returned data type for various methods.

```js
// Import Bytes class
import { Bytes } from '@ethersphere/bee-js'
```

### Hashing with `keccak256`  

**Methods:**
- `Bytes.fromUtf8()`: Converts a UTF-8 string to a `Bytes` instance.
- `Bytes.keccak256()`: Computes the keccak256 hash of the given byte input.
- `toHex()`: Converts the byte data to a hexadecimal string.

```js
// --- Hashing with keccak256 ---
console.log('--- keccak256 Hashing ---')
console.log('Empty string hash:', Bytes.keccak256(Bytes.fromUtf8('')).toHex())
console.log('Hello, world! hash:', Bytes.keccak256(Bytes.fromUtf8('Hello, world!')).toHex())
```

```bash
--- keccak256 Hashing ---
Empty string hash: c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470
Hello, world! hash: b6e16d27ac5ab427a7f68900ac5559ce272dc6c37c82b3e052246c82244c50e4
```


### Creating *Bytes* Instances  
**Methods:**
- `Bytes.fromUtf8()`: Creates a `Bytes` instance from a UTF-8 string.
- `Bytes.fromSlice()`: Creates a `Bytes` instance from a slice of a `Uint8Array`.
- `new Bytes(...)`: Constructs a new `Bytes` instance from various inputs like strings, `ArrayBuffer`, or `Uint8Array`.
- `toHex()`: Converts the byte data to a hexadecimal string.

```js
// --- Creating Bytes instances ---
console.log('\n--- Creating Bytes Instances ---')

const bytesFromString = Bytes.fromUtf8('Swarm')
console.log('From UTF-8 string:', bytesFromString.toHex())

const source = new Uint8Array([1, 2, 3, 4, 5])
const slice = Bytes.fromSlice(source, 1, 3)
console.log('From slice of Uint8Array:', slice.toHex())

const fromHex = new Bytes('0xdeadbeef')
console.log('From hex string:', fromHex.toHex())

const cloned = new Bytes(fromHex)
console.log('Cloned Bytes instance:', cloned.toHex())

const fromArray = new Bytes(new Uint8Array([16, 32, 48]))
console.log('From raw Uint8Array:', fromArray.toHex())
```

```bash
--- Creating Bytes Instances ---
From UTF-8 string: 537761726d
From slice of Uint8Array: 020304
From hex string: deadbeef
Cloned Bytes instance: deadbeef
From raw Uint8Array: 102030
```

### Accessing and Converting Bytes  
**Methods:**
- `toUint8Array()`: Converts the `Bytes` instance to a `Uint8Array`.
- `toHex()`: Converts the byte data to a hexadecimal string.
- `toBase64()`: Converts the byte data to a Base64-encoded string.
- `toBase32()`: Converts the byte data to a Base32-encoded string.
- `toUtf8()`: Converts the byte data to a UTF-8 string.
- `toString()`: Converts the byte data to a hexadecimal string (alias for `toHex()`).
- `toJSON()`: Parses the byte data (assumed to be a JSON string) and returns the corresponding JavaScript object.

```javascript
// --- Accessing and Converting Bytes ---
console.log('\n--- Accessing and Converting Bytes ---')

const data = Bytes.fromUtf8('hello')

console.log('toUint8Array():', data.toUint8Array())
console.log('toHex():', data.toHex())
console.log('toBase64():', data.toBase64())
console.log('toBase32():', data.toBase32())
console.log('toUtf8():', data.toUtf8())
console.log('toString():', data.toString())

const json = Bytes.fromUtf8('{"a": 1, "b": true}')
console.log('toJSON():', json.toJSON())
```

```bash
--- Accessing and Converting Bytes ---
toUint8Array(): Uint8Array(5) [ 104, 101, 108, 108, 111 ]
toHex(): 68656c6c6f
toBase64(): aGVsbG8=
toBase32(): NBSWY3DP
toUtf8(): hello
toString(): 68656c6c6f
toJSON(): { a: 1, b: true }
```

## *PrivateKey* - Key Management & Signing

The `PrivateKey` class extends the `Bytes` class. It is initialized with an Ethereum style private key which can then be used for signing arbitrary messages. It also has methods for returning the derived Ethereum address and public key.

```javascript
import { PrivateKey } from '@ethersphere/bee-js'

// This example shows interoperability of crypto types

// Initialize PrivateKey with 32-byte hexadecimal private key
const signer = new PrivateKey('0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef')
console.log('PrivateKey initialized:', signer.toHex())

// Message to be signed
const message = 'Hello world!'
console.log('Message to sign:', message)

// Message signing
const signature = signer.sign(message) // type Signature
console.log('Generated signature:', signature.toHex())

// Public key derivation
const recovered = signature.recoverPublicKey(message) // type PublicKey
console.log('Recovered public key:', recovered.toHex())

// Ethereum account address derivation
const address = recovered.address() // type EthAddress
console.log('Recovered Ethereum address:', address.toHex())
```

```bash
PrivateKey initialized: 0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef
Message to sign: Hello world!
Generated signature: 0f0b277880c01e1ed39ad3fadcbd1d317c89ed4ecc9048072a18b370eff3162f5519fa0fa307ed66bac9645bf6e1e5350b3e91a99bcf7104ecfcb6d8443b81301c
Recovered public key: 4646ae5047316b4230d0086c8acec687f00b1cd9d1dc634f6cb358ac0a9a8ffffe77b4dd0a4bfb95851f3b7355c781dd60f8418fc8a65d14907aff47c903a559
Recovered Ethereum address: fcad0b19bb29d4674531d6f115237e16afce377c
```

## *BZZ* and *DAI* - Token Conversions & Formatting 

```javascript
import { BZZ, DAI } from '@ethersphere/bee-js'
```

**Initializing and formatting BZZ and DAI tokens.**

```javascript
import { BZZ, DAI } from '@ethersphere/bee-js'
```

**BZZ token initialization, formatting it as PLUR string, BigInt, and decimal string.**

```javascript
// --- BZZ Initialization ---
console.log('--- BZZ Initialization ---')
const bzz = BZZ.fromDecimalString('13.37')
console.log('BZZ in PLUR String:', bzz.toPLURString())
console.log('BZZ as PLUR BigInt:', bzz.toPLURBigInt())
console.log('BZZ in Decimal String:', bzz.toDecimalString())
```

```bash
--- BZZ Initialization ---
BZZ in PLUR String: 133700000000000000
BZZ as PLUR BigInt: 133700000000000000n
BZZ in Decimal String: 13.3700000000000000
```

**DAI token initialization, converting from Wei to Decimal string and back.**

```javascript
// --- DAI Initialization ---
console.log('--- DAI Initialization ---')
const daiFromWei = DAI.fromWei('4596417133719887384')
console.log('DAI from Wei to Decimal String:', daiFromWei.toDecimalString())
console.log('DAI from Decimal String to Wei BigInt:', DAI.fromDecimalString('4.596417133719887384').toWeiBigInt())
console.log('DAI from Decimal String to Wei String:', DAI.fromDecimalString('4.596417133719887384').toWeiString())
```

```bash
--- DAI Initialization ---
DAI from Wei to Decimal String: 4.596417133719887384
DAI from Decimal String to Wei BigInt: 4596417133719887384n
DAI from Decimal String to Wei String: 4596417133719887384
```

**Performing arithmetic on BZZ tokens by sending and receiving amounts.**

```javascript
// --- BZZ Arithmetic ---
console.log('--- BZZ Arithmetic ---')
const sent = BZZ.fromDecimalString('1.89')
const received = BZZ.fromDecimalString('45.600000061124')
console.log('BZZ after arithmetic (sent + received):', sent.plus('401100000000000000').minus(received).toDecimalString())
```

```bash
--- BZZ Arithmetic ---
BZZ after arithmetic (sent + received): -3.6000000611240000
```

**Converting BZZ tokens to DAI tokens using a specified exchange rate.**

```javascript
// --- Convert BZZ to DAI ---
console.log('--- Convert BZZ to DAI ---')
const exchangeRate = DAI.fromDecimalString('0.3659')
const bzzForExchange = BZZ.fromDecimalString('1000')
console.log('BZZ exchanged to DAI at rate 0.3659:', bzzForExchange.exchangeToDAI(exchangeRate).toDecimalString())
```

```bash
--- Convert BZZ to DAI ---
BZZ exchanged to DAI at rate 0.3659: 365.900000000000000000
```

**Converting DAI tokens to BZZ tokens using the same exchange rate.**

```javascript
// --- Convert DAI to BZZ ---
console.log('--- Convert DAI to BZZ ---')
const dai = DAI.fromDecimalString('2.591923154542010243')
console.log('DAI exchanged to BZZ at rate 0.3659:', dai.exchangeToBZZ(exchangeRate).toDecimalString())
```

```bash
--- Convert DAI to BZZ ---
DAI exchanged to BZZ at rate 0.3659: 7.0836926880076803
```

## *Reference* - Reference Hashes and CIDs 

The `Reference` class is used to represent content reference hashes and cids, and conversions between them.

```javascript
import { Reference } from '@ethersphere/bee-js'

const hash = '44ef8a919a7a2a6fe36712d4512047db406cc7ac5c06da7731e0cb87bab10ff9'
const cid = 'bah5acgzaitxyvem2pivg7y3hclkfcich3nagzr5mlqdnu5zr4dfypovrb74q'

// Convert CID to hash (Hex)
console.log('CID to Hash (Hex):', new Reference(cid).toHex())

// Convert Hash (Hex) to CID (Accepts 'manifest' or 'feed' types)
console.log('Hash to CID (manifest type):', new Reference(hash).toCid('manifest'))
```

```bash
CID to Hash (Hex): 44ef8a919a7a2a6fe36712d4512047db406cc7ac5c06da7731e0cb87bab10ff9
Hash to CID (manifest type): bah5acgzaitxyvem2pivg7y3hclkfcich3nagzr5mlqdnu5zr4dfypovrb74q
```


