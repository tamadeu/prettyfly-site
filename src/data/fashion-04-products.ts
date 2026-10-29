import type { Product } from '@/types/product';

/* ──────────────────────────────────────────────────────────────
   Fashion 04 product catalog — fully isolated from every other
   storefront. Slugs/ids are prefixed `f4-` so cart/wishlist/compare
   classify these items correctly (see src/utils/storefront.ts) and
   the shared Fashion product detail route resolves them via
   /api/fashion-04-products. Imagery comes only from /public/fashion-04/.
   ────────────────────────────────────────────────────────────── */

const IMAGE_BASE = '/fashion-04/products';

const ALL_IMAGES = Array.from({ length: 20 }, (_, i) => `${IMAGE_BASE}/products${i + 1}.png`);

function makeReviews(productId: string, productName: string) {
  return [
    {
      id: `${productId}-r-1`,
      author: 'Sophia M.',
      rating: 5,
      title: 'Absolutely love it',
      body: `${productName} fits beautifully and the fabric feels premium. It quickly became my go-to piece. Will definitely shop here again!`,
      date: '2025-12-01',
      verified: true,
    },
    {
      id: `${productId}-r-2`,
      author: 'Emma L.',
      rating: 4,
      title: 'Great quality',
      body: `Really impressed with ${productName}. True to size and the stitching is impeccable. Looks even better in person than in the photos.`,
      date: '2025-11-18',
      verified: true,
    },
    {
      id: `${productId}-r-3`,
      author: 'Olivia R.',
      rating: 5,
      title: 'My new favorite',
      body: `I've tried so many brands but ${productName} is hands down the best. Flattering cut, comfortable, and so easy to style.`,
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
  { name: 'Black', value: '#222222' },
  { name: 'White', value: '#f1f1f1' },
  { name: 'Blue', value: '#3b5bdb' },
  { name: 'Pink', value: '#e64980' },
  { name: 'Mint', value: '#69db7c' },
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
    vendor: 'Ambaz Studio',
    price,
    compareAtPrice,
    currency: 'USD',
    images: buildGallery(id, name, primaryIdx, secondaryIdx),
    variants,
    colors: COLOR_PALETTE.map((c) => ({ name: c.name, value: c.value, type: 'hex' as const })),
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category,
    tags,
    brand: 'Ambaz Fashion',
    availability: 'in-stock',
    badge,
    description: description || `${name} — a contemporary wardrobe essential cut from premium fabric with an effortless, flattering silhouette. Designed to take you from day to night with timeless ease.`,
    features: [
      'Premium breathable fabric',
      'Tailored, flattering fit',
      'Easy-care & durable',
      'Ethically made',
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

export const fashion04Products: Product[] = [
  // ── Featured Collection grid (indices 0–7, matches screenshot) ──
  base('f4-1', 'f4-statement-sequin-dress', 'Statement Sequin Dress', 45, null, 'Dresses', 0, 1, null, ['dress', 'sequin', 'evening', 'party']),
  base('f4-2', 'f4-bohemian-maxi-dress', 'Bohemian Maxi Dress', 55, 70, 'Dresses', 1, 2, 'sale', ['dress', 'maxi', 'boho', 'summer']),
  base('f4-3', 'f4-sophisticated-dress', 'Sophisticated Dress', 52, null, 'Dresses', 2, 3, null, ['dress', 'elegant', 'formal']),
  base('f4-4', 'f4-enchanted-forest-tulle-dress', 'Enchanted Forest Tulle Dress', 38, null, 'Dresses', 3, 4, null, ['dress', 'tulle', 'party']),
  base('f4-5', 'f4-casual-chambray-shirt', 'Casual Chambray Shirt', 40, 55, 'Tops', 4, 5, 'sale', ['shirt', 'chambray', 'casual', 'denim']),
  base('f4-6', 'f4-tailored-blazer-dress', 'Tailored Blazer Dress', 62, null, 'Formal Wear', 5, 6, null, ['blazer', 'dress', 'formal', 'office']),
  base('f4-7', 'f4-dreamy-dandelion-midi-dress', 'Dreamy Dandelion Midi Dress', 30, 60, 'Dresses', 6, 7, 'sale', ['dress', 'midi', 'floral']),
  base('f4-8', 'f4-sleek-skinny-jeans', 'Sleek Skinny Jeans', 58, null, 'Bottoms', 7, 8, null, ['jeans', 'denim', 'skinny', 'bottoms']),

  // ── Shop the look + Load More extras (indices 8–9 power Shop the look) ──
  base('f4-9', 'f4-black-silk-wrap-skirt', 'Black Silk Wrap Skirt', 58, null, 'Bottoms', 8, 9, null, ['skirt', 'silk', 'wrap', 'bottoms']),
  base('f4-10', 'f4-leather-moto-jacket', 'Leather Moto Jacket', 55, 70, 'Sweaters', 9, 10, 'sale', ['jacket', 'leather', 'moto', 'outerwear']),

  // ── Remaining catalog (indices 10–19) ──
  base('f4-11', 'f4-classic-wrap-dress', 'Classic Wrap Dress', 56, null, 'Dresses', 10, 11, 'new', ['dress', 'wrap', 'classic']),
  base('f4-12', 'f4-striking-metallic-dress', 'Striking Metallic Dress', 42, null, 'Dresses', 11, 12, null, ['dress', 'metallic', 'party']),
  base('f4-13', 'f4-satin-symphony-skirt', 'Satin Symphony Skirt', 62, null, 'Bottoms', 12, 13, null, ['skirt', 'satin', 'bottoms']),
  base('f4-14', 'f4-red-maxi-dress', 'Red Maxi Dress', 38, 52, 'Dresses', 13, 14, 'sale', ['dress', 'maxi', 'red']),
  base('f4-15', 'f4-knitted-turtleneck-sweater', 'Knitted Turtleneck Sweater', 48, null, 'Knit Wears', 14, 15, 'new', ['sweater', 'knit', 'turtleneck']),
  base('f4-16', 'f4-cropped-denim-jacket', 'Cropped Denim Jacket', 50, 64, 'Sweaters', 15, 16, 'sale', ['jacket', 'denim', 'cropped']),
  base('f4-17', 'f4-pleated-mini-skirt', 'Pleated Mini Skirt', 34, null, 'Bottoms', 16, 17, null, ['skirt', 'pleated', 'mini']),
  base('f4-18', 'f4-linen-summer-blouse', 'Linen Summer Blouse', 36, null, 'Tops', 17, 18, null, ['blouse', 'linen', 'summer', 'tops']),
  base('f4-19', 'f4-ribbed-knit-cardigan', 'Ribbed Knit Cardigan', 54, null, 'Knit Wears', 18, 19, 'new', ['cardigan', 'knit', 'ribbed']),
  base('f4-20', 'f4-elegant-evening-gown', 'Elegant Evening Gown', 88, 120, 'Formal Wear', 19, 0, 'sale', ['gown', 'evening', 'formal', 'luxury']),
];
