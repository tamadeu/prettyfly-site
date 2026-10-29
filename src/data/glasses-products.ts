import type { Product } from '@/types/product';

/* ──────────────────────────────────────────────────────────────
   Glasses product catalog — fully isolated from every other
   storefront. Slugs/ids are prefixed `gl-` so cart/wishlist/compare
   classify these items correctly (see src/utils/storefront.ts) and
   the shared Fashion product detail route resolves them via
   /api/glasses-products. Imagery comes only from /public/glasses/.
   ────────────────────────────────────────────────────────────── */

const IMAGE_BASE = '/glasses/products';

const ALL_IMAGES = Array.from({ length: 10 }, (_, i) => `${IMAGE_BASE}/products-${i + 1}.webp`);

/* Glasses-appropriate swatch palette. A product's `colorCount` picks the first
   N of these, which drives the "+N" chip on the card (shows N-3 when N > 3). */
const COLOR_PALETTE: { name: string; value: string }[] = [
  { name: 'Black', value: '#1a1a1a' },
  { name: 'Brown', value: '#6b4423' },
  { name: 'Tortoise', value: '#8b5a2b' },
  { name: 'Gold', value: '#c9a24b' },
  { name: 'Rose', value: '#d8a0a6' },
];

function makeReviews(productId: string, productName: string) {
  return [
    {
      id: `${productId}-r-1`,
      author: 'Amelia R.',
      rating: 5,
      title: 'Perfect fit and finish',
      body: `${productName} looks even better in person. Lightweight, comfortable on the nose bridge and the lenses are crystal clear. Getting compliments daily!`,
      date: '2025-12-02',
      verified: true,
    },
    {
      id: `${productId}-r-2`,
      author: 'Daniel K.',
      rating: 4,
      title: 'Great quality for the price',
      body: `Really happy with ${productName}. Solid hinges, no flex in the frame and the anti-glare coating actually works. Would buy again.`,
      date: '2025-11-20',
      verified: true,
    },
    {
      id: `${productId}-r-3`,
      author: 'Sofia M.',
      rating: 5,
      title: 'My new everyday pair',
      body: `I've tried a lot of frames but ${productName} is the most flattering shape for my face. Feather-light and the case is a nice touch.`,
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
  const palette = COLOR_PALETTE.slice(0, Math.max(1, Math.min(colorCount, COLOR_PALETTE.length)));

  const variants = palette.map((c, i) => ({
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
    vendor: 'Ambaz Eyewear',
    price,
    compareAtPrice,
    currency: 'USD',
    images: buildGallery(id, name, primaryIdx, secondaryIdx),
    variants,
    colors: palette.map((c) => ({ name: c.name, value: c.value, type: 'hex' as const })),
    sizes: ['One Size'],
    category,
    tags,
    brand: 'Ambaz Eyewear',
    availability: 'in-stock',
    badge,
    description: description || `${name} — precision-crafted frames with lightweight, durable construction and scratch-resistant, anti-glare lenses. A timeless silhouette that pairs effortlessly with any look, finished with premium hinges for all-day comfort.`,
    features: [
      'Lightweight, durable frame',
      'Scratch-resistant anti-glare lenses',
      '100% UV protection',
      'Spring-hinge temples for comfort',
    ],
    rating: 4.8,
    reviewCount: 41,
    reviews: makeReviews(id, name),
    relatedProducts: [],
    pairsWellWith: [],
    createdAt: '2025-10-01T00:00:00Z',
    sku: id.toUpperCase(),
    countdownEnd,
  };
}

/* First 8 items — the "Trending This Week" grid in screenshot order (index 0–7).
   colorCount tunes the "+N" swatch chip to match the screenshot exactly. Card
   index 1 (Cartier Louis) carries the live countdown overlay (wired in the
   GlassesTrending section, not here). */
const trendingProducts: Product[] = [
  base('gl-1', 'gl-audience-x-sunglasses', 'Audience X Sunglasses', 20, null, 'Sunglasses', 0, 1, 4, null, ['sunglasses', 'unisex']),
  base('gl-2', 'gl-cartier-louis-glasses', 'Cartier Louis glasses', 15, 25, 'Luxury Eyewear', 1, 2, 5, 'sale', ['luxury', 'optical'], '2026-09-30T00:00:00Z'),
  base('gl-3', 'gl-eclipse-view-glasses', 'Eclipse View glasses', 25, null, 'Optical Glasses', 2, 3, 4, null, ['optical', 'clear']),
  base('gl-4', 'gl-hawkers-sunglasses', 'Hawkers sunglasses', 10, 18, 'Sunglasses', 3, 4, 5, 'sale', ['sunglasses', 'summer']),
  base('gl-5', 'gl-oceanic-horizon-glasses', 'Oceanic Horizon Glasses', 30, null, 'Fashion Glasses', 4, 5, 5, 'new', ['fashion', 'statement']),
  base('gl-6', 'gl-optix-luxury-glasses', 'Optix Luxury Glasses', 14, null, 'Luxury Eyewear', 5, 6, 5, null, ['luxury', 'optical']),
  base('gl-7', 'gl-pokemon-model-glasses', 'Pokémon Model Glasses', 17, null, 'Unisex Glasses', 6, 7, 4, null, ['unisex', 'fun']),
  base('gl-8', 'gl-retro-style-sunglasses', 'Retro style sunglasses', 12, 24, 'Sunglasses', 7, 8, 4, 'sale', ['sunglasses', 'retro']),
];

/* Extra catalog depth so the shop/search have a fuller set. Imagery reuses the
   10 shared product shots; ids/slugs stay unique and gl- prefixed. */
const extraDefs: { slug: string; name: string; price: number; compareAtPrice: number | null; category: string }[] = [
  { slug: 'gl-metro-round-optical', name: 'Metro Round Optical', price: 22, compareAtPrice: 34, category: 'Optical Glasses' },
  { slug: 'gl-aviator-classic-sunglasses', name: 'Aviator Classic Sunglasses', price: 28, compareAtPrice: null, category: 'Sunglasses' },
  { slug: 'gl-lumen-blue-light-glasses', name: 'Lumen Blue Light Glasses', price: 19, compareAtPrice: 29, category: 'Optical Glasses' },
  { slug: 'gl-vega-cat-eye-glasses', name: 'Vega Cat-Eye Glasses', price: 26, compareAtPrice: null, category: 'Fashion Glasses' },
  { slug: 'gl-noir-titanium-frames', name: 'Noir Titanium Frames', price: 45, compareAtPrice: 60, category: 'Luxury Eyewear' },
  { slug: 'gl-summit-sport-sunglasses', name: 'Summit Sport Sunglasses', price: 32, compareAtPrice: null, category: 'Sunglasses' },
  { slug: 'gl-halo-rimless-glasses', name: 'Halo Rimless Glasses', price: 38, compareAtPrice: 52, category: 'Luxury Eyewear' },
  { slug: 'gl-urban-wayfarer-glasses', name: 'Urban Wayfarer Glasses', price: 21, compareAtPrice: null, category: 'Unisex Glasses' },
];

const extraProducts: Product[] = extraDefs.map((d, i) => {
  const idx = i + 8;
  return base(
    `gl-${idx + 1}`,
    d.slug,
    d.name,
    d.price,
    d.compareAtPrice,
    d.category,
    idx % ALL_IMAGES.length,
    (idx + 1) % ALL_IMAGES.length,
    4,
    d.compareAtPrice ? 'sale' : null,
    [d.category.toLowerCase()],
  );
});

export const glassesProducts: Product[] = [...trendingProducts, ...extraProducts];
