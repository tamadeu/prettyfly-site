'use client';

import { useState } from 'react';
import Image from 'next/image';

export function BookNewsletter() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <section>
      <div className="container-main">
        <div className="bknl-band">
          <Image src="/book/newsletter-signup/newsletter__signup-1.webp" alt="" fill style={{ objectFit: 'cover', objectPosition: 'right center' }} sizes="100vw" />
          <div className="bknl-inner">
            <div className="bknl-copy">
              <h2 className="bknl-title">Get 25% Off Your Order!</h2>
              <p className="bknl-sub">Enter your email and receive a 25% discount on your next order!</p>
            </div>
            <form
              className="bknl-form"
              onSubmit={(e) => { e.preventDefault(); if (email.trim()) { setSent(true); setEmail(''); } }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => { setEmail(e.target.value); setSent(false); }}
                placeholder="Enter your email"
                aria-label="Email address"
                className="bknl-input"
              />
              <button type="submit" className="bknl-btn">{sent ? 'Subscribed ✓' : 'Subscribe'}</button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .bknl-band {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          background: #e6e3a8;
        }
        .bknl-inner {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
          padding: clamp(28px, 4vw, 44px) clamp(24px, 4vw, 56px);
          min-height: 180px;
        }
        .bknl-title { font-size: clamp(24px, 3.4vw, 34px); font-weight: 800; color: #2a2a2a; margin-bottom: 8px; }
        .bknl-sub { font-size: 14px; color: #6b6b48; }
        .bknl-form {
          display: flex;
          align-items: center;
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 14px rgba(0,0,0,0.08);
          max-width: 440px;
          width: 100%;
        }
        .bknl-input {
          flex: 1;
          height: 52px;
          padding: 0 18px;
          font-size: 14px;
          color: #222;
          background: transparent;
          border: none;
          outline: none;
          min-width: 0;
        }
        .bknl-input::placeholder { color: #9a9a9a; }
        .bknl-btn {
          height: 52px;
          padding: 0 26px;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          background: #e0294a;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          transition: background 200ms ease;
        }
        .bknl-btn:hover { background: #b81f3b; }

        @media (min-width: 750px) {
          .bknl-copy { max-width: 46%; }
          .bknl-form { max-width: 420px; }
        }
      `}</style>
    </section>
  );
}
