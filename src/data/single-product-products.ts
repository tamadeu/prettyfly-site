import type { Product } from '@/types/product';

const IMAGE_BASE = '/single -product/products';

const ALL_IMAGES = [
  `${IMAGE_BASE}/products-1.webp`,
  `${IMAGE_BASE}/products-2.webp`,
  `${IMAGE_BASE}/products-3.webp`,
  `${IMAGE_BASE}/products-4.webp`,
  `${IMAGE_BASE}/products-5.webp`,
  `${IMAGE_BASE}/products-6.webp`,
  `${IMAGE_BASE}/products-7.webp`,
];

function makeReviews(productId: string, productName: string) {
  return [
    {
      id: `${productId}-r-1`,
      author: 'Alex K.',
      rating: 5,
      title: 'Best sound quality ever',
      body: `${productName} has completely transformed how I listen to music. The noise cancellation is incredible and the battery life exceeds expectations. Highly recommend!`,
      date: '2025-12-01',
      verified: true,
    },
    {
      id: `${productId}-r-2`,
      author: 'Sarah M.',
      rating: 4,
      title: 'Great wireless earbuds',
      body: `Really impressed with ${productName}. The connection is seamless and the sound is crystal clear. Pairing with my devices was effortless.`,
      date: '2025-11-18',
      verified: true,
    },
    {
      id: `${productId}-r-3`,
      author: 'James T.',
      rating: 5,
      title: 'Worth every penny',
      body: `I've tried many earbuds but ${productName} is hands down the best. The fit is comfortable even after hours of use and the audio quality is exceptional.`,
      date: '2025-11-05',
      verified: true,
    },
  ];
}

function buildGallery(productId: string, name: string, primaryIdx: number) {
  const order: number[] = [];
  const used = new Set<number>();
  order.push(primaryIdx); used.add(primaryIdx);
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

const COLOR_PALETTE: { name: string; value: string }[] = [
  { name: 'White', value: '#f5f5f5' },
  { name: 'Black', value: '#1a1a1a' },
  { name: 'Blue', value: '#1a6fe8' },
  { name: 'Gray', value: '#9e9e9e' },
];

function base(
  id: string,
  slug: string,
  name: string,
  price: number,
  compareAtPrice: number | null,
  category: string,
  primaryIdx: number,
  badge: Badge = null,
  tags: string[] = [],
  stockCount = 60,
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
    vendor: 'Ambaz Audio',
    price,
    compareAtPrice,
    currency: 'USD',
    images: buildGallery(id, name, primaryIdx),
    variants,
    colors: COLOR_PALETTE.map((c) => ({ name: c.name, value: c.value, type: 'hex' as const })),
    sizes: ['Standard', 'Pro'],
    category,
    tags,
    brand: 'AirPods',
    availability: 'in-stock',
    badge,
    description: description || `${name} — premium wireless earbuds with active noise cancellation, spatial audio, and up to 30 hours of battery life. Experience sound like never before.`,
    features: [
      'Active Noise Cancellation',
      'Spatial Audio with dynamic head tracking',
      'Up to 30 hours battery with charging case',
      'USB-C charging',
      'Water and sweat resistant (IPX4)',
    ],
    rating: 4.8,
    reviewCount: stockCount,
    reviews: makeReviews(id, name),
    relatedProducts: [],
    pairsWellWith: [],
    createdAt: '2025-10-01T00:00:00Z',
    sku: id.toUpperCase(),
    countdownEnd: null,
  };
}

export const singleProductProducts: Product[] = [
  base('sp-1', 'sp-airpods-galaxy-pro', 'AirPods Galaxy Pro', 38, null, 'True Wireless', 0, null, ['airpods', 'wireless', 'galaxy', 'pro'], 54),
  base('sp-2', 'sp-airpods-hyperbass', 'AirPods HyperBass', 32, 42, 'Over-Ear', 1, 'sale', ['airpods', 'bass', 'wireless', 'sale'], 62),
  base('sp-3', 'sp-airpods-infinite-max', 'AirPods Infinite max', 30, null, 'True Wireless', 2, null, ['airpods', 'infinite', 'wireless'], 67),
  base('sp-4', 'sp-airpods-premium-sound', 'AirPods Premium Sound', 20, 28, 'Noise Canceling', 3, 'sale', ['airpods', 'premium', 'anc', 'sale'], 60),
  base('sp-5', 'sp-airpods-pro-2', 'AirPods Pro 2', 179, null, 'Noise Canceling', 4, 'new', ['airpods', 'pro', 'anc', 'flagship'], 48),
  base('sp-6', 'sp-airpods-ultra-fit', 'AirPods Ultra Fit', 45, 60, 'Sport', 5, 'sale', ['airpods', 'sport', 'fit', 'wireless'], 35),
  base('sp-7', 'sp-hearing-aid-compatible', 'Hearing Aid-Compatible AirPods', 29, 35, 'Accessibility', 6, 'sale', ['airpods', 'hearing', 'accessible', 'health'], 54,
    'Hearing Aid-Compatible AirPods — the first earbuds designed with built-in Hearing Test, Hearing Aid, and Hearing Protection features. Available as a free software update.'),
];
