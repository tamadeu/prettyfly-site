import type { Product } from '@/types/product';

/* ──────────────────────────────────────────────────────────────
   Toys product catalog — fully isolated from every other
   storefront. Slugs/ids are prefixed `toy-` so cart/wishlist/compare
   classify these items correctly (see src/utils/storefront.ts) and
   the shared Fashion product detail route resolves them via
   /api/toys-products. Imagery comes only from /public/toys/.
   ────────────────────────────────────────────────────────────── */

const IMAGE_BASE = '/toys/products';

const ALL_IMAGES = Array.from({ length: 8 }, (_, i) => `${IMAGE_BASE}/product-${i + 1}.webp`);

/* Toy-appropriate swatch palette (soft, playful tones). A product's
   `colorCount` picks the first N of these, which drives the "+N" chip on
   the card (shows N-3 when N > 3). colorCount of 0 renders no swatches. */
const COLOR_PALETTE: { name: string; value: string }[] = [
  { name: 'Yellow', value: '#f5c542' },
  { name: 'Pink', value: '#f2a6c2' },
  { name: 'Brown', value: '#8a5a3b' },
  { name: 'White', value: '#ffffff' },
  { name: 'Blue', value: '#6fb3e0' },
];

function makeReviews(productId: string, productName: string) {
  return [
    {
      id: `${productId}-r-1`,
      author: 'Hannah W.',
      rating: 5,
      title: 'My toddler loves it',
      body: `${productName} kept my little one entertained for hours. Well-made, safe materials, and the colors are just as bright as the photos.`,
      date: '2025-12-05',
      verified: true,
    },
    {
      id: `${productId}-r-2`,
      author: 'Marcus T.',
      rating: 4,
      title: 'Sturdy and fun',
      body: `Really happy with ${productName}. Feels durable enough for daily play and easy to wipe clean. Would buy again as a gift.`,
      date: '2025-11-22',
      verified: true,
    },
    {
      id: `${productId}-r-3`,
      author: 'Priya S.',
      rating: 5,
      title: 'Great baby gift',
      body: `Bought ${productName} as a baby shower gift and the parents loved it. Lightweight, soft edges, and no small detachable parts.`,
      date: '2025-11-10',
      verified: true,
    },
  ];
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
  tags: string[] = [],
  countdownEnd: string | null = null,
  description = '',
): Product {
  const palette = COLOR_PALETTE.slice(0, Math.max(0, Math.min(colorCount, COLOR_PALETTE.length)));

  const variants = (palette.length > 0 ? palette : [{ name: 'Default', value: '#f5c542' }]).map((c, i) => ({
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
    vendor: 'Ambaz Toys',
    price,
    compareAtPrice,
    currency: 'USD',
    images: buildGallery(id, name, primaryIdx, secondaryIdx),
    variants,
    colors: palette.map((c) => ({ name: c.name, value: c.value, type: 'hex' as const })),
    sizes: ['One Size'],
    category,
    tags,
    brand: 'Ambaz Toys',
    availability: 'in-stock',
    badge,
    description: description || `${name} — a safe, durable playtime favorite made from child-friendly materials with rounded edges and vibrant, non-toxic colors. Designed to spark imagination and support early motor-skill development, built to survive daily play.`,
    features: [
      'Child-safe, non-toxic materials',
      'Rounded edges, no small detachable parts',
      'Bright, colorfast finish',
      'Supports early motor-skill development',
    ],
    rating: 4.8,
    reviewCount: 36,
    reviews: makeReviews(id, name),
    relatedProducts: [],
    pairsWellWith: [],
    createdAt: '2025-10-01T00:00:00Z',
    sku: id.toUpperCase(),
    countdownEnd,
  };
}

/* First 8 items — the "Trending This Week" grid in screenshot order
   (index 0–7). Card index 0 (Baby Rattles Toys) carries the live
   countdown overlay, matching HomeProductCard's default (index === 0)
   and the screenshot. colorCount tunes the "+N" swatch chip; row-2 cards
   (index 4–7) show no swatches in the screenshot, so colorCount is 0. */
const trendingProducts: Product[] = [
  base('toy-1', 'toy-baby-rattles-toys', 'Baby Rattles Toys', 35, 50, 'Baby Toys', 0, 1, 4, 'sale', ['rattle', 'baby'], '2027-10-04T12:00:00Z'),
  base('toy-2', 'toy-boomerang-cartoon-car', 'Boomerang Cartoon Car', 46, null, 'Motor Toys', 1, 2, 5, null, ['car', 'motor']),
  base('toy-3', 'toy-chibi-blonde-cartoon', 'Chibi Blonde Cartoon', 60, null, 'Kids Toys', 2, 3, 5, null, ['figure', 'kids']),
  base('toy-4', 'toy-construction-car-toys', 'Construction Car Toys', 28, 38, 'Motor Toys', 3, 4, 5, 'sale', ['car', 'motor']),
  base('toy-5', 'toy-cute-panda-cartoon', 'Cute Panda Cartoon', 58, null, 'Kids Toys', 4, 5, 0, null, ['plush', 'panda']),
  base('toy-6', 'toy-figuras-cute-plush-toy', 'Figuras Cute Plush Toy', 30, 60, 'Baby Toys', 5, 6, 0, 'sale', ['plush', 'baby']),
  base('toy-7', 'toy-flying-plane-cartoon', 'Flying Plane Cartoon', 52, null, 'Motor Toys', 6, 7, 0, null, ['plane', 'motor']),
  base('toy-8', 'toy-interactive-teething-toy', 'Interactive Teething Toy', 45, null, 'Teething Toys', 7, 0, 0, null, ['teething', 'baby']),
];

/* Extra catalog depth so the shop/search have a fuller set. Imagery reuses
   the 8 shared product shots; ids/slugs stay unique and toy- prefixed. */
const extraDefs: { slug: string; name: string; price: number; compareAtPrice: number | null; category: string }[] = [
  { slug: 'toy-stacking-rainbow-blocks', name: 'Stacking Rainbow Blocks', price: 24, compareAtPrice: null, category: 'Stacking Toys' },
  { slug: 'toy-wooden-alphabet-train', name: 'Wooden Alphabet Train', price: 32, compareAtPrice: null, category: 'Stacking Toys' },
  { slug: 'toy-bath-time-ducklings', name: 'Bath Time Ducklings', price: 18, compareAtPrice: 26, category: 'Baby Toys' },
  { slug: 'toy-musical-activity-cube', name: 'Musical Activity Cube', price: 40, compareAtPrice: null, category: 'Baby Toys' },
  { slug: 'toy-dino-pull-along-toy', name: 'Dino Pull-Along Toy', price: 22, compareAtPrice: null, category: 'Motor Toys' },
  { slug: 'toy-soft-plush-elephant', name: 'Soft Plush Elephant', price: 27, compareAtPrice: 35, category: 'Kids Toys' },
  { slug: 'toy-silicone-teething-ring', name: 'Silicone Teething Ring', price: 12, compareAtPrice: null, category: 'Teething Toys' },
  { slug: 'toy-spinning-top-racer', name: 'Spinning Top Racer', price: 20, compareAtPrice: null, category: 'Motor Toys' },
];

const extraProducts: Product[] = extraDefs.map((d, i) => {
  const idx = i + 8;
  return base(
    `toy-${idx + 1}`,
    d.slug,
    d.name,
    d.price,
    d.compareAtPrice,
    d.category,
    idx % ALL_IMAGES.length,
    (idx + 1) % ALL_IMAGES.length,
    3,
    d.compareAtPrice ? 'sale' : null,
    [d.category.toLowerCase()],
  );
});

export const toysProducts: Product[] = [...trendingProducts, ...extraProducts];
