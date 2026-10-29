import { NextRequest, NextResponse } from 'next/server';
import { smartWatchesProducts } from '@/data/smart-watches-products';

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('q') ?? '';
  const q = query.toLowerCase().trim();

  if (!q) {
    return NextResponse.json({ products: [], total: 0 });
  }

  const results = smartWatchesProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)) ||
      p.brand.toLowerCase().includes(q)
  );

  return NextResponse.json({ products: results.slice(0, 8), total: results.length });
}
