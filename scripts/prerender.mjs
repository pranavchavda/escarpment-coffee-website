import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const CLIENT_ROOT = path.join(ROOT, 'client');
const DIST_PUBLIC = path.join(ROOT, 'dist', 'public');
const DIST_SERVER = path.join(ROOT, 'dist', 'server');

const ROUTES = [
  '/',
  '/coffees',
  '/subscriptions',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
  '/404',
];

async function prerender() {
  console.log('Building SSR bundle...');
  await build({
    configFile: path.join(ROOT, 'vite.config.ts'),
    root: CLIENT_ROOT,
    logLevel: 'warn',
    build: {
      ssr: path.join(CLIENT_ROOT, 'src/entry-server.tsx'),
      outDir: DIST_SERVER,
      emptyOutDir: true,
      rollupOptions: {
        input: path.join(CLIENT_ROOT, 'src/entry-server.tsx'),
        output: { format: 'esm', entryFileNames: 'entry-server.mjs' },
      },
      ssrEmitAssets: false,
      copyPublicDir: false,
    },
  });

  const templatePath = path.join(DIST_PUBLIC, 'index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Client build missing: ${templatePath}. Run 'vite build' first.`);
  }
  const template = fs.readFileSync(templatePath, 'utf-8');

  const serverEntry = path.join(DIST_SERVER, 'entry-server.mjs');
  const { render } = await import(pathToFileURL(serverEntry).href);

  let success = 0;
  for (const route of ROUTES) {
    try {
      const appHtml = render(route);
      const html = template.includes('<!--ssr-outlet-->')
        ? template.replace('<!--ssr-outlet-->', appHtml)
        : template.replace('<div id="root">', `<div id="root">${appHtml}`);

      const outPath =
        route === '/'
          ? path.join(DIST_PUBLIC, 'index.html')
          : path.join(DIST_PUBLIC, route, 'index.html');

      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, html);
      console.log(`  ✓ ${route} → ${path.relative(ROOT, outPath)}`);
      success++;
    } catch (err) {
      console.error(`  ✗ ${route} failed:`, err.message);
      throw err;
    }
  }

  console.log(`Prerendered ${success}/${ROUTES.length} routes.`);
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
