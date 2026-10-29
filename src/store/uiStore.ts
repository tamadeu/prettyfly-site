'use client';

import { create } from 'zustand';
import type { Product } from '@/types/product';

interface UIState {
  searchOpen: boolean;
  mobileMenuOpen: boolean;
  quickViewProduct: Product | null;
  toggleSearch: () => void;
  openSearch: () => void;
  closeSearch: () => void;
  toggleMobileMenu: () => void;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
}

export const useUIStore = create<UIState>()((set) => ({
  searchOpen: false,
  mobileMenuOpen: false,
  quickViewProduct: null,

  toggleSearch: () => set((s) => ({ searchOpen: !s.searchOpen, mobileMenuOpen: false })),
  openSearch: () => set({ searchOpen: true, mobileMenuOpen: false }),
  closeSearch: () => set({ searchOpen: false }),

  toggleMobileMenu: () => set((s) => ({ mobileMenuOpen: !s.mobileMenuOpen, searchOpen: false })),
  openMobileMenu: () => set({ mobileMenuOpen: true, searchOpen: false }),
  closeMobileMenu: () => set({ mobileMenuOpen: false }),

  openQuickView: (product) => set({ quickViewProduct: product }),
  closeQuickView: () => set({ quickViewProduct: null }),
}));
