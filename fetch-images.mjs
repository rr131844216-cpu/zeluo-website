import fs from 'node:fs/promises';
import path from 'node:path';

const images = {
  'hero.png': 'https://images.hostinger.com/2636ef7c-b829-47b4-94f0-badc86cd1cd8.png',
  'team.png': 'https://images.hostinger.com/f88e7bca-5740-4aff-8bac-d838627cd08a.png',
  'dc.png': 'https://images.hostinger.com/a081c3af-cc3b-4466-9dda-c05fef428b2f.png',
  'case-interior.jpg': 'https://horizons-cdn.hostinger.com/1756bc8a-4efb-4d7b-809b-f6ee53919971/726a1290c44deba2f032998c8831474d.jpg',
  'case-plumbing.jpg': 'https://horizons-cdn.hostinger.com/1756bc8a-4efb-4d7b-809b-f6ee53919971/326be8362d08cb860fdd76ace526d0d9.jpg',
};

const outDir = path.resolve('public/images');
await fs.mkdir(outDir, { recursive: true });

for (const [filename, url] of Object.entries(images)) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    await fs.writeFile(path.join(outDir, filename), buffer);
    console.log(`✓ ${filename}`);
  } catch (error) {
    console.error(`✗ ${filename}: ${error.message}`);
  }
}
