'use client';

import { useEffect, useState } from 'react';
import { useCartStore } from '@/store/cartStore';
import { useCheckoutStore } from '@/store/checkoutStore';
import { requestShipping } from '@/components/shared/CartSync';
import { shippingInputKey } from '@/lib/shipping';
import { formatPrice } from '@/utils/formatPrice';
import { FreeShippingNotice } from '@/components/shared/FreeShippingNotice';

export function ShippingOptions() {
  const items = useCartStore((s) => s.items);
  const { ready, draft, shipping, shippingStatus, shippingError } = useCheckoutStore();
  const [expiredQuote, setExpiredQuote] = useState<string | null>(null);
  const inputKey = shippingInputKey(items, draft.postal_code);
  const canQuote = ready && items.length > 0 && /^\d{8}$/.test(draft.postal_code.replace(/\D/g, ''));
  const matches = shipping?.input_key === inputKey && shipping?.quote_id !== expiredQuote;
  const quote = matches ? shipping : null;
  const selected = quote?.options.find((o) => o.id === quote.selected_id);
  const busy = shippingStatus === 'loading' || shippingStatus === 'selecting';
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    if (!canQuote) return;
    const valid = shipping?.input_key === inputKey;
    const remaining = valid ? Date.parse(shipping.expires_at) - Date.now() : 0;
    const timer = setTimeout(() => {
      if (valid) setExpiredQuote(shipping.quote_id);
      void requestShipping();
    }, remaining > 0 ? remaining + 50 : 800);
    return () => clearTimeout(timer);
  }, [canQuote, inputKey, shipping]);

  if (!items.length || !ready) return null;
  return <section aria-labelledby="shipping-heading" style={{ margin: '2.4rem 0' }}>
    <h3 id="shipping-heading" style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '1.2rem' }}>Entrega</h3>
    <FreeShippingNotice />
    {!canQuote ? <p className="co-privacy">Informe seu CEP para consultar as opções de entrega.</p> : <>
      {quote?.environment === 'sandbox' && <p className="co-privacy">Simulação de frete — ambiente de teste.</p>}
      <div role="status" aria-live="polite" className="co-privacy" style={{ marginBottom: '1rem' }}>
        {busy ? (shippingStatus === 'selecting' ? 'Salvando opção de entrega…' : 'Calculando frete…') : shippingStatus === 'error' ? shippingError : quote && !quote.options.length ? 'Nenhuma opção de entrega disponível para este CEP e estes produtos.' : !quote ? 'Consultando opções de entrega…' : 'Prazo estimado em dias úteis após a postagem.'}
      </div>
      {quote && <fieldset disabled={busy} style={{ border: 0, padding: 0, display: 'grid', gap: '1rem' }}>
        <legend className="sr-only">Escolha uma opção de entrega</legend>
        {quote.options.map((option) => <label key={option.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem', border: '1px solid #ddd', padding: '1.4rem', borderRadius: '.4rem', cursor: 'pointer', fontSize: '1.4rem' }}>
          <input type="radio" name="shipping-service" value={option.id} checked={quote.selected_id === option.id} onChange={() => void requestShipping({ quote_id: quote.quote_id, service_id: option.id })} />
          <span style={{ flex: 1 }}>{option.company} · {option.name}<br /><small>{option.delivery_days} {option.delivery_days === 1 ? 'dia útil' : 'dias úteis'}</small></span>
          <strong>{option.price === 0 ? 'Grátis' : formatPrice(option.price, 'BRL')}</strong>
        </label>)}
      </fieldset>}
      {!busy && (shippingStatus === 'error' || (quote && !quote.options.length)) && <button type="button" className="co-link" onClick={() => void requestShipping()}>Calcular novamente</button>}
    </>}
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', fontSize: '1.4rem' }}><span>Frete</span><span>{selected ? (selected.price === 0 ? 'Grátis' : formatPrice(selected.price, 'BRL')) : 'A calcular'}</span></div>
    <div className="co-total-bar" style={{ marginTop: '1rem' }}><span className="co-total-label">{selected ? 'Total com frete' : 'Total dos produtos'}</span><span className="co-total-amount">{formatPrice(subtotal + (selected?.price ?? 0), 'BRL')}</span></div>
  </section>;
}
