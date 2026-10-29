import { NextRequest, NextResponse } from 'next/server';
import { lipstainProducts } from '@/data/lipstain-products';

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get('q') ?? '';
  const query = q.toLowerCase().trim();

  if (!query) {
    return NextResponse.json({ products: [], total: 0 });
  }

  const results = lipstainProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(query) ||
      p.tags.some((t) => t.toLowerCase().includes(query)) ||
      p.category.toLowerCase().includes(query) ||
      p.brand.toLowerCase().includes(query)
  );

  return NextResponse.json({ products: results.slice(0, 12), total: results.length });
}
