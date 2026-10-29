import type { Product } from '@/types/product';

/* ──────────────────────────────────────────────────────────────
   Socks product catalog — fully isolated from every other
   storefront. Slugs/ids are prefixed `sock-` so cart/wishlist/compare
   classify these items correctly (see src/utils/storefront.ts) and
   the shared Fashion product detail route resolves them via
   /api/socks-products. Imagery comes only from /public/socks/.
   ────────────────────────────────────────────────────────────── */

const IMAGE_BASE = '/socks/products';

const ALL_IMAGES = Array.from({ length: 8 }, (_, i) => `${IMAGE_BASE}/product-${i + 1}.webp`);

const COLOR_PALETTE: { name: string; value: string }[] = [
  { name: 'Charcoal', value: '#3a3a3a' },
  { name: 'Rose', value: '#e8a3b5' },
  { name: 'Navy', value: '#1b2a4a' },
  { name: 'Sky', value: '#7ec7e0' },
  { name: 'Mustard', value: '#e0b23a' },
];

function makeReviews(productId: string, productName: string, count: number) {
  const all = [
    {
      id: `${productId}-r-1`,
      author: 'Layla H.',
      rating: 5,
      title: 'So comfortable',
      body: `${productName} is soft, warm, and holds up after multiple washes. Exactly like the photos.`,
      date: '2025-12-02',
      verified: true,
    },
    {
      id: `${productId}-r-2`,
      author: 'Owen R.',
      rating: 4,
      title: 'Great everyday pair',
      body: `Really happy with ${productName}. Good stretch, no slipping, fits true to size.`,
      date: '2025-11-19',
      verified: true,
    },
    {
      id: `${productId}-r-3`,
      author: 'Freya B.',
      rating: 5,
      title: 'Bought as a gift',
      body: `Picked up ${productName} as a gift and ended up ordering a pair for myself too.`,
      date: '2025-11-06',
      verified: true,
    },
  ];
  return all.slice(0, count);
}

function buildGallery(productId: string, name: string, primaryIdx: number, secondaryIdx: number) {
  const order: number[] = [];
  const used = new Set<number>();
  order.push(primaryIdx); used.add(primaryIdx);
  if (!used.has(secondaryIdx)) { order.push(secondaryIdx); used.add(secondaryIdx); }
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

function base(
  id: string,
  slug: string,
  name: string,
  price: number,
  compareAtPrice: number | null,
  category: string,
  primaryIdx: number,
  secondaryIdx: number,
  colorCount: number,
  badge: Badge = null,
  reviewCount = 0,
  tags: string[] = [],
): Product {
  const palette = COLOR_PALETTE.slice(0, Math.max(0, Math.min(colorCount, COLOR_PALETTE.length)));

  const variants = (palette.length > 0 ? palette : [{ name: 'Default', value: '#3a3a3a' }]).map((c, i) => ({
    id: `${id}-v-${i + 1}`,
    color: c.name,
    size: 'One Size',
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
    vendor: 'Ambaz Socks',
    price,
    compareAtPrice,
    currency: 'USD',
    images: buildGallery(id, name, primaryIdx, secondaryIdx),
    variants,
    colors: palette.map((c) => ({ name: c.name, value: c.value, type: 'hex' as const })),
    sizes: ['S/M', 'L/XL'],
    category,
    tags,
    brand: 'Ambaz Socks',
    availability: 'in-stock',
    badge,
    description: `${name} — a soft, breathable pair built for all-day comfort, with reinforced heel and toe and a snug non-slip cuff. Machine washable and made to keep its shape wash after wash.`,
    features: [
      'Soft, breathable knit blend',
      'Reinforced heel and toe',
      'Non-slip ribbed cuff',
      'Machine washable',
    ],
    rating: reviewCount > 0 ? 5 : 0,
    reviewCount,
    reviews: makeReviews(id, name, reviewCount),
    relatedProducts: [],
    pairsWellWith: [],
    createdAt: '2025-10-01T00:00:00Z',
    sku: id.toUpperCase(),
    countdownEnd: null,
  };
}

/* First 8 items — the "Trending This Week" grid in screenshot order
   (index 0–7), prices/sale flags/rating matching the screenshot. */
const trendingProducts: Product[] = [
  base('sock-1', 'sock-feather-lite-socks', 'Feather Lite Socks', 12, 17, 'Everyday Socks', 0, 1, 3, 'sale', 0, ['lightweight', 'everyday']),
  base('sock-2', 'sock-gripguard-sport-socks', 'GripGuard Sport Socks', 23, 29, 'Sport Socks', 1, 2, 3, 'sale', 1, ['sport', 'grip']),
  base('sock-3', 'sock-henri-matisse-socks', 'Henri Matisse Socks', 21, null, 'Novelty Socks', 2, 3, 3, null, 0, ['novelty', 'art']),
  base('sock-4', 'sock-jockey-ankle-socks', 'Jockey Ankle Socks', 12, 20, 'Ankle Socks', 3, 4, 3, 'sale', 0, ['ankle', 'low-cut']),
  base('sock-5', 'sock-lux-dress-socks', 'Lux Dress Socks', 14, 25, 'Dress Socks', 4, 5, 3, 'sale', 0, ['dress', 'formal']),
  base('sock-6', 'sock-plush-pamper-socks', 'Plush Pamper Socks', 22, null, 'Cozy Socks', 5, 6, 2, null, 0, ['cozy', 'plush']),
  base('sock-7', 'sock-shield-thermal-socks', 'Shield Thermal Socks', 24, null, 'Thermal Socks', 6, 7, 2, null, 0, ['thermal', 'winter']),
  base('sock-8', 'sock-snug-stride-socks', 'Snug Stride Socks', 25, null, 'Everyday Socks', 7, 0, 2, null, 0, ['everyday', 'crew']),
];

/* Extra catalog depth so the shop/search have a fuller set. Imagery reuses
   the 8 shared product shots; ids/slugs stay unique and sock- prefixed. */
const extraDefs: { slug: string; name: string; price: number; compareAtPrice: number | null; category: string }[] = [
  { slug: 'sock-cabin-crew-socks', name: 'Cabin Crew Socks', price: 18, compareAtPrice: null, category: 'Everyday Socks' },
  { slug: 'sock-marathon-runner-socks', name: 'Marathon Runner Socks', price: 26, compareAtPrice: null, category: 'Sport Socks' },
  { slug: 'sock-fireside-slipper-socks', name: 'Fireside Slipper Socks', price: 20, compareAtPrice: 28, category: 'Cozy Socks' },
  { slug: 'sock-pinstripe-dress-socks', name: 'Pinstripe Dress Socks', price: 16, compareAtPrice: null, category: 'Dress Socks' },
  { slug: 'sock-no-show-liner-socks', name: 'No-Show Liner Socks', price: 10, compareAtPrice: null, category: 'Ankle Socks' },
  { slug: 'sock-alpine-thermal-socks', name: 'Alpine Thermal Socks', price: 27, compareAtPrice: 34, category: 'Thermal Socks' },
  { slug: 'sock-polka-dot-crew-socks', name: 'Polka Dot Crew Socks', price: 15, compareAtPrice: null, category: 'Novelty Socks' },
  { slug: 'sock-compression-flight-socks', name: 'Compression Flight Socks', price: 19, compareAtPrice: null, category: 'Sport Socks' },
];

const extraProducts: Product[] = extraDefs.map((d, i) => {
  const idx = i + 8;
  return base(
    `sock-${idx + 1}`,
    d.slug,
    d.name,
    d.price,
    d.compareAtPrice,
    d.category,
    idx % ALL_IMAGES.length,
    (idx + 1) % ALL_IMAGES.length,
    2,
    d.compareAtPrice ? 'sale' : null,
    0,
    [d.category.toLowerCase()],
  );
});

export const socksProducts: Product[] = [...trendingProducts, ...extraProducts];
