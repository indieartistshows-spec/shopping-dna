// Google sign-in via Supabase Auth, using the REST endpoints directly.
// No SDK, no build step. See README for the Google Cloud + Supabase setup.

import { SUPABASE_URL, SUPABASE_ANON_KEY, isConfigured } from './leads.js';

const base = () => SUPABASE_URL.replace(/\/+$/, '').replace(/\/rest\/v1$/, '');
const SESSION_KEY = 'sdna.session';
const PENDING_KEY = 'sdna.pendingRead';

/* The OAuth round trip leaves the page, so the read in progress is parked
   in sessionStorage and picked back up when Google returns the user. */
export function parkRead(payload) {
  try { sessionStorage.setItem(PENDING_KEY, JSON.stringify(payload)); } catch {}
}
export function takeParkedRead() {
  try {
    const raw = sessionStorage.getItem(PENDING_KEY);
    sessionStorage.removeItem(PENDING_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

export function storedSession() {
  try {
    const s = JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
    if (!s?.access_token) return null;
    if (s.expires_at && Date.now() > s.expires_at - 60_000) return null;
    return s;
  } catch { return null; }
}

function saveSession(s) {
  try { localStorage.setItem(SESSION_KEY, JSON.stringify(s)); } catch {}
}

export function signOut() {
  try { localStorage.removeItem(SESSION_KEY); } catch {}
}

/** Send the visitor to Google. Returns false if Supabase is not configured. */
export function signInWithGoogle(redirectTo = location.origin + location.pathname) {
  if (!isConfigured()) return false;
  const url = `${base()}/auth/v1/authorize?provider=google`
    + `&redirect_to=${encodeURIComponent(redirectTo)}`;
  location.assign(url);
  return true;
}

/** Read the token Supabase puts in the URL hash after a successful login. */
export function consumeRedirect() {
  const hash = location.hash.startsWith('#') ? location.hash.slice(1) : '';
  if (!hash.includes('access_token')) return null;
  const p = new URLSearchParams(hash);
  const session = {
    access_token: p.get('access_token'),
    refresh_token: p.get('refresh_token'),
    expires_at: Date.now() + (parseInt(p.get('expires_in') || '3600', 10) * 1000),
  };
  history.replaceState(null, '', location.pathname + location.search);
  if (!session.access_token) return null;
  saveSession(session);
  return session;
}

/** The signed-in Google account, or null. */
export async function currentUser(session = storedSession()) {
  if (!session || !isConfigured()) return null;
  try {
    const res = await fetch(`${base()}/auth/v1/user`, {
      headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${session.access_token}` },
    });
    if (!res.ok) { signOut(); return null; }
    const u = await res.json();
    const meta = u.user_metadata || {};
    return {
      id: u.id,
      email: u.email,
      name: meta.full_name || meta.name || (u.email || '').split('@')[0],
      avatar: meta.avatar_url || meta.picture || null,
      token: session.access_token,
    };
  } catch { return null; }
}

/** Was this page load a return trip from Google? */
export const isReturningFromAuth = () =>
  typeof location !== 'undefined' && location.hash.includes('access_token');
