# Shopping DNA

An on-device style identity read. Nine photos in, one of eighty identities out, then a weekly outfit plan. Photos never leave the browser: MediaPipe Tasks Vision runs client-side and no image is uploaded.

## Stack

Static site. No build step, no framework install.

| File | What it is |
| --- | --- |
| `index.html` | The whole app — markup, screens and logic. Design tokens are inlined, so it has no external stylesheet |
| `sdna-engine.js` | Classification engine: colour science, k-means, texture, fit, palettes, animal marks |
| `brands.js` | The 100 Indian labels, their segments and price bands |
| `auth.js` | Google sign-in via Supabase Auth |
| `quota.js` | Five reads per account per day |
| `leads.js` | Writes the signed-in user to Supabase |
| `support.js` | Component runtime the page loads |

Models are fetched at runtime from the MediaPipe CDN, so the first read needs a connection.

## Run locally

```bash
npx serve . -p 3000
```

Must be served over http, not opened as a `file://` path — the engine loads as an ES module.

## Sign-in and lead capture (Supabase + Google)

The gate before the reveal is a single **Continue with Google** button. Supabase Auth handles the OAuth round trip; on return the app writes the account's name and email to `public.leads`.

### 1. Table

SQL Editor → run:

```sql
create table if not exists public.leads (
  id          bigint generated always as identity primary key,
  created_at  timestamptz not null default now(),
  user_id     uuid references auth.users (id),
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

-- if the table already exists from the earlier email version:
alter table public.leads add column if not exists user_id uuid references auth.users (id);

create unique index if not exists leads_email_key on public.leads (lower(email));

alter table public.leads enable row level security;

-- signed-in visitors write their own row
drop policy if exists "authenticated can insert leads" on public.leads;
create policy "authenticated can insert leads"
  on public.leads for insert to authenticated with check (true);
```

If you no longer want unauthenticated writes, drop the old policy: `drop policy "anon can insert leads" on public.leads;`

### 1b. Read quota table

Each generation is logged so the five-a-day cap follows the account, not the browser.

```sql
create table if not exists public.reads (
  id          bigint generated always as identity primary key,
  created_at  timestamptz not null default now(),
  user_id     uuid not null references auth.users (id),
  email       text,
  identity    text,
  result      jsonb
);

create index if not exists reads_user_day on public.reads (user_id, created_at desc);

alter table public.reads enable row level security;

-- a signed-in visitor may log and read back only their own generations
drop policy if exists "own reads insert" on public.reads;
create policy "own reads insert"
  on public.reads for insert to authenticated
  with check (auth.uid() = user_id);

drop policy if exists "own reads select" on public.reads;
create policy "own reads select"
  on public.reads for select to authenticated
  using (auth.uid() = user_id);
```

The RLS `using` clause is what makes the cap trustworthy: one account cannot see or inflate another's count.

### 1c. Brand suggestions table

Labels visitors add themselves are stored here and merged into everyone's picker.

```sql
create table if not exists public.brand_suggestions (
  id          bigint generated always as identity primary key,
  created_at  timestamptz not null default now(),
  name        text not null,
  user_id     uuid references auth.users (id),
  email       text
);

create unique index if not exists brand_suggestions_name_key
  on public.brand_suggestions (lower(name));

alter table public.brand_suggestions enable row level security;

-- anyone may read the list, anyone may propose a label
drop policy if exists "read brand suggestions" on public.brand_suggestions;
create policy "read brand suggestions"
  on public.brand_suggestions for select to anon, authenticated using (true);

drop policy if exists "add brand suggestion" on public.brand_suggestions;
create policy "add brand suggestion"
  on public.brand_suggestions for insert to anon, authenticated with check (true);
```

Until this table exists the picker still works — added labels simply stay on the visitor's own device.

### 2. Google OAuth credentials

1. **console.cloud.google.com** → create or pick a project.
2. **APIs & Services → OAuth consent screen** → External → fill app name, support email, developer email → Save. Add the scopes `.../auth/userinfo.email` and `.../auth/userinfo.profile`. While the app is in Testing, add your own address under Test users.
3. **APIs & Services → Credentials → Create credentials → OAuth client ID** → Web application.
4. **Authorised redirect URI** — exactly this (Supabase shows it on the Google panel in step 3):
   ```
   https://bjipufazzfihggxqsxqc.supabase.co/auth/v1/callback
   ```
5. Copy the **Client ID** and **Client secret**.

### 3. Enable the provider

Supabase → **Authentication → Sign In / Providers → Google** → enable → paste Client ID and Client secret → Save.

(Older Supabase projects label this panel **Authentication → Providers**.)

### 4. Allowed URLs

Supabase → **Authentication → Configuration → URL Configuration**:
- **Site URL**: your production origin, e.g. `https://shopping-dna.vercel.app`
- **Redirect URLs**: add every origin you test from, one per line:
  ```
  https://shopping-dna.vercel.app/**
  http://localhost:3000/**
  ```

A login that bounces back with `error=redirect_uri_mismatch` almost always means this list or the Google redirect URI in step 2.4 is missing an entry.

**If sign-in returns you to the first screen instead of the card**, the redirect landed somewhere the allow-list did not cover, so Supabase sent the visitor to the Site URL. Add the exact origin you are testing with a `/**` suffix. The read itself is parked in `localStorage` for 30 minutes, so it survives the detour and resumes as soon as a session exists — but the token only arrives on an allowed URL.

### 5. Check it

Open the site → sample read → **Continue with Google** → pick an account. You land back on the reveal; **Authentication → Users** lists the account and Table Editor → `leads` has the row with `user_id` filled in.

Until someone signs in, Users is empty — that is normal, not a misconfiguration.

### What gets stored

Google account name and email, the identity they were given, its three components, skin-tone step, confidence, whether the read used real photos, and the referrer. No photographs, and no Google data beyond name and email.

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

## The daily cap

Five generations per account per calendar day, counted in `public.reads` and mirrored to `localStorage` so the cap still holds if the network drops. Once an account is at five, the first-screen button reads **We've already got 5 palettes to explore** and goes straight to that account's most recent card. The counter resets at local midnight.

To change the limit, edit `DAILY_LIMIT` at the top of `quota.js`.

## Why reads vary

Two rules keep results distinct:

**Real photos.** Lightness is the noisiest channel in an uncalibrated photo, so the nearest-colour match weights it at 0.45 and lets hue and chroma decide. Before clustering, the shadow tail and specular highlights are trimmed and exposure is lifted so the garment's bright end sits at a reference lightness. A chroma gate then stops a dark but coloured garment being filed as achromatic. Without these, shadowed navy and forest both resolved to Soft Black.

**Sample reads.** `nextIdentity()` walks all 80 combinations before any repeat, persisted per device, so consecutive visitors never see the same animal twice running.

## Version log

- **0.8.1** — Brand picker actions pinned to the bottom of the viewport on phone and desktop. Custom labels are saved to Supabase and merged into everyone's list.
- **0.8.0** — Five reads per account per day, enforced against Supabase with row-level security. At the cap the first-screen button offers the account's latest card instead of a new read.
- **0.7.1** — Sign-in resume hardened: the in-progress read survives the OAuth round trip even when Supabase returns to the Site URL, and Google errors are shown instead of silently dropping to the first screen.
- **0.7.0** — Name/email form replaced with Google sign-in through Supabase Auth. Leads now carry the auth user id.
- **0.6.1** — Brands sorted costliest first; visitors can add a label the list is missing; demo reads are labelled as demos instead of claiming photos were analysed.
- **0.6.0** — Brand picker between the reveal and the week planner: 100 Indian labels as tiles, search, segment filters, top-five cap, saved per device.
- **0.5.0** — Fixed the dark-colour bias: chroma-weighted matching, shadow trimming, exposure normalisation, chroma gate. Sample reads now rotate through all 80 identities.
- **0.4.1** — Supabase credentials wired and verified end to end; repeat signups handled.
- **0.4.0** — Shop removed. Email gate now writes to Supabase with offline queueing. Fixed desktop scrolling (the page was a nested scroll container).
- **0.3.2** — Design tokens inlined; upload column aligned on desktop.
- **0.3.0** — UI pass: box-sizing reset (fixed horizontal bleed), surface/ground separation, press and focus states, blurred scrims with scroll lock, centred modals on desktop.
- **0.2.0** — Responsive: real web app on mobile, website on desktop.
- **0.1.0** — First flow: intro, upload, read, reveal, correct, weekly plan.
