import type { Product } from '@/types/product';

/* ──────────────────────────────────────────────────────────────
   Jewelry 2 product catalog — fully isolated from every other
   storefront (including the existing "Jewelry 1" / `jewellery`
   storefront). Slugs/ids are prefixed `jz-` so cart/wishlist/compare
   classify these items correctly (see src/utils/storefront.ts) and
   the shared Fashion product detail route resolves them via
   /api/jewelry-2-products. Imagery comes only from /public/jewelry-2/.
   The first 8 products + exact prices mirror the "New Arrivals" grid
   in the provided screenshot verbatim (Rule #1).
   ────────────────────────────────────────────────────────────── */

const IMAGE_BASE = '/jewelry-2/products';

const ALL_IMAGES = Array.from({ length: 15 }, (_, i) => `${IMAGE_BASE}/products${i + 1}.webp`);

/* Jewelry-appropriate swatch palette. A product's `colorCount` picks the
   first N of these, which drives the "+N" chip on the card. */
const COLOR_PALETTE: { name: string; value: string }[] = [
  { name: 'Gray', value: '#9a9a9a' },
  { name: 'Gold', value: '#c9a24b' },
  { name: 'White Gold', value: '#f2efe9' },
  { name: 'Rose', value: '#d8a0a6' },
  { name: 'Blue Sapphire', value: '#3a5f8a' },
];

function makeReviews(productId: string, productName: string) {
  return [
    {
      id: `${productId}-r-1`,
      author: 'Isabella G.',
      rating: 5,
      title: 'Absolutely stunning',
      body: `${productName} exceeded my expectations — the craftsmanship is exceptional and it catches the light beautifully. Packaging felt luxurious too.`,
      date: '2025-12-04',
      verified: true,
    },
    {
      id: `${productId}-r-2`,
      author: 'Marcus T.',
      rating: 5,
      title: 'Perfect gift',
      body: `Bought ${productName} as an anniversary gift and she loves it. True to the photos, comfortable fit, arrived well before the estimate.`,
      date: '2025-11-22',
      verified: true,
    },
    {
      id: `${productId}-r-3`,
      author: 'Priya N.',
      rating: 4,
      title: 'Elegant everyday piece',
      body: `${productName} is my new everyday piece — sturdy clasp, doesn't tarnish, and the sizing guide was spot on.`,
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
  for (let i = 0; i < ALL_IMAGES.length && order.length < 4; i++) {
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
    vendor: 'Ambaz Jewelry',
    price,
    compareAtPrice,
    currency: 'USD',
    images: buildGallery(id, name, primaryIdx, secondaryIdx),
    variants,
    colors: palette.map((c) => ({ name: c.name, value: c.value, type: 'hex' as const })),
    sizes: ['One Size'],
    category,
    tags,
    brand: 'Ambaz Jewelry',
    availability: 'in-stock',
    badge,
    description: `${name} — a handcrafted piece finished with exceptional materials and artisan precision. Designed to catch the light and complement any occasion, from everyday wear to special celebrations.`,
    features: [
      'Handcrafted with premium materials',
      'Hypoallergenic, tarnish-resistant finish',
      'Comes in a gift-ready presentation box',
      'Free resizing within 30 days',
    ],
    rating: 4.8,
    reviewCount: 36,
    reviews: makeReviews(id, name),
    relatedProducts: [],
    pairsWellWith: [],
    createdAt: '2025-10-01T00:00:00Z',
    sku: id.toUpperCase(),
    countdownEnd: null,
  };
}

/* First 8 items — exact names/prices from the "New Arrivals" grid in the
   provided screenshot (index 0–7), in screenshot order. */
const newArrivals: Product[] = [
  base('jz-1', 'jz-diamond-engagement-ring', 'Diamond Engagement Ring', 155, 185, 'Dimond', 0, 1, 4, 'sale', ['ring', 'diamond']),
  base('jz-2', 'jz-gold-zircon-ring', 'Gold zircon ring', 230, null, 'Rose Gold', 1, 2, 4, null, ['ring', 'gold']),
  base('jz-3', 'jz-raoul-dufy-bracelet', 'Raoul Dufy Bracelet', 550, 760, 'Rose Gold', 2, 3, 3, 'sale', ['bracelet']),
  base('jz-4', 'jz-moon-and-star-ring', 'Moon and Star Ring', 210, null, 'Silver', 3, 4, 3, null, ['ring', 'silver']),
  base('jz-5', 'jz-regal-ruby-ring', 'Regal Ruby Ring', 115, 155, 'Rose Gold', 4, 5, 4, 'sale', ['ring', 'ruby']),
  base('jz-6', 'jz-silver-diamond-ring', 'Silver Diamond Ring', 340, null, 'Silver', 5, 6, 4, null, ['ring', 'diamond']),
  base('jz-7', 'jz-hiphop-gold-plated', 'Hiphop gold-plated', 240, null, 'Rose Gold', 6, 7, 2, null, ['ring', 'gold']),
  base('jz-8', 'jz-enchanted-forest-ring', 'Enchanted Forest Ring', 190, 230, 'Dimond', 7, 8, 3, 'sale', ['ring', 'diamond']),
];

/* Extra catalog depth (incl. Pearl, spare Rose Gold/Silver/Dimond) so tabs
   and shop/search have a fuller set. Imagery reuses the 15 shared shots. */
const extraDefs: { slug: string; name: string; price: number; compareAtPrice: number | null; category: string }[] = [
  { slug: 'jz-pearl-drop-earrings', name: 'Pearl Drop Earrings', price: 95, compareAtPrice: null, category: 'Pearl' },
  { slug: 'jz-freshwater-pearl-necklace', name: 'Freshwater Pearl Necklace', price: 180, compareAtPrice: 220, category: 'Pearl' },
  { slug: 'jz-classic-pearl-studs', name: 'Classic Pearl Studs', price: 60, compareAtPrice: null, category: 'Pearl' },
  { slug: 'jz-rose-gold-huggie-hoops', name: 'Rose Gold Huggie Hoops', price: 85, compareAtPrice: null, category: 'Rose Gold' },
  { slug: 'jz-sterling-silver-bangle', name: 'Sterling Silver Bangle', price: 120, compareAtPrice: 150, category: 'Silver' },
  { slug: 'jz-diamond-halo-pendant', name: 'Diamond Halo Pendant', price: 275, compareAtPrice: null, category: 'Dimond' },
  { slug: 'jz-vintage-rose-gold-locket', name: 'Vintage Rose Gold Locket', price: 165, compareAtPrice: null, category: 'Rose Gold' },
];

const extraProducts: Product[] = extraDefs.map((d, i) => {
  const idx = i + 8;
  return base(
    `jz-${idx + 1}`,
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

/* Second batch — brings every New Arrivals tab (Dimond/Pearl/Silver/Rose
   Gold) up to a full 8 products each, so each tab always renders exactly
   8 cards. Imagery again reuses the 15 shared shots (cycled via modulo). */
const extraDefs2: { slug: string; name: string; price: number; compareAtPrice: number | null; category: string }[] = [
  { slug: 'jz-diamond-tennis-bracelet', name: 'Diamond Tennis Bracelet', price: 420, compareAtPrice: 480, category: 'Dimond' },
  { slug: 'jz-diamond-stud-earrings', name: 'Diamond Stud Earrings', price: 145, compareAtPrice: null, category: 'Dimond' },
  { slug: 'jz-diamond-infinity-ring', name: 'Diamond Infinity Ring', price: 265, compareAtPrice: 310, category: 'Dimond' },
  { slug: 'jz-diamond-cluster-pendant', name: 'Diamond Cluster Pendant', price: 198, compareAtPrice: null, category: 'Dimond' },
  { slug: 'jz-diamond-eternity-band', name: 'Diamond Eternity Band', price: 310, compareAtPrice: null, category: 'Dimond' },
  { slug: 'jz-pearl-tennis-bracelet', name: 'Pearl Tennis Bracelet', price: 175, compareAtPrice: null, category: 'Pearl' },
  { slug: 'jz-baroque-pearl-ring', name: 'Baroque Pearl Ring', price: 88, compareAtPrice: 110, category: 'Pearl' },
  { slug: 'jz-pearl-huggie-earrings', name: 'Pearl Huggie Earrings', price: 70, compareAtPrice: null, category: 'Pearl' },
  { slug: 'jz-pearl-statement-necklace', name: 'Pearl Statement Necklace', price: 210, compareAtPrice: null, category: 'Pearl' },
  { slug: 'jz-pearl-charm-bracelet', name: 'Pearl Charm Bracelet', price: 95, compareAtPrice: null, category: 'Pearl' },
  { slug: 'jz-silver-chain-bracelet', name: 'Silver Chain Bracelet', price: 78, compareAtPrice: null, category: 'Silver' },
  { slug: 'jz-silver-hoop-earrings', name: 'Silver Hoop Earrings', price: 65, compareAtPrice: 85, category: 'Silver' },
  { slug: 'jz-silver-pendant-necklace', name: 'Silver Pendant Necklace', price: 110, compareAtPrice: null, category: 'Silver' },
  { slug: 'jz-silver-signet-ring', name: 'Silver Signet Ring', price: 135, compareAtPrice: null, category: 'Silver' },
  { slug: 'jz-silver-anklet', name: 'Silver Anklet', price: 58, compareAtPrice: null, category: 'Silver' },
  { slug: 'jz-rose-gold-chain-necklace', name: 'Rose Gold Chain Necklace', price: 220, compareAtPrice: null, category: 'Rose Gold' },
  { slug: 'jz-rose-gold-stud-earrings', name: 'Rose Gold Stud Earrings', price: 90, compareAtPrice: 115, category: 'Rose Gold' },
];

const extraProducts2: Product[] = extraDefs2.map((d, i) => {
  const idx = i + 15;
  return base(
    `jz-${idx + 1}`,
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

export const jewelry2Products: Product[] = [...newArrivals, ...extraProducts, ...extraProducts2];
