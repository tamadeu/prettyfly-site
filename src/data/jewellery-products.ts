import type { Product } from '@/types/product';

const IMAGE_BASE = '/jewelry/products';

const ALL_IMAGES = [
  `${IMAGE_BASE}/products1.webp`,
  `${IMAGE_BASE}/products8.webp`,
  `${IMAGE_BASE}/products9.webp`,
  `${IMAGE_BASE}/products10.webp`,
  `${IMAGE_BASE}/products11.webp`,
  `${IMAGE_BASE}/products12.webp`,
  `${IMAGE_BASE}/products12.webp`,
  `${IMAGE_BASE}/products13.webp`,
  `${IMAGE_BASE}/products2.webp`,
  `${IMAGE_BASE}/products3.webp`,
  `${IMAGE_BASE}/products4.webp`,
  `${IMAGE_BASE}/products5.webp`,
  `${IMAGE_BASE}/products6.webp`,
  `${IMAGE_BASE}/products7.webp`,
  `${IMAGE_BASE}/products7.webp`,
];

function makeReviews(productId: string, productName: string) {
  return [
    {
      id: `${productId}-r-1`,
      author: 'Sarah M.',
      rating: 5,
      title: 'Absolutely stunning',
      body: `${productName} exceeded all expectations. The craftsmanship is exquisite and it arrived beautifully packaged. I've received so many compliments!`,
      date: '2025-12-05',
      verified: true,
    },
    {
      id: `${productId}-r-2`,
      author: 'Emma K.',
      rating: 5,
      title: 'Perfect gift',
      body: `Bought ${productName} as a gift and it was a huge hit. The quality is exceptional — it looks far more expensive than it is.`,
      date: '2025-11-22',
      verified: true,
    },
    {
      id: `${productId}-r-3`,
      author: 'Priya R.',
      rating: 4,
      title: 'Great quality',
      body: `Really happy with ${productName}. Beautiful piece, exactly as shown. Delivery was fast and packaging was lovely.`,
      date: '2025-11-10',
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

const METAL_PALETTE: { name: string; value: string }[] = [
  { name: 'Gold', value: '#c9a96e' },
  { name: 'Silver', value: '#c0c0c0' },
  { name: 'Rose Gold', value: '#b76e79' },
  { name: 'Platinum', value: '#e5e4e2' },
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
  const variants = METAL_PALETTE.map((c, i) => ({
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
    vendor: 'Ambaz Jewellery',
    price,
    compareAtPrice,
    currency: 'USD',
    images: buildGallery(id, name, primaryIdx, secondaryIdx),
    variants,
    colors: METAL_PALETTE.map((c) => ({ name: c.name, value: c.value, type: 'hex' as const })),
    sizes: [],
    category,
    tags,
    brand: 'Ambaz Fine Jewellery',
    availability: 'in-stock',
    badge,
    description: description || `${name} — a timeless piece crafted with exceptional attention to detail. Each item is handfinished and designed to be treasured for generations.`,
    features: [
      'Hallmarked precious metal',
      'Conflict-free gemstones',
      'Lifetime craftsmanship guarantee',
      'Gift-ready packaging included',
    ],
    rating: 4.8,
    reviewCount: 36,
    reviews: makeReviews(id, name),
    relatedProducts: [],
    pairsWellWith: [],
    createdAt: '2025-11-01T00:00:00Z',
    sku: id.toUpperCase(),
    countdownEnd: null,
  };
}

export const jewelleryProducts: Product[] = [
  base('jw-1', 'jw-diamond-solitaire-ring', 'Diamond Solitaire Ring', 299, null, 'Rings', 0, 3, 'new', ['ring', 'diamond', 'solitaire', 'engagement']),
  base('jw-2', 'jw-gold-chain-necklace', 'Gold Chain Necklace', 185, 240, 'Necklaces', 1, 4, 'sale', ['necklace', 'gold', 'chain', 'everyday']),
  base('jw-3', 'jw-pearl-drop-earrings', 'Pearl Drop Earrings', 120, null, 'Earrings', 2, 5, null, ['earrings', 'pearl', 'drop', 'elegant']),
  base('jw-4', 'jw-silver-charm-bracelet', 'Silver Charm Bracelet', 95, null, 'Bracelets', 3, 6, null, ['bracelet', 'silver', 'charm', 'layering']),
  base('jw-5', 'jw-rose-gold-hoop-earrings', 'Rose Gold Hoop Earrings', 88, 115, 'Earrings', 4, 7, 'sale', ['earrings', 'rose gold', 'hoops', 'everyday']),
  base('jw-6', 'jw-diamond-pendant-necklace', 'Diamond Pendant Necklace', 340, null, 'Necklaces', 5, 8, null, ['necklace', 'diamond', 'pendant', 'fine']),
  base('jw-7', 'jw-gemstone-cocktail-ring', 'Gemstone Cocktail Ring', 210, 265, 'Rings', 7, 0, 'sale', ['ring', 'gemstone', 'cocktail', 'statement']),
  base('jw-8', 'jw-gold-bangle-bracelet', 'Gold Bangle Bracelet', 145, null, 'Bracelets', 8, 1, 'new', ['bracelet', 'bangle', 'gold', 'stacking']),
  base('jw-9', 'jw-crystal-stud-earrings', 'Crystal Stud Earrings', 72, null, 'Earrings', 9, 2, null, ['earrings', 'crystal', 'studs', 'classic']),
  base('jw-10', 'jw-vintage-locket-necklace', 'Vintage Locket Necklace', 158, null, 'Necklaces', 10, 3, null, ['necklace', 'locket', 'vintage', 'heirloom']),
  base('jw-11', 'jw-emerald-statement-ring', 'Emerald Statement Ring', 385, 450, 'Rings', 11, 4, 'sale', ['ring', 'emerald', 'statement', 'luxury']),
  base('jw-12', 'jw-tennis-bracelet', 'Diamond Tennis Bracelet', 520, null, 'Bracelets', 12, 5, null, ['bracelet', 'diamond', 'tennis', 'luxury']),
  base('jw-13', 'jw-pearl-strand-necklace', 'Pearl Strand Necklace', 195, 250, 'Necklaces', 13, 6, 'sale', ['necklace', 'pearl', 'strand', 'classic']),
];
