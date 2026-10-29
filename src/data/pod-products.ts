import type { Product } from '@/types/product';

/* ──────────────────────────────────────────────────────────────
   POD (Print on Demand) product catalog — fully isolated from
   every other storefront. Slugs/ids are prefixed `pod-` so
   cart/wishlist/compare classify these items correctly (see
   src/utils/storefront.ts) and the shared Fashion product detail
   route resolves them via /api/pod-products. Imagery comes only
   from /public/pod/. Names match the actual artwork on each of
   the 8 product-N.webp mockups (bag / tumbler / laptop sleeve /
   tee / phone case / frame / button pin / tote bag).
   ────────────────────────────────────────────────────────────── */

const IMAGE_BASE = '/pod/products';

const ALL_IMAGES = Array.from({ length: 8 }, (_, i) => `${IMAGE_BASE}/product-${i + 1}.webp`);

const COLOR_PALETTE: { name: string; value: string }[] = [
  { name: 'Black', value: '#1a1a1a' },
  { name: 'White', value: '#f5f5f5' },
  { name: 'Natural', value: '#e6dcc8' },
  { name: 'Charcoal', value: '#4a4a4a' },
  { name: 'Cream', value: '#f0e6d2' },
];

function makeReviews(productId: string, productName: string, count: number) {
  const all = [
    {
      id: `${productId}-r-1`,
      author: 'Jordan P.',
      rating: 5,
      title: 'Print quality is excellent',
      body: `${productName} arrived exactly as designed — sharp colors, no fading after wash/use.`,
      date: '2025-12-01',
      verified: true,
    },
    {
      id: `${productId}-r-2`,
      author: 'Casey M.',
      rating: 4,
      title: 'Great custom piece',
      body: `Ordered ${productName} as a gift and the print came out crisp. Fast turnaround too.`,
      date: '2025-11-18',
      verified: true,
    },
    {
      id: `${productId}-r-3`,
      author: 'Riley K.',
      rating: 5,
      title: 'Will order again',
      body: `${productName} is my second order from this shop — quality is consistent every time.`,
      date: '2025-11-04',
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

  const variants = (palette.length > 0 ? palette : [{ name: 'Default', value: '#1a1a1a' }]).map((c, i) => ({
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
    vendor: 'Ambaz POD',
    price,
    compareAtPrice,
    currency: 'USD',
    images: buildGallery(id, name, primaryIdx, secondaryIdx),
    variants,
    colors: palette.map((c) => ({ name: c.name, value: c.value, type: 'hex' as const })),
    sizes: ['One Size'],
    category,
    tags,
    brand: 'Ambaz POD',
    availability: 'in-stock',
    badge,
    description: `${name} — custom print-on-demand piece with vivid, fade-resistant printing on premium base materials. Made to order and shipped fast.`,
    features: [
      'Custom print-on-demand design',
      'Vivid, fade-resistant printing',
      'Premium base materials',
      'Made to order',
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

/* First 8 items — the "Featured Products" grid in screenshot order
   (index 0–7), prices/sale flags matching the screenshot's pattern
   (positions 3, 7, 8 carry the Sale badge). */
const featuredProducts: Product[] = [
  base('pod-1', 'pod-paper-coffee-bag', 'Paper Coffee Bag', 20, null, 'Packaging', 0, 1, 0, null, 0, ['bag', 'packaging']),
  base('pod-2', 'pod-butterfly-splash-tumbler', 'Butterfly Splash Tumbler', 26, null, 'Drinkware', 1, 2, 0, null, 0, ['tumbler', 'drinkware']),
  base('pod-3', 'pod-cherry-blossom-laptop-sleeve', 'Cherry Blossom Laptop Sleeve', 15, 22, 'Tech Accessories', 2, 3, 0, 'sale', 0, ['sleeve', 'tech']),
  base('pod-4', 'pod-support-small-business-tee', 'Support Small Business Tee', 28, null, 'Apparel', 3, 4, 3, null, 0, ['tshirt', 'apparel']),
  base('pod-5', 'pod-mandala-phone-case', 'Mandala Phone Case', 24, null, 'Tech Accessories', 4, 5, 3, null, 0, ['phone case', 'tech']),
  base('pod-6', 'pod-abstract-leaf-art-frame', 'Abstract Leaf Art Frame', 25, null, 'Wall Art', 5, 6, 3, null, 0, ['frame', 'wall art']),
  base('pod-7', 'pod-messi-button-pin', 'Messi Button Pin', 22, 32, 'Accessories', 6, 7, 3, 'sale', 0, ['button', 'pin']),
  base('pod-8', 'pod-tropical-print-tote-bag', 'Tropical Print Tote Bag', 12, 18, 'Bags', 7, 0, 3, 'sale', 0, ['tote', 'bag']),
];

/* Extra catalog depth so the shop/search have a fuller set. Imagery reuses
   the 8 shared product shots; ids/slugs stay unique and pod- prefixed. */
const extraDefs: { slug: string; name: string; price: number; compareAtPrice: number | null; category: string }[] = [
  { slug: 'pod-custom-mug-print', name: 'Custom Mug Print', price: 16, compareAtPrice: null, category: 'Drinkware' },
  { slug: 'pod-canvas-tote-print', name: 'Canvas Tote Print', price: 19, compareAtPrice: null, category: 'Bags' },
  { slug: 'pod-hoodie-custom-print', name: 'Hoodie Custom Print', price: 42, compareAtPrice: 52, category: 'Apparel' },
  { slug: 'pod-desk-calendar-print', name: 'Desk Calendar Print', price: 14, compareAtPrice: null, category: 'Stationery' },
  { slug: 'pod-sticker-pack-print', name: 'Sticker Pack Print', price: 8, compareAtPrice: null, category: 'Accessories' },
  { slug: 'pod-throw-pillow-print', name: 'Throw Pillow Print', price: 30, compareAtPrice: 38, category: 'Wall Art' },
  { slug: 'pod-enamel-pin-print', name: 'Enamel Pin Print', price: 10, compareAtPrice: null, category: 'Accessories' },
  { slug: 'pod-laptop-sleeve-print', name: 'Laptop Sleeve Print', price: 20, compareAtPrice: null, category: 'Tech Accessories' },
];

const extraProducts: Product[] = extraDefs.map((d, i) => {
  const idx = i + 8;
  return base(
    `pod-${idx + 1}`,
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

export const podProducts: Product[] = [...featuredProducts, ...extraProducts];
