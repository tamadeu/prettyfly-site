import type { Product } from '@/types/product';

/* ──────────────────────────────────────────────────────────────
   Active Wear product catalog — fully isolated from every other
   storefront. Slugs/ids are prefixed `aw-` so cart/wishlist/compare
   classify these items correctly (see src/utils/storefront.ts) and
   the shared Fashion product detail route resolves them via
   /api/active-wear-products. Imagery comes only from /public/active-wear/.
   ────────────────────────────────────────────────────────────── */

const IMAGE_BASE = '/active-wear/products';

const ALL_IMAGES = Array.from({ length: 10 }, (_, i) => `${IMAGE_BASE}/product-${i + 1}.webp`);

function makeReviews(productId: string, productName: string) {
  return [
    {
      id: `${productId}-r-1`,
      author: 'Sophia M.',
      rating: 5,
      title: 'Perfect for my workouts',
      body: `${productName} moves with me through every session. Breathable, squat-proof and the fit is spot on. My new gym staple!`,
      date: '2025-12-01',
      verified: true,
    },
    {
      id: `${productId}-r-2`,
      author: 'Emma L.',
      rating: 4,
      title: 'Great quality activewear',
      body: `Really impressed with ${productName}. True to size, sweat-wicking and the stitching holds up wash after wash.`,
      date: '2025-11-18',
      verified: true,
    },
    {
      id: `${productId}-r-3`,
      author: 'Olivia R.',
      rating: 5,
      title: 'My new favorite',
      body: `I've tried so many brands but ${productName} is hands down the most comfortable. Supportive, flattering and so easy to style.`,
      date: '2025-11-05',
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
  { name: 'Black', value: '#222222' },
  { name: 'White', value: '#f1f1f1' },
  { name: 'Yellow', value: '#f2c200' },
  { name: 'Pink', value: '#e64980' },
  { name: 'Red', value: '#e03131' },
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
  countdownEnd: string | null = null,
  description = '',
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
    vendor: 'Ambaz Active',
    price,
    compareAtPrice,
    currency: 'USD',
    images: buildGallery(id, name, primaryIdx, secondaryIdx),
    variants,
    colors: COLOR_PALETTE.map((c) => ({ name: c.name, value: c.value, type: 'hex' as const })),
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category,
    tags,
    brand: 'Ambaz Active',
    availability: 'in-stock',
    badge,
    description: description || `${name} — performance activewear engineered from breathable, four-way stretch fabric that moves with you. Sweat-wicking, squat-proof and built to keep up from warm-up to cool-down.`,
    features: [
      'Breathable four-way stretch fabric',
      'Sweat-wicking & quick-dry',
      'Squat-proof, supportive fit',
      'Ethically made',
    ],
    rating: 4.7,
    reviewCount: 48,
    reviews: makeReviews(id, name),
    relatedProducts: [],
    pairsWellWith: [],
    createdAt: '2025-10-01T00:00:00Z',
    sku: id.toUpperCase(),
    countdownEnd,
  };
}

export const activeWearProducts: Product[] = [
  // ── New arrivals grid (indices 0–7, matches screenshot order) ──
  base('aw-1', 'aw-fits-long-sleeve-top', 'Fits Long Sleeve Top', 62, null, 'Active Wears', 0, 1, null, ['top', 'long sleeve', 'active', 'workout']),
  // index 1 carries a live countdown — renders the timer overlay on the New Arrivals card
  base('aw-2', 'aw-fits-sleeve-cutout-top', 'Fits Sleeve Cutout Top', 30, 60, 'Active Wears', 1, 2, 'sale', ['top', 'cutout', 'active'], '2026-09-30T00:00:00Z'),
  base('aw-3', 'aw-flexfit-leggings-blouse', 'FlexFit Leggings Blouse', 65, null, 'Leggings', 2, 3, 'new', ['leggings', 'flexfit', 'blouse']),
  base('aw-4', 'aw-fusion-yoga-pants', 'Fusion Yoga Pants', 70, null, 'Yoga', 3, 4, null, ['yoga', 'pants', 'fusion']),
  base('aw-5', 'aw-short-sleeve-shirt', 'Short Sleeve Shirt', 55, 72, 'Active Wears', 4, 5, 'sale', ['shirt', 'short sleeve', 'active']),
  base('aw-6', 'aw-sports-bra-activewear', 'Sports Bra Activewear', 55, 85, 'Sports Bras', 5, 6, 'sale', ['sports bra', 'activewear', 'support']),
  base('aw-7', 'aw-stretchy-wrap-tee-bra', 'Stretchy Wrap Tee Bra', 30, null, 'Sports Bras', 6, 7, null, ['sports bra', 'wrap', 'stretchy']),
  base('aw-8', 'aw-women-sports-yoga-bra', 'Women sports yoga bra', 38, 42, 'Yoga', 7, 8, 'sale', ['yoga', 'sports bra', 'women']),

  // ── Shop the look products (indices 8–9) ──
  base('aw-9', 'aw-womens-short-tops', "Women's Short tops", 62, null, 'Active Wears', 8, 9, null, ['top', 'short top', 'women']),
  base('aw-10', 'aw-joggers-active-fit', 'Joggers Active Fit', 58, null, 'Joggers', 9, 0, null, ['joggers', 'active fit', 'bottoms']),
];
