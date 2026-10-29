import type { Product } from '@/types/product';

const IMAGE_BASE = '/boutique-fashion/products';

const ALL_IMAGES = [
  `${IMAGE_BASE}/products1.png`,
  `${IMAGE_BASE}/products2.png`,
  `${IMAGE_BASE}/products3.png`,
  `${IMAGE_BASE}/products4.png`,
  `${IMAGE_BASE}/products5.png`,
  `${IMAGE_BASE}/products6.png`,
  `${IMAGE_BASE}/products7.png`,
  `${IMAGE_BASE}/products8.png`,
  `${IMAGE_BASE}/products9.png`,
  `${IMAGE_BASE}/products10.png`,
  `${IMAGE_BASE}/products11.png`,
  `${IMAGE_BASE}/products12.png`,
  `${IMAGE_BASE}/products13.png`,
  `${IMAGE_BASE}/products14.png`,
  `${IMAGE_BASE}/products15.png`,
  `${IMAGE_BASE}/products16.png`,
  `${IMAGE_BASE}/products17.png`,
  `${IMAGE_BASE}/products18.png`,
  `${IMAGE_BASE}/products19.png`,
  `${IMAGE_BASE}/products20.png`,
];

function makeReviews(productId: string, productName: string) {
  return [
    {
      id: `${productId}-r-1`,
      author: 'Sophie K.',
      rating: 5,
      title: 'Absolutely love this piece',
      body: `${productName} fits perfectly and the quality is outstanding. I've received so many compliments wearing it. Will definitely order again!`,
      date: '2025-12-10',
      verified: true,
    },
    {
      id: `${productId}-r-2`,
      author: 'Emma T.',
      rating: 4,
      title: 'Great addition to my wardrobe',
      body: `Really happy with ${productName}. The fabric is high quality and it holds its shape well after washing. True to size.`,
      date: '2025-11-25',
      verified: true,
    },
    {
      id: `${productId}-r-3`,
      author: 'Olivia M.',
      rating: 5,
      title: 'Perfect for any occasion',
      body: `I bought ${productName} for a special event and ended up wearing it multiple times. It's so versatile and looks expensive.`,
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
  { name: 'Black', value: '#1a1a1a' },
  { name: 'White', value: '#f5f5f0' },
  { name: 'Navy', value: '#2c3e6b' },
];

const COLOR_PALETTE_EXT: { name: string; value: string }[] = [
  { name: 'Black', value: '#1a1a1a' },
  { name: 'White', value: '#f5f5f0' },
  { name: 'Beige', value: '#d4b896' },
];

const COLOR_PALETTE_WARM: { name: string; value: string }[] = [
  { name: 'Brown', value: '#7b5c3a' },
  { name: 'Cream', value: '#f0e8d8' },
  { name: 'Olive', value: '#6b6b3a' },
];

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
  palette = COLOR_PALETTE,
  sizes = ['XS', 'S', 'M', 'L', 'XL'],
  description = '',
): Product {
  const variants = palette.map((c, i) => ({
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
    images: buildGallery(id, name, primaryIdx),
    variants,
    colors: palette.map((c) => ({ name: c.name, value: c.value, type: 'hex' as const })),
    sizes,
    category,
    tags,
    brand: 'Boutique Fashion',
    availability: 'in-stock',
    badge,
    description: description || `${name} — a timeless boutique piece crafted with premium fabrics and exquisite attention to detail. Designed to elevate your everyday wardrobe with effortless sophistication.`,
    features: [
      'Premium fabric construction',
      'True-to-size fit',
      'Machine washable',
      'Sustainably sourced materials',
    ],
    rating: 4.8,
    reviewCount: 36,
    reviews: makeReviews(id, name),
    relatedProducts: [],
    pairsWellWith: [],
    createdAt: '2025-11-01T00:00:00Z',
    sku: id.toUpperCase(),
    countdownEnd: null,
    collections: [category],
  };
}

export const boutiqueProducts: Product[] = [
  // Tops
  base('bf-1',  'bf-leather-moto-jacket',          'Leather Moto Jacket',          55, 70, 'Tops',  0, 'sale', ['jacket', 'leather', 'tops', 'outerwear'], COLOR_PALETTE),
  base('bf-2',  'bf-chiffon-maxi-dress',            'Chiffon Maxi Dress',            28, 46, 'Women', 1, 'sale', ['dress', 'maxi', 'chiffon', 'women'], COLOR_PALETTE_EXT),
  base('bf-3',  'bf-dreamy-dandelion-midi-dress',   'Dreamy Dandelion Midi Dress',   30, 66, 'Women', 2, 'sale', ['dress', 'midi', 'women', 'floral'], COLOR_PALETTE),
  base('bf-4',  'bf-effortless-slip-dress',         'Effortless Slip Dress',          45, 57, 'Women', 3, 'sale', ['dress', 'slip', 'women', 'elegant'], COLOR_PALETTE_EXT),
  base('bf-5',  'bf-enchanted-tulle-dress',         'Enchanted Forest Tulle Dress',  38, null,'Women', 4, null,   ['dress', 'tulle', 'women', 'formal'], COLOR_PALETTE_WARM),
  base('bf-6',  'bf-silk-symphony-slip-dress',      'Silk Symphony Slip Dress',      68, null,'Women', 5, null,   ['dress', 'silk', 'slip', 'women'], COLOR_PALETTE),
  base('bf-7',  'bf-sleek-skinny-jeans',            'Sleek Skinny Jeans',            58, null,'Women', 6, null,   ['jeans', 'denim', 'skinny', 'women'], COLOR_PALETTE),
  base('bf-8',  'bf-sophisticated-dress',           'Sophisticated Dress',           52, null,'Women', 7, null,   ['dress', 'women', 'elegant', 'formal'], COLOR_PALETTE_EXT),
  // Tops (continued)
  base('bf-9',  'bf-classic-tweed-skirt',           'Classic Tweed Skirt',           67, null,'Women', 8, null,   ['skirt', 'tweed', 'women', 'classic'], COLOR_PALETTE_WARM),
  base('bf-10', 'bf-red-maxi-dress',                'Red Maxi Dress',                38, 62, 'Women', 9, 'sale', ['dress', 'maxi', 'red', 'women'], COLOR_PALETTE),
  base('bf-11', 'bf-stripe-linen-blazer',           'Stripe Linen Blazer',           72, null,'Tops',  10,'new',  ['blazer', 'linen', 'tops', 'stripe'], COLOR_PALETTE_EXT),
  base('bf-12', 'bf-cropped-cotton-tee',            'Cropped Cotton Tee',            28, null,'Tops',  11,'new',  ['top', 'cotton', 'crop', 'casual'], COLOR_PALETTE),
  base('bf-13', 'bf-floral-wrap-top',               'Floral Wrap Top',               34, 48, 'Tops',  12,'sale', ['top', 'floral', 'wrap', 'women'], COLOR_PALETTE_WARM),
  base('bf-14', 'bf-oversized-knit-sweater',        'Oversized Knit Sweater',        55, null,'Tops',  13, null,  ['sweater', 'knit', 'oversized', 'cozy'], COLOR_PALETTE_EXT),
  // Men
  base('bf-15', 'bf-slim-fit-chinos',               'Slim Fit Chinos',               62, null,'Men',   14, null,  ['pants', 'chinos', 'men', 'slim'], COLOR_PALETTE_WARM, ['S', 'M', 'L', 'XL', '2XL']),
  base('bf-16', 'bf-classic-oxford-shirt',          'Classic Oxford Shirt',          48, 65, 'Men',   15,'sale', ['shirt', 'oxford', 'men', 'classic'], COLOR_PALETTE, ['S', 'M', 'L', 'XL', '2XL']),
  base('bf-17', 'bf-structured-blazer',             'Structured Blazer',             95, null,'Men',   16,'new',  ['blazer', 'men', 'formal', 'structured'], COLOR_PALETTE, ['S', 'M', 'L', 'XL']),
  // Shoes
  base('bf-18', 'bf-leather-ankle-boots',           'Leather Ankle Boots',           89, 120,'Shoes', 17,'sale', ['shoes', 'boots', 'leather', 'ankle'], COLOR_PALETTE_WARM, ['36', '37', '38', '39', '40', '41']),
  base('bf-19', 'bf-classic-white-sneakers',        'Classic White Sneakers',        65, null,'Shoes', 18,'new',  ['shoes', 'sneakers', 'white', 'casual'], COLOR_PALETTE_EXT, ['36', '37', '38', '39', '40', '41']),
  base('bf-20', 'bf-strappy-heeled-sandals',        'Strappy Heeled Sandals',        78, 95, 'Shoes', 19,'sale', ['shoes', 'heels', 'sandals', 'strappy'], COLOR_PALETTE, ['36', '37', '38', '39', '40', '41']),
];
