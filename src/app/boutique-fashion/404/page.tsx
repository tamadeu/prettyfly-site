import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 — Page Not Found | Boutique Fashion',
};

export default function BoutiqueFashion404Page() {
  return (
    <>
      <div style={{ backgroundColor: '#f8f8f8', padding: '30px 0', textAlign: 'center' }}>
        <div className="container-main">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px' }}>
            <Link href="/home/boutique-fashion-shop" style={{ color: '#777', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Home</Link>
            <span style={{ color: '#bbb' }}>/</span>
            <span style={{ color: '#222' }}>404</span>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '120px 0 200px' }}>
        <div className="container-main">
          <h1 style={{ fontSize: '120px', fontWeight: 800, color: '#111', lineHeight: 1, marginBottom: '16px' }}>404</h1>
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#222', marginBottom: '16px' }}>Oops! Page not found</h2>
          <p style={{ fontSize: '16px', color: '#777', marginBottom: '36px', lineHeight: 1.6 }}>
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link href="/boutique-fashion/shop" className="bf-404-cta">
            Continue Shopping
          </Link>
        </div>
      </div>

      <style>{`
        .bf-404-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #111;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          padding: 16px 36px;
          border-radius: 40px;
          text-decoration: none;
          transition: background-color 220ms ease;
        }
        .bf-404-cta:hover { background-color: #333; }
      `}</style>
    </>
  );
}
