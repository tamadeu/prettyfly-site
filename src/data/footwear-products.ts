import type { Product } from '@/types/product';

const IMAGE_BASE = '/footwear/products';

const ALL_IMAGES = [
  `${IMAGE_BASE}/products1.webp`,
  `${IMAGE_BASE}/products2.webp`,
  `${IMAGE_BASE}/products3.webp`,
  `${IMAGE_BASE}/products4.webp`,
  `${IMAGE_BASE}/products5.webp`,
  `${IMAGE_BASE}/products6.webp`,
  `${IMAGE_BASE}/products7.webp`,
  `${IMAGE_BASE}/products8.webp`,
];

function makeReviews(productId: string, productName: string) {
  return [
    {
      id: `${productId}-r-1`,
      author: 'Danika Eman',
      rating: 5,
      title: 'True to size and super comfy',
      body: `${productName} fits true to size and the cushioning is excellent. I wore them all day and my feet felt great. Will definitely order another pair!`,
      date: '2025-12-10',
      verified: true,
    },
    {
      id: `${productId}-r-2`,
      author: 'Samuel Oas',
      rating: 4,
      title: 'Great look, solid build',
      body: `Really happy with ${productName}. The design looks even better in person and the materials feel premium. Lightweight and breathable.`,
      date: '2025-11-25',
      verified: true,
    },
    {
      id: `${productId}-r-3`,
      author: 'Nike Omo',
      rating: 5,
      title: 'Exactly as pictured',
      body: `I bought ${productName} and it looks exactly like the photos. The colors are crisp and they pair with everything. Highly recommend!`,
      date: '2025-11-12',
      verified: true,
    },
  ];
}

function buildGallery(productId: string, name: string, primaryIdx: number) {
  const order: number[] = [];
  const used = new Set<number>();
  order.push(primaryIdx);
  used.add(primaryIdx);
  for (let i = 0; i < ALL_IMAGES.length && order.length < 6; i++) {
    if (!used.has(i)) { order.push(i); used.add(i); }
  }
  return order.map((idx, i) => ({
    id: `${productId}-img-${i + 1}`,
    src: ALL_IMAGES[idx],
    alt: `${name} view ${i + 1}`,
  }));
}

type Badge = 'sale' | 'new' | 'pre-order' | null;

const COLORS_A = [
  { name: 'Black',  value: '#1c1c1c' },
  { name: 'Pink',   value: '#ec4899' },
  { name: 'White',  value: '#f1f1f1' },
];
const COLORS_B = [
  { name: 'Sky',    value: '#38bdf8' },
  { name: 'Black',  value: '#1c1c1c' },
  { name: 'Coral',  value: '#fb7185' },
];
const COLORS_C = [
  { name: 'Sand',   value: '#d9c3a5' },
  { name: 'Grey',   value: '#9ca3af' },
  { name: 'Black',  value: '#1c1c1c' },
];
const COLORS_D = [
  { name: 'Yellow', value: '#f5c518' },
  { name: 'Pink',   value: '#ec4899' },
  { name: 'White',  value: '#f1f1f1' },
];

const SHOE_SIZES = ['US 7', 'US 8', 'US 9', 'US 10', 'US 11'];

function base(
  id: string,
  slug: string,
  name: string,
  price: number,
  compareAtPrice: number | null,
  category: string,
  primaryIdx: number,
  badge: Badge = null,
  tags: string[] = [],
  palette = COLORS_A,
  description = '',
): Product {
  const variants = palette.map((c, i) => ({
    id: `${id}-v-${i + 1}`,
    color: c.name,
    size: SHOE_SIZES[i % SHOE_SIZES.length],
    price,
    compareAtPrice,
    image: ALL_IMAGES[(primaryIdx + i) % ALL_IMAGES.length],
    available: true,
    sku: `${id.toUpperCase()}-${c.name.toUpperCase().slice(0, 4)}`,
  }));

  return {
    id,
    slug,
    name,
    vendor: 'Ambaz Footwear',
    price,
    compareAtPrice,
    currency: 'USD',
    images: buildGallery(id, name, primaryIdx),
    variants,
    colors: palette.map((c) => ({ name: c.name, value: c.value, type: 'hex' as const })),
    sizes: SHOE_SIZES,
    category,
    tags,
    brand: 'Ambaz',
    availability: 'in-stock',
    badge,
    description: description || `${name} — engineered for all-day comfort and street-ready style. Breathable upper, cushioned midsole, and a grippy outsole make every step effortless.`,
    features: [
      'Breathable knit / mesh upper',
      'Responsive cushioned midsole',
      'Durable non-slip rubber outsole',
      'Padded collar and tongue for comfort',
    ],
    rating: 4.7,
    reviewCount: 38,
    reviews: makeReviews(id, name),
    relatedProducts: [],
    pairsWellWith: [],
    createdAt: '2025-11-01T00:00:00Z',
    sku: id.toUpperCase(),
    countdownEnd: null,
    collections: [category],
  };
}

export const footwearProducts: Product[] = [
  /* ── Sneaker (8) — the default "New Arrivals" grid mirrors the screenshot ── */
  base('fw-1',  'fw-mesh-sports-shoe',         'Mesh Sports Shoe',          33, null, 'Sneaker',     0, null,   ['sneaker', 'mesh', 'sports', 'running'],   COLORS_A),
  base('fw-2',  'fw-streamspark-shows',        'StreamSpark Shows',         44, null, 'Sneaker',     1, null,   ['sneaker', 'stream', 'casual'],            COLORS_B),
  base('fw-3',  'fw-showspectra-shows',        'ShowSpectra Shows',         39, null, 'Sneaker',     2, null,   ['sneaker', 'spectra', 'running'],          COLORS_A),
  base('fw-4',  'fw-leather-loafers-shoes',    'Leather Loafers Shoes',     60, null, 'Sneaker',     3, null,   ['sneaker', 'leather', 'loafers'],          COLORS_C),
  base('fw-5',  'fw-ecostride-sneakers-shoes', 'EcoStride Sneakers Shoes',  35, 55,   'Sneaker',     4, 'sale', ['sneaker', 'eco', 'stride'],               COLORS_A),
  base('fw-6',  'fw-running-sneakers-shoes',   'Running sneakers shoes',    28, null, 'Sneaker',     5, null,   ['sneaker', 'running', 'sport'],            COLORS_C),
  base('fw-7',  'fw-stealthstop-infinity',     'StealthStop Infinity Shoes',38, 68,   'Sneaker',     6, 'sale', ['sneaker', 'stealth', 'infinity'],         COLORS_B),
  base('fw-8',  'fw-showstopper-shoes',        'ShowStopper shoes',         35, null, 'Sneaker',     7, null,   ['sneaker', 'showstopper', 'street'],        COLORS_D),

  /* ── Casuals (8) ── */
  base('fw-9',  'fw-urban-canvas-low',         'Urban Canvas Low',          42, null, 'Casuals',     0, 'new',  ['casuals', 'canvas', 'everyday'],          COLORS_C),
  base('fw-10', 'fw-daily-knit-slip-on',       'Daily Knit Slip-On',        38, 48,   'Casuals',     2, 'sale', ['casuals', 'knit', 'slip-on'],             COLORS_A),
  base('fw-17', 'fw-weekend-canvas-sneaker',   'Weekend Canvas Sneaker',    40, null, 'Casuals',     4, null,   ['casuals', 'canvas', 'weekend'],           COLORS_B),
  base('fw-18', 'fw-suede-casual-lace-up',     'Suede Casual Lace-Up',      52, 62,   'Casuals',     6, 'sale', ['casuals', 'suede', 'lace-up'],            COLORS_C),
  base('fw-19', 'fw-comfort-slip-on-mule',     'Comfort Slip-On Mule',      36, null, 'Casuals',     1, null,   ['casuals', 'slip-on', 'comfort'],          COLORS_D),
  base('fw-20', 'fw-everyday-court-shoe',      'Everyday Court Shoe',       45, null, 'Casuals',     3, 'new',  ['casuals', 'court', 'everyday'],           COLORS_A),
  base('fw-21', 'fw-linen-espadrille',         'Linen Espadrille',          34, 44,   'Casuals',     5, 'sale', ['casuals', 'linen', 'espadrille'],         COLORS_C),
  base('fw-22', 'fw-retro-casual-trainer',     'Retro Casual Trainer',      48, null, 'Casuals',     7, null,   ['casuals', 'retro', 'trainer'],            COLORS_B),

  /* ── Formals (8) ── */
  base('fw-11', 'fw-oxford-classic-derby',     'Oxford Classic Derby',      72, null, 'Formals',     4, 'new',  ['formals', 'oxford', 'leather'],           COLORS_C),
  base('fw-12', 'fw-monk-strap-leather',       'Monk Strap Leather Shoe',   80, null, 'Formals',     6, null,   ['formals', 'monk', 'leather'],             COLORS_C),
  base('fw-23', 'fw-wholecut-oxford',          'Wholecut Oxford',           96, null, 'Formals',     0, 'new',  ['formals', 'oxford', 'wholecut'],          COLORS_C),
  base('fw-24', 'fw-cap-toe-brogue',           'Cap-Toe Brogue',            84, 104,  'Formals',     2, 'sale', ['formals', 'brogue', 'cap-toe'],           COLORS_A),
  base('fw-25', 'fw-patent-dress-loafer',      'Patent Dress Loafer',       70, null, 'Formals',     5, null,   ['formals', 'patent', 'loafer'],            COLORS_C),
  base('fw-26', 'fw-leather-penny-loafer',     'Leather Penny Loafer',      66, null, 'Formals',     7, null,   ['formals', 'penny', 'loafer'],             COLORS_C),
  base('fw-27', 'fw-double-monk-strap',        'Double Monk Strap',         88, 108,  'Formals',     1, 'sale', ['formals', 'monk', 'double'],              COLORS_C),
  base('fw-28', 'fw-classic-derby-black',      'Classic Derby Black',       74, null, 'Formals',     3, null,   ['formals', 'derby', 'classic'],            COLORS_A),

  /* ── Sports Shoe (8) ── */
  base('fw-13', 'fw-velocity-trainer-pro',     'Velocity Trainer Pro',      58, 78,   'Sports Shoe', 1, 'sale', ['sports', 'trainer', 'gym'],               COLORS_B),
  base('fw-14', 'fw-aero-track-runner',        'Aero Track Runner',         49, null, 'Sports Shoe', 3, 'new',  ['sports', 'track', 'runner'],              COLORS_D),
  base('fw-29', 'fw-turbo-sprint-runner',      'Turbo Sprint Runner',       54, null, 'Sports Shoe', 5, 'new',  ['sports', 'sprint', 'runner'],             COLORS_B),
  base('fw-30', 'fw-gym-cross-trainer',        'Gym Cross Trainer',         47, 57,   'Sports Shoe', 7, 'sale', ['sports', 'gym', 'cross-trainer'],         COLORS_A),
  base('fw-31', 'fw-marathon-lite',            'Marathon Lite',             62, null, 'Sports Shoe', 0, null,   ['sports', 'marathon', 'lightweight'],      COLORS_D),
  base('fw-32', 'fw-court-smash-tennis',       'Court Smash Tennis',        51, null, 'Sports Shoe', 2, null,   ['sports', 'tennis', 'court'],              COLORS_B),
  base('fw-33', 'fw-trail-sport-runner',       'Trail Sport Runner',        59, 74,   'Sports Shoe', 4, 'sale', ['sports', 'trail', 'runner'],             COLORS_C),
  base('fw-34', 'fw-power-lift-trainer',       'Power Lift Trainer',        56, null, 'Sports Shoe', 6, null,   ['sports', 'lift', 'gym'],                  COLORS_A),

  /* ── Boots (8) ── */
  base('fw-15', 'fw-trail-hiker-boot',         'Trail Hiker Boot',          95, null, 'Boots',       5, null,   ['boots', 'hiker', 'trail'],                COLORS_C),
  base('fw-16', 'fw-chelsea-ankle-boot',       'Chelsea Ankle Boot',        88, 108,  'Boots',       7, 'sale', ['boots', 'chelsea', 'ankle'],              COLORS_A),
  base('fw-35', 'fw-rugged-combat-boot',       'Rugged Combat Boot',        102, null,'Boots',       0, 'new',  ['boots', 'combat', 'rugged'],              COLORS_C),
  base('fw-36', 'fw-suede-desert-boot',        'Suede Desert Boot',         78, 98,   'Boots',       2, 'sale', ['boots', 'desert', 'suede'],               COLORS_C),
  base('fw-37', 'fw-lace-up-work-boot',        'Lace-Up Work Boot',         110, null,'Boots',       4, null,   ['boots', 'work', 'lace-up'],               COLORS_A),
  base('fw-38', 'fw-winter-snow-boot',         'Winter Snow Boot',          92, null, 'Boots',       6, 'new',  ['boots', 'winter', 'snow'],                COLORS_B),
  base('fw-39', 'fw-leather-biker-boot',       'Leather Biker Boot',        118, 138, 'Boots',       1, 'sale', ['boots', 'biker', 'leather'],              COLORS_A),
  base('fw-40', 'fw-classic-chukka-boot',      'Classic Chukka Boot',       84, null, 'Boots',       3, null,   ['boots', 'chukka', 'classic'],             COLORS_C),
];
