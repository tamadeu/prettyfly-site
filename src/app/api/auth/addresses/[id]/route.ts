import { proxyCustomerAuthed } from '@/lib/customer-auth-route';

export const dynamic = 'force-dynamic';

type Ctx = { params: Promise<{ id: string }> };

async function path(ctx: Ctx) {
  const { id } = await ctx.params;
  return /^\d+$/.test(id) ? `/me/addresses/${id}` : null;
}

export async function PUT(request: Request, ctx: Ctx) {
  const target = await path(ctx);
  return target ? proxyCustomerAuthed(request, 'PUT', target) : Response.json({ message: 'Não encontrado.' }, { status: 404 });
}

export async function DELETE(request: Request, ctx: Ctx) {
  const target = await path(ctx);
  return target ? proxyCustomerAuthed(request, 'DELETE', target) : Response.json({ message: 'Não encontrado.' }, { status: 404 });
}
