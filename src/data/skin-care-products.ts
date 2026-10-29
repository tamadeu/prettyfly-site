import type { Product } from '@/types/product';

const IMAGE_BASE = '/skin-care/products';

const ALL_IMAGES = [
  `${IMAGE_BASE}/products1.webp`,
  `${IMAGE_BASE}/products8.webp`,
  `${IMAGE_BASE}/products11.webp`,
  `${IMAGE_BASE}/products7.webp`,
  `${IMAGE_BASE}/products10.webp`,
  `${IMAGE_BASE}/products4.webp`,
  `${IMAGE_BASE}/products2.webp`,
  `${IMAGE_BASE}/products3.webp`,
  `${IMAGE_BASE}/products6.webp`,
  `${IMAGE_BASE}/products5.webp`,
  `${IMAGE_BASE}/products9.webp`,
  `${IMAGE_BASE}/products12.webp`,
];

function makeReviews(productId: string, productName: string) {
  return [
    {
      id: `${productId}-r-1`,
      author: 'Sophia M.',
      rating: 5,
      title: 'Absolutely love it',
      body: `${productName} has completely transformed my skincare routine. My skin looks so much brighter and feels incredibly soft. Will definitely repurchase!`,
      date: '2025-12-01',
      verified: true,
    },
    {
      id: `${productId}-r-2`,
      author: 'Emma L.',
      rating: 4,
      title: 'Great quality product',
      body: `Really impressed with ${productName}. The formula is lightweight and absorbs quickly. Noticed visible results within two weeks of use.`,
      date: '2025-11-18',
      verified: true,
    },
    {
      id: `${productId}-r-3`,
      author: 'Olivia R.',
      rating: 5,
      title: 'My skin has never looked better',
      body: `I've tried so many products but ${productName} is hands down the best. It's gentle on my sensitive skin and delivers exactly what it promises.`,
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
  for (let i = 0; i < ALL_IMAGES.length && order.length < 12; i++) {
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
  { name: 'Pink', value: '#f48fb1' },
  { name: 'Rose', value: '#e91e8c' },
  { name: 'Gold', value: '#ffd700' },
  { name: 'Nude', value: '#d4a484' },
  { name: 'Coral', value: '#ff6b6b' },
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
    sku: `${id.toUpperCase()}-${c.name.toUpperCase().slice(0, 3)}`,
  }));

  return {
    id,
    slug,
    name,
    vendor: 'Ambaz Beauty',
    price,
    compareAtPrice,
    currency: 'USD',
    images: buildGallery(id, name, primaryIdx, secondaryIdx),
    variants,
    colors: COLOR_PALETTE.map((c) => ({ name: c.name, value: c.value, type: 'hex' as const })),
    sizes: [],
    category,
    tags,
    brand: 'Skin Care Co.',
    availability: 'in-stock',
    badge,
    description: description || `${name} — a premium skincare formulation crafted with nature's finest ingredients. Designed to nourish, protect, and enhance your natural beauty.`,
    features: [
      'Dermatologist tested',
      'Paraben-free formula',
      'Suitable for all skin types',
      'Cruelty-free & vegan',
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

export const skinCareProducts: Product[] = [
  base('sk-1', 'sk-violet-splash-nail-polish', 'Violet Splash Nail Polish', 55, null, 'Nail Care', 0, 4, 'new', ['nail', 'color', 'polish', 'violet']),
  base('sk-2', 'sk-golden-glow-face-oil', 'Golden Glow Face Oil', 35, 55, 'Face Oils', 1, 5, 'sale', ['face', 'oil', 'glow', 'serum']),
  base('sk-3', 'sk-women-glass-perfume', 'Women Glass Perfume', 52, null, 'Fragrance', 2, 6, null, ['perfume', 'fragrance', 'women']),
  base('sk-4', 'sk-paris-riche-lipstick', 'Paris Riche Lipstick', 40, null, 'Lip Care', 3, 7, null, ['lipstick', 'lip', 'color', 'matte']),
  base('sk-5', 'sk-shine-hair-serum', 'Shine Hair Serum', 32, 52, 'Hair Care', 4, 0, 'sale', ['hair', 'serum', 'shine', 'treatment']),
  base('sk-6', 'sk-malwe-nourishing-oil', 'Malwe Nourishing Oil', 36, null, 'Body Care', 5, 1, null, ['oil', 'nourishing', 'body', 'moisturizer']),
  base('sk-7', 'sk-makeup-over-cosmetics', 'Makeup Over Cosmetics', 48, 55, 'Makeup', 6, 2, 'sale', ['makeup', 'cosmetics', 'blush', 'cheek']),
  base('sk-8', 'sk-satin-silk-hair-oil', 'Satin Silk Hair Oil', 32, null, 'Hair Care', 7, 3, null, ['hair', 'oil', 'satin', 'silk']),
  base('sk-9', 'sk-rose-hip-face-cream', 'Rose Hip Face Cream', 44, null, 'Face Creams', 8, 4, 'new', ['face', 'cream', 'rosehip', 'moisturizer']),
  base('sk-10', 'sk-vitamin-c-serum', 'Vitamin C Serum', 38, 60, 'Serums', 9, 5, 'sale', ['serum', 'vitamin-c', 'brightening', 'face']),
  base('sk-11', 'sk-glow-toner', 'Glow Toner', 28, null, 'Toners', 10, 6, null, ['toner', 'glow', 'hydrating', 'face']),
  base('sk-12', 'sk-brightening-eye-cream', 'Brightening Eye Cream', 42, null, 'Eye Care', 11, 7, null, ['eye', 'cream', 'brightening', 'anti-aging']),
];
