'use client';

import Link from 'next/link';

export default function PizzaCustom404Page() {
  return (
    <div style={{ background: '#000000' }}>
      <div style={{ backgroundColor: '#1a1a1a', padding: '40px 0 50px', textAlign: 'center' }}>
        <div className="container-main">
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#fff' }}>404</h1>
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '120px 0 200px', backgroundColor: '#111' }}>
        <h2 style={{ fontSize: '40px', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>Oops! Page not found</h2>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)', marginBottom: '36px' }}>
          The page you requested cannot be fetched.
        </p>
        <Link
          href="/pizza/shop"
          style={{
            display: 'inline-block',
            padding: '16px 36px',
            backgroundColor: '#e84d1c',
            color: '#fff',
            fontSize: '16px',
            fontWeight: 600,
            borderRadius: '40px',
            textDecoration: 'none',
            transition: 'background-color 250ms ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#c73d12'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#e84d1c'; }}
        >
          Return to shop
        </Link>
      </div>
    </div>
  );
}
