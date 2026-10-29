'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { fromIndex, records, text, type CmsContent } from '../cms';

function IconArrowUpRight({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
    </svg>
  );
}
function IconChevron({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
  );
}
function IconPlay({ size = 24 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z" />
    </svg>
  );
}

/* Same clip as the Footwear homepage Video section. */
const VIDEO_EMBED = 'https://www.youtube.com/embed/_9VUPq3SxOc?autoplay=1&rel=0';

const defaultTabs = [
  {
    id: 'strength',
    title: 'Descubra sua força',
    description: 'Destaque seu produto, coleção ou publicação com uma imagem e conte mais sobre disponibilidade, estilo ou avaliações.',
    image: '/active-wear/tab/tab-1.webp',
  },
  {
    id: 'gym',
    title: 'Supere seus limites',
    description: 'Peças essenciais de alto desempenho, feitas para acompanhar seus movimentos: tecidos que afastam o suor e oferecem suporte em cada série e corrida.',
    image: '/active-wear/tab/tab-2.webp',
  },
  {
    id: 'glam',
    title: 'Coleção Glam Fit',
    description: 'Desempenho com estilo. Modelagens que valorizam o corpo e tecidos premium para você ir do estúdio direto para a rua.',
    image: '/active-wear/tab/tab-3.webp',
  },
];

/* Only the second tab ("Dominate the Gym") carries the play button / video. */
const VIDEO_TAB = 1;

export function ActiveWearTabContent({ content }: { content?: CmsContent }) {
  const cmsTabs = records(content?.tabs);
  const tabs = cmsTabs.length
    ? cmsTabs.map((t, i) => ({
        id: `cms-${i}`,
        title: text(t.title, fromIndex(defaultTabs, i).title),
        description: text(t.description, fromIndex(defaultTabs, i).description),
        image: text(t.image, fromIndex(defaultTabs, i).image),
      }))
    : defaultTabs;
  const videoEmbed = text(content?.video_url, VIDEO_EMBED);
  const [activeTab, setActiveTab] = useState(0);
  const [playing, setPlaying] = useState(false);

  // Switching to any other tab hides the play button and stops the video.
  const selectTab = (i: number) => {
    setActiveTab(i);
    if (i !== VIDEO_TAB) setPlaying(false);
  };

  return (
    <section>
      <div className="container-main">
        <div className="awtab-grid">

          {/* ═══ LEFT: Media — play button / inline video only on the second tab ═══ */}
          <div className="awtab-media">
            {playing && activeTab === VIDEO_TAB ? (
              <iframe
                className="awtab-iframe"
                src={videoEmbed}
                title="Vídeo sobre roupas esportivas"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <>
                {tabs.map((tab, i) => (
                  <div
                    key={tab.id}
                    className="awtab-media-layer"
                    style={{
                      opacity: activeTab === i ? 1 : 0,
                      transform: activeTab === i ? 'scale(1)' : 'scale(1.03)',
                      pointerEvents: activeTab === i ? 'auto' : 'none',
                      zIndex: activeTab === i ? 2 : 1,
                    }}
                  >
                    <Image
                      src={tab.image}
                      alt={tab.title}
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                      sizes="(max-width: 991px) 100vw, 50vw"
                    />
                  </div>
                ))}

                {activeTab === VIDEO_TAB && (
                  <button
                    type="button"
                    className="awtab-play"
                    aria-label="Reproduzir vídeo"
                    onClick={() => setPlaying(true)}
                  >
                    <IconPlay size={24} />
                  </button>
                )}
              </>
            )}
          </div>

          {/* ═══ RIGHT: Tabs + description + CTA ═══ */}
          <div className="awtab-content">
            <div className="awtab-list">
              {tabs.map((tab, i) => (
                <div
                  key={tab.id}
                  className="awtab-row"
                  onMouseEnter={() => selectTab(i)}
                  onClick={() => selectTab(i)}
                >
                  <h3 className="awtab-row-title">{tab.title}</h3>
                  <span
                    className="awtab-row-arrow"
                    style={{
                      backgroundColor: activeTab === i ? '#111' : '#f0f0f0',
                      color: activeTab === i ? '#fff' : '#222',
                    }}
                  >
                    <IconArrowUpRight size={20} />
                  </span>
                </div>
              ))}
            </div>

            <div className="awtab-desc-wrap">
              {tabs.map((tab, i) => (
                <p
                  key={tab.id}
                  className="awtab-desc"
                  style={{
                    position: i === 0 ? 'relative' : 'absolute',
                    opacity: activeTab === i ? 1 : 0,
                    transform: activeTab === i ? 'translateY(0)' : 'translateY(8px)',
                    pointerEvents: activeTab === i ? 'auto' : 'none',
                  }}
                >
                  {tab.description}
                </p>
              ))}
            </div>

            <div>
              <Link href={text(content?.button_url, '/shop')} className="awtab-cta">
                {text(content?.button_label, 'Ver coleção')}
                <IconChevron size={20} />
              </Link>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .awtab-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
        }
        .awtab-media {
          position: relative;
          overflow: hidden;
          background-color: #efece8;
          height: clamp(360px, 90vw, 560px);
        }
        .awtab-media-layer {
          position: absolute;
          inset: 0;
          transition: opacity 600ms ease, transform 600ms ease;
        }

        .awtab-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .awtab-list {
          display: flex;
          flex-direction: column;
          margin-bottom: 28px;
        }
        .awtab-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 22px 0;
          border-bottom: 1px solid #e5e5e5;
          cursor: pointer;
        }
        .awtab-row-title {
          font-size: clamp(22px, 2.4vw, 28px);
          font-weight: 700;
          color: #111;
          line-height: 1.2;
        }
        .awtab-row-arrow {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 280ms ease, color 280ms ease;
        }
        .awtab-desc-wrap {
          position: relative;
          min-height: 90px;
          margin-bottom: 28px;
        }
        .awtab-desc {
          top: 0;
          left: 0;
          right: 0;
          font-size: 15px;
          color: #777;
          line-height: 1.7;
          max-width: 480px;
          transition: opacity 500ms ease, transform 500ms ease;
        }
        .awtab-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: #111;
          color: #fff;
          font-size: 17px;
          font-weight: 500;
          padding: 16px 32px;
          text-decoration: none;
          transition: background-color 250ms ease, transform 250ms ease;
        }
        .awtab-cta:hover { background-color: #333; transform: translateY(-2px); }

        /* ── Play button + inline video (Footwear video clip) ── */
        .awtab-iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
          z-index: 3;
        }
        .awtab-play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 4;
          width: 86px;
          height: 86px;
          border-radius: 50%;
          border: none;
          background-color: rgba(255,255,255,0.92);
          color: #111;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 250ms ease, background-color 250ms ease;
        }
        .awtab-play::before,
        .awtab-play::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.55);
          animation: awtabPulse 2400ms ease-out infinite;
        }
        .awtab-play::after { animation-delay: 1200ms; }
        .awtab-play:hover {
          transform: translate(-50%, -50%) scale(1.08);
          background-color: #fff;
        }
        @keyframes awtabPulse {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.7); opacity: 0; }
        }

        @media (min-width: 992px) {
          .awtab-grid { grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
          .awtab-media { height: 720px; }
        }
      `}</style>
    </section>
  );
}
