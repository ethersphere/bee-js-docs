// Upload a built site to Swarm through a public gateway and print the URL it
// can be previewed at. Used by .github/workflows/preview.yaml, but it works
// the same way when run by hand:
//
//   node scripts/upload-to-swarm.mjs build
//   node scripts/upload-to-swarm.mjs build --gateway https://bzz.limo
//
// The directory is packed into a tar and posted to the gateway's /bzz endpoint
// as a collection. https://bzz.limo pays for uploads itself, so any 32-byte
// postage batch id is accepted and we do not need a funded batch of our own.
//
// The gateway serves a collection both at /bzz/<reference>/ and — with the
// reference re-encoded as a CIDv1, which fits in a 63 character DNS label —
// at https://<cid>.bzz.limo/. Only the second one serves the site from the
// root, so it is the URL we report: a Docusaurus build with baseUrl "/" works
// there unchanged.

import { readFileSync, appendFileSync, existsSync, statSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const DEFAULT_GATEWAY = 'https://bzz.limo';
// The gateway ignores which batch is named, but the header has to be a 32-byte hex id.
const FAKE_BATCH_ID = '00'.repeat(32);
const UPLOAD_TIMEOUT_MS = 10 * 60 * 1000;
const UPLOAD_ATTEMPTS = 3;

const args = process.argv.slice(2);
const dir = args.find(arg => !arg.startsWith('--'));
const gateway = (readOption('--gateway') ?? DEFAULT_GATEWAY).replace(/\/+$/, '');
const indexDocument = readOption('--index') ?? 'index.html';
const errorDocument = readOption('--error') ?? '404.html';

function readOption(name) {
  const index = args.indexOf(name);
  return index === -1 ? undefined : args[index + 1];
}

if (!dir) {
  console.error('usage: node scripts/upload-to-swarm.mjs <directory> [--gateway url]');
  process.exit(1);
}

if (!existsSync(dir) || !statSync(dir).isDirectory()) {
  console.error(`not a directory: ${dir}`);
  process.exit(1);
}

/** Encode a Swarm reference as a CIDv1 (swarm-manifest codec, keccak-256 multihash). */
function toCid(reference) {
  const bytes = Buffer.concat([Buffer.from([0x01, 0xfa, 0x1b, 0x20]), Buffer.from(reference, 'hex')]);
  const alphabet = 'abcdefghijklmnopqrstuvwxyz234567';
  let bits = 0;
  let value = 0;
  let out = '';
  for (const byte of bytes) {
    value = (value << 8) | byte;
    bits += 8;
    while (bits >= 5) {
      out += alphabet[(value >>> (bits - 5)) & 31];
      bits -= 5;
    }
  }
  if (bits > 0) {
    out += alphabet[(value << (5 - bits)) & 31];
  }
  return `b${out}`;
}

async function upload(tar) {
  for (let attempt = 1; attempt <= UPLOAD_ATTEMPTS; attempt++) {
    try {
      const response = await fetch(`${gateway}/bzz`, {
        method: 'POST',
        headers: {
          'content-type': 'application/x-tar',
          'swarm-postage-batch-id': FAKE_BATCH_ID,
          'swarm-collection': 'true',
          'swarm-index-document': indexDocument,
          'swarm-error-document': errorDocument,
        },
        body: tar,
        signal: AbortSignal.timeout(UPLOAD_TIMEOUT_MS),
      });
      const body = await response.text();
      if (!response.ok) {
        throw new Error(`gateway responded ${response.status}: ${body.trim()}`);
      }
      const { reference } = JSON.parse(body);
      if (!/^[0-9a-f]{64}$/.test(reference ?? '')) {
        throw new Error(`gateway returned an unexpected reference: ${body.trim()}`);
      }
      return reference;
    } catch (error) {
      console.error(`upload attempt ${attempt}/${UPLOAD_ATTEMPTS} failed: ${error.message}`);
      if (attempt === UPLOAD_ATTEMPTS) {
        process.exit(1);
      }
    }
  }
}

const tarPath = join(tmpdir(), `swarm-upload-${process.pid}.tar`);
execFileSync('tar', ['-C', dir, '-cf', tarPath, '.']);
const tar = readFileSync(tarPath);
rmSync(tarPath, { force: true });
console.log(`uploading ${dir} (${(tar.length / 1024 / 1024).toFixed(1)} MB) to ${gateway}`);

const reference = await upload(tar);
const cid = toCid(reference);
const url = `https://${cid}.bzz.limo/`;

console.log(`reference: ${reference}`);
console.log(`cid:       ${cid}`);
console.log(`url:       ${url}`);

if (process.env.GITHUB_OUTPUT) {
  appendFileSync(process.env.GITHUB_OUTPUT, `reference=${reference}\ncid=${cid}\nurl=${url}\n`);
}
