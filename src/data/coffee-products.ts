import type { Product } from '@/types/product';

/* ──────────────────────────────────────────────────────────────
   Coffee product catalog — fully isolated from every other
   storefront. Slugs/ids are prefixed `cf-` so cart/wishlist/compare
   classify these items correctly (see src/utils/storefront.ts) and
   the shared Fashion product detail route resolves them via
   /api/coffee-products. Imagery comes only from /public/coffee/.
   ────────────────────────────────────────────────────────────── */

const IMAGE_BASE = '/coffee/products';

const ALL_IMAGES = Array.from({ length: 7 }, (_, i) => `${IMAGE_BASE}/product-${i + 1}.webp`);

/* Coffee-appropriate swatch palette (packaging/roast tones). A product's
   `colorCount` picks the first N of these, which drives the "+N" chip. */
const COLOR_PALETTE: { name: string; value: string }[] = [
  { name: 'Black', value: '#1a1a1a' },
  { name: 'Brown', value: '#6b4423' },
  { name: 'Gold', value: '#c9a24b' },
  { name: 'Cream', value: '#e8d5b7' },
  { name: 'Rust', value: '#a13d2e' },
];

function makeReviews(productId: string, productName: string) {
  return [
    {
      id: `${productId}-r-1`,
      author: 'Amelia R.',
      rating: 5,
      title: 'Rich, smooth flavor',
      body: `${productName} has become part of my morning ritual. Bold aroma, smooth finish, no bitterness at all. Highly recommend.`,
      date: '2025-12-02',
      verified: true,
    },
    {
      id: `${productId}-r-2`,
      author: 'Daniel K.',
      rating: 4,
      title: 'Great quality for the price',
      body: `Really happy with ${productName}. Consistent roast, fresh packaging, and it brews evenly every time. Would buy again.`,
      date: '2025-11-20',
      verified: true,
    },
    {
      id: `${productId}-r-3`,
      author: 'Sofia M.',
      rating: 5,
      title: 'My new everyday brew',
      body: `I've tried a lot of coffee brands but ${productName} is the one I keep coming back to. Fresh, aromatic and never disappoints.`,
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
  for (let i = 0; i < ALL_IMAGES.length && order.length < ALL_IMAGES.length; i++) {
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
    vendor: 'Ambaz Coffee',
    price,
    compareAtPrice,
    currency: 'USD',
    images: buildGallery(id, name, primaryIdx, secondaryIdx),
    variants,
    colors: palette.map((c) => ({ name: c.name, value: c.value, type: 'hex' as const })),
    sizes: ['One Size'],
    category,
    tags,
    brand: 'Ambaz Coffee',
    availability: 'in-stock',
    badge,
    description: description || `${name} — freshly roasted and carefully sourced for a rich, aromatic cup every time. A timeless staple for your morning ritual, packaged to lock in freshness from roast to cup.`,
    features: [
      'Freshly roasted in small batches',
      'Ethically sourced beans',
      'Locks in aroma and freshness',
      'Consistent, balanced flavor',
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

/* First 8 items — the "Popular Product" grid in screenshot order (index 0–7).
   Only 7 source images exist, so image 1 (Coffee Machines) is reused for the
   8th item (Coffee Cup Top) at a different color pairing, matching the
   Jewelry-2 precedent for asset-budget reuse. */
const popularProducts: Product[] = [
  base('cf-1', 'cf-coffee-machines', 'Coffee Machines', 250, null, 'Coffee Machines', 0, 1, 3, 'new', ['machine', 'brewing']),
  base('cf-2', 'cf-havana-blend-coffee', 'Havana Blend Coffee', 13, 17, 'Coffee Beans', 1, 2, 3, 'sale', ['blend', 'beans']),
  base('cf-3', 'cf-grains-coffee-drink', 'Grains coffee drink', 25, null, 'Ground Coffee', 2, 3, 3, null, ['grains', 'drink']),
  base('cf-4', 'cf-mountain-harvest-coffee', 'Mountain Harvest Coffee', 26, null, 'Coffee Beans', 3, 4, 3, null, ['harvest', 'beans']),
  base('cf-5', 'cf-golden-fields-coffee', 'Golden Fields Coffee', 12, 22, 'Ground Coffee', 4, 5, 3, 'sale', ['fields', 'ground']),
  base('cf-6', 'cf-electric-coffee-grinder', 'Electric Coffee Grinder', 350, null, 'Coffee Machines', 5, 6, 3, null, ['grinder', 'machine']),
  base('cf-7', 'cf-coffee-beans-bags', 'Coffee Beans Bags', 17, null, 'Coffee Beans', 6, 0, 3, null, ['beans', 'bags']),
  base('cf-8', 'cf-coffee-cup-top', 'Coffee Cup Top', 12, 22, 'Coffee Cups', 0, 6, 3, 'sale', ['cup', 'top']),
];

/* Extra catalog depth so the shop/search have a fuller set. Imagery reuses the
   7 shared product shots; ids/slugs stay unique and cf- prefixed. */
const extraDefs: { slug: string; name: string; price: number; compareAtPrice: number | null; category: string }[] = [
  { slug: 'cf-black-gold-coffee', name: 'Black Gold Coffee', price: 15, compareAtPrice: 22, category: 'Coffee Beans' },
  { slug: 'cf-eclipse-brew-coffee', name: 'Eclipse Brew Coffee', price: 18, compareAtPrice: null, category: 'Ground Coffee' },
  { slug: 'cf-morning-ritual-blend', name: 'Morning Ritual Blend', price: 16, compareAtPrice: 24, category: 'Coffee Beans' },
  { slug: 'cf-espresso-pod-set', name: 'Espresso Pod Set', price: 21, compareAtPrice: null, category: 'Coffee Machines' },
  { slug: 'cf-cold-brew-concentrate', name: 'Cold Brew Concentrate', price: 19, compareAtPrice: 28, category: 'Ground Coffee' },
  { slug: 'cf-single-origin-reserve', name: 'Single Origin Reserve', price: 32, compareAtPrice: null, category: 'Coffee Beans' },
  { slug: 'cf-ceramic-pour-over-set', name: 'Ceramic Pour Over Set', price: 38, compareAtPrice: 52, category: 'Coffee Machines' },
  { slug: 'cf-travel-mug-cup', name: 'Travel Mug Cup', price: 14, compareAtPrice: null, category: 'Coffee Cups' },
];

const extraProducts: Product[] = extraDefs.map((d, i) => {
  const idx = i + 8;
  return base(
    `cf-${idx + 1}`,
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

export const coffeeProducts: Product[] = [...popularProducts, ...extraProducts];
