import type { Product } from '@/types/product';

const IMAGE_BASE = '/phone-case/products';

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
      title: 'Perfect fit, great protection',
      body: `${productName} fits my phone perfectly and the quality is outstanding. I've dropped my phone twice and no damage at all. Will definitely order again!`,
      date: '2025-12-10',
      verified: true,
    },
    {
      id: `${productId}-r-2`,
      author: 'Samuel Oas',
      rating: 4,
      title: 'Great design and protection',
      body: `Really happy with ${productName}. The design is beautiful and it provides solid protection. Easy to put on and take off.`,
      date: '2025-11-25',
      verified: true,
    },
    {
      id: `${productId}-r-3`,
      author: 'Nike Omo',
      rating: 5,
      title: 'Exactly as shown in photos',
      body: `I bought ${productName} and it looks exactly like the photos. The colors are vibrant and the material feels premium. Highly recommend!`,
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

const MODEL_OPTIONS = [
  { name: 'iPhone 15 Pro', value: '#1a1a1a' },
  { name: 'iPhone 14', value: '#2c3e6b' },
  { name: 'iPhone 13', value: '#4a4a4a' },
];

const MODEL_OPTIONS_EXT = [
  { name: 'iPhone 15 Pro', value: '#1a1a1a' },
  { name: 'Samsung S24', value: '#2c3e6b' },
  { name: 'Pixel 8', value: '#4a4a4a' },
];

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
  palette = MODEL_OPTIONS,
  description = '',
): Product {
  const variants = palette.map((c, i) => ({
    id: `${id}-v-${i + 1}`,
    color: c.name,
    size: 'Standard',
    price,
    compareAtPrice,
    image: ALL_IMAGES[(primaryIdx + i) % ALL_IMAGES.length],
    available: true,
    sku: `${id.toUpperCase()}-${c.name.replace(/\s+/g, '-').toUpperCase().slice(0, 6)}`,
  }));

  return {
    id,
    slug,
    name,
    vendor: 'Ambaz Phone',
    price,
    compareAtPrice,
    currency: 'USD',
    images: buildGallery(id, name, primaryIdx),
    variants,
    colors: palette.map((c) => ({ name: c.name, value: c.value, type: 'hex' as const })),
    sizes: ['iPhone 15 Pro', 'iPhone 14', 'iPhone 13', 'Samsung S24'],
    category,
    tags,
    brand: 'Phone Case',
    availability: 'in-stock',
    badge,
    description: description || `${name} — premium phone case crafted with durable materials and stunning design. Military-grade protection meets modern aesthetics for the ultimate phone companion.`,
    features: [
      'Military-grade drop protection',
      'Slim, lightweight design',
      'Precise cutouts for all ports',
      'Wireless charging compatible',
    ],
    rating: 4.8,
    reviewCount: 42,
    reviews: makeReviews(id, name),
    relatedProducts: [],
    pairsWellWith: [],
    createdAt: '2025-11-01T00:00:00Z',
    sku: id.toUpperCase(),
    countdownEnd: null,
    collections: [category],
  };
}

export const phoneCaseProducts: Product[] = [
  base('pc-1',  'pc-aero-flex-cover',       'Aero Flex Cover',        20, 30, 'Phone Case',    0, 'sale', ['phone case', 'flex', 'aero', 'protection'], MODEL_OPTIONS),
  base('pc-2',  'pc-crystal-clarity-case',  'Crystal Clarity Case',   22, null,'Leather Cases', 1, null,   ['leather', 'crystal', 'clarity', 'premium'], MODEL_OPTIONS_EXT),
  base('pc-3',  'pc-edge-max-case',         'Edge Max Case',          32, 38, 'Slim Cases',    2, 'sale', ['slim', 'edge', 'max', 'protection'], MODEL_OPTIONS),
  base('pc-4',  'pc-iphone-card-case',      'iPhone Card Case',       25, null,'Wallet Cases',  3, null,   ['wallet', 'card', 'iphone', 'storage'], MODEL_OPTIONS_EXT),
  base('pc-5',  'pc-iphone-slimline-case',  'iPhone Slimline Case',   42, null,'Slim Cases',    4, null,   ['slim', 'slimline', 'minimal', 'thin'], MODEL_OPTIONS),
  base('pc-6',  'pc-mandala-glass-case',    'Mandala Glass Case',     24, 34, 'Phone Case',    5, 'sale', ['phone case', 'mandala', 'glass', 'art'], MODEL_OPTIONS_EXT),
  base('pc-7',  'pc-marble-pattern-case',   'Marble Pattern Case',    17, 27, 'Phone Case',    6, 'sale', ['phone case', 'marble', 'pattern', 'elegant'], MODEL_OPTIONS),
  base('pc-8',  'pc-pixel-perfect-case',    'Pixel Perfect Case',     40, null,'Leather Cases', 7, null,   ['leather', 'pixel', 'perfect', 'premium'], MODEL_OPTIONS_EXT),
  base('pc-9',  'pc-neon-glow-case',        'Neon Glow Case',         28, null,'Phone Case',    0, 'new',  ['phone case', 'neon', 'glow', 'vibrant'], MODEL_OPTIONS),
  base('pc-10', 'pc-floral-dream-case',     'Floral Dream Case',      35, null,'Phone Case',    1, 'new',  ['phone case', 'floral', 'dream', 'aesthetic'], MODEL_OPTIONS_EXT),
  base('pc-11', 'pc-carbon-fiber-case',     'Carbon Fiber Case',      45, null,'Slim Cases',    2, 'new',  ['slim', 'carbon', 'fiber', 'tough'], MODEL_OPTIONS),
  base('pc-12', 'pc-clear-view-case',       'Clear View Case',        19, null,'Wallet Cases',  3, null,   ['wallet', 'clear', 'view', 'transparent'], MODEL_OPTIONS_EXT),
  base('pc-13', 'pc-leather-wallet-case',   'Leather Wallet Case',    38, 48, 'Wallet Cases',  4, 'sale', ['wallet', 'leather', 'card', 'storage'], MODEL_OPTIONS),
  base('pc-14', 'pc-rugged-armor-case',     'Rugged Armor Case',      32, null,'Leather Cases', 5, null,   ['leather', 'rugged', 'armor', 'heavy duty'], MODEL_OPTIONS_EXT),
  base('pc-15', 'pc-magnetic-folio-case',   'Magnetic Folio Case',    52, null,'Wallet Cases',  6, 'new',  ['wallet', 'magnetic', 'folio', 'premium'], MODEL_OPTIONS),
  base('pc-16', 'pc-art-deco-case',         'Art Deco Case',          29, 39, 'Phone Case',    7, 'sale', ['phone case', 'art', 'deco', 'vintage'], MODEL_OPTIONS_EXT),
];
