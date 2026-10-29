'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { useClickOutside } from '@/hooks/useClickOutside';
import { useMainSiteConfig } from './MainSiteConfig';
import type { TopbarConfig } from '@/lib/backend';

/* ──────────────────────────────────
   Remix Icon SVGs
   ────────────────────────────────── */

function IconTwitterX({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M10.4883 14.651L15.25 21H22.25L14.3917 10.5223L20.9308 3H18.2808L13.1643 8.88578L8.75 3H1.75L9.26086 13.0145L2.31915 21H4.96917L10.4883 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z" />
    </svg>
  );
}

function IconFacebook({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z" />
    </svg>
  );
}

function IconInstagram({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z" />
    </svg>
  );
}

function IconTikTok({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M16 8.24537V15.5C16 19.0899 13.0899 22 9.5 22C5.91015 22 3 19.0899 3 15.5C3 11.9101 5.91015 9 9.5 9C10.0163 9 10.5185 9.06019 11 9.17393V12.3368C10.5454 12.1208 10.0368 12 9.5 12C7.567 12 6 13.567 6 15.5C6 17.433 7.567 19 9.5 19C11.433 19 13 17.433 13 15.5V2H16C16 4.76142 18.2386 7 21 7V10C19.1081 10 17.3696 9.34328 16 8.24537Z" />
    </svg>
  );
}

function IconLinkedIn({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z" />
    </svg>
  );
}

function IconArrowLeftS({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
    </svg>
  );
}

function IconArrowRightS({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}

function IconArrowDownS({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
    </svg>
  );
}

/* ──────────────────────────────────
   Data
   ────────────────────────────────── */

const socialLinks = [
  { name: 'Twitter', Icon: IconTwitterX, href: '#' },
  { name: 'Facebook', Icon: IconFacebook, href: '#' },
  { name: 'Instagram', Icon: IconInstagram, href: '#' },
  { name: 'TikTok', Icon: IconTikTok, href: '#' },
  { name: 'LinkedIn', Icon: IconLinkedIn, href: '#' },
];

const defaultAnnouncements = [
  'Boas-vindas à nossa loja →',
  'Frete grátis em pedidos acima de US$ 150 →',
  'Acabaram de chegar novidades →',
];

const currencies = [
  'Bangladesh — USD $',
  'Canadá — USD $',
  'Alemanha — USD $',
  'Países Baixos — USD $',
  'Noruega — USD $',
  'Reino Unido — USD $',
  'Estados Unidos — USD $',
];

const languages = [
  'Português (Brasil)',
  'Español',
  'Français',
  'English',
];

/* ──────────────────────────────────
   Dropdown
   ────────────────────────────────── */

interface DropdownProps {
  selected: string;
  options: string[];
  onSelect: (value: string) => void;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  /** Trigger label/chevron color. Defaults to `#fff` (fashion). */
  textColor?: string;
}

function Dropdown({ selected, options, onSelect, isOpen, onToggle, onClose, textColor = '#fff' }: DropdownProps) {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, onClose);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  return (
    <div ref={ref} style={{ position: 'relative', zIndex: isOpen ? 999 : 'auto' }}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="true"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          fontSize: '14px',
          color: textColor,
          cursor: 'pointer',
          background: 'none',
          border: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        {selected}
        <span
          style={{
            display: 'inline-flex',
            transition: 'transform 300ms ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <IconArrowDownS size={18} />
        </span>
      </button>

      {isOpen && (
        <div
          role="menu"
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: 0,
            minWidth: '220px',
            backgroundColor: '#fff',
            border: '1px solid #e5e5e5',
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
            paddingTop: '12px',
            paddingBottom: '12px',
            zIndex: 999,
            animation: 'slideUp 200ms ease-out',
          }}
        >
          {options.map((option) => (
            <button
              key={option}
              role="menuitem"
              onClick={() => { onSelect(option); onClose(); }}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                padding: '10px 24px',
                fontSize: '14px',
                color: '#222',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#F15B41'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#222'; }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ──────────────────────────────────
   Pure CSS Horizontal Slider
   ────────────────────────────────── */

function useSlider(total: number, autoplay: boolean) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const goNext = useCallback(() => {
    setDirection('next');
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setDirection('prev');
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-rotate through the messages when enabled; manual prev/next always
  // work regardless of autoplay and reset the timer via the goNext dependency
  // below (when autoplay is on).
  useEffect(() => {
    if (!autoplay || total <= 1) return;
    const id = setInterval(goNext, 5000);
    return () => clearInterval(id);
  }, [autoplay, total, goNext]);

  return { current, direction, goNext, goPrev };
}

/* ──────────────────────────────────
   AnnouncementBar
   ────────────────────────────────── */

interface AnnouncementBarProps {
  /** Background color of the bar. Defaults to `#000` (fashion). */
  backgroundColor?: string;
  /** Sliding announcement text(s). Defaults to the fashion copy. */
  announcements?: string[];
  /** Bar height. Defaults to `40px` (fashion). */
  height?: string;
  /** Text/icon color. Defaults to `#fff` (fashion) — override on light backgrounds. */
  textColor?: string;
  /** Auto-rotate the announcement slider every 5s. Defaults to `false` —
   *  project-wide, messages only change via the prev/next nav buttons. */
  autoplay?: boolean;
}

const SOCIAL_ICONS: Record<string, { name: string; Icon: (props: { size?: number }) => React.JSX.Element }> = {
  twitter: { name: 'Twitter', Icon: IconTwitterX },
  facebook: { name: 'Facebook', Icon: IconFacebook },
  instagram: { name: 'Instagram', Icon: IconInstagram },
  tiktok: { name: 'TikTok', Icon: IconTikTok },
  linkedin: { name: 'LinkedIn', Icon: IconLinkedIn },
};

export function AnnouncementBar(props: AnnouncementBarProps = {}) {
  const topbar = useMainSiteConfig()?.topbar;
  if (topbar && !topbar.enabled) return null;
  return <AnnouncementBarView {...props} topbar={topbar ?? null} />;
}

function AnnouncementBarView({ topbar, ...props }: AnnouncementBarProps & { topbar: TopbarConfig | null }) {
  const backgroundColor = topbar?.background ?? props.backgroundColor ?? '#000';
  const textColor = topbar?.text_color ?? props.textColor ?? '#fff';
  const height = props.height ?? '40px';
  const autoplay = topbar?.autoplay ?? props.autoplay ?? false;
  const announcements = topbar?.announcements.length ? topbar.announcements : (props.announcements ?? defaultAnnouncements);
  const socials = topbar
    ? topbar.socials.flatMap((s) => (SOCIAL_ICONS[s.network] ? [{ ...SOCIAL_ICONS[s.network], href: s.href }] : []))
    : socialLinks;
  const currencyOptions = topbar ? topbar.currencies : currencies;
  const languageOptions = topbar ? topbar.languages : languages;
  const showCurrency = topbar ? topbar.show_currency && currencyOptions.length > 0 : true;
  const showLanguage = topbar ? topbar.show_language && languageOptions.length > 0 : true;
  const { current, direction, goNext, goPrev } = useSlider(announcements.length, autoplay);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(currencyOptions[0] ?? '');
  const [selectedLanguage, setSelectedLanguage] = useState(
    () => languageOptions.find((language) => language.toLocaleLowerCase().includes('portugu')) ?? languageOptions[0] ?? '',
  );

  const toggleCurrency = useCallback(() => {
    setCurrencyOpen((p) => !p);
    setLanguageOpen(false);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageOpen((p) => !p);
    setCurrencyOpen(false);
  }, []);

  const closeCurrency = useCallback(() => setCurrencyOpen(false), []);
  const closeLanguage = useCallback(() => setLanguageOpen(false), []);

  return (
    <div style={{ backgroundColor, color: textColor, height, position: 'relative', overflow: 'visible' }}>
      <div
        className="container-main announce-grid"
        style={{
          height: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 2fr 1fr',
          alignItems: 'center',
        }}
      >
        {/* ── Column 1: Social Icons ── */}
        <div className="announce-social" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {socials.map(({ name, Icon, href }) => (
            <a
              key={name}
              href={href}
              aria-label={name}
              style={{ color: 'inherit', display: 'flex' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#F15B41'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'inherit'; }}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* ── Column 2: Announcement Slider — extends full 2fr width ── */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <button
            onClick={goPrev}
            aria-label="Aviso anterior"
            style={{ background: 'none', border: 'none', color: textColor, cursor: 'pointer', display: 'flex', padding: 0, flexShrink: 0 }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#F15B41'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = textColor; }}
          >
            <IconArrowLeftS size={20} />
          </button>

          <div style={{ position: 'relative', overflow: 'hidden', height: '20px', flex: '1 1 0%', margin: '0 12px' }}>
            {announcements.map((text, i) => {
              const isActive = i === current;
              const offset = direction === 'next' ? '100%' : '-100%';
              return (
                <span
                  key={i}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                    transition: 'transform 600ms ease, opacity 600ms ease',
                    transform: isActive ? 'translateX(0)' : `translateX(${offset})`,
                    opacity: isActive ? 1 : 0,
                  }}
                >
                  {text}
                </span>
              );
            })}
          </div>

          <button
            onClick={goNext}
            aria-label="Próximo aviso"
            style={{ background: 'none', border: 'none', color: textColor, cursor: 'pointer', display: 'flex', padding: 0, flexShrink: 0 }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#F15B41'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = textColor; }}
          >
            <IconArrowRightS size={20} />
          </button>
        </div>

        {/* ── Column 3: Currency & Language Dropdowns ── */}
        <div className="announce-dropdowns" style={{ display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'flex-end' }}>
          {showCurrency && <Dropdown
            selected={selectedCurrency}
            options={currencyOptions}
            onSelect={setSelectedCurrency}
            isOpen={currencyOpen}
            onToggle={toggleCurrency}
            onClose={closeCurrency}
            textColor={textColor}
          />}
          {showLanguage && <Dropdown
            selected={selectedLanguage}
            options={languageOptions}
            onSelect={setSelectedLanguage}
            isOpen={languageOpen}
            onToggle={toggleLanguage}
            onClose={closeLanguage}
            textColor={textColor}
          />}
        </div>
      </div>
    </div>
  );
}
