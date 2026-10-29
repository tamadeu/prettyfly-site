import { proxyCustomerAuthed } from '@/lib/customer-auth-route';

export const dynamic = 'force-dynamic';

export const GET = (request: Request) => proxyCustomerAuthed(request, 'GET', '/me/wishlist');
export const PUT = (request: Request) => proxyCustomerAuthed(request, 'PUT', '/me/wishlist');
