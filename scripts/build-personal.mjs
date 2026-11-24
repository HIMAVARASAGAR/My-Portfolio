import { build } from 'esbuild';
import { readFile } from 'node:fs/promises';
const home = await readFile('public/_next/static/chunks/pages/index-5fde67e9c185fa78.js', 'utf8');
if (!home.includes('NativePortfolio=window.PortfolioNative.createSections')) throw new Error('Native portfolio bridge is missing from the supplied runtime.');
await build({ entryPoints:['src/reference/NativeSections.tsx'], bundle:true, minify:true, format:'iife', globalName:'PortfolioNative', jsxFactory:'React.createElement', jsxFragment:'React.Fragment', outfile:'public/native-sections.js' });
await build({ entryPoints:['src/reference/ProjectExpansion.tsx'], bundle:true, minify:true, jsx:'automatic', define:{'process.env.NODE_ENV':'"production"'}, outfile:'public/project-expansion.js' });
const { writeFile } = await import('node:fs/promises');
const content = JSON.parse(await readFile('src/data/portfolio-content.json','utf8'));
const escape = text => text.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
for (const project of content) {
  await writeFile(`public/projects/${project.id}/index.html`, `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(project.title)} — Himavara Sagar</title><meta name="description" content="${escape(project.overview)}"><link rel="icon" href="/hs-mark.svg"><link rel="stylesheet" href="/project-detail.css"><script defer src="/project-expansion.js"></script><style>body{margin:0;background:#dbfa58}</style></head><body><noscript><h1>${escape(project.title)}</h1><p>${escape(project.overview)}</p><a href="/">Back to portfolio</a></noscript></body></html>`);
}
