import type { Product } from '@/types/product';

/* ──────────────────────────────────────────────────────────────
   Basketball product catalog — fully isolated from every other
   storefront. Slugs/ids are prefixed `bb-` so cart/wishlist/compare
   classify these items correctly (see src/utils/storefront.ts) and
   the shared Fashion product detail route resolves them via
   /api/basketball-products. Imagery comes only from /public/basketball/.
   ────────────────────────────────────────────────────────────── */

const IMAGE_BASE = '/basketball/products';

const ALL_IMAGES = Array.from({ length: 9 }, (_, i) => `${IMAGE_BASE}/products-${i + 1}.webp`);

function makeReviews(productId: string, productName: string) {
  return [
    {
      id: `${productId}-r-1`,
      author: 'Marcus T.',
      rating: 5,
      title: 'Perfect grip and bounce',
      body: `${productName} feels premium straight out of the box. Consistent bounce, great grip and it holds up on the outdoor court. My new game-day ball!`,
      date: '2025-12-02',
      verified: true,
    },
    {
      id: `${productId}-r-2`,
      author: 'Jordan P.',
      rating: 4,
      title: 'Great quality, true to size',
      body: `Really happy with ${productName}. The channels are deep, the leather grips well and it kept its shape after weeks of play.`,
      date: '2025-11-20',
      verified: true,
    },
    {
      id: `${productId}-r-3`,
      author: 'Devin R.',
      rating: 5,
      title: 'Best ball I have owned',
      body: `I've gone through a lot of balls but ${productName} is hands down the most reliable. Soft touch, great control and it just feels right shooting.`,
      date: '2025-11-08',
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
  { name: 'Orange', value: '#e8521f' },
  { name: 'Yellow', value: '#f2c200' },
  { name: 'Blue', value: '#4263eb' },
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
    vendor: 'Ambaz Sports',
    price,
    compareAtPrice,
    currency: 'USD',
    images: buildGallery(id, name, primaryIdx, secondaryIdx),
    variants,
    colors: COLOR_PALETTE.map((c) => ({ name: c.name, value: c.value, type: 'hex' as const })),
    sizes: ['5', '6', '7'],
    category,
    tags,
    brand: 'Ambaz Sports',
    availability: 'in-stock',
    badge,
    description: description || `${name} — tournament-grade construction with a deep-channel design and premium composite cover for superior grip and control. Consistent bounce and durable build, ready for indoor courts and outdoor play alike.`,
    features: [
      'Premium composite leather cover',
      'Deep-channel design for grip & control',
      'Consistent, true bounce',
      'Built for indoor & outdoor play',
    ],
    rating: 4.8,
    reviewCount: 52,
    reviews: makeReviews(id, name),
    relatedProducts: [],
    pairsWellWith: [],
    createdAt: '2025-10-01T00:00:00Z',
    sku: id.toUpperCase(),
    countdownEnd,
  };
}

/* First 8 items — the Featured Products grid in screenshot order (index 0–7). */
const featuredProducts: Product[] = [
  base('bb-1', 'bb-adidas-nba-basketball', 'Adidas NBA Basketball', 72, 115, 'Basketball', 0, 1, 'sale', ['basketball', 'adidas', 'nba', 'indoor']),
  base('bb-2', 'bb-adidas-nba-basketball-two', 'Adidas NBA Basketball two', 72, 115, 'Basketball', 1, 2, 'pre-order', ['basketball', 'adidas', 'nba', 'pre-order']),
  base('bb-3', 'bb-dribbleup-smart-basketball', 'DribbleUp Smart Basketball', 85, null, 'Basketball', 2, 3, 'new', ['basketball', 'smart', 'training']),
  base('bb-4', 'bb-ektelon-pro-basketball', 'Ektelon Pro Basketball', 72, null, 'Baseball', 3, 4, null, ['basketball', 'ektelon', 'pro']),
  // index 4 carries a live countdown — renders the timer overlay on the Featured card
  base('bb-5', 'bb-evolution-game-basketball', 'Evolution Game Basketball', 82, 110, 'Sport club', 4, 5, 'sale', ['basketball', 'evolution', 'game'], '2026-09-30T00:00:00Z'),
  base('bb-6', 'bb-go-sports-basketball', 'Go Sports Basketball', 68, 98, 'Sport club', 5, 6, 'sale', ['basketball', 'go sports', 'outdoor']),
  base('bb-7', 'bb-molten-bg38-basketball', 'Molten BG38 Basketball', 120, null, 'Football', 6, 7, null, ['basketball', 'molten', 'bg38']),
  base('bb-8', 'bb-molten-gg7x-basketball', 'Molten GG7X Basketball', 95, null, 'Football', 7, 8, null, ['basketball', 'molten', 'gg7x']),
];

/* Extra catalog depth so every Featured Products tab can fill a full set of 8
   items. After these, each category totals 8 (Basketball 3+5, Baseball 1+7,
   Sport club 2+6, Football 2+6). Imagery reuses the 9 shared product shots;
   ids/slugs stay unique and bb- prefixed. */
const extraDefs: { slug: string; name: string; price: number; compareAtPrice: number | null; category: string }[] = [
  // Basketball (+5)
  { slug: 'bb-spalding-street-basketball', name: 'Spalding Street Basketball', price: 45, compareAtPrice: 65, category: 'Basketball' },
  { slug: 'bb-wilson-evolution-basketball', name: 'Wilson Evolution Basketball', price: 78, compareAtPrice: null, category: 'Basketball' },
  { slug: 'bb-nike-elite-championship-basketball', name: 'Nike Elite Championship Basketball', price: 99, compareAtPrice: 130, category: 'Basketball' },
  { slug: 'bb-under-armour-495-basketball', name: 'Under Armour 495 Basketball', price: 60, compareAtPrice: null, category: 'Basketball' },
  { slug: 'bb-mikasa-pro-basketball', name: 'Mikasa Pro Basketball', price: 88, compareAtPrice: 112, category: 'Basketball' },
  // Baseball (+7)
  { slug: 'bb-rawlings-official-baseball', name: 'Rawlings Official Baseball', price: 25, compareAtPrice: 35, category: 'Baseball' },
  { slug: 'bb-wilson-a2000-baseball', name: 'Wilson A2000 Baseball', price: 40, compareAtPrice: null, category: 'Baseball' },
  { slug: 'bb-louisville-slugger-baseball', name: 'Louisville Slugger Baseball', price: 30, compareAtPrice: 48, category: 'Baseball' },
  { slug: 'bb-franklin-mlb-baseball', name: 'Franklin MLB Baseball', price: 22, compareAtPrice: null, category: 'Baseball' },
  { slug: 'bb-mizuno-pro-baseball', name: 'Mizuno Pro Baseball', price: 55, compareAtPrice: 70, category: 'Baseball' },
  { slug: 'bb-easton-game-baseball', name: 'Easton Game Baseball', price: 28, compareAtPrice: null, category: 'Baseball' },
  { slug: 'bb-demarini-training-baseball', name: 'DeMarini Training Baseball', price: 34, compareAtPrice: 50, category: 'Baseball' },
  // Sport club (+6)
  { slug: 'bb-club-training-jump-rope', name: 'Club Training Jump Rope', price: 18, compareAtPrice: 26, category: 'Sport club' },
  { slug: 'bb-pro-agility-ladder', name: 'Pro Agility Ladder', price: 32, compareAtPrice: null, category: 'Sport club' },
  { slug: 'bb-club-resistance-bands', name: 'Club Resistance Bands', price: 24, compareAtPrice: 38, category: 'Sport club' },
  { slug: 'bb-team-water-bottle', name: 'Team Water Bottle', price: 15, compareAtPrice: null, category: 'Sport club' },
  { slug: 'bb-club-gym-towel', name: 'Club Gym Towel', price: 12, compareAtPrice: 20, category: 'Sport club' },
  { slug: 'bb-pro-cone-set', name: 'Pro Cone Set', price: 21, compareAtPrice: null, category: 'Sport club' },
  // Football (+6)
  { slug: 'bb-nike-vapor-football', name: 'Nike Vapor Football', price: 65, compareAtPrice: 90, category: 'Football' },
  { slug: 'bb-wilson-nfl-football', name: 'Wilson NFL Football', price: 80, compareAtPrice: null, category: 'Football' },
  { slug: 'bb-adidas-pro-football', name: 'Adidas Pro Football', price: 58, compareAtPrice: 76, category: 'Football' },
  { slug: 'bb-under-armour-695-football', name: 'Under Armour 695 Football', price: 62, compareAtPrice: null, category: 'Football' },
  { slug: 'bb-spalding-game-football', name: 'Spalding Game Football', price: 48, compareAtPrice: 68, category: 'Football' },
  { slug: 'bb-rawlings-edge-football', name: 'Rawlings Edge Football', price: 52, compareAtPrice: null, category: 'Football' },
];

const extraProducts: Product[] = extraDefs.map((d, i) => {
  const idx = i + 9;
  return base(
    `bb-${idx}`,
    d.slug,
    d.name,
    d.price,
    d.compareAtPrice,
    d.category,
    idx % ALL_IMAGES.length,
    (idx + 1) % ALL_IMAGES.length,
    d.compareAtPrice ? 'sale' : null,
    [d.category.toLowerCase()],
  );
});

export const basketballProducts: Product[] = [...featuredProducts, ...extraProducts];
