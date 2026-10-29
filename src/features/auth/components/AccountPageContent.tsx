'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { Customer } from '@/lib/customer-api';
import { useWishlistStore } from '@/store/wishlistStore';
import { flushCart } from '@/components/shared/CartSync';
import { AUTH_EVENT } from '@/components/shared/WishlistSync';
import { AccountAddresses } from './account/AccountAddresses';
import { AccountOrders } from './account/AccountOrders';
import { AccountProfile } from './account/AccountProfile';
import { AccountWishlist } from './account/AccountWishlist';
import { ACCOUNT_TABS, type AccountTab } from './account/tabs';

export function AccountPageContent({ customer, initialTab = 'dados' }: { customer: Customer; initialTab?: AccountTab }) {
  const router = useRouter();
  const [tab, setTab] = useState<AccountTab>(initialTab);
  const wishlistCount = useWishlistStore((s) => s.items.length);

  function select(next: AccountTab) {
    setTab(next);
    window.history.replaceState(null, '', next === 'dados' ? '/minha-conta' : `/minha-conta?aba=${next}`);
  }

  async function logout() {
    await flushCart();
    await fetch('/api/auth/logout', { method: 'POST' });
    // Evita que os favoritos da conta fiquem no navegador após sair.
    useWishlistStore.setState({ items: [] });
    window.dispatchEvent(new Event(AUTH_EVENT));
    router.push('/login');
    router.refresh();
  }

  return (
    <div className="container-main ac-page">
      <div className="ac-top">
        <div>
          <h1 className="ac-title">Minha conta</h1>
          <p className="ac-muted">Olá, {customer.name.split(' ')[0]} · {customer.email}</p>
        </div>
        <button type="button" className="ac-btn ac-btn-ghost" onClick={logout}>Sair</button>
      </div>

      <div className="ac-layout">
        <nav className="ac-tabs" aria-label="Seções da conta" role="tablist">
          {ACCOUNT_TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={tab === t.id}
              className={`ac-tab${tab === t.id ? ' is-active' : ''}`}
              onClick={() => select(t.id)}
            >
              {t.label}
              {t.id === 'favoritos' && wishlistCount > 0 ? <span className="ac-count">{wishlistCount}</span> : null}
            </button>
          ))}
        </nav>

        <section className="ac-panel" role="tabpanel">
          {tab === 'dados' && <AccountProfile customer={customer} />}
          {tab === 'enderecos' && <AccountAddresses customerName={customer.name} />}
          {tab === 'compras' && <AccountOrders />}
          {tab === 'favoritos' && <AccountWishlist />}
        </section>
      </div>

      <style>{styles}</style>
    </div>
  );
}

const styles = `
  .ac-page { padding-top: 5rem; padding-bottom: 8rem; }
  .ac-top { display: flex; justify-content: space-between; align-items: flex-end; gap: 2rem; margin-bottom: 3.2rem; flex-wrap: wrap; }
  .ac-title { font-size: 3.6rem; font-weight: 600; color: var(--color-heading); margin: 0 0 0.6rem; }
  .ac-muted { color: #777; font-size: 1.4rem; margin: 0; }
  .ac-layout { display: grid; grid-template-columns: 24rem 1fr; gap: 4rem; align-items: start; }
  .ac-tabs { display: flex; flex-direction: column; border: 1px solid #e5e5e5; border-radius: 0.6rem; overflow: hidden; background: #fff; }
  .ac-tab { display: flex; justify-content: space-between; align-items: center; text-align: left; background: #fff; border: 0; border-bottom: 1px solid #eee; padding: 1.6rem 1.8rem; font-size: 1.5rem; font-family: inherit; color: #444; cursor: pointer; }
  .ac-tab:last-child { border-bottom: 0; }
  .ac-tab:hover { background: #fafafa; }
  .ac-tab.is-active { background: #111; color: #fff; }
  .ac-count { background: #c96742; color: #fff; border-radius: 99px; font-size: 1.1rem; min-width: 2rem; height: 2rem; display: inline-flex; align-items: center; justify-content: center; padding: 0 0.6rem; }
  .ac-panel { border: 1px solid #e5e5e5; border-radius: 0.6rem; background: #fff; padding: 3.2rem; min-height: 32rem; }
  .ac-h2 { font-size: 2rem; font-weight: 600; color: var(--color-heading); margin: 0 0 1.6rem; }
  .ac-head { display: flex; justify-content: space-between; align-items: center; gap: 1.6rem; margin-bottom: 1.6rem; flex-wrap: wrap; }
  .ac-head .ac-h2 { margin: 0; }
  .ac-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.6rem; margin-top: 1.6rem; }
  .ac-span { grid-column: 1 / -1; }
  .ac-field { display: flex; flex-direction: column; gap: 0.6rem; font-size: 1.3rem; color: #555; }
  .ac-input { width: 100%; height: 4.8rem; border: 1px solid #c9c9c9; border-radius: 0.4rem; padding: 0 1.4rem; font-size: 1.5rem; color: #111; background: #fff; font-family: inherit; outline: none; transition: border-color .2s, box-shadow .2s; }
  .ac-input:focus { border-color: #111; box-shadow: 0 0 0 3px rgba(17,17,17,.08); }
  .ac-input:disabled { background: #f4f4f4; color: #777; }
  .ac-check { display: flex; align-items: center; gap: 0.8rem; font-size: 1.4rem; margin: 2rem 0 0; }
  .ac-btn { height: 4.6rem; padding: 0 2.6rem; background: #111; color: #fff; border: 1px solid #111; border-radius: 0.4rem; font-size: 1.4rem; font-weight: 600; font-family: inherit; cursor: pointer; align-items: center; justify-content: center; text-decoration: none; }
  .ac-btn:hover { background: #333; }
  .ac-btn:disabled { opacity: .6; cursor: default; }
  .ac-btn-ghost { background: transparent; color: #111; }
  .ac-btn-ghost:hover { background: #f4f4f4; }
  .ac-row { display: flex; gap: 1.6rem; align-items: center; flex-wrap: wrap; margin-top: 2.4rem; }
  .ac-link { background: none; border: 0; padding: 0; font-family: inherit; font-size: 1.4rem; text-decoration: underline; cursor: pointer; color: #111; }
  .ac-danger { color: #c0392b; }
  .ac-ok { color: #2e7d32; font-size: 1.4rem; margin: 2rem 0 0; }
  .ac-error { color: #c0392b; font-size: 1.4rem; margin: 2rem 0 0; }
  .ac-notice { background: #fff7e6; border: 1px solid #f0d9a8; border-radius: 0.4rem; padding: 1.6rem; margin-bottom: 2.4rem; font-size: 1.4rem; }
  .ac-notice p { margin: 0 0 0.6rem; }
  .ac-empty { text-align: center; border: 1px dashed #d5d5d5; border-radius: 0.6rem; padding: 5rem 2rem; color: #666; font-size: 1.5rem; }
  .ac-empty p { margin: 0; }
  .ac-cards { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr)); gap: 1.6rem; }
  .ac-card { border: 1px solid #e0e0e0; border-radius: 0.6rem; padding: 1.8rem; font-size: 1.4rem; color: #444; }
  .ac-card p { margin: 0.2rem 0; }
  .ac-card-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem; color: #111; }
  .ac-badge { background: #111; color: #fff; font-size: 1.1rem; padding: 0.2rem 0.8rem; border-radius: 99px; }
  .ac-products { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr)); gap: 2rem; }
  .ac-product-img { display: block; aspect-ratio: 3 / 4; background: #f4f4f4; border-radius: 0.4rem; overflow: hidden; }
  .ac-product-img img { width: 100%; height: 100%; object-fit: cover; }
  .ac-product-name { display: block; margin-top: 1rem; font-size: 1.4rem; color: #111; text-decoration: none; }
  .ac-product-price { margin: 0.4rem 0 0.8rem; font-size: 1.4rem; display: flex; gap: 0.8rem; }
  .ac-product-price s { color: #999; }
  @media (max-width: 800px) {
    .ac-layout { grid-template-columns: 1fr; gap: 2.4rem; }
    .ac-tabs { flex-direction: row; overflow-x: auto; }
    .ac-tab { white-space: nowrap; border-bottom: 0; border-right: 1px solid #eee; }
    .ac-panel { padding: 2rem; }
    .ac-grid { grid-template-columns: 1fr; }
  }
`;
