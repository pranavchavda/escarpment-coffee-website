# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development (fetches fresh data, starts Vite dev server)
pnpm dev

# Production build (fetches data, builds React app, bundles server)
pnpm build

# Run production server
pnpm start

# Type checking
pnpm check

# Format code
pnpm format
```

## Architecture

This is a static coffee website for Escarpment Coffee Roasters built with React 19 + Vite + Tailwind CSS 4.

### Data Flow

1. **Build-time data fetching**: `scripts/fetch-data.mjs` fetches product data from `https://idrinkcoffee.com/collections/coffee.json` and saves it to `client/public/data/coffee.json`
2. **Runtime**: The frontend reads from the static JSON file via `client/src/lib/api.ts`
3. **No runtime API calls**: The site is fully static after build

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

Uses `wouter` for client-side routing. Routes defined in `client/src/App.tsx`.

### Product Tag System

Coffee products have Shopify tags parsed by `lib/tags.ts`:
- `ROAST-Medium`, `PROCESSING-Washed`, `REGION-Ethiopia`, `ELEVATION-1800m`
- `NOTES-Apple#Caramel` (hash-separated flavor notes)
- `VARIETAL-Bourbon#Typica` (hash-separated varietals)
