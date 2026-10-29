import type { Product } from '@/types/product';

/**
 * Megastore (electronics) products shaped as full Product objects so they work
 * with every existing store and module (cart, compare, wishlist, QuickView, search).
 */

const ALL_IMAGES = [
  '/megastore/featured-products/products/products15.webp',
  '/megastore/featured-products/products/products16.webp',
  '/megastore/featured-products/products/products1.webp',
  '/megastore/featured-products/products/products2.webp',
  '/megastore/featured-products/products/products6.webp',
  '/megastore/featured-products/products/products13.webp',
  '/megastore/featured-products/products/products14.webp',
  '/megastore/featured-products/products/products4.webp',
  '/megastore/featured-products/products/products5.webp',
  '/megastore/featured-products/products/products7.webp',
  '/megastore/featured-products/products/products8.webp',
  '/megastore/featured-products/products/products9.webp',
  '/megastore/featured-products/products/products10.webp',
  '/megastore/featured-products/products/products11.webp',
  '/megastore/featured-products/products/products12.webp',
  '/megastore/featured-products/products/products17.webp',
];

function makeReviews(productId: string, productName: string) {
  return [
    {
      id: `${productId}-r-1`,
      author: 'David L.',
      rating: 5,
      title: 'Excellent build quality',
      body: `${productName} arrived quickly and the quality is outstanding. Setup was painless and performance has been rock-solid for weeks.`,
      date: '2026-02-18',
      verified: true,
    },
    {
      id: `${productId}-r-2`,
      author: 'Marvell',
      rating: 4,
      title: 'Great value',
      body: `${productName} delivers what it promises. Sleek design, intuitive controls, and good battery life. Would recommend.`,
      date: '2026-02-04',
      verified: true,
    },
    {
      id: `${productId}-r-3`,
      author: 'Nike sime',
      rating: 5,
      title: 'Better than expected',
      body: `Genuinely impressed with ${productName}. Premium feel at a reasonable price. Already recommended it to friends.`,
      date: '2026-01-22',
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
  { name: 'Black', value: '#111111' },
  { name: 'Silver', value: '#c0c0c0' },
  { name: 'Orange', value: '#f26522' },
  { name: 'Blue', value: '#1e88e5' },
  { name: 'Pink', value: '#ec407a' },
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
  countdownEnd: string | null = null,
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
    vendor: 'Ambaz Electronics',
    price,
    compareAtPrice,
    currency: 'USD',
    images: buildGallery(id, name, primaryIdx, secondaryIdx),
    variants,
    colors: COLOR_PALETTE.map((c) => ({ name: c.name, value: c.value, type: 'hex' as const })),
    sizes: [],
    category,
    tags,
    brand: 'Megastore',
    availability: 'in-stock',
    badge,
    description: description || `${name} — premium electronics engineered for everyday performance. Modern design, reliable hardware, and a multi-year warranty.`,
    features: [
      'Premium materials and finish',
      'Energy-efficient design',
      'One-year manufacturer warranty',
      'Worldwide shipping available',
    ],
    rating: 4.7,
    reviewCount: 28,
    reviews: makeReviews(id, name),
    relatedProducts: [],
    pairsWellWith: [],
    createdAt: '2026-01-15T00:00:00Z',
    sku: id.toUpperCase(),
    countdownEnd,
  };
}

export const megastoreProducts: Product[] = [
  base('ms-1', 'macro-gaming-mouse', 'Macro Gaming Mouse', 195, null, 'Accessories', 0, 1, 'new', ['mouse', 'gaming', 'rgb']),
  base('ms-2', 'smart-cctv-camera', 'Smart CCTV Camera', 170, null, 'Wireless Camera', 1, 0, null, ['cctv', 'security', 'wireless']),
  base('ms-3', 'bluetooth-mini-speaker', 'Bluetooth Mini Speaker', 225, 255, 'Speaker', 2, 3, 'sale', ['bluetooth', 'speaker', 'audio'], '', '2027-04-01T00:00:00Z'),
  base('ms-4', 'iphone-11-pro-phone-case', 'iPhone 11 Pro Phone Case', 430, null, 'Phone Case', 3, 2, null, ['case', 'iphone', 'protective']),
  base('ms-5', 'bluetooth-5-earphones', 'Bluetooth 5.0 Earphones', 210, 250, 'Headphones', 4, 5, 'sale', ['earphones', 'bluetooth', 'wireless']),
  base('ms-6', 'voice-music-headphones', 'Voice Music Headphones', 230, null, 'Headphones', 15, 4, null, ['headphones', 'wireless', 'over-ear']),
  base('ms-7', 'apple-macbook-pro', 'Apple MacBook Pro', 840, null, 'Laptop', 5, 6, null, ['laptop', 'apple', 'macbook']),
  base('ms-8', 'electric-juice-blender', 'Electric Juice Blender', 220, 300, 'Electronics', 6, 7, 'sale', ['blender', 'kitchen', 'juicer']),
  base('ms-9', 'electric-mixer-toaster', 'Electric mixer toaster', 320, 410, 'Electronics', 7, 8, 'sale', ['toaster', 'kitchen', 'mixer']),
  base('ms-10', 'gopro-hero-camera', 'GoPro HERO Camera', 280, null, 'Camera', 8, 9, null, ['camera', 'action', 'gopro']),
  base('ms-11', 'iphone-15-pro-max', 'iPhone 15 Pro Max', 890, null, 'Smart Phones', 9, 10, 'new', ['iphone', 'smartphone', 'apple']),
  base('ms-12', 'apple-airpods-pro', 'Apple AirPods Pro', 245, null, 'Headphones', 10, 11, null, ['airpods', 'wireless', 'apple']),
  base('ms-13', 'smart-watch-galaxy', 'Smart Watch Galaxy', 320, 380, 'Smart Watch', 11, 12, 'sale', ['watch', 'smart', 'galaxy']),
  base('ms-14', 'gaming-keyboard-rgb', 'Gaming Keyboard RGB', 150, null, 'Gaming Keyboard', 12, 13, 'new', ['keyboard', 'gaming', 'rgb']),
  base('ms-15', 'wireless-router-ac', 'Wireless Router AC', 180, null, 'Wireless Router', 13, 14, null, ['router', 'wifi', 'wireless']),
  base('ms-16', 'home-pod-speaker', 'HomePod Audio Speaker', 350, 420, 'Speaker', 14, 2, 'sale', ['speaker', 'homepod', 'audio']),
];
