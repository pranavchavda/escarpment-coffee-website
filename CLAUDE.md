# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development (fetches fresh data, starts Vite dev server)
pnpm dev

# Production build (fetches data, builds React app, runs SSR prerender, bundles server)
pnpm build

# Build without prerender (faster iteration)
pnpm build:no-prerender

# Prerender alone (assumes vite build already ran)
pnpm prerender

# Run production server
pnpm start

# Type checking
pnpm check

# Format code
pnpm format
```

Dev server runs on `http://localhost:3000` (set in `vite.config.ts`, not Vite's default 5173).

## Architecture

This is a static coffee website for Escarpment Coffee Roasters built with React 19 + Vite + Tailwind CSS 4.

### Data Flow

1. **Build-time data fetching**: `scripts/fetch-data.mjs` fetches product data from `https://idrinkcoffee.com/collections/coffee.json` and saves it to `client/public/data/coffee.json`. Runs as the first step of both `pnpm dev` and `pnpm build`.
2. **Runtime**: The frontend reads from the static JSON file via `client/src/lib/api.ts`.
3. **Express proxy (production server only)**: `server/index.ts` also exposes `GET /api/coffee-products` which proxies live to the upstream JSON feed. Not used by the frontend today but available as a fallback. Vite dev server has the same proxy under the same path.
4. **Prerender (SSG)**: `scripts/prerender.mjs` builds an SSR bundle with Vite (`client/src/entry-server.tsx`), calls `renderToString` per route, and writes `dist/public/<route>/index.html`. Wired into `pnpm build`. Routes list lives at the top of `scripts/prerender.mjs` — keep it in sync with `client/src/App.tsx`.
5. **Entry split**: `entry-client.tsx` hydrates (or createRoot if no SSR markup); `entry-server.tsx` exports `render(url)` and wraps `<App />` in `<Router ssrPath={url}>`. Browser-only APIs must be guarded with `typeof window !== 'undefined'` or run inside `useEffect`.
6. **SEO assets**: `client/public/sitemap.xml` and `robots.txt` are checked in; update sitemap manually when routes change.

### Key Directories

- `client/src/pages/` - Route components (Home, Coffees, About, etc.)
- `client/src/components/` - Reusable components; `ui/` contains shadcn/ui primitives
- `client/src/lib/api.ts` - Product data types and fetch function
- `client/src/lib/tags.ts` - Parses Shopify product tags into structured coffee attributes (roast, processing, region, etc.)
- `server/index.ts` - Express server for production (serves static files, handles SPA routing)

### Path Aliases

- `@` → `client/src`
- `@shared` → `shared`
- `@assets` → `attached_assets`

### Routing

Uses `wouter` for client-side routing. Routes defined in `client/src/App.tsx`. `wouter@3.7.1` is patched via `patches/wouter@3.7.1.patch` (pnpm `patchedDependencies`) — do not bump without re-checking the patch. Past bug: nested `<a>` from `<Link>` wrapping anchor children (fixed in `Layout.tsx`); keep `<Link>` children non-anchor.

### UI components

shadcn/ui primitives live in `client/src/components/ui/`. Generation config is in `components.json`. Theme via `client/src/contexts/ThemeContext.tsx`, default `light`, currently non-switchable.

### Product Tag System

Coffee products have Shopify tags parsed by `lib/tags.ts`:
- `ROAST-Medium`, `PROCESSING-Washed`, `REGION-Ethiopia`, `ELEVATION-1800m`
- `NOTES-Apple#Caramel` (hash-separated flavor notes)
- `VARIETAL-Bourbon#Typica` (hash-separated varietals)
