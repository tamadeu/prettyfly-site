import type { Product } from '@/types/product';

const ALL_IMAGES = [
  '/lipstain/featured-products/featured-products6.webp',
  '/lipstain/featured-products/featured-products2.webp',
  '/lipstain/featured-products/featured-products3.webp',
  '/lipstain/featured-products/featured-products1.webp',
  '/lipstain/featured-products/featured-products12.webp',
  '/lipstain/featured-products/featured-products5.webp',
  '/lipstain/featured-products/featured-products10.webp',
  '/lipstain/featured-products/featured-products9.webp',
  '/lipstain/featured-products/featured-products11.webp',
  '/lipstain/featured-products/featured-products4.webp',
  '/lipstain/featured-products/featured-products7.webp',
  '/lipstain/featured-products/featured-products8.webp',
];

function makeReviews(productId: string, productName: string) {
  return [
    {
      id: `${productId}-r-1`,
      author: 'Sophia L.',
      rating: 5,
      title: 'Absolutely stunning color',
      body: `${productName} is the most beautiful lip product I own. The color payoff is incredible and it lasts all day without fading or drying out.`,
      date: '2025-11-22',
      verified: true,
    },
    {
      id: `${productId}-r-2`,
      author: 'Naomi K.',
      rating: 4,
      title: 'Love the formula',
      body: `${productName} feels so comfortable on the lips. It stays put through meals and drinks — my go-to for long days.`,
      date: '2025-11-12',
      verified: true,
    },
    {
      id: `${productId}-r-3`,
      author: 'Isabelle M.',
      rating: 5,
      title: 'Worth every penny',
      body: `${productName} has the perfect pigmentation. I get compliments every time I wear it. Will buy again in every shade!`,
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
  { name: 'Berry Red',   value: '#c9173c' },
  { name: 'Nude Pink',   value: '#e8a89c' },
  { name: 'Deep Purple', value: '#6b2d5e' },
  { name: 'Coral',       value: '#e8735a' },
  { name: 'Rose',        value: '#d4819a' },
];

const SIZES = ['One Size'];

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
  countdownEnd: string | null = null
): Product {
  const variants = COLOR_PALETTE.map((c, i) => ({
    id: `${id}-v-${i + 1}`,
    color: c.name,
    size: 'One Size',
    price,
    compareAtPrice,
    image: ALL_IMAGES[(primaryIdx + i) % ALL_IMAGES.length],
    available: true,
    sku: `${id.toUpperCase()}-${c.name.toUpperCase().replace(/\s/g, '').slice(0, 3)}`,
  }));

  return {
    id,
    slug,
    name,
    vendor: 'Ambaz Lipstain',
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
    description: `${name} — crafted for bold, lasting colour with a formula that feels as good as it looks. Long-wearing pigment, moisturising comfort, and a finish that stays vibrant from morning to midnight.`,
    features: [
      'Long-wearing up to 12 hours',
      'Highly pigmented for bold colour payoff',
      'Moisturising formula with no drying effect',
      'Transfer-proof and fade-resistant finish',
    ],
    rating: 4.8,
    reviewCount: 38,
    reviews: makeReviews(id, name),
    relatedProducts: [],
    pairsWellWith: [],
    createdAt: '2025-09-15T00:00:00Z',
    sku: id.toUpperCase(),
    countdownEnd,
  };
}

const COUNTDOWN = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString();

export const lipstainProducts: Product[] = [
  base('ls-001', 'ls-beauty-liquid-lipstick',      'Beauty Liquid Lipstick',      28, 56,   'Lip Stain',     0,  2, 'sale', ['liquid', 'long-lasting'], COUNTDOWN),
  base('ls-002', 'ls-bite-beauty-lipstick',         'Bite Beauty Lipstick',        62, null, 'Gel Lipstain',  1,  3, null,   ['gel', 'moisturising']),
  base('ls-003', 'ls-dry-matte-lip-paint',          'Dry Matte Lip Paint',         30, 55,   'Matte Lipstain',2,  4, 'sale', ['matte', 'dry-formula'], COUNTDOWN),
  base('ls-004', 'ls-everlasting-liquid-lipstick',  'Everlasting Liquid Lipstick', 32, 52,   'Lip Stain',     3,  5, 'sale', ['liquid', 'everlasting']),
  base('ls-005', 'ls-fenty-beauty-lip-paint',       'Fenty Beauty Lip Paint',      70, null, 'Gloss Lipstain',4,  0, null,   ['gloss', 'glossy']),
  base('ls-006', 'ls-liquified-wear-lipstick',      'Liquified Wear Lipstick',     48, null, 'Gel Lipstain',  5,  1, null,   ['gel', 'wear']),
  base('ls-007', 'ls-matte-revolution-lipstick',    'Matte Revolution Lipstick',   46, null, 'Matte Lipstain',6,  2, null,   ['matte', 'revolution']),
  base('ls-008', 'ls-mattelast-liquid-lip',         'MatteLast Liquid Lip',        34, 54,   'Matte Lipstain',7,  3, 'sale', ['matte', 'liquid']),
  base('ls-009', 'ls-velvety-matte-lip-color',      'Velvety Matte Lip Color',     38, null, 'Matte Lipstain',8,  4, 'new',  ['velvet', 'matte']),
  base('ls-010', 'ls-bold-satin-lipstick',          'Bold Satin Lipstick',         44, null, 'Lip Stain',     9,  5, null,   ['satin', 'bold']),
  base('ls-011', 'ls-luxe-gloss-lipstick',          'Luxe Gloss Lipstick',         36, null, 'Gloss Lipstain',10, 0, null,   ['gloss', 'luxe']),
  base('ls-012', 'ls-shimmer-lip-oil',              'Shimmer Lip Oil',             42, null, 'Oil Lipstain',  11, 1, null,   ['oil', 'shimmer']),
];
