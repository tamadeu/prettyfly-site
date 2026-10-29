import type { Product } from '@/types/product';

const ALL_IMAGES = [
  '/car-accessories/products/products3.webp',
  '/car-accessories/products/products13.webp',
  '/car-accessories/products/products18.webp',
  '/car-accessories/products/products22.webp',
  '/car-accessories/products/products4.webp',
  '/car-accessories/products/products5.webp',
  '/car-accessories/products/products6.webp',
  '/car-accessories/products/products7.webp',
  '/car-accessories/products/products8.webp',
  '/car-accessories/products/products9.webp',
  '/car-accessories/products/products10.webp',
  '/car-accessories/products/products11.webp',
  '/car-accessories/products/products12.webp',
  '/car-accessories/products/products14.webp',
  '/car-accessories/products/products15.webp',
  '/car-accessories/products/products16.webp',
  '/car-accessories/products/products17.webp',
  '/car-accessories/products/products19.webp',
  '/car-accessories/products/products20.webp',
  '/car-accessories/products/products21.webp',
  '/car-accessories/products/products1.webp',
  '/car-accessories/products/products2.webp',
  '/car-accessories/products/products23.webp',
  '/car-accessories/products/products24.webp',
  '/car-accessories/products/products25.webp',
];

function makeReviews(productId: string, productName: string) {
  return [
    {
      id: `${productId}-r-1`,
      author: 'James K.',
      rating: 5,
      title: 'Exactly what I needed',
      body: `Installed ${productName} on my car and the difference is noticeable immediately. Great quality and fast shipping.`,
      date: '2025-11-20',
      verified: true,
    },
    {
      id: `${productId}-r-2`,
      author: 'Carlos M.',
      rating: 4,
      title: 'Solid build quality',
      body: `${productName} fits perfectly and feels durable. Instructions were clear and installation was straightforward.`,
      date: '2025-11-10',
      verified: true,
    },
    {
      id: `${productId}-r-3`,
      author: 'Sarah W.',
      rating: 5,
      title: 'Great value for money',
      body: `Really happy with ${productName}. Looks and performs just like OEM quality but at a much better price point.`,
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

const COLOR_PALETTE: { name: string; value: string }[] = [
  { name: 'Black', value: '#1a1a1a' },
  { name: 'Silver', value: '#c0c0c0' },
  { name: 'Red', value: '#c0392b' },
  { name: 'Blue', value: '#2980b9' },
  { name: 'Gray', value: '#7f8c8d' },
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
    vendor: 'Ambaz Auto',
    price,
    compareAtPrice,
    currency: 'USD',
    images: buildGallery(id, name, primaryIdx, secondaryIdx),
    variants,
    colors: COLOR_PALETTE.map((c) => ({ name: c.name, value: c.value, type: 'hex' as const })),
    sizes: [],
    category,
    tags,
    brand: 'AutoPro',
    availability: 'in-stock',
    badge,
    description: description || `${name} — premium quality automotive part engineered for performance and reliability. Compatible with most popular vehicle models.`,
    features: ['OEM-grade materials', 'Easy installation', 'Corrosion-resistant finish', 'Backed by 1-year warranty'],
    rating: 4.5,
    reviewCount: 28,
    reviews: makeReviews(id, name),
    relatedProducts: [],
    pairsWellWith: [],
    createdAt: '2025-09-01T00:00:00Z',
    sku: id.toUpperCase(),
    countdownEnd: null,
  };
}

export const carAccessoriesProducts: Product[] = [
  // Accessories (7 here + 1 below = 8)
  base('ca-1', 'edge-audio-speakers', 'Edge Audio Speakers', 370, null, 'Accessories', 0, 1, null, ['speakers', 'audio', 'car audio']),
  base('ca-2', 'powerbass-coaxial', 'Powerbass L-Series Coaxial', 260, null, 'Accessories', 1, 2, null, ['speakers', 'coaxial', 'audio']),
  base('ca-3', 'car-clipart-headlight', 'Car Clipart Headlight', 55, 120, 'Accessories', 2, 3, 'sale', ['headlight', 'lighting', 'exterior']),
  base('ca-4', 'car-floor-mats-set', 'Car Floor Mats Set', 85, null, 'Accessories', 3, 4, 'new', ['floor mats', 'interior', 'protection']),
  base('ca-5', 'steering-wheel-cover', 'Steering Wheel Cover', 45, 60, 'Accessories', 4, 5, 'sale', ['steering wheel', 'interior', 'grip']),
  base('ca-6', 'car-seat-covers-pair', 'Car Seat Covers Pair', 120, null, 'Accessories', 5, 6, null, ['seat covers', 'interior', 'protection']),
  base('ca-7', 'roof-rack-crossbars', 'Roof Rack Crossbars', 195, 240, 'Accessories', 6, 7, 'sale', ['roof rack', 'exterior', 'cargo']),

  // Wheels (5 here + 3 below = 8)
  base('ca-8', 'snow-lion-tyre', 'Snow Lion Tyre', 220, null, 'Wheels', 7, 8, null, ['tyre', 'winter', 'all-season']),
  base('ca-9', 'car-rim-wheel', 'Car Rim Wheel', 560, null, 'Wheels', 8, 9, null, ['rim', 'alloy', 'wheel']),
  base('ca-10', 'skf-wheel-bearing', 'SKF Wheel Bearing', 250, null, 'Wheels', 9, 10, null, ['bearing', 'wheel hub', 'drivetrain']),
  base('ca-11', 'sport-alloy-rim-18', 'Sport Alloy Rim 18"', 380, 440, 'Wheels', 10, 11, 'sale', ['alloy rim', '18 inch', 'sport']),
  base('ca-12', 'tire-pressure-gauge', 'Tire Pressure Gauge', 35, null, 'Wheels', 11, 12, 'new', ['pressure gauge', 'maintenance', 'tool']),

  // Auto Parts (7 here + 1 below = 8)
  base('ca-13', 'speedmaster-fan', 'Speedmaster Fan', 280, 250, 'Auto Parts', 12, 13, 'sale', ['cooling fan', 'engine', 'cooling']),
  base('ca-14', 'ortlinghaus-clutch', 'Ortlinghaus Clutch', 450, 260, 'Auto Parts', 13, 14, 'sale', ['clutch', 'transmission', 'drivetrain']),
  base('ca-15', 'auto-battery-black', 'Auto Battery Black', 550, null, 'Auto Parts', 14, 15, null, ['battery', 'electrical', 'starter']),
  base('ca-16', 'motorcycle-engine-cleaner', 'Engine Cleaner Pro', 180, 170, 'Auto Parts', 15, 16, 'sale', ['engine cleaner', 'maintenance', 'degreaser']),
  base('ca-17', 'high-flow-air-filter', 'High Flow Air Filter', 95, null, 'Auto Parts', 16, 17, 'new', ['air filter', 'engine', 'performance']),
  base('ca-18', 'performance-exhaust-tip', 'Performance Exhaust Tip', 145, 180, 'Auto Parts', 17, 18, 'sale', ['exhaust', 'performance', 'exterior']),
  base('ca-19', 'fuel-injector-set', 'Fuel Injector Set', 320, null, 'Auto Parts', 18, 19, null, ['fuel injector', 'engine', 'fuel system']),

  // Brakes (8)
  base('ca-20', 'automobile-brake-disk', 'Automobile Brake Disk', 300, 340, 'Brakes', 19, 20, 'sale', ['brake disk', 'brakes', 'safety']),
  base('ca-21', 'eos-brake-discs', 'Eos Brake Discs', 450, null, 'Brakes', 20, 21, null, ['brake discs', 'performance', 'safety']),
  base('ca-22', 'brembo-brake-pads', 'Brembo Brake Pads', 185, 220, 'Brakes', 21, 22, 'sale', ['brake pads', 'brembo', 'performance']),
  base('ca-23', 'ceramic-brake-kit', 'Ceramic Brake Kit', 275, null, 'Brakes', 22, 23, 'new', ['ceramic', 'brake kit', 'low dust']),
  base('ca-24', 'stainless-brake-lines', 'Stainless Brake Lines', 130, 160, 'Brakes', 23, 24, 'sale', ['brake lines', 'stainless', 'upgrade']),
  base('ca-25', 'brake-caliper-cover', 'Brake Caliper Cover', 95, null, 'Brakes', 24, 0, null, ['caliper cover', 'cosmetic', 'brake']),
  base('ca-31', 'brake-fluid-dot4', 'Brake Fluid DOT4 1L', 28, null, 'Brakes', 1, 2, 'new', ['brake fluid', 'maintenance', 'safety']),
  base('ca-32', 'abs-sensor-front', 'ABS Sensor Front', 115, 140, 'Brakes', 3, 4, 'sale', ['abs sensor', 'safety', 'electrical']),

  // Accessories (8)
  base('ca-26', 'dash-cam-hd', 'Dash Cam HD 4K', 150, 190, 'Accessories', 8, 9, 'sale', ['dash cam', 'camera', 'safety']),

  // Wheels (8)
  base('ca-27', 'wheel-center-caps', 'Wheel Center Caps Set', 65, null, 'Wheels', 12, 13, null, ['center caps', 'wheel', 'cosmetic']),
  base('ca-28', 'chrome-lug-nut-set', 'Chrome Lug Nut Set', 48, 65, 'Wheels', 13, 14, 'sale', ['lug nuts', 'chrome', 'wheel']),
  base('ca-29', 'wheel-spacers-pair', 'Wheel Spacers 5mm Pair', 95, null, 'Wheels', 14, 15, 'new', ['wheel spacers', 'fitment', 'upgrade']),

  // Auto Parts (8)
  base('ca-30', 'spark-plug-set', 'Iridium Spark Plug Set', 85, null, 'Auto Parts', 19, 20, 'new', ['spark plugs', 'ignition', 'engine']),
];
