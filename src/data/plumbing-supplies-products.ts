import type { Product } from '@/types/product';

/* ──────────────────────────────────────────────────────────────
   Plumbing Supplies product catalog — fully isolated from every
   other storefront. Slugs/ids are prefixed `pl-` so cart/wishlist/
   compare classify these items correctly (see src/utils/storefront.ts)
   and the shared Fashion product detail route resolves them via
   /api/plumbing-supplies-products. Imagery comes only from
   /public/plumbing-supplies/products/.

   Three categories back the Featured Products tabs on the homepage:
   "Plumbing Supplies" (8 items — the screenshot grid), "Brakes & Rotors",
   and "Auto Guard".
   ────────────────────────────────────────────────────────────── */

const IMAGE_BASE = '/plumbing-supplies/products';

const ALL_IMAGES = Array.from({ length: 10 }, (_, i) => `${IMAGE_BASE}/product-${i + 1}.webp`);

/* Neutral finish palette. Plumbing product cards don't surface swatches, but
   the PDP + variants need at least one color to resolve cleanly. */
const COLOR_PALETTE: { name: string; value: string }[] = [
  { name: 'Chrome', value: '#c8ccce' },
  { name: 'Brass', value: '#c9a24b' },
  { name: 'Steel', value: '#8a9199' },
];

function makeReviews(productId: string, productName: string) {
  return [
    {
      id: `${productId}-r-1`,
      author: 'Marcus T.',
      rating: 5,
      title: 'Solid, professional-grade quality',
      body: `${productName} arrived well packaged and the build quality is excellent. Threads are clean, the finish is flawless and it fit first time. Exactly what a contractor needs.`,
      date: '2025-12-04',
      verified: true,
    },
    {
      id: `${productId}-r-2`,
      author: 'Ella P.',
      rating: 4,
      title: 'Great value for the money',
      body: `Really happy with ${productName}. No leaks, no fuss, and it looks the part under the sink. Would order again for the next job.`,
      date: '2025-11-22',
      verified: true,
    },
    {
      id: `${productId}-r-3`,
      author: 'Dwayne R.',
      rating: 5,
      title: 'Exactly as described',
      body: `${productName} is sturdy and well machined. Installed it in minutes and it's held up perfectly. Highly recommend for any home plumbing project.`,
      date: '2025-11-09',
      verified: true,
    },
  ];
}

function buildGallery(productId: string, name: string, primaryIdx: number, secondaryIdx: number) {
  const order: number[] = [];
  const used = new Set<number>();
  order.push(primaryIdx); used.add(primaryIdx);
  if (!used.has(secondaryIdx)) { order.push(secondaryIdx); used.add(secondaryIdx); }
  for (let i = 0; i < ALL_IMAGES.length && order.length < 5; i++) {
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
    vendor: 'AquaMaster Supply',
    price,
    compareAtPrice,
    currency: 'USD',
    images: buildGallery(id, name, primaryIdx, secondaryIdx),
    variants,
    colors: palette.map((c) => ({ name: c.name, value: c.value, type: 'hex' as const })),
    sizes: ['One Size'],
    category,
    tags,
    brand: 'AquaMaster',
    availability: 'in-stock',
    badge,
    description: description || `${name} — professional-grade plumbing hardware built for homeowners and contractors alike. Precision-machined with a corrosion-resistant finish for a long, leak-free service life. Fits standard fittings and installs in minutes.`,
    features: [
      'Corrosion-resistant, durable finish',
      'Precision-machined threads for a leak-free seal',
      'Fits standard plumbing fittings',
      'Suitable for residential & commercial use',
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

/* ── Tab 1 — "Plumbing Supplies" (the 8-product Featured grid, screenshot order).
   Card index 0 (Green Water Pipes) carries the live countdown overlay. ── */
const plumbingSupplies: Product[] = [
  base('pl-1', 'pl-green-water-pipes', 'Green Water Pipes', 125, 145, 'Plumbing Supplies', 0, 4, 1, 'sale', ['pipes', 'water'], '2027-10-04T12:00:00Z'),
  base('pl-2', 'pl-door-pivot-hinge', 'Door Pivot Hinge', 170, null, 'Plumbing Supplies', 1, 9, 1, null, ['hinge', 'hardware']),
  base('pl-3', 'pl-plumber-metal-pipe', 'Plumber Metal pipe', 118, null, 'Plumbing Supplies', 2, 8, 1, 'new', ['valve', 'metal']),
  base('pl-4', 'pl-mixer-wash-basin-tap', 'Mixer Wash Basin Tap', 180, null, 'Plumbing Supplies', 5, 0, 1, null, ['tap', 'basin']),
  base('pl-5', 'pl-rectangular-iron-pipe', 'Rectangular iron pipe', 240, null, 'Plumbing Supplies', 4, 0, 1, null, ['pipe', 'iron']),
  base('pl-6', 'pl-porcelain-ceramic-basin', 'Porcelain ceramic basin', 220, null, 'Plumbing Supplies', 8, 2, 1, null, ['basin', 'ceramic']),
  base('pl-7', 'pl-brass-door-handles', 'Brass Door Handles', 120, 150, 'Plumbing Supplies', 6, 1, 1, 'sale', ['handle', 'brass']),
  base('pl-8', 'pl-fasteners-suppliers-bolts', 'Fasteners Suppliers bolts', 70, null, 'Plumbing Supplies', 9, 3, 1, null, ['bolts', 'fasteners']),
];

/* ── Tab 2 — "Brakes & Rotors" (8-product Featured grid) ── */
const brakesRotors: Product[] = [
  base('pl-9', 'pl-brake-disc-rotor', 'Brake Disc Rotor', 95, null, 'Brakes & Rotors', 3, 7, 1, null, ['brake', 'rotor']),
  base('pl-10', 'pl-ceramic-brake-pads', 'Ceramic Brake Pads', 60, 78, 'Brakes & Rotors', 7, 3, 1, 'sale', ['brake', 'pads']),
  base('pl-11', 'pl-caliper-repair-kit', 'Caliper Repair Kit', 48, null, 'Brakes & Rotors', 1, 9, 1, null, ['caliper', 'kit']),
  base('pl-12', 'pl-rotor-mounting-bolts', 'Rotor Mounting Bolts', 22, null, 'Brakes & Rotors', 9, 3, 1, null, ['bolts', 'rotor']),
  base('pl-17', 'pl-slotted-brake-disc', 'Slotted Brake Disc', 112, null, 'Brakes & Rotors', 4, 0, 1, 'new', ['brake', 'disc']),
  base('pl-18', 'pl-brake-line-hose-kit', 'Brake Line Hose Kit', 54, 69, 'Brakes & Rotors', 0, 4, 1, 'sale', ['brake', 'hose']),
  base('pl-19', 'pl-caliper-piston-seal', 'Caliper Piston Seal', 18, null, 'Brakes & Rotors', 2, 8, 1, null, ['caliper', 'seal']),
  base('pl-20', 'pl-brake-master-cylinder', 'Brake Master Cylinder', 138, null, 'Brakes & Rotors', 5, 1, 1, null, ['brake', 'cylinder']),
];

/* ── Tab 3 — "Auto Guard" (8-product Featured grid) ── */
const autoGuard: Product[] = [
  base('pl-13', 'pl-engine-guard-plate', 'Engine Guard Plate', 130, null, 'Auto Guard', 4, 0, 1, null, ['guard', 'engine']),
  base('pl-14', 'pl-underbody-shield', 'Underbody Shield', 110, 135, 'Auto Guard', 0, 4, 1, 'sale', ['shield', 'underbody']),
  base('pl-15', 'pl-skid-plate-kit', 'Skid Plate Kit', 150, null, 'Auto Guard', 2, 8, 1, 'new', ['skid', 'plate']),
  base('pl-16', 'pl-guard-fastener-set', 'Guard Fastener Set', 35, null, 'Auto Guard', 3, 7, 1, null, ['fasteners', 'guard']),
  base('pl-21', 'pl-radiator-guard-mesh', 'Radiator Guard Mesh', 42, null, 'Auto Guard', 6, 1, 1, null, ['guard', 'radiator']),
  base('pl-22', 'pl-splash-shield-liner', 'Splash Shield Liner', 58, 72, 'Auto Guard', 8, 2, 1, 'sale', ['shield', 'splash']),
  base('pl-23', 'pl-transmission-guard', 'Transmission Guard', 165, null, 'Auto Guard', 5, 1, 1, null, ['guard', 'transmission']),
  base('pl-24', 'pl-guard-mounting-bracket', 'Guard Mounting Bracket', 28, null, 'Auto Guard', 7, 3, 1, 'new', ['bracket', 'guard']),
];

export const plumbingSuppliesProducts: Product[] = [
  ...plumbingSupplies,
  ...brakesRotors,
  ...autoGuard,
];

/* Category labels backing the Featured Products tabs, in display order. */
export const PLUMBING_FEATURED_TABS = ['Plumbing Supplies', 'Brakes & Rotors', 'Auto Guard'] as const;
