// Shopping DNA — classification data + on-device engine (ported from v0)
// 100 colours -> 5 chroma families x 4 textures = 20 species x 4 fits = 80 identities.

export const FAMILIES = ['achromatic', 'neutral', 'muted', 'rich', 'vivid'];
export const TEXTURES = ['smooth', 'structured', 'soft', 'fluid'];
export const FITS = ['sleek', 'tailored', 'relaxed', 'oversized'];

export const FAMILY_LABEL = { achromatic: 'Achromatic', neutral: 'Neutral', muted: 'Muted', rich: 'Rich', vivid: 'Vivid' };
export const TEXTURE_LABEL = { smooth: 'Smooth', structured: 'Structured', soft: 'Soft', fluid: 'Fluid' };
export const FIT_LABEL = { sleek: 'Sleek', tailored: 'Tailored', relaxed: 'Relaxed', oversized: 'Oversized' };

export const COLORS = [
  ['Jet Black','#0B0B0B','achromatic'],['Soft Black','#1C1C1C','achromatic'],['Charcoal','#333333','achromatic'],
  ['Graphite','#4A4A4A','achromatic'],['Gunmetal','#2E3033','achromatic'],['Slate Grey','#5C5C5C','achromatic'],
  ['Ash','#6E6E6E','achromatic'],['Steel','#71767B','achromatic'],['Smoke','#7D7D7D','achromatic'],
  ['Cement','#8A8A8A','achromatic'],['Pewter','#96999C','achromatic'],['Silver','#A8A8A8','achromatic'],
  ['Pearl Grey','#C0C0C0','achromatic'],['Fog','#D3D3D3','achromatic'],['Mist','#E0E0E0','achromatic'],
  ['Bone','#EDEAE4','achromatic'],['Chalk','#F2F2F0','achromatic'],['Off White','#F7F5F2','achromatic'],
  ['Ivory','#F5F0E6','achromatic'],['Optic White','#FFFFFF','achromatic'],
  ['Cream','#F0E6D3','neutral'],['Ecru','#D9CFC0','neutral'],['Oat','#E3D9C6','neutral'],['Sand','#D8C7A9','neutral'],
  ['Beige','#C9B79C','neutral'],['Stone','#B7B0A3','neutral'],['Mushroom','#A39B8B','neutral'],['Taupe','#8B8178','neutral'],
  ['Khaki','#B5A382','neutral'],['Camel','#B08D57','neutral'],['Tan','#A9825C','neutral'],['Toffee','#8A6240','neutral'],
  ['Chocolate','#5C4033','neutral'],['Espresso','#3B2C24','neutral'],['Clay','#A9705B','neutral'],['Terracotta','#B5654A','neutral'],
  ['Rust','#9C4A2F','neutral'],['Olive','#6B6B47','neutral'],['Army Green','#4B5320','neutral'],['Drab','#7C7259','neutral'],
  ['Sage','#9CAF88','muted'],['Eucalyptus','#A7BFAE','muted'],['Moss','#8A9A7B','muted'],['Fern','#7E9068','muted'],
  ['Pale Olive','#A3A183','muted'],['Dusty Rose','#C9A9A6','muted'],['Blush','#E3C9C4','muted'],['Ash Rose','#B99C99','muted'],
  ['Sand Pink','#D9BCB2','muted'],['Muted Coral','#C98A7A','muted'],['Mauve','#A9899B','muted'],['Heather','#9B93A3','muted'],
  ['Lilac Grey','#B6AEC0','muted'],['Slate Blue','#6E7F94','muted'],['Smoke Blue','#8E9BA6','muted'],['Denim Blue','#7C93A8','muted'],
  ['Powder Blue','#B6C7D6','muted'],['Seafoam','#A8C3BC','muted'],['Dusty Teal','#6F8F8B','muted'],['Oyster','#C7BEB2','muted'],
  ['Navy','#1F2A44','rich'],['Midnight','#16213E','rich'],['Ink Blue','#24344D','rich'],['Royal Blue','#2B4C9B','rich'],
  ['Deep Teal','#14494F','rich'],['Forest','#1F3D2B','rich'],['Pine','#23453A','rich'],['Bottle Green','#145239','rich'],
  ['Emerald','#10684A','rich'],['Burgundy','#6E1B2B','rich'],['Oxblood','#4E1B23','rich'],['Wine','#722F37','rich'],
  ['Merlot','#5C2231','rich'],['Brick','#8C3A2B','rich'],['Chestnut','#5A3223','rich'],['Bronze','#7A5C2E','rich'],
  ['Deep Ochre','#A8791F','rich'],['Plum','#4E2A45','rich'],['Aubergine','#3B2233','rich'],['Deep Violet','#40275C','rich'],
  ['True Red','#D0021B','vivid'],['Scarlet','#E03A2F','vivid'],['Cherry','#C8102E','vivid'],['Coral','#FF6F5E','vivid'],
  ['Orange','#F26522','vivid'],['Tangerine','#F58220','vivid'],['Marigold','#F0A500','vivid'],['Sunflower','#F5C518','vivid'],
  ['Lemon','#F3E600','vivid'],['Lime','#A4CE39','vivid'],['Kelly Green','#2FA84F','vivid'],['Jade','#00A07A','vivid'],
  ['Turquoise','#1FB6C1','vivid'],['Cyan','#16A5D9','vivid'],['Cobalt','#0047AB','vivid'],['Electric Blue','#2C6BED','vivid'],
  ['Violet','#6A3DE8','vivid'],['Magenta','#C2185B','vivid'],['Fuchsia','#E5308F','vivid'],['Hot Pink','#FF4FA3','vivid'],
].map(([name, hex, family]) => ({ name, hex, family }));

export const SPECIES = {
  achromatic: { smooth:'Panther', structured:'Magpie', soft:'Chinchilla', fluid:'Crane' },
  neutral:    { smooth:'Gazelle', structured:'Bison',  soft:'Alpaca',     fluid:'Owl' },
  muted:      { smooth:'Seal',    structured:'Heron',  soft:'Lynx',       fluid:'Dove' },
  rich:       { smooth:'Otter',   structured:'Stag',   soft:'Bear',       fluid:'Koi' },
  vivid:      { smooth:'Kingfisher', structured:'Toucan', soft:'Fox',     fluid:'Peacock' },
};

export const EPITHET = { tailored:'Sharp', relaxed:'Easy', oversized:'Grand', sleek:'Sleek' };
export const EPITHET_NOTE = {
  tailored:'cut close, built to a line', relaxed:'skimming, unhurried',
  oversized:'volume as the whole point', sleek:'second skin, nothing spare',
};

export const SPECIES_META = {
  Panther:    { traits:['PRECISE','NOCTURNAL','CERTAIN'],   line:'You settled the question of who you are a long time ago.' },
  Magpie:     { traits:['GRAPHIC','COLLECTED','DELIBERATE'],line:'Black against white, and almost nothing in between.' },
  Chinchilla: { traits:['QUIET','PLUSH','WARM'],            line:'Grey is not an absence for you. You use it like a material.' },
  Crane:      { traits:['LONG','PALE','STILL'],             line:'You dress in lines rather than in shapes.' },
  Gazelle:    { traits:['EASY','SUNLIT','UNFUSSED'],        line:'Nothing you wear is trying to win an argument.' },
  Bison:      { traits:['SOLID','EARTHED','DURABLE'],       line:'You buy things that outlast the season that sold them.' },
  Alpaca:     { traits:['SOFT','UNDYED','PATIENT'],         line:'Comfort, but the expensive kind.' },
  Owl:        { traits:['DRAPED','DUSKY','WATCHFUL'],       line:'You move in fabric that moves first.' },
  Seal:       { traits:['SMOOTH','COOL','CONTAINED'],       line:'Muted is a decision for you, not a compromise.' },
  Heron:      { traits:['ANGULAR','SLATE','EXACT'],         line:'You build an outfit the way other people build furniture.' },
  Lynx:       { traits:['DUSTY','TEXTURED','PRIVATE'],      line:'Your best pieces only reveal themselves up close.' },
  Dove:       { traits:['FADED','DRIFTING','GENTLE'],       line:'Every colour you own has had the volume turned down.' },
  Otter:      { traits:['GLOSSED','DEEP','ASSURED'],        line:'Deep colour, clean surface, no explanation offered.' },
  Stag:       { traits:['FOREST','TAILORED','FORMAL'],      line:'You dress as though the room matters.' },
  Bear:       { traits:['HEAVY','WARM','ENVELOPING'],       line:'You buy weight. Knitwear, coats, things with heft.' },
  Koi:        { traits:['FLOWING','SATURATED','RARE'],      line:'Deep colour that moves when you do.' },
  Kingfisher: { traits:['BRIGHT','FAST','EXACT'],           line:'One colour turned all the way up, cut clean.' },
  Toucan:     { traits:['BLOCKED','BOLD','BUILT'],          line:'You wear colour in slabs, never in accents.' },
  Fox:        { traits:['WARM','VIVID','RESTLESS'],         line:'Bright, but soft to the touch.' },
  Peacock:    { traits:['TRAILING','LOUD','UNREPENTANT'],   line:'You have never once entered a room quietly.' },
};

export const MONK = ['#f6ede4','#f3e7db','#f7ead0','#eadaba','#d7bd96','#a07e56','#825c43','#604134','#3a312a','#292420'];
const MONK_GROUP = i => i < 2 ? 0 : i < 5 ? 1 : i < 8 ? 2 : 3;

export const ALL_ANIMALS = FAMILIES.flatMap(f => TEXTURES.flatMap(t => FITS.map(fit => `${EPITHET[fit]} ${SPECIES[f][t]}`)));
export const animalName = (family, texture, fit) => `${EPITHET[fit]} ${SPECIES[family][texture]}`;

/* ── colour science ── */
const srgbToLinear = c => c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
const f_ = t => t > 0.008856 ? Math.cbrt(t) : (7.787 * t) + 16 / 116;

export function rgbToLab(r, g, b) {
  const R = srgbToLinear(r/255), G = srgbToLinear(g/255), B = srgbToLinear(b/255);
  let x = (R*0.4124 + G*0.3576 + B*0.1805)/0.95047;
  let y = (R*0.2126 + G*0.7152 + B*0.0722);
  let z = (R*0.0193 + G*0.1192 + B*0.9505)/1.08883;
  x = f_(x); y = f_(y); z = f_(z);
  return [(116*y)-16, 500*(x-y), 200*(y-z)];
}
export function hexToRgb(hex) { const n = parseInt(hex.slice(1),16); return [(n>>16)&255,(n>>8)&255,n&255]; }
const deltaE = (a,b) => Math.hypot(a[0]-b[0], a[1]-b[1], a[2]-b[2]);

const COLOR_LAB = COLORS.map(c => { const [r,g,b] = hexToRgb(c.hex); return { ...c, lab: rgbToLab(r,g,b) }; });

// Lightness is the noisiest channel in an uncalibrated photo — folds, shadow and
// exposure all move it while hue stays put. Weight it down so chroma decides.
const L_WEIGHT = 0.45;
function nearestColor(lab) {
  let best = COLOR_LAB[0], bestD = Infinity;
  for (const c of COLOR_LAB) {
    const dL = (lab[0] - c.lab[0]) * L_WEIGHT;
    const d = Math.hypot(dL, lab[1] - c.lab[1], lab[2] - c.lab[2]);
    if (d < bestD) { bestD = d; best = c; }
  }
  return { ...best, distance: bestD };
}

const chroma = lab => Math.hypot(lab[1], lab[2]);

/* Drop the shadow tail and specular highlights, then lift exposure so the
   garment's own bright end sits at a reference lightness. Without this an
   underexposed photo pushes every reading toward the dark end of the ramp. */
function normaliseGarment(labs) {
  if (labs.length < 40) return labs;
  const Ls = labs.map(l => l[0]).sort((a, b) => a - b);
  const lo = Ls[Math.floor(Ls.length * 0.18)];
  const hi = Ls[Math.floor(Ls.length * 0.95)];
  const kept = labs.filter(l => l[0] >= lo && l[0] <= hi);
  const body = kept.length > 30 ? kept : labs;
  const p90 = body.map(l => l[0]).sort((a, b) => a - b)[Math.floor(body.length * 0.9)];
  // Only ever lift, never darken, and cap the correction so true black stays black.
  const gain = Math.min(1.5, Math.max(1, 62 / Math.max(p90, 12)));
  if (gain <= 1.02) return body;
  return body.map(([L, a, b]) => [Math.min(100, L * gain), a, b]);
}

function kmeans(points, k = 4, iters = 12) {
  if (!points.length) return [];
  k = Math.min(k, points.length);
  const centroids = [];
  const step = Math.floor(points.length / k);
  for (let i = 0; i < k; i++) centroids.push(points[i*step].slice());
  const assign = new Array(points.length).fill(0);
  for (let it = 0; it < iters; it++) {
    let moved = false;
    for (let i = 0; i < points.length; i++) {
      let best = 0, bestD = Infinity;
      for (let c = 0; c < k; c++) { const d = deltaE(points[i], centroids[c]); if (d < bestD) { bestD = d; best = c; } }
      if (assign[i] !== best) { assign[i] = best; moved = true; }
    }
    const sums = Array.from({ length: k }, () => [0,0,0,0]);
    for (let i = 0; i < points.length; i++) {
      const a = assign[i];
      sums[a][0]+=points[i][0]; sums[a][1]+=points[i][1]; sums[a][2]+=points[i][2]; sums[a][3]++;
    }
    for (let c = 0; c < k; c++) if (sums[c][3] > 0)
      centroids[c] = [sums[c][0]/sums[c][3], sums[c][1]/sums[c][3], sums[c][2]/sums[c][3]];
    if (!moved && it > 0) break;
  }
  const counts = new Array(k).fill(0);
  for (const a of assign) counts[a]++;
  return centroids.map((lab,i) => ({ lab, weight: counts[i]/points.length }))
    .filter(c => c.weight > 0.04).sort((a,b) => b.weight - a.weight);
}

function whiteBalance(data) {
  let mr=0, mg=0, mb=0, n=0;
  for (let i=0;i<data.length;i+=16){ mr+=data[i]; mg+=data[i+1]; mb+=data[i+2]; n++; }
  mr/=n; mg/=n; mb/=n;
  const grey=(mr+mg+mb)/3, blend=0.5;
  return [1+blend*(grey/Math.max(mr,1)-1), 1+blend*(grey/Math.max(mg,1)-1), 1+blend*(grey/Math.max(mb,1)-1)];
}

function textureSignals(gray, mask, w, h) {
  const L = []; let lapSum=0, lapN=0; const bins=new Array(8).fill(0); let gradN=0;
  for (let y=1;y<h-1;y++) for (let x=1;x<w-1;x++) {
    const i=y*w+x; if (!mask[i]) continue;
    L.push(gray[i]);
    if (mask[i-1] && mask[i+1] && mask[i-w] && mask[i+w]) {
      lapSum += Math.abs(4*gray[i]-gray[i-1]-gray[i+1]-gray[i-w]-gray[i+w]); lapN++;
      const gx=gray[i+1]-gray[i-1], gy=gray[i+w]-gray[i-w], mag=Math.hypot(gx,gy);
      if (mag>12){ let ang=Math.atan2(gy,gx); if (ang<0) ang+=Math.PI; bins[Math.min(7,Math.floor((ang/Math.PI)*8))]++; gradN++; }
    }
  }
  if (L.length < 60) return null;
  L.sort((a,b)=>a-b);
  const p50=L[Math.floor(L.length*0.5)], p97=L[Math.floor(L.length*0.97)];
  return {
    specSpread: Math.min(1,(p97-p50)/70),
    highFreq: Math.min(1,(lapN?lapSum/lapN:0)/26),
    coherence: gradN>40 ? Math.min(1,(Math.max(...bins)/gradN-0.125)/0.30) : 0.4,
    edge: Math.min(1, gradN/Math.max(1,lapN)/0.35),
  };
}

function classifyTexture(s) {
  if (!s) return null;
  const { specSpread, highFreq, coherence, edge } = s;
  const scores = {
    smooth: (0.55+specSpread*0.9)*(1-highFreq)*(0.6+edge*0.2),
    structured: (0.35+coherence*1.0)*(0.4+edge*0.9)*(1-specSpread*0.35),
    soft: (0.30+highFreq*1.2)*(1-specSpread*0.7),
    fluid: (0.35+(1-coherence)*0.9)*(0.4+specSpread*0.8)*(1-highFreq*0.5),
  };
  const total = Object.values(scores).reduce((a,b)=>a+b,0) || 1;
  const norm = Object.fromEntries(Object.entries(scores).map(([k,v])=>[k,v/total]));
  const winner = Object.entries(norm).sort((a,b)=>b[1]-a[1])[0];
  return { label: winner[0], confidence: winner[1], scores: norm };
}

function measureFit(mask, w, h, lm) {
  const L=lm[11], R=lm[12], LH=lm[23], RH=lm[24];
  if (!L || !R) return null;
  const shoulderPx = Math.abs(L.x-R.x)*w;
  if (shoulderPx < 5) return null;
  const yShoulder = ((L.y+R.y)/2)*h;
  const yHip = (LH&&RH) ? ((LH.y+RH.y)/2)*h : yShoulder+shoulderPx*1.6;
  const yWaist = yShoulder + (yHip-yShoulder)*0.55;
  const rowWidth = y => {
    const yy = Math.round(y); if (yy<0||yy>=h) return 0;
    let min=-1,max=-1;
    for (let x=0;x<w;x++) if (mask[yy*w+x]) { if (min<0) min=x; max=x; }
    return max<0?0:(max-min);
  };
  const widths = [yWaist-4,yWaist,yWaist+4].map(rowWidth).filter(v=>v>0).sort((a,b)=>a-b);
  if (!widths.length) return null;
  const waist = widths[Math.floor(widths.length/2)];
  const volume = waist/shoulderPx;
  let label;
  if (volume<0.92) label='sleek'; else if (volume<1.12) label='tailored';
  else if (volume<1.38) label='relaxed'; else label='oversized';
  const nearest = Math.min(...[0.92,1.12,1.38].map(b=>Math.abs(volume-b)));
  return { label, volume, confidence: Math.min(1, 0.45+nearest*3) };
}

const CAT = { BACKGROUND:0, HAIR:1, BODY_SKIN:2, FACE_SKIN:3, CLOTHES:4, OTHER:5 };

/* Cut, measured from the garment silhouette alone — no pose needed. Compares
   the widest part of the garment against its median width and its overall
   proportion, which separates a skimming line from real volume. */
function estimateFitFromMask(mask, w, h) {
  let x0=w, x1=-1, y0=h, y1=-1;
  const rowW = new Int32Array(h);
  for (let y=0;y<h;y++) {
    let lo=-1, hi=-1;
    for (let x=0;x<w;x++) if (mask[y*w+x]) { if (lo<0) lo=x; hi=x; }
    if (hi>=0) {
      rowW[y] = hi-lo+1;
      if (y<y0) y0=y; if (y>y1) y1=y;
      if (lo<x0) x0=lo; if (hi>x1) x1=hi;
    }
  }
  const height = y1-y0+1, width = x1-x0+1;
  if (height < 12 || width < 8) return null;

  const widths = [];
  for (let y=y0;y<=y1;y++) if (rowW[y]>0) widths.push(rowW[y]);
  if (widths.length < 8) return null;
  widths.sort((a,b)=>a-b);
  const med = widths[Math.floor(widths.length*0.5)];
  const p90 = widths[Math.floor(widths.length*0.9)];

  // Fullness: how wide the garment runs relative to its length.
  const fullness = med / height;
  // Flare: how much the widest part exceeds the typical part.
  const flare = p90 / Math.max(1, med);

  const score = fullness * 1.9 + (flare - 1) * 0.9;
  let label;
  if (score < 0.62) label = 'sleek';
  else if (score < 0.95) label = 'tailored';
  else if (score < 1.35) label = 'relaxed';
  else label = 'oversized';
  const edge = Math.min(...[0.62, 0.95, 1.35].map(b => Math.abs(score - b)));
  return { label, score, fullness, flare, confidence: Math.min(0.8, 0.3 + edge * 1.6), fromMask: true };
}

/* The region most likely to be clothing: below the shoulders when pose gives
   them to us, otherwise the central lower two thirds of the frame. */
/* Median colour of a thin frame border — a decent proxy for the background. */
function borderLab(px, w, h, kr, kg, kb) {
  const Ls=[], as=[], bs=[];
  const band = Math.max(2, Math.round(Math.min(w,h) * 0.04));
  const push = (x,y) => {
    const o = (y*w+x)*4;
    const lab = rgbToLab(Math.min(255,px[o]*kr), Math.min(255,px[o+1]*kg), Math.min(255,px[o+2]*kb));
    Ls.push(lab[0]); as.push(lab[1]); bs.push(lab[2]);
  };
  for (let x=0;x<w;x+=3) { for (let y=0;y<band;y+=2) push(x,y); for (let y=h-band;y<h;y+=2) push(x,y); }
  for (let y=band;y<h-band;y+=3) { for (let x=0;x<band;x+=2) push(x,y); for (let x=w-band;x<w;x+=2) push(x,y); }
  if (Ls.length < 20) return null;
  const med = arr => { arr.sort((p,q)=>p-q); return arr[Math.floor(arr.length/2)]; };
  return [med(Ls), med(as), med(bs)];
}

function torsoBox(lm, w, h) {
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  if (lm && lm[11] && lm[12]) {
    const sx = [lm[11].x, lm[12].x], sy = (lm[11].y + lm[12].y)/2;
    const span = Math.max(0.12, Math.abs(sx[0]-sx[1]));
    const cx = (sx[0]+sx[1])/2;
    return {
      x0: Math.round(clamp((cx - span*0.75)*w, 0, w-2)),
      x1: Math.round(clamp((cx + span*0.75)*w, 2, w)),
      y0: Math.round(clamp((sy + span*0.15)*h, 0, h-2)),
      y1: Math.round(clamp((sy + span*2.4)*h, 2, h)),
    };
  }
  return { x0: Math.round(w*0.22), x1: Math.round(w*0.78), y0: Math.round(h*0.34), y1: Math.round(h*0.94) };
}

function analyseFrame({ imageData, categoryMask, landmarks, w, h }) {
  const px = imageData.data;
  let fellBack = false;
  const [kr,kg,kb] = whiteBalance(px);
  const clothes = new Uint8Array(w*h), gray = new Float32Array(w*h);
  const garmentLab = [], skinLab = [];
  let clothesCount = 0;

  // First pass: how much garment is there? Then sample at a stride that gives a
  // healthy number of colour samples whether the garment fills the frame or a
  // corner of it.
  for (let i=0;i<w*h;i++) if (categoryMask[i]===CAT.CLOTHES) clothesCount++;
  const stride = Math.max(1, Math.floor(clothesCount / 3000));
  const skinStride = Math.max(1, Math.floor((w*h) / 6000));

  let ci = 0, si = 0;
  for (let i=0;i<w*h;i++) {
    const o=i*4;
    gray[i]=0.299*px[o]+0.587*px[o+1]+0.114*px[o+2];
    const cat=categoryMask[i];
    if (cat===CAT.CLOTHES) {
      clothes[i]=1;
      if (ci++ % stride === 0) garmentLab.push(rgbToLab(
        Math.min(255,px[o]*kr), Math.min(255,px[o+1]*kg), Math.min(255,px[o+2]*kb)));
    } else if (cat===CAT.BODY_SKIN||cat===CAT.FACE_SKIN) {
      if (si++ % skinStride === 0) skinLab.push(rgbToLab(px[o],px[o+1],px[o+2]));
    }
  }
  let coverage = clothesCount/(w*h);

  /* The selfie segmenter is trained on portraits and often returns no
     "clothes" class on unusual crops. Rather than refuse the photo, sample
     the torso directly: from the pose when we have it, otherwise the middle
     of the frame, excluding anything the model called skin, hair or
     background. This is what makes almost any real photo usable. */
  if (coverage < 0.012 || garmentLab.length < 40) {
    const box = torsoBox(landmarks, w, h);
    garmentLab.length = 0;
    clothesCount = 0;
    clothes.fill(0);
    // Background colour, sampled from the frame border. Anything close to it
    // inside the torso box is wall, not cloth — dropping it is what lets the
    // silhouette measure a real cut rather than a rectangle.
    const bg = borderLab(px, w, h, kr, kg, kb);
    const boxArea = Math.max(1, (box.x1-box.x0) * (box.y1-box.y0));
    const fbStride = Math.max(1, Math.floor(boxArea / 2500));
    let n = 0;
    for (let y = box.y0; y < box.y1; y++) {
      for (let x = box.x0; x < box.x1; x++) {
        const i = y*w + x;
        const cat = categoryMask[i];
        if (cat === CAT.FACE_SKIN || cat === CAT.HAIR) continue;
        const o = i*4;
        const lab = rgbToLab(
          Math.min(255, px[o]*kr), Math.min(255, px[o+1]*kg), Math.min(255, px[o+2]*kb));
        if (bg && Math.hypot(lab[0]-bg[0], (lab[1]-bg[1])*1.5, (lab[2]-bg[2])*1.5) < 15) continue;
        clothes[i] = 1; clothesCount++;
        if (n++ % fbStride === 0) garmentLab.push(lab);
      }
    }
    coverage = clothesCount/(w*h);
    // If background rejection left almost nothing, take the box as-is.
    if (garmentLab.length < 10) {
      let m = 0;
      for (let y = box.y0; y < box.y1; y++) for (let x = box.x0; x < box.x1; x++) {
        const i = y*w + x;
        if (categoryMask[i] === CAT.FACE_SKIN || categoryMask[i] === CAT.HAIR) continue;
        clothes[i] = 1; clothesCount++;
        if (m++ % fbStride === 0) {
          const o = i*4;
          garmentLab.push(rgbToLab(
            Math.min(255, px[o]*kr), Math.min(255, px[o+1]*kg), Math.min(255, px[o+2]*kb)));
        }
      }
      coverage = clothesCount/(w*h);
    }
    if (garmentLab.length < 10) return { ok:false, reason:'Could not find an outfit here' };
    fellBack = true;
  }

  const prepared = normaliseGarment(garmentLab.slice(0, 4000));
  const clusters = kmeans(prepared, 4);
  const medChroma = clusters.length
    ? clusters.map(c => chroma(c.lab)).sort((a, b) => a - b)[Math.floor(clusters.length / 2)] : 0;
  const familyVotes = {}; let dominant = null;
  for (const c of clusters) {
    const near = nearestColor(c.lab);
    const C = chroma(c.lab);
    // A garment with real colour in it cannot be achromatic, however dark it is.
    let fam = near.family;
    if (fam === 'achromatic' && C > 12) fam = C > 34 ? 'vivid' : C > 20 ? 'rich' : 'muted';
    if (fam !== 'achromatic' && C < 5) fam = 'achromatic';
    familyVotes[fam] = (familyVotes[fam] || 0) + c.weight;
    if (!dominant) dominant = { ...near, family: fam, weight: c.weight, lab: c.lab };
  }
  const familyRank = Object.entries(familyVotes).sort((a,b)=>b[1]-a[1]);
  const family = familyRank[0][0];
  const familyConf = familyRank[0][1]/(familyRank.reduce((s,[,v])=>s+v,0)||1);
  const texture = classifyTexture(textureSignals(gray, clothes, w, h));
  // Pose first, silhouette second — cut is reported far more often this way.
  let fit = landmarks ? measureFit(clothes, w, h, landmarks) : null;
  if (!fit) fit = estimateFitFromMask(clothes, w, h);

  let skin = null;
  if (skinLab.length > 40) {
    const m = arr => arr[Math.floor(arr.length/2)];
    const lab = [m(skinLab.map(l=>l[0]).sort((a,b)=>a-b)), m(skinLab.map(l=>l[1]).sort((a,b)=>a-b)), m(skinLab.map(l=>l[2]).sort((a,b)=>a-b))];
    let bestI=0, bestD=Infinity;
    MONK.forEach((hex,i) => { const [r,g,b]=hexToRgb(hex); const d=deltaE(lab, rgbToLab(r,g,b)); if (d<bestD){bestD=d;bestI=i;} });
    skin = { monk:bestI, group:MONK_GROUP(bestI), lab, undertone: lab[2]>16?'warm':lab[2]<10?'cool':'neutral' };
  }
  // Weighted down when a measurement is missing, never discarded.
  const quality = Math.max(0.2, Math.min(1, 0.45+coverage*1.6) * (fit?1:0.75) * (texture?1:0.8) * (fellBack?0.7:1));
  return { ok:true, family, familyConf, dominant, texture, fit, skin, coverage, quality, clusters, fellBack };
}

/* Pose is used to measure CUT. It is not a gate: a photo with no usable pose
   still yields colour and cloth, which is most of the identity. This returns
   how much of the pose we trust rather than pass/fail. */
function gradePose(landmarks) {
  if (!landmarks || !landmarks.length) return { tier:'none' };
  const lm = landmarks, vis = i => (lm[i]?.visibility ?? 1);
  const LS=11, RS=12, LH=23, RH=24;
  const shoulders = vis(LS) > 0.25 && vis(RS) > 0.25;
  const hips = vis(LH) > 0.2 || vis(RH) > 0.2;
  if (!shoulders) return { tier:'none' };
  if (!hips) return { tier:'partial', landmarks:lm };
  const torso = Math.abs((lm[LH].y+lm[RH].y)/2 - (lm[LS].y+lm[RS].y)/2);
  // Only refuse the fit measurement at genuinely unusable extremes.
  if (torso < 0.05 || torso > 0.96) return { tier:'partial', landmarks:lm };
  return { tier:'full', landmarks:lm, torso };
}

export function aggregate(frames) {
  const good = frames.filter(f => f.analysis?.ok);
  if (!good.length) return null;
  const tally = get => {
    const votes = {}; let total = 0;
    for (const f of good) {
      const v = get(f.analysis); if (!v) continue;
      votes[v] = (votes[v]||0)+f.analysis.quality; total += f.analysis.quality;
    }
    const rank = Object.entries(votes).sort((a,b)=>b[1]-a[1]);
    return rank.length ? { label:rank[0][0], share:rank[0][1]/(total||1) } : null;
  };
  const family = tally(a=>a.family), texture = tally(a=>a.texture?.label), fit = tally(a=>a.fit?.label);
  const monks = good.map(f=>f.analysis.skin?.monk).filter(v=>v!=null).sort((a,b)=>a-b);
  const monk = monks.length ? monks[Math.floor(monks.length/2)] : null;
  const undertones = good.map(f=>f.analysis.skin?.undertone).filter(Boolean);
  const undertone = undertones.length
    ? Object.entries(undertones.reduce((m,u)=>(m[u]=(m[u]||0)+1,m),{})).sort((a,b)=>b[1]-a[1])[0][0] : 'neutral';
  const colorTally = {};
  for (const f of good) { const d=f.analysis.dominant; if (d) colorTally[d.name]=(colorTally[d.name]||0)+d.weight*f.analysis.quality; }
  const palette = Object.entries(colorTally).sort((a,b)=>b[1]-a[1]).slice(0,5).map(([name])=>COLORS.find(c=>c.name===name)).filter(Boolean);
  const f = family?.label ?? 'achromatic', t = texture?.label ?? 'smooth', fi = fit?.label ?? 'relaxed';
  return {
    family:f, texture:t, fit:fi, species:SPECIES[f][t], name:`${EPITHET[fi]} ${SPECIES[f][t]}`,
    shares:{ family:Math.round((family?.share??0)*100), texture:Math.round((texture?.share??0)*100), fit:Math.round((fit?.share??0)*100) },
    confidence: Math.round(((family?.share??0.4)*0.4 + (texture?.share??0.4)*0.3 + (fit?.share??0.4)*0.3)*100),
    fitMeasured: good.filter(f => f.analysis.fit).length,
    monk, undertone, palette,
    accent: palette[0]?.hex ?? '#8A8A8A',
    readCount: good.length, totalCount: frames.length,
  };
}

const LADDER = ['achromatic','neutral','muted','rich','vivid'];

export function recommendPalette(monkIndex, undertone, family = 'muted', exclude = []) {
  if (monkIndex == null) monkIndex = 4;
  const [r,g,b] = hexToRgb(MONK[monkIndex]);
  const skinL = rgbToLab(r,g,b)[0];
  const home = Math.max(0, LADDER.indexOf(family));
  const scored = COLOR_LAB.map(c => {
    const dL = Math.abs(c.lab[0]-skinL);
    const contrast = dL<14 ? 0.15 : dL>68 ? 0.55 : 1-Math.abs(dL-40)/40;
    const warmth = c.lab[2];
    const temp = undertone==='warm' ? (warmth>4?1:0.5) : undertone==='cool' ? (warmth<8?1:0.5) : 0.82;
    const affinity = [1,0.86,0.62,0.42,0.3][Math.abs(LADDER.indexOf(c.family)-home)] ?? 0.3;
    return { c, score: contrast*temp*affinity };
  }).sort((a,b)=>b.score-a.score);
  const out = [], seenFam = {};
  const take = (limitPerFamily, requireFamily = null) => {
    for (const s of scored) {
      if (out.length === 6) return;
      if (exclude.includes(s.c.name) || out.includes(s.c)) continue;
      if (requireFamily && s.c.family !== requireFamily) continue;
      if ((seenFam[s.c.family]||0) >= limitPerFamily) continue;
      seenFam[s.c.family] = (seenFam[s.c.family]||0)+1;
      out.push(s.c);
    }
  };
  take(2, family); take(2); take(3);
  return out.slice(0,6);
}

export function displayAccent(hex) {
  const [r,g,b] = hexToRgb(hex);
  if (Math.max(r,g,b) < 16) return '#8F8F8F';
  const L = rgbToLab(r,g,b)[0];
  if (L >= 30 && L <= 88) return hex;
  const target = L < 30 ? 56 : 76;
  let lo = 0.05, hi = 8;
  for (let i=0;i<26;i++) {
    const m=(lo+hi)/2;
    const l=rgbToLab(Math.min(255,r*m), Math.min(255,g*m), Math.min(255,b*m))[0];
    if (l<target) lo=m; else hi=m;
  }
  const m=(lo+hi)/2, to = v => Math.round(Math.min(255,v*m)).toString(16).padStart(2,'0');
  return `#${to(r)}${to(g)}${to(b)}`;
}

/* ── model loading + per-photo run ── */
const MV = '0.10.21';
const WORK = 640;   // small photos are upscaled to this, giving the models more to read
let models = null;

export async function loadModels() {
  if (models) return models;
  const { FilesetResolver, PoseLandmarker, ImageSegmenter } =
    await import(`https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@${MV}/vision_bundle.mjs`);
  const vision = await FilesetResolver.forVisionTasks(`https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@${MV}/wasm`);
  const make = async delegate => ({
    pose: await PoseLandmarker.createFromOptions(vision, {
      baseOptions:{ modelAssetPath:'https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task', delegate },
      runningMode:'IMAGE', numPoses:1 }),
    seg: await ImageSegmenter.createFromOptions(vision, {
      baseOptions:{ modelAssetPath:'https://storage.googleapis.com/mediapipe-models/image_segmenter/selfie_multiclass_256x256/float32/latest/selfie_multiclass_256x256.tflite', delegate },
      runningMode:'IMAGE', outputCategoryMask:true, outputConfidenceMasks:false }),
  });
  try { models = await make('GPU'); } catch { models = await make('CPU'); }
  return models;
}

export async function decodeHeic(file) {
  if (!/heic|heif/i.test(file.type + file.name)) return file;
  try {
    if (!window.heic2any) await new Promise((res, rej) => {
      const s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/heic2any@0.0.4/dist/heic2any.min.js';
      s.onload = res; s.onerror = rej; document.head.appendChild(s);
    });
    return await window.heic2any({ blob:file, toType:'image/jpeg', quality:0.9 });
  } catch { return file; }
}

export async function readPhoto(url) {
  const m = await loadModels();
  const img = await new Promise((res, rej) => {
    const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = url;
  });
  // Upscale small photos as well as downscaling large ones — a 200px image
  // carries plenty of colour, it just needs resampling before segmentation.
  const longest = Math.max(img.naturalWidth, img.naturalHeight) || WORK;
  const scale = WORK / longest;
  const w = Math.max(96, Math.round(img.naturalWidth*scale));
  const h = Math.max(96, Math.round(img.naturalHeight*scale));
  const cv = document.createElement('canvas');
  cv.width = w; cv.height = h;
  const ctx = cv.getContext('2d', { willReadFrequently:true });
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, 0, 0, w, h);

  let lm = null, poseTier = 'none';
  try {
    const graded = gradePose(m.pose.detect(cv).landmarks?.[0]);
    poseTier = graded.tier;
    if (graded.tier !== 'none') lm = graded.landmarks;
  } catch { poseTier = 'none'; }

  const mask = m.seg.segment(cv).categoryMask;
  const cats = mask.getAsUint8Array();
  const mw = mask.width, mh = mask.height;
  let catAligned = cats;
  if (mw !== w || mh !== h) {
    catAligned = new Uint8Array(w*h);
    for (let y=0;y<h;y++) {
      const sy = Math.min(mh-1, Math.floor(y*mh/h));
      for (let x=0;x<w;x++) catAligned[y*w+x] = cats[sy*mw + Math.min(mw-1, Math.floor(x*mw/w))];
    }
  }
  mask.close();
  const out = analyseFrame({ imageData: ctx.getImageData(0,0,w,h), categoryMask:catAligned, landmarks:lm, w, h });
  if (out.ok) out.poseTier = poseTier;
  return out;
}

/* ── demo result, for walking the flow without photos ──
   Rotation rule: walk all 80 identities before any repeat, so consecutive
   visitors on the same device never see the same animal twice in a row. */
const SEEN_KEY = 'sdna.seenIdentities';

export function nextIdentity() {
  let seen = [];
  try { seen = JSON.parse(localStorage.getItem(SEEN_KEY) || '[]'); } catch {}
  const all = [];
  for (const f of FAMILIES) for (const t of TEXTURES) for (const fit of FITS) all.push([f, t, fit]);
  let pool = all.filter(([f, t, fit]) => !seen.includes(`${f}|${t}|${fit}`));
  if (!pool.length) { seen = []; pool = all; }          // full cycle done, start again
  const pick = pool[Math.floor(Math.random() * pool.length)];
  try { localStorage.setItem(SEEN_KEY, JSON.stringify([...seen, pick.join('|')].slice(-80))); } catch {}
  return { family: pick[0], texture: pick[1], fit: pick[2] };
}

export function demoResult(family, texture, fit) {
  if (!family || !texture || !fit) {
    const n = nextIdentity();
    family = family || n.family; texture = texture || n.texture; fit = fit || n.fit;
  }
  const all = COLORS.filter(c => c.family === family);
  const off = Math.floor(Math.random() * Math.max(1, all.length - 5));
  const pool = all.slice(off, off + 5);
  return {
    family, texture, fit, species: SPECIES[family][texture],
    name: `${EPITHET[fit]} ${SPECIES[family][texture]}`,
    shares: { family: 72 + Math.floor(Math.random() * 20), texture: 55 + Math.floor(Math.random() * 28), fit: 60 + Math.floor(Math.random() * 26) },
    confidence: 68 + Math.floor(Math.random() * 24),
    monk: Math.floor(Math.random() * 10), undertone: ['warm', 'cool', 'neutral'][Math.floor(Math.random() * 3)],
    palette: pool.slice(0,5), accent: pool[2]?.hex ?? '#8A8A8A',
    readCount: 3 + Math.floor(Math.random() * 2), totalCount: 4, demo: true,
  };
}

/* ── weekly wear plan + shopping recs, derived from the identity ── */
const DAYS = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
const OCCASION = ['Desk day','Back to back','Studio','Client, then dinner','Friday, no meetings','Out out','Nothing planned'];

const PIECES = {
  sleek:     [['Rib knit tee','Top'],['Straight leg trouser','Bottom'],['Cropped moto jacket','Layer']],
  tailored:  [['Poplin shirt','Top'],['Pleated trouser','Bottom'],['Single breast blazer','Layer']],
  relaxed:   [['Boxy tee','Top'],['Wide leg jean','Bottom'],['Unstructured overshirt','Layer']],
  oversized: [['Dropped shoulder knit','Top'],['Carpenter trouser','Bottom'],['Long line coat','Layer']],
};
const TEX_WORD = { smooth:'a clean surface', structured:'a bit of spine', soft:'something with pile', fluid:'something that moves' };
const BRANDS = ['ARKET','COS','Uniqlo U','Studio Nicholson','& Other Stories','Massimo Dutti','Everlane','Toteme'];

/* Materials that suit each cloth reading, per slot. */
const MATERIAL = {
  smooth: { Top:['Fine jersey','Cotton poplin','Silk','Sateen'], Bottom:['Wool crepe','Cotton twill','Sateen','Tencel'], Layer:['Leather','Bonded cotton','Wool melton'] },
  structured: { Top:['Oxford cotton','Heavy jersey','Denim'], Bottom:['Denim','Canvas','Wool gabardine','Corduroy'], Layer:['Wool twill','Waxed canvas','Boiled wool'] },
  soft: { Top:['Brushed cotton','Merino','Cashmere','Loopback jersey'], Bottom:['Brushed twill','Wool flannel','Jersey'], Layer:['Teddy fleece','Alpaca blend','Quilted cotton'] },
  fluid: { Top:['Viscose','Silk crepe','Cupro','Modal'], Bottom:['Viscose twill','Silk trouser','Crepe de chine'], Layer:['Unlined viscose','Silk bomber','Crepe overshirt'] },
};
const LAYER_NAME = { sleek:'Jacket', tailored:'Jacket', relaxed:'Overshirt', oversized:'Overcoat' };

export function weekPlan(result, seed = 0) {
  /* Draw on the whole palette rather than one or two colours: the working
     palette (skin-tone aware) is merged with what was actually read from the
     photos, then each slot takes a different step through it per day. */
  const read = result.palette || [];
  const advised = recommendPalette(result.monk, result.undertone, result.family,
    read.slice(0, 2).map(c => c.name));
  const seen = new Set();
  const pal = [...read, ...advised]
    .filter(c => c && !seen.has(c.name) && seen.add(c.name));
  const fallback = COLORS.filter(c => c.family === result.family);
  const P = pal.length >= 3 ? pal : [...pal, ...fallback].slice(0, 6);
  const mats = MATERIAL[result.texture] || MATERIAL.smooth;
  const pick = (arr, n) => arr[n % arr.length];
  const layerLabel = LAYER_NAME[result.fit] || 'Jacket';

  return DAYS.map((day, i) => {
    const t = seed * 3 + i;
    // Three separate steps through the palette, so a day is never one colour.
    const top = pick(P, t);
    const bottom = pick(P, t + 2 + (i % 2));
    const layer = pick(P, t + 4 + (i % 3));
    const heat = 0.4 + ((i*17 + seed*7) % 60)/100;
    const wearsLayer = heat < 0.78;

    const items = [
      { slot: 'Top', color: top, material: pick(mats.Top, t) },
      { slot: 'Bottom', color: bottom, material: pick(mats.Bottom, t + 1) },
      wearsLayer
        ? { slot: layerLabel, color: layer, material: pick(mats.Layer, t + 2) }
        : { slot: layerLabel, color: null, material: null },
    ];

    return {
      day, short: day.slice(0,3).toUpperCase(), occasion: OCCASION[i],
      colors: wearsLayer ? [top, bottom, layer] : [top, bottom],
      items,
      note: `${top.name} over ${bottom.name}${wearsLayer ? `, ${layer.name} on top` : ''}. ${TEX_WORD[result.texture][0].toUpperCase()}${TEX_WORD[result.texture].slice(1)}.`,
      heat,
    };
  });
}

export function shopRecs(result, monk, count = 6) {
  const pal = recommendPalette(monk, result.undertone, result.family);
  const pieces = PIECES[result.fit];
  return Array.from({ length: count }, (_, i) => {
    const c = pal[i % pal.length], p = pieces[i % pieces.length];
    return {
      id: `p${i}`,
      title: `${p[0]}`,
      category: p[1],
      color: c,
      brand: BRANDS[(i*3) % BRANDS.length],
      price: 48 + ((i*37) % 9) * 15,
      match: 99 - i*3,
      why: i % 3 === 0 ? `${c.name} sits right against your skin tone.`
        : i % 3 === 1 ? `Gap in the closet: barely any ${p[1].toLowerCase()} in ${c.name.toLowerCase()}.`
        : `${FIT_LABEL[result.fit]} cut, ${TEXTURE_LABEL[result.texture].toLowerCase()} hand. Very you.`,
    };
  });
}


/* ── animal marks: head-and-shoulders profiles on one 100×100 grid ── */
const ell = (cx, cy, rx, ry) => `M${cx - rx} ${cy}a${rx} ${ry} 0 1 0 ${2 * rx} 0a${rx} ${ry} 0 1 0 ${-2 * rx} 0Z`;
const poly = pts => 'M' + pts.map(p => p.join(' ')).join('L') + 'Z';
const BUST = 'M20 88Q22 66 34 55L64 57Q76 68 78 88Z';

function head(o) {
  const { skullRx = 20, skullRy = 17, muzzleLen = 20, muzzleH = 7, ear = 'point', earSize = 1,
    horn = 'none', fluff = 0, brow = false, cx = 42, cy = 40 } = o;
  const d = [BUST, ell(cx, cy, skullRx, skullRy)];
  if (fluff) d.push(ell(cx - skullRx * 0.55, cy + skullRy * 0.5, fluff, fluff * 0.9));
  const tip = cx + skullRx + muzzleLen;
  if (muzzleLen > 0) {
    d.push(poly([[cx + 4, cy - muzzleH - 2], [tip - 3, cy - muzzleH * 0.55], [tip - 3, cy + muzzleH], [cx + 4, cy + muzzleH + 5]]));
    d.push(ell(tip - 3, cy + muzzleH * 0.2, 3.6, muzzleH * 0.8));
  }
  if (brow) d.push(poly([[cx - 2, cy - skullRy - 1], [cx + skullRx - 2, cy - skullRy * 0.55], [cx + skullRx - 6, cy - skullRy + 4]]));
  const top = cy - skullRy;
  if (ear === 'point') {
    d.push(poly([[cx - 14, top + 8], [cx - 18, top - 13 * earSize], [cx - 2, top + 2]]));
    d.push(poly([[cx, top + 2], [cx + 7, top - 11 * earSize], [cx + 13, top + 8]]));
  } else if (ear === 'round') {
    d.push(ell(cx - 11, top + 6, 7.5, 8));
    d.push(ell(cx + 8, top + 5, 6.5, 7));
  } else if (ear === 'long') {
    d.push(poly([[cx - 11, top + 7], [cx - 19, top - 22 * earSize], [cx - 13, top - 23 * earSize], [cx - 4, top + 2]]));
    d.push(poly([[cx + 1, top + 3], [cx + 3, top - 21 * earSize], [cx + 9, top - 20 * earSize], [cx + 10, top + 7]]));
  } else if (ear === 'tuft') {
    d.push(poly([[cx - 13, top + 7], [cx - 21, top - 16], [cx - 4, top + 1]]));
    d.push(poly([[cx + 3, top + 1], [cx + 18, top - 15], [cx + 13, top + 7]]));
  }
  if (horn === 'horn') {
    d.push(`M${cx - 9} ${top + 3}Q${cx - 19} ${top - 16} ${cx - 15} ${top - 30}L${cx - 11} ${top - 29}Q${cx - 13} ${top - 16} ${cx - 4} ${top}Z`);
    d.push(`M${cx + 2} ${top + 1}Q${cx - 5} ${top - 17} ${cx - 2} ${top - 31}L${cx + 2} ${top - 30}Q${cx + 2} ${top - 16} ${cx + 8} ${top + 2}Z`);
  } else if (horn === 'curl') {
    d.push(`M${cx - 8} ${top + 2}Q${cx - 28} ${top - 8} ${cx - 20} ${top - 22}Q${cx - 14} ${top - 28} ${cx - 10} ${top - 20}L${cx - 15} ${top - 19}Q${cx - 20} ${top - 12} ${cx - 2} ${top - 2}Z`);
    d.push(`M${cx + 6} ${top}Q${cx + 24} ${top - 10} ${cx + 18} ${top - 24}Q${cx + 12} ${top - 30} ${cx + 8} ${top - 21}L${cx + 13} ${top - 20}Q${cx + 17} ${top - 13} ${cx + 2} ${top - 3}Z`);
  } else if (horn === 'antler') {
    d.push(poly([[cx - 8, top + 2], [cx - 12, top - 16], [cx - 24, top - 12], [cx - 15, top - 21], [cx - 22, top - 27], [cx - 12, top - 24], [cx - 9, top - 34], [cx - 4, top - 22], [cx - 2, top - 1]]));
    d.push(poly([[cx + 5, top], [cx + 8, top - 17], [cx + 20, top - 13], [cx + 12, top - 22], [cx + 20, top - 28], [cx + 10, top - 25], [cx + 7, top - 35], [cx + 2, top - 22], [cx, top - 1]]));
  }
  return d;
}

function birdHead(o) {
  const { skullR = 16, beakLen = 26, beakH = 5, crest = 'none', cx = 40, cy = 42, hook = false } = o;
  const d = [BUST, ell(cx, cy, skullR, skullR * 0.94)];
  const tip = cx + skullR + beakLen;
  d.push(poly([[cx + 4, cy - beakH - 3], [tip, cy - 1], [tip, cy + 2], [cx + 4, cy + beakH + 3]]));
  if (hook) d.push(poly([[tip - 6, cy - 2], [tip + 1, cy + 1], [tip - 5, cy + 9]]));
  const top = cy - skullR;
  if (crest === 'spike') d.push(poly([[cx - 4, top + 3], [cx - 12, top - 22], [cx + 4, top - 3]]));
  else if (crest === 'plume') {
    d.push(`M${cx - 2} ${top + 3}Q${cx - 22} ${top - 20} ${cx - 8} ${top - 30}L${cx - 4} ${top - 24}Q${cx - 12} ${top - 16} ${cx + 4} ${top - 2}Z`);
    d.push(`M${cx + 2} ${top + 1}Q${cx - 12} ${top - 18} ${cx + 2} ${top - 26}L${cx + 6} ${top - 20}Q${cx - 2} ${top - 12} ${cx + 8} ${top}Z`);
  } else if (crest === 'sweep') d.push(`M${cx - 6} ${top + 4}Q${cx - 26} ${top - 6} ${cx - 22} ${top - 16}L${cx - 16} ${top - 12}Q${cx - 18} ${top - 4} ${cx - 1} ${top}Z`);
  else if (crest === 'tuft') { d.push(poly([[cx - 10, top + 4], [cx - 16, top - 12], [cx - 3, top - 1]])); d.push(poly([[cx + 1, top - 1], [cx + 12, top - 11], [cx + 10, top + 4]])); }
  return d;
}

function fishHead() {
  return [
    BUST,
    'M20 44Q34 22 58 26Q78 30 84 46Q78 62 58 66Q34 70 20 44Z',
    poly([[58, 30], [70, 20], [72, 34]]),
    poly([[56, 62], [66, 74], [72, 60]]),
    ell(70, 40, 3.6, 3.6),
    'M78 50Q86 56 82 66L78 62Q80 56 76 54Z',
  ];
}

const MARKS = {
  Panther:    () => head({ skullRx: 20, skullRy: 16, muzzleLen: 16, muzzleH: 8, ear: 'point', earSize: 0.85, fluff: 9 }),
  Lynx:       () => head({ skullRx: 19, skullRy: 16, muzzleLen: 13, muzzleH: 8, ear: 'tuft', fluff: 11 }),
  Fox:        () => head({ skullRx: 18, skullRy: 15, muzzleLen: 24, muzzleH: 6, ear: 'point', earSize: 1.35 }),
  Otter:      () => head({ skullRx: 19, skullRy: 15, muzzleLen: 18, muzzleH: 7, ear: 'round', fluff: 7 }),
  Seal:       () => head({ skullRx: 21, skullRy: 16, muzzleLen: 16, muzzleH: 9, ear: 'none', brow: true }),
  Bear:       () => head({ skullRx: 22, skullRy: 18, muzzleLen: 18, muzzleH: 10, ear: 'round', fluff: 10 }),
  Bison:      () => head({ skullRx: 21, skullRy: 18, muzzleLen: 15, muzzleH: 11, ear: 'none', horn: 'curl', fluff: 13 }),
  Alpaca:     () => head({ skullRx: 16, skullRy: 15, muzzleLen: 18, muzzleH: 7, ear: 'long', earSize: 0.7, fluff: 9 }),
  Gazelle:    () => head({ skullRx: 15, skullRy: 13, muzzleLen: 24, muzzleH: 6, ear: 'point', earSize: 1.1, horn: 'horn' }),
  Stag:       () => head({ skullRx: 16, skullRy: 14, muzzleLen: 24, muzzleH: 6, ear: 'point', earSize: 0.9, horn: 'antler' }),
  Chinchilla: () => head({ skullRx: 18, skullRy: 16, muzzleLen: 10, muzzleH: 6, ear: 'round', fluff: 12 }),
  Magpie:     () => birdHead({ skullR: 16, beakLen: 22, beakH: 6 }),
  Crane:      () => birdHead({ skullR: 13, beakLen: 38, beakH: 4 }),
  Heron:      () => birdHead({ skullR: 13, beakLen: 40, beakH: 4, crest: 'spike' }),
  Owl:        () => birdHead({ skullR: 22, beakLen: 9, beakH: 6, crest: 'tuft', hook: true }),
  Dove:       () => birdHead({ skullR: 15, beakLen: 16, beakH: 4 }),
  Kingfisher: () => birdHead({ skullR: 17, beakLen: 34, beakH: 5, crest: 'tuft' }),
  Toucan:     () => birdHead({ skullR: 17, beakLen: 40, beakH: 13, crest: 'none' }),
  Peacock:    () => birdHead({ skullR: 13, beakLen: 16, beakH: 4, crest: 'plume' }),
  Koi:        () => fishHead(),
};

export const animalMark = species => (MARKS[species] || MARKS.Panther)();
