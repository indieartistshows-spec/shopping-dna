// 100 Indian apparel labels, grouped by the segment a shopper would recognise.
// [name, segment, price band 1-4]
const RAW = [
  ['Sabyasachi','Couture',4],['Manish Malhotra','Couture',4],['Tarun Tahiliani','Couture',4],
  ['Rohit Bal','Couture',4],['Gaurav Gupta','Couture',4],['Falguni Shane Peacock','Couture',4],
  ['JJ Valaya','Couture',4],['Shantanu & Nikhil','Couture',4],['Amit Aggarwal','Couture',4],
  ['Rahul Mishra','Couture',4],

  ['Anita Dongre','Designer',3],['Ritu Kumar','Designer',3],['House of Masaba','Designer',3],
  ['Payal Singhal','Designer',3],['Abraham & Thakore','Designer',3],['Raw Mango','Designer',3],
  ['Péro','Designer',3],['Bodice','Designer',3],['Lovebirds','Designer',3],
  ['Dhruv Kapoor','Designer',3],['Ka-Sha','Designer',3],['Eka','Designer',3],
  ['Injiri','Designer',4],['11.11 / eleven eleven','Designer',4],['Chola','Designer',3],
  ['Kartik Research','Designer',4],['Huemn','Designer',3],['NorBlack NorWhite','Designer',3],
  ['Bhaane','Designer',2],['Two Point Two','Designer',2],

  ['Nicobar','Contemporary',2],['Good Earth','Contemporary',3],['Fabindia','Contemporary',2],
  ['Anokhi','Contemporary',2],['Jaypore','Contemporary',2],['The Summer House','Contemporary',3],
  ['Doodlage','Contemporary',2],['Suta','Contemporary',2],['Okhai','Contemporary',2],
  ['Khara Kapas','Contemporary',2],['Tjori','Contemporary',2],['Cord','Contemporary',3],
  ['Ilk','Contemporary',3],['Runaway Bicycle','Contemporary',3],['Rangsutra','Contemporary',2],
  ['Upasana','Contemporary',2],['Nappa Dori','Contemporary',3],

  ['Bluorng','Streetwear',2],['Warping Theories','Streetwear',2],['Almost Gods','Streetwear',3],
  ['Six5Six','Streetwear',2],['Turned Out','Streetwear',2],['Dead Beat Club','Streetwear',2],
  ['Capsul','Streetwear',2],['Veg Non Veg','Streetwear',3],
  ['Bombay Shirt Company','Streetwear',2],

  ['Biba','High street',1],['W for Woman','High street',1],['Aurelia','High street',1],
  ['Global Desi','High street',1],['AND','High street',2],['Westside','High street',1],
  ['Max Fashion','High street',1],['Pantaloons','High street',1],
  ['Soch','High street',1],
  ['Faballey','High street',1],['Chemistry','High street',1],['Twenty Dresses','High street',1],

  ['Allen Solly','Menswear',2],['Van Heusen','Menswear',2],['Louis Philippe','Menswear',2],
  ['Peter England','Menswear',1],['Park Avenue','Menswear',2],['Raymond','Menswear',2],
  ['Blackberrys','Menswear',2],['Arrow','Menswear',2],['Mufti','Menswear',2],
  ['Indian Terrain','Menswear',2],

  ['Flying Machine','Denim',1],['Spykar','Denim',1],['Killer','Denim',1],
  ['Numero Uno','Denim',1],['Pepe Jeans','Denim',2],['Wrangler','Denim',2],
  ['Levi\u2019s','Denim',2],['Being Human','Denim',2],['Roadster','Denim',1],
  ['Jack & Jones','Denim',2],

  ['HRX','Active',1],['Cultsport','Active',1],['Blissclub','Active',2],
  ['Kica','Active',2],['Alcis Sports','Active',1],['Boldfit','Active',1],
  ['Silvertraq','Active',1],['Proyog','Active',3],
  ['Puma India','Active',2],

  ['No Nasties','Sustainable',2],['B Label','Sustainable',2],['Bhu:sattva','Sustainable',2],
];

export const BRANDS = RAW.map(([name, segment, price], i) => ({
  id: 'b' + i,
  name,
  segment,
  price,
  priceLabel: ['₹', '₹₹', '₹₹₹', '₹₹₹₹'][price - 1],
  initials: name.replace(/[^A-Za-z0-9 ]/g, '').split(/\s+/).filter(Boolean).slice(0, 2)
    .map(w => w[0]).join('').toUpperCase(),
}));

// Costliest first: the aspirational end reads at the top, high street falls below.
const byPrice = (x, y) => y.price - x.price || x.name.localeCompare(y.name);
BRANDS.sort(byPrice);

export const SEGMENTS = ['All', ...[...new Set(BRANDS.map(b => b.segment))]];

/* Labels the user adds themselves, kept per device. */
const CUSTOM_KEY = 'sdna.customBrands';
export function customBrands() {
  try { return JSON.parse(localStorage.getItem(CUSTOM_KEY) || '[]'); } catch { return []; }
}
export function addCustomBrand(name) {
  const clean = name.trim().replace(/\s+/g, ' ').slice(0, 40);
  if (!clean) return null;
  const existing = [...BRANDS, ...customBrands()]
    .find(b => b.name.toLowerCase() === clean.toLowerCase());
  if (existing) return existing;
  const entry = {
    id: 'c' + Date.now().toString(36),
    name: clean,
    segment: 'Yours',
    price: 0,
    priceLabel: '—',
    custom: true,
    initials: clean.replace(/[^A-Za-z0-9 ]/g, '').split(/\s+/).filter(Boolean).slice(0, 2)
      .map(w => w[0]).join('').toUpperCase(),
  };
  try { localStorage.setItem(CUSTOM_KEY, JSON.stringify([...customBrands(), entry])); } catch {}
  return entry;
}
export const allBrands = () => [...customBrands(), ...BRANDS];

export function searchBrands(query, segment) {
  const q = query.trim().toLowerCase();
  return allBrands().filter(b =>
    (segment === 'All' || b.segment === segment) &&
    (!q || b.name.toLowerCase().includes(q) || b.segment.toLowerCase().includes(q)));
}

/* Which segments suit an identity — used to surface a starting shortlist. */
const AFFINITY = {
  achromatic: ['Designer', 'Streetwear', 'Menswear'],
  neutral: ['Contemporary', 'Designer', 'Menswear'],
  muted: ['Contemporary', 'Sustainable', 'Designer'],
  rich: ['Couture', 'Designer', 'Menswear'],
  vivid: ['Streetwear', 'Designer', 'High street'],
};

export function suggestedFor(family, fit) {
  const segs = AFFINITY[family] || ['Contemporary'];
  const loose = fit === 'oversized' || fit === 'relaxed';
  return BRANDS
    .filter(b => segs.includes(b.segment))
    .filter(b => (loose ? b.segment !== 'Menswear' : true))
    .slice(0, 12);
}

export const MAX_PICKS = 5;
