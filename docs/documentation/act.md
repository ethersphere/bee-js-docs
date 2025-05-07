---
title: ACT (Access Control Trie)
id: act
slug: /act
sidebar_label: ACT
---

## 🚧 Under Construction 🚧
:::caution 🚧 This page is under construction

This section is still being worked on. Check back soon for updates!

:::

* Show example of creating grantee list
* Show example of secure upload
* Show example of secure download

ACT, or Access Control Trie, is a decentralized permission system built into the Swarm network that allows you to restrict access to uploaded content.

When you upload data to Swarm using ACT, only the original uploader and users with public keys listed in an associated grantee list are able to retrieve and decrypt that data. The grantee list is published separately and cryptographically referenced during upload and download operations.

ACT is ideal for use cases such as the serialized release of content like a podcast or newsletter where the publisher wishes to limit access to subscribers only.

:::warning
Once a file is uploaded with ACT, any node that is is on the ACT grantees list referenced during the upload ***will have permanent access to that file*** as long as they have the file reference and history reference returned from the upload. 

Updating the grantees list to remove a public key ***will not revoke access*** to the content retroactively.

Likewise, re-uploading the content the content using the new grantees list will also ***not retroactively revoke access*** to the content.
:::

## Create Grantees List

First we create a grantees list with the public keys of anyone we want to grant access to:

```js
import { Bee, PublicKey, BatchId } from '@ethersphere/bee-js';

// Initialize Bee instance
const bee = new Bee('http://localhost:1643');

// Grantee's public key (replace with the actual key)
const grantees = [
  new PublicKey('027d0c4759f689ea3dd3eb79222870671c492cb99f3fade275bcbf0ea39cd0ef6e'),
];

// Your postage batch ID (replace with a valid one)
const postageBatchId = new BatchId('b680c04c49d246538284cadd143cf6e623cd6581347e1bb7d9b62e36334757db');

// Function to create grantees list
async function createGranteeList() {
  try {
    // Create the grantee list using `createGrantees`
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
Reference: a1206faf621e645027bf853ed06e85d3fd7499eb37859f5fba9cdc50d0d822cfef4c524879b8dedcc521f7db2bb09d81d765d01a7e4427093149cbfac9b0f54c
History Reference: 8e74e7dc0c94786b576b55d32c238ebcb4da633ee36ae9beae11aaa98defbb3d
```

The first reference `Reference` is used on its own for reviewing the list contents and updating the list. It is encrypted so only the list creator can view the list contents.

The seconde reference `History Reference` is used along with the first `Reference` for creating a new grantee list based on the list referred to by the `Reference`.

## Update Grantees

In order to update grantees we pass an object in this format to the `bee.patchGrantees` method containing the public keys we wish to add or remove from the list along with the `History Reference` and the grantee list `Reference` and a valid postage stamp:

:::info
Although we refer to the process as "updating", since data on Swarm is immutable, the original grantees list is never modified. Rather, a new version of the list is created based on the original one with the specified public keys removed or added.
:::

```js
bee.patchGrantees(postageBatchId, granteeListRef, granteeHistoryRef, {
            add: [grantee1, grantee2], // Add the new grantee
            revoke: [],
    });
```

Calling this method will create an entirely new grantees list based on our first list and will return the `Reference` and `History Reference` for the new list. 

Full example script:

```js
import { Bee, PublicKey, BatchId, Reference } from '@ethersphere/bee-js';

// Initialize Bee instance
const bee = new Bee('http://localhost:1643'); // Correct port is 1643

// Grantee's public key to be added (replace with the actual key)
const grantee1 = new PublicKey('027d0c4759f689ea3dd3eb79222870671c492cb99f3fade275bcbf0ea39cd0ef6e');
const grantee2 = new PublicKey('03636056d1e08f100c5acaf14d10070102de9444c97b2e8215305ab3e97254ede6');

// Grantee list reference and history reference (replace with actual references from `createGrantees`)
const granteeListRef = new Reference('98bc4076efe5736aa682649c1928cbc9e0ac11d395f7ed0e67126ff660f5410a238e14f8b1d74f7df6121b8450d79ca789a257eeb84c5ca7dda3ed08a6859934')
const granteeHistoryRef = new Reference('06ee838e1f9b26c6d44077a2e63ad5ba9ecc143f278f9301f477eb99391f5796')

// Your postage batch ID (replace with a valid one)
const postageBatchId = new BatchId('b680c04c49d246538284cadd143cf6e623cd6581347e1bb7d9b62e36334757db');

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
      // If there's a response object, log the full response for more details
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
Updated Reference: 50b611b5253a8e1c63dc2d285fd1ee6501eaae626146ac032d3eff537ad1d1c46b032a6ea526e5cf88d6801c854bc9cde4418e87972c010f85a6f70e0beb1d0d
Updated History Reference: 7fd72a4d7a175c6d709c799b990adc8b200ec3e0f413c2ae48026a316bb4810c
```

## Get Grantees List

In order to view the members of our grantees list we need to use the `Reference` returned when we create or update a list. We will view both our original list and the updated list based on the original list using the respective `Reference` from each list:

:::info
The grantee list is encrypted, and only the owner can view the grantee list, make sure to use the owner node when using the `getGrantees` method.
:::


```js
import { Bee, Reference } from '@ethersphere/bee-js';

// Initialize Bee instance with the correct port (1643)
const bee = new Bee('http://localhost:1643');


// Grantee list references (the reference returned from the `createGrantees` function)
const granteeListRef_01 = new Reference('98bc4076efe5736aa682649c1928cbc9e0ac11d395f7ed0e67126ff660f5410a238e14f8b1d74f7df6121b8450d79ca789a257eeb84c5ca7dda3ed08a6859934');
const granteeListRef_02 = new Reference('59c7d5223aa6fe0e66c72752690954c01747352d95b3c26281ac06b45a767d9759b5872a825aaa0eae5b4570816cacadd24065ecc195e77044977260efa70417');

// Function to get the grantee list
async function getGranteeList(granteeListRef) {
  try {
    // Call the getGrantees function with the reference
    const result = await bee.getGrantees(granteeListRef);

    // Log the full response
    console.log('Grantee List Retrieved:');
    console.log('Status:', result.status);
    console.log('Status Text:', result.statusText);

    // Log the as an array of their string representations (compressed hex values)
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

```js
import { Bee, BatchId, Reference } from '@ethersphere/bee-js';

// Initialize Bee instance with the correct port (1643)
const bee = new Bee('http://localhost:1643');

// Your postage batch ID (replace with a valid one)
const postageBatchId = new BatchId('b680c04c49d246538284cadd143cf6e623cd6581347e1bb7d9b62e36334757db');

// Grantee list reference (the reference returned from the `createGrantees` function)
const historyRef_01 = new Reference('73b516518a2c1c5730bea115393dde6ece5d6ad4fe9a31f12073693ec2180f91');
const historyRef_02 = new Reference('1de158acf997a3ee91cf6c5bc60ee3c69e72ae7863fed346f859d79dcab82825');

// Sample data to upload
const fileData = 'This is a sample string that will be uploaded securely using ACT. 01.';

// Function to upload the data with ACT
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

// Call the function to upload the file
uploadWithACT(historyRef_01);
uploadWithACT(historyRef_02);
```

Example output:

```bash
File uploaded successfully with ACT:
Reference: 14bc3765a893f7bac1d179f2606997ece06389b20cedc4b7f707f98e8e3dca5f
History reference
8e74e7dc0c94786b576b55d32c238ebcb4da633ee36ae9beae11aaa98defbb3d
File uploaded successfully with ACT:
Reference: 14bc3765a893f7bac1d179f2606997ece06389b20cedc4b7f707f98e8e3dca5f
History reference
7fd72a4d7a175c6d709c799b990adc8b200ec3e0f413c2ae48026a316bb4810c
```

The reference hash is the same for each upload since the content is the same. The reference hash along with a `History Reference` and the uploader's public key are required in order to access the content uploaded with ACT.

You can choose which `History Reference` to share depending on which set of public keys you wish to authorize to download the content.

## Download With ACT


In order to download using ACT, we must pass in the public key from the grantee list creator along with the file reference and history reference returned from the file upload operation:


```js
import { Bee, Reference, PublicKey } from '@ethersphere/bee-js'

// Initialize Bee instance
const bee = new Bee('http://localhost:1633')


// Publisher public key used during upload
const publisherPublicKey = new PublicKey('0295562f9c1013d1db29f7aaa0c997c4bb3f1fc053bd0ed49a3d98584490cc8f96');

// File reference and history reference returned from upload operation
const fileRef_01 = new Reference('14bc3765a893f7bac1d179f2606997ece06389b20cedc4b7f707f98e8e3dca5f');
const historyRef_01 = new Reference('8e74e7dc0c94786b576b55d32c238ebcb4da633ee36ae9beae11aaa98defbb3d');


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

// Download using two sets of file + history references
downloadWithACT(
  fileRef_01,
  historyRef_01,
  publisherPublicKey
)
```

Example terminal output:

```bash
Content: This is a sample string that will be uploaded securely using ACT. 01.
```

In the example above, we used the history reference from the file uploaded using the grantees list with only one public key included (`027d0c4759f689ea3dd3eb79222870671c492cb99f3fade275bcbf0ea39cd0ef6e`), and so it will only be able to be retrieved and decrypted by the node with that public key.