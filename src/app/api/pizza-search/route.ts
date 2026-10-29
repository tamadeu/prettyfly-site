import { NextRequest, NextResponse } from 'next/server';
import { pizzaProducts } from '@/data/pizza-products';

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get('q')?.toLowerCase() ?? '';

  if (!q) return NextResponse.json({ products: [] });

  const results = pizzaProducts
    .filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    )
    .slice(0, 8);

  return NextResponse.json({ products: results });
}
