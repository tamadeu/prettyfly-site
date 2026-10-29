import { proxyCustomerAuthed } from '@/lib/customer-auth-route';

export const dynamic = 'force-dynamic';

export const GET = (request: Request) => proxyCustomerAuthed(request, 'GET', '/me/addresses');
export const POST = (request: Request) => proxyCustomerAuthed(request, 'POST', '/me/addresses');
