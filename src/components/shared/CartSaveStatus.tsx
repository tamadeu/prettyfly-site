'use client';

import { useCheckoutStore } from '@/store/checkoutStore';
import { CART_RETRY_EVENT } from './CartSync';

export function CartSaveStatus() {
  const { status, message } = useCheckoutStore();
  return <div role="status" style={{ fontSize: '14px', margin: '12px 0', color: '#555' }}>
    {status === 'loading' ? 'Recuperando carrinho…' : status === 'saving' ? 'Salvando carrinho…' : status === 'saved' ? 'Carrinho salvo.' : message}
    {(status === 'error' || status === 'conflict') && <button type="button" style={{ display: 'block', textDecoration: 'underline', marginTop: '8px' }} onClick={() => window.dispatchEvent(new Event(CART_RETRY_EVENT))}>{status === 'conflict' ? 'Recarregar dados salvos' : 'Tentar novamente'}</button>}
  </div>;
}
