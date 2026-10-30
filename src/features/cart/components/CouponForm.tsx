'use client';

import { useState, type FormEvent } from 'react';
import { formatPrice } from '@/utils/formatPrice';
import { useCheckoutStore } from '@/store/checkoutStore';
import { applyCartCoupon, removeCartCoupon } from '@/components/shared/CartSync';

export function CouponForm() {
  const coupon = useCheckoutStore((state) => state.coupon);
  const ready = useCheckoutStore((state) => state.ready);
  const status = useCheckoutStore((state) => state.status);
  const [code, setCode] = useState('');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!code.trim() || busy) return;
    setBusy(true); setMessage(''); setSuccess(false);
    try {
      const result = await applyCartCoupon(code);
      if (!result.ok) { setMessage(result.message || 'Não foi possível aplicar este cupom.'); return; }
      setCode(''); setSuccess(true); setMessage('Cupom aplicado com sucesso.');
    } finally { setBusy(false); }
  }

  async function remove() {
    if (busy) return;
    setBusy(true); setMessage(''); setSuccess(false);
    try {
      const result = await removeCartCoupon();
      if (!result.ok) { setMessage(result.message || 'Não foi possível remover o cupom.'); return; }
      setSuccess(true); setMessage('Cupom removido.');
    } finally { setBusy(false); }
  }

  return (
    <section aria-labelledby="cart-coupon-title" style={{ padding: '1.8rem 2rem', border: '1px solid #e5e5e5', borderRadius: '0.8rem', marginBottom: '1.6rem' }}>
      <h3 id="cart-coupon-title" style={{ fontSize: '1.65rem', fontWeight: 700, marginBottom: '1.2rem', color: 'var(--color-heading)' }}>Cupom de desconto</h3>
      {coupon ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: '1.5rem', fontWeight: 700, color: '#237a45' }}>{coupon.code}</p>
            <p style={{ fontSize: '1.3rem', color: '#666', marginTop: '0.3rem' }}>{coupon.name}</p>
            <p style={{ fontSize: '1.35rem', color: '#237a45', marginTop: '0.5rem' }}>Desconto de {formatPrice(coupon.discount_amount, 'BRL')}</p>
          </div>
          <button type="button" disabled={!ready || busy || status === 'saving'} onClick={() => void remove()} style={{ border: '1px solid #ddd', borderRadius: '9999px', padding: '0.9rem 1.4rem', background: '#fff', color: '#333', fontSize: '1.3rem', cursor: busy ? 'wait' : 'pointer', opacity: busy ? 0.65 : 1 }}>{busy ? 'Aguarde…' : 'Remover'}</button>
        </div>
      ) : (
        <form onSubmit={submit}>
          <label htmlFor="cart-coupon-code" style={{ display: 'block', fontSize: '1.35rem', color: '#666', marginBottom: '0.8rem' }}>Informe o código promocional</label>
          <div className="cp-promo-row">
            <input id="cart-coupon-code" name="coupon" autoComplete="off" maxLength={80} value={code} onChange={(event) => setCode(event.target.value)} placeholder="Ex.: PRIMEIRACOMPRA" className="cp-promo-input" disabled={!ready || busy || status === 'saving'} />
            <button type="submit" className="cp-apply-btn" disabled={!ready || busy || status === 'saving' || !code.trim()} style={{ opacity: !ready || busy || status === 'saving' || !code.trim() ? 0.55 : 1, cursor: busy ? 'wait' : 'pointer' }}>{busy ? 'Aplicando…' : 'Aplicar'}</button>
          </div>
        </form>
      )}
      {message && <p role="status" aria-live="polite" style={{ marginTop: '1rem', fontSize: '1.35rem', color: success ? '#237a45' : '#b42318' }}>{message}</p>}
      <p style={{ marginTop: '0.8rem', fontSize: '1.2rem', color: '#888' }}>O desconto é calculado sobre os produtos elegíveis. O frete não recebe desconto.</p>
    </section>
  );
}
