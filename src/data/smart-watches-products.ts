import type { Product } from '@/types/product';

const IMAGE_BASE = '/smart-watches/products';

const ALL_IMAGES = [
  `${IMAGE_BASE}/products1.webp`,
  `${IMAGE_BASE}/products2.webp`,
  `${IMAGE_BASE}/products3.webp`,
  `${IMAGE_BASE}/products4.webp`,
  `${IMAGE_BASE}/products5.webp`,
  `${IMAGE_BASE}/products6.webp`,
  `${IMAGE_BASE}/products7.webp`,
  `${IMAGE_BASE}/products8.webp`,
  `${IMAGE_BASE}/products9.webp`,
];

function makeReviews(productId: string, productName: string) {
  return [
    {
      id: `${productId}-r-1`,
      author: 'Mike Sims',
      rating: 5,
      title: 'Exceptional quality and style',
      body: `${productName} exceeded my expectations. The build quality is outstanding and the display is crisp and clear. Worth every penny!`,
      date: '2025-12-10',
      verified: true,
    },
    {
      id: `${productId}-r-2`,
      author: 'Samuel Sila',
      rating: 4,
      title: 'Great watch, very comfortable',
      body: `Really happy with ${productName}. It looks great and tracks my fitness accurately. The battery life is impressive too.`,
      date: '2025-11-25',
      verified: true,
    },
    {
      id: `${productId}-r-3`,
      author: 'David Liz',
      rating: 5,
      title: 'Exactly as described',
      body: `I bought ${productName} and it looks exactly like the photos. The strap is comfortable and the watch face is stunning. Highly recommend!`,
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

const WATCH_COLORS_A = [
  { name: 'Black', value: '#1a1a1a' },
  { name: 'Silver', value: '#c0c0c0' },
  { name: 'Rose Gold', value: '#b8860b' },
];

const WATCH_COLORS_B = [
  { name: 'Silver', value: '#c0c0c0' },
  { name: 'Dark Blue', value: '#2c3e6b' },
  { name: 'Black', value: '#1a1a1a' },
];

const WATCH_COLORS_C = [
  { name: 'Rose Gold', value: '#b8860b' },
  { name: 'Silver', value: '#c0c0c0' },
  { name: 'Black', value: '#1a1a1a' },
];

const WATCH_SIZES = ['38mm', '42mm', '44mm', '46mm'];

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
  palette = WATCH_COLORS_A,
  description = '',
): Product {
  const variants = palette.map((c, i) => ({
    id: `${id}-v-${i + 1}`,
    color: c.name,
    size: '42mm',
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
    vendor: 'Ambaz Watches',
    price,
    compareAtPrice,
    currency: 'USD',
    images: buildGallery(id, name, primaryIdx),
    variants,
    colors: palette.map((c) => ({ name: c.name, value: c.value, type: 'hex' as const })),
    sizes: WATCH_SIZES,
    category,
    tags,
    brand: 'Smart Watches',
    availability: 'in-stock',
    badge,
    description: description || `${name} — a precision-crafted timepiece that blends cutting-edge technology with timeless design. Track your health, stay connected, and elevate your style.`,
    features: [
      'Heart rate & SpO2 monitoring',
      'GPS tracking built-in',
      'Water resistant to 50m',
      '7-day battery life',
    ],
    rating: 4.8,
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

export const smartWatchesProducts: Product[] = [
  base('sw-1',  'sw-amazfit-bip-5',       'Amazfit Bip 5 watch',     160, 210, 'Smart Watch',     0, 'sale', ['smart watch', 'amazfit', 'fitness', 'gps'], WATCH_COLORS_A),
  base('sw-2',  'sw-amazfit-gtr5',         'Amazfit GTR5 Watch',      180, null,'Smart Watch',     1, null,   ['smart watch', 'amazfit', 'amoled', 'health'], WATCH_COLORS_B),
  base('sw-3',  'sw-amazfit-pop-3s',       'Amazfit Pop 3S',          150, 170, 'Digital Watches', 2, 'sale', ['digital', 'amazfit', 'budget', 'fitness'], WATCH_COLORS_C),
  base('sw-4',  'sw-citizen-eco-drive',    'Citizen Eco-Drive Watch', 230, null,'Luxury Watches',  3, null,   ['luxury', 'citizen', 'eco-drive', 'solar'], WATCH_COLORS_A),
  base('sw-5',  'sw-elegant-stylish',      'Elegant Stylish Watch',   185, null,'Luxury Watches',  4, 'new',  ['luxury', 'elegant', 'dress watch', 'classic'], WATCH_COLORS_B),
  base('sw-6',  'sw-enduro-smart-lx',      'Enduro Smart LX',         250, null,'Smart Watch',     5, null,   ['smart watch', 'enduro', 'rugged', 'outdoor'], WATCH_COLORS_C),
  base('sw-7',  'sw-luxury-mens-watch',    'Luxury Mens Watch',       120, null,'Luxury Watches',  6, null,   ['luxury', 'mens', 'classic', 'analog'], WATCH_COLORS_A),
  base('sw-8',  'sw-sports-tracker-pro',   'Sports Tracker Pro',       95, 130, 'Sports Watches',  7, 'sale', ['sports', 'tracker', 'running', 'fitness'], WATCH_COLORS_B),
  base('sw-9',  'sw-digital-precision',    'Digital Precision Watch', 145, null,'Digital Watches', 8, 'new',  ['digital', 'precision', 'tech', 'minimalist'], WATCH_COLORS_C),
  base('sw-10', 'sw-classic-gold',         'Classic Gold Watch',      310, null,'Luxury Watches',  0, null,   ['luxury', 'gold', 'classic', 'dress'], WATCH_COLORS_A),
  base('sw-11', 'sw-fitness-elite',        'Fitness Elite Watch',     175, 220, 'Smart Watch',     1, 'sale', ['smart watch', 'fitness', 'elite', 'health'], WATCH_COLORS_B),
  base('sw-12', 'sw-chrono-sport',         'Chrono Sport Watch',      130, null,'Sports Watches',  2, 'new',  ['sports', 'chronograph', 'racing', 'men'], WATCH_COLORS_C),
];
