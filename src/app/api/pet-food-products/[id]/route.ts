import { NextRequest, NextResponse } from 'next/server';
import { petFoodProducts } from '@/data/pet-food-products';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const product = petFoodProducts.find((p) => p.id === id || p.slug === id);

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json({ product });
}
