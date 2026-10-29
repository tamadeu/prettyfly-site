'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* ── Arrow Icons ── */

function IconArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
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

/* ── Tab Data ── */

const tabs = [
  {
    id: 'organized',
    title: 'Stay Organized on the Go',
    description: 'Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.',
    mediaSrc: '/backpack/tab/tab-1.webp',
  },
  {
    id: 'essential',
    title: 'Your Travel Essential',
    description: 'Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.',
    mediaSrc: '/backpack/tab/tab-2.webp',
  },
  {
    id: 'explorer',
    title: 'Unleash Your Inner Explorer',
    description: 'Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.',
    mediaSrc: '/backpack/tab/tab-3.webp',
  },
];

/* ── Component ── */

export function BackpackTabContent() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section>
      <div className="container-main">
        <div className="bp-tab-grid">

          {/* ═══ LEFT: Media ═══ */}
          <div className="bp-tab-media" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#f5f5f5' }}>
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
                  sizes="50vw"
                />
              </div>
            ))}
          </div>

          {/* ═══ RIGHT: Content ═══ */}
          <div className="bp-tab-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {/* Tab list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', marginBottom: '32px' }}>
              {tabs.map((tab, i) => (
                <div
                  key={tab.id}
                  onMouseEnter={() => setActiveTab(i)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '22px 0',
                    borderBottom: '1px solid #e5e5e5',
                    cursor: 'pointer',
                    transition: 'all 250ms ease',
                  }}
                >
                  <h3
                    style={{
                      fontSize: 'clamp(18px, 4vw, 26px)',
                      fontWeight: 700,
                      color: activeTab === i ? '#1a1a1a' : '#999',
                      transition: 'color 250ms ease',
                    }}
                  >
                    {tab.title}
                  </h3>

                  <span
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: activeTab === i ? '4px' : '4px',
                      border: activeTab === i ? 'none' : '1.5px solid #e0e0e0',
                      backgroundColor: activeTab === i ? '#111' : '#f3f3f3',
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

            {/* Description — fades with tab change */}
            <div style={{ position: 'relative', minHeight: '70px', marginBottom: '32px' }}>
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

            {/* CTA */}
            <div>
              <Link
                href="/shop"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#000',
                  color: '#fff',
                  fontSize: '17px',
                  fontWeight: 500,
                  padding: '14px 28px',
                  textDecoration: 'none',
                  transition: 'background-color 250ms ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#333'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#000'; }}
              >
                Shop Collection
                <IconArrowRight size={19} />
              </Link>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .bp-tab-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
        }
        .bp-tab-media {
          height: clamp(320px, 80vw, 500px);
        }
        .bp-tab-content {
          padding: 32px 0 0;
        }

        @media (min-width: 750px) {
          .bp-tab-media { height: 560px; }
          .bp-tab-content { padding: 24px 0 0 40px; }
        }

        @media (min-width: 992px) {
          .bp-tab-grid { grid-template-columns: 1fr 1fr; gap: clamp(40px, 5vw, 80px); }
          .bp-tab-media { height: 750px; }
          .bp-tab-content { height: 750px; padding: 0; }
        }
      `}</style>
    </section>
  );
}
