import puppeteer from 'puppeteer';
import { preview } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROUTES = [
  '/',
  '/coffees',
  '/subscriptions',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
];

async function prerender() {
  console.log('Starting prerender...');

  // Start Vite preview server (serves the built dist)
  const server = await preview({
    root: path.resolve(__dirname, '../client'),
    preview: { port: 4173, strictPort: true },
    build: { outDir: path.resolve(__dirname, '../dist/public') },
  });

  const port = 4173;
  console.log(`Vite preview server running on port ${port}`);

  // Launch browser
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const distDir = path.resolve(__dirname, '../dist/public');

  for (const route of ROUTES) {
    console.log(`Prerendering ${route}...`);

    const page = await browser.newPage();
    await page.goto(`http://localhost:${port}${route}`, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    // Wait a bit for any dynamic content
    await page.waitForSelector('#root', { timeout: 5000 });
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Get the full HTML
    const html = await page.content();

    // Determine output path
    const outputPath = route === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route, 'index.html');

    // Ensure directory exists
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Write HTML file
    fs.writeFileSync(outputPath, html);
    console.log(`  Written to ${outputPath}`);

    await page.close();
  }

  await browser.close();
  await server.close();

  console.log('Prerendering complete!');
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
