'use client';

import Link from 'next/link';

export default function NutritionCustom404Page() {
  return (
    <>
      <div style={{ backgroundColor: '#f4f5f7', padding: '40px 0 50px', textAlign: 'center' }}>
        <div className="container-main">
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#222' }}>404</h1>
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '120px 0 200px' }}>
        <h2 style={{ fontSize: '40px', fontWeight: 700, color: '#222', marginBottom: '16px' }}>Oops! Page not found</h2>
        <p style={{ fontSize: '16px', color: '#777', marginBottom: '36px' }}>The page you requested cannot be fetched.</p>
        <Link
          href="/nutrition/shop"
          style={{
            display: 'inline-block', padding: '16px 36px',
            backgroundColor: 'rgb(140, 255, 100)', color: '#0e1a0a', fontSize: '16px', fontWeight: 700,
            borderRadius: '40px', textDecoration: 'none',
            transition: 'background-color 250ms ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#b1d85a'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgb(140, 255, 100)'; }}
        >
          Return to shop
        </Link>
      </div>
    </>
  );
}
