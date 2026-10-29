'use client';

import { useState } from 'react';
import type { Customer } from '@/lib/customer-api';
import { api, firstError } from './api';

export function AccountProfile({ customer }: { customer: Customer }) {
  const [form, setForm] = useState({
    name: customer.name,
    phone: customer.phone ?? '',
    document: customer.document ?? '',
    birth_date: customer.birth_date ?? '',
    current_password: '',
    password: '',
  });
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);
  const [saving, setSaving] = useState(false);
  const [verifyMessage, setVerifyMessage] = useState<string | null>(null);
  const [resending, setResending] = useState(false);

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((current) => ({ ...current, [key]: e.target.value }));

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    const result = await api('/api/auth/me', 'PUT', {
      name: form.name,
      phone: form.phone || null,
      document: form.document || null,
      birth_date: form.birth_date || null,
      ...(form.password ? { password: form.password, current_password: form.current_password } : {}),
    });

    setSaving(false);
    if (result.ok) setForm((c) => ({ ...c, password: '', current_password: '' }));
    setMessage({ ok: result.ok, text: result.ok ? 'Dados atualizados.' : firstError(result) });
  }

  async function resend() {
    setResending(true);
    const result = await api('/api/auth/resend-verification', 'POST', {});
    setResending(false);
    setVerifyMessage(result.ok ? 'E-mail de confirmação enviado. Verifique sua caixa de entrada.' : firstError(result));
  }

  return (
    <div>
      {!customer.email_verified && (
        <div role="status" className="ac-notice">
          <p>Confirme seu e-mail para ativar totalmente sua conta.</p>
          {verifyMessage ? (
            <p className="ac-muted">{verifyMessage}</p>
          ) : (
            <button type="button" className="ac-link" onClick={resend} disabled={resending}>
              {resending ? 'Enviando...' : 'Reenviar e-mail de confirmação'}
            </button>
          )}
        </div>
      )}

      <form onSubmit={save} className="ac-form">
        <h2 className="ac-h2">Dados pessoais</h2>
        <div className="ac-grid">
          <label className="ac-field ac-span">
            <span>Nome completo</span>
            <input className="ac-input" required value={form.name} onChange={set('name')} autoComplete="name" />
          </label>
          <label className="ac-field ac-span">
            <span>E-mail</span>
            <input className="ac-input" value={customer.email} readOnly disabled />
          </label>
          <label className="ac-field">
            <span>Telefone</span>
            <input className="ac-input" value={form.phone} onChange={set('phone')} autoComplete="tel" inputMode="tel" />
          </label>
          <label className="ac-field">
            <span>CPF</span>
            <input className="ac-input" value={form.document} onChange={set('document')} inputMode="numeric" />
          </label>
          <label className="ac-field">
            <span>Data de nascimento</span>
            <input className="ac-input" type="date" value={form.birth_date} onChange={set('birth_date')} />
          </label>
        </div>

        <h2 className="ac-h2" style={{ marginTop: '3.2rem' }}>Alterar senha</h2>
        <p className="ac-muted">Deixe em branco para manter a senha atual.</p>
        <div className="ac-grid">
          <label className="ac-field">
            <span>Nova senha</span>
            <input className="ac-input" type="password" autoComplete="new-password" minLength={8} value={form.password} onChange={set('password')} />
          </label>
          <label className="ac-field">
            <span>Senha atual</span>
            <input className="ac-input" type="password" autoComplete="current-password" required={Boolean(form.password)} value={form.current_password} onChange={set('current_password')} />
          </label>
        </div>

        {message && (
          <p role="alert" className={message.ok ? 'ac-ok' : 'ac-error'}>{message.text}</p>
        )}
        <button type="submit" className="ac-btn" disabled={saving}>{saving ? 'Salvando...' : 'Salvar alterações'}</button>
      </form>
    </div>
  );
}
