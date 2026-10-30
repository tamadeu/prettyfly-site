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

export interface ShippingQuote {
  quote_id: string;
  input_key: string;
  environment: 'sandbox' | 'production';
  expires_at: string;
  selected_id: string | null;
  options: { id: string; name: string; company: string; price: number; delivery_days: number; free_shipping?: boolean }[];
}

export interface CouponSnapshot {
  code: string; name: string; discount_type: 'percentage' | 'fixed'; discount_value: number;
  subtotal: number; eligible_subtotal: number; discount_amount: number; expires_at?: string;
}
interface CheckoutState {
  coupon: CouponSnapshot | null; cartSubtotal: number | null; couponDiscount: number; cartTotal: number | null;
  freeShippingPolicy: { minimum: number } | null;
  shipping: ShippingQuote | null;
  shippingStatus: 'idle' | 'loading' | 'selecting' | 'ready' | 'error';
  shippingError: string;
  draft: CheckoutDraft;
  ready: boolean;
  status: 'loading' | 'saved' | 'saving' | 'error' | 'conflict';
  message: string;
  update: (values: Partial<CheckoutDraft>) => void;
}

export const useCheckoutStore = create<CheckoutState>((set) => ({
  coupon: null, cartSubtotal: null, couponDiscount: 0, cartTotal: null,
  freeShippingPolicy: null,
  shipping: null, shippingStatus: 'idle', shippingError: '',
  draft: { ...emptyCheckout }, ready: false, status: 'loading', message: '',
  update: (values) => set((s) => ({ draft: { ...s.draft, ...values } })),
}));
