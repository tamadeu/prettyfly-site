import type { Product } from '@/types/product';

/**
 * Pet food products shaped as full Product objects so they work with every
 * existing store and module (cart, compare, wishlist, QuickView modal, search).
 */

const ALL_IMAGES = [
  '/pet-food/products/products1.webp',
  '/pet-food/products/products4.webp',
  '/pet-food/products/products5.webp',
  '/pet-food/products/products6.webp',
  '/pet-food/products/products7.webp',
  '/pet-food/products/products2.webp',
  '/pet-food/products/products3.webp',
  '/pet-food/products/products8.webp',
  '/pet-food/products/products9.webp',
  '/pet-food/products/products10.webp',
  '/pet-food/products/products11.webp',
  '/pet-food/products/products12.webp',
  '/pet-food/products/products13.webp',
];

function makeReviews(productId: string, productName: string) {
  return [
    {
      id: `${productId}-r-1`,
      author: 'Jenna R.',
      rating: 5,
      title: 'My pup loves it',
      body: `Switched my dog to ${productName} and he can't get enough — coat looks shinier and his energy is up. Highly recommend.`,
      date: '2025-11-20',
      verified: true,
    },
    {
      id: `${productId}-r-2`,
      author: 'Marcus T.',
      rating: 4,
      title: 'Great quality',
      body: `Good ingredients, clean label. ${productName} arrived well packaged. Slightly pricey but worth it for what you get.`,
      date: '2025-11-10',
      verified: true,
    },
    {
      id: `${productId}-r-3`,
      author: 'Sophie L.',
      rating: 5,
      title: 'Picky cat approved',
      body: `My finicky eater cleared the bowl the first time. Will keep reordering ${productName} on subscription.`,
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

/* Five-swatch palette used across all pet-food products. The first three
   show below the card; the rest collapse behind the "+N" overflow chip. */
const COLOR_PALETTE: { name: string; value: string }[] = [
  { name: 'Red', value: '#e53935' },
  { name: 'Yellow', value: '#fdd835' },
  { name: 'Purple', value: '#8e24aa' },
  { name: 'Pink', value: '#f48fb1' },
  { name: 'Green', value: '#43a047' },
];

function base(id: string, slug: string, name: string, price: number, compareAtPrice: number | null, category: string, primaryIdx: number, secondaryIdx: number, badge: Badge = null, tags: string[] = [], description = ''): Product {
  /* Hover over a swatch → swap to a different image from the shared pool.
     The first variant reuses the product's own primary image; the rest cycle
     through ALL_IMAGES so every colour maps to a distinct photo. */
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
    vendor: 'Ambaz Pet',
    price,
    compareAtPrice,
    currency: 'USD',
    images: buildGallery(id, name, primaryIdx, secondaryIdx),
    variants,
    colors: COLOR_PALETTE.map((c) => ({ name: c.name, value: c.value, type: 'hex' as const })),
    sizes: [],
    category,
    tags,
    brand: 'Pet World',
    availability: 'in-stock',
    badge,
    description: description || `${name} — crafted with wholesome ingredients your pet will love. Nutrient-rich formula for a happy, healthy companion.`,
    features: ['High-protein recipe', 'No artificial preservatives', 'Vet-approved formulation', 'Made with real meat or fish'],
    rating: 4.6,
    reviewCount: 32,
    reviews: makeReviews(id, name),
    relatedProducts: [],
    pairsWellWith: [],
    createdAt: '2025-09-01T00:00:00Z',
    sku: id.toUpperCase(),
    countdownEnd: null,
  };
}

export const petFoodProducts: Product[] = [
  base('pf-1', 'animal-nature-food', 'Animal Nature Food', 17, null, 'Cat Food', 0, 7, 'new', ['grain-free', 'cat', 'dry']),
  base('pf-2', 'bowl-of-pets-food', 'Bowl of Pets Food', 22, null, 'Pet Food', 7, 1, null, ['wet', 'mixed']),
  base('pf-3', 'chicken-cat-food', 'Chicken Cat Food', 12, 16, 'Cat Food', 8, 0, 'sale', ['chicken', 'cat', 'wet']),
  base('pf-4', 'dog-bones-food', 'Dog Bones Food', 15, 20, 'Dogs Food', 9, 3, 'sale', ['dog', 'treat', 'chew']),
  base('pf-5', 'dog-food-guangzhou', 'Dog Food Guangzhou', 35, null, 'Dogs Food', 10, 3, null, ['dog', 'dry', 'kibble']),
  base('pf-6', 'enhanced-pet-bowl', 'Enhanced Pet Bowl', 22, null, 'Pet Food', 1, 7, null, ['bowl', 'accessory']),
  base('pf-7', 'hooray-kitten-food', 'Hooray Kitten Food', 14, 24, 'Kitten Food', 11, 0, 'sale', ['kitten', 'wet', 'formula']),
  base('pf-8', 'pet-cat-food', 'Pet Cat Food', 18, null, 'Cat Food', 12, 0, null, ['cat', 'dry']),
  base('pf-9', 'gleam-fur-groom', 'Gleam Fur Groom', 15, 20, 'Pet Food', 2, 5, 'sale', ['grooming', 'coat-care']),
  base('pf-10', 'premium-puppy-chow', 'Premium Puppy Chow', 28, null, 'Puppy Food', 3, 4, null, ['puppy', 'kibble', 'growth']),
  base('pf-11', 'salmon-delight-cat', 'Salmon Delight Cat', 24, null, 'Cat Food', 4, 8, null, ['salmon', 'cat', 'wet']),
  base('pf-12', 'chicken-nuggets-cats', 'Chicken Nuggets for Cats', 13, 18, 'Cat Food', 5, 11, 'sale', ['chicken', 'cat', 'treat']),
  base('pf-13', 'bone-shaped-biscuits', 'Bone-Shaped Biscuits', 12, null, 'Dogs Food', 6, 9, null, ['dog', 'biscuit', 'treat']),
];
