'use client';

import { create } from 'zustand';

export interface CheckoutDraft {
  first_name: string;
  last_name: string;
  country: string;
  postal_code: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  phone: string;
  email: string;
  notes: string;
}

export const emptyCheckout: CheckoutDraft = {
  first_name: '', last_name: '', country: 'BR', postal_code: '', street: '', number: '',
  complement: '', neighborhood: '', city: '', state: '', phone: '', email: '', notes: '',
};

interface CheckoutState {
  draft: CheckoutDraft;
  ready: boolean;
  status: 'loading' | 'saved' | 'saving' | 'error' | 'conflict';
  message: string;
  update: (values: Partial<CheckoutDraft>) => void;
}

export const useCheckoutStore = create<CheckoutState>((set) => ({
  draft: { ...emptyCheckout }, ready: false, status: 'loading', message: '',
  update: (values) => set((s) => ({ draft: { ...s.draft, ...values } })),
}));
