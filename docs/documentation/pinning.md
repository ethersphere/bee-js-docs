---
title: Pinning
id: pinning
slug: /pinning
sidebar_label: Pinning
---

Pinning allows you to guarantee that content will always be available by storing it **locally on your own Bee node**. 

However, pinning ***does not*** guarantee availability across the Swarm network. Therefore you must use pinning along with the **stewardship utilities** included in `bee-js` to monitor the availability of your pinned content and reupload it if needed.

In this section, you'll learn how to:

- Pin content
- Check whether pinned content is still retrievable from the network
- Reupload missing content
- View all currently pinned references
- Remove pins that are no longer required

## Pinning and Unpinning Content

To pin a reference (so it remains stored on your node):

```js
await bee.pin(reference)
console.log('Reference pinned locally.')
```

To stop tracking and remove it from local pin storage:

```js
await bee.unpin(reference)
console.log('Reference unpinned and no longer tracked.')
```

## Checking if a Reference is Retrievable

Use `isReferenceRetrievable(reference)` to verify if the content for a given Swarm reference is currently accessible on the network:

```js
const isAvailable = await bee.isReferenceRetrievable(reference)

if (isAvailable) {
  console.log('Data is retrievable from the network.')
} else {
  console.log('Data is missing from the network.')
}
```

## Reuploading Pinned Data

If content is missing but was previously pinned, you can reupload it using `reuploadPinnedData(postageBatchId, reference)`:

```js
await bee.reuploadPinnedData(postageBatchId, reference)
console.log('Data has been reuploaded to the network.')
```

## Listing All Pinned References

You can get all currently pinned references with:

```js
const pins = await bee.getAllPins()
console.log('Pinned references:', pins.map(ref => ref.toHex()))
```

To check if a specific reference is pinned:

```js
const pinStatus = await bee.getPin(reference)
console.log('Pin info:', pinStatus)
```

## Example Script

The following script automates the process of checking all locally pinned references, verifying their retrievability from the network, and reuploading any that are missing. This ensures that your pinned data remains available even if it has dropped out of the Swarm network.

```js
import { Bee } from "@ethersphere/bee-js"

const bee = new Bee('http://localhost:1633')
const postageBatchId = "129903062bedc4eca6fc1c232ed385e93dda72f711caa1ead6018334dd801cee"

async function reuploadMissingPins() {
  try {
    // Get all currently pinned references
    const pinnedRefs = await bee.getAllPins()

    if (!pinnedRefs.length) {
      console.log("No pinned references found.")
      return
    }

    console.log(`Found ${pinnedRefs.length} pinned references.`)

    let repaired = 0

    // Loop through all references and check retrievability
    for (const ref of pinnedRefs) {
      const reference = ref.toHex()
      const isAvailable = await bee.isReferenceRetrievable(reference)

      if (isAvailable) {
        console.log(`✅ ${reference} is retrievable.`)
      } else {
        console.log(`⚠️  ${reference} is missing — reuploading...`)
        await bee.reuploadPinnedData(postageBatchId, reference)
        console.log(`🔁 Reuploaded ${reference}`)
        repaired++
      }
    }

    console.log(`\nDone. ${repaired} reference(s) were reuploaded.`)
  } catch (error) {
    console.error("Error:", error.message)
  }
}

reuploadMissingPins()
```

Example terminal output:

```bash
Found 2 pinned references.
⚠️  1880ff0bbd23997dfa46921ba2ab0098824d967fe60c6ca1ae2e8fd722f4db78 is missing — reuploading...
🔁 Reuploaded 1880ff0bbd23997dfa46921ba2ab0098824d967fe60c6ca1ae2e8fd722f4db78
✅ fd79d5e0ebd8407e422f53ce1d7c4c41ebf403be55143900f8d1490560294780 is retrievable.

Done. 1 reference(s) were reuploaded.
```


