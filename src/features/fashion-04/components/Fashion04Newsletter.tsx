'use client';

import { useState } from 'react';

function IconMail({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z" />
    </svg>
  );
}

export function Fashion04Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section>
      <div className="container-main">
        <div className="f4nl-band">
          <div className="f4nl-text">
            <h2 className="f4nl-title">Subscribe to our emails</h2>
            <p className="f4nl-sub">Be the first to know about new collections and exclusive offers.</p>
          </div>

          <div className="f4nl-form-wrap">
            <form className="f4nl-form" onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="f4nl-input"
                aria-label="Enter your email"
                required
              />
              <span className="f4nl-icon" aria-hidden="true">
                <IconMail size={18} />
              </span>
              <button type="submit" className="f4nl-btn">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .f4nl-band {
          background-color: #f6f8fa;
          padding: clamp(36px, 5vw, 60px) clamp(20px, 4vw, 56px);
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .f4nl-title {
          font-size: clamp(26px, 3.4vw, 38px);
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.2;
          margin-bottom: 14px;
        }
        .f4nl-sub {
          font-size: 15px;
          color: #777;
          line-height: 1.6;
        }

        .f4nl-form-wrap { width: 100%; }
        .f4nl-form {
          display: flex;
          align-items: center;
          width: 100%;
          background-color: #fff;
          border: 1px solid #d9dde2;
          height: 52px;
          padding: 0 6px 0 18px;
        }
        .f4nl-input {
          flex: 1 1 auto;
          min-width: 0;
          height: 100%;
          border: none;
          outline: none;
          background: transparent;
          font-size: 15px;
          color: #222;
        }
        .f4nl-input::placeholder { color: #9aa0a6; }
        .f4nl-icon {
          display: flex;
          align-items: center;
          color: #b5bbc2;
          padding: 0 14px;
        }
        .f4nl-btn {
          border: none;
          background: transparent;
          font-size: 15px;
          font-weight: 700;
          color: #1a1a1a;
          cursor: pointer;
          padding: 0 16px;
          height: 100%;
          white-space: nowrap;
          transition: color 200ms ease;
        }
        .f4nl-btn:hover { color: #F15B41; }

        /* Desktop: text left, form right */
        @media (min-width: 992px) {
          .f4nl-band {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            gap: 40px;
          }
          .f4nl-form-wrap { display: flex; justify-content: flex-end; }
          .f4nl-form { max-width: 480px; }
        }
      `}</style>
    </section>
  );
}
