import type { Product } from '@/types/product';

const IMAGE_BASE = '/electronics store/products';

const ALL_IMAGES = [
  `${IMAGE_BASE}/product-1.webp`,
  `${IMAGE_BASE}/product-2.webp`,
  `${IMAGE_BASE}/product-3.webp`,
  `${IMAGE_BASE}/product-4.webp`,
  `${IMAGE_BASE}/product-5.webp`,
  `${IMAGE_BASE}/product-6.webp`,
  `${IMAGE_BASE}/product-7.webp`,
  `${IMAGE_BASE}/product-8.webp`,
  `${IMAGE_BASE}/product-9.webp`,
];

function makeReviews(productId: string, productName: string) {
  return [
    {
      id: `${productId}-r-1`,
      author: 'Alex Carter',
      rating: 5,
      title: 'Outstanding quality',
      body: `${productName} exceeded my expectations. Build quality is top-notch and performance is excellent. Highly recommend!`,
      date: '2025-12-10',
      verified: true,
    },
    {
      id: `${productId}-r-2`,
      author: 'Jordan Lee',
      rating: 4,
      title: 'Great value for money',
      body: `Really happy with ${productName}. Does exactly what it promises and looks great. Would buy again.`,
      date: '2025-11-25',
      verified: true,
    },
    {
      id: `${productId}-r-3`,
      author: 'Sam Rivera',
      rating: 5,
      title: 'Exactly as described',
      body: `${productName} arrived in perfect condition. Setup was easy and it works flawlessly.`,
      date: '2025-11-12',
      verified: true,
    },
  ];
}

function buildGallery(productId: string, name: string, primaryIdx: number) {
  const order: number[] = [];
  const used = new Set<number>();
  order.push(primaryIdx);
  used.add(primaryIdx);
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

const COLORS_A = [
  { name: 'Black', value: '#1a1a1a' },
  { name: 'Silver', value: '#c0c0c0' },
  { name: 'Rose Gold', value: '#b8860b' },
];
const COLORS_B = [
  { name: 'Silver', value: '#c0c0c0' },
  { name: 'Dark Blue', value: '#2c3e6b' },
  { name: 'Black', value: '#1a1a1a' },
];
const COLORS_C = [
  { name: 'White', value: '#f0f0f0' },
  { name: 'Black', value: '#1a1a1a' },
  { name: 'Gray', value: '#888888' },
];

const SIZES = ['S', 'M', 'L', 'XL'];

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
  palette = COLORS_A,
  stockCount = 30,
): Product {
  const variants = palette.map((c, i) => ({
    id: `${id}-v-${i + 1}`,
    color: c.name,
    size: 'One Size',
    price,
    compareAtPrice,
    image: ALL_IMAGES[(primaryIdx + i) % ALL_IMAGES.length],
    available: true,
    sku: `${id.toUpperCase()}-${c.name.replace(/\s+/g, '-').toUpperCase().slice(0, 6)}`,
  }));

  return {
    id,
    slug,
    name,
    vendor: 'Ambaz Electronics',
    price,
    compareAtPrice,
    currency: 'USD',
    images: buildGallery(id, name, primaryIdx),
    variants,
    colors: palette.map((c) => ({ name: c.name, value: c.value, type: 'hex' as const })),
    sizes: SIZES,
    category,
    tags,
    brand: 'Electronics Store',
    availability: 'in-stock',
    badge,
    description: `${name} — premium electronics designed for modern life. Experience cutting-edge technology with elegant design and reliable performance.`,
    features: [
      'Premium build quality',
      'Advanced technology',
      'Energy efficient',
      '1-year warranty included',
    ],
    rating: 4.7,
    reviewCount: stockCount,
    reviews: makeReviews(id, name),
    relatedProducts: [],
    pairsWellWith: [],
    createdAt: '2025-11-01T00:00:00Z',
    sku: id.toUpperCase(),
    countdownEnd: null,
    collections: [category],
  };
}

export const electronicsStoreProducts: Product[] = [
  base('es2-1',  'es2-apple-macbook-pro',        'Apple MacBook Pro',          840,  null, 'Laptop',      5, null,   ['laptop', 'apple', 'macbook', 'computer'], COLORS_A, 34),
  base('es2-2',  'es2-bluetooth-50-earphones',    'Bluetooth 5.0 Earphones',    210,  259,  'Headphone',   6, 'sale', ['earphones', 'bluetooth', 'wireless', 'audio'], COLORS_B, 30),
  base('es2-3',  'es2-bluetooth-mini-speaker',    'Bluetooth Mini Speaker',     225,  255,  'Speaker',     2, 'sale', ['speaker', 'bluetooth', 'portable', 'audio'], COLORS_A, 37),
  base('es2-4',  'es2-electric-juice-blender',    'Electric Juice Blender',     220,  300,  'Accessories', 7, 'sale', ['blender', 'kitchen', 'appliance', 'juicer'], COLORS_C, 21),
  base('es2-5',  'es2-electric-mixer-toaster',    'Electric mixer toaster',     320,  410,  'Accessories', 8, 'sale', ['toaster', 'kitchen', 'appliance', 'mixer'], COLORS_C, 34),
  base('es2-6',  'es2-gopro-hero-camera',         'GoPro HERO Camera',          260,  null, 'Electronics', 0, null,   ['camera', 'gopro', 'action', 'video'], COLORS_B, 37),
  base('es2-7',  'es2-iphone-11-pro-phone-case',  'iPhone 11 Pro Phone Case',   430,  null, 'Accessories', 3, null,   ['iphone', 'phone case', 'accessories', 'protection'], COLORS_A, 30),
  base('es2-8',  'es2-iphone-15-pro-max',         'iPhone 15 Pro Max',          890,  null, 'Electronics', 4, null,   ['iphone', 'apple', 'smartphone', 'mobile'], COLORS_B, 30),
  base('es2-9',  'es2-macro-gaming-mouse',        'Macro Gaming Mouse',         195,  null, 'Accessories', 0, 'new',  ['gaming', 'mouse', 'rgb', 'peripherals'], COLORS_A, 36),
  base('es2-10', 'es2-smart-cctv-camera',         'Smart CCTV Camera',          170,  null, 'Electronics', 1, null,   ['camera', 'cctv', 'security', 'smart home'], COLORS_C, 40),
  base('es2-11', 'es2-wireless-bluetooth-speaker','Wireless Bluetooth Speaker',  310,  380,  'Speaker',     2, 'sale', ['speaker', 'wireless', 'bluetooth', 'sound'], COLORS_B, 28),
  base('es2-12', 'es2-gaming-headset-elite',      'Gaming Headset Elite',        150,  null, 'Headphone',   6, 'new',  ['headset', 'gaming', 'headphones', 'audio'], COLORS_C, 35),
];
