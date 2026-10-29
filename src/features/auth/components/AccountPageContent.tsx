'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { Customer } from '@/lib/customer-api';

export function AccountPageContent({ customer }: { customer: Customer }) {
  const router = useRouter();
  const [form, setForm] = useState({
    name: customer.name,
    phone: customer.phone ?? '',
    document: customer.document ?? '',
    birth_date: customer.birth_date ?? '',
    current_password: '',
    password: '',
  });
  const [message, setMessage] = useState<{ type: 'ok' | 'error'; text: string } | null>(null);
  const [saving, setSaving] = useState(false);

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((current) => ({ ...current, [key]: e.target.value }));

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    const response = await fetch('/api/auth/me', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        phone: form.phone || null,
        document: form.document || null,
        birth_date: form.birth_date || null,
        ...(form.password ? { password: form.password, current_password: form.current_password } : {}),
      }),
    }).catch(() => null);

    setSaving(false);

    if (response?.ok) {
      setForm((current) => ({ ...current, password: '', current_password: '' }));
      setMessage({ type: 'ok', text: 'Dados atualizados.' });
      return;
    }

    const json = await response?.json().catch(() => ({}));
    const first = json?.errors ? Object.values(json.errors as Record<string, string[]>)[0]?.[0] : undefined;
    setMessage({ type: 'error', text: first ?? json?.message ?? 'Não foi possível salvar.' });
  }

  async function logout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/login');
    router.refresh();
  }

  const input = { className: 'au-input', style: { width: '100%' } };

  return (
    <div className="container-main" style={{ paddingTop: '6rem', paddingBottom: '8rem', maxWidth: '60rem' }}>
      <h1 style={{ fontSize: '3.2rem', marginBottom: '0.8rem' }}>Minha conta</h1>
      <p style={{ color: '#777', marginBottom: '3.2rem' }}>{customer.email}</p>

      <form onSubmit={save} style={{ display: 'grid', gap: '1.6rem' }}>
        <input {...input} placeholder="Nome" required value={form.name} onChange={set('name')} />
        <input {...input} placeholder="Telefone" value={form.phone} onChange={set('phone')} />
        <input {...input} placeholder="CPF" value={form.document} onChange={set('document')} />
        <input {...input} type="date" aria-label="Data de nascimento" value={form.birth_date} onChange={set('birth_date')} />
        <input {...input} type="password" autoComplete="new-password" placeholder="Nova senha (opcional)" value={form.password} onChange={set('password')} />
        {form.password && (
          <input {...input} type="password" autoComplete="current-password" placeholder="Senha atual" required value={form.current_password} onChange={set('current_password')} />
        )}
        {message && (
          <p role="alert" style={{ color: message.type === 'ok' ? '#2e7d32' : '#c0392b', margin: 0 }}>{message.text}</p>
        )}
        <div style={{ display: 'flex', gap: '1.6rem' }}>
          <button type="submit" disabled={saving} className="li-submit" style={{ height: '5rem', padding: '0 3.2rem', background: '#111', color: '#fff', border: 0, borderRadius: '0.4rem', cursor: 'pointer' }}>
            {saving ? 'Salvando...' : 'Salvar'}
          </button>
          <button type="button" onClick={logout} style={{ height: '5rem', padding: '0 3.2rem', background: 'transparent', border: '1px solid #111', borderRadius: '0.4rem', cursor: 'pointer' }}>
            Sair
          </button>
        </div>
      </form>
    </div>
  );
}
