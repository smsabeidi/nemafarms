import { mkdir, rm, readdir, copyFile, readFile } from 'node:fs/promises';
import { join } from 'node:path';
const root = new URL('../', import.meta.url);
const out = new URL('../dist/', import.meta.url);
await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
let count = 0;
for (const entry of await readdir(root, { withFileTypes: true })) {
  if (entry.isFile() && (entry.name === 'index.html' || /\.(css|js)$/.test(entry.name))) {
    await copyFile(new URL(entry.name, root), new URL(entry.name, out)); count++;
  }
}
async function assets(dir = 'assets') {
  await mkdir(new URL(`${dir}/`, out), { recursive: true });
  for (const entry of await readdir(new URL(`${dir}/`, root), { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) await assets(path);
    else if (/\.(webp|jpe?g)$/.test(entry.name) || /\.png$/.test(entry.name) || (dir === 'assets/vendor' && /\.js$/.test(entry.name))) {
      await copyFile(new URL(path, root), new URL(path, out)); count++;
    }
  }
}
await assets();
const html = await readFile(new URL('index.html', out), 'utf8');
for (const [, path] of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
  if (!/^https?:/.test(path)) await readFile(new URL(path, out));
}
console.log(`Built ${count} public files in dist/.`);
