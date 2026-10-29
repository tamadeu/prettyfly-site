import type { Product } from '@/types/product';

const ALL_IMAGES = [
  '/plant-and-garden/products/products2.webp',
  '/plant-and-garden/products/products6.webp',
  '/plant-and-garden/products/products8.webp',
  '/plant-and-garden/products/products9.webp',
  '/plant-and-garden/products/products10.webp',
  '/plant-and-garden/products/products11.webp',
  '/plant-and-garden/products/products12.webp',
  '/plant-and-garden/products/products13.webp',
  '/plant-and-garden/products/products3.webp',
  '/plant-and-garden/products/products4.webp',
  '/plant-and-garden/products/products5.webp',
  '/plant-and-garden/products/products7.webp',
];

function makeReviews(productId: string, productName: string) {
  return [
    {
      id: `${productId}-r-1`,
      author: 'Emma L.',
      rating: 5,
      title: 'Absolutely beautiful',
      body: `My ${productName} has been thriving since I got it. The quality is excellent and it arrived in perfect condition.`,
      date: '2025-11-18',
      verified: true,
    },
    {
      id: `${productId}-r-2`,
      author: 'Daniel R.',
      rating: 4,
      title: 'Great addition to my space',
      body: `${productName} looks stunning in my living room. Healthy plant, well packaged, and easy care instructions included.`,
      date: '2025-11-05',
      verified: true,
    },
    {
      id: `${productId}-r-3`,
      author: 'Sophie M.',
      rating: 5,
      title: 'Perfect gift for plant lovers',
      body: `Bought ${productName} as a gift and it was a huge hit. Fast delivery and the plant was in great shape.`,
      date: '2025-10-22',
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
  { name: 'Green', value: '#3a7d44' },
  { name: 'White', value: '#f0f0f0' },
  { name: 'Terracotta', value: '#c17a5b' },
  { name: 'Black', value: '#1a1a1a' },
  { name: 'Sage', value: '#7a9e7e' },
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
  description = ''
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
    vendor: 'Ambaz Garden',
    price,
    compareAtPrice,
    currency: 'USD',
    images: buildGallery(id, name, primaryIdx, secondaryIdx),
    variants,
    colors: COLOR_PALETTE.map((c) => ({ name: c.name, value: c.value, type: 'hex' as const })),
    sizes: [],
    category,
    tags,
    brand: 'GreenLife',
    availability: 'in-stock',
    badge,
    description: description || `${name} — a beautiful addition to any home or garden. Grown with care and delivered fresh to your door, each plant comes with easy-care instructions.`,
    features: ['Hand-picked quality', 'Eco-friendly packaging', 'Free care guide included', '30-day healthy guarantee'],
    rating: 4.7,
    reviewCount: 24,
    reviews: makeReviews(id, name),
    relatedProducts: [],
    pairsWellWith: [],
    createdAt: '2025-10-01T00:00:00Z',
    sku: id.toUpperCase(),
    countdownEnd: null,
  };
}

export const plantGardenProducts: Product[] = [
  // Indoor Plants (8)
  base('pg-1', 'anthurium-plant-pot', 'Anthurium Plant Pot', 18, 12, 'Indoor Plants', 0, 1, 'sale', ['anthurium', 'tropical', 'indoor', 'flowering']),
  base('pg-2', 'boho-flower-bouquet', 'Boho Flower Bouquet', 20, null, 'Indoor Plants', 1, 2, null, ['bouquet', 'dried flowers', 'boho', 'decor']),
  base('pg-3', 'ceramic-plant-pots', 'Ceramic Plant Pots', 30, null, 'Indoor Plants', 2, 3, 'new', ['ceramic', 'pot', 'planter', 'indoor']),
  base('pg-4', 'ceramic-plant-stand', 'Ceramic Plant Stand', 25, null, 'Indoor Plants', 3, 4, null, ['stand', 'display', 'indoor', 'ceramic']),
  base('pg-5', 'first-blush-bouquet', 'First Blush Bouquet', 32, null, 'Indoor Plants', 4, 5, null, ['bouquet', 'flowers', 'pink', 'gift']),
  base('pg-6', 'forest-indoor-plants', 'Forest Indoor Plants', 29, 22, 'Indoor Plants', 5, 6, 'sale', ['forest', 'tropical', 'indoor', 'green']),
  base('pg-7', 'home-kitchen-tabletop', 'Home Kitchen Tabletop', 36, 26, 'Indoor Plants', 6, 7, 'sale', ['kitchen', 'tabletop', 'succulent', 'small']),
  base('pg-8', 'houseplant-trends', 'Houseplant Trends', 24, 18, 'Indoor Plants', 7, 8, 'sale', ['houseplant', 'trending', 'modern', 'indoor']),

  // Outdoor Plants (5)
  base('pg-9', 'butterfly-garden-mix', 'Butterfly Garden Mix', 45, null, 'Outdoor Plants', 8, 9, 'new', ['butterfly', 'garden', 'outdoor', 'wildflower']),
  base('pg-10', 'fruit-garden-seedling', 'Fruit Garden Seedling', 38, null, 'Outdoor Plants', 9, 10, null, ['fruit', 'seedling', 'outdoor', 'edible']),
  base('pg-11', 'flower-garden-set', 'Flower Garden Set', 55, 70, 'Outdoor Plants', 10, 11, 'sale', ['flowers', 'garden set', 'outdoor', 'seasonal']),
  base('pg-12', 'herb-garden-collection', 'Herb Garden Collection', 28, null, 'Outdoor Plants', 11, 0, null, ['herbs', 'kitchen garden', 'outdoor', 'edible']),
  base('pg-13', 'monstera-outdoor-giant', 'Monstera Outdoor Giant', 85, null, 'Outdoor Plants', 0, 2, 'new', ['monstera', 'large', 'tropical', 'statement']),

  // Pots & Planters (5)
  base('pg-14', 'terracotta-pot-classic', 'Terracotta Pot Classic', 15, null, 'Pots & Planters', 2, 4, null, ['terracotta', 'pot', 'classic', 'clay']),
  base('pg-15', 'white-ceramic-planter', 'White Ceramic Planter', 35, 45, 'Pots & Planters', 3, 5, 'sale', ['white', 'ceramic', 'modern', 'planter']),
  base('pg-16', 'hanging-basket-macrame', 'Hanging Basket Macrame', 28, null, 'Pots & Planters', 6, 7, 'new', ['hanging', 'macrame', 'boho', 'basket']),
  base('pg-17', 'raised-garden-bed-kit', 'Raised Garden Bed Kit', 120, null, 'Pots & Planters', 8, 9, null, ['raised bed', 'garden', 'outdoor', 'wood']),
  base('pg-18', 'self-watering-planter', 'Self-Watering Planter', 42, 55, 'Pots & Planters', 10, 11, 'sale', ['self-watering', 'smart', 'planter', 'indoor']),

  // Garden Tools (4)
  base('pg-19', 'premium-pruning-shears', 'Premium Pruning Shears', 22, null, 'Garden Tools', 4, 6, 'new', ['pruning', 'shears', 'tools', 'maintenance']),
  base('pg-20', 'garden-trowel-set', 'Garden Trowel Set', 18, 25, 'Garden Tools', 7, 9, 'sale', ['trowel', 'set', 'hand tools', 'gardening']),
  base('pg-21', 'watering-can-copper', 'Watering Can Copper', 48, null, 'Garden Tools', 1, 3, null, ['watering can', 'copper', 'decor', 'functional']),
  base('pg-22', 'garden-gloves-leather', 'Garden Gloves Leather', 16, null, 'Garden Tools', 5, 8, null, ['gloves', 'leather', 'protection', 'tools']),

  // Seeds & Bulbs (5)
  base('pg-23', 'wildflower-seed-mix', 'Wildflower Seed Mix', 12, null, 'Seeds & Bulbs', 9, 11, 'new', ['seeds', 'wildflower', 'mix', 'easy grow']),
  base('pg-24', 'tulip-bulb-collection', 'Tulip Bulb Collection', 19, null, 'Seeds & Bulbs', 10, 0, null, ['tulip', 'bulbs', 'spring', 'flowering']),
  base('pg-25', 'vegetable-starter-pack', 'Vegetable Starter Pack', 24, 32, 'Seeds & Bulbs', 11, 1, 'sale', ['vegetables', 'starter', 'seeds', 'edible']),
];
