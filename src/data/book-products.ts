import type { Product } from '@/types/product';

/* ──────────────────────────────────────────────────────────────
   Book product catalog — fully isolated from every other
   storefront. Slugs/ids are prefixed `bk-` so cart/wishlist/compare
   classify these items correctly (see src/utils/storefront.ts) and
   the shared Fashion product detail route resolves them via
   /api/book-products. Imagery comes only from /public/book/products/.

   Four categories back the Featured Products tabs on the homepage:
   "Featured", "New Arrivals", "Bestsellers", "Popular".
   ────────────────────────────────────────────────────────────── */

const IMAGE_BASE = '/book/products';

const ALL_IMAGES = Array.from({ length: 8 }, (_, i) => `${IMAGE_BASE}/product-${i + 1}.webp`);

/* Cover-tone swatch palette. A product's `colorCount` picks the first N of these,
   which drives the "+N" chip on the card (shows N-3 when N > 3). */
const COLOR_PALETTE: { name: string; value: string }[] = [
  { name: 'Charcoal', value: '#3a3a3a' },
  { name: 'Ivory', value: '#f2ede3' },
  { name: 'Amber', value: '#f5c518' },
  { name: 'Coral', value: '#f36f6f' },
  { name: 'Teal', value: '#2ba6a4' },
  { name: 'Navy', value: '#26324a' },
];

function makeReviews(productId: string, productName: string) {
  return [
    {
      id: `${productId}-r-1`,
      author: 'Amelia R.',
      rating: 5,
      title: 'A gorgeous edition',
      body: `${productName} arrived in perfect condition — the print quality and binding are excellent. A beautiful read from cover to cover.`,
      date: '2025-12-02',
      verified: true,
    },
    {
      id: `${productId}-r-2`,
      author: 'Daniel K.',
      rating: 4,
      title: 'Great value',
      body: `Really enjoyed ${productName}. Well written, nicely bound and shipped quickly. Would happily buy from this store again.`,
      date: '2025-11-20',
      verified: true,
    },
    {
      id: `${productId}-r-3`,
      author: 'Sofia M.',
      rating: 5,
      title: 'Could not put it down',
      body: `${productName} is now one of my favourites. The cover looks stunning on my shelf and the story kept me hooked.`,
      date: '2025-11-08',
      verified: true,
    },
  ];
}

function buildGallery(productId: string, name: string, primaryIdx: number, secondaryIdx: number) {
  const order: number[] = [];
  const used = new Set<number>();
  order.push(primaryIdx); used.add(primaryIdx);
  if (!used.has(secondaryIdx)) { order.push(secondaryIdx); used.add(secondaryIdx); }
  for (let i = 0; i < ALL_IMAGES.length && order.length < 5; i++) {
    if (!used.has(i)) { order.push(i); used.add(i); }
  }
  return order.map((idx, i) => ({
    id: `${productId}-img-${i + 1}`,
    src: ALL_IMAGES[idx],
    alt: `${name} view ${i + 1}`,
  }));
}

type Badge = 'sale' | 'new' | 'pre-order' | null;

function base(
  id: string,
  slug: string,
  name: string,
  price: number,
  compareAtPrice: number | null,
  category: string,
  primaryIdx: number,
  secondaryIdx: number,
  colorCount: number,
  badge: Badge = null,
  tags: string[] = [],
  countdownEnd: string | null = null,
  description = '',
): Product {
  const palette = COLOR_PALETTE.slice(0, Math.max(1, Math.min(colorCount, COLOR_PALETTE.length)));

  const variants = palette.map((c, i) => ({
    id: `${id}-v-${i + 1}`,
    color: c.name,
    size: 'One Size',
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
    vendor: 'HookTheme Press',
    price,
    compareAtPrice,
    currency: 'USD',
    images: buildGallery(id, name, primaryIdx, secondaryIdx),
    variants,
    colors: palette.map((c) => ({ name: c.name, value: c.value, type: 'hex' as const })),
    sizes: ['One Size'],
    category,
    tags,
    brand: 'HookTheme',
    availability: 'in-stock',
    badge,
    description: description || `${name} — a beautifully produced edition with a durable hardcover binding and crisp, archival-quality printing. A perfect addition to any bookshelf and a thoughtful gift for the reader in your life.`,
    features: [
      'Premium hardcover binding',
      'Archival-quality printing',
      'Acid-free, long-life paper',
      'Ribbon bookmark included',
    ],
    rating: 4.8,
    reviewCount: 41,
    reviews: makeReviews(id, name),
    relatedProducts: [],
    pairsWellWith: [],
    createdAt: '2025-10-01T00:00:00Z',
    sku: id.toUpperCase(),
    countdownEnd,
  };
}

/* ── Tab 1 — "Featured" (the 8-product grid, screenshot order) ── */
const featured: Product[] = [
  base('bk-1', 'bk-book-archives-fitness', 'Book Archives – Fitness', 38, null, 'Featured', 5, 0, 6, null, ['fitness', 'guide']),
  base('bk-2', 'bk-fancy-shmancy-notes', 'Fancy Shmancy Notes', 26, null, 'Featured', 0, 1, 6, null, ['notes', 'journal']),
  base('bk-3', 'bk-book-children-book', 'Book Children Book', 22, 26, 'Featured', 2, 3, 6, 'sale', ['children', 'picture']),
  base('bk-4', 'bk-braille-book-indoors', 'Braille book indoors', 30, null, 'Featured', 1, 2, 6, null, ['braille', 'accessible']),
  base('bk-5', 'bk-book-motion-array', 'Book Motion Array', 30, null, 'Featured', 4, 5, 6, null, ['design', 'motion']),
  base('bk-6', 'bk-stream-infinite-illusion', 'Stream Infinite illusion', 15, 22, 'Featured', 6, 7, 6, 'sale', ['fiction', 'illusion']),
  base('bk-7', 'bk-crimson-cipher-book', 'Crimson Cipher book', 20, null, 'Featured', 3, 4, 6, null, ['mystery', 'thriller']),
  base('bk-8', 'bk-reads-design-book', 'Reads Design Book', 17, 24, 'Featured', 7, 0, 6, 'sale', ['design', 'hardcover']),
];

/* ── Tab 2 — "New Arrivals" ── */
const newArrivals: Product[] = [
  base('bk-9', 'bk-midnight-and-moon', 'Midnight and Moon', 28, null, 'New Arrivals', 0, 6, 5, 'new', ['fiction', 'new']),
  base('bk-10', 'bk-create-your-own-business', 'Create Your Own Business', 34, null, 'New Arrivals', 1, 2, 5, 'new', ['business', 'new']),
  base('bk-11', 'bk-looks-good-on-paper', 'Looks Good on Paper', 21, 28, 'New Arrivals', 3, 4, 5, 'sale', ['romance', 'new']),
  base('bk-12', 'bk-roses-and-flame', 'Roses and Flame', 24, null, 'New Arrivals', 6, 7, 5, 'new', ['poetry', 'new']),
];

/* ── Tab 3 — "Bestsellers" ── */
const bestsellers: Product[] = [
  base('bk-13', 'bk-happy-teachers-day', 'Happy Teachers Day', 19, null, 'Bestsellers', 4, 5, 4, null, ['gift', 'bestseller']),
  base('bk-14', 'bk-lorem-ipsum-tales', 'Lorem Ipsum Tales', 23, 30, 'Bestsellers', 2, 3, 4, 'sale', ['tales', 'bestseller']),
  base('bk-15', 'bk-the-ultimate-guide', 'The Ultimate Guide', 38, null, 'Bestsellers', 5, 0, 4, null, ['guide', 'bestseller']),
  base('bk-16', 'bk-book-mockup-hardcover', 'Book Mockup Hardcover', 27, null, 'Bestsellers', 7, 1, 4, null, ['hardcover', 'bestseller']),
];

/* ── Tab 4 — "Popular" ── */
const popular: Product[] = [
  base('bk-17', 'bk-silhouette-nights', 'Silhouette Nights', 25, null, 'Popular', 0, 3, 5, null, ['fiction', 'popular']),
  base('bk-18', 'bk-paper-planes', 'Paper Planes', 18, 24, 'Popular', 2, 6, 5, 'sale', ['fiction', 'popular']),
  base('bk-19', 'bk-business-mindset', 'Business Mindset', 32, null, 'Popular', 1, 5, 5, null, ['business', 'popular']),
  base('bk-20', 'bk-fitness-for-all', 'Fitness For All', 29, null, 'Popular', 5, 7, 5, null, ['fitness', 'popular']),
];

export const bookProducts: Product[] = [
  ...featured,
  ...newArrivals,
  ...bestsellers,
  ...popular,
];

/* Category labels backing the Featured Products tabs, in display order. */
export const BOOK_FEATURED_TABS = ['Featured', 'New Arrivals', 'Bestsellers', 'Popular'] as const;
