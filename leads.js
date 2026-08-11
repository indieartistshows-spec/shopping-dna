// Lead capture — Supabase REST, no SDK, no build step.
//
// SETUP
// 1. supabase.com → new project.
// 2. SQL editor → run the migration in README.md (creates public.leads + RLS).
// 3. Settings → API → paste Project URL and the anon public key below.
//
// The anon key is safe in client code: row-level security allows insert only,
// and nothing here can read the table back.

export const SUPABASE_URL = 'https://bjipufazzfihggxqsxqc.supabase.co';
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqaXB1ZmF6emZpaGdneHFzeHFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY0Mzk4OTIsImV4cCI6MjEwMjAxNTg5Mn0.BQYaVpk2PeeLINSWZBYt951Plmcm1DX1WD0zOPzO080';

const QUEUE_KEY = 'sdna.leadQueue';
export const isConfigured = () => Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

const readQueue = () => {
  try { return JSON.parse(localStorage.getItem(QUEUE_KEY) || '[]'); } catch { return []; }
};
const writeQueue = rows => {
  try { localStorage.setItem(QUEUE_KEY, JSON.stringify(rows.slice(-50))); } catch {}
};

async function postRows(rows) {
  const base = SUPABASE_URL.replace(/\/+$/, '').replace(/\/rest\/v1$/, '');
  const res = await fetch(`${base}/rest/v1/leads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(rows),
  });
  // 409 = the unique email index rejected a repeat signup. That is a success, not a failure.
  if (res.status === 409) return;
  if (!res.ok) throw new Error(`${res.status} ${(await res.text()).slice(0, 200)}`);
}

/** Persist one lead. Never throws — returns a status the UI can show. */
export async function saveLead(lead) {
  const row = {
    name: (lead.name || '').trim() || null,
    email: (lead.email || '').trim().toLowerCase(),
    identity: lead.identity || null,
    family: lead.family || null,
    texture: lead.texture || null,
    fit: lead.fit || null,
    monk: Number.isInteger(lead.monk) ? lead.monk : null,
    confidence: Number.isFinite(lead.confidence) ? lead.confidence : null,
    source: lead.source || 'web',
    referrer: (typeof document !== 'undefined' && document.referrer) || null,
  };

  if (!isConfigured()) {
    writeQueue([...readQueue(), { ...row, queued_at: new Date().toISOString() }]);
    return { ok: true, stored: 'local', message: 'Saved locally — Supabase not configured yet.' };
  }

  try {
    await postRows([row]);
    flushQueue();
    return { ok: true, stored: 'supabase' };
  } catch (err) {
    writeQueue([...readQueue(), { ...row, queued_at: new Date().toISOString() }]);
    return { ok: false, stored: 'local', message: String(err.message || err) };
  }
}

/** Retry anything captured while offline or before configuration. */
export async function flushQueue() {
  const queued = readQueue();
  if (!queued.length || !isConfigured()) return { sent: 0, pending: queued.length };
  try {
    await postRows(queued.map(({ queued_at, ...row }) => row));
    writeQueue([]);
    return { sent: queued.length, pending: 0 };
  } catch {
    return { sent: 0, pending: queued.length };
  }
}

export const pendingCount = () => readQueue().length;
