'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function IconArrowUpRight({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
    </svg>
  );
}

function IconArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3647L8.22192 16.9505L13.1717 12.0007Z" />
    </svg>
  );
}

interface TabItem {
  id: string;
  title: string;
  description: string;
  mediaType: 'image';
  mediaSrc: string;
}

const tabs: TabItem[] = [
  {
    id: 'mesh-runners',
    title: 'Mesh Runners',
    description: 'Ultra-light mesh construction keeps your feet cool and agile on every run — built for speed, designed for all-day comfort.',
    mediaType: 'image',
    mediaSrc: '/sneaker/tab/tab1.webp',
  },
  {
    id: 'street-classics',
    title: 'Street Classics',
    description: 'Timeless silhouettes reimagined for the modern street — clean lines, premium materials, and a sole that takes you anywhere.',
    mediaType: 'image',
    mediaSrc: '/sneaker/tab/tab2.webp',
  },
  {
    id: 'trail-kings',
    title: 'Trail Kings',
    description: 'Rugged outsoles and cushioned midsoles for the trail-blazers who demand grip without sacrificing style or comfort.',
    mediaType: 'image',
    mediaSrc: '/sneaker/tab/tab3.webp',
  },
];

export function SneakerTabContentSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section>
      <div className="container-main">
        <div className="sntab-grid">

          {/* LEFT — media layers */}
          <div className="sntab-media">
            {tabs.map((tab, i) => (
              <div
                key={tab.id}
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: activeTab === i ? 1 : 0,
                  transform: activeTab === i ? 'scale(1)' : 'scale(1.03)',
                  transition: 'opacity 600ms ease, transform 600ms ease',
                  pointerEvents: activeTab === i ? 'auto' : 'none',
                }}
              >
                <Image
                  src={tab.mediaSrc}
                  alt={tab.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(min-width: 750px) 50vw, 100vw"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          {/* RIGHT — tab list + desc + CTA */}
          <div className="sntab-content">
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '32px' }}>
              {tabs.map((tab, i) => (
                <div
                  key={tab.id}
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
                      color: activeTab === i ? '#222' : '#bbb',
                      transition: 'color 250ms ease',
                      margin: 0,
                    }}
                  >
                    {tab.title}
                  </h3>
                  <span
                    className="sntab-arrow-btn"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: activeTab === i ? '#e84d1c' : 'transparent',
                      color: activeTab === i ? '#fff' : '#222',
                      border: activeTab === i ? 'none' : '1.5px solid #e0e0e0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'background 300ms ease, color 300ms ease, border-color 300ms ease',
                    }}
                  >
                    <IconArrowUpRight size={18} />
                  </span>
                </div>
              ))}
            </div>

            {/* Description */}
            <div style={{ position: 'relative', minHeight: '80px', marginBottom: '32px' }}>
              {tabs.map((tab, i) => (
                <p
                  key={tab.id}
                  style={{
                    ...(i === 0 ? { position: 'relative' } : { position: 'absolute', top: 0 }),
                    opacity: activeTab === i ? 1 : 0,
                    transform: activeTab === i ? 'translateY(0)' : 'translateY(8px)',
                    transition: 'opacity 500ms ease, transform 500ms ease',
                    fontSize: '15px',
                    color: '#777',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {tab.description}
                </p>
              ))}
            </div>

            <Link
              href="/shop"
              className="sntab-cta"
              onMouseEnter={(e) => { e.currentTarget.style.background = '#e84d1c'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#111'; e.currentTarget.style.color = '#fff'; }}
            >
              Shop Collection <IconArrowRight size={14} />
            </Link>
          </div>

        </div>
      </div>

      <style>{`
        .sntab-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }
        .sntab-media {
          position: relative;
          height: 750px;
          overflow: hidden;
          border-radius: 12px;
          background: #f5f5f5;
        }
        .sntab-content {
          height: 750px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 60px;
          padding-right: 40px;
        }
        .sntab-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #111;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          padding: 14px 28px;
          border-radius: 40px;
          text-decoration: none;
          transition: background 250ms ease, color 250ms ease;
          align-self: flex-start;
        }

        @media (max-width: 749px) {
          .sntab-grid { grid-template-columns: 1fr; }
          .sntab-media {
            height: clamp(260px, 55vw, 420px);
            border-radius: 8px;
          }
          .sntab-content {
            height: auto;
            padding-left: 0;
            padding-right: 0;
            padding-top: 28px;
          }
          .sntab-content h3 {
            font-size: clamp(18px, 4.5vw, 24px) !important;
          }
        }
        @media (min-width: 750px) and (max-width: 991px) {
          .sntab-media { height: 600px; }
          .sntab-content { height: 600px; padding-left: 40px; }
        }
      `}</style>
    </section>
  );
}
