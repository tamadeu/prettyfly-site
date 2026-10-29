'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function IconArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
    </svg>
  );
}

function IconArrowUpRight({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
    </svg>
  );
}

const tabs = [
  {
    id: 'cleansers',
    title: 'Cleansers & Toners',
    description: 'Gentle yet effective cleansers that remove impurities without stripping your skin. Paired with balancing toners that prep your complexion for the next steps in your routine.',
    mediaType: 'image' as const,
    mediaSrc: '/skin-care/tab/tab2.webp',
  },
  {
    id: 'serums',
    title: 'Serums & Essences',
    description: 'High-potency serums and essences delivering concentrated actives deep into the skin. From vitamin C brightening to hyaluronic acid hydration — choose your skin goal.',
    mediaType: 'image' as const,
    mediaSrc: '/skin-care/tab/tab3.webp',
  },
  {
    id: 'body',
    title: 'Body & Hand Care',
    description: 'Indulge your skin with deeply hydrating formulas that soften, smooth and protect from head to toe. Our body and hand care range uses botanical extracts for lasting moisture.',
    mediaType: 'image' as const,
    mediaSrc: '/skin-care/tab/tab1.webp',
  },
];

export function SkinCareTabSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section>
      <div className="container-main">
        <div className="sktab-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0px' }}>

          {/* LEFT: Media — all layers pre-rendered, crossfade on tab change */}
          <div
            className="sktab-media"
            style={{ position: 'relative', height: '750px', overflow: 'hidden', backgroundColor: '#f5f5f5', borderRadius: '12px' }}
          >
            {tabs.map((tab, i) => (
              <div
                key={tab.id}
                style={{
                  position: 'absolute',
                  inset: 0,
                  transition: 'opacity 600ms ease, transform 600ms ease',
                  opacity: activeTab === i ? 1 : 0,
                  transform: activeTab === i ? 'scale(1)' : 'scale(1.03)',
                  pointerEvents: activeTab === i ? 'auto' : 'none',
                  zIndex: activeTab === i ? 2 : 1,
                }}
              >
                <Image
                  src={tab.mediaSrc}
                  alt={tab.title}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  sizes="(min-width: 750px) 50vw, 100vw"
                />
              </div>
            ))}
          </div>

          {/* RIGHT: Vertically centred content */}
          <div
            className="sktab-content"
            style={{
              height: '750px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              paddingLeft: '60px',
              paddingRight: '40px',
            }}
          >
            {/* Tab rows — hover activates */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', marginBottom: '32px' }}>
              {tabs.map((tab, i) => (
                <div
                  key={tab.id}
                  className="sktab-row"
                  onMouseEnter={() => setActiveTab(i)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '20px 0',
                    borderBottom: '1px solid #e5e5e5',
                    cursor: 'pointer',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '28px',
                      fontWeight: 600,
                      color: activeTab === i ? '#222' : '#888',
                      transition: 'color 250ms ease',
                    }}
                  >
                    {tab.title}
                  </h3>
                  <span
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      border: activeTab === i ? 'none' : '1.5px solid #e0e0e0',
                      backgroundColor: activeTab === i ? '#111' : 'transparent',
                      color: activeTab === i ? '#fff' : '#222',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 300ms ease',
                    }}
                  >
                    <IconArrowUpRight size={18} />
                  </span>
                </div>
              ))}
            </div>

            {/* Description — stacked; i===0 is position:relative to set container height */}
            <div style={{ position: 'relative', minHeight: '80px', marginBottom: '32px' }}>
              {tabs.map((tab, i) => (
                <p
                  key={tab.id}
                  style={{
                    position: i === 0 ? 'relative' : 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    fontSize: '15px',
                    color: '#777',
                    lineHeight: 1.7,
                    transition: 'opacity 500ms ease, transform 500ms ease',
                    opacity: activeTab === i ? 1 : 0,
                    transform: activeTab === i ? 'translateY(0)' : 'translateY(8px)',
                    pointerEvents: activeTab === i ? 'auto' : 'none',
                  }}
                >
                  {tab.description}
                </p>
              ))}
            </div>

            {/* CTA — pill shape, hover to accent */}
            <div>
              <Link
                href="/shop"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#111',
                  color: '#fff',
                  fontSize: '15px',
                  fontWeight: 500,
                  padding: '14px 28px',
                  borderRadius: '40px',
                  textDecoration: 'none',
                  transition: 'background-color 250ms ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#b8919a'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#111'; }}
              >
                Shop Collection
                <IconArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 749px) {
          .sktab-grid { grid-template-columns: 1fr !important; }
          .sktab-media { height: clamp(260px, 55vw, 420px) !important; border-radius: 8px !important; }
          .sktab-content {
            height: auto !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            padding-top: 28px !important;
          }
          .sktab-row h3 { font-size: clamp(18px, 4.5vw, 24px) !important; }
        }
      `}</style>
    </section>
  );
}
