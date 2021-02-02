---
title: Bee
hide_title: true
---

# Class: Bee

The Bee class provides a way of interacting with the Bee APIs based on the provided url

**`param`** URL of a running Bee node

## Hierarchy

- **Bee**

## Table of contents

### Constructors

- [constructor](bee#constructor)

### Properties

- [url](bee#url)

### Methods

- [createTag](bee#createtag)
- [downloadData](bee#downloaddata)
- [downloadFile](bee#downloadfile)
- [downloadFileFromCollection](bee#downloadfilefromcollection)
- [downloadReadableData](bee#downloadreadabledata)
- [downloadReadableFile](bee#downloadreadablefile)
- [downloadReadableFileFromCollection](bee#downloadreadablefilefromcollection)
- [pinCollection](bee#pincollection)
- [pinData](bee#pindata)
- [pinFile](bee#pinfile)
- [pssReceive](bee#pssreceive)
- [pssSend](bee#psssend)
- [pssSubscribe](bee#psssubscribe)
- [retrieveTag](bee#retrievetag)
- [unpinCollection](bee#unpincollection)
- [unpinData](bee#unpindata)
- [unpinFile](bee#unpinfile)
- [uploadData](bee#uploaddata)
- [uploadFile](bee#uploadfile)
- [uploadFiles](bee#uploadfiles)
- [uploadFilesFromDirectory](bee#uploadfilesfromdirectory)

## Constructors

### constructor

\+ **new Bee**(`url`: _string_): [_Bee_](bee)

#### Parameters:

| Name  | Type     |
| ----- | -------- |
| `url` | _string_ |

**Returns:** [_Bee_](bee)

Defined in: [index.ts:29](https://github.com/ethersphere/bee-js/blob/2fef9c4/src/index.ts#L29)

## Properties

### url

• `Readonly` **url**: _string_

## Methods

### createTag

▸ **createTag**(): _Promise_<Tag\>

Create new tag

**Returns:** _Promise_<Tag\>

Defined in: [index.ts:161](https://github.com/ethersphere/bee-js/blob/2fef9c4/src/index.ts#L161)

---

### downloadData

▸ **downloadData**(`reference`: _string_): _Promise_<_Uint8Array_\>

Download data as a byte array

#### Parameters:

| Name        | Type     | Description        |
| ----------- | -------- | ------------------ |
| `reference` | _string_ | Bee data reference |

**Returns:** _Promise_<_Uint8Array_\>

Defined in: [index.ts:49](https://github.com/ethersphere/bee-js/blob/2fef9c4/src/index.ts#L49)

---

### downloadFile

▸ **downloadFile**(`reference`: _string_): _Promise_<_FileData_<_Uint8Array_\>\>

Download single file as a byte array

#### Parameters:

| Name        | Type     | Description        |
| ----------- | -------- | ------------------ |
| `reference` | _string_ | Bee file reference |

**Returns:** _Promise_<_FileData_<_Uint8Array_\>\>

Defined in: [index.ts:84](https://github.com/ethersphere/bee-js/blob/2fef9c4/src/index.ts#L84)

---

### downloadFileFromCollection

▸ **downloadFileFromCollection**(`reference`: _string_, `path?`: _string_): _Promise_<_FileData_<_Uint8Array_\>\>

Download single file as a byte array from collection given using the path

#### Parameters:

| Name        | Type     | Default value | Description                                  |
| ----------- | -------- | ------------- | -------------------------------------------- |
| `reference` | _string_ | -             | Bee collection reference                     |
| `path`      | _string_ | ''            | Path of the requested file in the collection |

**Returns:** _Promise_<_FileData_<_Uint8Array_\>\>

file in byte array with metadata

Defined in: [index.ts:142](https://github.com/ethersphere/bee-js/blob/2fef9c4/src/index.ts#L142)

---

### downloadReadableData

▸ **downloadReadableData**(`reference`: _string_): _Promise_<_Readable_\>

Download data as a readable stream

#### Parameters:

| Name        | Type     | Description        |
| ----------- | -------- | ------------------ |
| `reference` | _string_ | Bee data reference |

**Returns:** _Promise_<_Readable_\>

Defined in: [index.ts:58](https://github.com/ethersphere/bee-js/blob/2fef9c4/src/index.ts#L58)

---

### downloadReadableFile

▸ **downloadReadableFile**(`reference`: _string_): _Promise_<_FileData_<_Readable_\>\>

Download single file as a readable stream

#### Parameters:

| Name        | Type     | Description        |
| ----------- | -------- | ------------------ |
| `reference` | _string_ | Bee file reference |

**Returns:** _Promise_<_FileData_<_Readable_\>\>

Defined in: [index.ts:93](https://github.com/ethersphere/bee-js/blob/2fef9c4/src/index.ts#L93)

---

### downloadReadableFileFromCollection

▸ **downloadReadableFileFromCollection**(`reference`: _string_, `path?`: _string_): _Promise_<_FileData_<_Readable_\>\>

Download single file as a readable stream from collection given using the path

#### Parameters:

| Name        | Type     | Default value | Description                                  |
| ----------- | -------- | ------------- | -------------------------------------------- |
| `reference` | _string_ | -             | Bee collection reference                     |
| `path`      | _string_ | ''            | Path of the requested file in the collection |

**Returns:** _Promise_<_FileData_<_Readable_\>\>

file in readable stream with metadata

Defined in: [index.ts:154](https://github.com/ethersphere/bee-js/blob/2fef9c4/src/index.ts#L154)

---

### pinCollection

▸ **pinCollection**(`reference`: _string_): _Promise_<BeeResponse\>

Pin collection with given reference

#### Parameters:

| Name        | Type     | Description              |
| ----------- | -------- | ------------------------ |
| `reference` | _string_ | Bee collection reference |

**Returns:** _Promise_<BeeResponse\>

Defined in: [index.ts:197](https://github.com/ethersphere/bee-js/blob/2fef9c4/src/index.ts#L197)

---

### pinData

▸ **pinData**(`reference`: _string_): _Promise_<BeeResponse\>

Pin data with given reference

#### Parameters:

| Name        | Type     | Description        |
| ----------- | -------- | ------------------ |
| `reference` | _string_ | Bee data reference |

**Returns:** _Promise_<BeeResponse\>

Defined in: [index.ts:215](https://github.com/ethersphere/bee-js/blob/2fef9c4/src/index.ts#L215)

---

### pinFile

▸ **pinFile**(`reference`: _string_): _Promise_<BeeResponse\>

Pin file with given reference

#### Parameters:

| Name        | Type     | Description        |
| ----------- | -------- | ------------------ |
| `reference` | _string_ | Bee file reference |

**Returns:** _Promise_<BeeResponse\>

Defined in: [index.ts:179](https://github.com/ethersphere/bee-js/blob/2fef9c4/src/index.ts#L179)

---

### pssReceive

▸ **pssReceive**(`topic`: _string_, `timeoutMsec?`: _number_): _Promise_<_Uint8Array_\>

Receive message with Postal Service for Swarm

Because sending a PSS message is slow and CPU intensive,
it is not supposed to be used for general messaging but
most likely for setting up an encrypted communication
channel by sending a one-off message.

This is a helper function to wait for exactly one message to
arrive and then cancel the subscription. Additionally a
timeout can be provided for the message to arrive or else
an error will be thrown.

#### Parameters:

| Name          | Type     | Default value | Description             |
| ------------- | -------- | ------------- | ----------------------- |
| `topic`       | _string_ | -             | Topic name              |
| `timeoutMsec` | _number_ | 0             | Timeout in milliseconds |

**Returns:** _Promise_<_Uint8Array_\>

Message in byte array

Defined in: [index.ts:309](https://github.com/ethersphere/bee-js/blob/2fef9c4/src/index.ts#L309)

---

### pssSend

▸ **pssSend**(`topic`: _string_, `target`: _string_, `data`: _string_ \| _Uint8Array_, `recipient?`: _string_): _Promise_<BeeResponse\>

Send to recipient or target with Postal Service for Swarm

#### Parameters:

| Name         | Type                     | Description                   |
| ------------ | ------------------------ | ----------------------------- |
| `topic`      | _string_                 | Topic name                    |
| `target`     | _string_                 | Target message address prefix |
| `data`       | _string_ \| _Uint8Array_ | Message to be sent            |
| `recipient?` | _string_                 | Recipient public key          |

**Returns:** _Promise_<BeeResponse\>

Defined in: [index.ts:237](https://github.com/ethersphere/bee-js/blob/2fef9c4/src/index.ts#L237)

---

### pssSubscribe

▸ **pssSubscribe**(`topic`: _string_, `handler`: PssMessageHandler): PssSubscription

Subscribe to messages with Postal Service for Swarm

#### Parameters:

| Name      | Type              | Description               |
| --------- | ----------------- | ------------------------- |
| `topic`   | _string_          | Topic name                |
| `handler` | PssMessageHandler | Message handler interface |

**Returns:** PssSubscription

Subscription to a given topic

Defined in: [index.ts:254](https://github.com/ethersphere/bee-js/blob/2fef9c4/src/index.ts#L254)

---

### retrieveTag

▸ **retrieveTag**(`tagUid`: _number_ \| Tag): _Promise_<Tag\>

Retrieve tag information from Bee node

#### Parameters:

| Name     | Type            |
| -------- | --------------- |
| `tagUid` | _number_ \| Tag |

**Returns:** _Promise_<Tag\>

Defined in: [index.ts:170](https://github.com/ethersphere/bee-js/blob/2fef9c4/src/index.ts#L170)

---

### unpinCollection

▸ **unpinCollection**(`reference`: _string_): _Promise_<BeeResponse\>

Unpin collection with given reference

#### Parameters:

| Name        | Type     | Description              |
| ----------- | -------- | ------------------------ |
| `reference` | _string_ | Bee collection reference |

**Returns:** _Promise_<BeeResponse\>

Defined in: [index.ts:206](https://github.com/ethersphere/bee-js/blob/2fef9c4/src/index.ts#L206)

---

### unpinData

▸ **unpinData**(`reference`: _string_): _Promise_<BeeResponse\>

Unpin data with given reference

#### Parameters:

| Name        | Type     | Description        |
| ----------- | -------- | ------------------ |
| `reference` | _string_ | Bee data reference |

**Returns:** _Promise_<BeeResponse\>

Defined in: [index.ts:224](https://github.com/ethersphere/bee-js/blob/2fef9c4/src/index.ts#L224)

---

### unpinFile

▸ **unpinFile**(`reference`: _string_): _Promise_<BeeResponse\>

Unpin file with given reference

#### Parameters:

| Name        | Type     | Description        |
| ----------- | -------- | ------------------ |
| `reference` | _string_ | Bee file reference |

**Returns:** _Promise_<BeeResponse\>

Defined in: [index.ts:188](https://github.com/ethersphere/bee-js/blob/2fef9c4/src/index.ts#L188)

---

### uploadData

▸ **uploadData**(`data`: _string_ \| _Uint8Array_, `options?`: UploadOptions): _Promise_<_string_\>

Upload data to a Bee node

#### Parameters:

| Name       | Type                     | Description                                                   |
| ---------- | ------------------------ | ------------------------------------------------------------- |
| `data`     | _string_ \| _Uint8Array_ | Data to be uploaded                                           |
| `options?` | UploadOptions            | Aditional options like tag, encryption, pinning, content-type |

**Returns:** _Promise_<_string_\>

reference is a content hash of the data

Defined in: [index.ts:40](https://github.com/ethersphere/bee-js/blob/2fef9c4/src/index.ts#L40)

---

### uploadFile

▸ **uploadFile**(`data`: _string_ \| _Uint8Array_ \| _Readable_, `name?`: _string_, `options?`: FileUploadOptions): _Promise_<_string_\>

Upload single file to a Bee node

#### Parameters:

| Name       | Type                                   | Description                                                   |
| ---------- | -------------------------------------- | ------------------------------------------------------------- |
| `data`     | _string_ \| _Uint8Array_ \| _Readable_ | Data to be uploaded                                           |
| `name?`    | _string_                               | Name of the uploaded file                                     |
| `options?` | FileUploadOptions                      | Aditional options like tag, encryption, pinning, content-type |

**Returns:** _Promise_<_string_\>

reference is a content hash of the file

Defined in: [index.ts:71](https://github.com/ethersphere/bee-js/blob/2fef9c4/src/index.ts#L71)

---

### uploadFiles

▸ **uploadFiles**(`fileList`: FileList \| File[], `options?`: CollectionUploadOptions): _Promise_<_string_\>

Upload collection of files to a Bee node

Uses the FileList API from the browser.

#### Parameters:

| Name       | Type                    | Description                                      |
| ---------- | ----------------------- | ------------------------------------------------ |
| `fileList` | FileList \| File[]      | list of files to be uploaded                     |
| `options?` | CollectionUploadOptions | Additional options like tag, encryption, pinning |

**Returns:** _Promise_<_string_\>

reference of the collection of files

Defined in: [index.ts:107](https://github.com/ethersphere/bee-js/blob/2fef9c4/src/index.ts#L107)

---

### uploadFilesFromDirectory

▸ **uploadFilesFromDirectory**(`dir`: _string_, `recursive?`: _boolean_, `options?`: CollectionUploadOptions): _Promise_<_string_\>

Upload collection of files to a Bee node

Uses the `fs` module of Node.js

#### Parameters:

| Name        | Type                    | Default value | Description                                               |
| ----------- | ----------------------- | ------------- | --------------------------------------------------------- |
| `dir`       | _string_                | -             | the path of the files to be uploaded                      |
| `recursive` | _boolean_               | true          | specifies if the directory should be recursively uploaded |
| `options?`  | CollectionUploadOptions | -             | Additional options like tag, encryption, pinning          |

**Returns:** _Promise_<_string_\>

reference of the collection of files

Defined in: [index.ts:124](https://github.com/ethersphere/bee-js/blob/2fef9c4/src/index.ts#L124)
