import { NextRequest, NextResponse } from 'next/server';
import { fashion03Products } from '@/data/fashion-03-products';

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('q') || '';

  if (!query.trim()) {
    const popular = fashion03Products
      .slice()
      .sort((a, b) => b.reviewCount - a.reviewCount)
      .slice(0, 6);

    return NextResponse.json({
      products: popular,
      suggestions: [],
    });
  }

  const q = query.toLowerCase();

  const results = fashion03Products
    .filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q)
    )
    .slice(0, 6);

  const suggestions = Array.from(
    new Set(
      results
        .flatMap((p) => [p.name, ...p.tags])
        .filter((s) => s.toLowerCase().includes(q))
    )
  ).slice(0, 5);

  return NextResponse.json({ products: results, suggestions });
}
