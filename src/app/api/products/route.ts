import { NextRequest, NextResponse } from 'next/server';
import productsData from '@/data/products.json';
import type { Product } from '@/types/product';

const allProducts: Product[] = productsData as Product[];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '12');
  const category = searchParams.get('category');
  const collection = searchParams.get('collection');
  const brand = searchParams.get('brand');
  const color = searchParams.get('color');
  const size = searchParams.get('size');
  const minPrice = searchParams.get('minPrice') ? parseFloat(searchParams.get('minPrice')!) : undefined;
  const maxPrice = searchParams.get('maxPrice') ? parseFloat(searchParams.get('maxPrice')!) : undefined;
  const sort = searchParams.get('sort') || 'featured';
  const availability = searchParams.get('availability');
  const query = searchParams.get('q');

  let filtered = [...allProducts];

  // Search
  if (query) {
    const q = query.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q)
    );
  }

  // Filter by category
  if (category) {
    filtered = filtered.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  }

  // Filter by collection slug
  if (collection) {
    filtered = filtered.filter((p) => p.collections?.includes(collection) ?? false);
  }

  // Filter by brand
  if (brand) {
    filtered = filtered.filter((p) => p.brand.toLowerCase() === brand.toLowerCase());
  }

  // Filter by color
  if (color) {
    filtered = filtered.filter((p) =>
      p.colors.some((c) => c.name.toLowerCase() === color.toLowerCase())
    );
  }

  // Filter by size
  if (size) {
    filtered = filtered.filter((p) =>
      p.sizes.some((s) => s.toLowerCase() === size.toLowerCase())
    );
  }

  // Filter by price range
  if (minPrice !== undefined) {
    filtered = filtered.filter((p) => p.price >= minPrice);
  }
  if (maxPrice !== undefined) {
    filtered = filtered.filter((p) => p.price <= maxPrice);
  }

  // Filter by availability
  if (availability) {
    filtered = filtered.filter((p) => p.availability === availability);
  }

  // Build filter counts from the FULL dataset (before pagination)
  const categories = buildFilterCounts(allProducts, 'category');
  const brands = buildFilterCounts(allProducts, 'brand');
  const colors = buildColorCounts(allProducts);
  const sizes = buildSizeCounts(allProducts);
  const prices = allProducts.map((p) => p.price);
  const priceRange = prices.length
    ? { min: Math.min(...prices), max: Math.max(...prices) }
    : { min: 0, max: 0 };

  // Sort
  switch (sort) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'name-asc':
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      filtered.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'newest':
    case 'date-asc':
      filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      break;
    case 'best-selling':
      filtered.sort((a, b) => b.reviewCount - a.reviewCount);
      break;
    default:
      break;
  }

  // Paginate
  const totalProducts = filtered.length;
  const totalPages = Math.ceil(totalProducts / limit);
  const startIndex = (page - 1) * limit;
  const paginated = filtered.slice(startIndex, startIndex + limit);

  return NextResponse.json({
    products: paginated,
    pagination: {
      currentPage: page,
      totalPages,
      totalProducts,
      hasNext: page < totalPages,
      hasPrev: page > 1,
    },
    filters: {
      categories,
      brands,
      colors,
      sizes,
      priceRange,
    },
  });
}

function buildFilterCounts(products: Product[], field: keyof Product) {
  const counts: Record<string, number> = {};
  products.forEach((p) => {
    const value = p[field] as string;
    if (!value) return;
    counts[value] = (counts[value] || 0) + 1;
  });
  return Object.entries(counts).map(([name, count]) => ({ name, count }));
}

function buildColorCounts(products: Product[]) {
  const counts: Record<string, number> = {};
  products.forEach((p) => {
    p.colors.forEach((c) => {
      counts[c.name] = (counts[c.name] || 0) + 1;
    });
  });
  return Object.entries(counts).map(([name, count]) => ({ name, count }));
}

function buildSizeCounts(products: Product[]) {
  const counts: Record<string, number> = {};
  products.forEach((p) => {
    p.sizes.forEach((s) => {
      counts[s] = (counts[s] || 0) + 1;
    });
  });
  return Object.entries(counts).map(([name, count]) => ({ name, count }));
}
