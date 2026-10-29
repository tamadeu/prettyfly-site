'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// ─────────────────────────── storage keys ────────────────────────────────────
const KEY_PERMANENT = 'nl_popup_dismissed_permanent';
const KEY_COOLDOWN  = 'nl_popup_cooldown_until';
const KEY_CONVERTED = 'nl_popup_converted';
const COOLDOWN_MS   = 7 * 24 * 60 * 60 * 1000; // 7 days

// ─────────────────────────── helpers ─────────────────────────────────────────
function shouldShow(): boolean {
  if (typeof window === 'undefined') return false;
  if (localStorage.getItem(KEY_PERMANENT) === '1') return false;
  if (localStorage.getItem(KEY_CONVERTED) === '1') return false;
  const cooldown = localStorage.getItem(KEY_COOLDOWN);
  if (cooldown && Date.now() < parseInt(cooldown, 10)) return false;
  return true;
}
function dismissPermanent() { localStorage.setItem(KEY_PERMANENT, '1'); }
function dismissCooldown()  { localStorage.setItem(KEY_COOLDOWN, String(Date.now() + COOLDOWN_MS)); }
function markConverted()    { localStorage.setItem(KEY_CONVERTED, '1'); }
function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

// ─────────────────────────── props ───────────────────────────────────────────
export interface NewsletterPopupProps {
  image?:       string;
  imageAlt?:    string;
  heading?:     string;
  description?: string;
  buttonLabel?: string;
  disclaimer?:  string;
  accentColor?: string;
}

// ─────────────────────────── component ───────────────────────────────────────
export function NewsletterPopup(props: NewsletterPopupProps) {
  const pathname = usePathname();
  if (pathname === '/cart' || pathname === '/checkout') return null;
  return <NewsletterDialog {...props} />;
}

function NewsletterDialog({
  image       = '/popup/popup1.png',
  imageAlt    = 'Cadastro para receber novidades',
  heading     = 'Vantagens exclusivas',
  description = 'Cadastre-se para receber em primeira mão novidades, promoções especiais e ofertas exclusivas da loja.',
  buttonLabel = 'Assinar',
  disclaimer  = '*Ao enviar este formulário, você concorda em receber nossos e-mails e pode cancelar a inscrição quando quiser.',
  accentColor = '#111111',
}: NewsletterPopupProps) {
  const [visible, setVisible] = useState(false);
  const [email,   setEmail]   = useState('');
  const [error,   setError]   = useState('');
  const [success, setSuccess] = useState(false);

  const dialogRef    = useRef<HTMLDivElement>(null);
  const closeRef     = useRef<HTMLButtonElement>(null);
  const prevFocusRef = useRef<Element | null>(null);

  // ── open ──────────────────────────────────────────────────────────────────
  const open = useCallback(() => {
    if (!shouldShow()) return;
    setVisible(true);
    prevFocusRef.current = document.activeElement;
    requestAnimationFrame(() => closeRef.current?.focus());
  }, []);

  // ── close helpers ─────────────────────────────────────────────────────────
  const closePermanent = useCallback(() => {
    dismissPermanent();
    setVisible(false);
    (prevFocusRef.current as HTMLElement | null)?.focus();
  }, []);

  const closeCooldown = useCallback(() => {
    dismissCooldown();
    setVisible(false);
    (prevFocusRef.current as HTMLElement | null)?.focus();
  }, []);

  // ── triggers (timer / exit-intent / scroll) ───────────────────────────────
  useEffect(() => {
    if (!shouldShow()) return;
    let fired = false;
    const tryOpen = () => { if (!fired) { fired = true; open(); } };

    const timer = setTimeout(tryOpen, 5000);

    const onMove = (e: MouseEvent) => { if (e.clientY < 60) tryOpen(); };
    document.addEventListener('mousemove', onMove);

    const onScroll = () => {
      if ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight > 0.4)
        tryOpen();
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, [open]);

  // ── ESC ───────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeCooldown(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [visible, closeCooldown]);

  // ── focus trap ────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!visible || !dialogRef.current) return;
    const dialog    = dialogRef.current;
    const focusable = Array.from(
      dialog.querySelectorAll<HTMLElement>(
        'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])'
      )
    ).filter(el => !el.hasAttribute('disabled'));

    const trapTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !focusable.length) return;
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (e.shiftKey) { if (document.activeElement === first) { e.preventDefault(); last.focus(); } }
      else            { if (document.activeElement === last)  { e.preventDefault(); first.focus(); } }
    };
    dialog.addEventListener('keydown', trapTab);
    return () => dialog.removeEventListener('keydown', trapTab);
  }, [visible]);

  // ── submit ────────────────────────────────────────────────────────────────
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValidEmail(email)) { setError('Digite um endereço de e-mail válido.'); return; }
    setError('');
    markConverted();
    setSuccess(true);
    setTimeout(() => {
      setVisible(false);
      (prevFocusRef.current as HTMLElement | null)?.focus();
    }, 2600);
  }

  if (!visible) return null;

  return (
    <>
      {/* ── Backdrop ───────────────────────────────────────────────────────── */}
      <div
        onClick={closeCooldown}
        aria-hidden="true"
        style={{
          position: 'fixed', inset: 0,
          backgroundColor: 'rgba(0,0,0,0.50)',
          zIndex: 9000,
          animation: 'nlFadeIn 280ms ease forwards',
        }}
      />

      {/* ── Dialog wrapper (centres the card) ─────────────────────────────── */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="nl-heading"
        style={{
          position: 'fixed', inset: 0,
          zIndex: 9001,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '16px',
          pointerEvents: 'none',
        }}
      >

        {/* ── Card ───────────────────────────────────────────────────────── */}
        <div
          className="nl-card"
          style={{ pointerEvents: 'auto' }}
          onClick={e => e.stopPropagation()}
        >

          {/* ── X close (top-right of entire card) ───────────────────────── */}
          <button
            ref={closeRef}
            onClick={closeCooldown}
            aria-label="Fechar janela de novidades"
            className="nl-close"
          >
            {/* × rendered via CSS so we don't need an SVG */}
            <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2"
                 strokeLinecap="round" width={14} height={14}>
              <line x1="2" y1="2" x2="16" y2="16" />
              <line x1="16" y1="2" x2="2" y2="16" />
            </svg>
          </button>

          {/* ── LEFT: model image ─────────────────────────────────────────── */}
          <div className="nl-img-col" aria-hidden="true">
            <Image
              src={image}
              alt={imageAlt}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              sizes="260px"
              priority
            />
          </div>

          {/* ── RIGHT: content ────────────────────────────────────────────── */}
          <div className="nl-content">

            {success ? (
              /* ── Success state ───────────────────────────────────────── */
              <div className="nl-success">
                <div className="nl-success-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                       strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                       width={28} height={28}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="nl-success-title">Inscrição confirmada!</p>
                <p className="nl-success-sub">Agradecemos por se inscrever. Confira sua caixa de entrada para ver as ofertas exclusivas.</p>
              </div>
            ) : (
              /* ── Main state ──────────────────────────────────────────── */
              <>
                <h2 id="nl-heading" className="nl-heading">{heading}</h2>
                <p className="nl-desc">{description}</p>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="nl-row">
                    <input
                      type="email"
                      value={email}
                      onChange={e => { setEmail(e.target.value); setError(''); }}
                      placeholder="Digite seu endereço de e-mail"
                      aria-label="Endereço de e-mail"
                      aria-describedby={error ? 'nl-err' : undefined}
                      className="nl-input"
                      autoComplete="email"
                    />
                    <button
                      type="submit"
                      className="nl-submit"
                      style={{ backgroundColor: accentColor }}
                    >
                      {buttonLabel}
                    </button>
                  </div>
                  {error && (
                    <p id="nl-err" role="alert" className="nl-error">{error}</p>
                  )}
                </form>

                <p className="nl-disclaimer">{disclaimer}</p>

                <button
                  type="button"
                  onClick={closePermanent}
                  className="nl-no-thanks"
                >
                  Não, obrigado!
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ── Styles ─────────────────────────────────────────────────────────── */}
      <style>{`
        @keyframes nlFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes nlSlideUp {
          from { opacity: 0; transform: translateY(28px) scale(0.975); }
          to   { opacity: 1; transform: translateY(0)    scale(1);     }
        }

        /* ── Card shell ─────────────────────────────────────────────────── */
        .nl-card {
          position: relative;
          display: flex;
          width: 100%;
          max-width: 660px;
          min-height: 360px;
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.22), 0 4px 16px rgba(0,0,0,0.12);
          animation: nlSlideUp 340ms cubic-bezier(0.25,0.46,0.45,0.94) forwards;
        }

        /* ── X close button ─────────────────────────────────────────────── */
        /* Positioned at the top-right of the whole card, floating above both cols */
        .nl-close {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 2;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1.5px solid #c8c8c8;
          background: rgba(255,255,255,0.92);
          color: #555;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 180ms ease, border-color 180ms ease, color 180ms ease;
        }
        .nl-close:hover {
          background: #111;
          border-color: #111;
          color: #fff;
        }
        .nl-close:focus-visible {
          outline: 2px solid #111;
          outline-offset: 2px;
        }

        /* ── Left image column ──────────────────────────────────────────── */
        .nl-img-col {
          position: relative;
          width: 250px;
          flex-shrink: 0;
          background: #edeae5;        /* fallback while image loads */
        }

        /* ── Right content column ───────────────────────────────────────── */
        .nl-content {
          flex: 1;
          min-width: 0;
          /* Extra top padding so content clears the X button comfortably */
          padding: 48px 38px 38px 36px;
          display: flex;
          flex-direction: column;
        }

        /* ── Heading ──────────── matches screenshot weight & size ─────── */
        .nl-heading {
          font-size: 22px;            /* 2.2rem = 22px in this project */
          font-weight: 700;
          color: #111111;
          line-height: 1.22;
          margin: 0 0 12px;
        }

        /* ── Description ────────────────────────────────────────────────── */
        .nl-desc {
          font-size: 14px;
          color: #555555;
          line-height: 1.65;
          margin: 0 0 22px;
        }

        /* ── Email row: input + button in one bordered container ─────────
           Screenshot shows a single bordered row where the input occupies
           the left and the solid-black Subscribe button sits flush right. */
        .nl-row {
          display: flex;
          align-items: stretch;
          border: 1.5px solid #d4d4d4;
          border-radius: 5px;
          overflow: hidden;
          height: 48px;
          margin-bottom: 10px;
        }
        .nl-row:focus-within {
          border-color: #999;
        }
        .nl-input {
          flex: 1;
          min-width: 0;
          height: 100%;
          padding: 0 14px;
          font-size: 14px;
          font-family: inherit;
          border: none;
          outline: none;
          background: transparent;
          color: #111;
        }
        .nl-input::placeholder { color: #bbb; }

        /* Thin visual divider between input and button */
        .nl-submit {
          flex-shrink: 0;
          height: 100%;
          padding: 0 22px;
          font-size: 14px;
          font-weight: 600;
          font-family: inherit;
          letter-spacing: 0.01em;
          color: #fff;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          transition: opacity 180ms ease;
        }
        .nl-submit:hover { opacity: 0.82; }
        .nl-submit:focus-visible {
          outline: 2px solid #fff;
          outline-offset: -3px;
        }

        /* ── Validation error ───────────────────────────────────────────── */
        .nl-error {
          font-size: 12px;
          color: #c0392b;
          margin: -4px 0 8px;
        }

        /* ── Disclaimer ─────────────────────────────────────────────────── */
        .nl-disclaimer {
          font-size: 12px;
          color: #999999;
          line-height: 1.6;
          margin: 0 0 auto;          /* pushes "No Thanks!" to the bottom */
        }

        /* ── No Thanks! ─────────────────────────────────────────────────── */
        .nl-no-thanks {
          margin-top: 20px;
          background: none;
          border: none;
          padding: 0;
          font-size: 14px;
          font-weight: 700;
          color: #222222;
          font-family: inherit;
          cursor: pointer;
          text-align: left;
          transition: color 180ms ease;
          align-self: flex-start;
        }
        .nl-no-thanks:hover { color: #000; text-decoration: underline; }
        .nl-no-thanks:focus-visible {
          outline: 2px solid #111;
          outline-offset: 2px;
          border-radius: 2px;
        }

        /* ── Success state ──────────────────────────────────────────────── */
        .nl-success {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 0;
        }
        .nl-success-icon {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: #ecfdf5;
          color: #16a34a;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .nl-success-title {
          font-size: 20px;
          font-weight: 700;
          color: #111;
          margin: 0 0 8px;
        }
        .nl-success-sub {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          margin: 0;
        }

        /* ── Mobile (≤ 560px) ───────────────────────────────────────────── */
        @media (max-width: 560px) {
          .nl-card {
            flex-direction: column;
            max-width: 380px;
            min-height: unset;
            border-radius: 10px;
          }
          .nl-img-col {
            width: 100%;
            height: 210px;
          }
          .nl-content {
            padding: 32px 24px 28px;
          }
          .nl-heading { font-size: 20px; }
          /* Stack input + button vertically on very small screens */
          .nl-row {
            flex-direction: column;
            height: auto;
            border-radius: 6px;
          }
          .nl-input {
            height: 46px;
            border-bottom: 1.5px solid #d4d4d4;
          }
          .nl-submit {
            height: 46px;
            border-radius: 0 0 4px 4px;
          }
        }
      `}</style>
    </>
  );
}
