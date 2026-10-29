'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Cairo } from 'next/font/google';
import { useClickOutside } from '@/hooks/useClickOutside';
import { FOOTER_LINKS } from '@/lib/constants';
import { getStorefrontFromPath } from '@/utils/storefront';
import type { FooterConfig } from '@/lib/backend';

const cairo = Cairo({
  subsets: ['latin', 'arabic'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-cairo',
  display: 'swap',
});

/* ── Social Icons (same as announcement bar) ── */
function IconTwitterX() { return (<svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}><path d="M10.4883 14.651L15.25 21H22.25L14.3917 10.5223L20.9308 3H18.2808L13.1643 8.88578L8.75 3H1.75L9.26086 13.0145L2.31915 21H4.96917L10.4883 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z" /></svg>); }
function IconFacebook() { return (<svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}><path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z" /></svg>); }
function IconInstagram() { return (<svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}><path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z" /></svg>); }
function IconTikTok() { return (<svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}><path d="M16 8.24537V15.5C16 19.0899 13.0899 22 9.5 22C5.91015 22 3 19.0899 3 15.5C3 11.9101 5.91015 9 9.5 9C10.0163 9 10.5185 9.06019 11 9.17393V12.3368C10.5454 12.1208 10.0368 12 9.5 12C7.567 12 6 13.567 6 15.5C6 17.433 7.567 19 9.5 19C11.433 19 13 17.433 13 15.5V2H16C16 4.76142 18.2386 7 21 7V10C19.1081 10 17.3696 9.34328 16 8.24537Z" /></svg>); }
function IconLinkedIn() { return (<svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z" /></svg>); }

function IconChevronDown() { return (<svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" /></svg>); }
function IconPlusMobile({ open }: { open: boolean }) {
  return (
    <span style={{ position: 'relative', width: '16px', height: '16px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" fill="none" viewBox="0 0 10 10" width="16" height="16" style={{ position: 'absolute', transition: 'opacity 350ms ease, transform 350ms ease', opacity: open ? 0 : 1, transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}>
        <path fillRule="evenodd" clipRule="evenodd" d="M1 4.51a.5.5 0 000 1h3.5l.01 3.5a.5.5 0 001-.01V5.5l3.5-.01a.5.5 0 00-.01-1H5.5L5.49.99a.5.5 0 00-1 .01v3.5l-3.5.01H1z" fill="currentColor" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" fill="none" viewBox="0 0 10 2" width="16" height="16" style={{ position: 'absolute', transition: 'opacity 350ms ease, transform 350ms ease', opacity: open ? 1 : 0, transform: open ? 'rotate(0deg)' : 'rotate(-90deg)' }}>
        <path fillRule="evenodd" clipRule="evenodd" d="M.5 1C.5.7.7.5 1 .5h8a.5.5 0 110 1H1A.5.5 0 01.5 1z" fill="currentColor" />
      </svg>
    </span>
  );
}

/* ── Footer column — plain heading at ≥750px, accordion at <750px ── */
interface FooterColumnProps {
  id: string;
  title: string;
  expanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  isPizza?: boolean;
}
function FooterColumn({ id, title, expanded, onToggle, children, isPizza }: FooterColumnProps) {
  return (
    <div className={`ft-col${isPizza ? ' ft-col-pizza' : ''}`}>
      <button
        type="button"
        className="ft-col-head"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls={`ft-col-body-${id}`}
      >
        <span>{title}</span>
        <span className="ft-col-toggle"><IconPlusMobile open={expanded} /></span>
      </button>
      <div
        id={`ft-col-body-${id}`}
        className={`ft-col-body ${expanded ? 'is-open' : ''}`}
      >
        <div className="ft-col-body-inner">{children}</div>
      </div>
    </div>
  );
}
function IconArrowRight() { return (<svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" /></svg>); }
function IconMail() { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={20} height={20}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7L13.03 12.7c-.63.39-1.43.39-2.06 0L2 7" /></svg>); }

/* ── Upward Dropdown ── */
function UpwardDropdown({ selected, options, onSelect, isRtl, textColor = '#555', itemColor = '#222', triggerClassName, itemClassName }: { selected: string; options: string[]; onSelect: (v: string) => void; isRtl?: boolean; textColor?: string; itemColor?: string; triggerClassName?: string; itemClassName?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setIsOpen(false));
  useEffect(() => { if (!isOpen) return; const h = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false); }; document.addEventListener('keydown', h); return () => document.removeEventListener('keydown', h); }, [isOpen]);

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button onClick={() => setIsOpen(!isOpen)} className={triggerClassName} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: textColor, padding: '10px 20px', border: '1px solid #ddd', borderRadius: '40px', background: '#fff', cursor: 'pointer', transition: 'border-color 200ms ease' }}>
        {selected}
        <span style={{ display: 'inline-flex', transition: 'transform 300ms ease', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          <IconChevronDown />
        </span>
      </button>
      {isOpen && (
        <div style={{ position: 'absolute', bottom: 'calc(100% + 8px)', ...(isRtl ? { right: 0 } : { left: 0 }), minWidth: '240px', backgroundColor: '#fff', border: '1px solid #f0f0f0', boxShadow: '0 -6px 24px rgba(0,0,0,0.1)', paddingTop: '14px', paddingBottom: '14px', zIndex: 50, animation: 'ftDropUp 200ms ease-out' }}>
          {options.map((opt) => (
            <button key={opt} onClick={() => { onSelect(opt); setIsOpen(false); }} className={itemClassName} style={{ display: 'block', width: '100%', textAlign: isRtl ? 'right' : 'left', padding: '10px 24px', fontSize: '16px', color: itemColor, background: 'none', border: 'none', cursor: 'pointer', transition: 'color 200ms ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#F15B41'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = itemColor; }}
            >{opt}</button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Payment Icons (inline SVGs) ── */
function PaymentIcons() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      {/* Visa */}
      <svg viewBox="0 0 38 24" width="38" height="24"><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/><path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" fill="#142688"/></svg>
      {/* Mastercard */}
      <svg viewBox="0 0 38 24" width="38" height="24"><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/><circle fill="#EB001B" cx="15" cy="12" r="7"/><circle fill="#F79E1B" cx="23" cy="12" r="7"/><path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"/></svg>
      {/* Amex */}
      <svg viewBox="0 0 38 24" width="38" height="24"><path fill="#000" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z" opacity=".07"/><path fill="#006FCF" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z"/><path fill="#FFF" d="M22.012 19.936v-8.421L37 11.528v2.326l-1.732 1.852L37 17.573v2.375h-2.766l-1.47-1.622-1.46 1.628-9.292-.02Z"/><path fill="#006FCF" d="M23.013 19.012v-6.57h5.572v1.513h-3.768v1.028h3.678v1.488h-3.678v1.01h3.768v1.531h-5.572Z"/><path fill="#006FCF" d="m28.557 19.012 3.083-3.289-3.083-3.282h2.386l1.884 2.083 1.89-2.082H37v.051l-3.017 3.23L37 18.92v.093h-2.307l-1.917-2.103-1.898 2.104h-2.321Z"/><path fill="#FFF" d="M22.71 4.04h3.614l1.269 2.881V4.04h4.46l.77 2.159.771-2.159H37v8.421H19l3.71-8.421Z"/><path fill="#006FCF" d="m23.395 4.955-2.916 6.566h2l.55-1.315h2.98l.55 1.315h2.05l-2.904-6.566h-2.31Zm.25 3.777.875-2.09.873 2.09h-1.748Z"/><path fill="#006FCF" d="M28.581 11.52V4.953l2.811.01L32.84 9l1.456-4.046H37v6.565l-1.74.016v-4.51l-1.644 4.494h-1.59L30.35 7.01v4.51h-1.768Z"/></svg>
      {/* PayPal */}
      <svg viewBox="0 0 38 24" width="38" height="24"><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/><path fill="#003087" d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"/><path fill="#3086C8" d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"/><path fill="#012169" d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"/></svg>
      {/* Discover */}
      <svg viewBox="0 0 38 24" width="38" height="24" fill="none"><path fill="#000" opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z" fill="#fff"/><path d="M37 12.984S27.09 19.873 8.976 23h26.023a2 2 0 002-1.984l.024-3.02L37 12.985z" fill="#F48120"/></svg>
      {/* Shop Pay */}
      <svg viewBox="0 0 38 24" width="38" height="24"><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000"/><path d="M35.889 0C37.05 0 38 .982 38 2.182v19.636c0 1.2-.95 2.182-2.111 2.182H2.11C.95 24 0 23.018 0 21.818V2.182C0 .982.95 0 2.111 0H35.89z" fill="#5A31F4"/><path d="M9.35 11.368c-1.017-.223-1.47-.31-1.47-.705 0-.372.306-.558.92-.558.54 0 .934.238 1.225.704a.079.079 0 00.104.03l1.146-.584a.082.082 0 00.032-.114c-.475-.831-1.353-1.286-2.51-1.286-1.52 0-2.464.755-2.464 1.956 0 1.275 1.15 1.597 2.17 1.82 1.02.222 1.474.31 1.474.705 0 .396-.332.582-.993.582-.612 0-1.065-.282-1.34-.83a.08.08 0 00-.107-.035l-1.143.57a.083.083 0 00-.036.111c.454.92 1.384 1.437 2.627 1.437 1.583 0 2.539-.742 2.539-1.98s-1.155-1.598-2.173-1.82v-.003z" fill="#fff"/></svg>
    </div>
  );
}

/* ── Footer Component ── */
const SOCIAL_ICONS: Record<string, { Icon: () => React.JSX.Element; label: string }> = {
  twitter: { Icon: IconTwitterX, label: 'Twitter' },
  facebook: { Icon: IconFacebook, label: 'Facebook' },
  instagram: { Icon: IconInstagram, label: 'Instagram' },
  tiktok: { Icon: IconTikTok, label: 'TikTok' },
  linkedin: { Icon: IconLinkedIn, label: 'LinkedIn' },
};

const DEFAULT_CURRENCIES = ['Bangladesh USD $', 'Canada USD $', 'Germany USD $', 'Netherlands USD $', 'Norway USD $', 'United Kingdom USD $', 'United States USD $'];
const DEFAULT_LANGUAGES = ['Português (Brasil)'];

/* The admin-configured footer only applies to the main site; demo storefronts keep theirs. */
export function Footer({ config }: { config?: FooterConfig | null }) {
  const pathname = usePathname();
  const cfg = config && !pathname?.startsWith('/home/') && getStorefrontFromPath(pathname) === 'fashion' ? config : null;
  const isPizza = pathname?.startsWith('/pizza') || pathname?.startsWith('/home/pizza-shop');
  const isRtlDemo = pathname?.startsWith('/home/rtl-demo-shop');
  const isMegastore = pathname?.startsWith('/megastore') || pathname?.startsWith('/home/megastore-shop');
  const currencyOptions = cfg ? cfg.currencies : DEFAULT_CURRENCIES;
  const languageOptions = cfg ? cfg.languages : DEFAULT_LANGUAGES;
  const [currency, setCurrency] = useState(currencyOptions[0] ?? '');
  const [language, setLanguage] = useState(languageOptions[0] ?? '');
  const [openCols, setOpenCols] = useState<Record<string, boolean>>({});
  const toggleCol = (id: string) =>
    setOpenCols((p) => ({ ...p, [id]: !p[id] }));

  const socials = cfg
    ? cfg.socials.flatMap((s) => (SOCIAL_ICONS[s.network] ? [{ ...SOCIAL_ICONS[s.network], href: s.href }] : []))
    : Object.values(SOCIAL_ICONS).map((i) => ({ ...i, href: '#' }));

  const columns = cfg
    ? cfg.columns
    : [
        { title: 'Links rápidos', links: [...FOOTER_LINKS.quickLinks] },
        { title: 'Empresa', links: [...FOOTER_LINKS.company] },
      ];
  const showNewsletter = cfg ? cfg.show_newsletter : true;
  const showCurrency = cfg ? cfg.show_currency && currencyOptions.length > 0 : true;
  const showLanguage = cfg ? cfg.show_language && languageOptions.length > 0 : true;
  const showPayments = cfg ? cfg.show_payments : true;

  const fc = isPizza
    ? { text: 'rgba(255,255,255,0.7)', head: '#fff', icon: 'rgba(255,255,255,0.75)', divider: 'rgba(255,255,255,0.1)', newsletterBg: 'rgb(30,30,30)', newsletterBorder: '#3a3a3a', mailIcon: 'rgba(255,255,255,0.4)', linkHover: '#e84d1c' }
    : { text: '#777', head: '#222', icon: '#222', divider: '#e0e0e0', newsletterBg: '#fff', newsletterBorder: '#ddd', mailIcon: '#999', linkHover: '#F15B41' };

  return (
    <footer
      dir={isRtlDemo ? 'rtl' : 'ltr'}
      className={isRtlDemo ? cairo.variable : undefined}
      style={{ backgroundColor: isPizza ? 'rgb(20,20,20)' : (cfg?.background ?? 'rgb(247, 248, 252)'), fontFamily: isRtlDemo ? 'var(--font-cairo), sans-serif' : undefined }}
    >
      {/* ═══ TOP ═══ */}
      <div className="container-main" style={{ paddingTop: isPizza ? '80px' : '30px', paddingBottom: isPizza ? '80px' : '30px' }}>
        <div className="footer-grid">
          <FooterColumn id="about" title={cfg?.about_title ?? 'Sobre nós'} expanded={!!openCols.about} onToggle={() => toggleCol('about')} isPizza={isPizza}>
            <p style={{ fontSize: '15px', color: fc.text, lineHeight: 1.7, marginBottom: '20px' }}>
              {cfg ? cfg.about_text : 'A marca contemporânea Suruchi é conhecida pela atenção aos detalhes e pela qualidade premium.'}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              {socials.map(({ Icon, label, href }) => (
                <a key={label} href={href} aria-label={label} style={{ color: fc.icon, display: 'flex', transition: 'color 200ms ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = fc.linkHover; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = fc.icon; }}
                ><Icon /></a>
              ))}
            </div>
          </FooterColumn>

          {columns.map((column, index) => (
            <FooterColumn key={index} id={`col-${index}`} title={column.title} expanded={!!openCols[`col-${index}`]} onToggle={() => toggleCol(`col-${index}`)} isPizza={isPizza}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {column.links.map((link) => (
                  <Link key={link.label} href={link.href} style={{ fontSize: '15px', color: fc.text, textDecoration: 'none', transition: 'color 200ms ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = fc.linkHover; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = fc.text; }}
                  >{link.label}</Link>
                ))}
              </div>
            </FooterColumn>
          ))}

          {showNewsletter && <FooterColumn id="newsletter" title={cfg?.newsletter_title ?? 'Novidades por e-mail'} expanded={!!openCols.newsletter} onToggle={() => toggleCol('newsletter')} isPizza={isPizza}>
            <p style={{ fontSize: '15px', color: fc.text, lineHeight: 1.7, marginBottom: '20px' }}>
              {cfg ? cfg.newsletter_text : 'Cadastre seu e-mail para receber nossas novidades.'}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', border: `1px solid ${fc.newsletterBorder}`, borderRadius: '40px', padding: isRtlDemo ? '10px 20px 10px 14px' : '10px 14px 10px 20px', backgroundColor: fc.newsletterBg, maxWidth: '380px' }}>
              <span style={{ color: fc.mailIcon, display: 'flex', marginRight: isRtlDemo ? 0 : '10px', marginLeft: isRtlDemo ? '10px' : 0, flexShrink: 0 }}><IconMail /></span>
              <input type="email" placeholder={cfg?.newsletter_placeholder ?? 'Digite seu e-mail'} suppressHydrationWarning style={{ flex: 1, fontSize: '15px', border: 'none', outline: 'none', background: 'none', color: fc.text, minWidth: 0 }} />
              <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', color: fc.icon, flexShrink: 0, transition: 'color 200ms ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = fc.linkHover; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = fc.icon; }}
              ><IconArrowRight /></button>
            </div>
          </FooterColumn>}
        </div>
      </div>

      {/* ═══ DIVIDER ═══ */}
      <div className="container-main"><div style={{ borderTop: `1px solid ${fc.divider}` }} /></div>

      {/* ═══ BOTTOM ═══ */}
      <div className="container-main" style={{ paddingTop: isPizza ? '40px' : '24px', paddingBottom: isPizza ? '40px' : '24px' }}>
        <div className="footer-bottom-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', rowGap: '10px' }}>
            {showCurrency && <UpwardDropdown selected={currency} options={currencyOptions} onSelect={setCurrency} isRtl={isRtlDemo} textColor={isMegastore ? '#111' : undefined} itemColor={isMegastore ? '#111' : undefined} triggerClassName={isMegastore ? 'mega-footer-dd-trigger' : undefined} itemClassName={isMegastore ? 'mega-footer-dd-item' : undefined} />}
            {showLanguage && <UpwardDropdown selected={language} options={languageOptions} onSelect={setLanguage} isRtl={isRtlDemo} textColor={isMegastore ? '#111' : undefined} itemColor={isMegastore ? '#111' : undefined} triggerClassName={isMegastore ? 'mega-footer-dd-trigger' : undefined} itemClassName={isMegastore ? 'mega-footer-dd-item' : undefined} />}
            {isMegastore && (
              <style>{`
                /* Defensive override — guarantees #111 even if some future
                   global rule with !important ever targets footer buttons.
                   Scoped to Megastore only via these classes; every other
                   storefront's footer is untouched.

                   The dropdown items' hover color is set by a JS
                   onMouseEnter/Leave handler (inline style, no !important),
                   which a blanket "!important" rule here would permanently
                   block (stylesheet !important always beats inline style).
                   ":not(:hover)" excludes the hovered state from this rule
                   so the JS-driven hover color keeps working unchanged. */
                .mega-footer-dd-trigger,
                .mega-footer-dd-trigger * {
                  color: #111 !important;
                }
                .mega-footer-dd-item:not(:hover) {
                  color: #111 !important;
                }
              `}</style>
            )}
          </div>

          {/* Center: Copyright */}
          <p style={{ fontSize: '14px', color: fc.text, textAlign: 'center' }}>
            {cfg ? cfg.copyright : '© 2026, Desenvolvido por HookThemes'}
          </p>

          {/* Right: Payment icons */}
          <div style={{ justifySelf: 'end' }}>
            {showPayments && (cfg?.payment_images?.length ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                {cfg.payment_images.map((item, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={i} src={item.src} alt={item.alt} style={{ height: `${cfg.payment_height ?? 24}px`, width: 'auto', maxWidth: '100%' }} />
                ))}
              </div>
            ) : <PaymentIcons />)}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ftDropUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ── Desktop / tablet (≥750px) — 4-column grid, headings static, bodies always open ── */
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }
        .ft-col-head {
          all: unset;
          display: block;
          font-size: 20px;
          font-weight: 700;
          color: #222;
          margin-bottom: 18px;
          cursor: default;
        }
        .ft-col-pizza .ft-col-head { color: #fff; }
        .ft-col-toggle { display: none; }
        .ft-col-body {
          display: block;
          overflow: visible;
        }
        .ft-col-body-inner { padding: 0; }

        /* ── Mobile (<750px) — stack columns, turn each heading into an accordion button ── */
        @media (max-width: 749px) {
          /* Use grid gap between column items instead of relying on body
             padding — keeps spacing consistent whether a panel is open or
             closed, and avoids margin collapse surprises. */
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .ft-col {
            border: 0;
          }
          .ft-col-head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0;
            padding: 4px;
            cursor: pointer;
            font-size: 18px;
            color: #222;
            background: transparent;
            border: 0;
          }
          .ft-col-toggle {
            display: inline-flex;
            color: #222;
          }
          .ft-col-pizza .ft-col-head { color: #fff; }
          .ft-col-pizza .ft-col-toggle { color: #fff; }
          /* grid-template-rows 0fr → 1fr trick so nested content auto-fits */
          .ft-col-body {
            display: grid;
            grid-template-rows: 0fr;
            opacity: 0;
            transition:
              grid-template-rows 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
              opacity 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          .ft-col-body.is-open {
            grid-template-rows: 1fr;
            opacity: 1;
          }
          .ft-col-body-inner {
            overflow: hidden;
            min-height: 0;
            padding: 0 4px;
          }
          /* Vertical padding only when accordion is open — keeps the closed
             state at exactly 0 height so consecutive ft-col items have no
             visible gap between them. */
          .ft-col-body.is-open .ft-col-body-inner {
            padding: 8px 4px 4px;
          }
          /* 20px gap between link items inside the expanded panel (down from
             the earlier 30px — keeps the accordion compact). */
          .ft-col-body-inner > div[style*="flex-direction: column"] {
            gap: 20px !important;
          }
        }

        /* ── Bottom row (copyright + dropdowns + payment) — stacks on mobile ── */
        @media (max-width: 749px) {
          .footer-bottom-grid {
            grid-template-columns: 1fr !important;
            gap: 20px;
            text-align: center;
          }
          .footer-bottom-grid > div { justify-self: center !important; }
          .footer-bottom-grid p { text-align: center !important; }
        }
      `}</style>
    </footer>
  );
}
