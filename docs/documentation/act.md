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
const postageBatchId = new BatchId('f2949db4cfa4f5140ed3ef29f651d189175a8cb9534c992d3c3212b17f0b67f7');

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
Reference: 98bc4076efe5736aa682649c1928cbc9e0ac11d395f7ed0e67126ff660f5410a238e14f8b1d74f7df6121b8450d79ca789a257eeb84c5ca7dda3ed08a6859934
History Reference: 06ee838e1f9b26c6d44077a2e63ad5ba9ecc143f278f9301f477eb99391f5796
```

The first reference `Reference` is used on its own for reviewing the list contents and updating the list. It is encrypted so only the list creator can view the list contents.

The seconde reference `History Reference` is used along with the first `Reference` for creating a new grantee list based on the list referred to by the `Reference`.

## Update Grantees

In order to update grantees we pass an object in this format to the `bee.patchGrantees` method containing the public keys we wish to add or remove from the list along with the `History Reference` and the grantee list `Reference` and a valid postage stamp:

```js
bee.patchGrantees(postageBatchId, granteeListRef, granteeHistoryRef, {
            add: [grantee1, grantee2], // Add the new grantee
            revoke: [],
    });
```

Calling this method will create an entirely new grantees list based on our first list and will return the `Reference` and `History Reference` for the new list. 

This ***WILL NOT*** update which users had access to content uploaded using the first grantees list, it is simply creating a new list with a different set of grantees which can be used for uploading content accessible to the new set.

Full example script:

```js
import { Bee, PublicKey, BatchId, Reference } from '@ethersphere/bee-js';

// Initialize Bee instance
const bee = new Bee('http://localhost:1643'); // Correct port is 1643

// Grantee's public key to be added (replace with the actual key)
const grantee = new PublicKey('03636056d1e08f100c5acaf14d10070102de9444c97b2e8215305ab3e97254ede6');

// Grantee list reference and history reference (replace with actual references from `createGrantees`)
const granteeListRef = new Reference('98bc4076efe5736aa682649c1928cbc9e0ac11d395f7ed0e67126ff660f5410a238e14f8b1d74f7df6121b8450d79ca789a257eeb84c5ca7dda3ed08a6859934')
const granteeHistoryRef = new Reference('06ee838e1f9b26c6d44077a2e63ad5ba9ecc143f278f9301f477eb99391f5796')

// Your postage batch ID (replace with a valid one)
const postageBatchId = new BatchId('f2949db4cfa4f5140ed3ef29f651d189175a8cb9534c992d3c3212b17f0b67f7');

// Function to update the grantee list by adding the new public key
async function updateGranteeList() {
  try {
    // Call the patchGrantees function to add the new public key
    const response = await bee.patchGrantees(postageBatchId, granteeListRef, granteeHistoryRef, {
            add: [grantee], // Add the new grantee
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
Updated Reference: 363430f8c500e7ea7d23eff1f14674cf6d46ce1640684edad7cc2e5631c37bbaf9dc5b0f5ea42f919191c77187a7f1f40adfd1ab60bc84f1ae4f2d7bf42b98bd
Updated History Reference: c2a43bea8abaae8ef31141ef8ec953097c76f48c2a14c1a6119bb110675e5378
```

## Get Grantees List

In order to view the members of our grantees list we need to use the `Reference` returned when we create or update a list. We will view both our original list and the updated list based on the original list using the respective `Reference` from each list:

```js
import { Bee, Reference } from '@ethersphere/bee-js';

// Initialize Bee instance with the correct port (1643)
const bee = new Bee('http://localhost:1643');


// Grantee list references (the reference returned from the `createGrantees` function)
const granteeListRef_01 = new Reference('98bc4076efe5736aa682649c1928cbc9e0ac11d395f7ed0e67126ff660f5410a238e14f8b1d74f7df6121b8450d79ca789a257eeb84c5ca7dda3ed08a6859934');
const granteeListRef_02 = new Reference('363430f8c500e7ea7d23eff1f14674cf6d46ce1640684edad7cc2e5631c37bbaf9dc5b0f5ea42f919191c77187a7f1f40adfd1ab60bc84f1ae4f2d7bf42b98bd');

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
const postageBatchId = new BatchId('f2949db4cfa4f5140ed3ef29f651d189175a8cb9534c992d3c3212b17f0b67f7');

// Grantee history reference (the reference returned from the `createGrantees` function)
const granteeHistoryRef1 = new Reference('06ee838e1f9b26c6d44077a2e63ad5ba9ecc143f278f9301f477eb99391f5796');
const granteeHistoryRef2 = new Reference('c2a43bea8abaae8ef31141ef8ec953097c76f48c2a14c1a6119bb110675e5378');

// Sample data to upload
const fileData = 'This is a sample string that will be uploaded securely using ACT. ABCDE.';

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
uploadWithACT(granteeHistoryRef1);
uploadWithACT(granteeHistoryRef2);
```

Example output:

```bash
File uploaded successfully with ACT:
Reference: d3d4485efcc22acdf4d20a31d79edc3220655151bd15cec0df9111e0c0f89e86
History reference
06ee838e1f9b26c6d44077a2e63ad5ba9ecc143f278f9301f477eb99391f5796
File uploaded successfully with ACT:
Reference: d3d4485efcc22acdf4d20a31d79edc3220655151bd15cec0df9111e0c0f89e86
History reference
c2a43bea8abaae8ef31141ef8ec953097c76f48c2a14c1a6119bb110675e5378
```

The reference hash is the same for each upload since the content is the same. The reference hash along with a `History Reference` and the uploader's public key are required in order to access the content uploaded with ACT.

You can choose which `History Reference` to share depending on which set of public keys you wish to authorize to download the content.

## Download With ACT

The example below uses the first `History Reference`, and so can only gives access to the single public key in the grantees list it refers to. If we wish to give both public keys access then we could share the other key.

```bash
curl -X GET "http://localhost:1633/bzz/d3d4485efcc22acdf4d20a31d79edc3220655151bd15cec0df9111e0c0f89e86/"   -H "swarm-act-publisher: 0295562f9c1013d1db29f7aaa0c997c4bb3f1fc053bd0ed49a3d98584490cc8f96"   -H "swarm-act-history-address: 06ee838e1f9b26c6d44077a2e63ad5ba9ecc143f278f9301f477eb99391f5796"   --output downloaded_file.txt
```