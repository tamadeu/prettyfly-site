'use client';

import { useState } from 'react';

function IconDots() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <circle cx="5" cy="12" r="1.8" />
      <circle cx="12" cy="12" r="1.8" />
      <circle cx="19" cy="12" r="1.8" />
    </svg>
  );
}

export function Jewelry2Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="jznl-section container-main">
      <div className="jznl-inner">
        <div className="jznl-text">
          <h2 className="jznl-title">Subscribe to our emails</h2>
          <p className="jznl-copy">Be the first to know about new collections and exclusive offers.</p>
        </div>

        <form
          className="jznl-form"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="jznl-input"
            aria-label="Email address"
          />
          <span className="jznl-dots"><IconDots /></span>
          <button type="submit" className="jznl-submit">
            {submitted ? 'Subscribed' : 'Subscribe'}
          </button>
        </form>
      </div>

      <style>{`
        .jznl-section {
          height: 200px;
          background: #f5f5f5;
          display: flex;
          align-items: center;
          overflow-x: hidden;
        }
        .jznl-inner {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .jznl-title {
          font-family: var(--font-playfair, 'Playfair Display'), serif;
          font-size: clamp(26px, 3.2vw, 36px);
          font-weight: 700;
          color: #171717;
          margin: 0;
          line-height: 1.2;
        }
        .jznl-copy {
          font-size: 15px;
          color: #5b6472;
          margin: 0;
        }

        .jznl-form {
          display: flex;
          align-items: center;
          border: 1px solid #d8d8d4;
          background: #fff;
          border-radius: 2px;
          max-width: 460px;
        }
        .jznl-input {
          flex: 1;
          min-width: 0;
          border: none;
          outline: none;
          padding: 16px 20px;
          font-family: var(--font-playfair, 'Playfair Display'), serif;
          font-style: italic;
          font-size: 16px;
          color: #8a8378;
          background: transparent;
        }
        .jznl-input::placeholder {
          font-family: var(--font-playfair, 'Playfair Display'), serif;
          font-style: italic;
          color: #8a8378;
        }
        .jznl-dots {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          margin-right: 6px;
          border-radius: 4px;
          background: #ececea;
          color: #8a8378;
        }
        .jznl-submit {
          flex-shrink: 0;
          border: none;
          background: none;
          color: #171717;
          font-size: 15px;
          font-weight: 700;
          padding: 14px 24px;
          cursor: pointer;
          transition: color 200ms ease;
        }
        .jznl-submit:hover { color: #7a4a55; }

        @media (min-width: 992px) {
          .jznl-inner { flex-direction: row; align-items: center; justify-content: space-between; gap: 40px; }
          .jznl-text { flex: 1 1 auto; min-width: 0; }
          .jznl-form { flex: 0 1 500px; min-width: 0; max-width: 500px; }
        }
      `}</style>
    </section>
  );
}
