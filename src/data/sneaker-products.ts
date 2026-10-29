import type { Product } from '@/types/product';

const ALL_IMAGES = [
  '/sneaker/products/products8.webp',
  '/sneaker/products/products2.webp',
  '/sneaker/products/products3.webp',
  '/sneaker/products/products4.webp',
  '/sneaker/products/products5.webp',
  '/sneaker/products/products6.webp',
  '/sneaker/products/products7.webp',
];

function makeReviews(productId: string, productName: string) {
  return [
    {
      id: `${productId}-r-1`,
      author: 'Jordan M.',
      rating: 5,
      title: 'Insanely comfortable',
      body: `${productName} fit like a glove from day one — zero break-in time. I wore them all day at a festival and my feet felt great.`,
      date: '2025-11-20',
      verified: true,
    },
    {
      id: `${productId}-r-2`,
      author: 'Priya S.',
      rating: 4,
      title: 'Great style, solid quality',
      body: `${productName} looks exactly like the photos and the build feels premium. Runs slightly narrow but overall a solid buy.`,
      date: '2025-11-10',
      verified: true,
    },
    {
      id: `${productId}-r-3`,
      author: 'Marcus D.',
      rating: 5,
      title: 'Best sneakers I own',
      body: `${productName} has become my daily driver. The sole grip is excellent and the colorway is super clean. Would absolutely buy again.`,
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
  { name: 'Black', value: '#212121' },
  { name: 'Pink', value: '#e91e8c' },
  { name: 'Cyan', value: '#00bcd4' },
  { name: 'Orange', value: '#ff6d00' },
  { name: 'Gray', value: '#9e9e9e' },
];

const SIZES = ['6', '7', '8', '9', '10', '11', '12'];

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
  description = ''
): Product {
  const variants = COLOR_PALETTE.map((c, i) => ({
    id: `${id}-v-${i + 1}`,
    color: c.name,
    size: '9',
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
    vendor: 'Ambaz Sneakers',
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
    description: description || `${name} — crafted for style-conscious movers who refuse to compromise. Lightweight build, responsive sole, and head-turning design built to keep up with your pace.`,
    features: [
      'Lightweight responsive midsole',
      'Breathable mesh upper',
      'Durable rubber outsole with traction pattern',
      'Cushioned insole for all-day comfort',
    ],
    rating: 4.8,
    reviewCount: 34,
    reviews: makeReviews(id, name),
    relatedProducts: [],
    pairsWellWith: [],
    createdAt: '2025-09-01T00:00:00Z',
    sku: id.toUpperCase(),
    countdownEnd: null,
  };
}

export const sneakerProducts: Product[] = [
  base('sn-001', 'sn-mesh-sports-shoe',         'Mesh Sports Shoe',         33, null,  'Sneakers',  0, 2, null,   ['running', 'mesh', 'lightweight']),
  base('sn-002', 'sn-streamspark-shows',         'StreamSpark Shows',        44, null,  'Footwear',  1, 3, null,   ['casual', 'chunky', 'fashion']),
  base('sn-003', 'sn-showspectra-shoes',         'ShowSpectra Shows',        39, null,  'Sneakers',  2, 4, null,   ['colorful', 'sporty', 'canvas']),
  base('sn-004', 'sn-leather-loafers-shoes',     'Leather Loafers Shoes',    60, null,  'Loafers',   3, 5, null,   ['leather', 'loafer', 'formal'], 'Leather Loafers Shoes — timeless silhouette meets everyday comfort. Premium leather upper, cushioned footbed, and a versatile sole that takes you from desk to dinner.'),
  base('sn-005', 'sn-ecostride-sneakers',        'EcoStride Sneakers Shoes', 35, 59,   'Sports',    4, 0, 'sale', ['eco', 'sustainable', 'running']),
  base('sn-006', 'sn-running-sneakers',          'Running sneakers shoes',   28, null,  'Sports',    5, 1, null,   ['running', 'training', 'trail']),
  base('sn-007', 'sn-stealthstop-infinity',      'StealthStop Infinity Shoes',38, 68,   'Sneakers',  6, 2, 'sale', ['infinity', 'boost', 'premium']),
  base('sn-008', 'sn-showstopper-shoes',         'ShowStopper shoes',        35, null,  'Footwear',  0, 3, null,   ['showstopper', 'bold', 'lifestyle']),
  base('sn-009', 'sn-streamscene-sports',        'StreamScene sports Shoes', 42, null,  'Sneakers',  1, 4, 'new',  ['stream', 'sport', 'urban']),
  base('sn-010', 'sn-air-trail-runners',         'Air Trail Runners',        52, null,  'Sports',    2, 5, 'new',  ['trail', 'outdoor', 'grip']),
  base('sn-011', 'sn-urban-canvas-slip',         'Urban Canvas Slip-On',     29, null,  'Footwear',  3, 6, null,   ['canvas', 'slip-on', 'casual']),
  base('sn-012', 'sn-volt-boost-mid',            'Volt Boost Mid-Top',       48, 65,   'Boots',     4, 0, 'sale', ['mid-top', 'boost', 'support']),
];
