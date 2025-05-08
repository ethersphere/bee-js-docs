---
title: ACT (Access Control Trie)
id: act
slug: /act
sidebar_label: ACT
---

ACT, or Access Control Trie, is a decentralized permission system built into the Swarm network that allows you to restrict access to uploaded content.

When you upload data to Swarm using ACT, only the original uploader and users with public keys listed in an associated grantee list are able to retrieve and decrypt that data. The grantee list is published separately and cryptographically referenced during upload and download operations.

ACT is ideal for use cases such as the serialized release of content like a podcast or newsletter where the publisher wishes to limit access to subscribers only.

:::warning
Once a file is uploaded with ACT, any node whose public key is on the ACT grantees list referenced during the upload ***will have permanent access to that file*** as long as the file reference and history reference returned from the upload has been shared with them. 

Updating the grantees list to remove a public key ***will not revoke access*** to the content retroactively.

Likewise, re-uploading the content using the new grantees list will also ***not retroactively revoke access*** to the content.
:::

## Create Grantees List

First we create a grantees list with the public keys of anyone we want to grant access to.

### Example Script

The example script below performs the following key operations:

1. Initializes a Bee client.
2. Defines a list of grantee public keys.
3. Specifies a valid postage batch ID.
4. Calls `bee.createGrantees()` to create a new grantee list.
5. Logs the resulting `ref` and `historyref`.

```js
import { Bee, PublicKey, BatchId } from '@ethersphere/bee-js';

// Initialize Bee instance
const bee = new Bee('http://localhost:1633');

// Grantee's public key (replace with the actual key(s) of the node(s) you wish to grant access to)
const grantees = [
  new PublicKey('027d0c4759f689ea3dd3eb79222870671c492cb99f3fade275bcbf0ea39cd0ef6e'),
];

// Your postage batch ID (replace with your own valid postage batch ID)
const postageBatchId = new BatchId('0258a225fe8da54cc6537eb8b12fcf6706c7873dbe19b9381d31729aa0405398');

async function createGranteeList() {
  try {
    // Create the grantee list using `bee.createGrantees()` method
    const response = await bee.createGrantees(postageBatchId, grantees);

    // Log the response (ref and history ref)
    console.log('Grantee List Created Successfully:');
    console.log('Reference:', response.ref.toHex());
    console.log('History Reference:', response.historyref.toHex());
  } catch (error) {
    console.error('Error creating grantee list:', error);
  }
}

// Call the function to create the grantee list
createGranteeList();
```

Example output:

```bash
Grantee List Created Successfully:
Reference: 69da034fdae049eed9a22ec48b98a08ed5d363d48076f88c44ffe3367a18e306cae6aaf1cfce72d59262b9fb9293e15469c01c6a2626bb62478116cc98fb303b
History Reference: 18d6f58a1d3c8253a5fc47023d49e9011236ead43724e595e898e1b422b77b19
```

The first 64 byte (128 hex digit) reference `Grantee List Reference` (`ref`) is used on its own for reviewing the list contents and updating the list. 

The second reference 32 byte (64 hex digit) `History Reference` (`historyref`) is used for uploading with ACT and is also used along with the first `ref` for creating a new updated grantee list based on the original list referred to by the `ref`.

## Update Grantees List

:::info
Although we refer to this operation as an "update", due to Swarm's immutable nature, the original list is not modified by this operation. Rather a new list is created with the specified grantee keys added or removed from the original list. This operation ***DOES NOT*** retroactively add or remove access to content uploaded with the original ACT list.
:::

To update a grantees list, call the `bee.patchGrantees()` method with the following arguments:

* A valid postage batch ID
* The original list’s `ref` and `historyref`
* An object specifying public keys to `add` or `revoke`

```js
bee.patchGrantees(postageBatchId, ref, historyref, {
  add: [grantee1, grantee2],
  revoke: [],
});
```

Calling this method returns the new list’s updated `ref` and `historyref`, which you should use for future updates or access. 

### Example Script

The example script below performs the following key steps:

1. Initializes the Bee client and defines two public keys to add as grantees.
2. Provides the existing grantee list’s `ref` and `historyref`, and a valid postage batch ID.
3. Calls `bee.patchGrantees()` to add the new keys to the list.
4. Logs the updated grantee list’s `ref` and `historyref`.

```js
import { Bee, PublicKey, BatchId, Reference } from '@ethersphere/bee-js';

// Initialize Bee instance
const bee = new Bee('http://localhost:1633'); 

// Grantee's public key(s) to be added (replace with the actual key)
const grantee1 = new PublicKey('027d0c4759f689ea3dd3eb79222870671c492cb99f3fade275bcbf0ea39cd0ef6e');
const grantee2 = new PublicKey('03636056d1e08f100c5acaf14d10070102de9444c97b2e8215305ab3e97254ede6');

// Grantee list reference and history reference returned from initial list creation
const granteeListRef = new Reference('69da034fdae049eed9a22ec48b98a08ed5d363d48076f88c44ffe3367a18e306cae6aaf1cfce72d59262b9fb9293e15469c01c6a2626bb62478116cc98fb303b')
const granteeHistoryRef = new Reference('18d6f58a1d3c8253a5fc47023d49e9011236ead43724e595e898e1b422b77b19')

// Your postage batch ID (replace with a valid one)
const postageBatchId = new BatchId('0258a225fe8da54cc6537eb8b12fcf6706c7873dbe19b9381d31729aa0405398');

// Function to update the grantee list by adding the new public key
async function updateGranteeList() {
  try {
    // Call the patchGrantees function to add the new public key
    const response = await bee.patchGrantees(postageBatchId, granteeListRef, granteeHistoryRef, {
            add: [grantee1, grantee2], // Add the new grantee
            revoke: [],
    });

    // Log the updated grantee list references
    console.log('Grantee List Updated Successfully:');
    console.log('Updated Reference:', response.ref.toHex());
    console.log('Updated History Reference:', response.historyref.toHex());
  } catch (error) {
    console.error('Error updating grantee list:', error.message);
    if (error.response) {
      // If there's an error, log the full response for more details
      console.error('Response Status:', error.response.status);
      console.error('Response Body:', JSON.stringify(error.response.body, null, 2));
    }
  }
}

// Call the function to update the grantee list
updateGranteeList();
```

Example output:

```bash
Grantee List Updated Successfully:
Updated Reference: a029324c42e7911032b83155f487d545b6e07b521a90fce90a266f308c0a455417e71bc03621868da2f6e84357ba772cb03b408fce79862b03d2e082004eccd8
Updated History Reference: d904f0790acb7edfda6a078176d64ec026b40298bfdbceb82956533e31489fcd
```

## Get Grantees List

In order to view the members of our grantees list we need to use the 64 byte `ref` returned when we create or update a list. We will view both our original list and the updated list based on the original list using the respective `ref` from each list:

:::info
The grantee list is encrypted, and only the owner can view the grantee list, make sure to use the owner node when using the `bee.getGrantees()` method.
:::

### Example Script

The example script below performs the following operations:

1. Initializes a Bee client.
2. Defines two existing grantee list 64 byte `ref` copied from the results of our previous example scripts.
3. Calls `bee.getGrantees()` for each `ref` to retrieve the corresponding grantee list.
4. Logs the status, status text, and list of grantee public keys in compressed hex format.


```js
import { Bee, Reference } from '@ethersphere/bee-js';

// Initialize Bee instance 
const bee = new Bee('http://localhost:1633');


// Grantee list references (the reference returned from the `bee.createGrantees()` function)
const granteeListRef_01 = new Reference('69da034fdae049eed9a22ec48b98a08ed5d363d48076f88c44ffe3367a18e306cae6aaf1cfce72d59262b9fb9293e15469c01c6a2626bb62478116cc98fb303b');
const granteeListRef_02 = new Reference('a029324c42e7911032b83155f487d545b6e07b521a90fce90a266f308c0a455417e71bc03621868da2f6e84357ba772cb03b408fce79862b03d2e082004eccd8');

// Function to get the grantee list
async function getGranteeList(granteeListRef) {
  try {
    // Call the getGrantees function with the reference
    const result = await bee.getGrantees(granteeListRef);

    // Log the full response
    console.log('Grantee List Retrieved:');
    console.log('Status:', result.status);
    console.log('Status Text:', result.statusText);

    // Log the grantee lists as arrays of their hex string representations 
    console.log('Grantees:', result.grantees.map(grantee => grantee.toCompressedHex()));

  } catch (error) {
    console.error('Error retrieving grantee list:', error);
  }
}

// Call the function to fetch the grantee list
getGranteeList(granteeListRef_01);
getGranteeList(granteeListRef_02);
```

Example output:

```bash
Grantee List Retrieved:
Status: 200
Status Text: OK
Grantees: [
  '027d0c4759f689ea3dd3eb79222870671c492cb99f3fade275bcbf0ea39cd0ef6e'
]
Grantee List Retrieved:
Status: 200
Status Text: OK
Grantees: [
  '027d0c4759f689ea3dd3eb79222870671c492cb99f3fade275bcbf0ea39cd0ef6e',
  '03636056d1e08f100c5acaf14d10070102de9444c97b2e8215305ab3e97254ede6'
]
```

The first list of grantees contains the first public key we gave access to when we created the list, while the second one contains both the first and the second one we added when we created our second list based on the first one. 

## Upload With ACT

We can upload our content with either of the two lists we created depending on which set of users we wish to give access too. In the example below, we use both lists.

### Example Script

The example script below performs the following operations:

1. Initializes a Bee client.
2. Defines a postage batch ID and two ACT grantee list 32 byte `historyref` hashes returned from the operations in the previous examples.
3. Defines a string to upload as a sample file.
4. Calls `bee.uploadFile()` twice with ACT enabled, specifying a `historyRef` each time to enforce access control.
5. Logs the resulting Swarm reference and history reference after each upload.

```js
import { Bee, BatchId, Reference } from '@ethersphere/bee-js';

// Initialize Bee instance
const bee = new Bee('http://localhost:1633');

// Your postage batch ID (replace with a valid one)
const postageBatchId = new BatchId('0258a225fe8da54cc6537eb8b12fcf6706c7873dbe19b9381d31729aa0405398');

// Grantee list reference (the reference returned from the `bee.createGrantees()` function)
const historyRef_01 = new Reference('18d6f58a1d3c8253a5fc47023d49e9011236ead43724e595e898e1b422b77b19');
const historyRef_02 = new Reference('d904f0790acb7edfda6a078176d64ec026b40298bfdbceb82956533e31489fcd');

// Sample data to upload
const fileData = 'This is a sample string that will be uploaded securely using ACT.';


async function uploadWithACT(historyRef) {
  try {
    // Upload the string with ACT enabled
    const result = await bee.uploadFile(postageBatchId, fileData, 'samplefile.txt', {
        act: true, // Enable ACT for the uploaded data
        actHistoryAddress: historyRef, // Provide the grantee list reference for ACT
      contentType: 'text/plain',
    });

    console.log('File uploaded successfully with ACT:');
    console.log('Reference:', result.reference.toHex());
    console.log("History reference")
    console.log(result.historyAddress.value.toHex())
  } catch (error) {
    console.error('Error uploading file with ACT:', error);
  }
}

// Call the function to upload the file with each `historyref`
uploadWithACT(historyRef_01);
uploadWithACT(historyRef_02);
```

Example output:

```bash
File uploaded successfully with ACT:
Reference: e227acea84e1d55e90baa93a698e79577a5b1c54513925b61476386798b41728
History reference
18d6f58a1d3c8253a5fc47023d49e9011236ead43724e595e898e1b422b77b19
File uploaded successfully with ACT:
Reference: e227acea84e1d55e90baa93a698e79577a5b1c54513925b61476386798b41728
History reference
d904f0790acb7edfda6a078176d64ec026b40298bfdbceb82956533e31489fcd
```

The reference hash is the same for each upload since the content is the same. The reference hash along with a `historyref` and the uploader's public key are required in order to access the content uploaded with ACT.

You can choose which `historyref` to share depending on which set of public keys you wish to authorize to download the content.

## Download With ACT

In order to download using ACT, we must pass in the public key from the grantee list creator along with the file reference and history reference returned from the file upload operation:

### Example Script

The example script below performs the following operations:

1. Initializes a Bee client.
2. Defines a publisher public key and associated file reference + history references for ACT-protected content using the references returned from the upload operation.
3. Calls `bee.downloadFile()` with ACT options (`actPublisher` and `actHistoryAddress`) to access protected data.
4. Logs the decoded file content.


```js
import { Bee, Reference, PublicKey } from '@ethersphere/bee-js'

// Initialize Bee instance
const bee = new Bee('http://localhost:1633')


// Publisher public key used during upload
const publisherPublicKey = new PublicKey('0295562f9c1013d1db29f7aaa0c997c4bb3f1fc053bd0ed49a3d98584490cc8f96');

// File reference and history reference returned from upload operation
const fileRef_01 = new Reference('e227acea84e1d55e90baa93a698e79577a5b1c54513925b61476386798b41728');
const historyRef_01 = new Reference('18d6f58a1d3c8253a5fc47023d49e9011236ead43724e595e898e1b422b77b19');


// Function to download ACT-protected content
async function downloadWithACT(fileRef, historyRef, publisherPubKey) {
  try {
    const result = await bee.downloadFile(fileRef, './', {
        actPublisher: publisherPubKey,
        actHistoryAddress: historyRef
    })

    console.log('Content:', result.data.toUtf8())
  } catch (error) {
    console.error(`Error downloading from reference ${fileRef}:`, error)
  }
}

downloadWithACT(
  fileRef_01,
  historyRef_01,
  publisherPublicKey
)
```

Example terminal output:

```bash
Content: This is a sample string that will be uploaded securely using ACT.
```

In the example above, we used the history reference from the file uploaded using the grantees list with only one public key included (`027d0c4759f689ea3dd3eb79222870671c492cb99f3fade275bcbf0ea39cd0ef6e`), and so it will only be able to be retrieved and decrypted by the node with that public key.

If any other node attempts to download this content then a 404 error will be returned.