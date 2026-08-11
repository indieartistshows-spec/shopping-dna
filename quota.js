// Daily read quota, counted per signed-in account in Supabase so it follows
// the email rather than the browser. Five generations per calendar day.

import { SUPABASE_URL, SUPABASE_ANON_KEY, isConfigured } from './leads.js';

export const DAILY_LIMIT = 5;

const base = () => SUPABASE_URL.replace(/\/+$/, '').replace(/\/rest\/v1$/, '');
const startOfToday = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d.toISOString(); };
const headers = token => ({
  'Content-Type': 'application/json',
  apikey: SUPABASE_ANON_KEY,
  Authorization: `Bearer ${token || SUPABASE_ANON_KEY}`,
});

/* Local mirror, so the cap still reads sensibly if the network is down. */
const LOCAL_KEY = 'sdna.reads';
const localToday = () => {
  try {
    const all = JSON.parse(localStorage.getItem(LOCAL_KEY) || '{}');
    const day = new Date().toDateString();
    return all.day === day ? all : { day, count: 0, latest: null };
  } catch { return { day: new Date().toDateString(), count: 0, latest: null }; }
};
const writeLocal = next => {
  try { localStorage.setItem(LOCAL_KEY, JSON.stringify(next)); } catch {}
};

/** Record one generation against the account. */
export async function logRead(user, result) {
  const mine = localToday();
  writeLocal({ ...mine, count: mine.count + 1, latest: result || mine.latest });

  if (!user || !isConfigured()) return;
  try {
    await fetch(`${base()}/rest/v1/reads`, {
      method: 'POST',
      headers: { ...headers(user.token), Prefer: 'return=minimal' },
      body: JSON.stringify([{
        user_id: user.id,
        email: (user.email || '').toLowerCase(),
        identity: result?.name || null,
        result,
      }]),
    });
  } catch {}
}

/** How many the account has generated today, and the most recent one. */
export async function todayStatus(user) {
  const mine = localToday();
  const fallback = {
    count: mine.count,
    latest: mine.latest,
    remaining: Math.max(0, DAILY_LIMIT - mine.count),
    reached: mine.count >= DAILY_LIMIT,
    source: 'local',
  };
  if (!user || !isConfigured()) return fallback;

  try {
    const url = `${base()}/rest/v1/reads`
      + `?select=identity,result,created_at&user_id=eq.${user.id}`
      + `&created_at=gte.${encodeURIComponent(startOfToday())}`
      + `&order=created_at.desc`;
    const res = await fetch(url, { headers: { ...headers(user.token), Prefer: 'count=exact' } });
    if (!res.ok) return fallback;
    const rows = await res.json();
    const count = rows.length;
    const latest = rows[0]?.result || mine.latest;
    writeLocal({ day: new Date().toDateString(), count, latest });
    return {
      count, latest,
      remaining: Math.max(0, DAILY_LIMIT - count),
      reached: count >= DAILY_LIMIT,
      source: 'supabase',
    };
  } catch { return fallback; }
}
