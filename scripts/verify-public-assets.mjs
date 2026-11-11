import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const source = readFileSync('src/data/salonData.ts', 'utf8');
const publicRoot = resolve('public');
const missing = [];
const references = [...source.matchAll(/assets\\/(?:services|summer-davis)[^\x60'"]*?\\.(?:webp|png|jpg|jpeg)/g)].map(match => match[0]);
for (const asset of new Set(references)) {
  if (!existsSync(resolve(publicRoot, asset))) missing.push(asset);
}
for (const logo of ['branding/glamway-official-logo.png', 'branding/glamway-official-logo.webp', 'branding/glamway-icon.png']) {
  if (!existsSync(resolve(publicRoot, logo))) missing.push(logo);
}
if (references.length === 0) {
  console.error('No local salon asset references detected: verify source parser.');
  process.exitCode = 1;
} else if (missing.length) {
  console.error('Missing public assets:\\n' + missing.join('\\n'));
  process.exitCode = 1;
} else {
  console.log('Verified ' + new Set(references).size + ' local salon image paths and official logo assets.');
}
