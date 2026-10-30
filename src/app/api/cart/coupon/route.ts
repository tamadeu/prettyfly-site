import { proxyCart } from '@/lib/cart-api-route';

export const dynamic = 'force-dynamic';
export const POST = (request: Request) => proxyCart(request, '/coupon');
export const DELETE = (request: Request) => proxyCart(request, '/coupon');
