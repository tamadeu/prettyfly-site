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

export function ToysNewsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="tynl-section">
      <div className="container-main tynl-inner">
        <div className="tynl-text">
          <h2 className="tynl-title">Subscribe to our emails</h2>
          <p className="tynl-copy">Be the first to know about new collections and exclusive offers.</p>
        </div>

        <form
          className="tynl-form"
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
            className="tynl-input"
            aria-label="Email address"
          />
          <span className="tynl-dots"><IconDots /></span>
          <button type="submit" className="tynl-submit">
            {submitted ? 'Subscribed' : 'Subscribe'}
          </button>
        </form>
      </div>

      <style>{`
        /* Structural fix: container-main now lives on its own inner div
           (the pattern every other section in this project follows)
           instead of being merged onto the same element as the section's
           own background/flex/height rules — that merge was the section
           extending past the container's intended width. */
        .tynl-section {
          height: 200px;
          background: #f5f5f5;
          display: flex;
          align-items: center;
          overflow-x: hidden;
          width: 100%;
        }
        .tynl-inner {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .tynl-title {
          font-size: clamp(26px, 3.2vw, 36px);
          font-weight: 700;
          color: #171717;
          margin: 0;
          line-height: 1.2;
        }
        .tynl-copy {
          font-size: 15px;
          color: #5b6472;
          margin: 0;
        }

        .tynl-form {
          display: flex;
          align-items: center;
          border: 1px solid #d8d8d4;
          background: #fff;
          border-radius: 2px;
          max-width: 460px;
        }
        .tynl-input {
          flex: 1;
          min-width: 0;
          border: none;
          outline: none;
          padding: 16px 20px;
          font-size: 15px;
          color: #333;
          background: transparent;
        }
        .tynl-input::placeholder {
          color: #8a8378;
        }
        .tynl-dots {
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
        .tynl-submit {
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
        .tynl-submit:hover { color: #1B9E91; }

        @media (min-width: 992px) {
          .tynl-inner { flex-direction: row; align-items: center; justify-content: space-between; gap: 40px; }
          .tynl-text { flex: 1 1 auto; min-width: 0; }
          .tynl-form { flex: 0 1 500px; min-width: 0; max-width: 500px; }
        }
      `}</style>
    </section>
  );
}
