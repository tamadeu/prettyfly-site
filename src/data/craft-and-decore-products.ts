import type { Product } from '@/types/product';

/* ──────────────────────────────────────────────────────────────
   Craft and Decore product catalog — fully isolated from every
   other storefront. Slugs/ids are prefixed `cd-` so cart/wishlist/
   compare classify these items correctly (see src/utils/storefront.ts)
   and the shared Fashion product detail route resolves them via
   /api/craft-and-decore-products. Imagery comes only from
   /public/craft-and-decore/.
   ────────────────────────────────────────────────────────────── */

const IMAGE_BASE = '/craft-and-decore/products';

const ALL_IMAGES = Array.from({ length: 8 }, (_, i) => `${IMAGE_BASE}/product-${i + 1}.webp`);

/* Pottery/ceramic swatch palette. A product's `colorCount` picks the first
   N of these, which drives the "+N" chip on the card. */
const COLOR_PALETTE: { name: string; value: string }[] = [
  { name: 'Terracotta', value: '#a9673f' },
  { name: 'Clay Brown', value: '#7a4a2b' },
  { name: 'Charcoal', value: '#3a3a3a' },
  { name: 'Sage Green', value: '#5c7a5c' },
  { name: 'Cream', value: '#e8e0d0' },
];

function makeReviews(productId: string, productName: string) {
  return [
    {
      id: `${productId}-r-1`,
      author: 'Amelia R.',
      rating: 5,
      title: 'Beautiful craftsmanship',
      body: `${productName} is even more stunning in person. You can feel the handmade quality in every detail — a real centerpiece for the room.`,
      date: '2025-12-02',
      verified: true,
    },
    {
      id: `${productId}-r-2`,
      author: 'Daniel K.',
      rating: 4,
      title: 'Great quality for the price',
      body: `Really happy with ${productName}. Solid construction, no chips or flaws, and it arrived carefully packaged. Would buy again.`,
      date: '2025-11-20',
      verified: true,
    },
    {
      id: `${productId}-r-3`,
      author: 'Sofia M.',
      rating: 5,
      title: 'My new favorite piece',
      body: `I've bought a lot of pottery but ${productName} has the most character. Perfect on the shelf, and every piece is slightly unique.`,
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
    vendor: 'Ambaz Craft & Decore',
    price,
    compareAtPrice,
    currency: 'USD',
    images: buildGallery(id, name, primaryIdx, secondaryIdx),
    variants,
    colors: palette.map((c) => ({ name: c.name, value: c.value, type: 'hex' as const })),
    sizes: ['One Size'],
    category,
    tags,
    brand: 'Ambaz Craft & Decore',
    availability: 'in-stock',
    badge,
    description: description || `${name} — handcrafted pottery with timeless, earthy character. Each piece is shaped and finished by hand, so subtle variations in glaze and texture are part of its charm. A warm, artisanal addition to any home.`,
    features: [
      'Hand-thrown and hand-finished',
      'Food-safe glaze',
      'Unique grain and glaze variation per piece',
      'Care: hand wash recommended',
    ],
    rating: 4.8,
    reviewCount: 37,
    reviews: makeReviews(id, name),
    relatedProducts: [],
    pairsWellWith: [],
    createdAt: '2025-10-01T00:00:00Z',
    sku: id.toUpperCase(),
    countdownEnd,
  };
}

/* First 8 items — the "Trending Products" 2×4 grid in screenshot order (index 0–7). */
const trendingProducts: Product[] = [
  base('cd-1', 'cd-arabian-pottery-pot', 'Arabian Pottery Pot', 28, 42, 'Pottery', 0, 1, 4, 'sale', ['pottery', 'pot']),
  base('cd-2', 'cd-brown-clay-flower-pot', 'Brown Clay Flower Pot', 70, null, 'Clay Pot', 1, 2, 4, null, ['clay', 'flower-pot']),
  base('cd-3', 'cd-ceramic-flower-pot', 'Ceramic Flower Pot', 50, null, 'Craft & Decor', 2, 3, 4, null, ['ceramic', 'flower-pot']),
  base('cd-4', 'cd-ceramic-soup-bowl', 'Ceramic Soup Bowl', 32, null, 'Hand Crafts', 3, 4, 4, null, ['ceramic', 'bowl']),
  base('cd-5', 'cd-ceramic-white-bowl', 'Ceramic white bowl', 62, null, 'Hand Crafts', 4, 5, 4, null, ['ceramic', 'bowl']),
  base('cd-6', 'cd-greek-pottery-amphora', 'Greek Pottery Amphora', 46, null, 'Pottery', 5, 6, 4, null, ['pottery', 'amphora']),
  base('cd-7', 'cd-handmade-pottery-bowl', 'handmade Pottery bowl', 25, 48, 'Pottery', 6, 7, 4, 'sale', ['pottery', 'bowl']),
  base('cd-8', 'cd-pottery-ceramic-vases', 'Pottery Ceramic Vases', 40, 78, 'Metal Crafts', 7, 0, 4, 'sale', ['ceramic', 'vase']),
];

/* Extra catalog depth so the shop/search have a fuller set. Imagery reuses the
   8 shared product shots; ids/slugs stay unique and cd- prefixed. */
const extraDefs: { slug: string; name: string; price: number; compareAtPrice: number | null; category: string }[] = [
  { slug: 'cd-rustic-terracotta-jug', name: 'Rustic Terracotta Jug', price: 33, compareAtPrice: null, category: 'Pottery' },
  { slug: 'cd-glazed-stoneware-vase', name: 'Glazed Stoneware Vase', price: 44, compareAtPrice: 60, category: 'Clay Pot' },
  { slug: 'cd-woven-clay-planter', name: 'Woven Clay Planter', price: 29, compareAtPrice: null, category: 'Craft & Decor' },
  { slug: 'cd-hand-carved-serving-bowl', name: 'Hand-Carved Serving Bowl', price: 36, compareAtPrice: 52, category: 'Hand Crafts' },
  { slug: 'cd-antique-brass-duck', name: 'Antique Brass Duck', price: 24, compareAtPrice: null, category: 'Metal Crafts' },
  { slug: 'cd-speckled-stoneware-mug', name: 'Speckled Stoneware Mug', price: 18, compareAtPrice: null, category: 'Pottery' },
  { slug: 'cd-carved-wooden-tray', name: 'Carved Wooden Tray', price: 41, compareAtPrice: 55, category: 'Craft & Decor' },
  { slug: 'cd-rippled-ceramic-vase', name: 'Rippled Ceramic Vase', price: 38, compareAtPrice: null, category: 'Clay Pot' },
];

const extraProducts: Product[] = extraDefs.map((d, i) => {
  const idx = i + 8;
  return base(
    `cd-${idx + 1}`,
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

export const craftAndDecoreProducts: Product[] = [...trendingProducts, ...extraProducts];
