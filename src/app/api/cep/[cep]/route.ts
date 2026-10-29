import { NextResponse } from 'next/server';

export async function GET(_request: Request, { params }: { params: Promise<{ cep: string }> }) {
  const { cep } = await params;
  if (!/^\d{8}$/.test(cep)) return NextResponse.json({ message: 'Informe um CEP com 8 dígitos.' }, { status: 422 });
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`, { signal: AbortSignal.timeout(5000), next: { revalidate: 86400 } });
    if (!response.ok) throw new Error('ViaCEP unavailable');
    const data = await response.json();
    if (data.erro) return NextResponse.json({ message: 'CEP não encontrado. Confira o CEP ou preencha o endereço manualmente.' }, { status: 404 });
    return NextResponse.json({ street: data.logradouro, neighborhood: data.bairro, city: data.localidade, state: data.uf });
  } catch {
    return NextResponse.json({ message: 'Não foi possível consultar o CEP. Você pode preencher o endereço manualmente.' }, { status: 503 });
  }
}
