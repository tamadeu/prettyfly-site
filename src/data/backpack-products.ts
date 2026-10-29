import type { Product } from '@/types/product';

/* ──────────────────────────────────────────────────────────────
   Backpack product catalog — fully isolated from every other
   storefront. Slugs/ids are prefixed `bp-` so cart/wishlist/compare
   classify these items correctly (see src/utils/storefront.ts) and
   the shared Fashion product detail route resolves them via
   /api/backpack-products. Imagery comes only from /public/backpack/.
   ────────────────────────────────────────────────────────────── */

const IMAGE_BASE = '/backpack/products';

const ALL_IMAGES = Array.from({ length: 12 }, (_, i) => `${IMAGE_BASE}/products-${i + 1}.webp`);

function makeReviews(productId: string, productName: string) {
  return [
    {
      id: `${productId}-r-1`,
      author: 'Sophia M.',
      rating: 5,
      title: 'Perfect travel companion',
      body: `${productName} carried everything for my trip with room to spare. Comfortable straps, smart pockets and it still looks great after weeks of use.`,
      date: '2025-12-01',
      verified: true,
    },
    {
      id: `${productId}-r-2`,
      author: 'Emma L.',
      rating: 4,
      title: 'Great quality bag',
      body: `Really impressed with ${productName}. Durable fabric, water-resistant and the zips feel premium. Holds up well day to day.`,
      date: '2025-11-18',
      verified: true,
    },
    {
      id: `${productId}-r-3`,
      author: 'Olivia R.',
      rating: 5,
      title: 'My new favorite',
      body: `I've tried so many bags but ${productName} is hands down the most practical. Lightweight, roomy and so easy to style.`,
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
  { name: 'Teal', value: '#0ca678' },
  { name: 'Blue', value: '#7a89e0' },
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
    vendor: 'Ambaz Backpack',
    price,
    compareAtPrice,
    currency: 'USD',
    images: buildGallery(id, name, primaryIdx, secondaryIdx),
    variants,
    colors: COLOR_PALETTE.map((c) => ({ name: c.name, value: c.value, type: 'hex' as const })),
    sizes: ['One Size'],
    category,
    tags,
    brand: 'Ambaz Backpack',
    availability: 'in-stock',
    badge,
    description: description || `${name} — a durable, stylish bag built for every journey. Water-resistant fabric, padded comfort straps and thoughtfully organized compartments keep your essentials secure from commute to adventure.`,
    features: [
      'Water-resistant durable fabric',
      'Padded, adjustable comfort straps',
      'Multiple organized compartments',
      'Reinforced zips & stitching',
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

export const backpackProducts: Product[] = [
  // ── Featured Products grid (indices 0–7, matches screenshot order) ──
  base('bp-1', 'bp-bluetooth-speaker-bag', 'Bluetooth Speaker bag', 48, null, 'Travel Backpack', 0, 1, null, ['backpack', 'travel', 'speaker', 'tech']),
  base('bp-2', 'bp-columbia-pivot-backpack', 'Columbia Pivot Backpack', 82, null, 'Camping Backpack', 1, 2, null, ['backpack', 'camping', 'hiking', 'outdoor']),
  base('bp-3', 'bp-eco-elegance-bag', 'Eco Elegance Bag', 62, null, 'Backpack Fashion', 2, 3, null, ['backpack', 'eco', 'fashion']),
  base('bp-4', 'bp-everyday-design-backpack', 'Everyday Design Backpack', 40, 70, 'Backpack Fashion', 3, 4, 'sale', ['backpack', 'everyday', 'fashion']),
  base('bp-5', 'bp-female-trendy-backpack', 'Female Trendy Backpack', 65, null, 'Backpack Fashion', 4, 5, null, ['backpack', 'trendy', 'women', 'fashion']),
  base('bp-6', 'bp-fiber-motorcycle-backpack', 'Fiber Motorcycle Backpack', 48, 75, 'Travel Backpack', 5, 6, 'sale', ['backpack', 'motorcycle', 'travel']),
  base('bp-7', 'bp-glamour-evening-bag', 'Glamour Evening Bag', 70, null, 'Backpack Fashion', 6, 7, null, ['bag', 'evening', 'glamour', 'fashion']),
  base('bp-8', 'bp-quilted-shoulder-bag', 'Quilted Shoulder Bag', 30, 60, 'Backpack Fashion', 7, 8, 'sale', ['bag', 'quilted', 'shoulder', 'fashion']),

  // ── Additional catalog feeding Deals Products slider (indices 8–11) ──
  base('bp-9', 'bp-adventure-rucksack-bag', 'Adventure Rucksack Bag', 58, null, 'Camping Backpack', 8, 9, null, ['backpack', 'adventure', 'rucksack', 'camping']),
  base('bp-10', 'bp-urban-roll-top-backpack', 'Urban Roll-Top Backpack', 54, null, 'Travel Backpack', 9, 10, 'new', ['backpack', 'urban', 'roll-top', 'travel']),
  // index 10 carries a live countdown — powers the Deals "Offer ends in" timer
  base('bp-11', 'bp-canvas-camping-backpack', 'Canvas Camping Backpack', 45, 66, 'Camping Backpack', 10, 11, 'sale', ['backpack', 'canvas', 'camping'], '2026-09-30T00:00:00Z'),
  base('bp-12', 'bp-school-daypack-backpack', 'School Daypack Backpack', 44, null, 'School Backpack', 11, 0, null, ['backpack', 'school', 'daypack']),
];
