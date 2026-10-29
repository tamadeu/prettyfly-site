'use client';

import { useEffect } from 'react';
import { useWishlistStore } from '@/store/wishlistStore';

export const AUTH_EVENT = 'pf-auth-changed';

type Item = ReturnType<typeof useWishlistStore.getState>['items'][number];

const keyOf = (items: Item[]) => items.map((i) => i.productId).sort().join('|');

// Mantém a wishlist do navegador sincronizada com a conta do cliente logado.
export function WishlistSync() {
  useEffect(() => {
    let active = false;
    let lastSaved = '';
    let timer: ReturnType<typeof setTimeout> | undefined;

    const save = async (items: Item[]) => {
      lastSaved = keyOf(items);
      await fetch('/api/auth/wishlist', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      }).catch(() => undefined);
    };

    const start = async () => {
      active = false;
      const response = await fetch('/api/auth/wishlist').catch(() => null);
      if (!response?.ok) return;

      const remote: Item[] = (await response.json()).data ?? [];
      const local = useWishlistStore.getState().items;
      const merged = [...remote, ...local.filter((l) => !remote.some((r) => r.productId === l.productId))];

      lastSaved = keyOf(remote);
      useWishlistStore.setState({ items: merged });
      active = true;
      if (keyOf(merged) !== lastSaved) await save(merged);
    };

    const unsubscribe = useWishlistStore.subscribe((state) => {
      if (!active || keyOf(state.items) === lastSaved) return;
      clearTimeout(timer);
      timer = setTimeout(() => save(useWishlistStore.getState().items), 500);
    });

    const onAuthChange = () => {
      clearTimeout(timer);
      void start();
    };

    window.addEventListener(AUTH_EVENT, onAuthChange);
    void start();

    return () => {
      clearTimeout(timer);
      unsubscribe();
      window.removeEventListener(AUTH_EVENT, onAuthChange);
    };
  }, []);

  return null;
}
