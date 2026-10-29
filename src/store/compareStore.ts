'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { MAX_COMPARE_ITEMS } from '@/lib/constants';
import { getStorefrontOfProductId } from '@/utils/storefront';
import type { Product } from '@/types/product';

interface CompareState {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  toggleItem: (product: Product) => void;
  isInCompare: (productId: string) => boolean;
  clearCompare: () => void;
}

export const useCompareStore = create<CompareState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product) => {
        set((state) => {
          // Cap applies per storefront — comparing across storefronts doesn't
          // make sense (different read sites filter by storefront anyway), so
          // fashion's 4 items shouldn't block a pet-food add.
          const sf = getStorefrontOfProductId(product.id);
          const sameStorefrontCount = state.items.filter(
            (i) => getStorefrontOfProductId(i.id) === sf
          ).length;
          if (sameStorefrontCount >= MAX_COMPARE_ITEMS) return state;
          if (state.items.some((i) => i.id === product.id)) return state;
          return { items: [...state.items, product] };
        });
      },

      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((i) => i.id !== productId),
        }));
      },

      toggleItem: (product) => {
        const exists = get().items.some((i) => i.id === product.id);
        if (exists) {
          get().removeItem(product.id);
        } else {
          get().addItem(product);
        }
      },

      isInCompare: (productId) => get().items.some((i) => i.id === productId),

      clearCompare: () => set({ items: [] }),
    }),
    {
      name: 'ambaz-compare',
    }
  )
);
