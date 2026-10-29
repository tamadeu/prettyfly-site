'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useCartStore } from '@/store/cartStore';
import { useCheckoutStore, type CheckoutDraft } from '@/store/checkoutStore';
import { CART_FLUSH_EVENT, CART_RETRY_EVENT } from '@/components/shared/CartSync';
import { formatPrice } from '@/utils/formatPrice';

const ACCENT = '#c96742';
const DARK = '#111111';
const STATES = 'AC AL AP AM BA CE DF ES GO MA MT MS MG PA PB PR PE PI RJ RN RS RO RR SC SP SE TO'.split(' ');

export function CheckoutPageContent() {
  const items = useCartStore((s) => s.items);
  const { draft, update, ready, status, message } = useCheckoutStore();
  const [cepStatus, setCepStatus] = useState('');
  const [lookupCep, setLookupCep] = useState('');
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    const cep = lookupCep.replace(/\D/g, '');
    if (!ready || cep.length !== 8) return;
    const controller = new AbortController();
    const initial = useCheckoutStore.getState().draft;
    const timer = setTimeout(async () => {
      setCepStatus('Consultando CEP…');
      try {
        const response = await fetch(`/api/cep/${cep}`, { signal: controller.signal });
        const data = await response.json();
        if (controller.signal.aborted) return;
        if (!response.ok) { setCepStatus(data.message); return; }
        const current = useCheckoutStore.getState().draft;
        if (current.postal_code.replace(/\D/g, '') !== cep) return;
        const patch: Partial<CheckoutDraft> = {};
        for (const key of ['street', 'neighborhood', 'city', 'state'] as const) {
          // Não sobrescreve campos editados enquanto a consulta estava em andamento.
          if (current[key] === initial[key] && typeof data[key] === 'string') patch[key] = data[key];
        }
        update(patch);
        setCepStatus('Endereço encontrado. Confira os dados e informe o número.');
      } catch {
        if (!controller.signal.aborted) setCepStatus('Não foi possível consultar o CEP. Preencha o endereço manualmente.');
      }
    }, 400);
    return () => { clearTimeout(timer); controller.abort(); };
  }, [lookupCep, ready, update]);

  function field(key: keyof CheckoutDraft, label: string, maxLength = 150, type = 'text', autoComplete?: string) {
    return <div className="co-field">
      <label className="co-label" htmlFor={`checkout-${key}`}>{label}</label>
      <input id={`checkout-${key}`} name={key} className="co-input" type={type} maxLength={maxLength} autoComplete={autoComplete}
        value={draft[key]} onChange={(e) => update({ [key]: e.target.value })} />
    </div>;
  }

  return <>
    <div className="co-hero"><h1 className="co-hero-title">Finalizar compra</h1></div>
    <div className="container-main" style={{ paddingTop: '6rem', paddingBottom: '8rem' }}>
      <div className="co-layout">
        <section>
          <h2 className="co-section-title">Seus dados</h2>
          <fieldset disabled={!ready || items.length === 0} style={{ border: 0, padding: 0, margin: 0, minWidth: 0 }}>
            <div className="co-fields" onBlur={() => window.dispatchEvent(new Event(CART_FLUSH_EVENT))}>
              <div className="co-row-2">{field('first_name', 'Nome', 100, 'text', 'given-name')}{field('last_name', 'Sobrenome', 150, 'text', 'family-name')}</div>
              {field('email', 'E-mail', 254, 'email', 'email')}
              {field('phone', 'Telefone', 30, 'tel', 'tel')}
              <div className="co-field"><label htmlFor="checkout-country" className="co-label">País/região</label><select id="checkout-country" className="co-select" value="BR" disabled><option value="BR">Brasil</option></select></div>
              <div className="co-field">
                <label className="co-label" htmlFor="checkout-cep">CEP</label>
                <input id="checkout-cep" className="co-input" inputMode="numeric" autoComplete="postal-code" placeholder="00000-000" maxLength={9}
                  aria-describedby="cep-status" value={draft.postal_code}
                  onChange={(e) => { setCepStatus(''); setLookupCep(e.target.value); update({ postal_code: e.target.value.replace(/\D/g, '').slice(0, 8).replace(/^(\d{5})(\d)/, '$1-$2') }); }} />
                <p id="cep-status" role="status" className="co-privacy" style={{ marginBottom: 0 }}>{cepStatus || 'Digite o CEP para preencher o endereço automaticamente.'}</p>
              </div>
              {field('street', 'Endereço', 255, 'text', 'address-line1')}
              <div className="co-row-2">{field('number', 'Número', 30)}{field('complement', 'Complemento (opcional)', 150, 'text', 'address-line2')}</div>
              {field('neighborhood', 'Bairro')}
              <div className="co-row-2">
                {field('city', 'Cidade', 150, 'text', 'address-level2')}
                <div className="co-field"><label htmlFor="checkout-state" className="co-label">Estado</label>
                  <select id="checkout-state" className="co-select" autoComplete="address-level1" value={draft.state} onChange={(e) => update({ state: e.target.value })}>
                    <option value="">Selecione</option>{STATES.map((uf) => <option key={uf} value={uf}>{uf}</option>)}
                  </select>
                </div>
              </div>
              <div className="co-field"><label htmlFor="checkout-notes" className="co-label">Observações (opcional)</label>
                <textarea id="checkout-notes" className="co-textarea" rows={5} maxLength={2000} value={draft.notes} onChange={(e) => update({ notes: e.target.value })} />
              </div>
            </div>
          </fieldset>
        </section>
        <aside className="co-order-aside">
          <h2 className="co-section-title">Seu carrinho</h2>
          <div className="co-order-card">
            {!ready ? <div className="co-empty-state">Carregando carrinho…</div> : !items.length ? <div className="co-empty-state"><p className="co-empty-text">Seu carrinho está vazio</p><Link href="/shop" className="co-explore-btn">Ver produtos</Link></div> : <>
              <div className="co-order-head"><span>Produto</span><span>Subtotal</span></div>
              {items.map((item) => <div key={`${item.productId}-${item.variantId}`} className="co-order-row">
                <span className="co-order-name">{item.name} <span className="co-order-qty">× {item.quantity}</span><br /><small>{[item.color, item.size].filter(Boolean).join(' / ')}</small></span>
                <span className="co-order-price">{formatPrice(item.price * item.quantity, 'BRL')}</span>
              </div>)}
              <div className="co-order-subtotal"><span>Subtotal dos produtos</span><span>{formatPrice(subtotal, 'BRL')}</span></div>
            </>}
          </div>
          <p role="status" aria-live="polite" className="co-privacy">
            {status === 'loading' ? 'Recuperando seu carrinho…' : status === 'saving' ? 'Salvando alterações…' : status === 'error' || status === 'conflict' ? message : items.length ? 'Seu carrinho e seus dados estão salvos.' : 'Adicione produtos para iniciar seu carrinho.'}
          </p>
          {(status === 'error' || status === 'conflict') && <button className="co-explore-btn" style={{ width: '100%', marginBottom: '2rem' }} onClick={() => window.dispatchEvent(new Event(CART_RETRY_EVENT))}>{status === 'conflict' ? 'Recarregar dados salvos' : 'Tentar novamente'}</button>}
          <p className="co-privacy">Frete e pagamento estarão disponíveis em breve. Nenhum pedido será enviado nesta etapa.</p>
          <p className="co-privacy">Seus dados são salvos conforme você preenche, para continuar depois. Consulte nossa <Link href="/pages/privacy-policy" className="co-link">política de privacidade</Link>.</p>
          <Link href="/cart" className="co-link">Editar produtos do carrinho</Link>
        </aside>
      </div>
    </div>
    <style>{coStyles}</style>
  </>;
}

const coStyles = `
  /* ── Hero ── */
  .co-hero {
    background: linear-gradient(135deg, #ffffff 0%, #fdf4f0 50%, #fde8df 100%);
    padding: 5.5rem 0;
    text-align: center;
  }
  .co-hero-title {
    font-size: 4rem;
    font-weight: 400;
    color: var(--color-heading);
    letter-spacing: 0.01em;
  }

  /* ── Two-column layout ── */
  .co-layout {
    display: grid;
    grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
    gap: 5rem;
    align-items: start;
  }

  /* ── Section titles ── */
  .co-section-title {
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--color-heading);
    margin-bottom: 3rem;
  }

  /* ── Billing form ── */
  .co-fields { display: flex; flex-direction: column; gap: 2rem; }
  .co-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1.8rem; }
  .co-field { display: flex; flex-direction: column; gap: 0.7rem; }
  .co-label {
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--color-heading);
  }
  .co-req { color: #e84d1c; margin-left: 0.15rem; }
  .co-input {
    width: 100%;
    height: 4.8rem;
    border: 1px solid #ddd;
    border-radius: 0.4rem;
    padding: 0 1.4rem;
    font-size: 1.4rem;
    color: var(--color-heading);
    background: #fff;
    outline: none;
    font-family: inherit;
    transition: border-color 0.2s;
  }
  .co-input::placeholder { color: #bbb; }
  .co-input:focus { border-color: #999; }
  .co-select {
    width: 100%;
    height: 4.8rem;
    border: 1px solid #ddd;
    border-radius: 0.4rem;
    padding: 0 1.4rem;
    font-size: 1.4rem;
    color: #555;
    background: #fff;
    outline: none;
    cursor: pointer;
    font-family: inherit;
    transition: border-color 0.2s;
  }
  .co-select:focus { border-color: #999; }
  .co-textarea {
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 0.4rem;
    padding: 1.2rem 1.4rem;
    font-size: 1.4rem;
    color: var(--color-heading);
    background: #fff;
    outline: none;
    resize: vertical;
    font-family: inherit;
    line-height: 1.5;
    min-height: 13rem;
    transition: border-color 0.2s;
  }
  .co-textarea:focus { border-color: #999; }

  /* ── Sticky aside ── */
  .co-order-aside {
    position: sticky;
    top: 2rem;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    scrollbar-width: none;
  }
  .co-order-aside::-webkit-scrollbar { display: none; }

  /* ── Order card (cart items) ── */
  .co-order-card {
    background: #f7f7f7;
    border: 1px solid #e5e5e5;
    border-radius: 0.6rem;
    overflow: hidden;
    margin-bottom: 1.6rem;
  }
  .co-empty-state {
    padding: 4rem 2.4rem;
    text-align: center;
  }
  .co-empty-text {
    font-size: 1.5rem;
    color: #666;
    margin-bottom: 2rem;
  }
  .co-explore-btn {
    display: block;
    background: ${DARK};
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 1.4rem 0;
    border-radius: 0.4rem;
    text-decoration: none;
    text-align: center;
    transition: background 0.2s;
  }
  .co-explore-btn:hover { background: #333; }
  .co-order-head {
    display: flex;
    justify-content: space-between;
    padding: 1.2rem 2rem;
    background: #fafafa;
    border-bottom: 1px solid #e0e0e0;
    font-size: 1.3rem;
    font-weight: 600;
    color: #666;
  }
  .co-order-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1.2rem 2rem;
    border-bottom: 1px solid #f0f0f0;
    gap: 1rem;
  }
  .co-order-name {
    font-size: 1.35rem;
    color: var(--color-heading);
    flex: 1;
    line-height: 1.4;
  }
  .co-order-qty { color: #888; }
  .co-order-price {
    font-size: 1.35rem;
    font-weight: 500;
    color: var(--color-heading);
    white-space: nowrap;
  }
  .co-order-subtotal {
    display: flex;
    justify-content: space-between;
    padding: 1.2rem 2rem;
    background: #fafafa;
    border-top: 1px solid #e0e0e0;
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--color-heading);
  }

  /* ── Discount code ── */
  .co-discount-row {
    display: flex;
    border: 1px solid #e0e0e0;
    border-radius: 0.4rem;
    overflow: hidden;
    margin-bottom: 2rem;
  }
  .co-discount-input {
    flex: 1;
    height: 4.8rem;
    border: none;
    border-right: 1px solid #e0e0e0;
    padding: 0 1.6rem;
    font-size: 1.4rem;
    color: var(--color-heading);
    outline: none;
    font-family: inherit;
    background: #fff;
    min-width: 0;
  }
  .co-discount-input::placeholder { color: #aaa; }
  .co-discount-apply {
    background: ${DARK};
    color: #fff;
    font-size: 1.45rem;
    font-weight: 600;
    padding: 0 2.4rem;
    height: 4.8rem;
    border: none;
    cursor: pointer;
    white-space: nowrap;
    font-family: inherit;
    flex-shrink: 0;
    transition: background 0.2s;
  }
  .co-discount-apply:hover { background: #333; }

  /* ── Total bar ── */
  .co-total-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.6rem 0 2rem;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 2.4rem;
  }
  .co-total-label {
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-heading);
  }
  .co-total-amount {
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-heading);
  }

  /* ── Payment methods ── */
  .co-payment-wrap {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-bottom: 2.2rem;
    padding-bottom: 2.2rem;
    border-bottom: 1px solid #e0e0e0;
  }
  .co-payment-opt {
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    user-select: none;
  }
  .co-radio-dot {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 2px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: #fff;
    transition: border-color 0.18s, background 0.18s;
  }
  .co-radio-on {
    background: #e84d1c;
    border-color: #e84d1c;
  }
  .co-payment-text {
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--color-heading);
  }

  /* ── Privacy & terms ── */
  .co-privacy {
    font-size: 1.3rem;
    color: #666;
    line-height: 1.65;
    margin-bottom: 1.8rem;
  }
  .co-link {
    color: ${ACCENT};
    text-decoration: underline;
    text-underline-offset: 2px;
  }
  .co-terms {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    font-size: 1.35rem;
    color: var(--color-body);
    cursor: pointer;
    margin-bottom: 2.6rem;
    line-height: 1.5;
  }
  .co-terms-check {
    width: 1.6rem;
    height: 1.6rem;
    flex-shrink: 0;
    margin-top: 0.1rem;
    cursor: pointer;
    accent-color: #e84d1c;
  }

  /* ── Place order button ── */
  .co-place-order {
    width: 100%;
    background: ${DARK};
    color: #fff;
    font-size: 1.55rem;
    font-weight: 600;
    height: 5.6rem;
    border: none;
    border-radius: 0.4rem;
    cursor: pointer;
    font-family: inherit;
    letter-spacing: 0.01em;
    transition: background 0.2s;
  }
  .co-place-order:hover:not(:disabled) { background: #333; }
  .co-place-order:disabled { opacity: 0.45; cursor: not-allowed; }

  /* ── Responsive ── */
  @media (max-width: 749px) {
    .co-layout { grid-template-columns: 1fr; gap: 4rem; }
    .co-row-2 { grid-template-columns: 1fr; }
    .co-hero-title { font-size: 3rem; }
  }
  @media (min-width: 750px) and (max-width: 1023px) {
    .co-layout { grid-template-columns: 1fr 1fr; gap: 3rem; }
  }
`;
