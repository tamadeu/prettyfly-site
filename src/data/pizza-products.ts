import type { Product } from '@/types/product';

const ALL_IMAGES = [
  '/pizza/products/products2.webp',
  '/pizza/products/products8.webp',
  '/pizza/products/products6.webp',
  '/pizza/products/products7.webp',
  '/pizza/products/products9.webp',
  '/pizza/products/products10.webp',
  '/pizza/products/products12.webp',
  '/pizza/products/products11.webp',
  '/pizza/products/products3.webp',
  '/pizza/products/products4.webp',
  '/pizza/products/products5.webp',
];

function makeReviews(productId: string, productName: string) {
  return [
    {
      id: `${productId}-r-1`,
      author: 'Sofia R.',
      rating: 5,
      title: 'Absolutely delicious!',
      body: `${productName} exceeded all expectations. Fresh ingredients, perfect crust, and delivered hot. Will order again!`,
      date: '2025-11-18',
      verified: true,
    },
    {
      id: `${productId}-r-2`,
      author: 'Marco T.',
      rating: 4,
      title: 'Great flavor',
      body: `Really enjoyed ${productName}. The toppings were generous and the sauce had great depth. Slightly crispy edges — perfect.`,
      date: '2025-11-05',
      verified: true,
    },
    {
      id: `${productId}-r-3`,
      author: 'Aisha K.',
      rating: 5,
      title: 'Best pizza in town',
      body: `${productName} is our family favourite now. We order it every weekend — consistent quality every single time.`,
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

const SIZES = ['Small', 'Regular', 'Large'];

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
  description = ''
): Product {
  const variants = SIZES.map((s, i) => ({
    id: `${id}-v-${i + 1}`,
    color: 'Default',
    size: s,
    price: price + i * 2,
    compareAtPrice: compareAtPrice ? compareAtPrice + i * 2 : null,
    image: ALL_IMAGES[primaryIdx],
    available: true,
    sku: `${id.toUpperCase()}-${s.toUpperCase().slice(0, 3)}`,
  }));

  return {
    id,
    slug,
    name,
    vendor: 'Ambaz Pizza',
    price,
    compareAtPrice,
    currency: 'USD',
    images: buildGallery(id, name, primaryIdx, secondaryIdx),
    variants,
    colors: [],
    sizes: SIZES,
    category,
    tags,
    brand: 'Ambaz Pizza',
    availability: 'in-stock',
    badge,
    description: description || `${name} — handcrafted with premium ingredients, stone-baked to perfection. Every slice is made with love and fresh toppings sourced daily.`,
    features: [
      'Stone-baked for authentic crunch',
      'Fresh daily ingredients',
      'No artificial preservatives',
      'Available in three sizes',
    ],
    rating: 4.5,
    reviewCount: 24,
    reviews: makeReviews(id, name),
    relatedProducts: [],
    pairsWellWith: [],
    createdAt: '2025-09-01T00:00:00Z',
    sku: id.toUpperCase(),
    countdownEnd,
  };
}

export const pizzaProducts: Product[] = [
  // BBQ Pizza category (6 products)
  base('ps-1', 'brooklyn-bold-pizza', 'Brooklyn Bold Pizza', 20, null, 'BBQ Pizza', 0, 1, 'new', ['featured', 'new-arrivals']),
  base('ps-7', 'crusty-carnival-pizza', 'Crusty Carnival Pizza', 17, 24, 'BBQ Pizza', 6, 7, 'sale', ['popular', 'new-arrivals']),
  base('ps-8', 'cheesy-volcano-pizza', 'Cheesy Volcano Pizza', 22, null, 'BBQ Pizza', 7, 8, null, ['bestseller']),
  base('ps-11', 'bbq-bonanza-pizza', 'BBQ Bonanza Pizza', 22, 55, 'BBQ Pizza', 10, 0, 'sale', ['bestseller']),
  base('ps-13', 'spicy-volcano-pizza', 'Spicy Volcano Pizza', 19, 28, 'BBQ Pizza', 8, 9, 'sale', ['popular']),
  base('ps-16', 'bbq-chicken-special', 'BBQ Chicken Special', 21, 30, 'BBQ Pizza', 4, 5, 'sale', ['popular', 'bestseller']),

  // Chicken Pizza category (6 products)
  base('ps-2', 'marinara-medley-pizza', 'Marinara Medley Pizza', 32, null, 'Chicken Pizza', 1, 2, null, ['featured', 'bestseller']),
  base('ps-3', 'pepperoni-pizza', 'Pepperoni Pizza', 14, 24, 'Chicken Pizza', 2, 3, 'sale', ['featured', 'popular', 'bestseller'], '2026-12-31T23:59:59Z'),
  base('ps-4', 'superfood-slice-pizza', 'Superfood Slice Pizza', 28, null, 'Chicken Pizza', 3, 4, null, ['featured', 'bestseller']),
  base('ps-5', 'organic-harvest-pizza', 'Organic Harvest Pizza', 12, 25, 'Chicken Pizza', 4, 5, 'sale', ['new-arrivals', 'popular']),
  base('ps-9', 'veggie-vortex-pizza', 'Veggie Vortex Pizza', 15, 20, 'Chicken Pizza', 5, 6, 'sale', ['new-arrivals']),
  base('ps-10', 'pesto-passion-pizza', 'Pesto Passion Pizza', 18, null, 'Chicken Pizza', 9, 10, null, ['featured']),

  // Beef Pizza category (4 products)
  base('ps-6', 'taco-pizza-fusion', 'Taco Pizza Fusion', 26, null, 'Beef Pizza', 5, 6, null, ['new-arrivals', 'popular']),
  base('ps-12', 'hawaiian-delight-pizza', 'Hawaiian Delight Pizza', 24, null, 'Beef Pizza', 6, 7, null, ['popular', 'new-arrivals']),
  base('ps-17', 'four-cheese-feast', 'Four Cheese Feast', 29, null, 'Beef Pizza', 7, 8, null, ['featured']),
  base('ps-19', 'meat-lovers-supreme', 'Meat Lovers Supreme', 27, 35, 'Beef Pizza', 8, 9, 'sale', ['popular']),

  // Veggie Pizza category (4 products)
  base('ps-14', 'margherita-classic', 'Margherita Classic', 16, null, 'Veggie Pizza', 9, 10, 'new', ['featured', 'new-arrivals']),
  base('ps-15', 'truffle-mushroom-pizza', 'Truffle Mushroom Pizza', 34, null, 'Veggie Pizza', 10, 0, null, ['bestseller', 'featured']),
  base('ps-18', 'garden-fresh-veggie', 'Garden Fresh Veggie', 18, null, 'Veggie Pizza', 0, 1, 'new', ['new-arrivals']),
  base('ps-20', 'greek-olive-pizza', 'Greek Olive Pizza', 23, null, 'Veggie Pizza', 1, 2, null, ['bestseller']),
];
