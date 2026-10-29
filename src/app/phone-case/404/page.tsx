import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 — Page Not Found | Phone Case Shop',
};

export default function PhoneCase404Page() {
  return (
    <>
      <div style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '60px 20px',
      }}>
        <div>
          <p style={{ fontSize: '120px', fontWeight: 800, color: '#f0f0f0', lineHeight: 1, margin: '0 0 20px', letterSpacing: '-4px' }}>404</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 700, color: '#111', margin: '0 0 16px' }}>
            Page Not Found
          </h1>
          <p style={{ fontSize: '16px', color: '#777', lineHeight: 1.7, maxWidth: '420px', margin: '0 auto 36px' }}>
            The page you are looking for does not exist or has been moved. Let us help you find what you need.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/home/phone-case-shop"
              style={{
                display: 'inline-flex', alignItems: 'center',
                background: '#111', color: '#fff',
                fontSize: '15px', fontWeight: 600,
                padding: '14px 28px', borderRadius: '4px',
                textDecoration: 'none',
              }}
            >
              Back to Home
            </Link>
            <Link
              href="/phone-case/shop"
              style={{
                display: 'inline-flex', alignItems: 'center',
                background: 'transparent', color: '#111',
                fontSize: '15px', fontWeight: 600,
                padding: '14px 28px', borderRadius: '4px',
                textDecoration: 'none',
                border: '1.5px solid #ccc',
              }}
            >
              Browse All Cases
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
