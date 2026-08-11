# Shopping DNA

An on-device style identity read. Nine photos in, one of eighty identities out, then a weekly outfit plan. No server: MediaPipe Tasks Vision runs in the browser and no image is ever uploaded.

## Stack

Static site. No build step, no framework install.

| File | What it is |
| --- | --- |
| `index.html` | The whole app — markup, screens and logic |
| `sdna-engine.js` | Classification engine: colour science, k-means, texture, fit, palettes, animal marks |
| `support.js` | Component runtime the page loads |
| `_ds/` | Design system tokens and stylesheet |

Models are fetched at runtime from the MediaPipe CDN, so the first read needs a connection. Photos never leave the device.

## Run locally

```bash
npx serve . -p 3000
# open http://localhost:3000
```

Any static server works — it must be served over http, not opened as a `file://` path, because the engine loads as an ES module.

## First deploy

```bash
# 1. from this folder
git init
git add -A
git commit -m "Shopping DNA v0.1"

# 2. create the repo (GitHub CLI), or make it in the UI and add the remote by hand
gh repo create shopping-dna --public --source=. --remote=origin --push

# 3. ship it
npx vercel        # link the project, accept the defaults
npx vercel --prod
```

Framework preset: **Other**. Build command: none. Output directory: `./`.

Once Vercel is linked to the GitHub repo, every push to `main` deploys on its own.

## Shipping an update

```bash
npm run deploy                       # add, commit "update", push
MSG="new reveal animation" npm run deploy:msg
```

Or force a production build without a commit:

```bash
npx vercel --prod
```

## Layout

One responsive build. Under 900px it runs as a full-bleed app with a fixed bottom tab bar; at 900px and up it becomes a site with a top nav and a centred column. Add `?dev` to the URL for the screen-jump row.

## Version log

- **0.3.0** — UI pass: box-sizing reset (fixed horizontal bleed on all screens), surface/ground separation on cards and list rows, press + focus states on every control, blurred scrims with scroll lock, sheets become centred modals on desktop.
- **0.2.0** — Responsive: real web app on mobile, website on desktop. Phone bezel removed.
- **0.1.0** — Intro, upload, read, email gate, reveal, correct, weekly plan, shop. Neutral palette, Space Grotesk over Inter, twenty animal marks.
