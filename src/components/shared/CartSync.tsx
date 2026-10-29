'use client';

import { useEffect } from 'react';
import { useCartStore } from '@/store/cartStore';
import { emptyCheckout, useCheckoutStore } from '@/store/checkoutStore';
import { AUTH_EVENT } from './WishlistSync';

export const CART_RETRY_EVENT = 'pf-cart-retry';
export const CART_FLUSH_EVENT = 'pf-cart-flush';
let flushPending: (() => Promise<void>) | undefined;
export async function flushCart() { await flushPending?.(); }

// Uma fila por página evita que respostas antigas sobrescrevam digitação ou quantidades novas.
export function CartSync() {
  useEffect(() => {
    let disposed = false;
    let ready = false;
    let applying = false;
    let busy = false;
    let reload = false;
    let blocked = false;
    let version = 0;
    let owner = 'guest';
    let savedItems = '';
    let savedDraft = '';
    let timer: ReturnType<typeof setTimeout> | undefined;
    const itemsKey = () => JSON.stringify(useCartStore.getState().items);
    const draftKey = () => JSON.stringify(useCheckoutStore.getState().draft);
    const status = (value: 'loading' | 'saving' | 'saved' | 'error' | 'conflict', message = '') => {
      if (!disposed) useCheckoutStore.setState({ status: value, message });
    };

    async function load() {
      if (busy || disposed) { reload = true; return; }
      busy = true;
      ready = false;
      reload = false;
      status('loading');
      const before = itemsKey();
      try {
        let response = await fetch('/api/cart', { cache: 'no-store', signal: AbortSignal.timeout(20000) });
        if (response.status === 401) response = await fetch('/api/cart', { cache: 'no-store', signal: AbortSignal.timeout(20000) });
        const json = await response.json();
        if (!response.ok) throw new Error(json.message || 'Não foi possível recuperar o carrinho.');
        if (disposed || reload) return;
        const remote = json.data;
        const previousOwner = localStorage.getItem('pf-cart-owner');
        const sameOwner = previousOwner === remote.owner || (!previousOwner && remote.owner === 'guest');
        // Só importa o carrinho antigo do navegador quando ainda não há carrinho no servidor.
        const local = useCartStore.getState().items;
        const keepLocal = sameOwner && !remote.id && local.length > 0;
        const changedDuringLoad = sameOwner && before !== itemsKey();
        applying = true;
        if (!keepLocal && !changedDuringLoad) useCartStore.setState({ items: remote.items });
        useCheckoutStore.setState({ draft: { ...emptyCheckout, ...remote.checkout }, ready: true });
        localStorage.setItem('pf-cart-owner', remote.owner);
        applying = false;
        version = remote.version;
        owner = remote.owner;
        savedItems = keepLocal || changedDuringLoad ? JSON.stringify(remote.items) : itemsKey();
        savedDraft = draftKey();
        ready = true;
        blocked = false;
        status('saved');
      } catch (error) {
        applying = false;
        status('error', error instanceof Error ? error.message : 'Não foi possível recuperar o carrinho.');
      } finally {
        busy = false;
        if (!disposed) {
          if (reload) void load();
          else if (ready && itemsKey() !== savedItems) void save();
        }
      }
    }

    async function save() {
      if (!ready || busy || disposed || blocked) return;
      const items = itemsKey();
      const draft = draftKey();
      if (items === savedItems && draft === savedDraft) return;
      busy = true;
      status('saving');
      try {
        const response = await fetch('/api/cart', {
          method: 'PUT', keepalive: true, signal: AbortSignal.timeout(20000),
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ version, owner, ...(items !== savedItems ? { items: JSON.parse(items) } : {}), ...(draft !== savedDraft ? { checkout: JSON.parse(draft) } : {}) }),
        });
        const json = await response.json();
        if (disposed || reload) return;
        if (response.status === 409) {
          blocked = true;
          status('conflict', 'O carrinho mudou em outra sessão. Recarregue os dados para continuar.');
          return;
        }
        if (response.status === 401) { reload = true; return; }
        if (!response.ok) throw new Error(Object.values(json.errors ?? {}).flat()[0] as string || json.message || 'Não foi possível salvar o carrinho.');
        version = json.data.version;
        applying = true;
        if (itemsKey() === items) useCartStore.setState({ items: json.data.items });
        savedItems = JSON.stringify(json.data.items);
        savedDraft = draft;
        applying = false;
        status('saved');
      } catch (error) {
        status('error', error instanceof Error ? error.message : 'Sem conexão. Tente novamente para salvar.');
      } finally {
        busy = false;
        if (!disposed) {
          if (reload) void load();
          else if (useCheckoutStore.getState().status === 'saved' && (itemsKey() !== savedItems || draftKey() !== savedDraft)) void save();
        }
      }
    }

    const schedule = () => {
      if (applying || !ready || blocked) return;
      clearTimeout(timer);
      if (itemsKey() === savedItems && draftKey() === savedDraft) return;
      status('saving');
      timer = setTimeout(() => void save(), 650);
    };
    const offCart = useCartStore.subscribe((s, prev) => { if (s.items !== prev.items) schedule(); });
    const offCheckout = useCheckoutStore.subscribe((s, prev) => { if (s.draft !== prev.draft) schedule(); });
    const auth = () => {
      clearTimeout(timer);
      ready = false;
      applying = true;
      useCartStore.setState({ items: [] });
      useCheckoutStore.setState({ ready: false, draft: { ...emptyCheckout } });
      applying = false;
      reload = true;
      void load();
    };
    flushPending = async () => {
      clearTimeout(timer);
      while (busy && !disposed) await new Promise((resolve) => setTimeout(resolve, 25));
      await save();
    };
    const retry = () => { if (!ready || blocked) void load(); else void save(); };
    const flush = () => { clearTimeout(timer); void save(); };
    const visibility = () => { if (document.visibilityState === 'hidden') flush(); };
    window.addEventListener(AUTH_EVENT, auth);
    window.addEventListener(CART_RETRY_EVENT, retry);
    window.addEventListener(CART_FLUSH_EVENT, flush);
    window.addEventListener('online', retry);
    document.addEventListener('visibilitychange', visibility);
    window.addEventListener('pagehide', flush);
    void load();
    return () => {
      disposed = true;
      flushPending = undefined;
      clearTimeout(timer);
      offCart(); offCheckout();
      window.removeEventListener(AUTH_EVENT, auth);
      window.removeEventListener(CART_RETRY_EVENT, retry);
      window.removeEventListener(CART_FLUSH_EVENT, flush);
      window.removeEventListener('online', retry);
      document.removeEventListener('visibilitychange', visibility);
      window.removeEventListener('pagehide', flush);
    };
  }, []);
  return null;
}
