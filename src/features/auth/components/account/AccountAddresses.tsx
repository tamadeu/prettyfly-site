'use client';

import { useEffect, useState } from 'react';
import { api, firstError } from './api';

interface Address {
  id: number;
  label: string | null;
  recipient: string;
  zip: string;
  street: string;
  number: string;
  complement: string | null;
  neighborhood: string;
  city: string;
  state: string;
  phone: string | null;
  is_default: boolean;
}

type Form = Omit<Address, 'id'>;

const empty = (recipient: string): Form => ({
  label: '', recipient, zip: '', street: '', number: '', complement: '', neighborhood: '', city: '', state: '', phone: '', is_default: false,
});

const maskZip = (v: string) => {
  const d = v.replace(/\D/g, '').slice(0, 8);
  return d.length > 5 ? `${d.slice(0, 5)}-${d.slice(5)}` : d;
};

export function AccountAddresses({ customerName }: { customerName: string }) {
  const [addresses, setAddresses] = useState<Address[] | null>(null);
  const [editing, setEditing] = useState<{ id: number | null; form: Form } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [zipStatus, setZipStatus] = useState<string | null>(null);

  async function load() {
    const result = await api<Address[]>('/api/auth/addresses');
    if (result.ok) setAddresses(result.data ?? []);
    else setError(firstError(result));
  }

  useEffect(() => {
    void load();
  }, []);

  const set = (key: keyof Form, value: string | boolean) =>
    setEditing((cur) => (cur ? { ...cur, form: { ...cur.form, [key]: value } } : cur));

  async function lookupZip(zip: string) {
    const digits = zip.replace(/\D/g, '');
    if (digits.length !== 8) return;
    setZipStatus('Buscando CEP...');
    try {
      const response = await fetch(`https://viacep.com.br/ws/${digits}/json/`);
      const json = await response.json();
      if (json.erro) {
        setZipStatus('CEP não encontrado. Preencha manualmente.');
        return;
      }
      setEditing((cur) =>
        cur
          ? {
              ...cur,
              form: {
                ...cur.form,
                street: json.logradouro || cur.form.street,
                neighborhood: json.bairro || cur.form.neighborhood,
                city: json.localidade || cur.form.city,
                state: json.uf || cur.form.state,
              },
            }
          : cur,
      );
      setZipStatus(null);
    } catch {
      setZipStatus('Não foi possível buscar o CEP. Preencha manualmente.');
    }
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!editing) return;
    setSaving(true);
    setError(null);

    const { id, form } = editing;
    const result = id
      ? await api(`/api/auth/addresses/${id}`, 'PUT', form)
      : await api('/api/auth/addresses', 'POST', form);

    setSaving(false);
    if (!result.ok) return setError(firstError(result));
    setEditing(null);
    setZipStatus(null);
    await load();
  }

  async function remove(address: Address) {
    if (!window.confirm('Excluir este endereço?')) return;
    const result = await api(`/api/auth/addresses/${address.id}`, 'DELETE');
    if (!result.ok) return setError(firstError(result));
    await load();
  }

  async function makeDefault(address: Address) {
    const { id: _id, ...rest } = address;
    const result = await api(`/api/auth/addresses/${address.id}`, 'PUT', { ...rest, is_default: true });
    if (!result.ok) return setError(firstError(result));
    await load();
  }

  if (editing) {
    const { form } = editing;
    return (
      <form onSubmit={submit} className="ac-form">
        <h2 className="ac-h2">{editing.id ? 'Editar endereço' : 'Novo endereço'}</h2>
        <div className="ac-grid">
          <label className="ac-field">
            <span>CEP</span>
            <input
              className="ac-input"
              required
              inputMode="numeric"
              autoComplete="postal-code"
              value={form.zip}
              onChange={(e) => {
                const zip = maskZip(e.target.value);
                set('zip', zip);
                void lookupZip(zip);
              }}
              placeholder="00000-000"
            />
            {zipStatus && <small className="ac-muted">{zipStatus}</small>}
          </label>
          <label className="ac-field">
            <span>Identificação (opcional)</span>
            <input className="ac-input" value={form.label ?? ''} onChange={(e) => set('label', e.target.value)} placeholder="Casa, Trabalho..." />
          </label>
          <label className="ac-field ac-span">
            <span>Destinatário</span>
            <input className="ac-input" required value={form.recipient} onChange={(e) => set('recipient', e.target.value)} autoComplete="name" />
          </label>
          <label className="ac-field ac-span">
            <span>Rua</span>
            <input className="ac-input" required value={form.street} onChange={(e) => set('street', e.target.value)} autoComplete="address-line1" />
          </label>
          <label className="ac-field">
            <span>Número</span>
            <input className="ac-input" required value={form.number} onChange={(e) => set('number', e.target.value)} />
          </label>
          <label className="ac-field">
            <span>Complemento</span>
            <input className="ac-input" value={form.complement ?? ''} onChange={(e) => set('complement', e.target.value)} />
          </label>
          <label className="ac-field">
            <span>Bairro</span>
            <input className="ac-input" required value={form.neighborhood} onChange={(e) => set('neighborhood', e.target.value)} />
          </label>
          <label className="ac-field">
            <span>Cidade</span>
            <input className="ac-input" required value={form.city} onChange={(e) => set('city', e.target.value)} autoComplete="address-level2" />
          </label>
          <label className="ac-field">
            <span>UF</span>
            <input className="ac-input" required maxLength={2} value={form.state} onChange={(e) => set('state', e.target.value.toUpperCase())} autoComplete="address-level1" />
          </label>
          <label className="ac-field">
            <span>Telefone de contato</span>
            <input className="ac-input" inputMode="tel" value={form.phone ?? ''} onChange={(e) => set('phone', e.target.value)} />
          </label>
        </div>
        <label className="ac-check">
          <input type="checkbox" checked={form.is_default} onChange={(e) => set('is_default', e.target.checked)} />
          Usar como endereço padrão
        </label>
        {error && <p role="alert" className="ac-error">{error}</p>}
        <div className="ac-row">
          <button type="submit" className="ac-btn" disabled={saving}>{saving ? 'Salvando...' : 'Salvar endereço'}</button>
          <button type="button" className="ac-btn ac-btn-ghost" onClick={() => { setEditing(null); setError(null); setZipStatus(null); }}>Cancelar</button>
        </div>
      </form>
    );
  }

  return (
    <div>
      <div className="ac-head">
        <h2 className="ac-h2">Meus endereços</h2>
        <button type="button" className="ac-btn" onClick={() => { setEditing({ id: null, form: empty(customerName) }); setError(null); }}>
          Novo endereço
        </button>
      </div>
      {error && <p role="alert" className="ac-error">{error}</p>}
      {addresses === null ? (
        <p className="ac-muted">Carregando...</p>
      ) : addresses.length === 0 ? (
        <div className="ac-empty">
          <p>Você ainda não cadastrou nenhum endereço.</p>
        </div>
      ) : (
        <ul className="ac-cards">
          {addresses.map((a) => (
            <li key={a.id} className="ac-card">
              <div className="ac-card-top">
                <strong>{a.label || 'Endereço'}</strong>
                {a.is_default && <span className="ac-badge">Padrão</span>}
              </div>
              <p>{a.recipient}</p>
              <p>{a.street}, {a.number}{a.complement ? ` - ${a.complement}` : ''}</p>
              <p>{a.neighborhood} · {a.city}/{a.state}</p>
              <p>CEP {a.zip}{a.phone ? ` · ${a.phone}` : ''}</p>
              <div className="ac-row" style={{ marginTop: '1.2rem' }}>
                <button type="button" className="ac-link" onClick={() => { setEditing({ id: a.id, form: { ...a, label: a.label ?? '', complement: a.complement ?? '', phone: a.phone ?? '' } }); setError(null); }}>Editar</button>
                {!a.is_default && <button type="button" className="ac-link" onClick={() => makeDefault(a)}>Tornar padrão</button>}
                <button type="button" className="ac-link ac-danger" onClick={() => remove(a)}>Excluir</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
