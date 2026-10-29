import type { Product } from '@/types/product';

/**
 * Nutrition / supplements products — fully shaped `Product` objects so they
 * integrate with every existing store (cart, compare, wishlist, QuickView,
 * search). Path-based routing under /nutrition/* keeps them isolated from
 * fashion / grocery / pet-food storefronts.
 */

const ALL_IMAGES = [
  '/nutrition/products/products1.webp',
  '/nutrition/products/products5.webp',
  '/nutrition/products/products6.webp',
  '/nutrition/products/products2.webp',
  '/nutrition/products/products3.webp',
  '/nutrition/products/products4.webp',
];

function makeReviews(productId: string, productName: string) {
  return [
    {
      id: `${productId}-r-1`,
      author: 'Marcus B.',
      rating: 5,
      title: 'Noticeable results',
      body: `${productName} mixes clean and tastes great. Two weeks in and I'm already seeing better recovery between sessions.`,
      date: '2025-11-22',
      verified: true,
    },
    {
      id: `${productId}-r-2`,
      author: 'Priya S.',
      rating: 4,
      title: 'Solid formula',
      body: `${productName} delivers on the label claims. Easy to fit into my morning routine. Minor point on the scoop size, otherwise great.`,
      date: '2025-11-05',
      verified: true,
    },
    {
      id: `${productId}-r-3`,
      author: 'Jordan K.',
      rating: 5,
      title: 'Gym staple',
      body: `I've tried a lot of brands and ${productName} is now my default. Clean label, no bloat, no crash.`,
      date: '2025-10-30',
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

/* Flavour swatches used across nutrition products — first three show on the
   card, rest collapse into "+N". */
const COLOR_PALETTE: { name: string; value: string }[] = [
  { name: 'Chocolate', value: '#4a2c2a' },
  { name: 'Vanilla', value: '#f3e5ab' },
  { name: 'Strawberry', value: '#e85a7a' },
  { name: 'Mint', value: '#95d5b2' },
  { name: 'Cookies & Cream', value: '#3e2723' },
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
    sku: `${id.toUpperCase()}-${c.name.toUpperCase().replace(/[^A-Z]/g, '').slice(0, 3)}`,
  }));

  return {
    id,
    slug,
    name,
    vendor: 'Ambaz Nutrition',
    price,
    compareAtPrice,
    currency: 'USD',
    images: buildGallery(id, name, primaryIdx, secondaryIdx),
    variants,
    colors: COLOR_PALETTE.map((c) => ({ name: c.name, value: c.value, type: 'hex' as const })),
    sizes: [],
    category,
    tags,
    brand: 'Ambaz Nutrition',
    availability: 'in-stock',
    badge,
    description:
      description ||
      `${name} — precision-formulated to support strength, recovery, and daily performance. Clean ingredients, third-party tested.`,
    features: [
      'Third-party tested for purity',
      'No artificial sweeteners or fillers',
      'Gluten-free, non-GMO',
      'Mixes smoothly with water or milk',
    ],
    rating: 4.7,
    reviewCount: 48,
    reviews: makeReviews(id, name),
    relatedProducts: [],
    pairsWellWith: [],
    createdAt: '2025-10-01T00:00:00Z',
    sku: id.toUpperCase(),
    countdownEnd: null,
  };
}

export const nutritionProducts: Product[] = [
  base('nt-1', 'natural-energy-bites', 'Natural Energy Bites', 17, null, 'Proteins', 0, 1, 'new', ['energy', 'clean', 'snack']),
  base('nt-2', 'fiber-fit-capsules', 'Fiber Fit Capsules', 26, null, 'Vitamins', 1, 2, null, ['fiber', 'capsule', 'daily']),
  base('nt-3', 'iron-essence-tablets', 'Iron Essence Tablets', 13, 23, 'Vitamins', 2, 0, 'sale', ['iron', 'mineral', 'tablet']),
  base('nt-4', 'power-sports-nutrition', 'Power Sports Nutrition', 28, null, 'Proteins', 3, 0, null, ['sports', 'performance', 'whey']),
  base('nt-5', 'peak-pea-protein', 'Peak Pea Protein', 14, 24, 'Proteins', 4, 2, 'sale', ['plant', 'protein', 'vegan']),
  base('nt-6', 'glossy-protein-jar', 'Glossy Protein Jar', 25, null, 'Proteins', 5, 3, null, ['whey', 'muscle', 'mix']),
  base('nt-7', 'organic-pro-plus', 'Organic Pro Plus', 15, 20, 'Herbalife', 3, 1, 'sale', ['organic', 'performance']),
  base('nt-8', 'pure-whey-isolate', 'Pure Whey Isolate', 24, null, 'MuscleTech', 5, 0, null, ['isolate', 'whey', 'lean']),
  base('nt-9', 'vitality-multivitamin', 'Vitality Multivitamin', 19, null, 'Vitamins', 2, 4, null, ['daily', 'multi']),
  base('nt-10', 'recovery-bcaa-mix', 'Recovery BCAA Mix', 22, 32, 'Proteins', 1, 5, 'sale', ['bcaa', 'recovery']),
  base('nt-11', 'green-matcha-boost', 'Green Matcha Boost', 18, null, 'Herbalife', 4, 0, 'new', ['matcha', 'antioxidant']),
  base('nt-12', 'ensure-plus-shake', 'Ensure Plus Shake', 29, null, 'Ensure Plus', 0, 3, null, ['meal', 'shake']),
];
