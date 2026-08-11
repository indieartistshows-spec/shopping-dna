# Shopping DNA

An on-device style identity read. Nine photos in, one of eighty identities out, then a weekly outfit plan. Photos never leave the browser: MediaPipe Tasks Vision runs client-side and no image is uploaded.

## Stack

Static site. No build step, no framework install.

| File | What it is |
| --- | --- |
| `index.html` | The whole app — markup, screens and logic. Design tokens are inlined, so it has no external stylesheet |
| `sdna-engine.js` | Classification engine: colour science, k-means, texture, fit, palettes, animal marks |
| `leads.js` | Email capture → Supabase (see below) |
| `support.js` | Component runtime the page loads |

Models are fetched at runtime from the MediaPipe CDN, so the first read needs a connection.

## Run locally

```bash
npx serve . -p 3000
```

Must be served over http, not opened as a `file://` path — the engine loads as an ES module.

## Collecting names and emails (Supabase)

The email gate before the reveal writes to Supabase. Until you configure it, leads queue in the visitor's `localStorage` and are sent on their next visit once keys are present — nothing is lost.

### 1. Create the table

supabase.com → new project → **SQL Editor** → run:

```sql
create table public.leads (
  id          bigint generated always as identity primary key,
  created_at  timestamptz not null default now(),
  name        text,
  email       text not null,
  identity    text,
  family      text,
  texture     text,
  fit         text,
  monk        int,
  confidence  int,
  source      text,
  referrer    text
);

-- one row per address; a repeat signup updates nothing and errors quietly
create unique index leads_email_key on public.leads (lower(email));

alter table public.leads enable row level security;

-- the public site may INSERT and nothing else. It cannot read the list back.
create policy "anon can insert leads"
  on public.leads for insert
  to anon
  with check (true);
```

### 2. Keys

Already configured in `leads.js` for project `bjipufazzfihggxqsxqc`. To point at a different project, replace `SUPABASE_URL` and `SUPABASE_ANON_KEY` at the top of that file.

Note the policy is INSERT-only, so the client sends a plain insert — never an upsert. A repeat signup trips the unique email index, returns 409, and is treated as success.

The anon key belongs in client code. RLS is what protects the data: insert-only for anonymous visitors, so no one can read your list from the browser.

### 3. Read your leads

**Table Editor → leads**, or export CSV from there. To pull them programmatically use the `service_role` key from a server — never in this page.

### What gets stored

Name, email, the identity they were given (`Sharp Panther`), its three components, skin-tone step, confidence, whether the read came from real photos or the sample, and the referrer. No photographs, ever.

## Deploy

```bash
git init && git add -A && git commit -m "Shopping DNA"
gh repo create shopping-dna --public --source=. --remote=origin --push
npx vercel && npx vercel --prod
```

Framework preset **Other**, no build command, output `./`. Once Vercel is linked to the repo, every push to `main` deploys.

```bash
npm run deploy          # add, commit, push
```

## Layout

One responsive build. Under 900px it runs as a full-bleed app with a fixed bottom tab bar; at 900px and up it becomes a site with a top nav and a centred column. Add `?dev` to the URL for the screen-jump row.

## Version log

- **0.4.1** — Supabase credentials wired and verified end to end; repeat signups handled.
- **0.4.0** — Shop removed. Email gate now writes to Supabase with offline queueing. Fixed desktop scrolling (the page was a nested scroll container).
- **0.3.2** — Design tokens inlined; upload column aligned on desktop.
- **0.3.0** — UI pass: box-sizing reset (fixed horizontal bleed), surface/ground separation, press and focus states, blurred scrims with scroll lock, centred modals on desktop.
- **0.2.0** — Responsive: real web app on mobile, website on desktop.
- **0.1.0** — First flow: intro, upload, read, reveal, correct, weekly plan.
