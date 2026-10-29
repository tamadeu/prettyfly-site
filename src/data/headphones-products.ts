import type { Product } from '@/types/product';

const ALL_IMAGES = [
  '/headphones/featured-products/featured-products10.webp',
  '/headphones/featured-products/featured-products11.webp',
  '/headphones/featured-products/featured-products13.webp',
  '/headphones/featured-products/featured-products15.webp',
  '/headphones/featured-products/featured-products1.webp',
  '/headphones/featured-products/featured-products2.webp',
  '/headphones/featured-products/featured-products4.webp',
  '/headphones/featured-products/featured-products5.webp',
  '/headphones/featured-products/featured-products6.webp',
  '/headphones/featured-products/featured-products8.webp',
  '/headphones/featured-products/featured-products9.webp',
];

function makeReviews(productId: string, productName: string) {
  return [
    {
      id: `${productId}-r-1`,
      author: 'Mike Jones',
      rating: 5,
      title: 'Incredible sound quality',
      body: `Switched to ${productName} and the difference is night and day — rich bass, crystal highs, and super comfortable for long sessions.`,
      date: '2025-11-20',
      verified: true,
    },
    {
      id: `${productId}-r-2`,
      author: 'Maxwell T.',
      rating: 4,
      title: 'Great value for money',
      body: `${productName} arrived well packaged and sounds amazing. Build feels premium. Slightly heavy for long runs but otherwise perfect.`,
      date: '2025-11-10',
      verified: true,
    },
    {
      id: `${productId}-r-3`,
      author: 'Samule Dias',
      rating: 5,
      title: 'Best headphones I have owned',
      body: `Couldn't be happier with ${productName}. Noise cancellation works perfectly in loud environments. Would absolutely buy again.`,
      date: '2025-10-28',
      verified: true,
    },
  ];
}

function buildGallery(productId: string, name: string, primaryIdx: number, secondaryIdx: number) {
  const order: number[] = [];
  const used = new Set<number>();
  order.push(primaryIdx); used.add(primaryIdx);
  if (!used.has(secondaryIdx)) { order.push(secondaryIdx); used.add(secondaryIdx); }
  for (let i = 0; i < ALL_IMAGES.length && order.length < 8; i++) {
    if (!used.has(i)) { order.push(i); used.add(i); }
  }
  return order.map((idx, i) => ({
    id: `${productId}-img-${i + 1}`,
    src: ALL_IMAGES[idx],
    alt: `${name} view ${i + 1}`,
  }));
}

type Badge = 'sale' | 'new' | 'pre-order' | null;

const COLOR_PALETTE: { name: string; value: string }[] = [
  { name: 'Cyan', value: '#00bcd4' },
  { name: 'Black', value: '#212121' },
  { name: 'Gray', value: '#9e9e9e' },
  { name: 'Pink', value: '#e91e8c' },
  { name: 'Yellow', value: '#fdd835' },
];

function base(
  id: string,
  slug: string,
  name: string,
  price: number,
  compareAtPrice: number | null,
  category: string,
  primaryIdx: number,
  secondaryIdx: number,
  badge: Badge = null,
  tags: string[] = [],
  description = ''
): Product {
  const variants = COLOR_PALETTE.map((c, i) => ({
    id: `${id}-v-${i + 1}`,
    color: c.name,
    size: 'Standard',
    price,
    compareAtPrice,
    image: ALL_IMAGES[(primaryIdx + i) % ALL_IMAGES.length],
    available: true,
    sku: `${id.toUpperCase()}-${c.name.toUpperCase().slice(0, 3)}`,
  }));

  return {
    id,
    slug,
    name,
    vendor: 'Ambaz Audio',
    price,
    compareAtPrice,
    currency: 'USD',
    images: buildGallery(id, name, primaryIdx, secondaryIdx),
    variants,
    colors: COLOR_PALETTE.map((c) => ({ name: c.name, value: c.value, type: 'hex' as const })),
    sizes: [],
    category,
    tags,
    brand: 'SoundLab',
    availability: 'in-stock',
    badge,
    description: description || `${name} — engineered for audiophiles who demand the best. Immersive sound, premium build, and all-day comfort in one package.`,
    features: [
      'Active Noise Cancellation',
      'Up to 30-hour battery life',
      'Hi-Res Audio certified',
      'Foldable design for portability',
    ],
    rating: 4.7,
    reviewCount: 28,
    reviews: makeReviews(id, name),
    relatedProducts: [],
    pairsWellWith: [],
    createdAt: '2025-09-01T00:00:00Z',
    sku: id.toUpperCase(),
    countdownEnd: null,
  };
}

export const headphonesProducts: Product[] = [
  base('hp-001', 'hp-echo-pulse-headphone',     'Echo Pulse Headphone',     18,   null, 'Headphones',   0, 4, null,   ['wireless', 'over-ear', 'bass']),
  base('hp-002', 'hp-gaming-headphones',          'Gaming Headphones',         12,   22,   'Gaming',        1, 5, 'sale', ['gaming', 'rgb', 'surround']),
  base('hp-003', 'hp-lenovo-hd200-headphone',     'Lenovo HD200 Headphone',    27,   null, 'Headphones',   2, 6, null,   ['over-ear', 'studio', 'hifi']),
  base('hp-004', 'hp-pro-bluetooth-headset',      'Pro Bluetooth Headset',     29,   null, 'Wireless',      3, 7, null,   ['bluetooth', 'wireless', 'anc']),
  base('hp-005', 'hp-puretone-max-headset',       'PureTone Max Headset',      11,   21,   'Headphones',   4, 8, 'sale', ['over-ear', 'budget', 'comfort']),
  base('hp-006', 'hp-remax-metal-earphone',       'Remax Metal Earphone',      35,   null, 'Earphones',     5, 9, null,   ['in-ear', 'metal', 'hifi']),
  base('hp-007', 'hp-sound-infinity-headset',     'Sound Infinity Headset',    30,   null, 'Headphones',   6, 0, null,   ['over-ear', 'wireless', 'anc']),
  base('hp-008', 'hp-sound-pro-headphone',        'Sound Pro Headphone',        28,   null, 'Headphones',   7, 1, null,   ['pro', 'studio', 'mixing']),
  base('hp-009', 'hp-bass-boost-wireless',        'Bass Boost Wireless',        45,   null, 'Wireless',      8, 2, 'new',  ['bass', 'bluetooth', 'deep']),
  base('hp-010', 'hp-studio-monitor-pro',         'Studio Monitor Pro',         55,   null, 'Studio',        9, 3, 'new',  ['studio', 'monitor', 'flat']),
  base('hp-011', 'hp-anc-elite-headphone',        'ANC Elite Headphone',        38,   null, 'Headphones',  10, 4, null,   ['anc', 'elite', 'premium']),
  base('hp-012', 'hp-sport-wireless-earbuds',     'Sport Wireless Earbuds',     22,   32,   'Earphones',     0, 5, 'sale', ['sport', 'earbuds', 'sweat-proof']),
];
