import { NextRequest, NextResponse } from 'next/server';
import productsData from '@/data/products.json';
import type { Product } from '@/types/product';

const allProducts: Product[] = productsData as Product[];

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('q') || '';

  if (!query.trim()) {
    // Return popular/most searched products when no query
    const popular = allProducts
      .slice()
      .sort((a, b) => b.reviewCount - a.reviewCount)
      .slice(0, 6);

    return NextResponse.json({
      products: popular,
      suggestions: [],
    });
  }

  const q = query.toLowerCase();

  const results = allProducts
    .filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q)
    )
    .slice(0, 6);

  // Generate suggestions from matching product names and tags
  const suggestions = Array.from(
    new Set(
      results
        .flatMap((p) => [p.name, ...p.tags])
        .filter((s) => s.toLowerCase().includes(q))
    )
  ).slice(0, 5);

  return NextResponse.json({ products: results, suggestions });
}
