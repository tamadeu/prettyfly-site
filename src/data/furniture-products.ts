import type { Product } from '@/types/product';

const ALL_IMAGES = [
  '/furniture/products/products6.webp',
  '/furniture/products/products1.webp',
  '/furniture/products/products9.webp',
  '/furniture/products/products3.webp',
  '/furniture/products/products8.webp',
  '/furniture/products/products10.webp',
  '/furniture/products/products11.webp',
  '/furniture/products/products7.webp',
  '/furniture/products/products5.webp',
  '/furniture/products/products12.webp',
  '/furniture/products/products4.webp',
  '/furniture/products/products2.webp',
];

function makeReviews(productId: string, productName: string) {
  return [
    {
      id: `${productId}-r-1`,
      author: 'Sarah M.',
      rating: 5,
      title: 'Beautiful craftsmanship',
      body: `${productName} looks even better in person. The quality is exceptional and it fits perfectly in our living room.`,
      date: '2025-11-20',
      verified: true,
    },
    {
      id: `${productId}-r-2`,
      author: 'James L.',
      rating: 4,
      title: 'Great furniture, fast delivery',
      body: `${productName} arrived well-packaged and assembly was straightforward. Solid build and elegant design.`,
      date: '2025-11-10',
      verified: true,
    },
    {
      id: `${productId}-r-3`,
      author: 'Emily R.',
      rating: 5,
      title: 'Exceeded expectations',
      body: `${productName} transformed our space completely. The finish is stunning and the comfort is unmatched.`,
      date: '2025-10-28',
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

const COLOR_PALETTE: { name: string; value: string }[] = [
  { name: 'Walnut',   value: '#8B5A2B' },
  { name: 'White',    value: '#F0EFED' },
  { name: 'Charcoal', value: '#36454F' },
  { name: 'Oak',      value: '#D4A853' },
  { name: 'Beige',    value: '#D4C5B0' },
];

const SIZES = ['Small', 'Medium', 'Large'];

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
  countdownEnd: string | null = null
): Product {
  const variants = COLOR_PALETTE.map((c, i) => ({
    id: `${id}-v-${i + 1}`,
    color: c.name,
    size: 'Medium',
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
    vendor: 'Ambaz Furniture',
    price,
    compareAtPrice,
    currency: 'USD',
    images: buildGallery(id, name, primaryIdx, secondaryIdx),
    variants,
    colors: COLOR_PALETTE.map((c) => ({ name: c.name, value: c.value, type: 'hex' as const })),
    sizes: SIZES,
    category,
    tags,
    brand: 'Ambaz',
    availability: 'in-stock',
    badge,
    description: description || `${name} — crafted with premium materials for modern living spaces. Timeless design meets exceptional comfort, built to elevate your home for years to come.`,
    features: [
      'Premium solid wood construction',
      'Stain-resistant fabric upholstery',
      'Easy assembly with included hardware',
      'Available in multiple finishes',
    ],
    rating: 4.7,
    reviewCount: 28,
    reviews: makeReviews(id, name),
    relatedProducts: [],
    pairsWellWith: [],
    createdAt: '2025-09-01T00:00:00Z',
    sku: id.toUpperCase(),
    countdownEnd,
  };
}

const COUNTDOWN = '2027-12-31T23:59:59Z';

export const furnitureProducts: Product[] = [
  base('fu-001', 'fu-brown-handcrafted-table',   'Brown Handcrafted Table',    250, null, 'Living & Dining', 0,  2,  null,   ['table', 'handcrafted', 'wood']),
  base('fu-002', 'fu-ceramic-table-lamp',         'Ceramic Table Lamp',         150, null, 'Accent',          1,  3,  null,   ['lamp', 'ceramic', 'lighting']),
  base('fu-003', 'fu-extendable-dining-table',    'Extendable Dining Table',    235, null, 'Living & Dining', 2,  4,  null,   ['dining', 'extendable', 'table']),
  base('fu-004', 'fu-harmony-round-dining-table', 'Harmony Round Dining Table', 230, 290,  'Living & Dining', 3,  5,  'sale', ['dining', 'round', 'harmony'], '', COUNTDOWN),
  base('fu-005', 'fu-leather-modern-armchair',    'Leather Modern Armchair',    270, 330,  'Living & Dining', 4,  6,  'sale', ['armchair', 'leather', 'modern']),
  base('fu-006', 'fu-leather-recliner-chair',     'Leather Recliner Chair',     265, null, 'Bedroom',         5,  7,  null,   ['recliner', 'leather', 'chair']),
  base('fu-007', 'fu-luxury-white-golden-sofa',   'Luxury White Golden Sofa',   245, null, 'Living & Dining', 6,  8,  null,   ['sofa', 'luxury', 'golden']),
  base('fu-008', 'fu-minimalist-modern-sofa',     'Minimalist Modern Sofa',     350, 370,  'Living & Dining', 7,  9,  'sale', ['sofa', 'minimalist', 'modern']),
  base('fu-009', 'fu-yellow-nordic-chair',        'Yellow Nordic Chair',        230, 270,  'Accent',          8,  10, 'sale', ['chair', 'nordic', 'yellow']),
  base('fu-010', 'fu-extendable-wood-table',      'Extendable Wood Table',      320, null, 'Office',          9,  11, 'new',  ['table', 'wood', 'extendable']),
  base('fu-011', 'fu-premium-ottoman-seat',       'Premium Ottoman Seat',       189, null, 'Living & Dining', 10, 0,  'new',  ['ottoman', 'seat', 'premium']),
  base('fu-012', 'fu-classic-accent-armchair',    'Classic Accent Armchair',    298, 340,  'Outdoor',         11, 1,  'sale', ['armchair', 'classic', 'accent']),
];
