import { NextRequest, NextResponse } from 'next/server';
import { carAccessoriesProducts } from '@/data/car-accessories-products';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const product = carAccessoriesProducts.find((p) => p.id === id || p.slug === id);

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json({ product });
}
