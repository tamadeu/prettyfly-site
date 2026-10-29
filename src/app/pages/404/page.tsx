'use client';

import Link from 'next/link';

export default function Custom404Page() {
  return (
    <>
      {/* Grey header bar */}
      <div style={{ backgroundColor: 'rgb(247, 248, 252)', padding: '40px 0 50px', textAlign: 'center' }}>
        <div className="container-main">
          <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#222' }}>404</h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ textAlign: 'center', padding: '120px 0 200px' }}>
        <h2 style={{ fontSize: '40px', fontWeight: 700, color: '#222', marginBottom: '16px' }}>Ops! Página não encontrada</h2>
        <p style={{ fontSize: '16px', color: '#777', marginBottom: '36px' }}>A página que você solicitou não existe.</p>
        <Link
          href="/shop"
          style={{
            display: 'inline-block', padding: '16px 36px',
            backgroundColor: '#222', color: '#fff', fontSize: '16px', fontWeight: 600,
            borderRadius: '40px', textDecoration: 'none',
            transition: 'background-color 250ms ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#F15B41'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#222'; }}
        >
          Voltar à loja
        </Link>
      </div>
    </>
  );
}
