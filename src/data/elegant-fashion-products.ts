import type { Product } from '@/types/product';

const ALL_IMAGES = [
  '/elegant-fashion/products/products4.webp',
  '/elegant-fashion/products/products5.webp',
  '/elegant-fashion/products/products6.webp',
  '/elegant-fashion/products/products7.webp',
  '/elegant-fashion/products/products8.webp',
  '/elegant-fashion/products/products9.webp',
  '/elegant-fashion/products/products10.webp',
  '/elegant-fashion/products/products1.webp',
  '/elegant-fashion/products/products2.webp',
  '/elegant-fashion/products/products3.webp',
];

function makeReviews(productId: string, productName: string) {
  return [
    {
      id: `${productId}-r-1`,
      author: 'Sophia L.',
      rating: 5,
      title: 'Absolutely stunning',
      body: `${productName} exceeded every expectation — the fabric drapes beautifully and the fit is flawless. I wore it to a gallery opening and received so many compliments.`,
      date: '2025-11-22',
      verified: true,
    },
    {
      id: `${productId}-r-2`,
      author: 'Naomi K.',
      rating: 4,
      title: 'Elegant and versatile',
      body: `${productName} is exactly what I needed for both formal evenings and smart-casual days. The quality is remarkable for the price.`,
      date: '2025-11-12',
      verified: true,
    },
    {
      id: `${productId}-r-3`,
      author: 'Isabelle M.',
      rating: 5,
      title: 'My new favourite piece',
      body: `${productName} fits like it was made for me. The colour is rich and the stitching is impeccable. Would buy every colour if I could.`,
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
  { name: 'White',  value: '#f5f5f5' },
  { name: 'Black',  value: '#212121' },
  { name: 'Blush',  value: '#e8b4b8' },
  { name: 'Navy',   value: '#1a2b5e' },
  { name: 'Beige',  value: '#d4b896' },
];

const SIZES = ['XS', 'S', 'M', 'L', 'XL'];

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
    size: 'M',
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
    vendor: 'Ambaz Fashion',
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
    description: description || `${name} — a refined statement piece that blends timeless elegance with contemporary design. Crafted from premium fabric with meticulous attention to detail, this piece effortlessly transitions from daytime sophistication to evening glamour.`,
    features: [
      'Premium quality fabric with elegant drape',
      'Precision-cut silhouette for a flattering fit',
      'Versatile styling for day and evening wear',
      'Breathable lining for all-day comfort',
    ],
    rating: 4.8,
    reviewCount: 42,
    reviews: makeReviews(id, name),
    relatedProducts: [],
    pairsWellWith: [],
    createdAt: '2025-09-15T00:00:00Z',
    sku: id.toUpperCase(),
    countdownEnd: null,
  };
}

export const elegantFashionProducts: Product[] = [
  base('ef-001', 'ef-satin-slip-dress',         'Satin Slip Dress',            36,  null, 'Dress',        0, 2, null,   ['satin', 'slip', 'evening']),
  base('ef-002', 'ef-floral-maxi-wrap',          'Floral Maxi Wrap Dress',      36,  null, 'Dress',        1, 3, null,   ['floral', 'maxi', 'wrap']),
  base('ef-003', 'ef-oversized-chunky-sweater',  'Oversized Chunky Sweater',    42,  null, 'Knitwear',     2, 4, null,   ['oversized', 'chunky', 'knit']),
  base('ef-004', 'ef-stretch-chino-pants',       'Stretch Chino Pants',         38,  null, 'Pants',        3, 5, null,   ['chino', 'stretch', 'casual']),
  base('ef-005', 'ef-tiered-ruffle-skirt',       'Tiered Ruffle Mini Skirt',    20,  28,  'Dress',        4, 0, 'sale', ['ruffle', 'mini', 'tiered']),
  base('ef-006', 'ef-slim-fit-denim-jeans',      'Slim Fit Denim Jeans',        18,  44,  'Pants',        5, 1, 'sale', ['denim', 'slim', 'jeans']),
  base('ef-007', 'ef-cream-baseball-cap',        'Cream Baseball Cap',          23,  null, 'Accessories',  6, 2, null,   ['cap', 'baseball', 'accessories']),
  base('ef-008', 'ef-new-fashion-backpack',      'New Fashion Backpack',        24,  34,  'Accessories',  7, 3, 'sale', ['backpack', 'fashion', 'bag']),
  base('ef-009', 'ef-knit-blazer-jacket',        'Knit Blazer Jacket',          55,  null, 'Blazer',       8, 4, 'new',  ['blazer', 'knit', 'jacket']),
  base('ef-010', 'ef-elegant-midi-coat',         'Elegant Midi Coat',           78,  95,  'Jacket',       9, 5, 'sale', ['coat', 'midi', 'elegant']),
];
