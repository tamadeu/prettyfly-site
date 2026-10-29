import { NextRequest, NextResponse } from 'next/server';
import productsData from '@/data/products.json';
import { skinCareProducts } from '@/data/skin-care-products';
import { jewelleryProducts } from '@/data/jewellery-products';
import type { Product } from '@/types/product';

const fashionProducts: Product[] = productsData as Product[];
const allProducts: Product[] = [...fashionProducts, ...skinCareProducts, ...jewelleryProducts];

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  // Find by ID or slug
  const product = allProducts.find((p) => p.id === id || p.slug === id);

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json({ product });
}
