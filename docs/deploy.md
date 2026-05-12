# Deployment

Production is served by **Caddy** on a self-managed VPS at `escarpment.coffee`. CI pipeline lives in `.github/workflows/deploy.yml` and runs on every push to `main` (or via manual dispatch).

## What gets deployed

`pnpm build` produces `dist/public/` with:

- `index.html` + per-route `<path>/index.html` (SSR-prerendered via `scripts/prerender.mjs`)
- `assets/` — JS/CSS bundles
- `data/coffee.json` — fetched at build time from `idrinkcoffee.com`
- `images/`, `sitemap.xml`, `robots.txt`

Only `dist/public/` is rsynced to the VPS. The Express server in `server/index.ts` is not used in production — Caddy serves the static files directly.

## Required GitHub repo secrets

| Secret | Description |
| --- | --- |
| `SSH_HOST` | VPS hostname or IP (e.g. `escarpment.coffee`) |
| `SSH_USER` | SSH user on the VPS (e.g. `deploy`) |
| `SSH_KEY` | Private SSH key (ed25519 preferred). The corresponding public key must be in `~/.ssh/authorized_keys` on the VPS. |
| `DEPLOY_PATH` | Absolute path on the VPS where Caddy reads static files (e.g. `/var/www/escarpment`) |

Add them under **Settings → Secrets and variables → Actions**.

## Caddyfile (server-side)

Caddy must serve `index.html` from per-route subdirectories. Prerender produces `<DEPLOY_PATH>/<route>/index.html` for each route, and Caddy's default `file_server` resolves directory requests to `index.html`. A minimal Caddyfile:

```caddy
escarpment.coffee {
    root * /var/www/escarpment
    encode zstd gzip
    file_server
    # 404 page for unknown routes
    handle_errors {
        @404 expression {http.error.status_code} == 404
        rewrite @404 /404/index.html
        file_server
    }
}
```

No SPA fallback (`try_files`) is needed because every legitimate route has its own prerendered HTML. Unknown routes serve the prerendered `/404/index.html`.

## Manual deploy (fallback)

If CI is broken:

```bash
pnpm install --frozen-lockfile
pnpm build
rsync -avz --delete dist/public/ user@host:/var/www/escarpment/
```

## Adding a new route

1. Add the `<Route>` to `client/src/App.tsx`.
2. Add the path to `ROUTES` in `scripts/prerender.mjs`.
3. Add the URL to `client/public/sitemap.xml`.
