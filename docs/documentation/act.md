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

```js
import { Bee, PublicKey, BatchId } from '@ethersphere/bee-js';

// Initialize Bee instance
const bee = new Bee('http://localhost:1643');

// Grantee's public key (replace with the actual key)
const grantees = [
  new PublicKey('027d0c4759f689ea3dd3eb79222870671c492cb99f3fade275bcbf0ea39cd0ef6e')
];

// Your postage batch ID (replace with a valid one)
const postageBatchId = new BatchId('955e22d95ca6793db4d22cb1aac1c59f64469293811bb969ac33f0c23f3b1f31');

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
Reference: ac35c416cae0a5481e483b70a55950c0d0ed63f61ead4edc20d6fc70d065fc3792223d08752fa6ea9b6bdf66d55def4fdceb3a2f9d8672aacde209717bfbf8fd
History Reference: 980969082877ba5577e01fd2bfe9941d151a1ca2a58aa8c114a97807e8e94e54
```

## Update Grantees List

```js
import { Bee, PublicKey, BatchId, Reference } from '@ethersphere/bee-js';

// Initialize Bee instance
const bee = new Bee('http://localhost:1643'); // Correct port is 1643

// Grantee's public key to be added (replace with the actual key)
const newGrantee = new PublicKey('03636056d1e08f100c5acaf14d10070102de9444c97b2e8215305ab3e97254ede6');

// Grantee list reference and history reference (replace with actual references from `createGrantees`)
const granteeListRef = new Reference('ac35c416cae0a5481e483b70a55950c0d0ed63f61ead4edc20d6fc70d065fc3792223d08752fa6ea9b6bdf66d55def4fdceb3a2f9d8672aacde209717bfbf8fd')
const granteeHistoryRef = new Reference('980969082877ba5577e01fd2bfe9941d151a1ca2a58aa8c114a97807e8e94e54')

// Your postage batch ID (replace with a valid one)
const postageBatchId = new BatchId('955e22d95ca6793db4d22cb1aac1c59f64469293811bb969ac33f0c23f3b1f31');

// Function to update the grantee list by adding the new public key
async function updateGranteeList() {
  try {
    // Call the patchGrantees function to add the new public key
    const response = await bee.patchGrantees(postageBatchId, granteeListRef, granteeHistoryRef, {
      add: [newGrantee], // Add the new grantee
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
Updated Reference: 4cad43d435bceca6925b3ed750d415a9f78566bb2b7dac90886f9305cd8f2267818cfaf6b0cd00a593a94719ec1cbc0270c76f0c57840c1210667b7b6aa48080
Updated History Reference: ffa62ebf1c0f8f9c756743add487d0e5f0c938309333e283729bdb9ad962da14
```

## Get Grantees List

```js
import { Bee, Reference } from '@ethersphere/bee-js';

// Initialize Bee instance with the correct port (1643)
const bee = new Bee('http://localhost:1643');

// Grantee list reference (the reference returned from the `createGrantees` function)
const granteeListRef = new Reference('55c3b293cd15956f4c40f2fe1b58e4fea4cf55a1c95b61a419120b39d545f9592c58ea761147122685ff940409a57047d04cb2ae914b5ecf2a0083267eded8ab');

// Function to get the grantee list
async function getGranteeList() {
  try {
    // Call the getGrantees function with the reference
    const result = await bee.getGrantees(granteeListRef);

    // Log the full response
    console.log('Grantee List Retrieved:');
    console.log('Status:', result.status);
    console.log('Status Text:', result.statusText);

    // Log the grantees as an array of their string representations (compressed hex values)
    console.log('Grantees:', result.grantees.map(grantee => grantee.toCompressedHex()));

    // Check if ref and historyref exist before trying to call toHex()
    if (result.ref && result.historyref) {
      console.log('Reference:', result.ref.toHex());
      console.log('History Reference:', result.historyref.toHex());
    } else {
      console.log('Reference or History Reference not found.');
    }
  } catch (error) {
    console.error('Error retrieving grantee list:', error);
  }
}

// Call the function to fetch the grantee list
getGranteeList();
```