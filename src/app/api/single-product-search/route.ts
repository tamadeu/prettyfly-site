import { NextRequest, NextResponse } from 'next/server';
import { singleProductProducts } from '@/data/single-product-products';

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get('q')?.toLowerCase() ?? '';

  if (!q) return NextResponse.json({ products: [] });

  const results = singleProductProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)) ||
      p.category.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q)
  );

  return NextResponse.json({ products: results.slice(0, 8) });
}
